"use client";

import { motion } from "framer-motion";
import { Book, Monitor, Wifi, Bus, Home, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AMENITIES_DATA } from "@/data/amenities";

// Derive the list from our single source of truth to ensure consistency
const amenitiesList = Object.entries(AMENITIES_DATA).map(([slug, data]) => ({
    id: slug,
    title: data.title,
    slug: slug,
    icon: data.icon || Book, // Fallback icon if missing
    image: data.image,
    colSpan: 1,
}));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

export default function AmenitiesPage() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] text-zinc-900 pt-[112px]">
            {/* --- Hero Section --- */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-[#5D1035] to-[#3d0a23] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 tracking-tight">
                        Campus Amenities
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white/80 tracking-wide">
                        Designed for learning, living, and growth.
                    </p>
                </motion.div>
            </section>

            {/* --- Amenities Grid --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {amenitiesList.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            className="group relative h-[280px] md:h-[340px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#5D1035]/20 transition-all duration-500"
                        >
                            <Link href={`/amenities/${item.slug}`} className="block h-full w-full relative">
                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Modern Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <div className="flex flex-col gap-3 items-start">
                                        {/* Icon Bubble */}
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-[#5D1035] transition-all duration-300 shadow-lg">
                                            <item.icon strokeWidth={1.5} className="w-5 h-5" />
                                        </div>

                                        {/* Title */}
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold font-serif text-white tracking-wide group-hover:text-white/90 transition-colors">
                                                {item.title}
                                            </h3>
                                            <div className="h-0.5 w-0 bg-white/50 rounded-full group-hover:w-8 transition-all duration-500 ease-out" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
