"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Users,
    Mail,
    Clock,
    Smartphone,
    Monitor,
    Trash2,
    Plus,
    RefreshCw,
    ChevronRight,
    Eye,
    Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    getSessions,
    getWhitelist,
    addToWhitelist,
    removeFromWhitelist,
    getPageViewsForSession,
    SessionData
} from "@/lib/analytics";

type Tab = "sessions" | "whitelist";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<Tab>("sessions");
    const [sessions, setSessions] = useState<SessionData[]>([]);
    const [whitelist, setWhitelist] = useState<{ id: string; email: string; role: string; addedAt: Date | null }[]>([]);
    const [newEmail, setNewEmail] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSession, setSelectedSession] = useState<string | null>(null);
    const [pageViews, setPageViews] = useState<any[]>([]);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const [sessionsData, whitelistData] = await Promise.all([
                getSessions(),
                getWhitelist()
            ]);
            setSessions(sessionsData);
            setWhitelist(whitelistData);
        } catch (error) {
            console.error("Failed to load data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleAddEmail = async () => {
        if (!newEmail.trim()) return;
        try {
            await addToWhitelist(newEmail.trim());
            setNewEmail("");
            loadData();
        } catch (error) {
            console.error("Failed to add email:", error);
        }
    };

    const handleRemoveEmail = async (id: string) => {
        try {
            await removeFromWhitelist(id);
            loadData();
        } catch (error) {
            console.error("Failed to remove email:", error);
        }
    };

    const handleViewSession = async (sessionId: string) => {
        setSelectedSession(sessionId);
        try {
            const views = await getPageViewsForSession(sessionId);
            setPageViews(views);
        } catch (error) {
            console.error("Failed to load page views:", error);
        }
    };

    const formatDuration = (seconds: number) => {
        if (seconds < 60) return `${seconds}s`;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "—";
        return date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <Shield className="w-8 h-8 text-ghipss-blue" />
                            Admin Dashboard
                        </h1>
                        <p className="text-zinc-400 mt-1">Manage access and view analytics</p>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={loadData}
                        className="text-zinc-400 hover:text-white"
                        disabled={isLoading}
                    >
                        <RefreshCw className={cn("w-4 h-4 mr-2", isLoading && "animate-spin")} />
                        Refresh
                    </Button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-zinc-800 pb-4">
                    <Button
                        variant={activeTab === "sessions" ? "default" : "ghost"}
                        onClick={() => setActiveTab("sessions")}
                        className={cn(
                            activeTab === "sessions"
                                ? "bg-ghipss-blue hover:bg-[#002244]"
                                : "text-zinc-400 hover:text-white"
                        )}
                    >
                        <Users className="w-4 h-4 mr-2" />
                        Sessions ({sessions.length})
                    </Button>
                    <Button
                        variant={activeTab === "whitelist" ? "default" : "ghost"}
                        onClick={() => setActiveTab("whitelist")}
                        className={cn(
                            activeTab === "whitelist"
                                ? "bg-ghipss-blue hover:bg-[#002244]"
                                : "text-zinc-400 hover:text-white"
                        )}
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        Whitelist ({whitelist.length})
                    </Button>
                </div>

                {/* Sessions Tab */}
                {activeTab === "sessions" && (
                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="text-center py-12 text-zinc-500">Loading sessions...</div>
                        ) : sessions.length === 0 ? (
                            <div className="text-center py-12 text-zinc-500">No sessions recorded yet.</div>
                        ) : (
                            <div className="grid gap-4">
                                {sessions.map((session) => (
                                    <motion.div
                                        key={session.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "bg-zinc-900 border border-zinc-800 rounded-xl p-6 cursor-pointer hover:border-ghipss-blue/50 transition-colors",
                                            selectedSession === session.id && "border-ghipss-blue"
                                        )}
                                        onClick={() => handleViewSession(session.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-zinc-800 rounded-lg">
                                                    {session.device === "mobile" ? (
                                                        <Smartphone className="w-5 h-5 text-ghipss-blue" />
                                                    ) : (
                                                        <Monitor className="w-5 h-5 text-ghipss-blue" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white">{session.name}</div>
                                                    <div className="text-sm text-zinc-400">{session.email}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 text-sm text-zinc-400">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {formatDate(session.startTime)}
                                                </div>
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Expanded View */}
                                        {selectedSession === session.id && pageViews.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="mt-6 pt-6 border-t border-zinc-800"
                                            >
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
                                                    <Eye className="w-4 h-4" /> Page Views
                                                </h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {pageViews.map((view) => (
                                                        <div
                                                            key={view.id}
                                                            className="bg-zinc-800 rounded-lg p-3 text-center"
                                                        >
                                                            <div className="text-2xl font-bold text-ghipss-blue">
                                                                {view.pageIndex}
                                                            </div>
                                                            <div className="text-xs text-zinc-400">
                                                                {formatDuration(view.durationSeconds)}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Whitelist Tab */}
                {activeTab === "whitelist" && (
                    <div className="space-y-6">
                        {/* Add Email Form */}
                        <div className="flex gap-4">
                            <Input
                                placeholder="Enter email or @domain.com"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 flex-1"
                                onKeyDown={(e) => e.key === "Enter" && handleAddEmail()}
                            />
                            <Button
                                onClick={handleAddEmail}
                                className="bg-ghipss-blue hover:bg-[#002244]"
                                disabled={!newEmail.trim()}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add
                            </Button>
                        </div>

                        {/* Whitelist Table */}
                        {isLoading ? (
                            <div className="text-center py-12 text-zinc-500">Loading whitelist...</div>
                        ) : whitelist.length === 0 ? (
                            <div className="text-center py-12 text-zinc-500">
                                No emails in whitelist. Add one above.
                            </div>
                        ) : (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-zinc-800">
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                                                Email
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                                                Role
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                                                Added
                                            </th>
                                            <th className="p-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {whitelist.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                                            >
                                                <td className="p-4 text-white">{item.email}</td>
                                                <td className="p-4">
                                                    <span className="px-2 py-1 rounded-full bg-zinc-800 text-xs text-zinc-400">
                                                        {item.role}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-zinc-400 text-sm">
                                                    {formatDate(item.addedAt)}
                                                </td>
                                                <td className="p-4">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleRemoveEmail(item.id);
                                                        }}
                                                        className="text-zinc-500 hover:text-red-500"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
