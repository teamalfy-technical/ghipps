"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    MousePointer2,
    Search,
    Eye,
    LayoutGrid,
    Type,
    Component,
    Image as ImageIcon,
    ArrowRight,
    CheckCircle2,
    Menu,
    X,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export function UxUiPage() {
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
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row overflow-hidden transition-colors duration-300 relative">

            {/* Left Column: Principles & Strategy (The "Thinking") */}
            <div className="w-full md:w-5/12 p-8 lg:p-12 border-r border-zinc-200 dark:border-zinc-900 overflow-y-auto custom-scrollbar bg-white dark:bg-zinc-950/50">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 4 — UX/UI Direction
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Design that builds <br /><span className="text-ghipss-blue">Trust.</span>
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Our approach balances institutional authority with modern digital agility. We don't just decorate; we design for clarity and discoverability.
                        </p>
                    </div>

                    {/* UX Principles */}
                    <div className="space-y-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-100 dark:border-zinc-900 pb-2 mb-6">
                            UX Principles
                        </h3>

                        {[
                            {
                                icon: MousePointer2,
                                title: "Clarity First",
                                desc: "Straightforward navigation and short labels. Key actions (Find, Read, Download) are always obvious."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Trust by Design",
                                desc: "Clean layouts and predictable patterns. Institutional tone with modern polish—nothing 'startup-y'."
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile-First",
                                desc: "Designed for touch. Accessible typography and tap-friendly components for stakeholders on the go."
                            },
                            {
                                icon: Search,
                                title: "Discoverability",
                                desc: "Search isn't 'nice to have'—it's central. Filters match how stakeholders actually browse documents."
                            }
                        ].map((item, i) => (
                            <motion.div variants={itemVariant} key={i} className="flex gap-4 group">
                                <div className="shrink-0 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-400 group-hover:text-ghipss-blue group-hover:bg-ghipss-blue/5 transition-colors">
                                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-ghipss-blue transition-colors">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Visual Language (The "Showing") */}
            <div className="w-full md:w-7/12 bg-zinc-100 dark:bg-zinc-900/20 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto space-y-10 relative z-10">

                    {/* Visual Language Section */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-ghipss-blue" />
                            Visual Language System
                        </h3>

                        {/* Live Style Guide Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Marquee Banner - Design Tokens */}
                            <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4 shadow-sm">
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {["Design Tokens", "•", "Typography", "•", "Color System", "•", "Spacing", "•", "Grid Layout", "•", "Micro-Interactions", "•", "Accessibility", "•", "Dark Mode", "•"].map((item, i) => (
                                        <span key={i} className="text-xs font-bold uppercase tracking-widest text-zinc-400 mx-4">{item}</span>
                                    ))}
                                </Marquee>
                            </div>

                            {/* Card 1: Typography */}
                            <motion.div variants={itemVariant} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                                    <Type className="w-4 h-4" /> Typography
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-zinc-900 dark:text-white">Aa</div>
                                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">Heading 1</div>
                                    <div className="text-xl font-semibold text-zinc-900 dark:text-white">Heading 2</div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                        Body text that is effortless to read, with strong hierarchy to guide the eye.
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Interactive Components */}
                            <motion.div variants={itemVariant} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                                    <Component className="w-4 h-4" /> Components
                                </div>
                                <div className="space-y-3">
                                    <Button className="w-full justify-between bg-ghipss-blue hover:bg-[#002244] text-white">
                                        Primary Action <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full justify-between border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                                        Secondary Action <ChevronDown className="w-4 h-4 opacity-50" />
                                    </Button>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200">
                                            News
                                        </Badge>
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-200">
                                            Report
                                        </Badge>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Layout & Spacing */}
                            <motion.div variants={itemVariant} className="sm:col-span-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-6 rounded-2xl shadow-xl overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-24 bg-ghipss-blue blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest opacity-60">
                                            <LayoutGrid className="w-4 h-4" /> Design Philosophy
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Modern Institutional Aesthetic</h4>
                                        <p className="text-sm opacity-70 max-w-md">
                                            Premium, calm, and confident. Whitespace reduces cognitive load, while a strict grid system ensures consistency across every page.
                                        </p>
                                    </div>
                                    <div className="shrink-0 flex gap-2">
                                        <div className="w-12 h-12 rounded-lg bg-white/10 dark:bg-black/5 backdrop-blur-md flex items-center justify-center border border-white/10 dark:border-black/10">
                                            <Smartphone className="w-6 h-6" />
                                        </div>
                                        <div className="w-12 h-12 rounded-lg bg-white/10 dark:bg-black/5 backdrop-blur-md flex items-center justify-center border border-white/10 dark:border-black/10">
                                            <ImageIcon className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Key UX Components */}
                    <motion.div variants={itemVariant} className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Key UX Components</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { name: "Homepage", desc: "Mandate statement + quick paths to Platforms" },
                                { name: "Platform Index", desc: "Card-based layout for easy scanning" },
                                { name: "Knowledge Hub", desc: "Central search bar + facet filters" },
                                { name: "Media Centre", desc: "News categories, assets & press kits" },
                            ].map((comp, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-ghipss-blue mt-2 shrink-0" />
                                    <div>
                                        <div className="font-bold text-zinc-900 dark:text-white text-sm">{comp.name}</div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{comp.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>



                </motion.div>
            </div>
        </div>
    );
}
