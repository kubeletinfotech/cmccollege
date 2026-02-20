"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const CM_COLLEGE_SCHOLARSHIPS = [
    { title: "POST MATRIC SCHOLARSHIP-MINORITY" },
    { title: "THE CHAIRMAN'S SCHOLARSHIP" },
    { title: "COLLEGE MANAGEMENT SCHOLARSHIP" },
    { title: "COLLEGE MINORITY SCHOLARSHIP" },
    { title: "COLLEGE SPORTS SCHOLARSHIP" },
    { title: "COLLEGE ST SCHOLARSHIP" },
    { title: "SCHOLARSHIP TEST" },
    { title: "THE DIRECTOR SCHOLARSHIP" },
    { title: "SCHOLARSHIP TEST LAKSHADWEEP STUDENTS" },
    { title: "COLLEGE MERIT SCHOLARSHIP" },
    { title: "COLLEGE PTA REFERENCE SCHOLARSHIP" },
    { title: "THE PEOPLE REPRESENTATIVE SCHOLARSHIP" },
    { title: "IMAM RAZI MERIT SCHOLARSHIP" },
];

export default function ScholarshipsPage() {
    return (
        <div className="space-y-12">
            {/* Header / Intro */}
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-emerald-900 mb-4 font-serif">Scholarships & Financial Aid</h2>
                <p className="text-zinc-600 leading-relaxed font-light">
                    CM College is committed to making education accessible. Explore our comprehensive list of
                    available scholarships and financial aid programs.
                </p>
            </div>

            {/* Simplified Name-Only Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CM_COLLEGE_SCHOLARSHIPS.map((sch, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className="group flex items-center gap-4 bg-white p-5 rounded-xl border border-zinc-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300"
                    >
                        <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <GraduationCap size={20} />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-zinc-800 group-hover:text-emerald-800 transition-colors uppercase tracking-tight">
                                {sch.title}
                            </h3>
                        </div>

                        <CheckCircle2 size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>

            {/* Support Box */}
            <div className="bg-[#fcfcfd] border border-zinc-100 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <Award size={32} className="text-emerald-600" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 font-serif">Financial Aid Assistance</h3>
                    <p className="text-zinc-500 mb-0 leading-relaxed font-light text-sm">
                        Need detailed information about a specific scholarship or help with the application?
                        Our student welfare office is here to guide you.
                    </p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-emerald-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/10">
                    Contact Office
                </button>
            </div>
        </div>
    );
}
