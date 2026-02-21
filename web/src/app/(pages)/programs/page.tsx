"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProgramsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-emerald-900 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://ik.imagekit.io/1yxtj9qun/Home/images/fest.jpeg"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-emerald-950/80 to-emerald-900"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={14} />
                            Academic Initiatives
                        </div>
                        <h1 className="text-4xl md:text-6xl font-agency font-bold text-white mb-6 uppercase tracking-tight">
                            College <span className="text-emerald-400">Programs</span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto font-light leading-relaxed">
                            Discover the diverse initiatives and programs that make CM College a vibrant center for
                            learning, leadership, and social responsibility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs List */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {programs.map((program, index) => (
                            <ScrollReveal key={program.id}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Image/Logo Side */}
                                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="relative group">
                                            {/* Decorative Background */}
                                            <div className="absolute -inset-4 bg-emerald-50 rounded-4xl -rotate-2 transform transition-transform group-hover:rotate-0 duration-500"></div>

                                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-xl border border-zinc-100 flex items-center justify-center p-8 md:p-12">
                                                <Image
                                                    src={program.logo}
                                                    alt={program.name}
                                                    width={400}
                                                    height={240}
                                                    className="object-contain w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content Side */}
                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="inline-block p-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                                            Established Initiative
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-agency font-bold text-zinc-900 uppercase">
                                            {program.name}
                                        </h2>
                                        {program.tagline && (
                                            <p className="text-lg font-medium text-emerald-700 italic">
                                                "{program.tagline}"
                                            </p>
                                        )}
                                        <p className="text-zinc-600 text-lg leading-relaxed">
                                            {program.description}
                                        </p>

                                        <div className="pt-4 flex flex-wrap gap-4">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 rounded-full border border-zinc-100 text-sm font-medium text-zinc-700">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                                Active Program
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
                            {/* Decorative Elements */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl opacity-30"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-agency font-bold text-white mb-6 uppercase">
                                    Ready to be part of our <span className="text-emerald-400">community?</span>
                                </h2>
                                <p className="text-emerald-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                                    Join these programs and more to experience a truly holistic education at CM College.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 group"
                                    >
                                        Inquire Now
                                        <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
