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
    { role: "Chairman", name: "Anshif M", department: "3rd year BBA", image: "https://ik.imagekit.io/1yxtj9qun/Union/Anshif.jpeg" },
    { role: "Vice Chairperson", name: "Fathimath Rafidha", department: "2nd year Bcom", image: "https://ik.imagekit.io/1yxtj9qun/Union/rafidha.jpeg?updatedAt=1771997082283" },
    { role: "UUC", name: "Muhammed Ganiyy", department: "1st year BCA", image: "https://ik.imagekit.io/1yxtj9qun/Union/ganiyy.jpeg" },
    { role: "General Secretary", name: "Muhammed Irfan", department: "3rd year Bcom", image: "https://ik.imagekit.io/1yxtj9qun/Union/Muhammed-Irfan.jpeg?updatedAt=1771997082283" },
    { role: "Joint Secretary", name: "Ardra AS", department: "1st year BCA", image: "https://ik.imagekit.io/1yxtj9qun/Union/Ardra" },
    { role: "Magazine Editor", name: "Athira VM", department: "1st year Bcom", image: "https://ik.imagekit.io/1yxtj9qun/Union/athira.jpeg" },
    { role: "General Captain", name: "Suhail", department: "1st year Bcom", image: "https://ik.imagekit.io/1yxtj9qun/Union/suhail.jpeg" },
    { role: "Fine Arts Secretary", name: "Fathima Rasbana", department: "3rd year Economics", image: "https://ik.imagekit.io/1yxtj9qun/Union/Rabsana.jpeg?updatedAt=1771997081935" },
    { role: "First Year Representative", name: "Shanif", department: "1st year Bcom", image: "https://ik.imagekit.io/1yxtj9qun/Union/shanif.jpeg?updatedAt=1771997079211" },
    { role: "Second Year Representative", name: "Shaheedha Hannath", department: "2nd year Masscom", image: "https://ik.imagekit.io/1yxtj9qun/Union/Shaheedha.jpeg" },
    { role: "Third Year Representative", name: "Nithya Sivan", department: "3rd year BCA", image: "https://ik.imagekit.io/1yxtj9qun/Union/Nithya.jpeg" },
];

const UNION_NAME = "Inthifada";

const UNION_TABS: UnionTab[] = [
    {
        id: "about",
        label: "About Union",
        icon: Users,
        title: "College Students Union",
        subtitle: "Voice of the Students",
        content: (
            <div className="space-y-8 text-zinc-600 leading-relaxed text-lg text-left md:text-justify">
                <div className="p-8 bg-linear-to-br from-[#5D1035] to-[#7B0046] rounded-[2rem] border border-[#7B0046]/30 relative overflow-hidden shadow-2xl shadow-[#5D1035]/20 group">
                    {/* Glowing Orbs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 mix-blend-overlay transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24 mix-blend-overlay"></div>
                    <p className="relative z-10 text-white/95 font-medium leading-relaxed">
                        The College Students Union is the apex representative body of the students. It acts as an umbrella organization that coordinates various student activities, clubs, and forms the core link between the student community and the college administration.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="group p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/20 hover:shadow-2xl hover:shadow-[#5D1035]/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#5D1035] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#5D1035]/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-3 font-serif text-2xl relative z-10">Our Mission</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed relative z-10">To foster a vibrant campus life, champion student rights, and build a collaborative environment for academic and extracurricular excellence.</p>
                    </div>
                    <div className="group p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/20 hover:shadow-2xl hover:shadow-[#5D1035]/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-bl from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#7B0046] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#7B0046]/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-3 font-serif text-2xl relative z-10">Our Vision</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed relative z-10">Empowering students to become responsible leaders, critical thinkers, and active contributors to society.</p>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {UNION_COMMITTEE.map((member, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl p-5 border border-zinc-100 shadow-xl shadow-zinc-200/30 hover:shadow-2xl hover:shadow-[#5D1035]/20 transition-all duration-500 overflow-hidden flex items-center gap-5 cursor-default hover:-translate-y-1">
                            {/* Decorative Accent Line */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-[#5D1035] to-[#7B0046] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-inner border-4 border-zinc-50 group-hover:border-[#7B0046]/10 transition-colors duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.role}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex-1 py-2">
                                <h4 className="text-xl font-bold text-zinc-900 leading-tight tracking-tight group-hover:text-[#5D1035] transition-colors">{member.name}</h4>
                                <p className="text-sm text-zinc-500 mt-0.5">{member.department}</p>
                                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 group-hover:bg-[#5D1035] group-hover:border-[#5D1035] transition-colors duration-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#5D1035] group-hover:bg-amber-400 group-hover:animate-pulse transition-colors duration-500" />
                                    <p className="text-zinc-600 group-hover:text-white font-bold text-[10px] tracking-widest uppercase transition-colors duration-500">{member.role}</p>
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
                        <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white border border-zinc-100 shadow-lg shadow-zinc-200/40 hover:shadow-2xl hover:shadow-[#5D1035]/15 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#7B0046]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="mt-1 w-3 h-3 rounded-full bg-[#5D1035] shrink-0 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-500 shadow-sm" />
                            <p className="text-[15px] font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300 relative z-10">{activity}</p>
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
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center justify-center mb-6 lg:pt-15">
                            <div className="px-6 py-2 rounded-full border border-white bg-emerald-400/10 backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                                <span className="text-gray-100 font-extrabold tracking-[0.2em] uppercase text-sm md:text-base">
                                    {UNION_NAME}
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
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

                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#5D1035]/5 border border-white relative overflow-hidden"
                            >
                                {/* Decorative Background Mesh */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-[#7B0046]/5 to-transparent rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none opacity-60"></div>
                                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-linear-to-t from-[#5D1035]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none opacity-60"></div>

                                {/* Content Header */}
                                <div className="mb-12 relative z-10 border-b border-zinc-50 pb-8">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-bold tracking-widest uppercase mb-4"
                                    >
                                        <activeTab.icon className="w-3 h-3" />
                                        {activeTab.subtitle}
                                    </motion.span>
                                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-zinc-900 leading-tight">
                                        {activeTab.title}
                                    </h2>
                                </div>

                                {/* Body Content */}
                                <div className="relative z-10 text-zinc-700 font-medium">
                                    {activeTab.content}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
