"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Search, Filter, ChevronRight, ExternalLink, Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const batchTimetable = [
    {
        batch: "B.Sc Computer Science",
        sem: "S4 & S6 Batches",
        lastUpdated: "January 20, 2024",
        status: "Current",
        link: "#"
    },
    {
        batch: "B.Com (Finance)",
        sem: "S2 & S4 Batches",
        lastUpdated: "February 02, 2024",
        status: "Updated",
        link: "#"
    },
    {
        batch: "B.A English",
        sem: "All Batches",
        lastUpdated: "January 15, 2024",
        status: "Current",
        link: "#"
    },
    {
        batch: "M.Com",
        sem: "S2 Batch",
        lastUpdated: "January 25, 2024",
        status: "Current",
        link: "#"
    }
];

export default function TimeTablePage() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 pt-[104px] lg:pt-[112px]">
            {/* Header */}
            <section className="bg-zinc-900 border-b border-zinc-800 py-16 px-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7a0b3a]/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                <div className="container mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-pink-500/30">
                                    Scheduling
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Class <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-rose-400">Timetable</span></h1>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                Stay updated with the latest lecture schedules, lab timings, and batch rotations for the current academic session.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Timetable List */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-zinc-800">Available Schedules</h2>
                            <span className="px-2.5 py-1 bg-white border border-zinc-200 text-[#7a0b3a] text-xs font-bold rounded-lg shadow-sm">
                                {batchTimetable.length} Items
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-100 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-colors cursor-pointer">
                                <Filter size={16} />
                                Filter Batch
                            </button>
                            <a
                                href="https://pareekshabhavan.uoc.ac.in/index.php/examination/timetable"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-[#7a0b3a] rounded-xl text-sm font-bold text-white hover:bg-[#60082d] transition-colors cursor-pointer"
                            >
                                <ExternalLink size={16} />
                                Uni Timetable
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {batchTimetable.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="group bg-white rounded-3xl p-8 border border-zinc-50 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#7a0b3a] group-hover:text-white transition-all duration-500">
                                        <Clock size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-bold text-zinc-800 group-hover:text-[#7a0b3a] transition-colors">{item.batch}</h3>
                                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${item.status === 'Updated' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-zinc-500 font-medium mb-3">{item.sem}</p>
                                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
                                            Last Updated: <span className="text-zinc-600">{item.lastUpdated}</span>
                                        </p>
                                    </div>
                                    <button className="w-full sm:w-auto px-6 py-3 bg-zinc-900 group-hover:bg-[#7a0b3a] text-white rounded-xl text-sm font-bold transition-all duration-300 transform group-hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/10">
                                        <Download size={16} />
                                        View PDF
                                    </button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Link Card */}
            <section className="pb-24 px-6">
                <div className="container mx-auto">
                    <div className="bg-linear-to-r from-zinc-800 to-zinc-900 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Official University Timetables</h2>
                            <p className="text-zinc-400 max-w-xl">
                                Access the Pareeksha Bhavan portal for official examination timetables, practical exams, and viva voce schedules published by the University of Calicut.
                            </p>
                        </div>
                        <a
                            href="https://pareekshabhavan.uoc.ac.in/index.php/examination/timetable"
                            target="_blank"
                            className="relative z-10 px-8 py-4 bg-white text-zinc-900 rounded-2xl font-bold hover:bg-zinc-100 transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                        >
                            <ExternalLink size={20} />
                            Go to Uni Portal
                        </a>
                        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
