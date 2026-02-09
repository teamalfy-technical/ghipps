"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Target,
    Users,
    ShieldCheck,
    Database,
    Server,
    MousePointerClick,
    Search,
    Zap,
    Lock,
    Package,
    Check,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ObjectivesPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    const objectives = [
        {
            icon: Target,
            title: "National Mandate",
            desc: "Clearly communicate GhIPSS’ role as Ghana’s national payments infrastructure provider.",
            sub: "Credible, structured, and easy to understand."
        },
        {
            icon: Users,
            title: "Stakeholder Experience",
            desc: "Effortless navigation for banks, fintechs, merchants, regulators, and media.",
            sub: "Fast, mobile-friendly, and accessible."
        },
        {
            icon: ShieldCheck,
            title: "Trust & Visibility",
            desc: "Modern design that improves perception and confidence in digital payments.",
            sub: "Reliable newsroom and announcements."
        },
        {
            icon: Database,
            title: "Scalable Content",
            desc: "Structured Knowledge Hub for reports, policies, and circulars.",
            sub: "Searchable with easy publishing workflows."
        },
        {
            icon: Server,
            title: "Security & Uptime",
            desc: "Secure hosting, SSL, proactive monitoring, and disaster recovery.",
            sub: "Long-term support and maintenance."
        }
    ];

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col xl:flex-row overflow-hidden transition-colors duration-300">
            {/* Left Column: Strategic Objectives */}
            <div className="w-full xl:w-7/12 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto space-y-10">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 2 — Strategy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                            Objectives & Success <span className="text-ghipss-blue">Criteria.</span>
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            We are building a platform that balances <span className="text-zinc-900 dark:text-white font-medium">national authority</span> with <span className="text-zinc-900 dark:text-white font-medium">modern digital agility</span>.
                        </p>
                    </div>

                    {/* Objectives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {objectives.map((obj, i) => (
                            <SpotlightCard key={i} className={cn(
                                "p-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm dark:shadow-none hover:shadow-md transition-shadow",
                                i === 0 ? "md:col-span-2 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950/50" : ""
                            )}>
                                <div className="flex gap-5 items-start">
                                    <div className="shrink-0 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                                        <obj.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{obj.title}</h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
                                            {obj.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-medium text-ghipss-blue">
                                            <Check className="w-3 h-3" />
                                            {obj.sub}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Measuring Success */}
            <div className="w-full xl:w-5/12 bg-zinc-100 dark:bg-zinc-900/40 border-t xl:border-t-0 xl:border-l border-zinc-200 dark:border-zinc-900 p-8 lg:p-12 overflow-y-auto custom-scrollbar">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl mx-auto space-y-12">

                    {/* Success Criteria Section */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                            <Target className="w-6 h-6 text-ghipss-blue" />
                            Defining Success
                        </h3>

                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-2 bottom-4 w-px bg-zinc-200 dark:bg-zinc-800" />

                            {[
                                {
                                    icon: MousePointerClick,
                                    label: "Experience",
                                    points: ["3-click rule for key info", "Clear, intuitive navigation"]
                                },
                                {
                                    icon: Search,
                                    label: "Findability",
                                    points: ["Robust search & filtering", "Consistent content templates"]
                                },
                                {
                                    icon: Zap,
                                    label: "Performance",
                                    points: ["Sub-second load times", "99.9% uptime monitoring"]
                                },
                                {
                                    icon: Lock,
                                    label: "Security",
                                    points: ["Enterprise-grade SSL", "Strict governance & patching"]
                                }
                            ].map((criterion, i) => (
                                <motion.div variants={itemVariant} key={i} className="relative flex gap-6 group">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-ghipss-blue group-hover:border-ghipss-blue/30 transition-all z-10 shadow-sm">
                                        <criterion.icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wide">
                                            {criterion.label}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {criterion.points.map((point, idx) => (
                                                <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                                                    <span className="block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Deliverables Snapshot - Dark Card */}
                    <motion.div variants={itemVariant} className="bg-zinc-900 dark:bg-zinc-950 rounded-2xl p-8 text-white shadow-xl border border-zinc-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-ghipss-blue blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />

                        <h3 className="text-lg font-bold mb-6 flex items-center gap-3 relative z-10">
                            <Package className="w-5 h-5 text-ghipss-blue" />
                            Deliverables Snapshot
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                            {[
                                "Info Architecture",
                                "UX/UI Design System",
                                "Full Development",
                                "Content Migration",
                                "Hosting & Security",
                                "Training & Support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-sm bg-ghipss-blue" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>



                </motion.div>
            </div>
        </div>
    );
}
