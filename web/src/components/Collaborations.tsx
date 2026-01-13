"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const partners = [
    { name: "MMU", logo: "/images/mmu-logo.png" },
    { name: "Oman", logo: "/images/oman-logo.png" },
    { name: "Tally", logo: "/images/tally-logo.png" },
    { name: "Keltron", logo: "/images/keltron-logo.png" },
];

export default function Collaborations() {
    return (
        <section className="py-20 bg-white border-t border-zinc-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <ScrollReveal>
                    {/* Subtle accent line */}
                    <div className="w-16 h-1 bg-[#7B0046] rounded-full mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3 tracking-tight">
                        Placement & Internship Partners
                    </h2>
                    <p className="text-zinc-500 text-lg font-medium">
                        Academic and industry partners supporting our mission
                    </p>
                </ScrollReveal>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden mask-linear-gradient">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Moving Track - CSS Animation */}
                <div
                    className="flex items-center gap-12 md:gap-20 flex-nowrap min-w-full animate-marquee"
                    style={{ width: "fit-content" }}
                >
                    {/* We need multiple sets of logos to ensure smooth infinite scroll */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="relative w-40 h-24 md:w-48 md:h-32 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    fill
                                    className="object-contain p-2 filter grayscale-0 opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
