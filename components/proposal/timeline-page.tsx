"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Flag,
    PenTool,
    Code,
    ShieldCheck,
    Rocket,
    CheckCircle2,
    Clock,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function TimelinePage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
    };

    const phases = [
        {
            id: 1,
            title: "Discovery & Strategy",
            duration: "April 2026",
            icon: SearchIcon,
            milestone: "Discovery Sign-off",
            outputs: ["Stakeholder workshops", "Content inventory & migration plan", "Final Sitemap", "UX Wireframes"]
        },
        {
            id: 2,
            title: "UX/UI Design",
            duration: "April–May 2026",
            icon: PenTool,
            milestone: "Design Sign-off",
            outputs: ["High-fidelity designs", "Design System", "Clickable Prototype", "Content Templates"]
        },
        {
            id: 3,
            title: "Development & CMS",
            duration: "May–June 2026",
            icon: Code,
            milestone: "Build Complete (Staging)",
            outputs: ["Frontend Build", "CMS Setup", "Knowledge Hub Engine", "Media Centre", "Integrations"]
        },
        {
            id: 4,
            title: "Migration & QA",
            duration: "June–July 2026",
            icon: ShieldCheck,
            milestone: "UAT Sign-off",
            outputs: ["Content Migration", "Functional & Perf Testing", "GhIPSS UAT", "Final Approvals"]
        },
        {
            id: 5,
            title: "Go-Live & Hypercare",
            duration: "By 31 July 2026",
            icon: Rocket,
            milestone: "Go-Live",
            outputs: ["Production Deploy", "DNS Cutover", "Verification", "Hypercare Support"],
            highlight: true
        }
    ];

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col xl:flex-row overflow-hidden transition-colors duration-300 relative">

            {/* Left Column: Overview & Governance */}
            <div className="w-full xl:w-5/12 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/50">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0055]/10 text-[#FF0055] text-[10px] font-bold tracking-wider uppercase border border-[#FF0055]/20 mb-4">
                            Page 7 — Planning
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Timeline & <br /><span className="text-[#FF0055]">Milestones.</span>
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            We deliver in clear phases with review gates, so GhIPSS stays in control and progress is visible at every step.
                        </p>
                    </div>

                    {/* Governance Section */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#FF0055]" />
                            Governance Rhythm
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Weekly progress updates (decision-focused)",
                                "Shared tracker for deliverables",
                                "Clear sign-off gates between phases"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                    <CheckCircle2 className="w-4 h-4 text-[#FF0055] shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Right Column: Interactive Timeline */}
            <div className="w-full xl:w-7/12 bg-zinc-50 dark:bg-black/20 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

                <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl mx-auto space-y-4 relative z-10">

                    {/* Phase Cards */}
                    {phases.map((phase, i) => (
                        <motion.div
                            variants={itemVariant}
                            key={i}
                            className={cn(
                                "group relative pl-8 pb-8 border-l-2 last:pb-0",
                                phase.highlight ? "border-[#FF0055]" : "border-zinc-200 dark:border-zinc-800"
                            )}
                        >
                            {/* Timeline Dot */}
                            <div className={cn(
                                "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-white dark:bg-zinc-950 transition-colors",
                                phase.highlight ? "border-[#FF0055]" : "border-zinc-300 dark:border-zinc-700 group-hover:border-[#FF0055]"
                            )} />

                            <div className={cn(
                                "p-5 rounded-xl border transition-all duration-300",
                                phase.highlight
                                    ? "bg-white dark:bg-zinc-900 border-[#FF0055]/30 shadow-lg shadow-[#FF0055]/5"
                                    : "bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-[#FF0055]/30 hover:shadow-md"
                            )}>
                                {/* Phase Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "p-2 rounded-lg",
                                            phase.highlight ? "bg-[#FF0055]/10 text-[#FF0055]" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:text-[#FF0055] transition-colors"
                                        )}>
                                            <phase.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phase {phase.id}</div>
                                            <h3 className="font-bold text-zinc-900 dark:text-white text-lg">{phase.title}</h3>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="outline" className="font-mono text-zinc-500 whitespace-nowrap">
                                            {phase.duration}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Outputs */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                    {phase.outputs.map((out, j) => (
                                        <div key={j} className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                            {out}
                                        </div>
                                    ))}
                                </div>

                                {/* Milestone Badge */}
                                <div className={cn(
                                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold w-full sm:w-auto",
                                    phase.highlight
                                        ? "bg-[#FF0055] text-white"
                                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                )}>
                                    <Flag className="w-3 h-3" />
                                    <span>Milestone: {phase.milestone}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Navigation Hint */}
                    <div className="flex justify-end pt-8">
                        <div className="group cursor-pointer flex flex-col items-end">
                            <span className="text-[10px] uppercase tracking-widest text-[#FF0055] mb-1 font-semibold">Next Up</span>
                            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg hover:underline decoration-[#FF0055] decoration-2 underline-offset-4 transition-all">
                                Support & Maintenance
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FF0055]" />
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

// Icon helper
function SearchIcon(props: any) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
