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
        name: "Uvais T K",
        role: "Administrative Officer (AO)",
        email: "ao@cmcollege.edu.in",
        image: "/images/staff/ao.jpg", // Placeholder or from public
        specialization: "General Administration & Finance"
    },
    {
        name: "Place Holder Staff 1",
        role: "Head Clerk",
        email: "office@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Documentation & University Affairs"
    },
    {
        name: "Place Holder Staff 2",
        role: "Accountant",
        email: "accounts@cmcollege.edu.in",
        image: "/images/default-user-placeholder.png",
        specialization: "Financial Management"
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
            <header className="border-b border-zinc-100 pb-10">
                <span className="text-[#7a0b3a] font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 block">
                    Operational Excellence
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#7a0b3a] mb-6 tracking-tight">
                    Office Administration
                </h2>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
                    The Administrative Office at CM College serves as the backbone of our institutional operations,
                    ensuring smooth day-to-day functioning and providing essential services to our students and faculty.
                </p>
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
            <section className="bg-zinc-50 rounded-[32px] p-6 md:p-12 space-y-10 border border-zinc-100">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-800 text-center">Administrative Personnel</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {officeStaff.map((staff, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative aspect-4/5 w-full bg-zinc-100 overflow-hidden">
                                <Image
                                    src={staff.image === "/images/staff/ao.jpg" ? "https://ik.imagekit.io/1yxtj9qun/About/director.jpg" : staff.image}
                                    alt={staff.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-lg font-bold text-zinc-900 group-hover:text-[#7a0b3a] transition-colors">{staff.name}</h4>
                                <p className="text-[#7a0b3a] text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{staff.role}</p>
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
