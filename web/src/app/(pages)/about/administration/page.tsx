"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, History, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const councilMembers = [
    {
        name: "T K Abdu Rahman Baqavi",
        role: "Chairman – CM College of Arts and Science and General Secretary – CM Centre.",
        image: "https://ik.imagekit.io/5c6j602yp/About/chairman.jpg"
    },
    {
        name: "Zainudheen T K",
        role: "Director – CM College of Arts and Science",
        image: "https://ik.imagekit.io/5c6j602yp/About/director.jpg"
    },
    {
        name: "Shafi Pulpara",
        role: "Principal, CM College of Arts and Science",
        image: "https://ik.imagekit.io/5c6j602yp/About/principal.jpeg"
    },
    {
        name: "Uvais T K",
        role: "Administrative Officer – CM College of Arts and Science",
        image: "/images/default-user-placeholder.png"
    },
    {
        name: "Jabir Ali P P",
        role: "IQAC Director, CM College of Arts and Science",
        image: "/images/default-user-placeholder.png"
    }
];

export default function AdministrationPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 🔴 HERO SECTION - Full-width Maroon Gradient */}
            <section className="relative h-[300px] md:h-[400px] rounded-[24px] md:rounded-[32px] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#7a0b3a] via-[#9f0f4e] to-[#7a0b3a] text-white shadow-xl md:shadow-2xl shadow-[#7a0b3a]/20">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold font-sans tracking-[0.15em] uppercase leading-tight drop-shadow-2xl">
                            Administrative <br className="md:hidden" /> Council
                        </h1>
                        <div className="w-16 md:w-24 h-0.5 bg-white/30 mx-auto mt-8 opacity-50"></div>
                    </motion.div>
                </div>
            </section>

            {/* 🧠 INTRO SECTION */}
            <section className="py-20 md:py-28 bg-white border-b border-zinc-50">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-zinc-900 mb-8 tracking-tight">
                            Our Visionary Leadership
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light">
                            Governed by a distinguished panel of leaders, the Administrative Council ensures the strategic
                            growth and moral integrity of CM College, fostering a legacy of academic distinction.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* 👥 COUNCIL MEMBERS SECTION - Single Row Layout */}
            <section className="pb-32 bg-white overflow-x-hidden">
                <div className="container mx-auto px-4">

                    {/* Decorative Header */}
                    <div className="flex justify-center mb-16 opacity-50">
                        <div className="h-1 w-24 bg-[#7a0b3a] rounded-full"></div>
                    </div>

                    {/* All Council Members in One Centered Row */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
                        {councilMembers.map((member, idx) => {
                            const isChairman = idx === 0;
                            return (
                                <ScrollReveal key={idx} delay={idx * 100}>
                                    <div className={`group flex flex-col items-center transition-all duration-500 ${isChairman ? 'z-10' : 'z-0'}`}>
                                        {/* Card Container - Size varies based on role */}
                                        <div
                                            className={`relative bg-white rounded-[24px] overflow-hidden shadow-lg border border-zinc-100 transition-all duration-500 
                                            ${isChairman
                                                    ? 'w-[320px] md:w-[380px] aspect-4/5 shadow-2xl scale-105 border-[#7a0b3a]/10 ring-4 ring-[#7a0b3a]/5'
                                                    : 'w-[260px] md:w-[280px] aspect-4/5 hover:-translate-y-2'
                                                }`}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay for Chairman */}
                                            {isChairman && (
                                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/60 to-transparent opacity-80"></div>
                                            )}
                                            {/* Lighter Gradient for others */}
                                            {!isChairman && (
                                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            )}

                                            {/* Name on Card for Chairman */}
                                            {isChairman && (
                                                <div className="absolute bottom-6 left-0 w-full text-center px-4">
                                                    <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md mb-1">{member.name}</h3>
                                                    <p className="text-[#ffcbde] text-xs font-bold uppercase tracking-widest">{member.role.split('–')[0]}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Name below card for others */}
                                        {!isChairman && (
                                            <div className="text-center mt-6 max-w-[260px]">
                                                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#7a0b3a] transition-colors duration-300">
                                                    {member.name}
                                                </h3>
                                                <p className="text-[#7a0b3a]/80 text-[11px] font-bold tracking-wider uppercase mt-1 leading-relaxed">
                                                    {member.role}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {isChairman && (
                                        <div className="text-center mt-8 max-w-[320px] md:max-w-[360px]">
                                            <p className="text-zinc-500 text-xs font-medium italic border-t border-zinc-100 pt-4">
                                                Leading with vision and integrity.
                                            </p>
                                        </div>
                                    )}
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
