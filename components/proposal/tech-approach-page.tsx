"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Server,
    ShieldCheck,
    Database,
    Workflow,
    Zap,
    Lock,
    Globe,
    Box,
    Users,
    FileKey,
    Activity,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function TechApproachPage() {
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

            {/* Left Column: Build Philosophy & Architecture */}
            <div className="w-full xl:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 max-w-2xl mx-auto xl:mx-0">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 5 — Technical Approach
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Critical <span className="text-ghipss-blue">Infrastructure.</span>
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            Secure by default, fast under load, and built to scale. We treat your website like the financial critical infrastructure it represents.
                        </p>
                    </div>

                    {/* Architecture Section */}
                    <motion.div variants={itemVariant} className="space-y-6">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <Server className="w-5 h-5 text-ghipss-blue" />
                            Architecture: Component-Driven CMS
                        </h3>

                        <div className="grid gap-4">
                            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex gap-4">
                                <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg h-fit">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Front-end Layer</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Modern, responsive UI built with reusable components and consistent templates.</p>
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex gap-4">
                                <div className="shrink-0 p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg h-fit">
                                    <FileKey className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Content Layer (CMS)</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Role-based publishing allowing authorised teams to update pages without code.</p>
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex gap-4">
                                <div className="shrink-0 p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg h-fit">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Knowledge Hub Engine</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Structured library with metadata (type, year, tags) enabling robust search & filtering.</p>
                                </div>
                            </div>
                        </div>

                        {/* Environments Pipeline */}
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
                            <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900">DEV</span>
                            <span className="text-zinc-300">→</span>
                            <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900">STAGING (UAT)</span>
                            <span className="text-zinc-300">→</span>
                            <span className="px-2 py-1 rounded bg-ghipss-blue/10 text-ghipss-blue font-bold">PRODUCTION</span>
                        </div>
                    </motion.div>

                    {/* Governance */}
                    <motion.div variants={itemVariant} className="space-y-4">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <Users className="w-5 h-5 text-ghipss-blue" />
                            governance & Workflow
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Super Admin", "Content Owners", "Editors", "Approvers"].map((role, i) => (
                                <Badge key={i} variant="outline" className="text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700">
                                    {role}
                                </Badge>
                            ))}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-2 p-3 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg">
                            <Workflow className="w-4 h-4 shrink-0" />
                            Draft <span className="text-zinc-300">→</span> Review <span className="text-zinc-300">→</span> Approved <span className="text-zinc-300">→</span> Published
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Right Column: Security, Performance & Ownership */}
            <div className="w-full xl:w-1/2 bg-zinc-900 dark:bg-black text-white p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 relative z-10 max-w-2xl mx-auto xl:mx-0">

                    {/* Security Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                            <ShieldCheck className="w-6 h-6 text-ghipss-blue" />
                            Security & Risk Controls
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Baseline</h4>
                                <ul className="space-y-2 text-sm text-zinc-300">
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> HTTPS/SSL Everywhere</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> Secure Headers & Rate Limiting</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500" /> MFA for Admin Access</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Threat Protection</h4>
                                <ul className="space-y-2 text-sm text-zinc-300">
                                    <li className="flex gap-2"><Lock className="w-4 h-4 text-ghipss-blue" /> WAF & DDoS Mitigation</li>
                                    <li className="flex gap-2"><Lock className="w-4 h-4 text-ghipss-blue" /> Vulnerability Scanning</li>
                                    <li className="flex gap-2"><Lock className="w-4 h-4 text-ghipss-blue" /> Auto-Patching Schedule</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Performance & Resilience */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                            <Zap className="w-6 h-6 text-ghipss-blue" />
                            Performance & Reliability
                        </h3>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">CDN</div>
                                    <div className="text-[10px] uppercase text-zinc-400">Global Caching</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                                    <div className="text-[10px] uppercase text-zinc-400">Target Uptime</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">Daily</div>
                                    <div className="text-[10px] uppercase text-zinc-400">Auto Backups</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compliance & Handover */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-ghipss-blue" />
                                Compliance
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Mobile-First", "WCAG Accessibility", "SEO Foundations", "Analytics Ready"].map((item, i) => (
                                    <div key={i} className="px-3 py-1.5 rounded bg-white/10 text-xs text-zinc-300 border border-white/10">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-ghipss-blue/20 to-transparent border border-ghipss-blue/30">
                            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <Box className="w-5 h-5 text-ghipss-blue" />
                                Ownership & Handover (No Black Box)
                            </h3>
                            <p className="text-sm text-zinc-300 mb-4">
                                You own everything. We handover the keys, code, and knowledge.
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                                <div className="flex items-center gap-2"><Check className="w-3 h-3" /> Admin Access</div>
                                <div className="flex items-center gap-2"><Check className="w-3 h-3" /> Design System</div>
                                <div className="flex items-center gap-2"><Check className="w-3 h-3" /> Technical Docs</div>
                                <div className="flex items-center gap-2"><Check className="w-3 h-3" /> Staff Training</div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
