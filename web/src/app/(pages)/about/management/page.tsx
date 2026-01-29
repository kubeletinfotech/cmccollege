"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, History, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const managementMembers = [
    {
        name: "TK Abdu Rahman Baqavi",
        role: "Chairman, CM College of Arts and Science and General Secretary, CM Centre, Madavoor",
        image: "https://ik.imagekit.io/5c6j602yp/About/chairman.jpg"
    },
    {
        name: "CM Ibrahim",
        role: "President, President CM Centre Madavoor",
        image: "https://ik.imagekit.io/5c6j602yp/About/president.jpg"
    },
    {
        name: "NA Backer Haji",
        role: "Finance Secretary, CM Centre Madavoor",
        image: "https://ik.imagekit.io/5c6j602yp/About/finance.jpg"
    },
    {
        name: "Mr. Abdul Rasheed",
        role: "TGeneral Manager, CM Centre Madavoor",
        image: "https://ik.imagekit.io/5c6j602yp/About/General-manager.jpg"
    }
];

export default function ManagementPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <div className="relative rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 p-8 md:p-12">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7a0b3a]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl -ml-24 -mb-24 pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7a0b3a]"></span>
                            <span className="text-sm font-bold tracking-widest text-[#7a0b3a] uppercase">Management</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 font-agency">
                            Advisory Board
                        </h1>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Guided by a commitment to academic excellence and institutional integrity, our management
                            team ensures a nurturing environment where innovation and tradition coexist.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Chairman Message Section */}
            <ScrollReveal>
                <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(123,0,70,0.05)] border border-zinc-100 flex flex-col md:flex-row relative">
                    {/* Decorative Pattern Background */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <div className="h-full w-full bg-[radial-gradient(#7a0b3a_0.5px,transparent_0.5px)] bg-size-[24px_24px] opacity-10"></div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-5/12 lg:w-4/12 relative min-h-[400px] md:min-h-full">
                        <Image
                            src="https://ik.imagekit.io/5c6j602yp/About/chairman.jpg"
                            alt="TK Abdurahiman Baquavi - Chairman"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:hidden"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-7/12 lg:w-8/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white/80 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-0.5 bg-[#7a0b3a]"></span>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-[#7a0b3a] uppercase">Chairman&apos;s Message</h2>
                        </div>

                        <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                            <p>
                                <span className="text-4xl text-[#7a0b3a]/20 float-left mr-2 font-serif -mt-2">&ldquo;</span>
                                Quthub al Alam CM valiyullahi, who rose to prominence through a prosperous life, was the pillar of support and shade of strength for thousands and that shadow continues even after his death. The CM Memorial Centre was established in his hometown of Madavoor during his lifetime at the behest of greats.
                            </p>
                            <p>
                                He had dreamt to have an Islamic institution in his native place which can give shelter to orphans, destitute, and the marginalized section of society. Now, more than 3500 students are studying under this institution which has students from primary school to professional courses. The institution aims for an educated and civilized society that values morality, secularism, patriotism, religious attitude, and social life, and adopts a method of education in which traditional Islamic principles and modern academic teachings are merged.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-zinc-100">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0CA789] uppercase tracking-tighter">
                                TK ABDURAHIMAN BAQUAVI
                            </h3>
                            <p className="text-zinc-500 font-medium mt-1">
                                General Secretary, CM Centre
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Members Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {managementMembers.map((member, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                        <div className="group flex flex-col items-center">
                            {/* Portrait Image Container */}
                            <div className="relative aspect-[4/5] w-full bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 mb-6 border border-zinc-100/50">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle Maroon Overlay on hover */}
                                <div className="absolute inset-0 bg-[#7B0046]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Details */}
                            <div className="text-center w-full">
                                <h3 className="text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-[#7B0046] mb-2 leading-tight">
                                    {member.name}
                                </h3>
                                <div className="h-0.5 w-6 bg-[#7B0046]/20 mx-auto my-3 group-hover:w-16 transition-all duration-300"></div>
                                <p className="text-[#7B0046] text-[10px] md:text-xs font-bold tracking-widest uppercase leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
