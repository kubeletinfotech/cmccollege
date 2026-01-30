"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Linkedin } from "lucide-react";
import Image from "next/image";

const achievers = [
    {
        name: "Arun Kumar",
        batch: "2015-2018",
        achievement: "Senior Software Engineer at Google",
        description: "Arun has been instrumental in developing core cloud infrastructure at Google.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Priya Menon",
        batch: "2016-2019",
        achievement: "Civil Services Rank Holder (AIR 145)",
        description: "Priya cleared the UPSC examination with flying colors and serves as an IAS officer.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
        name: "Rahul E",
        batch: "2014-2017",
        achievement: "Founder of TechStart Solutions",
        description: "Rahul bootstrapped his startup to a million-dollar valuation in just 3 years.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
];

export default function AlumniAchieversPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                            <Trophy className="w-5 h-5" />
                        </span>
                        Alumni Achievers
                    </h3>

                    <div className="space-y-6">
                        {achievers.map((person, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-100 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 relative group hover:shadow-lg hover:shadow-emerald-900/5 transition-all"
                            >
                                <div className="absolute top-6 right-6 text-amber-400 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Star size={24} fill="currentColor" />
                                </div>

                                <div className="w-32 h-40 shrink-0 overflow-hidden rounded-xl border-4 border-white shadow-sm">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        width={200}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-zinc-900 mb-1">{person.name}</h4>
                                    <p className="text-sm font-medium text-emerald-600 mb-3 block bg-emerald-50 w-fit px-3 py-1 rounded-full">{person.batch}</p>
                                    <p className="text-zinc-800 font-semibold mb-2">{person.achievement}</p>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{person.description}</p>

                                    <button className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors">
                                        <Linkedin size={14} />
                                        Connect on LinkedIn
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
