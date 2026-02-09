"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBook } from "./book-layout";
import Image from "next/image";
import { checkWhitelist, logSessionStart } from "@/lib/analytics";

export function CoverPage() {
    const { unlock, setUserName, setSessionId } = useBook();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleUnlock = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (!name.trim()) {
            setError("Please enter your name.");
            setIsLoading(false);
            return;
        }

        try {
            const isValid = await checkWhitelist(email);

            if (isValid) {
                // Determine device type
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                const device = isMobile ? "mobile" : "desktop";

                // Log session start
                const sessionId = await logSessionStart(name, email, device);
                setSessionId(sessionId);

                setUserName(name.split(" ")[0]);
                unlock();
            } else {
                setError("Email not authorized. Please use your official GhIPSS email.");
                setIsLoading(false);
            }
        } catch (err) {
            console.error("Auth check failed:", err);
            setError("Connection error. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-full md:h-full w-full flex flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative overflow-visible md:overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 dark:from-zinc-900 via-ghipss-blue to-zinc-200 dark:to-zinc-900 z-10" />

            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between border-r border-zinc-200 dark:border-zinc-900 bg-white/50 dark:bg-zinc-950/50 relative p-8 md:p-12 lg:p-16">
                <div className="absolute top-20 left-20 w-96 h-96 bg-ghipss-blue/5 rounded-full blur-[120px] pointer-events-none" />

                {/* Logos - SIGNIFICANTLY INCREASED SIZE */}
                <div className="flex gap-12 items-center z-10 shrink-0 h-40">
                    <div className="relative h-32 w-72 flex items-center justify-center">
                        {/* GhIPSS Logo */}
                        <Image
                            src="/images/ghipss-logo.png"
                            alt="GhIPSS Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-contain dark:brightness-100 brightness-90 mix-blend-multiply dark:mix-blend-normal"
                        />
                    </div>
                    <div className="h-24 w-px bg-zinc-300 dark:bg-zinc-800" />
                    <div className="relative h-28 w-72 flex items-center justify-center bg-white p-4 rounded-lg">
                        {/* Ananseum Logo */}
                        <Image
                            src="/ananseum-logo.jpg"
                            alt="Ananseum Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Main Title Group */}
                <div className="z-10 space-y-8 my-auto py-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900 dark:text-white">
                        Development, Hosting & Management of the New GhIPSS Corporate Website
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-md border-l-2 border-ghipss-blue pl-6">
                        A modern, secure, content-rich digital presence that reflects GhIPSS’ strategic positioning as Ghana’s national payments infrastructure provider.
                    </p>
                </div>

                {/* Footer Meta */}
                <div className="grid grid-cols-2 gap-8 text-sm text-zinc-500 z-10 shrink-0">
                    <div>
                        <span className="block text-zinc-400 dark:text-zinc-600 mb-1 uppercase tracking-widest text-[10px]">Prepared By</span>
                        <span className="block text-zinc-700 dark:text-zinc-300 font-medium">Alfred Opare Saforo</span>
                        <span className="text-zinc-500 dark:text-zinc-500 text-xs">Lead Developer, Ananseum</span>
                    </div>
                    <div>
                        <span className="block text-zinc-400 dark:text-zinc-600 mb-1 uppercase tracking-widest text-[10px]">Date</span>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">February 2026</span>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center relative p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-0">
                {/* VIDEO BACKGROUND */}
                <div className="absolute inset-0 z-0 bg-black">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/videos/cover-video.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 mix-blend-multiply" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-md w-full mx-auto z-10"
                >
                    {/* Metadata Card */}
                    <div className="grid grid-cols-2 gap-4 mb-8 p-6 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md shadow-lg">
                        <div>
                            <span className="block text-zinc-400 mb-1 uppercase tracking-widest text-[10px]">Document Type</span>
                            <span className="text-white font-medium">Proposal v1.0</span>
                        </div>
                        <div>
                            <span className="block text-zinc-400 mb-1 uppercase tracking-widest text-[10px]">Go-Live Target</span>
                            <span className="text-ghipss-blue font-bold text-sm">31 July 2026</span>
                        </div>
                    </div>

                    {/* Unlock Gate */}
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6 text-ghipss-blue">
                            <div className="p-2 bg-ghipss-blue/10 rounded-lg">
                                <Lock className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-sm uppercase tracking-wider font-bold">Confidential Access</span>
                        </div>

                        <h3 className="text-xl text-white font-bold mb-2">Identify to Continue</h3>
                        <p className="text-zinc-300 text-sm mb-6">
                            Access is restricted to authorized GhIPSS evaluation team members.
                        </p>

                        <form onSubmit={handleUnlock} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Enter your name"
                                className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500 h-11 focus-visible:ring-ghipss-blue"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                            <Input
                                type="email"
                                placeholder="Enter your invited email address..."
                                className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500 h-11 focus-visible:ring-ghipss-blue"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-ghipss-blue hover:bg-[#002244] text-white h-11"
                                disabled={isLoading}
                            >
                                {isLoading ? "Verifying..." : "Unlock Proposal"}
                                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                            </Button>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="flex items-center gap-2 text-red-400 text-xs mt-2 bg-red-950/40 p-2 rounded"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {error}
                                </motion.div>
                            )}
                        </form>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-zinc-400">
                            If your email is not recognised, please contact the procurement lead.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
