"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import toast from "react-hot-toast";

const DEPARTMENTS = [
    { name: "Department of Computer Science", href: "/departments/computer-science" },
    { name: "Department of Management", href: "/departments/management" },
    { name: "Department of Mass Communication and Journalism", href: "/departments/mass-communication" },
    { name: "Department of Economics", href: "/departments/economics" },
    { name: "Department of English", href: "/departments/english" },
    { name: "Department of Commerce", href: "/departments/commerce" },
    { name: "Department of Statistics", href: "/departments/statistics" },
    { name: "Department of Psychology", href: "/departments/psychology" },
    { name: "Department of Multimedia", href: "/departments/multimedia" },
];

export default function DepartmentsPage() {
    const handleDeptClick = (e: React.MouseEvent, href: string) => {
        if (href === "/departments/human-resource-management" || href === "/departments/sociology" || href === "/departments/multimedia") {
            e.preventDefault();
            toast("Content coming soon!", {
                icon: "🚧",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <main className="min-h-screen bg-emerald-50 text-zinc-900 pt-[112px]">
            {/* --- HEADER SECTION --- */}
            {/* --- PAGE HEADER - Research Style --- */}
            <section className="relative py-24 px-6 bg-[#7B0046] text-white overflow-hidden mb-12">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 border border-white/20">
                            Academic Excellence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Departments of Academic Studies
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            At CM College, we are committed to fostering academic excellence, innovation, and research through specialized departments designed for student-centered learning and professional growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- DEPARTMENTS LIST SECTION --- */}
            <section className="pb-24 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {DEPARTMENTS.map((dept, index) => (
                            <ScrollReveal
                                key={dept.name}
                                delay={index * 50}
                            >
                                <Link
                                    href={dept.href}
                                    onClick={(e) => handleDeptClick(e, dept.href)}
                                    className="group flex items-center justify-between p-6 md:p-10 bg-white rounded-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t border-r border-b border-gray-100 border-l-4 border-l-[#7B0046] relative overflow-hidden h-full"
                                >
                                    <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
                                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-[#5D1035] transition-colors leading-tight">
                                            {dept.name}
                                        </h2>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#5D1035] font-bold text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-300 shrink-0 ml-4">
                                        <span className="hidden sm:inline">View</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>

                                    {/* Subtle hover background highlight */}
                                    <div className="absolute inset-0 bg-zinc-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION (BOTTOM) --- */}
            <section className="py-24 px-6 lg:px-24 bg-zinc-50/50">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-zinc-200/50 border border-zinc-100 text-center relative overflow-hidden group">
                            {/* Decorative background circle */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors duration-700" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#5D1035]/10 rounded-2xl flex items-center justify-center mb-8">
                                    <GraduationCap className="w-8 h-8 text-[#5D1035]" />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-6">
                                    Curious about our programs?
                                </h3>

                                <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
                                    Our academic advisors are here to help. Reach out to us for detailed information on course structures, syllabus updates, and career pathways.
                                </p>

                                <Link
                                    href="/contact"
                                    className="px-10 py-5 bg-[#5D1035] text-white font-bold rounded-xl shadow-xl shadow-[#5D1035]/20 hover:bg-[#4a0d2a] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 active:scale-95"
                                >
                                    Contact Admissions Office
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
