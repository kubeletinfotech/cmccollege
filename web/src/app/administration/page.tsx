"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const councilMembers = [
    {
        name: "Dr. Abdul Rahman",
        role: "CHAIRMAN",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Dr. Sayeed Mohammed",
        role: "VICE CHAIRMAN",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Adv. Ibrahim Kutty",
        role: "SECRETARY",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Mr. Abdul Rasheed",
        role: "TREASURER",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Prof. Khadija Beevi",
        role: "ACADEMIC ADVISOR",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        name: "Dr. Faisal Rahman",
        role: "EXECUTIVE MEMBER",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
];

export default function AdministrationPage() {
    return (
        <main className="min-h-screen bg-stone-50/50 pt-32 pb-20 md:pt-40 md:pb-28">

            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-4 md:px-6 text-center mb-20">
                <ScrollReveal>
                    <span className="inline-block py-1 px-4 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 border border-emerald-100">
                        Leadership & Governance
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-zinc-900 mb-6">
                        Administrative Council
                    </h1>
                    <div className="w-24 h-1 bg-emerald-800 mx-auto rounded-full mb-8"></div>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Dedicated individuals guiding our institution towards academic excellence
                        with integrity and vision.
                    </p>
                </ScrollReveal>
            </section>

            {/* 2. COUNCIL MEMBERS GRID */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                    {councilMembers.map((member, idx) => (
                        <ScrollReveal key={idx} delay={idx * 50}>
                            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-zinc-100 flex flex-col h-full">

                                {/* Portrait Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#7B0046]/40 via-[#7B0046]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Details */}
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-900 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-emerald-800 text-xs font-bold tracking-widest uppercase mt-2">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 3. ACTION LINKS */}
            <section className="container mx-auto px-4 md:px-6">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            href="/administration/directory"
                            className="inline-flex items-center px-8 py-3 bg-emerald-900 text-white font-bold rounded-full hover:bg-emerald-950 transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            <Users size={18} className="mr-2" />
                            Full Directory
                        </Link>
                        <Link
                            href="/administration/charter"
                            className="inline-flex items-center text-emerald-900 font-bold hover:gap-2 transition-all border border-emerald-900/20 px-8 py-3 rounded-full hover:bg-emerald-50"
                        >
                            <FileText size={18} className="mr-2" />
                            View Governance Charter <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}
