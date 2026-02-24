"use client";

import { motion } from "framer-motion";
import AdmissionsSidebar from "@/components/AdmissionsSidebar";

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900 pt-[112px]">
            {/* --- HEADER SECTION (Shared across all admissions pages) --- */}
            <section className="relative py-24 px-6 bg-emerald-900 text-white overflow-hidden mb-12">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-serif pt-10 lg:pt-15">
                            Begin Your Journey With Us
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
                            Explore our diverse range of programs and take the first step towards a bright career. Apply to your preferred department today.
                        </p>

                        <a
                            href="https://cmc.embase.in/admission"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all hover:-translate-y-1 shadow-lg shadow-emerald-900/20"
                        >
                            Apply Now
                        </a>
                    </motion.div>
                </div>
            </section>

            <div className="w-full px-4 md:px-[30px] max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-3">
                        <AdmissionsSidebar />
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-9 space-y-8">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
