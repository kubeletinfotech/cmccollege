"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Award } from "lucide-react";

const stats = [
    { id: 1, label: "Total Units", value: "2", icon: ShieldCheck },
    { id: 2, label: "Program Officers", value: "2", icon: Award },
    { id: 3, label: "Unit 1 Volunteers", value: "50", icon: Users },
    { id: 4, label: "Unit 2 Volunteers", value: "50", icon: Users },
];

const PROGRAM_OFFICERS = [
    { role: "Program Officer - Unit 1", name: "Officer Name 1", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Program Officer - Unit 2", name: "Officer Name 2", department: "Department", image: "/images/default-user-placeholder.png" },
];

const GALLERY_IMAGES = [
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
];

export default function NSSPage() {
    return (
        <div className="bg-white min-h-screen pt-50">
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
                            src="https://ik.imagekit.io/1yxtj9qun/Home/images/nss-logo?updatedAt=1771959007929"
                            alt="NSS Activities"
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-700"
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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] leading-tight">
                            National Service Scheme <br />
                            <span className="text-[#00509E] text-3xl font-medium tracking-wide">Not Me But You</span>
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            Our primary objective is to develop the personality and character of the student youth through voluntary community service. "Education through Service" is the purpose of the NSS.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PROGRAM OFFICERS */}
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
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366]">
                                Our Program Officers
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed font-light">
                                Our dedicated Program Officers lead the NSS units, planning and executing various community service activities while mentoring student volunteers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 mb-4">
                                {PROGRAM_OFFICERS.map((officer, index) => (
                                    <div key={index} className="bg-white p-4 rounded-2xl shadow-lg border border-zinc-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-zinc-50 shadow-inner">
                                            <Image src={officer.image} alt={officer.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-zinc-900 text-[15px] leading-tight mb-1">{officer.name}</h4>
                                            <p className="text-xs text-zinc-500 mb-2">{officer.department}</p>
                                            <span className="inline-block text-[9px] uppercase font-bold text-[#00509E] bg-[#00509E]/10 px-2 py-1 rounded-full">{officer.role}</span>
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
                                alt="NSS Officers"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* UNITS REPLACED BY STATS (JUST COUNTS) */}
            <section className="py-16 bg-gradient-to-r from-[#001a33] to-[#003366] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-32 -mt-32 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px] -ml-20 -mb-20 opacity-20" />
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
                            Our Volunteer Force
                        </h2>
                        <p className="text-blue-100/80 text-sm md:text-base font-light max-w-2xl mx-auto">
                            The strength of NSS lies in its dedicated student volunteers actively collaborating on projects that benefit the community and campus.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center border-t border-blue-800/50 pt-10">
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
                                        <stat.icon className="w-5 h-5 text-blue-300/90" strokeWidth={1.5} />
                                        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm text-blue-100/70 uppercase tracking-widest font-medium text-center">
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-3">
                        Moments in Action
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed font-light">
                        A glimpse of our various community service projects, camps, and activities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 max-w-5xl mx-auto">
                    {GALLERY_IMAGES.map((imgSrc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
                        >
                            <Image
                                src={imgSrc}
                                alt={`NSS Activity ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
