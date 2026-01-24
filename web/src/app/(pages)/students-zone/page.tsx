"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { User, BookOpen, MessageSquare, Bell } from "lucide-react";

export default function StudentsZonePage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans pt-[112px]">
            {/* Page Header */}
            <section className="relative py-24 px-6 bg-[#7a0b3a] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase">
                            Students Zone
                        </h1>
                        <p className="text-xl md:text-3xl text-pink-100 max-w-2xl mx-auto font-bold tracking-[0.3em] uppercase animate-pulse">
                            Update Soon
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-24 px-6 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-pink-100">
                            <User className="w-10 h-10 text-[#7a0b3a]" />
                        </div>
                        <h2 className="text-3xl font-bold text-zinc-800 mb-8 uppercase tracking-wider">Your Digital Campus Hub</h2>
                        <div className="space-y-6 text-xl text-zinc-600 leading-relaxed text-center font-medium max-w-3xl">
                            <p className="bg-zinc-50 p-10 rounded-3xl border-2 border-dashed border-zinc-200 shadow-sm transition-all hover:shadow-md">
                                We are currently building a dedicated portal for our students. This space will soon house your academic records, attendance, digital library, and campus announcements.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Preview Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
                    {[
                        { icon: BookOpen, title: "LMS Portal", desc: "Access your course materials and assignments." },
                        { icon: Bell, title: "Smart Alerts", desc: "Never miss an important campus notification." },
                        { icon: MessageSquare, title: "Community", desc: "Engage with clubs and student organizations." }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={i * 100} className="p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm text-center">
                            <feature.icon className="w-10 h-10 text-[#7a0b3a] mx-auto mb-4 opacity-50" />
                            <h3 className="font-bold text-lg mb-2 text-zinc-800">{feature.title}</h3>
                            <p className="text-sm text-zinc-500">{feature.desc}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
