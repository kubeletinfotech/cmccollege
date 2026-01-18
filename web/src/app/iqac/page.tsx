"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileText, ShieldCheck, Target, Award, BookOpen } from "lucide-react";

// --- 1. CONFIGURATION & CONTENT ---

interface IacTab {
    id: string;
    label: string;
    icon: any; // Lucide icon
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const IQAC_TABS: IacTab[] = [
    {
        id: "about",
        label: "About IQAC",
        icon: ShieldCheck,
        title: "Internal Quality Assurance Cell",
        subtitle: "Commitment to Excellence",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                    The Internal Quality Assurance Cell (IQAC) was established to develop a system for conscious, consistent,
                    and catalytic improvement in the overall performance of the institution. As a post-accreditation quality
                    sustenance measure, the IQAC works towards realizing the goals of quality enhancement and sustenance.
                </p>
                <p>
                    Its primary objective is to channelize all efforts and measures of the institution towards promoting
                    holistic academic excellence. The IQAC functions as a participative organ of the institution, ensuring
                    stakeholder engagement in all quality initiatives.
                </p>
            </div>
        )
    },
    {
        id: "constitution",
        label: "Constitution",
        icon: FileText,
        title: "Constitution of the IQAC",
        subtitle: "Structural Framework",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                    The IQAC is constituted under the chairmanship of the Head of the Institution with heads of important
                    academic and administrative units and a few teachers and a few distinguished educationists and
                    representatives of local management and stakeholders.
                </p>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-4 font-serif text-lg">Composition</h4>
                    <ul className="space-y-3">
                        {["Chairperson: Head of the Institution", "Teachers to represent all level (Three to eight)", "One member from the Management", "Few Senior administrative officers", "One nominee each from local society, Students and Alumni", "One nominee each from Employers/Industrialists/Stakeholders", "Coordinator/Director of the IQAC"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-base">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7B0046] shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "functions",
        label: "Functions",
        icon: Target,
        title: "Functions of the IQAC",
        subtitle: "Operational Objectives",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>The core functions of the IQAC include:</p>
                <ul className="grid gap-4">
                    {[
                        "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.",
                        "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation.",
                        "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
                        "Dissemination of information on various quality parameters of higher education.",
                        "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.",
                        "Documentation of the various programmes/activities leading to quality improvement."
                    ].map((func, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-sm">
                                {i + 1}
                            </div>
                            <span className="pt-1">{func}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        id: "benefits",
        label: "IQAC Benefits",
        icon: Award,
        title: "Benefits of IQAC",
        subtitle: "Institutional Impact",
        content: (
            <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                    A fully functional IQAC will facilitate/contribute to:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.",
                        "Ensure internalization of the quality culture.",
                        "Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.",
                        "Provide a sound basis for decision-making to improve institutional functioning.",
                        "Act as a dynamic system for quality changes in HEIs.",
                        "Build an organised methodology of documentation and internal communication."
                    ].map((benefit, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-zinc-50 hover:bg-emerald-50/30 border border-zinc-100 hover:border-emerald-100 transition-colors">
                            <div className="mb-3 text-[#7B0046]">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-zinc-700">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];

export default function IQACPage() {
    const [activeTabId, setActiveTabId] = useState(IQAC_TABS[0].id);

    const activeTab = IQAC_TABS.find(t => t.id === activeTabId) || IQAC_TABS[0];

    return (
        <main className="min-h-screen bg-white">

            {/* HER0 / BREADCRUMB AREA */}
            <div className="bg-zinc-50 border-b border-zinc-100 pt-28 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                        <span>Home</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-emerald-800 font-medium">IQAC</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 tracking-tight">
                        Internal Quality Assurance Cell
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT SIDEBAR NAVIGATION */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-28 space-y-2">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-4 mb-4 block">
                                Contents
                            </span>
                            {IQAC_TABS.map((tab) => {
                                const isActive = activeTabId === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between group ${isActive
                                                ? "bg-emerald-50 text-emerald-900 font-bold border-l-4 border-[#7B0046]"
                                                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 font-medium"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            {/* Optional: Icon for each item */}
                                            {/* <tab.icon className={`w-4 h-4 ${isActive ? "text-[#7B0046]" : "text-zinc-400"}`} /> */}
                                            {tab.label}
                                        </span>
                                        {isActive && <ChevronRight className="w-4 h-4 text-[#7B0046]" />}
                                    </button>
                                );
                            })}

                            {/* Download / Extra Links Box (Optional) */}
                            <div className="mt-8 p-6 bg-zinc-900 rounded-2xl text-white">
                                <h4 className="font-bold mb-2 text-sm">IQAC Reports</h4>
                                <p className="text-zinc-400 text-xs mb-4">Download annual quality assurance reports.</p>
                                <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors">
                                    View Archive
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT AREA */}
                    <div className="lg:col-span-9 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Header of Content Section */}
                                <div className="mb-8 pb-8 border-b border-zinc-100">
                                    <span className="text-[#7B0046] font-bold tracking-widest text-xs uppercase mb-2 block">
                                        {activeTab.subtitle}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900">
                                        {activeTab.title}
                                    </h2>
                                </div>

                                {/* Body Content */}
                                <div className="prose prose-lg prose-emerald max-w-none">
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
