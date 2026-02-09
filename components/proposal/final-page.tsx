"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ShieldCheck,
    BookOpen,
    Clock,
    Users,
    ArrowRight,
    PenTool,
    CreditCard,
    Rocket,
    Mail,
    Phone
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import confetti from "canvas-confetti";
import { useState } from "react";

export function FinalPage() {
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

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        position: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleAccept = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.position) return;

        setIsSubmitting(true);

        // Simulate API delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Trigger Confetti
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

        }, 1500);
    };

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col xl:flex-row overflow-hidden transition-colors duration-300 relative">

            {/* Left Column: Thank You & Commitment */}
            <div className="w-full xl:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar relative z-10 border-r border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/50">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">

                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghipss-blue/10 text-ghipss-blue text-[10px] font-bold tracking-wider uppercase border border-ghipss-blue/20 mb-4">
                            Page 10 — Decision
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                            Team & <br /><span className="text-ghipss-blue">Relevant Work.</span>
                        </h2>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            Thank you. This proposal is designed around one outcome: A website that feels like national infrastructure—credible, clear, secure, and always-on.
                        </p>
                    </div>

                    {/* The Commitment */}
                    <motion.div variants={itemVariant} className="space-y-6">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-ghipss-blue" />
                            Our Commitment
                        </h3>

                        <div className="grid gap-4">
                            {[
                                { icon: Users, text: "A premium institutional experience that strengthens public trust." },
                                { icon: BookOpen, text: "A structured Knowledge Hub as a single source of truth." },
                                { icon: ShieldCheck, text: "A secure, monitored, backed-up platform built for continuity." },
                                { icon: Clock, text: "A predictable delivery plan with visible milestones." },
                                { icon: CheckCircle2, text: "Full handover so GhIPSS owns the platform." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                    <div className="shrink-0 text-ghipss-blue mt-0.5">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-300 font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact - Clean */}
                    <motion.div variants={itemVariant} className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Proposal Lead</h4>
                        <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="font-bold text-zinc-900 dark:text-white text-lg">Alfred Opare Saforo</div>
                            <div>Lead Developer, Ananseum</div>
                            <div className="flex gap-4 mt-2">
                                <span className="flex items-center gap-2 hover:text-ghipss-blue transition-colors cursor-pointer"><Mail className="w-4 h-4" /> alfred@ananseum.com</span>
                                <span className="flex items-center gap-2 hover:text-ghipss-blue transition-colors cursor-pointer"><Phone className="w-4 h-4" /> 0557447933</span>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Right Column: Steps, Recap & Sign-off */}
            <div className="w-full xl:w-1/2 bg-zinc-900 dark:bg-black text-white p-8 lg:p-12 overflow-y-auto custom-scrollbar relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 relative z-10 max-w-xl mx-auto xl:mx-0">

                    {/* Next Steps */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-ghipss-blue" />
                            Next Steps
                        </h3>

                        <div className="relative space-y-8 pl-4">
                            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-zinc-800" />

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-800 border-2 border-ghipss-blue text-[10px] font-bold flex items-center justify-center">1</div>
                                <h4 className="font-bold text-white text-lg mb-1">Confirmation</h4>
                                <p className="text-sm text-zinc-400">Confirm intent & nominate Project Owner.</p>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-800 border-2 border-zinc-600 text-[10px] font-bold flex items-center justify-center">2</div>
                                <h4 className="font-bold text-white text-lg mb-1">Kickoff Workshop</h4>
                                <p className="text-sm text-zinc-400">60-90 min session to confirm priorities & timeline.</p>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-800 border-2 border-zinc-600 text-[10px] font-bold flex items-center justify-center">3</div>
                                <h4 className="font-bold text-white text-lg mb-1">Mobilisation (50%)</h4>
                                <p className="text-sm text-zinc-400">Payment processed & delivery begins immediately.</p>
                            </div>
                        </div>
                    </div>

                    {/* Investment Recap Box */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" /> Investment Recap
                        </h4>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm text-zinc-300">One-Time Build</span>
                            <span className="text-lg font-bold text-white">GHS 145,000</span>
                        </div>
                        <div className="flex justify-between items-end pb-4 border-b border-white/10">
                            <span className="text-sm text-zinc-300">Annual Recurring</span>
                            <span className="text-lg font-bold text-white">GHS 73,000<span className="text-xs font-normal text-zinc-500">/yr</span></span>
                        </div>
                        <div className="pt-4 flex justify-between items-center text-xs text-zinc-500">
                            <span>Mobilisation Invoice (50%)</span>
                            <span className="text-white font-bold">GHS 72,500</span>
                        </div>
                    </div>

                    {/* Acceptance / Sign-off */}
                    <div className="space-y-8 pt-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <PenTool className="w-5 h-5 text-ghipss-blue" />
                            Acceptance
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* User Form Side */}
                            <div className="space-y-6">
                                <div className="text-xs font-bold uppercase text-zinc-500">For GhIPSS</div>

                                {!isSuccess ? (
                                    <form onSubmit={handleAccept} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-xs text-zinc-400">Full Name</Label>
                                            <Input
                                                id="name"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                placeholder="e.g. Update Akuffo"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-ghipss-blue focus:ring-ghipss-blue"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs text-zinc-400">Email Address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                placeholder="e.g. u.akuffo@ghipss.net"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-ghipss-blue focus:ring-ghipss-blue"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="position" className="text-xs text-zinc-400">Position / Role</Label>
                                            <Input
                                                id="position"
                                                value={formState.position}
                                                onChange={(e) => setFormState({ ...formState, position: e.target.value })}
                                                placeholder="e.g. Head of Technology"
                                                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-ghipss-blue focus:ring-ghipss-blue"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-ghipss-blue hover:bg-[#002244] text-white font-bold"
                                        >
                                            {isSubmitting ? "Signing..." : "Sign & Accept Proposal"}
                                        </Button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-[#00D94A]/10 border border-[#00D94A]/20 rounded-xl p-6 text-center space-y-3"
                                    >
                                        <div className="w-12 h-12 bg-[#00D94A] rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_20px_rgba(0,217,74,0.3)]">
                                            <CheckCircle2 className="w-6 h-6 text-black" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg">Proposal Accepted!</h4>
                                        <p className="text-sm text-zinc-300">
                                            Thank you, <span className="text-white font-medium">{formState.name}</span>.
                                        </p>
                                        <p className="text-xs text-zinc-400">
                                            We have received your sign-off. Our team will contact you at <span className="text-zinc-300">{formState.email}</span> within 2 hours to initiate the kickoff.
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Ananseum Static Side */}
                            <div className="space-y-8 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="text-xs font-bold uppercase text-zinc-500">For Ananseum</div>
                                <div className="space-y-6">
                                    <div className="border-b border-zinc-800 pb-1">
                                        <div className="text-sm text-white font-medium">Alfred Opare Saforo</div>
                                    </div>
                                    <div className="border-b border-zinc-800 pb-1">
                                        <div className="text-xs text-ghipss-blue mb-4 font-script text-lg">Signed Digitally</div>
                                    </div>
                                    <div className="border-b border-zinc-800 pb-1">
                                        <div className="text-xs text-zinc-500 mb-4">{new Date().toLocaleDateString()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Marker */}
                    <div className="flex justify-center pt-8 opacity-30">
                        <div className="w-16 h-1 bg-white/20 rounded-full" />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
