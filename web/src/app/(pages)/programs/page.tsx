"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { programs } from "@/data/programs";
import { Sparkles, ArrowRight, X, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProgramsPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-[110px] lg:pt-[216px] pb-12 lg:pb-20 overflow-hidden bg-emerald-900 border-b border-white/10">

                <div className="container mx-auto px-4 relative z-10 text-center mt-6">
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
                    <div className="space-y-12 lg:space-y-16 max-w-7xl mx-auto">
                        {programs.map((program, index) => (
                            <ScrollReveal key={program.id}>
                                <div className={`p-8 lg:p-12 rounded-[2.5rem] border border-zinc-100 ${index % 2 === 0 ? 'bg-white shadow-xl shadow-zinc-200/40' : 'bg-emerald-50/30'}`}>
                                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}>
                                        {/* Image/Logo Side */}
                                        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <div className="relative group max-w-md mx-auto lg:max-w-none">
                                                {/* Decorative Background */}
                                                <div className="absolute -inset-4 bg-emerald-50 rounded-4xl -rotate-2 transform transition-transform group-hover:rotate-0 duration-500"></div>

                                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-xl border border-zinc-100 flex items-center justify-center p-4 md:p-6 lg:p-8">
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
                                        <div className={`space-y-5 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                            <div className="inline-block p-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                                                Established Initiative
                                            </div>
                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-agency font-bold text-zinc-900 uppercase">
                                                {program.name}
                                            </h2>
                                            {program.tagline && (
                                                <p className="text-base md:text-lg font-medium text-emerald-700 italic">
                                                    "{program.tagline}"
                                                </p>
                                            )}
                                            <p className="text-zinc-600 text-base md:text-lg leading-relaxed text-left lg:text-justify hyphens-auto">
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

                                    {/* Gallery Section - Moved below in a single row */}
                                    {program.gallery && program.gallery.length > 0 && (
                                        <div className="pt-8 mt-10 border-t border-zinc-100">
                                            <h3 className="text-sm font-bold text-emerald-800/60 uppercase tracking-[0.2em] mb-6 text-center">Program Memories</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                                                {program.gallery.map((img, i) => {
                                                    const isPlaceholder = !img || img === "" || img === "/placeholder.jpg";
                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`relative aspect-video rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm group/gallery ${!isPlaceholder ? 'cursor-pointer' : ''}`}
                                                            onClick={() => !isPlaceholder && setSelectedImage(img)}
                                                        >
                                                            {!isPlaceholder ? (
                                                                <>
                                                                    <Image
                                                                        src={img}
                                                                        alt={`${program.name} gallery image ${i + 1}`}
                                                                        fill
                                                                        className="object-cover transform transition-transform duration-700 group-hover/gallery:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                                        <ZoomIn className="text-white opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 transform scale-75 group-hover/gallery:scale-100 drop-shadow-lg" size={32} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 bg-zinc-50 pointer-events-none">
                                                                    <svg className="w-5 h-5 mb-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                                    <span className="text-[9px] font-bold tracking-widest uppercase">Coming Soon</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
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
            {/* Image Custom Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-50 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl max-h-[85vh] aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Expanded Gallery View"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
