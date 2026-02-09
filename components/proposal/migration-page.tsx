"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    RefreshCw,
    Search,
    FileCheck,
    ShieldCheck,
    Smartphone,
    Zap,
    Rocket,
    Globe,
    Flag,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MigrationPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col xl:flex-row overflow-hidden transition-colors duration-300 relative">

            {/* Left Column: Strategy & QA */}
            <div className="w-full xl:w-7/12 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 max-w-3xl mx-auto xl:mx-0">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 6 — Execution
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Migration, QA & <br /><span className="text-ghipss-blue">Go-Live.</span>
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            We test the site like a product, not a brochure. A smooth transition with minimal downtime and zero data loss.
                        </p>
                    </div>

                    {/* 1. Content Migration */}
                    <motion.div variants={itemVariant} className="space-y-6">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <RefreshCw className="w-5 h-5 text-ghipss-blue" />
                            Structured Content Migration
                        </h3>

                        <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                                        <div>
                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Inventory & Mapping</div>
                                            <div className="text-xs text-zinc-500 mt-1">Identify all pages/media. Map old → new structure.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                                        <div>
                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Cleanup & Formatting</div>
                                            <div className="text-xs text-zinc-500 mt-1">Remove duplicates, fix broken links, standardise headings.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                                        <div>
                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Metadata Tagging</div>
                                            <div className="text-xs text-zinc-500 mt-1">Tagging docs by type, year, category for Knowledge Hub.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">4</div>
                                        <div>
                                            <div className="text-sm font-bold text-zinc-900 dark:text-white">Validation</div>
                                            <div className="text-xs text-zinc-500 mt-1">Confirm downloads, previews, and filtering behaviour.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-start gap-3">
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-xs text-zinc-500">
                                    <span className="font-bold text-zinc-700 dark:text-zinc-300">Early Flagging:</span> We proactively identify outdated pages, version conflicts, and missing approvals.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. QA Testing Grid */}
                    <motion.div variants={itemVariant} className="space-y-6">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <Search className="w-5 h-5 text-ghipss-blue" />
                            Comprehensive QA Testing
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: FileCheck, title: "Functional", desc: "Navigation, forms, search, filters" },
                                { icon: Smartphone, title: "Cross-Device", desc: "Mobile, Tablet, Desktop (All browsers)" },
                                { icon: Zap, title: "Performance", desc: "Load speeds, image optim., caching" },
                                { icon: ShieldCheck, title: "Security", desc: "SSL, headers, access control audits" },
                            ].map((test, i) => (
                                <div key={i} className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-ghipss-blue/30 transition-colors">
                                    <test.icon className="w-5 h-5 text-zinc-400 mb-3" />
                                    <div className="font-bold text-zinc-900 dark:text-white text-sm mb-1">{test.title}</div>
                                    <div className="text-xs text-zinc-500">{test.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Right Column: Go-Live Plan */}
            <div className="w-full xl:w-5/12 bg-zinc-900 dark:bg-black text-white p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 relative z-10 max-w-xl mx-auto xl:mx-0">

                    {/* 3. UAT */}
                    <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-6 rounded-2xl border border-zinc-700/50">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-zinc-400" />
                            UAT & Approvals
                        </h3>
                        <div className="flex flex-col gap-3 text-sm text-zinc-300">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#FF0055]" />
                                Stakeholder walkthroughs
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#FF0055]" />
                                Issue tracking & resolution
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#FF0055]" />
                                Final sign-off
                            </div>
                        </div>
                    </div>

                    {/* 4. Go-Live Timeline */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                            <Rocket className="w-6 h-6 text-ghipss-blue" />
                            Go-Live Plan
                        </h3>

                        <div className="relative space-y-8 pl-4">
                            {/* Vertical Line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-zinc-800" />

                            {[
                                { title: "Content Freeze", desc: "Lock changes on old site." },
                                { title: "Final Migration Sync", desc: "Upload last-minute docs." },
                                { title: "Production Deploy", desc: "Push code to live environment." },
                                { title: "DNS Cutover", desc: "Switch domain to new site." },
                                { title: "Verification", desc: "Verify live links & forms." },
                            ].map((step, i) => (
                                <motion.div variants={itemVariant} key={i} className="relative pl-6">
                                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-ghipss-blue bg-zinc-950 z-10" />
                                    <h4 className="font-bold text-white text-sm mb-0.5">{step.title}</h4>
                                    <p className="text-xs text-zinc-400">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SEO Safety Net */}
                    <div className="bg-ghipss-blue/10 border border-ghipss-blue/20 p-5 rounded-xl">
                        <h4 className="text-sm font-bold text-ghipss-blue mb-2 flex items-center gap-2">
                            <Flag className="w-4 h-4" />
                            Post-Launch Safety Net
                        </h4>
                        <ul className="space-y-2 text-xs text-zinc-300">
                            <li className="flex gap-2">
                                <span className="text-ghipss-blue">•</span>
                                301 Redirects map old URLs to new ones
                            </li>
                            <li className="flex gap-2">
                                <span className="text-ghipss-blue">•</span>
                                Hypercare support window (7-14 days)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-ghipss-blue">•</span>
                                Immediate sitemap submission to Google
                            </li>
                        </ul>
                    </div>



                </motion.div>
            </div>
        </div>
    );
}

// Additional Icons
import { Users } from "lucide-react";
