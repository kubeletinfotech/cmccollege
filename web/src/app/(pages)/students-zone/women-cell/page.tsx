"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Star, Heart, Sparkles } from "lucide-react";

const stats = [
    { id: 1, label: "Active Members", value: "100+", icon: Users },
    { id: 2, label: "Empowerment Events", value: "20+", icon: Star },
    { id: 3, label: "Support & Guidance", value: "24/7", icon: Heart },
    { id: 4, label: "Safety Initiatives", value: "15+", icon: ShieldCheck },
];

const COMMITTEE_MEMBERS = [
    { role: "Coordinator", name: "Coordinator Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Joint Coordinator", name: "Joint Coordinator Name", department: "Department", image: "/images/default-user-placeholder.png" },
];

const GALLERY_IMAGES = [
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
];

export default function WomenCellPage() {
    return (
        <div className="bg-white min-h-screen pt-32 md:pt-40 lg:pt-48">
            {/* HERO STORY */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/default-placeholder-image.jpg"
                            alt="Women Cell Activities"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#831843] leading-tight">
                            Women Cell <br />
                            <span className="text-[#be185d] text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mt-2 block">Empower. Educate. Elevate.</span>
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            The Women Cell at CM College is dedicated to empowering female students and staff, promoting gender equality, and ensuring a safe, supportive, and inclusive campus environment for everyone.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            Our primary objective is to facilitate women's empowerment through guest lectures, seminars, awareness programs, and welfare activities, fostering self-reliance and confidence among the female community on campus.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* COMMITTEE MEMBERS */}
            <section className="bg-zinc-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#831843]">
                                Our Committee
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed font-light">
                                Our dedicated committee members lead the Women Cell, planning and executing various empowerment activities and functioning as a strong support system for students.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 mb-4">
                                {COMMITTEE_MEMBERS.map((member, index) => (
                                    <div key={index} className="bg-white p-4 rounded-2xl shadow-lg border border-zinc-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-zinc-50 shadow-inner">
                                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-zinc-900 text-[15px] leading-tight mb-1">{member.name}</h4>
                                            <p className="text-xs text-zinc-500 mb-2">{member.department}</p>
                                            <span className="inline-block text-[9px] uppercase font-bold text-[#be185d] bg-[#be185d]/10 px-2 py-1 rounded-full">{member.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2 relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/default-placeholder-image.jpg"
                                alt="Women Cell Committee"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IMPACT STATS */}
            <section className="py-16 bg-linear-to-r from-[#4c0519] to-[#831843] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-32 -mt-32 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-400 rounded-full blur-[100px] -ml-20 -mb-20 opacity-20" />
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
                            Our Impact & Reach
                        </h2>
                        <p className="text-pink-100/80 text-sm md:text-base font-light max-w-2xl mx-auto">
                            The strength of the Women Cell lies in its widespread support and active collaboration to benefit female students across the campus.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center border-t border-pink-800/50 pt-10">
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
                                        <stat.icon className="w-5 h-5 text-pink-300/90" strokeWidth={1.5} />
                                        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm text-pink-100/70 uppercase tracking-widest font-medium text-center">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#831843] mb-3">
                        Moments of Empowerment
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed font-light">
                        A glimpse of our various events, seminars, and activities designed to inspire and uplift.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-8 max-w-5xl mx-auto auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[260px]">
                    {GALLERY_IMAGES.map((imgSrc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg border border-pink-50/20 ${idx === 0 ? "col-span-2 row-span-2" :
                                idx === 5 ? "col-span-2 md:col-span-1 row-span-1" :
                                    "col-span-1 row-span-1"
                                }`}
                        >
                            <Image
                                src={imgSrc}
                                alt={`Women Cell Activity ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {idx === 0 && (
                                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium text-sm border border-white/30 tracking-wide shadow-xl">
                                        <Sparkles size={16} className="text-pink-300" /> Key Highlight
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
