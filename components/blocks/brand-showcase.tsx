"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BrandShowcase() {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500"
                >
                    {/* Client Logo */}
                    <div className="group relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm w-64 h-32 flex items-center justify-center">
                            {/* Placeholder for GhIPSS Logo */}
                            <img
                                src="/ghipss_logo.png"
                                alt="GhIPSS"
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-2xl font-bold text-white tracking-widest">GhIPSS</span>
                        </div>
                    </div>

                    {/* Divider / X */}
                    <div className="text-zinc-600 text-2xl font-light">
                        <span className="sr-only">and</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>

                    {/* Agency Logo */}
                    <div className="group relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-ghipss-blue/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm w-64 h-32 flex items-center justify-center">
                            {/* Placeholder for Ananseum Logo */}
                            <img
                                src="/ananseum.jpg"
                                alt="Ananseum"
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-screen"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden text-xl font-bold text-white tracking-tighter">Ananseum<span className="text-ghipss-blue">.</span></span>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-zinc-500 text-sm mt-8 tracking-widest uppercase"
                >
                    A Strategic Digital Partnership Proposal
                </motion.p>
            </div>
        </section>
    );
}
