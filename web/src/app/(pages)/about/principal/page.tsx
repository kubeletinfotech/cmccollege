"use client";

import { motion, Variants } from "framer-motion";
import {
    Award,
    BookOpen,
    Briefcase,
    Calendar,
    Users,
    Star,
    Quote,
    CheckCircle2,
    ArrowLeft,
    Mail,
    Phone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Animation Variants ---
const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// --- Data ---
const ACADEMIC_BACKGROUND = [
    { degree: "M.Phil (Commerce)", institution: "Bharathidasan University", year: "2015" },
    { degree: "B.Ed (Commerce)", institution: "University of Calicut", year: "2012" },
    { degree: "M.Com", institution: "University of Kerala", year: "2011" },
    { degree: "B.Com", institution: "University of Calicut", year: "2009" },
];

const EXPERIENCE = [
    { role: "Principal", institution: "CM College of Arts and Science", duration: "2025 onwards" },
    { role: "Assistant Professor, Dept. of Commerce", institution: "MES College of Arts and Sciences, Calicut", duration: "12 years" },
    { role: "Assistant Professor, Dept. of Commerce", institution: "Peekey CICS College, Calicut", duration: "6 months" },
    { role: "HOD, PG Dept. of Commerce", institution: "MES College of Arts and Sciences, Calicut", duration: "1 year" },
    { role: "HSST in Commerce", institution: "Madin HSS, Malappuram", duration: "1 year" },
    { role: "Public Relations Officer", institution: "MES College of Arts and Sciences", duration: "3 Years" },
    { role: "Visiting Professor", institution: "Alsalama College of Management", duration: "2 years" },
    { role: "Visiting Faculty", institution: "Alqamar English School, NIT Calicut", duration: "2 years" },
    { role: "Visiting Faculty", institution: "Markaz Oasis Campus, Kunnamangalam", duration: "1 year" },
];

const SKILLS = [
    { name: "Teaching & Training", icon: BookOpen },
    { name: "Leadership & Coordination", icon: Users },
    { name: "Public Speaking", icon: Briefcase },
    { name: "Academic Planning", icon: Calendar },
    { name: "Computer Applications", icon: Star },
    { name: "Tally & Accounting", icon: CheckCircle2 },
];

const ACHIEVEMENTS = [
    { title: "Indira Gandhi Award (Best NSS PO)", year: "2016" },
    { title: "Best District Coordinator (COVID Activities)", year: "2021–22" },
    { title: "Best Coordinator (Anti-Drug Campaign)", year: "2022" },
    { title: "Special Appreciation (Flood Relief)", year: "2018" },
    { title: "Recognition for Pusthakathal Project", year: "2023" },
    { title: "Appreciation (Sneharam Project)", year: "2024" },
];

const EXTENSION_ACTIVITIES = [
    "NSS Programme Officer: MES College (8 Years)",
    "NSS District Coordinator: Calicut University (3 Years)",
    "NSS State Level Trainer (800+ sessions)",
    "District Facilitator, Wayanad (KILA)",
    "District Training Faculty: Youth Welfare Board"
];

const PUBLICATIONS = [
    "Investors Perception towards Mutual Fund Selection - Intercontinental Journal of Finance Research Review",
    "Profitability of Local Banks in Sultanate of Oman - Intercontinental Journal of Banking, Insurance and Finance",
    "Digital & Sustainable Marketing in Kerala's Post-Covid Tourism Revival - International Journal of Research in Management & Social Science",
    "Work Life Balance of Construction Workers in Wayanad - International Journal of Scientific Research in Engineering & Management",
    "Contributions of Resorts to the Development of Wayanad Tourism - International Journal of Scientific Research in Engineering & Management"
];

export default function PrincipalProfile() {
    return (
        <div className="bg-white font-sans text-stone-800 selection:bg-emerald-100 selection:text-emerald-900">
            {/* 2. Hero Section */}
            <section className="pt-1 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="lg:col-span-7 space-y-8 pt-4"
                        >
                            <motion.div variants={fadeIn}>
                                <h2 className="text-emerald-800 font-medium tracking-wide text-sm mb-3 uppercase">Principal</h2>
                                <h1 className="text-4xl md:text-7xl font-playfair font-medium text-stone-900 leading-[1.1] mb-6">
                                    Shafi <span className="text-emerald-700 italic">Pulpara</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-light text-stone-500 max-w-xl font-playfair italic leading-relaxed">
                                    “Leadership in education is about empowering minds, serving society, and building institutions that last.”
                                </p>
                            </motion.div>

                            <motion.div variants={fadeIn} className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100 max-w-2xl">
                                <p className="text-stone-600 leading-relaxed text-lg text-center md:text-justify">
                                    <strong className="text-emerald-800 font-bold">Shafi Pulpara</strong> is a dedicated and visionary academic professional committed to fostering academic excellence, innovation, and community engagement. He brings a wealth of experience in teaching, academic administration, and leadership to his role as the Principal of CM College of Arts and Science.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4 pt-6 border-t border-stone-200/60">
                                    <div className="flex items-center gap-2 text-sm text-stone-500">
                                        <Mail size={16} className="text-emerald-600" />
                                        <span>principal@cmcollege.edu.in</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-stone-500">
                                        <Phone size={16} className="text-emerald-600" />
                                        <span>+91 9495 249 224</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative aspect-3/4 md:aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone-100 shadow-xl shadow-stone-200/50">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
                                    <Image
                                        src="https://ik.imagekit.io/1yxtj9qun/About/principal.jpeg?tr=w-800,h-1000,q-100,f-auto,fo-auto"
                                        alt="Principal"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-lg border border-stone-100 max-w-xs hidden md:block"
                            >
                                <Quote className="text-emerald-200 w-8 h-8 mb-2" />
                                <p className="text-stone-600 text-sm font-medium">
                                    "Striving for excellence in every endeavor."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Academic Journey & Experience Grid - Refined */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-50/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16">

                        {/* Education - Left Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <h3 className="text-xl md:text-2xl font-playfair font-bold text-stone-900 mb-8 md:mb-10 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-rose-400"></span>
                                Academic Background
                            </h3>
                            <div className="relative ml-2 md:ml-24 space-y-8 md:space-y-10">
                                {/* Animated Vertical Line - Optimized with scaleY */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute left-0 top-2 bottom-4 w-px bg-rose-200 origin-top"
                                    style={{ willChange: "transform" }}
                                />

                                {ACADEMIC_BACKGROUND.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-6 md:pl-10"
                                    >
                                        {/* Hollow Dot */}
                                        <div className="absolute -left-[6px] top-2.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-800 z-10"></div>

                                        {/* Year Label - Desktop (Absolute Left) */}
                                        <div className="hidden md:block absolute -left-24 top-1.5 w-20 text-right">
                                            <span className="text-base font-bold text-emerald-800 font-oswald tracking-wide">
                                                {edu.year}
                                            </span>
                                        </div>

                                        {/* Content - Right */}
                                        <div>
                                            {/* Year Label - Mobile (Inline) */}
                                            <span className="md:hidden block text-xs font-bold text-emerald-800 font-oswald tracking-wide mb-1">
                                                {edu.year}
                                            </span>
                                            <h4 className="text-lg font-bold text-stone-900 font-playfair leading-tight">{edu.degree}</h4>
                                            <p className="text-stone-500 text-xs font-bold uppercase tracking-wider mt-1.5">{edu.institution}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Experience - Right Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <h3 className="text-xl md:text-2xl font-playfair font-bold text-stone-900 mb-8 md:mb-10 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-rose-400"></span>
                                Professional Roles
                            </h3>
                            <div className="space-y-4">
                                {EXPERIENCE.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeIn}
                                        className="bg-white p-5 md:p-6 rounded-xl border border-stone-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow group"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                                            <div>
                                                <h4 className="font-bold text-stone-900 text-base md:text-lg group-hover:text-emerald-800 transition-colors uppercase tracking-tight">{exp.role}</h4>
                                                <p className="text-stone-500 text-sm mt-1">{exp.institution}</p>
                                            </div>
                                            {exp.duration && (
                                                <span className="self-start shrink-0 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-bold rounded-md whitespace-nowrap">
                                                    {exp.duration}
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. Skills & Extension Activities */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-12 gap-12">

                        {/* Skills - 4 cols */}
                        <div className="md:col-span-5">
                            <h3 className="text-xl font-playfair font-bold text-stone-900 mb-8">Core Competencies</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {SKILLS.map((skill, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center p-4 bg-stone-50 rounded-lg text-center gap-2 hover:bg-emerald-50/50 transition-colors">
                                        <skill.icon className="w-5 h-5 text-emerald-600" />
                                        <span className="text-sm font-medium text-stone-700">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activities - 7 cols */}
                        <div className="md:col-span-7">
                            <h3 className="text-xl font-playfair font-bold text-stone-900 mb-8">Leadership & Extension</h3>
                            <div className="bg-emerald-900 text-emerald-50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                                <div className="relative z-10 grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-emerald-200 text-xs tracking-widest uppercase font-bold mb-4">Activities</h4>
                                        <ul className="space-y-3">
                                            {EXTENSION_ACTIVITIES.map((act, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-light">
                                                    <span className="mt-1.5 w-1 h-1 bg-emerald-400 rounded-full"></span>
                                                    {act}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-emerald-200 text-xs tracking-widest uppercase font-bold mb-4">Awards</h4>
                                        <ul className="space-y-3">
                                            {ACHIEVEMENTS.map((award, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-light">
                                                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>
                                                        {award.title} <span className="opacity-50 text-xs ml-1">({award.year})</span>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Publications */}
            <section className="py-20 px-6 bg-stone-50 border-t border-stone-200">
                <div className="container mx-auto max-w-4xl text-center">
                    <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-4 opacity-80" />
                    <h2 className="text-3xl font-playfair font-bold text-stone-900 mb-10">Selected Publications</h2>
                    <div className="space-y-4 text-left">
                        {PUBLICATIONS.map((pub, i) => (
                            <div key={i} className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex gap-4 items-start">
                                <span className="text-emerald-500 font-bold text-lg select-none">0{i + 1}</span>
                                <p className="text-stone-700 italic font-medium">{pub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Closing */}
            <section className="py-20 px-6 bg-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/about" className="group flex items-center gap-2 px-8 py-4 bg-emerald-50 text-emerald-800 rounded-full text-sm font-bold hover:bg-emerald-100 transition-all w-fit mx-auto shadow-sm">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Discover More About CM College
                    </Link>
                </div>
            </section>

        </div>
    );
}
