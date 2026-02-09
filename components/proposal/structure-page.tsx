"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layout,
    Layers,
    FileText,
    Megaphone,
    BookOpen,
    Phone,
    ArrowRight,
    ChevronDown,
    Globe,
    Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

export function StructurePage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const navStructure = [
        {
            title: "About GhIPSS",
            icon: Globe,
            items: ["Mandate & Role", "Leadership & Governance", "Our History", "Policies & Disclosures", "Careers"]
        },
        {
            title: "Platforms & Services",
            icon: Layers,
            items: ["National Infrastructure", "Service Portals", "User Guides", "FAQs & Support", "Related Docs"]
        },
        {
            title: "Initiatives",
            icon: Zap,
            items: ["Current Initiatives", "Innovation Hub", "Strategic Partnerships", "Developer Resources"]
        },
        {
            title: "Media Centre",
            icon: Megaphone,
            items: ["News & Announcements", "Press Releases", "Photo/Video Gallery", "Media Kit"]
        },
        {
            title: "Knowledge Hub",
            icon: BookOpen,
            highlight: true,
            items: ["Reports & Publications", "Circulars & Notices", "Policies & Guidelines", "Procurement"]
        },
        {
            title: "Contact",
            icon: Phone,
            items: ["Office Locations", "General Enquiries", "Stakeholder Support", "Feedback"]
        }
    ];

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col overflow-hidden transition-colors duration-300 relative">

            {/* Header Section - Compact */}
            <div className="shrink-0 px-8 pt-6 pb-4 border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/50 backdrop-blur-sm z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-2">
                            Page 3 — Information Architecture
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                            Proposed Site Structure (Information Architecture)
                        </h2>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
                            A simple, confident structure: <span className="text-zinc-900 dark:text-white font-medium italic">"Who is GhIPSS? What do you run? Where are the documents?"</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Diagram Area - Compacted */}
            <div className="flex-1 overflow-hidden p-4 lg:p-6 relative bg-[url('/grid.svg')] bg-fixed opacity-100 flex flex-col items-center justify-center">
                <motion.div variants={container} initial="hidden" animate="show" className="w-full max-w-[1200px] mx-auto scale-90 origin-top">

                    {/* Root Node: Home */}
                    <div className="flex flex-col items-center mb-6 relative">
                        <motion.div variants={itemVariant} className="relative z-10 px-4 py-2 w-48 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl shadow-xl flex items-center justify-center gap-2 border-2 border-zinc-100 dark:border-zinc-800">
                            <Home className="w-4 h-4" />
                            <span className="font-bold tracking-wide text-sm">GhIPSS Home</span>
                        </motion.div>
                        {/* Vertical line from Home */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="w-0.5 bg-zinc-300 dark:bg-zinc-700 absolute top-full left-1/2 -translate-x-1/2"
                        />
                    </div>

                    {/* Branding Bar (Horizontal Line) */}
                    <div className="relative mb-6">
                        {/* The horizontal connector */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="h-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto w-full max-w-[92%]"
                        />
                        {/* Vertical Connectors to children */}
                        <div className="flex justify-between w-full max-w-[92%] mx-auto relative -top-0.5">
                            {navStructure.map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: 20 }}
                                    transition={{ delay: 1 + (i * 0.1), duration: 0.3 }}
                                    className="w-0.5 bg-zinc-300 dark:bg-zinc-700"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Primary Nav Row */}
                    <div className="grid grid-cols-6 gap-3 w-full max-w-[98%] mx-auto text-center">
                        {navStructure.map((nav, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariant}
                                className="flex flex-col items-center"
                            >
                                {/* Parent Node */}
                                <div className={cn(
                                    "w-full p-2.5 rounded-lg border flex flex-col items-center gap-2 text-center transition-all duration-300 relative group z-10",
                                    nav.highlight
                                        ? "bg-ghipss-blue border-ghipss-blue text-white shadow-md shadow-ghipss-blue/20"
                                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-ghipss-blue/50 hover:shadow-sm"
                                )}>
                                    <div className={cn(
                                        "p-1.5 rounded-md",
                                        nav.highlight ? "bg-white/20" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-ghipss-blue"
                                    )}>
                                        <nav.icon className="w-4 h-4" />
                                    </div>
                                    <span className={cn(
                                        "font-bold text-xs leading-tight",
                                        nav.highlight ? "text-white" : "text-zinc-900 dark:text-white"
                                    )}>
                                        {nav.title}
                                    </span>
                                </div>

                                {/* Connector to Children */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileInView={{ height: 12, opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="w-0.5 bg-zinc-200 dark:bg-zinc-800"
                                />

                                {/* Sub-items List (Leaf Nodes) */}
                                <div className="w-full space-y-1 relative">
                                    {nav.items.map((subItem, j) => (
                                        <motion.div
                                            key={j}
                                            initial={{ opacity: 0, y: -5 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.6 + (j * 0.05) }}
                                            className="px-2 py-1.5 text-[10px] text-center rounded bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50 text-zinc-500 dark:text-zinc-400 truncate w-full"
                                            title={subItem}
                                        >
                                            {subItem}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer / Utility Nav */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="mt-8 pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800 w-full text-center"
                    >
                        <div className="flex flex-wrap justify-center gap-2">
                            {["Privacy", "Terms", "Cookies", "Accessibility", "Security", "Sitemap"].map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full border border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400 bg-white dark:bg-zinc-900/50 cursor-default">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Quick Templates Legend - Bottom Bar Compact */}
            <div className="shrink-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 px-6 py-2 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-4 overflow-x-auto opacity-60">
                    <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider shrink-0">Templates:</span>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1.5"><FileText className="w-3 h-3" /> Standard</div>
                        <div className="flex items-center gap-1.5"><Layers className="w-3 h-3" /> Platform</div>
                        <div className="flex items-center gap-1.5"><Megaphone className="w-3 h-3" /> News</div>
                        <div className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> Policy</div>
                    </div>
                </div>


            </div>

        </div>
    );
}

// Icons
import { Home, Zap, Search } from "lucide-react";

