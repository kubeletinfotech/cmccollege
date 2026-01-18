"use client";

import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Users, Globe, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-emerald-50 pt-24 md:pt-28 lg:pt-40 pb-12 md:pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* 1. Page Header (Matching About Page Style) */}
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/50 text-emerald-800 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 border border-emerald-200/50">
                            Innovation Hub
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-zinc-900 mb-4 md:mb-6 tracking-tight leading-tight">
                            Research & <span className="text-[#7B0046] italic">Discovery</span>
                        </h1>
                        <p className="text-base md:text-xl text-zinc-600 leading-relaxed font-light max-w-2xl mx-auto px-2">
                            Driving academic excellence through inquiry and interdisciplinary collaboration.
                            Our institution is committed to pushing the boundaries of knowledge.
                        </p>
                    </motion.div>
                </div>

                {/* 2. Main Status Card (Polished & Branded) */}
                <div className="max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 border border-emerald-100 shadow-xl shadow-emerald-900/5 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
                    >
                        {/* Decorative Background Blobs */}
                        <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 md:-mr-20 md:-mt-20 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-[#7B0046]/5 rounded-full blur-3xl -ml-16 -mb-16 md:-ml-20 md:-mb-20 opacity-60"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl shadow-inner border border-emerald-100 flex items-center justify-center mb-6 md:mb-8 text-emerald-700 group-hover:scale-110 transition-transform duration-500">
                                <FlaskConical className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold font-serif text-emerald-900 mb-3 md:mb-4">
                                Research Content Updating
                            </h2>

                            <p className="text-zinc-600 mb-8 md:mb-10 max-w-lg mx-auto text-sm md:text-lg leading-relaxed">
                                We are currently compiling our latest research publications, ongoing projects, and faculty achievements. The full research portal will be available soon.
                            </p>

                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-[#7B0046] bg-[#7B0046]/5 px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#7B0046]/10">
                                <Loader2 className="w-3 h-3 md:w-4 md:h-4 animate-spin" />
                                <span className="uppercase tracking-wide">Curating Data</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Upcoming Sections Preview (Roadmap) */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <div className="flex items-center justify-center gap-4 opacity-40 mb-2">
                            <div className="h-px w-8 md:w-12 bg-zinc-300"></div>
                            <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                Coming Soon
                            </span>
                            <div className="h-px w-8 md:w-12 bg-zinc-300"></div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                        {[
                            {
                                icon: BookOpen,
                                title: "Publications",
                                desc: "Peer-reviewed papers and academic journals."
                            },
                            {
                                icon: Users,
                                title: "Research Centers",
                                desc: "Specialized hubs for interdisciplinary study."
                            },
                            {
                                icon: Globe,
                                title: "Global Projects",
                                desc: "Collaborative initiatives with international partners."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-dashed border-zinc-200 bg-white/50 hover:bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300 cursor-default"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-zinc-400 group-hover:text-emerald-700 group-hover:bg-emerald-50 transition-colors">
                                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold font-serif text-zinc-900 mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-zinc-500 leading-relaxed group-hover:text-zinc-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16 md:mt-24 text-zinc-400 text-xs md:text-sm px-4">
                    <p>Have questions about our research? <Link href="/contact" className="text-emerald-700 font-semibold hover:text-emerald-900 underline underline-offset-4 decoration-emerald-200 hover:decoration-emerald-900 transition-all">Contact the Dean's Office</Link></p>
                </div>
            </div>
        </main>
    );
}
