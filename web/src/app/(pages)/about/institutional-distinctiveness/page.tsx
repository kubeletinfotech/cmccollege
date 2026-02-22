"use client";

import { motion } from "framer-motion";
import {
    Heart,
    Users,
    ChevronRight,
    Shield,
    Gem,
    Users2,
    BookOpenCheck,
    Leaf
} from "lucide-react";

export default function InstitutionalDistinctivenessPage() {
    return (
        <div className="space-y-16 animate-fade-in-up">
            <header className="border-b border-zinc-100 pb-10">
                <span className="text-[#7a0b3a] font-bold tracking-widest text-xs uppercase mb-3 block">
                    What Sets Us Apart
                </span>
                <h2 className="text-4xl font-bold font-serif text-[#7a0b3a] mb-6 tracking-tight">
                    Institutional Distinctiveness
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed font-light max-w-3xl">
                    CM College is defined by its commitment to "Values First" education—nurturing ethical leaders
                    who are academically elite and socially responsible.
                </p>
            </header>

            {/* Core Pillars Section */}
            <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-[#7a0b3a]/10 rounded-xl flex items-center justify-center text-[#7a0b3a]">
                            <Heart size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-800">Ethical & Value-Based Foundation</h3>
                        <p className="text-zinc-600 leading-relaxed">
                            Our primary distinctiveness lies in integrating moral integrity into the academic curriculum.
                            We believe that education without values is incomplete. Our students are mentored to become
                            upright citizens who prioritize ethics in their professional and personal lives.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700">
                            <Users size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-800">Holistic Community Engagement</h3>
                        <p className="text-zinc-600 leading-relaxed">
                            We are not just an academic bubble. Our 'Campus to Community' initiative ensures every student
                            participates in social welfare, rural development, and environmental conservation, fostering
                            a deep sense of empathy and social responsibility.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Individual Mentoring",
                            desc: "Personalized attention to every student's academic and emotional growth.",
                            icon: Shield
                        },
                        {
                            title: "Eco-Friendly Ethos",
                            desc: "A green campus that teaches sustainability as a way of life.",
                            icon: Leaf
                        },
                        {
                            title: "Empowering Rural Talents",
                            desc: "Bridging the gap by providing world-class education in the heart of Wayanad.",
                            icon: Gem
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-[#fcf9f5] rounded-xl border border-zinc-200"
                        >
                            <feature.icon className="text-[#7a0b3a] mb-4" size={24} />
                            <h4 className="text-lg font-bold text-zinc-800 mb-2">{feature.title}</h4>
                            <p className="text-zinc-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Visionary Statement */}
            <section className="bg-[#7a0b3a] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10 text-center space-y-6">
                    <h3 className="text-3xl font-serif font-bold italic">"Academic Brilliance with Moral Integrity"</h3>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">
                        Our distinctiveness isn't just a mission statement; it's the lifebreath of our institution.
                        We strive to create graduates who aren't just job-seekers, but change-makers with a conscience.
                    </p>
                </div>
            </section>
        </div>
    );
}
