"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function VicePrincipalProfile() {
    return (
        <div className="min-h-screen bg-white font-sans text-stone-800 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="pt-4 pb-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <div className="flex flex-col items-center gap-10">

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-64 sm:w-72 relative group mt-4"
                        >
                            <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#7a0b3a]/10 rounded-2xl md:rounded-[32px] -z-10 group-hover:top-2 group-hover:-right-2 transition-all duration-500"></div>
                            <div className="relative aspect-[3/4] w-full items-center rounded-2xl md:rounded-[32px] overflow-hidden bg-zinc-100 shadow-xl">
                                <Image
                                    src="https://ik.imagekit.io/1yxtj9qun/About/vice-principal"
                                    alt="Vice Principal"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full pt-4"
                        >
                            <div className="flex flex-col items-center gap-3 mb-8 text-center">
                                <span className="w-12 h-px bg-[#7a0b3a]"></span>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-[#7a0b3a] uppercase">Vice Principal & IQAC Director&apos;s Message</h2>
                            </div>

                            <div className="relative">
                                <span className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-[#7a0b3a]/5 font-serif select-none pointer-events-none">&ldquo;</span>
                                <div className="space-y-6 text-zinc-600 leading-relaxed text-lg relative z-10 text-left lg:text-justify hyphens-auto">
                                    <p>
                                        Welcome to CM College of Arts and Science, Wayanad — an institution dedicated to academic excellence, quality enhancement, and value-based education. As Vice Principal and IQAC Director, we are committed to fostering a learner-centered environment that promotes continuous improvement in academic and administrative practices.
                                    </p>
                                    <p>
                                        Through the initiatives of the IQAC, we strive to strengthen teaching–learning processes, uphold quality benchmarks, and support holistic student development, nurturing responsible graduates prepared for professional success and meaningful contribution to society.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-4 border-t border-zinc-100 pt-8">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">
                                        Vice Principal Name
                                    </h3>
                                    <p className="text-[#0CA789] font-medium text-sm mt-1">
                                        Vice Principal & IQAC Director, CM College
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="flex flex-col gap-2">
                                    <a href="mailto:vp@cmcollege.edu.in" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#7a0b3a] transition-colors bg-zinc-50 px-4 py-2 rounded-full border border-zinc-100">
                                        <Mail size={16} className="text-[#0CA789]" />
                                        <span className="font-medium">vp@cmcollege.edu.in</span>
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
