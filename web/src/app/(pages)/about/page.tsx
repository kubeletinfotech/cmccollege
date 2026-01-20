"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <header className="mb-10 border-b border-zinc-100 pb-8">
                <h2 className="text-3xl font-bold font-serif text-[#7a0b3a] mb-4">About the College</h2>
                <p className="text-xl text-zinc-600 leading-relaxed font-light">
                    A legacy of academic rigor, moral integrity, and social commitment.
                </p>
            </header>

            <article className="prose prose-lg prose-zinc max-w-none text-zinc-600">
                <p>
                    Established in <strong className="text-zinc-900">2010</strong>, CM College has served as a beacon of higher education in the region.
                    Founded with a vision to bridge the gap between traditional values and modern education, the institution has grown into a premier center for learning.
                </p>

                <div className="my-10 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="https://ik.imagekit.io/5c6j602yp/Banner/Untitled%20design.png?updatedAt=1768553045031"
                        alt="College Campus"
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="text-2xl font-bold font-serif text-zinc-800 mt-12 mb-6">Our Journey</h3>
                <p>
                    The CM Centre has had a successful journey spanning three decades, during which it has established educational institutions in various locations in Kozhikode and Wayanad. The organization has also undertaken charitable initiatives across Kerala, providing educational opportunities to people of all ages, from primary school to post-graduation, as well as conducting research.
                </p>
                <p>
                    Through its efforts, the CM Centre has helped hundreds of students from disadvantaged financial and social backgrounds to pursue successful careers in fields such as Islamic Studies, Medicine, Engineering, Teaching, and Management. Students studying at the CM Centre’s campuses have achieved remarkable academic success, scoring high ranks in a variety of exams and setting new records.
                </p>

                <h3 className="text-2xl font-bold font-serif text-zinc-800 mt-12 mb-6">A Commitment to Excellence</h3>
                <p>
                    We believe in nurturing not just students, but future leaders who are grounded in ethics and skilled for the global stage. Our curriculum is designed to foster critical thinking, creativity, and a sense of social responsibility. With state-of-the-art facilities and a dedicated faculty, we ensure that every student receives the support they need to excel.
                </p>
            </article>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-100">
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
                    <div className="text-3xl font-bold text-[#7a0b3a] mb-1">2010</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Established</div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
                    <div className="text-3xl font-bold text-[#7a0b3a] mb-1">15+</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Years Excellence</div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
                    <div className="text-3xl font-bold text-[#7a0b3a] mb-1">8</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Departments</div>
                </div>
                <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
                    <div className="text-3xl font-bold text-[#7a0b3a] mb-1">A+</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Standard</div>
                </div>
            </div>
        </div>
    );
}
