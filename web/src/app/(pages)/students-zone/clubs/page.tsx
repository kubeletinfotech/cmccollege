"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clubs } from "@/data/clubs";
import { Sparkles, Users, Award, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClubsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-32 overflow-hidden bg-zinc-900 border-b border-white/10">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={14} />
                            Campus Life
                        </div>
                        <h1 className="text-4xl md:text-6xl font-agency font-bold text-white mb-6 uppercase tracking-tight">
                            Student <span className="text-emerald-500">Clubs</span> & Activities
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Empowering students through leadership, creativity, and the spirit of community.
                            Find your passion and join our vibrant campus clubs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Clubs Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {clubs.map((club, index) => (
                            <ScrollReveal key={club.id}>
                                <div className="group bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-zinc-50">
                                        <Image
                                            src={club.image}
                                            alt={club.name}
                                            fill
                                            className="object-contain p-8 transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/10 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col grow">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                                                <Zap size={14} />
                                            </div>
                                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Active Member</span>
                                        </div>

                                        <h3 className="text-2xl font-agency font-bold text-zinc-900 mb-4 uppercase group-hover:text-emerald-700 transition-colors">
                                            {club.name}
                                        </h3>

                                        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                            {club.description}
                                        </p>

                                        {/* Coordinator Info */}
                                        {club.coordinator && (
                                            <div className="mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                                                    <Users size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Coordinator</p>
                                                    <p className="text-sm font-bold text-zinc-900 leading-tight">{club.coordinator.name}</p>
                                                    <p className="text-[10px] text-zinc-500 font-medium">{club.coordinator.designation}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Activity Pills */}
                                        <div className="mt-auto pt-6 border-t border-zinc-100">
                                            <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Key Activities</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {club.activities.map((activity, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-zinc-50 rounded-full text-[10px] font-bold text-zinc-600 border border-zinc-100"
                                                    >
                                                        {activity}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-agency font-bold text-zinc-900 uppercase mb-6">
                            Why join a <span className="text-emerald-600">club?</span>
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-light">
                            Beyond academics, clubs offer a unique space for personal growth and networking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Leadership", desc: "Take charge of initiatives and lead your peers in meaningful projects.", icon: Users },
                            { title: "Skill Building", desc: "Gain practical experience in tech, arts, and management through workshops.", icon: Zap },
                            { title: "Recognition", desc: "Earn certificates and recognition for your contributions to campus life.", icon: Award }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:border-emerald-200 transition-colors">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-900 mb-3 uppercase">{item.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
