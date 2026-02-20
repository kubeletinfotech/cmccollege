"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Award,
    BookOpen,
    Code,
    Globe,
    Lightbulb,
    Target,
    Users,
    Heart,
    ChevronRight,
    LucideIcon
} from "lucide-react";

interface Milestone {
    year: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const milestones: Milestone[] = [
    {
        year: "2010",
        title: "The Inception of Excellence",
        description: "CM College of Arts and Science was founded with a profound vision: to provide quality higher education rooted in moral integrity and social commitment. Starting with core undergraduate programs, we laid the foundation for an institution that values both academic rigor and ethical growth.",
        icon: Target,
        color: "bg-[#7a0b3a]"
    },
    {
        year: "2014",
        title: "Academic Expansion",
        description: "Expansion into diverse disciplines including Management and Humanities. We introduced specialized PG programs to meet the growing demands of the professional world, ensuring our students are equipped for higher-level career paths.",
        icon: BookOpen,
        color: "bg-[#8b1a4a]"
    },
    {
        year: "2018",
        title: "Innovation & Skill Development",
        description: "Launch of the Skill Enhancement Center and incubation wing. This period marked our shift towards making students 'industry-ready' through certificate courses in emerging technologies and soft skill training modules.",
        icon: Code,
        color: "bg-[#9c295a]"
    },
    {
        year: "2021",
        title: "Digital Leadership & Outreach",
        description: "Pioneering hybrid learning models and robust digital infrastructure. Our 'Campus to Community' initiatives gained momentum, focusing on rural development and providing educational support to underprivileged sectors.",
        icon: Globe,
        color: "bg-[#ad386a]"
    },
    {
        year: "2024",
        title: "Excellence in Accreditation",
        description: "A pivotal year focused on quality assurance and international standards. Strengthening our research wing and successfully navigating through major accreditation processes, affirming our commitment to global academic standards.",
        icon: Award,
        color: "bg-[#be477a]"
    },
    {
        year: "2026",
        title: "Vision 2026: The Future of Learning",
        description: "Transforming into a sustainable 'Smart Campus'. Our roadmap focuses on AI-integrated curriculum, international research collaborations, and producing global citizens who are socially responsible and professionally elite.",
        icon: Lightbulb,
        color: "bg-[#cf568a]"
    }
];

export default function InstitutionalDistinctivenessPage() {
    return (
        <div className="space-y-16 animate-fade-in-up">
            <header className="border-b border-zinc-100 pb-10">
                <span className="text-[#7a0b3a] font-bold tracking-widest text-xs uppercase mb-3 block">
                    Institutional Journey
                </span>
                <h2 className="text-4xl font-bold font-serif text-[#7a0b3a] mb-6 tracking-tight">
                    Institutional Distinctiveness
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
                    Our journey from 2010 to 2026 reflects a relentless pursuit of academic brilliance,
                    character building, and social transformation. Explore the milestones that define our legacy.
                </p>
            </header>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#7a0b3a]/20 via-[#7a0b3a]/5 to-transparent hidden md:block" />

                <div className="space-y-12 md:space-y-24">
                    {milestones.map((milestone, idx) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Year Indicator (Desktop) */}
                            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                                <div className={`w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center shadow-lg border-4 border-white transition-transform hover:scale-110`}>
                                    <milestone.icon className="text-white w-6 h-6" />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                    <div className={`absolute top-0 ${idx % 2 === 0 ? "right-0" : "left-0"} w-1.5 h-full ${milestone.color} opacity-70`} />

                                    <span className={`text-2xl font-bold font-serif mb-2 block ${milestone.year === "2026" ? "text-[#cf568a]" : "text-[#7a0b3a]"}`}>
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-zinc-800 mb-4 group-hover:text-[#7a0b3a] transition-colors">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed font-light italic">
                                        "{milestone.description}"
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Spacer for Tablet/Mobile */}
                            <div className="w-full md:hidden flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full ${milestone.color} shrink-0 flex items-center justify-center shadow-md`}>
                                    <milestone.icon className="text-white w-5 h-5" />
                                </div>
                                <div className="h-px flex-1 bg-zinc-200" />
                            </div>

                            {/* Empty space for grid on desktop */}
                            <div className="hidden md:block md:w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Core Pillars Section */}
            <div className="pt-20">
                <h3 className="text-3xl font-serif font-bold text-zinc-800 mb-12 text-center">Core Pillars of Distinctiveness</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Value-Based Education",
                            desc: "Integrating moral and ethical values into the academic curriculum to build holistic characters.",
                            icon: Heart
                        },
                        {
                            title: "Social Commitment",
                            desc: "Extensive outreach programs that connect students with real-world social challenges and solutions.",
                            icon: Users
                        },
                        {
                            title: "Global Readiness",
                            desc: "Equipping students with future-proof skills ensuring they excel in international professional environments.",
                            icon: ChevronRight
                        }
                    ].map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-[#fcf9f5] p-8 rounded-2xl border border-zinc-200 text-center space-y-4"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#7a0b3a] shadow-sm">
                                <pillar.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-zinc-800">{pillar.title}</h4>
                            <p className="text-zinc-600 font-light leading-relaxed">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="bg-[#7a0b3a] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10 text-center space-y-6">
                    <h3 className="text-3xl font-serif font-bold">Uniqueness that Empowers</h3>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">
                        What sets CM College apart is our unwavering commitment to "Values First" education.
                        We don't just produce graduates; we nurture ethical leaders who carry the torch of social responsibility.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 pt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">100%</span>
                            <span className="text-sm text-white/60">Ethics Focused</span>
                        </div>
                        <div className="h-10 w-px bg-white/20 hidden sm:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">15+</span>
                            <span className="text-sm text-white/60">Years of Legacy</span>
                        </div>
                        <div className="h-10 w-px bg-white/20 hidden sm:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">5000+</span>
                            <span className="text-sm text-white/60">Alumni Reach</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
