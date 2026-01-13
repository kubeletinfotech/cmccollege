'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const professionals = [
    {
        name: "Dr. Principal Name",
        role: "PRINCIPAL",
        qualification: "PhD in Education", // Placeholder
        image: "/images/Principal.jpeg"
    },
    {
        name: "Prof. Vice Principal",
        role: "VICE PRINCIPAL",
        qualification: "M.Sc, M.Phil",
        image: "/images/principal_portrait_placeholder_1768116114971.png" // Placeholder or generic
    },
    {
        name: "Dr. Academic Head",
        role: "HEAD OF ACADEMICS",
        qualification: "PhD in Science",
        image: "/images/principal_portrait_placeholder_1768116114971.png"
    },
    {
        name: "Mr. Administrator",
        role: "ADMINISTRATOR",
        qualification: "MBA",
        image: "/images/principal_portrait_placeholder_1768116114971.png"
    }
];

export default function Professionals() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight"
                    >
                        Visionary Leadership
                    </motion.h2>
                    <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full mb-6"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mx-auto text-center font-medium"
                    >
                        Guided by experienced professionals dedicated to academic excellence
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {professionals.map((prof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <Image
                                    src={prof.image}
                                    alt={prof.name}
                                    fill
                                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />

                                {/* Subtle sheen overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-zinc-900 font-serif mb-1 group-hover:text-emerald-800 transition-colors">
                                    {prof.name}
                                </h3>
                                <p className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2">
                                    {prof.role}
                                </p>
                                <p className="text-zinc-400 text-sm italic font-medium">
                                    {prof.qualification}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
