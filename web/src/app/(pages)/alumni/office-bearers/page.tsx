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

                    {/* Currently hidden while details are updated */}
                    <div className="flex flex-col items-center justify-center py-16 text-center bg-zinc-50/50 rounded-3xl border border-dashed border-zinc-200">
                        <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-zinc-400 mb-4">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-2">Updating Soon</h4>
                        <p className="text-zinc-500 max-w-md mx-auto text-sm">The details of the current Alumni Office Bearers will be published here shortly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
