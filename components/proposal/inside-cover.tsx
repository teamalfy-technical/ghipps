"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, User, Mail, Phone, Globe, Shield, Database, LayoutTemplate } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import Image from "next/image";
import { useBook } from "./book-layout";

export function InsideCover() {
    const { userName } = useBook();
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    // Quick fade in for elements
    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row overflow-hidden transition-colors duration-300">
            {/* Left Column: Narrative & Executive Summary */}
            <div className="w-full md:w-5/12 p-8 lg:p-12 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 relative flex flex-col overflow-y-auto custom-scrollbar">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 1 — Inside Cover
                        </div>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Welcome{userName ? `, ${userName}` : ""}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            Thank you for reviewing Ananseum’s proposal for the redesign, redevelopment, hosting, and ongoing management of the GhIPSS corporate website.
                        </p>
                    </div>

                    {/* Executive Summary */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-l-4 border-ghipss-blue pl-3">Executive Summary</h3>
                        <div className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed space-y-4">
                            <p>
                                GhIPSS requires a website that matches the credibility and clarity of a national infrastructure institution—modern in experience, strong in storytelling, easy to navigate, and built with secure hosting and ongoing management.
                            </p>
                            <p>
                                Ananseum will deliver a <strong>structured, responsive platform</strong> with a robust knowledge hub for publications and notices, designed to scale with GhIPSS initiatives and stakeholder needs.
                            </p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">How This Proposal Is Organised</h3>
                        <ol className="text-sm text-zinc-600 dark:text-zinc-400 list-decimal list-inside space-y-2 font-mono">
                            <li className="pl-1"><span className="text-zinc-900 dark:text-zinc-300 font-medium">Objectives & Success Criteria</span></li>
                            <li className="pl-1">Proposed Site Structure (Information Architecture)</li>
                            <li className="pl-1">UX/UI Direction & Content Approach</li>
                            <li className="pl-1">Technical Approach (Build, Hosting, Security)</li>
                            <li className="pl-1">Migration, QA Testing & Go-Live Plan</li>
                            <li className="pl-1">Timeline & Milestones (to 31 July 2026)</li>
                            <li className="pl-1">Support, Maintenance & Service Levels</li>
                            <li className="pl-1">Investment Summary</li>
                            <li className="pl-1">Team & Relevant Work</li>
                        </ol>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Value Props & Contact */}
            <div className="w-full md:w-7/12 p-8 lg:p-12 bg-zinc-100 dark:bg-zinc-900/20 overflow-y-auto custom-scrollbar flex flex-col">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 h-full">

                    {/* Value Props Grid */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What GhIPSS Will Get (At a Glance)</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <SpotlightCard className="p-5 bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none">
                                <div className="flex gap-4">
                                    <div className="shrink-0 text-ghipss-blue">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">1) Strategic Positioning & Trust</h4>
                                        <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 list-disc list-inside">
                                            <li>Clear narrative of GhIPSS mandate, platforms, impact, and governance</li>
                                            <li>Modern, professional design aligned to brand guidelines</li>
                                            <li>UX that builds confidence across stakeholders</li>
                                        </ul>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="p-5 bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none">
                                <div className="flex gap-4">
                                    <div className="shrink-0 text-ghipss-blue">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">2) Content & Discoverability</h4>
                                        <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 list-disc list-inside">
                                            <li>Structured <strong>Knowledge Hub</strong> (reports, circulars, notices, policies) with search/filter</li>
                                            <li>News/Media Centre for announcements and updates</li>
                                            <li>Scalable structure for future initiatives and campaigns</li>
                                        </ul>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="p-5 bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none">
                                <div className="flex gap-4">
                                    <div className="shrink-0 text-ghipss-blue">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">3) Security, Hosting & Continuity</h4>
                                        <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 list-disc list-inside">
                                            <li>Secure hosting with SSL, backups, monitoring, and patching</li>
                                            <li>Performance optimisation and uptime focus</li>
                                            <li>Documentation, training, and clean handover for content owners</li>
                                        </ul>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 min-h-[2rem]" />

                    {/* Contact Card */}
                    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm dark:shadow-none">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shrink-0">
                            <Image
                                src="/images/alfred-profile.jpg"
                                alt="Alfred Opare Saforo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-1">Proposal Contacts</div>
                            <div className="font-bold text-zinc-900 dark:text-white text-lg">Alfred Opare Saforo</div>
                            <div className="text-zinc-500 dark:text-zinc-500 text-sm mb-3">Lead Developer, Ananseum</div>

                            <div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                                <span className="flex items-center justify-center sm:justify-start gap-2 hover:text-ghipss-blue transition-colors"><Mail className="w-3 h-3" /> alfred@ananseum.com</span>
                                <span className="flex items-center justify-center sm:justify-start gap-2 hover:text-ghipss-blue transition-colors"><Phone className="w-3 h-3" /> +233 0557447933</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
