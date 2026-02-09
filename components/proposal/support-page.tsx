"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    LifeBuoy,
    ShieldAlert,
    Server,
    Activity,
    FileText,
    Clock,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Zap,
    AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function SupportPage() {
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

            {/* Left Column: Scope of Support */}
            <div className="w-full xl:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/50">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 8 — Operations
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Support, Maintenance & <br /><span className="text-ghipss-blue">Service Levels.</span>
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            A corporate website isn’t "done" at launch. We provide consistent care to ensure it remains secure, fast, and trustworthy.
                        </p>
                    </div>

                    {/* 1. Monthly Support */}
                    <motion.div variants={itemVariant} className="space-y-6">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <LifeBuoy className="w-5 h-5 text-ghipss-blue" />
                            Ongoing Support (Monthly)
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">Operational</h4>
                                <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Routine health checks</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Incident response</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Monitoring alerts</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">Security & Updates</h4>
                                <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CMS/Plugin updates</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Security patching</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Vulnerability mitigation</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">Content Support</h4>
                                <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Publishing assistance</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Structuring advice</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Quality checks</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">Performance</h4>
                                <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cache tuning</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Image optimisation</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Speed audits</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Hosting & Security */}
                    <motion.div variants={itemVariant} className="space-y-4">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <Server className="w-5 h-5 text-ghipss-blue" />
                            Hosting & Security (Annual)
                        </h3>
                        <div className="bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Hosting Core</div>
                                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li className="flex items-center gap-2">Production Environment</li>
                                        <li className="flex items-center gap-2">SSL Management</li>
                                        <li className="flex items-center gap-2">Daily Backups</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Security Core</div>
                                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li className="flex items-center gap-2">Hardened Config</li>
                                        <li className="flex items-center gap-2">Firewall / WAF</li>
                                        <li className="flex items-center gap-2">Audit Logs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Right Column: SLAs & Promises */}
            <div className="w-full xl:w-1/2 bg-zinc-900 dark:bg-black text-white p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 relative z-10 max-w-xl mx-auto xl:mx-0">

                    {/* 3. Service Levels (SLA) */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-ghipss-blue" />
                            Service Level Targets
                        </h3>

                        <div className="space-y-3">
                            {[
                                { level: "Critical", desc: "Site down / Major outage", time: "1 hr response", color: "bg-red-500", text: "text-red-500" },
                                { level: "High", desc: "Core function broken", time: "4 hr response", color: "bg-orange-500", text: "text-orange-500" },
                                { level: "Normal", desc: "Minor issues / Bugs", time: "1 day response", color: "bg-blue-500", text: "text-blue-500" },
                                { level: "Low", desc: "Cosmetic / Requests", time: "Scheduled", color: "bg-zinc-500", text: "text-zinc-500" },
                            ].map((sla, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-2 h-2 rounded-full ring-4 ring-opacity-20", sla.color, sla.text.replace('text', 'ring'))} />
                                        <div>
                                            <div className="font-bold text-sm text-white">{sla.level}</div>
                                            <div className="text-xs text-zinc-400">{sla.desc}</div>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className={cn("border-white/20", sla.text)}>
                                        {sla.time}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Reporting & Visibility */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-ghipss-blue/10 border border-ghipss-blue/20">
                            <FileText className="w-6 h-6 text-ghipss-blue mb-3" />
                            <h4 className="font-bold text-white text-sm">Monthly Report</h4>
                            <p className="text-xs text-zinc-300 mt-1">Uptime, incidents, security notes & recommendations.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                            <Zap className="w-6 h-6 text-yellow-500 mb-3" />
                            <h4 className="font-bold text-white text-sm">Quarterly Plan</h4>
                            <p className="text-xs text-zinc-300 mt-1">Enhancements, UX refinements & content ideas.</p>
                        </div>
                    </div>

                    {/* 5. Exclusions & Outcome */}
                    <div className="space-y-6 pt-6 border-t border-white/10">
                        <div className="flex gap-4 items-start opacity-70">
                            <AlertTriangle className="w-5 h-5 text-zinc-500 shrink-0" />
                            <div>
                                <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-wider mb-2">Excluded (Quoted Separately)</h4>
                                <p className="text-xs text-zinc-400">Major new features, large-scale redesigns, or third-party license costs.</p>
                            </div>
                        </div>
                    </div>



                </motion.div>
            </div>
        </div>
    );
}
