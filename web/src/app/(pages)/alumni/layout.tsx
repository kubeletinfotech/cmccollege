"use client";

import { motion } from "framer-motion";
import AlumniSidebar from "@/components/AlumniSidebar";

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-emerald-50 w-full flex flex-col pt-[110px] lg:pt-[216px] pb-12 md:pb-20">
            {/* Page Header - Moved from page.tsx */}
            <section className="relative py-24 px-6 bg-[#5D1035] text-white overflow-hidden mb-12">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-4">
                            Alumni Association
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Celebrating the lifelong bond between CM College and its graduates.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="w-full px-4 md:px-[30px] max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* SIDEBAR */}
                    <div className="lg:col-span-3">
                        <AlumniSidebar />
                    </div>

                    {/* MAIN CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-9 space-y-8"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
