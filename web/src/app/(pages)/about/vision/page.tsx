"use client";

import { Target, BookOpen, Heart } from "lucide-react";

export default function VisionPage() {
    return (
        <div className="space-y-12 animate-fade-in-up">
            <header className="border-b border-zinc-100 pb-8">
                <h2 className="text-3xl font-bold font-serif text-[#7a0b3a] mb-4">Vision & Mission</h2>
                <p className="text-xl text-zinc-600 leading-relaxed font-light">
                    Guiding principles that define our purpose and direction.
                </p>
            </header>

            <div className="grid gap-8">
                {/* Vision Card */}
                <div className="bg-[#7a0b3a]/5 p-8 rounded-2xl border border-[#7a0b3a]/10 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#7a0b3a] shrink-0">
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-serif text-[#7a0b3a] mb-3">Our Vision</h3>
                            <p className="text-zinc-700 text-lg leading-relaxed">
                                A Centre of Excellence that moulds a community of learners equipped with outstanding life skills to serve the needs of society.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="bg-[#fcf9f5] p-8 rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#7a0b3a] shrink-0">
                            <BookOpen size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-serif text-zinc-800 mb-3">Our Mission</h3>
                            <p className="text-zinc-700 text-lg leading-relaxed">
                                To provide a nurturing environment that inspires students to seek knowledge, acquire practical experience, and develop outstanding life skills, enabling them to grow as responsible individuals who contribute meaningfully to society.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold font-serif text-zinc-800 mb-6">Core Values</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Integrity", desc: "Upholding the highest standards of honesty and ethical behavior in all our endeavors." },
                            { title: "Excellence", desc: "Striving for superior performance and quality in teaching, learning, and research." },
                            { title: "Inclusivity", desc: "Fostering a diverse community where every individual shares a sense of belonging." },
                            { title: "Service", desc: "Committing to the well-being of our community and society at large through active engagement." },
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-100 hover:border-[#7a0b3a]/20 shadow-sm transition-all">
                                <h4 className="font-bold text-[#7a0b3a] mb-2 text-lg">{value.title}</h4>
                                <p className="text-zinc-600 leading-relaxed text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
