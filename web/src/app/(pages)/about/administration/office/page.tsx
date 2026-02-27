"use client";

import { motion } from "framer-motion";
import {
    Users,
    Phone,
    Mail,
    Clock,
    ShieldCheck,
    FileText,
    Briefcase,
    Building2,
    CalendarCheck2
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const officeStaff = [
    {
        name: "Place Holder Staff 1",
        role: "Administrative Officer (AO)",
        email: "ao@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png", // Placeholder or from public
        specialization: "General Administration & Finance"
    },
    {
        name: "Place Holder Staff 2",
        role: "Head Clerk",
        email: "office@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Documentation & University Affairs"
    },
    {
        name: "Place Holder Staff 3",
        role: "Accountant",
        email: "accounts@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Financial Management"
    },
    {
        name: "Vivek",
        role: "Lab Assistant",
        email: "accounts@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Lab Management"
    },
    {
        name: "Anjana B",
        role: "Librarian",
        email: "accounts@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Library Management"
    }
];

const officeServices = [
    {
        title: "Student Records",
        desc: "Management of admissions, enrollment, and academic transcripts.",
        icon: FileText
    },
    {
        title: "Financial Services",
        desc: "Fee collection, scholarship processing, and financial accounting.",
        icon: Briefcase
    },
    {
        title: "University Liaison",
        desc: "Coordination with University of Calicut for exams and certificates.",
        icon: Building2
    },
    {
        title: "General Inquiries",
        desc: "Providing information to visitors, parents, and prospective students.",
        icon: Users
    }
];

export default function OfficeAdministrationPage() {
    return (
        <div className="space-y-16 animate-fade-in-up">
            {/* Header Section */}
            <header className="border-b border-zinc-100 pb-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Person Profile (Left Side) */}
                <div className="flex flex-col items-center md:items-start gap-5 shrink-0">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-4xl overflow-hidden shadow-xl border border-zinc-100">
                        <Image
                            src="https://ik.imagekit.io/1yxtj9qun/About/director.jpg"
                            alt="Office Administrator"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left w-full">
                        <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#7a0b3a] tracking-tight mb-1">
                            Uvais TK
                        </h1>
                        <p className="text-[#a11c5a] font-bold uppercase tracking-widest text-xs mb-3">
                            Administrative Officer (AOC)
                        </p>
                        <a
                            href="mailto:ao@cmcollege.edu.in"
                            className="inline-flex items-center justify-center md:justify-start gap-2 text-zinc-600 hover:text-[#7a0b3a] transition-colors bg-zinc-50 px-4 py-2 rounded-full border border-zinc-200 text-xs font-medium w-full md:w-fit"
                        >
                            <Mail size={14} className="text-[#7a0b3a] shrink-0" />
                            ao@cmcollege.edu.in
                        </a>
                    </div>
                </div>

                {/* Content (Right Side) */}
                <div className="flex-1 md:py-4">
                    <div className="mb-6 pb-6 border-b border-zinc-100">
                        <span className="text-[#7a0b3a] font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 block">
                            Operational Excellence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#7a0b3a] tracking-tight">
                            Office Administration
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light text-left lg:text-justify hyphens-auto">
                        <p>
                            Welcome to CM College of Arts and Science, Wayanad — a centre of quality higher education committed to academic excellence, discipline, and value-based learning. Our institution provides a supportive and eco-friendly campus environment that promotes knowledge, skill development, and holistic student growth.
                        </p>
                        <p>
                            The Management strives to ensure modern facilities, innovative learning opportunities, and strong career guidance to prepare students for academic success and professional excellence. We warmly invite students and parents to join our academic community and be part of a future built on knowledge, integrity, and achievement.
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Values / Mission */}
            <section className="max-w-4xl">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-zinc-800">Commitment to Service</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        Our administrative wing is dedicated to maintaining high standards of transparency,
                        efficiency, and student-centric support. From the moment a student joins the
                        college until their graduation, our office provides professional guidance on
                        all administrative matters.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                            <ShieldCheck size={16} />
                            <span>Transparent Processes</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#7a0b3a]/5 text-[#7a0b3a] rounded-full text-sm font-medium border border-[#7a0b3a]/10">
                            <Clock size={16} />
                            <span>Punctual Service</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Services Grid */}
            <section className="space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h3 className="text-2xl font-bold text-zinc-800">Administrative Services</h3>
                    <p className="text-zinc-500 font-light">Comprehensive support for all institutional requirements.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {officeServices.map((service, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100}>
                            <div className="p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-[#7a0b3a] mb-6 group-hover:bg-[#7a0b3a] group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-zinc-800 mb-3 group-hover:text-[#7a0b3a] transition-colors">{service.title}</h4>
                                <p className="text-sm text-zinc-500 leading-relaxed font-light italic opacity-80 group-hover:opacity-100">{service.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Key Personnel */}
            <section className="bg-zinc-50 rounded-[32px] p-4 md:p-12 space-y-10 border border-zinc-100">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-800 text-center">Administrative Personnel</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {officeStaff.map((staff, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 md:p-0 rounded-2xl md:rounded-[32px] flex items-center md:flex-col gap-4 border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Mobile: Circle | Desktop: Premium Tall Card Image */}
                            <div className="relative w-14 h-14 md:w-full md:h-[160px] shrink-0 rounded-full md:rounded-none overflow-hidden bg-zinc-100">
                                <Image
                                    src={staff.image === "/images/staff/ao.jpg" ? "https://ik.imagekit.io/1yxtj9qun/About/director.jpg" : staff.image}
                                    alt={staff.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Info Wrapper */}
                            <div className="min-w-0 md:p-5 md:pb-10 md:text-center flex-1">
                                <h4 className="text-base md:text-lg font-bold text-zinc-900 group-hover:text-[#7a0b3a] transition-colors truncate md:whitespace-normal">
                                    {staff.name}
                                </h4>
                                <p className="text-[#7a0b3a] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 md:mt-3 opacity-90">
                                    {staff.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Office Info & Timings */}
            <section className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-[#7a0b3a] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4">
                            <CalendarCheck2 className="text-emerald-400" size={32} />
                            <h3 className="text-2xl font-bold">Office Timings</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-1">
                                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Monday - Friday</p>
                                <p className="text-xl font-medium">9:00 AM - 4:30 PM</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Saturday</p>
                                <p className="text-xl font-medium">9:30 AM - 1:00 PM</p>
                            </div>
                            <div className="sm:col-span-2 space-y-1">
                                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Sunday & Public Holidays</p>
                                <p className="text-xl font-medium text-emerald-400">Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-emerald-800 rounded-3xl p-10 text-white flex flex-col justify-center gap-6 shadow-xl">
                    <div className="flex items-center gap-4">
                        <Phone size={24} className="text-emerald-300" />
                        <div>
                            <p className="text-xs uppercase tracking-widest opacity-60">Office Helpline</p>
                            <p className="text-lg font-bold">04936 210 178</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center pt-8 opacity-50">
                <p className="text-xs text-zinc-400 italic">"Serving Excellence Through Administrative Discipline"</p>
            </footer>
        </div>
    );
}
