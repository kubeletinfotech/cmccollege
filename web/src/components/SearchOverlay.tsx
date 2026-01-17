"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, History, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const QUICK_LINKS = [
    { name: "Academic Calendar", href: "/academics#calendar" },
    { name: "Admission Forms", href: "/admissions" },
    { name: "Campus Gallery", href: "/gallery" },
    { name: "Contact Administration", href: "/contact" },
];

const TRENDING = ["NEET Coaching", "Hostel Facilities", "Scholarships", "Integrated Program"];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-white/70 backdrop-blur-3xl flex flex-col items-center pt-24 md:pt-40 px-6"
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        onClick={onClose}
                        className="fixed top-8 right-8 p-4 bg-emerald-900 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
                    >
                        <X size={28} />
                    </motion.button>

                    <div className="w-full max-w-4xl flex flex-col gap-12">
                        {/* Search Input Area */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative group"
                        >
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-900/40 w-8 h-8 group-focus-within:text-emerald-900 transition-colors" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for programs, news, admissions..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-emerald-50/50 border-2 border-emerald-100/50 rounded-3xl py-8 pl-20 pr-10 text-2xl md:text-3xl font-medium text-emerald-950 focus:bg-white focus:border-emerald-500/30 focus:ring-8 focus:ring-emerald-500/5 outline-none transition-all shadow-inner placeholder:text-emerald-900/20"
                            />
                            {query && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute right-6 top-1/2 -translate-y-1/2"
                                >
                                    <button
                                        onClick={() => setQuery("")}
                                        className="p-2 bg-emerald-100 text-emerald-900 rounded-lg hover:bg-emerald-200 transition-colors"
                                    >
                                        Clear
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Suggestions Grid */}
                        {!query && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Quick Links */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="flex items-center gap-3 text-sm font-black text-emerald-900/40 uppercase tracking-[0.2em] mb-6">
                                        <History size={16} /> Quick Links
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        {QUICK_LINKS.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="group flex items-center justify-between p-5 bg-emerald-50/30 rounded-2xl hover:bg-white border border-transparent hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all"
                                            >
                                                <span className="text-emerald-900 font-bold text-lg">{link.name}</span>
                                                <ArrowRight className="w-5 h-5 text-emerald-900/20 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all" />
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Trending */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="flex items-center gap-3 text-sm font-black text-emerald-900/40 uppercase tracking-[0.2em] mb-6">
                                        <TrendingUp size={16} /> Trending Now
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {TRENDING.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => setQuery(tag)}
                                                className="px-6 py-3 bg-white border border-emerald-100 rounded-full text-emerald-900 font-bold hover:bg-emerald-900 hover:text-white hover:shadow-lg transition-all"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        {/* Search Results Placeholder */}
                        {query && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center"
                            >
                                <div className="inline-flex items-center justify-center p-6 bg-emerald-50 rounded-3xl mb-6">
                                    <Search className="w-12 h-12 text-emerald-900/20" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-900 mb-2">Searching for "{query}"</h3>
                                <p className="text-emerald-900/50">Press Enter or click result to view official notices.</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
