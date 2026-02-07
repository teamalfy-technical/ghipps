"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CreditCard,
    ShieldCheck,
    TrendingUp,
    CheckCircle2,
    Lock,
    BarChart3,
    ArrowRight,
    Landmark,
    Database,
    Fingerprint,
    SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function InvestmentPage() {
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

            {/* Left Column: Value Proposition & Risk Reduction */}
            <div className="w-full xl:w-5/12 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/50">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 9 — Value
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Invest in <br /><span className="text-ghipss-blue">Confidence.</span>
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            This isn't a website. It's a <strong>public trust platform</strong>. A modern structure answers the question "Is this institution credible?" instantly—without explanation.
                        </p>
                    </div>

                    {/* What GhIPSS is Really Buying */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                            The Value Behind the Numbers
                        </h3>

                        <div className="space-y-4">
                            {[
                                { icon: Landmark, title: "Credibility you can feel", desc: "A premium experience that matches GhIPSS' national role." },
                                { icon: Database, title: "A single source of truth", desc: "Structured Knowledge Hub where data is verifyable." },
                                { icon: ShieldCheck, title: "Infrastructure-grade reliability", desc: "Secure hosting & operational discipline." },
                                { icon: SlidersHorizontal, title: "Control without complexity", desc: "Role-based publishing with clear governance." }
                            ].map((item, i) => (
                                <motion.div variants={itemVariant} key={i} className="flex gap-4">
                                    <div className="shrink-0 text-ghipss-blue mt-1">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-zinc-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Risk Reduction Lens */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-ghipss-blue" />
                            The "Risk Reduction" Lens
                        </h3>
                        <div className="space-y-3">
                            {[
                                "Reputational risk reduction (Fewer errors)",
                                "Operational risk reduction (Monitoring & Backups)",
                                "Stakeholder friction reduction (Faster answers)",
                                "Long-term cost reduction (Scalable templates)"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Right Column: Investment Breakdown */}
            <div className="w-full xl:w-7/12 bg-zinc-900 dark:bg-black text-white p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 relative z-10 max-w-2xl mx-auto xl:mx-0">

                    {/* Investment Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* One-Time Build */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <RocketIcon className="w-5 h-5 text-ghipss-blue" />
                                One-Time Build Investment
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <div className="text-xs font-bold uppercase text-zinc-400 mb-2">Phase 1: Design & Discovery</div>
                                    <div className="text-2xl font-bold text-white mb-1">GHS 56,000</div>
                                    <div className="text-xs text-zinc-400">Strategy, UX/UI, Prototyping</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <div className="text-xs font-bold uppercase text-zinc-400 mb-2">Phase 2: Development & Migration</div>
                                    <div className="text-2xl font-bold text-white mb-1">GHS 89,000</div>
                                    <div className="text-xs text-zinc-400">CMS Setup, Migration, QA, Go-Live</div>
                                </div>
                            </div>
                            <div className="p-4 bg-ghipss-blue/10 border border-ghipss-blue/20 rounded-xl flex justify-between items-center">
                                <span className="font-bold text-sm text-ghipss-blue">Total One-Time Build</span>
                                <span className="font-bold text-xl text-white">GHS 145,000</span>
                            </div>
                        </div>

                        {/* Recurring */}
                        <div className="md:col-span-2 space-y-4 pt-4 border-t border-white/10">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-ghipss-blue" />
                                Recurring Operational Investment
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <div className="text-xs font-bold uppercase text-zinc-400 mb-2">Hosting & Security (Annual)</div>
                                    <div className="text-2xl font-bold text-white mb-1">GHS 25,000<span className="text-sm font-normal text-zinc-500">/yr</span></div>
                                    <div className="text-xs text-zinc-400">SSL, WAF, Backups, Infrastructure</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                                    <div className="text-xs font-bold uppercase text-zinc-400 mb-2">Support (Monthly)</div>
                                    <div className="text-2xl font-bold text-white mb-1">GHS 4,000<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                                    <div className="text-xs text-zinc-400">Updates, Fixes, Performance</div>
                                </div>
                            </div>
                            <div className="md:col-span-2 p-4 bg-zinc-800/50 border border-white/5 rounded-xl flex justify-between items-center">
                                <span className="font-bold text-sm text-zinc-400">Total Annual Recurring</span>
                                <span className="font-bold text-xl text-white">GHS 73,000<span className="text-sm font-normal text-zinc-500">/yr</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Structure */}
                    <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Payment Structure (Build)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center divide-x divide-white/10">
                            <div>
                                <div className="text-xl font-bold text-white">50%</div>
                                <div className="text-xs text-zinc-500 mt-1">Mobilisation</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white">40%</div>
                                <div className="text-xs text-zinc-500 mt-1">Design Sign-off</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white">10%</div>
                                <div className="text-xs text-zinc-500 mt-1">Go-Live</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Hint */}
                    <div className="flex justify-end pt-4">
                        <div className="group cursor-pointer flex flex-col items-end">
                            <span className="text-[10px] uppercase tracking-widest text-ghipss-blue mb-1 font-semibold">Next Up</span>
                            <div className="flex items-center gap-2 text-white font-bold text-lg hover:underline decoration-ghipss-blue decoration-2 underline-offset-4 transition-all">
                                Why Ananseum?
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-ghipss-blue" />
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

// Icon helper
function RocketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
