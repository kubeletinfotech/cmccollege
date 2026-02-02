"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Book, GraduationCap, ExternalLink, Filter, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const syllabusData = [
    {
        dept: "Computer Science",
        courses: [
            { name: "B.Sc Computer Science", scheme: "2019 Scheme", link: "https://docs.uoc.ac.in/website/Syll/2019/BScCS.pdf" },
            { name: "B.Sc Computer Science", scheme: "2024 Scheme (FYUGP)", link: "https://docs.uoc.ac.in/website/Syll/2024/BScCS_FYUGP.pdf" },
            { name: "M.Sc Computer Science", scheme: "2019 Scheme", link: "https://docs.uoc.ac.in/website/Syll/2019/MScCS.pdf" }
        ]
    },
    {
        dept: "Commerce",
        courses: [
            { name: "B.Com (Finance)", scheme: "2019 Scheme", link: "https://docs.uoc.ac.in/website/Syll/2019/BCom.pdf" },
            { name: "B.Com", scheme: "2024 Scheme (FYUGP)", link: "https://docs.uoc.ac.in/website/Syll/2024/BCom_FYUGP.pdf" },
            { name: "M.Com", scheme: "2019 Scheme", link: "https://docs.uoc.ac.in/website/Syll/2019/MCom.pdf" }
        ]
    },
    {
        dept: "English",
        courses: [
            { name: "B.A English", scheme: "2019 Scheme", link: "https://docs.uoc.ac.in/website/Syll/2019/BAEnglish.pdf" },
            { name: "B.A English", scheme: "2024 Scheme (FYUGP)", link: "https://docs.uoc.ac.in/website/Syll/2024/BAEnglish_FYUGP.pdf" }
        ]
    }
];

export default function SyllabusPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSyllabus = syllabusData.filter(dept =>
        dept.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.courses.some(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 pt-[104px] lg:pt-[112px]">
            {/* Header */}
            <section className="bg-white border-b border-zinc-200 py-12 px-6">
                <div className="container mx-auto">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Academic <span className="text-[#7a0b3a]">Syllabus</span></h1>
                            <p className="text-zinc-500 text-lg">
                                Access and download the official University of Calicut syllabi for all our undergraduate and postgraduate programs.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Search Bar */}
                    <div className="mt-10 relative max-w-xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by Department or Course..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-zinc-100 rounded-2xl border-none focus:ring-2 focus:ring-[#7a0b3a]/20 outline-none font-medium transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSyllabus.map((dept, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                                            <Book size={20} className="text-[#7a0b3a]" />
                                        </div>
                                        <h2 className="text-xl font-bold text-zinc-800">{dept.dept}</h2>
                                    </div>

                                    <div className="space-y-3">
                                        {dept.courses.map((course, j) => (
                                            <a
                                                key={j}
                                                href={course.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 hover:bg-[#7a0b3a] transition-all duration-300"
                                            >
                                                <div>
                                                    <div className="font-bold text-zinc-800 group-hover:text-white transition-colors">{course.name}</div>
                                                    <div className="text-xs text-zinc-400 group-hover:text-white/60 font-medium tracking-widest uppercase mt-1">{course.scheme}</div>
                                                </div>
                                                <ExternalLink size={16} className="text-zinc-300 group-hover:text-white transition-colors" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {filteredSyllabus.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-zinc-300 mb-4 flex justify-center">
                                <Search size={64} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-500">No results found for "{searchQuery}"</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* Notice Section */}
            <section className="py-16 px-6 bg-[#7a0b3a] text-white">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Can't find your syllabus?</h2>
                    <p className="text-pink-100/70 mb-8 leading-relaxed">
                        Syllabi are occasionally updated by the University. You can visit the official Calicut University portal for the complete archive.
                    </p>
                    <a
                        href="https://docs.uoc.ac.in/website/Syll/"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-white text-[#7a0b3a] px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg shadow-maroon-950/20"
                    >
                        Visit University Portal
                        <ChevronRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
}
