"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Award, Users } from "lucide-react";

const stats = [
    { id: 1, label: "Established", value: "2010", icon: Building2 },
    { id: 2, label: "Departments", value: "8+", icon: GraduationCap },
    { id: 3, label: "Accreditation", value: "A+", icon: Award },
    { id: 4, label: "Students", value: "2000+", icon: Users },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* 
        SECTION 1: HERO STORY 
        Layout: Image Left, Text Right
      */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://ik.imagekit.io/5c6j602yp/About/college-image"
                            alt="CM College Campus"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 leading-tight">
                            A Legacy of <br />
                            <span className="text-emerald-700">Academic Excellence</span>
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            Established in <strong className="text-zinc-900">2010</strong>, CM College of Arts and
                            Science has emerged as a beacon of higher education in the region. Rooted in moral integrity
                            and social commitment, we strive to bridge the gap between traditional values and modern
                            educational demands.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            Our vision goes beyond the classroom. We aim to nurture future leaders who are not only
                            skilled professionals but also compassionate individuals dedicated to social upliftment and regional impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 
        SECTION 2: INSTITUTIONAL BACKGROUND 
        Layout: Text Left, Image Right
      */}
            <section className="bg-zinc-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900">
                                Institutional Background
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed font-light">
                                The CM Centre has successfully journeyed through three decades of educational excellence.
                                With a strong presence in Kozhikode and Wayanad, our institutions have become synonymous
                                with quality and trust.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed font-light">
                                We believe in inclusive education. Our charitable initiatives across Kerala provide
                                opportunities for students from diverse financial and social backgrounds to pursue
                                dream careers in Medicine, Engineering, Management, and Humanities.
                            </p>
                            <div className="pt-4">
                                <blockquote className="border-l-4 border-emerald-600 pl-6 italic text-zinc-700 text-lg">
                                    "Empowering generations through knowledge and ethics."
                                </blockquote>
                            </div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://ik.imagekit.io/5c6j602yp/Banner/Untitled%20design.png?updatedAt=1768553045031" // Valid placeholder for now
                                alt="Institutional Overview"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 3: GROWTH & RECOGNITION (STATS)
        Layout: Full width with stats
      */}
            {/* 
        SECTION 3: GROWTH & RECOGNITION (STATS)
        Layout: Compact Layout - Stat Strip
      */}
            <section className="py-16 bg-gradient-to-r from-emerald-950 to-emerald-900 text-white relative overflow-hidden">

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-32 -mt-32 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-400 rounded-full blur-[100px] -ml-20 -mb-20 opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-wide">
                            Growth & Recognition
                        </h2>
                        <p className="text-emerald-100/80 text-sm md:text-base font-light max-w-2xl mx-auto">
                            Milestones of academic brilliance and institutional excellence.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center border-t border-emerald-800/50 pt-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center justify-center group"
                                >
                                    <div className="flex items-center gap-3 mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                                        <stat.icon className="w-5 h-5 text-emerald-300/90" strokeWidth={1.5} />
                                        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm text-emerald-100/70 uppercase tracking-widest font-medium">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

