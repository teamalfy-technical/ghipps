"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

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
}

export function BookLayout({ children, className }: BookLayoutProps) {
    const [isPrintView, setIsPrintView] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [userName, setUserName] = useState("");

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
                            className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur border border-zinc-200 dark:border-zinc-800 hover:bg-[#FF0055] hover:text-white transition-colors gap-2"
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
                        "flex-1 relative overflow-y-auto overflow-x-hidden scroll-smooth",
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
                        className="shrink-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-900 p-4 z-50 w-full print:hidden"
                    >
                        <div className="max-w-5xl mx-auto flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={prevPage}
                                    disabled={currentPage === 0}
                                    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    Previous
                                </Button>
                                <div className="text-zinc-500 dark:text-zinc-500 text-sm font-mono hidden sm:block">
                                    Page {currentPage} of {totalPages - 1}
                                </div>
                            </div>

                            <div className="text-zinc-500 text-sm font-mono sm:hidden">
                                {currentPage} / {totalPages - 1}
                            </div>

                            <div className="flex items-center gap-4">
                                <Button
                                    variant="default"
                                    size="sm"
                                    onClick={nextPage}
                                    disabled={currentPage >= totalPages - 1}
                                    className="bg-[#FF0055] hover:bg-[#D90049] text-white"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </BookContext.Provider>
    );
}
