"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ShieldCheck, Award, Menu, X, HeartHandshake, Image as ImageIcon } from "lucide-react";

interface NssTab {
    id: string;
    label: string;
    icon: any;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const PROGRAM_OFFICERS = [
    { role: "Program Officer - Unit 1", name: "Officer Name 1", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Program Officer - Unit 2", name: "Officer Name 2", department: "Department", image: "/images/default-user-placeholder.png" },
];

const NSS_STUDENTS_UNIT_1 = [
    { name: "Student 1", department: "BBA" },
    { name: "Student 2", department: "Bcom" },
    { name: "Student 3", department: "BCA" },
    { name: "Student 4", department: "Masscom" },
    { name: "Student 5", department: "BA English" },
];

const NSS_STUDENTS_UNIT_2 = [
    { name: "Student A", department: "Bcom" },
    { name: "Student B", department: "BCA" },
    { name: "Student C", department: "BBA" },
    { name: "Student D", department: "Masscom" },
    { name: "Student E", department: "Economics" },
];

const GALLERY_IMAGES = [
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
];

const NSS_TABS: NssTab[] = [
    {
        id: "about",
        label: "About NSS",
        icon: HeartHandshake,
        title: "National Service Scheme",
        subtitle: "Not Me But You",
        content: (
            <div className="space-y-8 text-zinc-600 leading-relaxed text-lg text-left md:text-justify">
                <div className="p-8 bg-linear-to-br from-[#003366] to-[#00509E] rounded-[2rem] border border-[#00509E]/30 relative overflow-hidden shadow-2xl shadow-[#003366]/20 group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 mix-blend-overlay transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24 mix-blend-overlay"></div>
                    <p className="relative z-10 text-white/95 font-medium leading-relaxed">
                        The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="group p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/20 hover:shadow-2xl hover:shadow-[#003366]/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 rounded-2xl bg-[#003366] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#003366]/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-3 font-serif text-2xl relative z-10">Our Objective</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed relative z-10">To develop the personality and character of the student youth through voluntary community service. 'Education through Service' is the purpose of the NSS.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "officers",
        label: "Program Officers",
        icon: Award,
        title: "NSS Leaders",
        subtitle: "Guiding the Volunteers",
        content: (
            <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">
                <p>
                    Our dedicated Program Officers lead the NSS units, planning and executing various community service activities while mentoring student volunteers.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {PROGRAM_OFFICERS.map((officer, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl p-5 border border-zinc-100 shadow-xl shadow-zinc-200/30 hover:shadow-2xl hover:shadow-[#003366]/20 transition-all duration-500 overflow-hidden flex items-center gap-5 cursor-default hover:-translate-y-1">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-[#003366] to-[#00509E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-inner border-4 border-zinc-50 group-hover:border-[#00509E]/10 transition-colors duration-500">
                                <Image
                                    src={officer.image}
                                    alt={officer.role}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex-1 py-2">
                                <h4 className="text-xl font-bold text-zinc-900 leading-tight tracking-tight group-hover:text-[#003366] transition-colors">{officer.name}</h4>
                                <p className="text-sm text-zinc-500 mt-0.5">{officer.department}</p>
                                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 group-hover:bg-[#003366] group-hover:border-[#003366] transition-colors duration-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#003366] group-hover:bg-amber-400 group-hover:animate-pulse transition-colors duration-500" />
                                    <p className="text-zinc-600 group-hover:text-white font-bold text-[10px] tracking-widest uppercase transition-colors duration-500">{officer.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "units",
        label: "Units & Students",
        icon: Users,
        title: "Our Volunteer Force",
        subtitle: "The Strength of NSS",
        content: (
            <div className="space-y-10 text-zinc-600 leading-relaxed text-lg">
                <p>
                    The college proudly hosts two active NSS units, comprising dedicated student volunteers who actively collaborate on projects that benefit the community and campus.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Unit 1 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-zinc-100 shadow-xl shadow-zinc-200/20">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-100">
                            <div className="w-12 h-12 rounded-xl bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">Unit 1</h3>
                                <p className="text-sm text-zinc-500">Student Volunteers</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {NSS_STUDENTS_UNIT_1.map((student, idx) => (
                                <li key={idx} className="flex justify-between items-center py-2 bg-zinc-50/50 px-4 rounded-xl">
                                    <span className="font-medium text-zinc-800">{student.name}</span>
                                    <span className="text-xs font-bold px-2 py-1 bg-white border border-zinc-200 rounded-md text-zinc-500">{student.department}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Unit 2 */}
                    <div className="bg-white rounded-[2rem] p-8 border border-zinc-100 shadow-xl shadow-zinc-200/20">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-100">
                            <div className="w-12 h-12 rounded-xl bg-[#00509E]/10 flex items-center justify-center text-[#00509E]">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">Unit 2</h3>
                                <p className="text-sm text-zinc-500">Student Volunteers</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {NSS_STUDENTS_UNIT_2.map((student, idx) => (
                                <li key={idx} className="flex justify-between items-center py-2 bg-zinc-50/50 px-4 rounded-xl">
                                    <span className="font-medium text-zinc-800">{student.name}</span>
                                    <span className="text-xs font-bold px-2 py-1 bg-white border border-zinc-200 rounded-md text-zinc-500">{student.department}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "gallery",
        label: "Gallery",
        icon: ImageIcon,
        title: "Moments in Action",
        subtitle: "A Glimpse of Our Work",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                    Take a look at the various community service projects, camps, and activities conducted by our vibrant NSS volunteers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    {GALLERY_IMAGES.map((imgSrc, idx) => (
                        <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group shadow-md">
                            <Image
                                src={imgSrc}
                                alt={`NSS Activity ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];

export default function NSSPage() {
    const [activeTabId, setActiveTabId] = useState(NSS_TABS[0].id);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const activeTab = NSS_TABS.find(t => t.id === activeTabId) || NSS_TABS[0];

    return (
        <main className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-32 md:pb-40">
            {/* HERO AREA */}
            <section className="relative py-24 px-6 bg-[#003366] text-white overflow-hidden mb-16 md:mb-20 lg:mb-24">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[size:30px_30px] bg-[radial-gradient(#fff_1px,transparent_1px)]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center justify-center mb-6 lg:pt-15">
                            <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <span className="text-gray-100 font-extrabold tracking-[0.2em] uppercase text-sm md:text-base">
                                    NSS
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            National Service Scheme
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Not Me But You. Dedicated to community service and nation building.
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
                                aria-label="Toggle NSS Menu"
                                className="w-full flex items-center justify-between bg-[#003366] text-white p-4 rounded-xl shadow-lg shadow-[#003366]/20 font-bold uppercase tracking-wider transition-all active:scale-[0.98]"
                            >
                                <span className="flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    NSS Menu
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
                                {NSS_TABS.map((tab) => {
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
                                                    layoutId="activeNssTabIndicator"
                                                    className="absolute inset-0 bg-linear-to-r from-[#003366] to-[#00509E] rounded-4xl -z-10"
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
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#003366]/5 border border-white relative overflow-hidden"
                            >
                                {/* Decorative Background Mesh */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-[#00509E]/5 to-transparent rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none opacity-60"></div>
                                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-linear-to-t from-[#003366]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none opacity-60"></div>

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
