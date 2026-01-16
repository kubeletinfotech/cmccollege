"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    Target,
    Lightbulb,
    Award,
    Layout,
    History,
    UserCheck,
    Quote,
    Menu,
    X,
    ShieldCheck
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal"; // Ensure we use the shared component if available, or keep using similar logic
import AccreditationSection from "@/components/AccreditationSection";

// --- SIDEBAR NAVIGATION ITEMS ---
const navItems = [
    { id: "history", label: "History", icon: <History size={18} /> },
    { id: "about-college", label: "About College", icon: <Layout size={18} /> },
    { id: "accreditation", label: "Accreditation", icon: <ShieldCheck size={18} /> },
    { id: "vision-mission", label: "Vision & Mission", icon: <Target size={18} /> },
    { id: "chairman-message", label: "Chairman's Message", icon: <UserCheck size={18} /> },
];

export default function AboutPage() {
    const [activeSection, setActiveSection] = useState("history");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll Spy & Header Offset Calculation
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Increased offset for better triggers

            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(item.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Adjust offset based on screen size (header height)
            const headerOffset = window.innerWidth < 1024 ? 180 : 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pt-[120px] lg:pt-[140px]">

            {/* --- HERO HEADER (Condensed) --- */}
            <section className="relative bg-[#7B0046] text-white py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Us</h1>
                    <nav className="flex items-center justify-center gap-2 text-sm font-medium text-rose-100/80">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-white">About</span>
                    </nav>
                </div>
            </section>

            {/* --- MOBILE STICKY NAV (Horizontal Scroll) --- */}
            <div className="lg:hidden sticky top-[100px] z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm overflow-x-auto no-scrollbar">
                <div className="flex items-center px-4 h-14 min-w-max gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm font-semibold whitespace-nowrap px-3 py-1.5 rounded-full transition-all
                                ${activeSection === item.id
                                    ? "bg-[#7B0046] text-white shadow-md"
                                    : "text-zinc-500 hover:text-[#7B0046] hover:bg-rose-50"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT GRID --- */}
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* --- DESKTOP SIDEBAR (Col 3) --- */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-44 space-y-6">
                            <div className="bg-white rounded-2xl shadow-lg shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
                                <div className="bg-[#7B0046] px-6 py-5">
                                    <h3 className="text-white font-bold text-lg tracking-wide">Quick Links</h3>
                                </div>
                                <nav className="flex flex-col p-2">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all mb-1
                                                ${activeSection === item.id
                                                    ? "bg-rose-50 text-[#7B0046] translate-x-1 font-bold"
                                                    : "text-zinc-600 hover:bg-zinc-50 hover:pl-6"
                                                }`}
                                        >
                                            <span className={`${activeSection === item.id ? "text-[#7B0046]" : "text-zinc-400"}`}>
                                                {item.icon}
                                            </span>
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact Widget */}
                            <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#7B0046] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <div className="relative z-10 space-y-4">
                                    <h4 className="font-bold text-lg">Admissions Open</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">Join our vibrant community for the upcoming academic year.</p>
                                    <Link href="/admissions" className="inline-block w-full text-center px-4 py-3 bg-white text-zinc-900 text-sm font-bold rounded-lg hover:bg-rose-50 transition-all transform hover:scale-105">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CONTENT AREA (Col 9) --- */}
                    <div className="lg:col-span-9 space-y-16">

                        {/* 1. HISTORY SECTION */}
                        <section id="history" className="scroll-mt-32">
                            <ScrollReveal>
                                <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#7B0046]"></div>
                                    <div className="mb-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#7B0046] mb-2">History</h2>
                                        <div className="h-1 w-20 bg-rose-100 rounded-full"></div>
                                    </div>
                                    <div className="prose prose-lg text-zinc-600 max-w-none text-justify space-y-4">
                                        <p className="indent-8 first-letter:text-3xl first-letter:font-bold first-letter:text-[#7B0046] first-letter:mr-1">
                                            Responding to the call and understanding of the formidable challenges that may have to be faced in the future, visionaries and social engineers shared the idea of establishing an educational cluster to facilitate the upliftment of the minority community.
                                        </p>
                                        <p>
                                            In pursuance of this, CM College of Arts and Science was established with a vision to create leaders in different fields and promote higher education in emerging areas of arts, science, and humanities. The institution was founded on the principles of academic discipline and spiritual growth, serving as a cornerstone for students pursuing their +1 and +2 education since 2010.
                                        </p>
                                        <p>
                                            Over the years, the college has grown into a premier institution in Wayanad, providing an integrated environment where the curriculum is meticulously designed to meet modern educational standards while remaining deeply rooted in moral values.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* 2. ABOUT COLLEGE SECTION */}
                        <section id="about-college" className="scroll-mt-32">
                            <ScrollReveal>
                                <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#7B0046]"></div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#7B0046] mb-2">About College</h2>
                                        <div className="h-1 w-20 bg-rose-100 rounded-full"></div>
                                    </div>

                                    <div className="relative h-[250px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-md mb-8 group">
                                        <Image
                                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2572&auto=format&fit=crop"
                                            alt="College Campus View"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                    </div>

                                    <div className="prose prose-lg text-zinc-600 max-w-none text-justify space-y-4">
                                        <p>
                                            CM College of Arts and Science offers a unique blend of modern education and traditional values. Located in the serene landscape of Nadavayal, Wayanad, our campus provides an ideal atmosphere for academic pursuits. The institution is affiliated with the state education board and offers specialized coaching for competitive exams like NEET, JEE, and KEAM.
                                        </p>
                                        <p>
                                            Our approach goes beyond traditional teaching; we focus on the holistic development of every student. We have state-of-the-art laboratories, a well-stocked library, and smart classrooms that enhance the learning experience. The campus culture is vibrant, inclusive, and discipline-oriented.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* 3. ACCREDITATION SECTION */}
                        <section id="accreditation" className="scroll-mt-32">
                            <AccreditationSection />
                        </section>

                        {/* 4. VISION & MISSION SECTION */}
                        <section id="vision-mission" className="scroll-mt-32">
                            <ScrollReveal>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Vision Card */}
                                    <div className="group bg-white p-8 rounded-2xl border-l-4 border-l-[#7B0046] shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-[#7B0046] mb-6 group-hover:bg-[#7B0046] group-hover:text-white transition-colors">
                                            <Lightbulb size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Our Vision</h3>
                                        <p className="text-zinc-600 leading-relaxed">
                                            "To be a center of excellence in higher education, fostering intellectual growth, ethical values, and social responsibility, thereby creating enlightened individuals capable of contributing positively to society."
                                        </p>
                                    </div>

                                    {/* Mission Card */}
                                    <div className="group bg-white p-8 rounded-2xl border-l-4 border-l-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-800 mb-6 group-hover:bg-zinc-800 group-hover:text-white transition-colors">
                                            <Award size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Our Mission</h3>
                                        <ul className="space-y-3 text-zinc-600">
                                            <li className="flex items-start gap-3">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#7B0046]" />
                                                <span className="text-sm">Provide accessible, high-quality education.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#7B0046]" />
                                                <span className="text-sm">Inculcate moral and ethical values alongside academics.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#7B0046]" />
                                                <span className="text-sm">Foster innovation and critical thinking.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* 5. CHAIRMAN'S MESSAGE SECTION */}
                        <section id="chairman-message" className="scroll-mt-32">
                            <ScrollReveal>
                                <div className="bg-[#50002d] rounded-2xl p-8 md:p-14 text-white relative overflow-hidden shadow-xl">
                                    {/* Quote Icon Background */}
                                    <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
                                        <Quote size={180} />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
                                        {/* Profile Image */}
                                        <div className="shrink-0 relative">
                                            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-[6px] border-white/10 shadow-2xl overflow-hidden relative">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                                    alt="Honorable Chairman"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Decorative Circle */}
                                            <div className="absolute -inset-4 border border-white/10 rounded-full -z-10 scale-90"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center md:text-left space-y-8 flex-1">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2 tracking-wide">Chairman's Message</h2>
                                                <div className="flex items-center justify-center md:justify-start gap-3">
                                                    <div className="h-0.5 w-12 bg-rose-400/50"></div>
                                                    <p className="text-rose-200/90 font-medium text-sm uppercase tracking-wider">Leading with Vision</p>
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <p className="text-rose-50/90 leading-loose text-base md:text-lg text-justify font-light">
                                                    "The CM Centre has had a successful journey spanning three decades, during which it has established educational institutions in various locations in Kozhikode and Wayanad. The organization has also undertaken charitable initiatives across Kerala, providing educational opportunities to people of all ages, from primary school to post-graduation, as well as conducting research. Through its efforts, the CM Centre has helped hundreds of students from disadvantaged financial and social backgrounds to pursue successful careers in fields such as Islamic Studies, Medicine, Engineering, Teaching, and Management. Students studying at the CM Centre’s campuses have achieved remarkable academic success, scoring high ranks in a variety of exams and setting new records. The CM Centre’s contributions to society are significant, as it has helped individuals improve their educational and social standing."
                                                </p>
                                            </div>

                                            <div className="pt-4 border-t border-white/10 flex flex-col items-center md:items-start">
                                                <p className="font-bold text-2xl tracking-tight">Dr. Abdul Rahman</p>
                                                <p className="text-rose-200/80 text-sm font-medium uppercase tracking-wide mt-1">Chairman, CM College</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                    </div>
                </div>
            </div>

        </main>
    );
}
