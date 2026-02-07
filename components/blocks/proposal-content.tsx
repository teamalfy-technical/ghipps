"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Check, Shield, Server, Clock, Users, FileText, Smartphone, Globe, Search, Calendar, BarChart3, Database, Lock, HeadphonesIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

// Animation variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.3 } }
};

export function ProposalContent() {
    return (
        <div className="bg-background text-foreground bg-zinc-950 min-h-screen font-sans">

            {/* Scroll Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col items-center text-zinc-500 text-xs"
                >
                    <span className="mb-2">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>

            {/* 1. TOR OUTCOMES */}
            <AnimatedSection id="understanding" className="py-20 md:py-32">
                <div className="max-w-5xl mx-auto px-6">
                    <SectionHeader
                        title="Understanding & Outcomes"
                        subtitle="What GhIPSS Needs to Achieve"
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-12 mt-12"
                    >
                        {/* What GhIPSS Needs */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-ghipss-blue/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="text-ghipss-blue" /> TOR Objectives
                            </h3>
                            <ul className="space-y-4 text-zinc-300">
                                {[
                                    "Position GhIPSS as a credible payment systems infrastructure institution through a modern, professional, scalable web presence.",
                                    "Improve user experience via clear information architecture, structured storytelling, and intuitive navigation across devices.",
                                    "Provide structured access to corporate content, publications, platforms, and initiatives through dedicated pages and a searchable repository.",
                                    "Deliver secure hosting, SSL certification, domain management, plus continuous support and maintenance under a single multi-year vendor contract."
                                ].map((text, i) => (
                                    <motion.li
                                        key={i}
                                        variants={fadeInUp}
                                        className="flex gap-3"
                                    >
                                        <Check className="w-5 h-5 text-ghipss-blue shrink-0 mt-0.5" />
                                        <span>{text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Our Approach */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SpotlightCard className="p-8 h-full" spotlightColor="rgba(0, 255, 200, 0.15)">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Shield className="text-ghipss-blue" /> Our Approach
                                </h3>
                                <p className="text-zinc-400 mb-6">We will deliver the new GhIPSS website as a governed content platform:</p>
                                <ul className="space-y-4 text-zinc-300">
                                    {[
                                        { num: "1", title: "Clear Structure", desc: "Audience-led navigation and page templates" },
                                        { num: "2", title: "Operational Readiness", desc: "Admin workflows for the Communications Unit" },
                                        { num: "3", title: "Security & Continuity", desc: "Hosting, SSL, backups, monitoring, patching" },
                                        { num: "4", title: "Sustainable Support", desc: "SLA-backed support throughout the contract period" }
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={fadeInUp} className="flex gap-3">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-8 h-8 bg-ghipss-blue/20 rounded-lg flex items-center justify-center shrink-0"
                                            >
                                                <span className="text-ghipss-blue font-bold text-sm">{item.num}</span>
                                            </motion.div>
                                            <div>
                                                <div className="font-medium text-white">{item.title}</div>
                                                <div className="text-sm text-zinc-500">{item.desc}</div>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 2. PROPOSED SITEMAP */}
            <AnimatedSection id="sitemap" className="py-20 bg-zinc-900/30">
                <div className="max-w-5xl mx-auto px-6">
                    <SectionHeader
                        title="Proposed Sitemap"
                        subtitle="Top-Level Navigation (Aligned to TOR)"
                    />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
                    >
                        {[
                            { num: "1", label: "About GhIPSS" },
                            { num: "2", label: "Services & Platforms" },
                            { num: "3", label: "Initiatives & Innovation" },
                            { num: "4", label: "Knowledge Hub" },
                            { num: "5", label: "Media Centre" },
                            { num: "6", label: "Events & Engagement" },
                            { num: "7", label: "Contact" },
                        ].map((item) => (
                            <motion.div
                                key={item.num}
                                variants={fadeInScale}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center hover:border-ghipss-blue/50 transition-colors cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="text-ghipss-blue font-mono text-sm mb-2"
                                >
                                    {item.num}
                                </motion.div>
                                <div className="text-white text-sm font-medium">{item.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 3. MODULE SPECS */}
            <AnimatedSection id="modules" className="py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeader
                        title="What We Will Build"
                        subtitle="Module Specifications (Scorable Deliverables)"
                    />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <ModuleCard
                            icon={<FileText className="w-6 h-6" />}
                            title="A) Knowledge Hub"
                            features={[
                                "Document types: reports, notices, publications, policies, circulars",
                                "Metadata: title, category, year, topic, audience, file type, summary, tags",
                                "UX: full-text search + filters (year/type/topic) + sort + featured publications",
                                "Admin: upload, versioning, scheduled publishing, role-based approvals"
                            ]}
                        />
                        <ModuleCard
                            icon={<Smartphone className="w-6 h-6" />}
                            title="B) Media Centre"
                            features={[
                                "News & announcements, press releases",
                                "Photo/video galleries, press kits",
                                "Admin: newsroom workflow (draft → review → publish)",
                                "Media library governance"
                            ]}
                        />
                        <ModuleCard
                            icon={<Globe className="w-6 h-6" />}
                            title="C) Initiatives & Innovation"
                            features={[
                                "Dedicated template per initiative",
                                "Supports expansion over time",
                                "Fields: overview, objectives, timeline, stakeholder impact, FAQs, updates"
                            ]}
                        />
                        <ModuleCard
                            icon={<Calendar className="w-6 h-6" />}
                            title="D) Events & Engagement"
                            features={[
                                "Event listing + registration (where applicable)",
                                "Admin: event create/edit",
                                "Registration export, email confirmations (optional)"
                            ]}
                        />
                        <ModuleCard
                            icon={<BarChart3 className="w-6 h-6" />}
                            title="E) Analytics & Integrations"
                            features={[
                                "Web analytics dashboard",
                                "Monthly reporting",
                                "Social media integrations",
                                "Selected third-party tools"
                            ]}
                        />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 4. HOSTING & SECURITY */}
            <AnimatedSection id="technology" className="py-20 bg-zinc-900/50">
                <div className="max-w-5xl mx-auto px-6">
                    <SectionHeader
                        title="Hosting, Domain & Security"
                        subtitle="Managed Service (Auditable Controls)"
                    />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8 mt-12"
                    >
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                        >
                            <SpotlightCard className="p-8 h-full">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Server className="text-ghipss-blue" /> We Will Provide
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    {["Secure, reliable hosting services", "Domain management where required", "SSL certificate provisioning and renewal", "Backups, uptime monitoring, reliability controls"].map((text, i) => (
                                        <motion.li key={i} variants={fadeInUp} className="flex gap-3">
                                            <Check className="w-5 h-5 text-ghipss-blue shrink-0" /> {text}
                                        </motion.li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                        >
                            <SpotlightCard className="p-8 h-full">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Lock className="text-ghipss-blue" /> Operational Controls
                                </h3>
                                <ul className="space-y-3 text-zinc-300">
                                    {["Role-based admin access (least-privilege)", "Activity/audit logging for publishing actions", "Patch management and routine updates", "Scheduled backup verification and restore tests", "Performance monitoring + incident reporting"].map((text, i) => (
                                        <motion.li key={i} variants={fadeInUp} className="flex gap-3">
                                            <Check className="w-5 h-5 text-ghipss-blue shrink-0" /> {text}
                                        </motion.li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 5. TIMELINE */}
            <AnimatedSection id="project-plan" className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader
                        title="Implementation Plan"
                        subtitle="Go-Live: On or Before 31 July 2026"
                    />
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center text-zinc-400 max-w-2xl mx-auto mb-12"
                    >
                        GhIPSS indicative timeline: Feb–Mar evaluation, March award, April discovery, April–May build, June–July migrate/test/security validate.
                    </motion.p>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <GateCard gate="Gate 1" phase="Discovery & Governance" date="April 2026" items={["Stakeholder workshops", "Content audit", "Information Architecture", "Prototype sign-off"]} />
                        <GateCard gate="Gate 2" phase="Design & Build" date="April – May 2026" items={["UI system + templates", "CMS implementation", "Module development", "Internal QA"]} />
                        <GateCard gate="Gate 3" phase="Migration + QA" date="June – July 2026" items={["Content migration", "UAT", "Performance testing", "Security validation", "Training"]} />
                        <GateCard gate="GO-LIVE" phase="Launch & Hypercare" date="31 July 2026" items={["DNS switch", "Monitoring", "Hypercare window", "Handover completion"]} highlight />
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 6. SUPPORT & SLA */}
            <AnimatedSection id="sla" className="py-20 bg-zinc-900/30">
                <div className="max-w-5xl mx-auto px-6">
                    <SectionHeader
                        title="Support & Maintenance"
                        subtitle="SLA-Backed Continuous Support"
                    />
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center text-zinc-400 max-w-2xl mx-auto mb-12"
                    >
                        GhIPSS requires continuous support and maintenance throughout the contract period and collaboration with Communications on updates, patches, and performance optimization.
                    </motion.p>

                    {/* SLA Table */}
                    <motion.div
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 mb-12"
                    >
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-900 text-zinc-400">
                                <tr>
                                    <th className="p-4 font-medium">Priority</th>
                                    <th className="p-4 font-medium">Description</th>
                                    <th className="p-4 font-medium">Response</th>
                                    <th className="p-4 font-medium">Resolution Target</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800 text-zinc-300">
                                <tr className="bg-red-950/20 hover:bg-red-950/30 transition-colors">
                                    <td className="p-4 font-bold text-red-400">P1 Critical</td>
                                    <td className="p-4">Site down / security incident</td>
                                    <td className="p-4 font-mono">&lt; 1 hour</td>
                                    <td className="p-4">Same day</td>
                                </tr>
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="p-4 font-bold text-orange-400">P2 High</td>
                                    <td className="p-4">Major feature broken</td>
                                    <td className="p-4 font-mono">4 hours</td>
                                    <td className="p-4">2 business days</td>
                                </tr>
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="p-4 font-bold text-yellow-400">P3 Medium</td>
                                    <td className="p-4">Non-critical issue</td>
                                    <td className="p-4 font-mono">1 business day</td>
                                    <td className="p-4">5 business days</td>
                                </tr>
                                <tr className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="p-4 font-bold text-zinc-400">P4 Low</td>
                                    <td className="p-4">Enhancement request</td>
                                    <td className="p-4 font-mono">2 business days</td>
                                    <td className="p-4">Scheduled release</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>

                    {/* Maintenance Routines */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { period: "WEEKLY", title: "Patching Window", desc: "Security updates applied" },
                            { period: "MONTHLY", title: "Performance Check", desc: "+ Analytics report" },
                            { period: "QUARTERLY", title: "Governance Review", desc: "With Communications + stakeholders" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInScale}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 text-center hover:border-ghipss-blue/30 transition-colors cursor-pointer"
                            >
                                <div className="text-ghipss-blue font-mono text-sm mb-2">{item.period}</div>
                                <div className="text-white font-medium">{item.title}</div>
                                <div className="text-zinc-500 text-sm">{item.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 7. HANDOVER PACK */}
            <AnimatedSection id="handover" className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader
                        title="Handover Pack"
                        subtitle="Structured Transition (TOR Verbatim)"
                    />
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 mt-12 hover:border-ghipss-blue/30 transition-colors"
                    >
                        <p className="text-zinc-300 mb-6">
                            We will coordinate a structured handover and ensure full transfer of:
                        </p>
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-4 mb-8"
                        >
                            {[
                                { icon: Database, text: "Website assets (domain authorization code, control panel access, website backend)" },
                                { icon: Database, text: "Databases" },
                                { icon: FileText, text: "Content" },
                                { icon: Lock, text: "Administrative credentials" },
                                { icon: Shield, text: "Full administrative access and technical documentation" }
                            ].map((item, i) => (
                                <motion.li key={i} variants={fadeInUp} className="flex gap-3 text-zinc-300">
                                    <item.icon className="w-5 h-5 text-ghipss-blue shrink-0" />
                                    <span>{item.text}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <h4 className="text-white font-bold mb-4">Deliverables</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li>• Credential register + access map</li>
                            <li>• Cutover plan + rollback plan</li>
                            <li>• Admin training for Communications team</li>
                            <li>• Technical documentation: architecture, deployments, backup/restore, update procedures</li>
                        </ul>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 8. PRICING */}
            <AnimatedSection id="pricing" className="py-20 bg-zinc-900/30">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader
                        title="Investment Breakdown"
                        subtitle="Financial Proposal (One-Time vs Recurring)"
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 space-y-6"
                    >
                        {/* One-time */}
                        <motion.div variants={fadeInUp} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50">
                            <div className="bg-zinc-900 p-4 border-b border-zinc-800">
                                <h3 className="font-bold text-white">One-Time (Project Delivery)</h3>
                            </div>
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-zinc-800 text-zinc-300">
                                    <tr className="hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-4 font-medium text-white">Design & Discovery</td>
                                        <td className="p-4 text-right font-mono text-ghipss-blue">GHS 56,000</td>
                                    </tr>
                                    <tr className="hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-4 font-medium text-white">Development & Migration</td>
                                        <td className="p-4 text-right font-mono text-ghipss-blue">GHS 89,000</td>
                                    </tr>
                                    <tr className="bg-zinc-900/50">
                                        <td className="p-4 font-bold text-white">One-Time Total</td>
                                        <td className="p-4 text-right font-mono font-bold text-white">GHS 145,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Recurring */}
                        <motion.div variants={fadeInUp} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50">
                            <div className="bg-zinc-900 p-4 border-b border-zinc-800">
                                <h3 className="font-bold text-white">Recurring (Annual)</h3>
                            </div>
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-zinc-800 text-zinc-300">
                                    <tr className="hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-4 font-medium text-white">Hosting & Security</td>
                                        <td className="p-4 text-right font-mono text-ghipss-blue">GHS 65,000 / year</td>
                                    </tr>
                                    <tr className="hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-4 font-medium text-white">Support & Maintenance Retainer</td>
                                        <td className="p-4 text-right font-mono text-ghipss-blue">GHS 48,000 / year</td>
                                    </tr>
                                    <tr className="bg-zinc-900/50">
                                        <td className="p-4 font-bold text-white">Year 2+ Recurring Total</td>
                                        <td className="p-4 text-right font-mono font-bold text-white">GHS 113,000 / year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Year 1 Total */}
                        <motion.div
                            variants={fadeInScale}
                            whileHover={{ scale: 1.02 }}
                            className="bg-ghipss-blue/10 border border-ghipss-blue/30 rounded-xl p-6 text-center cursor-pointer"
                        >
                            <div className="text-zinc-400 mb-2">Year 1 Estimated Total</div>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="text-4xl font-bold text-white"
                            >
                                GHS 258,000
                            </motion.div>
                        </motion.div>

                        {/* Optional */}
                        <motion.div variants={fadeInUp} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-4">Optional Services (Priced on Request)</h4>
                            <ul className="grid md:grid-cols-2 gap-2 text-zinc-400 text-sm">
                                <li>• Content writing/editing support</li>
                                <li>• Photography/video production</li>
                                <li>• Accessibility audit</li>
                                <li>• Independent penetration test</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 9. COMPLIANCE MATRIX */}
            <AnimatedSection id="compliance" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeader
                        title="TOR Compliance Matrix"
                        subtitle="Requirement-to-Response Mapping"
                    />
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 overflow-x-auto"
                    >
                        <table className="w-full text-left text-sm border border-zinc-800 rounded-xl overflow-hidden">
                            <thead className="bg-zinc-900 text-zinc-400">
                                <tr>
                                    <th className="p-4 font-medium border-r border-zinc-800">TOR Requirement</th>
                                    <th className="p-4 font-medium border-r border-zinc-800">Our Response</th>
                                    <th className="p-4 font-medium">Evidence in Proposal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800 text-zinc-300 bg-zinc-950">
                                {[
                                    { req: "Modern, responsive corporate website", response: "Mobile-first UX + structured IA", evidence: "Sitemap + UI prototypes" },
                                    { req: "Align with GhIPSS brand guidelines", response: "Design system from GhIPSS brand assets", evidence: "Design direction + style guide" },
                                    { req: "Knowledge Hub with search/filter", response: "Structured repository + metadata + search", evidence: "Knowledge Hub module spec" },
                                    { req: "Initiatives pages expandable", response: "Reusable initiative template", evidence: "Initiative module spec" },
                                    { req: "Media Centre", response: "Newsroom + galleries + press kit", evidence: "Media module spec" },
                                    { req: "Events + registration", response: "Events listing + registration workflow", evidence: "Events module spec" },
                                    { req: "Analytics + integrations", response: "Analytics dashboard + reporting", evidence: "Analytics spec" },
                                    { req: "Hosting, SSL, backups, monitoring", response: "Managed hosting + SSL + backups", evidence: "Hosting & Security section" },
                                    { req: "Continuous support + maintenance", response: "SLA + patching + reporting", evidence: "Support/SLA section" },
                                    { req: "Handover of assets, DB, credentials", response: "Structured handover pack", evidence: "Handover section" },
                                    { req: "Timeline to 31 July 2026", response: "Plan with sign-off gates", evidence: "Timeline section" },
                                    { req: "Separate financial proposal", response: "One-time vs recurring separated", evidence: "Pricing section" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-4 border-r border-zinc-800">{row.req}</td>
                                        <td className="p-4 border-r border-zinc-800 text-zinc-400">{row.response}</td>
                                        <td className="p-4 text-zinc-500 text-xs">{row.evidence}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* 10. CONTACT / CTA */}
            <AnimatedSection id="contact" className="py-20 md:py-32 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Ready to Proceed?
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto"
                    >
                        We are prepared to present, clarify, and demonstrate any aspect of this proposal. GhIPSS may request clarifications or schedule a demo as part of the evaluation process.
                    </motion.p>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div variants={fadeInScale} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button size="lg" className="bg-ghipss-blue hover:bg-[#002244] text-white rounded-full px-8 py-6 text-lg">
                                Request Presentation / Demo
                            </Button>
                        </motion.div>
                        <motion.div variants={fadeInScale} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-zinc-700">
                                Download Full Proposal (PDF)
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-20 pt-10 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-sm text-zinc-500"
                    >
                        <div>
                            <h4 className="font-semibold text-white mb-4">Ananseum</h4>
                            <ul className="space-y-2">
                                <li>Creative Web. Smart Tech.</li>
                                <li>10+ Years Fintech Experience</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Proposal</h4>
                            <ul className="space-y-2">
                                <li>By Alfred Opare Saforo</li>
                                <li>February 2026</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li>hello@ananseum.com</li>
                                <li>+233 20 000 0000</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Accra, Ghana</h4>
                            <p>123 Digital Avenue, Airport City</p>
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function AnimatedSection({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 mb-4">
                {title}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
    );
}

function ModuleCard({ icon, title, features }: { icon: React.ReactNode; title: string; features: string[] }) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <SpotlightCard className="p-6 h-full">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-ghipss-blue/10 rounded-xl flex items-center justify-center text-ghipss-blue mb-4"
                >
                    {icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                    {features.map((f, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex gap-2">
                            <span className="text-ghipss-blue">•</span>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
            </SpotlightCard>
        </motion.div>
    );
}

function GateCard({ gate, phase, date, items, highlight = false }: { gate: string; phase: string; date: string; items: string[]; highlight?: boolean }) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02, x: 8 }}
            transition={{ duration: 0.3 }}
            className={cn("border rounded-xl p-6 cursor-pointer", highlight ? "bg-ghipss-blue/10 border-ghipss-blue/30" : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700")}
        >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={cn("px-3 py-1 rounded-full text-sm font-bold w-fit", highlight ? "bg-ghipss-blue text-white" : "bg-zinc-800 text-zinc-400")}
                >
                    {gate}
                </motion.div>
                <div className="flex-1">
                    <div className="text-white font-bold">{phase}</div>
                    <div className="text-zinc-500 text-sm font-mono">{date}</div>
                </div>
            </div>
            <ul className="grid md:grid-cols-2 gap-2">
                {items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-400 flex gap-2">
                        <Check className={cn("w-4 h-4 shrink-0", highlight ? "text-ghipss-blue" : "text-zinc-600")} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
