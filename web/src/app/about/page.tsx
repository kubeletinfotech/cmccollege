"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Target,
    Lightbulb,
    Award,
    Layout,
    History,
    UserCheck,
    Quote
} from "lucide-react";

// --- SIDEBAR NAVIGATION ITEMS ---
const navItems = [
    { id: "history", label: "History", icon: <History size={18} /> },
    { id: "about-college", label: "About College", icon: <Layout size={18} /> },
    { id: "vision-mission", label: "Vision & Mission", icon: <Target size={18} /> },
    { id: "principal-message", label: "Principal's Message", icon: <UserCheck size={18} /> },
];

// --- FADE UP WRAPPER ---
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default function AboutPage() {
    const [activeSection, setActiveSection] = useState("history");

    // Scroll Spy for Active Section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150; // Offset for header

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc] font-sans text-zinc-900 selection:bg-[#800000]/10 selection:text-[#800000]">

            {/* --- HERO BANNER (Small) --- */}
            <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-[#800000]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-4 pt-10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif">
                        About <span className="text-rose-200">Us</span>
                    </h1>
                    <nav className="flex items-center justify-center gap-2 text-sm font-medium text-rose-100/80">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-white">About</span>
                    </nav>
                </div>
            </section>

            {/* --- MAIN CONTENT GRID --- */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- SIDEBAR NAVIGATION (Col 3) --- */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-28 space-y-8">
                            {/* Navigation List */}
                            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
                                <div className="bg-[#800000] px-6 py-4">
                                    <h3 className="text-white font-bold text-lg uppercase tracking-wide">About College</h3>
                                </div>
                                <nav className="flex flex-col">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all border-b border-zinc-50 last:border-0 text-left
                                                ${activeSection === item.id
                                                    ? "bg-rose-50 text-[#800000] border-l-4 border-l-[#800000]"
                                                    : "text-zinc-600 hover:bg-zinc-50 hover:pl-7 border-l-4 border-l-transparent"
                                                }`}
                                        >
                                            <span className={`${activeSection === item.id ? "text-[#800000]" : "text-zinc-400"}`}>
                                                {item.icon}
                                            </span>
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Quick Contact Widget */}
                            <div className="bg-[#2a2a2a] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                                <div className="relative z-10 space-y-4">
                                    <h4 className="font-bold text-lg">Need Information?</h4>
                                    <p className="text-zinc-300 text-sm">Contact our admission office for detailed inquiries.</p>
                                    <Link href="/contact" className="inline-block px-4 py-2 bg-white text-zinc-900 text-sm font-bold rounded-lg hover:bg-rose-100 transition-colors">
                                        Contact Us
                                    </Link>
                                </div>
                                <div className="absolute -bottom-4 -right-4 text-zinc-800 opacity-20">
                                    <Quote size={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CONTENT AREA (Col 9) --- */}
                    <div className="lg:col-span-9 space-y-20">

                        {/* 1. HISTORY SECTION */}
                        <section id="history" className="scroll-mt-28 space-y-6">
                            <FadeUp>
                                <div className="flex items-center gap-3 mb-4">
                                    <History className="text-[#800000]" size={28} />
                                    <h2 className="text-3xl font-bold font-serif text-zinc-900 decoration-[#800000]/30 underline decoration-2 underline-offset-8">History</h2>
                                </div>
                                <div className="prose prose-lg text-zinc-600 max-w-none text-justify">
                                    <p className="indent-8">
                                        Responding to the call and understanding of the formidable challenges that may have to be faced in the future, visionaries and social engineers shared the idea of establishing an educational cluster to facilitate the upliftment of the minority community.
                                    </p>
                                    <p>
                                        In pursuance of this, CM College of Arts and Science was established with a vision to create leaders in different fields and promote higher education in emerging areas of arts, science, and humanities. The institution was founded on the principles of academic discipline and spiritual growth, serving as a cornerstone for students pursuing their +1 and +2 education since 2010.
                                    </p>
                                    <p>
                                        Over the years, the college has grown into a premier institution in Wayanad, providing an integrated environment where the curriculum is meticulously designed to meet modern educational standards while remaining deeply rooted in moral values.
                                    </p>
                                </div>
                            </FadeUp>
                        </section>

                        <hr className="border-t border-zinc-200" />

                        {/* 2. ABOUT COLLEGE SECTION */}
                        <section id="about-college" className="scroll-mt-28 space-y-8">
                            <FadeUp>
                                <div className="flex items-center gap-3 mb-6">
                                    <Layout className="text-[#800000]" size={28} />
                                    <h2 className="text-3xl font-bold font-serif text-zinc-900 decoration-[#800000]/30 underline decoration-2 underline-offset-8">About College</h2>
                                </div>

                                {/* Large Featured Image */}
                                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-8 group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2572&auto=format&fit=crop"
                                        alt="College Campus View"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                        <p className="font-serif italic text-lg opacity-90">"A campus built for holistic learning and growth."</p>
                                    </div>
                                </div>

                                <div className="prose prose-lg text-zinc-600 max-w-none text-justify space-y-4">
                                    <p>
                                        CM College of Arts and Science offers a unique blend of modern education and traditional values. Located in the serene landscape of Nadavayal, Wayanad, our campus provides an ideal atmosphere for academic pursuits. The institution is affiliated with the state education board and offers specialized coaching for competitive exams like NEET, JEE, and KEAM.
                                    </p>
                                    <p>
                                        Our approach goes beyond traditional teaching; we focus on the holistic development of every student. We have state-of-the-art laboratories, a well-stocked library, and smart classrooms that enhance the learning experience. The campus culture is vibrant, inclusive, and discipline-oriented.
                                    </p>
                                </div>
                            </FadeUp>
                        </section>

                        <hr className="border-t border-zinc-200" />

                        {/* 3. VISION & MISSION SECTION */}
                        <section id="vision-mission" className="scroll-mt-28 space-y-8">
                            <FadeUp>
                                <div className="flex items-center gap-3 mb-8">
                                    <Target className="text-[#800000]" size={28} />
                                    <h2 className="text-3xl font-bold font-serif text-zinc-900 decoration-[#800000]/30 underline decoration-2 underline-offset-8">Vision and Mission</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Vision Card */}
                                    <div className="bg-rose-50/50 p-8 rounded-xl border border-rose-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-[#800000] rounded-lg flex items-center justify-center text-white mb-6">
                                            <Lightbulb size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#800000] mb-3">Our Vision</h3>
                                        <p className="text-zinc-700 leading-relaxed italic">
                                            "To be a center of excellence in higher education, fostering intellectual growth, ethical values, and social responsibility, thereby creating enlightened individuals capable of contributing positively to society."
                                        </p>
                                    </div>

                                    {/* Mission Card */}
                                    <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6">
                                            <Award size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Our Mission</h3>
                                        <ul className="space-y-3 text-zinc-600 text-sm">
                                            <li className="flex gap-2">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#800000]" />
                                                <span>Provide accessible, high-quality education.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#800000]" />
                                                <span>Inculcate moral and ethical values alongside academics.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <div className="min-w-[6px] h-1.5 mt-2 rounded-full bg-[#800000]" />
                                                <span>Foster innovation and critical thinking.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeUp>
                        </section>

                        <hr className="border-t border-zinc-200" />

                        {/* 4. PRINCIPAL'S MESSAGE SECTION */}
                        <section id="principal-message" className="scroll-mt-28 space-y-8">
                            <FadeUp>
                                <div className="flex items-center gap-3 mb-8">
                                    <UserCheck className="text-[#800000]" size={28} />
                                    <h2 className="text-3xl font-bold font-serif text-zinc-900 decoration-[#800000]/30 underline decoration-2 underline-offset-8">Principal's Message</h2>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    {/* Principal Image */}
                                    <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-4 border-white bg-zinc-100">
                                        <Image
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                            alt="Principal"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-[#800000]/90 p-3 text-center text-white">
                                            <h4 className="font-bold text-sm">Dr. Abdul Rahman</h4>
                                            <p className="text-xs opacity-80">Principal</p>
                                        </div>
                                    </div>

                                    {/* Message Text */}
                                    <div className="w-full md:w-2/3 space-y-4 text-justify">
                                        <Quote className="text-[#800000]/20 mb-4 transform rotate-180" size={40} />
                                        <p className="text-zinc-600 leading-relaxed">
                                            Education is not merely the acquisition of knowledge; it is the shaping of character and the refinement of the soul. At CM College, we strive to provide an environment where students can discover their potential and develop into responsible citizens.
                                        </p>
                                        <p className="text-zinc-600 leading-relaxed">
                                            Our integrated curriculum ensures that while you pursue academic excellence, you also stay grounded in ethical values. We are committed to maintaining the highest standards of discipline and academic rigor.
                                        </p>
                                        <p className="text-zinc-600 leading-relaxed">
                                            I welcome you to join our community and embark on a journey of learning and growth.
                                        </p>
                                        <div className="pt-4">
                                            <p className="font-serif text-lg font-bold text-[#800000]">Dr. Abdul Rahman</p>
                                            <p className="text-zinc-500 text-sm">Principal, CM College of Arts & Science</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </section>

                    </div>
                </div>
            </div>

        </main>
    );
}
