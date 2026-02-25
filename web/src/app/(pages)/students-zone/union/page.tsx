"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, ShieldCheck, Award, Flag, Menu, X, Rocket } from "lucide-react";

interface UnionTab {
    id: string;
    label: string;
    icon: any;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const UNION_COMMITTEE = [
    { role: "Chairperson", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Vice Chairperson", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "General Secretary", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Joint Secretary", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "University Union Councilor", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Magazine Editor", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "General Captain", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Fine Arts Secretary", name: "Student Name", department: "Department", image: "/images/default-user-placeholder.png" },
];

const UNION_TABS: UnionTab[] = [
    {
        id: "about",
        label: "About Union",
        icon: Users,
        title: "College Students Union",
        subtitle: "Voice of the Students",
        content: (
            <div className="space-y-8 text-zinc-600 leading-relaxed text-lg text-left md:text-justify">
                <div className="p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
                    <p className="relative z-10">
                        The College Students Union is the apex representative body of the students. It acts as an umbrella organization that coordinates various student activities, clubs, and forms the core link between the student community and the college administration.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-2xl bg-[#7B0046]/10 flex items-center justify-center text-[#7B0046] mb-4">
                            <Target className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2 font-serif text-lg">Our Mission</h3>
                        <p className="text-sm">To foster a vibrant campus life, champion student rights, and build a collaborative environment for academic and extracurricular excellence.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-800 mb-4">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2 font-serif text-lg">Our Vision</h3>
                        <p className="text-sm">Empowering students to become responsible leaders, critical thinkers, and active contributors to society.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "committee",
        label: "Union Committee",
        icon: Award,
        title: "The Executive Committee",
        subtitle: "Elected Representatives",
        content: (
            <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">
                <p>
                    The Union Committee comprises democratically elected student representatives who are dedicated to serving the student body. They lead various initiatives spanning arts, sports, academics, and student welfare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {UNION_COMMITTEE.map((member, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B0046]/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-[#7B0046]/10 pointer-events-none"></div>
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-zinc-100/50">
                                    <Image
                                        src={member.image}
                                        alt={member.role}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-zinc-900 leading-tight group-hover:text-[#7B0046] transition-colors">{member.name}</h4>
                                    <p className="text-sm text-zinc-500 mt-1">{member.department}</p>
                                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7B0046]/5 border border-[#7B0046]/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B0046] animate-pulse" />
                                        <p className="text-[#7B0046] font-bold text-[11px] tracking-wide uppercase">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "activities",
        label: "Activities & Initiatives",
        icon: Flag,
        title: "What We Do",
        subtitle: "Campus Life & Events",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                    The Students Union actively organizes a variety of events throughout the academic year to ensure an engaging campus life.
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                    {[
                        "Arts Fest: Annual cultural extravaganza showcasing student talents.",
                        "Sports Meet: Inter-departmental athletic and sports competitions.",
                        "College Magazine: Publishing the annual college magazine featuring student literature.",
                        "Fresher's Day & Farewell: Welcoming new students and bidding adieu to graduates.",
                        "Social Initiatives: Blood donation camps, clean-up drives, and awareness campaigns.",
                        "Leadership Workshops: Skill development and leadership training for students."
                    ].map((activity, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-indigo-50/30 hover:border-indigo-100 transition-colors group">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[#7B0046] shrink-0 group-hover:bg-indigo-600 transition-colors" />
                            <p className="text-sm font-medium text-zinc-700">{activity}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];

export default function StudentsUnionPage() {
    const [activeTabId, setActiveTabId] = useState(UNION_TABS[0].id);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const activeTab = UNION_TABS.find(t => t.id === activeTabId) || UNION_TABS[0];

    return (
        <main className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-32 md:pb-40">
            {/* HERO AREA */}
            <section className="relative py-24 px-6 bg-[#5D1035] text-white overflow-hidden mb-16 md:mb-20 lg:mb-24">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-size-[30px_30px] bg-[radial-gradient(#fff_1px,transparent_1px)]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 lg:pt-15">
                            College Students Union
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Empowering voices, nurturing talents, and building a vibrant campus community together.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="w-full px-4 md:px-[30px] max-w-[1600px] mx-auto mt-8 md:mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* LEFT SIDEBAR NAVIGATION */}
                    <div className="lg:col-span-3 sticky top-32 lg:top-40 h-fit z-30 self-start">
                        {/* Mobile Toggle */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                aria-label="Toggle Union Menu"
                                className="w-full flex items-center justify-between bg-[#5D1035] text-white p-4 rounded-xl shadow-lg shadow-[#5D1035]/20 font-bold uppercase tracking-wider transition-all active:scale-[0.98]"
                            >
                                <span className="flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    Union Menu
                                </span>
                                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>

                        {/* Sidebar Content */}
                        <div className={`bg-white/80 backdrop-blur-xl rounded-4xl shadow-xl shadow-zinc-200/50 border border-white p-6 overflow-hidden transition-all duration-300 ${isMobileOpen ? "block" : "hidden lg:block"}`}>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] px-2 mb-6 block">
                                Navigation
                            </span>
                            <div className="space-y-2">
                                {UNION_TABS.map((tab) => {
                                    const isActive = activeTabId === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => {
                                                setActiveTabId(tab.id);
                                                setIsMobileOpen(false);
                                            }}
                                            className={`w-full text-left px-5 py-4 rounded-4xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden ${isActive
                                                ? "text-white shadow-lg shadow-zinc-900/20 scale-[1.02]"
                                                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 font-medium"
                                                }`}
                                        >
                                            <tab.icon className={`relative z-10 w-4 h-4 transition-colors ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                                            <span className="relative z-10 text-sm">
                                                {tab.label}
                                            </span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeUnionTabIndicator"
                                                    className="absolute inset-0 bg-linear-to-r from-[#5D1035] to-[#7B0046] rounded-4xl -z-10"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT AREA */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            {UNION_TABS.map((tab) => (
                                activeTabId === tab.id && (
                                    <motion.div
                                        key={tab.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-white relative overflow-hidden"
                                    >
                                        {/* Decorative Background Mesh */}
                                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none opacity-60"></div>
                                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-linear-to-t from-[#7B0046]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none opacity-60"></div>

                                        {/* Content Header */}
                                        <div className="mb-12 relative z-10 border-b border-zinc-50 pb-8">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-bold tracking-widest uppercase mb-4"
                                            >
                                                <tab.icon className="w-3 h-3" />
                                                {tab.subtitle}
                                            </motion.span>
                                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-zinc-900 leading-tight">
                                                {tab.title}
                                            </h2>
                                        </div>

                                        {/* Body Content */}
                                        <div className="relative z-10 text-zinc-700 font-medium">
                                            {tab.content}
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
