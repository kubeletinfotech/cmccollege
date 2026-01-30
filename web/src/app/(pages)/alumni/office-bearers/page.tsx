"use client";

import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, Mail } from "lucide-react";

const officeBearers = [
    { name: "John Doe", role: "President", email: "president@cmcollege.edu.in", image: null },
    { name: "Jane Smith", role: "Vice President", email: "vicepresident@cmcollege.edu.in", image: null },
    { name: "Robert Brown", role: "Secretary", email: "secretary@cmcollege.edu.in", image: null },
    { name: "Emily Davis", role: "Treasurer", email: "treasurer@cmcollege.edu.in", image: null },
    { name: "Michael Wilson", role: "Executive Member", email: null, image: null },
    { name: "Sarah Taylor", role: "Executive Member", email: null, image: null },
];

export default function OfficeBearersPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                            <ShieldCheck className="w-5 h-5" />
                        </span>
                        Office Bearers
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {officeBearers.map((person, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-zinc-50 border border-zinc-100 p-6 rounded-3xl flex items-center gap-4 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 shrink-0 overflow-hidden">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-900 transition-colors">{person.name}</h4>
                                    <p className="text-emerald-600 font-medium text-sm">{person.role}</p>
                                    {person.email && (
                                        <div className="flex items-center gap-2 text-zinc-500 text-xs mt-1">
                                            <Mail size={12} />
                                            <span>{person.email}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
