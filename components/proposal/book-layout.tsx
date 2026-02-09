"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

// Context for book navigation and state
interface BookContextType {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (page: number) => void;
    isUnlocked: boolean;
    unlock: () => void;
    userName: string;
    setUserName: (name: string) => void;
    sessionId: string;
    setSessionId: (id: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function useBook() {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error("useBook must be used within a BookLayout");
    }
    return context;
}

interface BookLayoutProps {
    children: React.ReactNode[];
    className?: string;
    pageTitles?: string[];
}

export function BookLayout({ children, className, pageTitles }: BookLayoutProps) {
    const [isPrintView, setIsPrintView] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [userName, setUserName] = useState("");
    const [sessionId, setSessionId] = useState("");

    // Check if children is valid array to prevent errors
    const pages = React.Children.toArray(children);
    const totalPages = pages.length;
    const contentRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1 && isUnlocked) {
            setCurrentPage((prev) => prev + 1);
            scrollToTop();
        }
    };

    const prevPage = () => {
        if (currentPage > 0 && isUnlocked) {
            setCurrentPage((prev) => prev - 1);
            scrollToTop();
        }
    };

    const goToPage = (page: number) => {
        if (page >= 0 && page < totalPages && isUnlocked) {
            setCurrentPage(page);
            scrollToTop();
        }
    };

    const unlock = () => {
        setIsUnlocked(true);
        if (currentPage === 0) {
            setCurrentPage(1);
        }
        setTimeout(scrollToTop, 100);
    };

    // Print/PDF functionality
    useEffect(() => {
        if (isPrintView) {
            // Wait for render cycle to complete and assets to load
            const timer = setTimeout(async () => {
                try {
                    // Import dynamically to avoid SSR issues
                    const { generatePdf } = await import("@/lib/generate-pdf");

                    // Generate IDs for the pages we rendered
                    const pageIds = Array.from({ length: totalPages }).map((_, i) => `proposal-page-${i}`);

                    await generatePdf(pageIds, "Ananseum_GhIPSS_Proposal.pdf");
                } catch (error) {
                    console.error("PDF Generation failed:", error);
                } finally {
                    // Revert to interactive view after download
                    setIsPrintView(false);
                }
            }, 1000); // 1s wait for Framer Motion / Images to settle
            return () => clearTimeout(timer);
        }
    }, [isPrintView, totalPages]);

    // Prevent navigation if locked
    useEffect(() => {
        if (!isUnlocked && currentPage !== 0) {
            setCurrentPage(0);
        }
    }, [isUnlocked, currentPage]);

    // Page view tracking
    const pageViewRef = useRef<{ viewId: string; startTime: number } | null>(null);

    useEffect(() => {
        if (!sessionId || currentPage === 0) return;

        const trackPageView = async () => {
            try {
                // Log exit for previous page
                if (pageViewRef.current) {
                    const { logPageExit } = await import("@/lib/analytics");
                    const { Timestamp } = await import("firebase/firestore");
                    const startTimestamp = Timestamp.fromMillis(pageViewRef.current.startTime);
                    await logPageExit(pageViewRef.current.viewId, startTimestamp);
                }

                // Log entry for new page
                const { logPageView, updateSessionActivity } = await import("@/lib/analytics");
                const viewId = await logPageView(sessionId, currentPage);
                pageViewRef.current = { viewId, startTime: Date.now() };

                // Update session activity
                await updateSessionActivity(sessionId);
            } catch (error) {
                console.error("Page tracking failed:", error);
            }
        };

        trackPageView();

        // Cleanup on unmount or page change
        return () => {
            if (pageViewRef.current) {
                const { viewId, startTime } = pageViewRef.current;
                import("@/lib/analytics").then(async ({ logPageExit }) => {
                    const { Timestamp } = await import("firebase/firestore");
                    const startTimestamp = Timestamp.fromMillis(startTime);
                    await logPageExit(viewId, startTimestamp);
                }).catch(console.error);
            }
        };
    }, [sessionId, currentPage]);

    return (
        <BookContext.Provider
            value={{
                currentPage,
                totalPages,
                nextPage,
                prevPage,
                goToPage,
                isUnlocked,
                unlock,
                userName,
                setUserName,
                sessionId,
                setSessionId,
            }}
        >
            <div className={cn(
                "h-full w-full bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-hidden flex flex-col transition-colors duration-300 relative",
                className,
                isPrintView && "h-auto overflow-visible"
            )}>

                {/* Header Controls */}
                <div className="absolute top-6 right-6 z-[100] flex items-center gap-2 print:hidden">
                    {isUnlocked && currentPage > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsPrintView(true)}
                            className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur border border-zinc-200 dark:border-zinc-800 hover:bg-ghipss-blue hover:text-white transition-colors gap-2"
                            title="Download PDF"
                            disabled={isPrintView}
                        >
                            <Printer className="w-4 h-4" />
                            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                                {isPrintView ? "Generating..." : "Download PDF"}
                            </span>
                        </Button>
                    )}
                    <ThemeToggle />
                </div>

                {/* Main Content Area */}
                <div
                    ref={contentRef}
                    className={cn(
                        "flex-1 relative overflow-y-auto overflow-x-hidden scroll-smooth pb-20 md:pb-0", // Mobile: add space for fixed nav
                        isPrintView && "overflow-visible h-auto bg-white" // Force white bg for capture
                    )}
                >
                    {isPrintView ? (
                        // Print Mode: Render ALL pages vertically with IDs for capture
                        <div className="w-full h-auto flex flex-col print-container">
                            {pages.map((page, index) => (
                                <div
                                    key={index}
                                    id={`proposal-page-${index}`}
                                    className="w-full min-h-screen break-after-page relative overflow-hidden bg-white dark:bg-zinc-950"
                                >
                                    {page}
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Interactive Mode: Render active page
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-full flex flex-col"
                            >
                                <div className="flex-1 flex flex-col h-full w-full">
                                    {pages[currentPage]}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>

                {/* Navigation Bar - Hidden during print */}
                {!isPrintView && isUnlocked && currentPage > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed bottom-0 left-0 right-0 md:relative md:inset-auto shrink-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-900 p-4 z-50 w-full print:hidden"
                    >
                        <div className="max-w-7xl mx-auto flex items-center justify-between relative px-6 w-full">
                            {/* Left: Previous Button */}
                            <div className="flex-1 flex justify-start">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={prevPage}
                                    disabled={currentPage === 0}
                                    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white pl-0 hover:bg-transparent"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-1" />
                                    <span className="font-medium">Previous</span>
                                </Button>
                            </div>

                            {/* Center: Logo & Page Number */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group">
                                <div className="relative h-10 w-32 md:h-12 md:w-40 transition-transform duration-300 group-hover:scale-105">
                                    <Image
                                        src="/images/ghipss-logo.png"
                                        alt="GhIPSS"
                                        fill
                                        className="object-contain dark:brightness-200"
                                    />
                                </div>
                                <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    Page {currentPage} of {totalPages - 1}
                                </div>
                            </div>

                            {/* Right: Next Button */}
                            <div className="flex-1 flex justify-end">
                                <Button
                                    variant="default"
                                    size="lg"
                                    onClick={nextPage}
                                    disabled={currentPage >= totalPages - 1}
                                    className="bg-ghipss-blue hover:bg-[#002244] text-white rounded-full px-6 shadow-lg shadow-ghipss-blue/20 hover:shadow-ghipss-blue/40 transition-all font-bold group"
                                >
                                    <span className="flex flex-col items-start text-left mr-1">
                                        <span className="text-[10px] uppercase opacity-70 font-normal tracking-wider leading-none mb-0.5">Next Phase</span>
                                        <span className="text-sm">{pageTitles?.[currentPage + 1] || "Next"}</span>
                                    </span>
                                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </BookContext.Provider>
    );
}
