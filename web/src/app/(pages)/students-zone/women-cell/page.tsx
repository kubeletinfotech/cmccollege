"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Star, Heart, ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
    { id: 1, label: "Active Members", value: "100+", icon: Users },
    { id: 2, label: "Empowerment Events", value: "20+", icon: Star },
    { id: 3, label: "Support & Guidance", value: "24/7", icon: Heart },
    { id: 4, label: "Safety Initiatives", value: "15+", icon: ShieldCheck },
];

const COMMITTEE_MEMBERS = [
    { role: "Coordinator", name: "Coordinator Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Joint Coordinator", name: "Joint Coordinator Name", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Member", name: "Member Name 1", department: "Department", image: "/images/default-user-placeholder.png" },
    { role: "Member", name: "Member Name 2", department: "Department", image: "/images/default-user-placeholder.png" },
];

const GALLERY_IMAGES = [
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
    "/images/default-placeholder-image.jpg",
];

export default function WomenCellPage() {
    return (
        <div className="bg-[#fffafa] min-h-screen pt-32 md:pt-40 lg:pt-48 overflow-hidden">
            {/* DYNAMIC HERO SECTION */}
            <section className="relative container mx-auto px-4 lg:px-8 mb-24 md:mb-32">
                {/* Background Blobs */}
                <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
                <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[120px] -z-10 mix-blend-multiply" />

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 font-bold text-xs uppercase tracking-widest mb-8">
                            <Sparkles size={14} />
                            CM College Women Cell
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
                            Empowering voices, <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-rose-400">
                                uplifting futures.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
                            Dedicated to promoting gender equality, ensuring campus safety, and fostering an environment where every female student can thrive.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-900 hover:bg-pink-700 text-white rounded-full font-bold transition-all shadow-xl shadow-pink-600/20 hover:scale-105 flex items-center justify-center gap-2">
                                Join the Cell <ArrowUpRight size={18} />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-pink-700 border border-pink-200 hover:border-pink-300 rounded-full font-bold transition-all hover:bg-pink-50 flex items-center justify-center">
                                Report an Issue
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Hero Images - Masonry overlap style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative h-[400px] md:h-[500px] flex justify-center items-center mt-12 lg:mt-0"
                    >
                        {/* Main Image */}
                        <div className="relative w-64 md:w-72 h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-[6px] border-white">
                            <Image
                                src="/images/default-placeholder-image.jpg"
                                alt="Women Cell"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Secondary Image Offset */}
                        <div className="absolute top-4 md:top-10 right-0 md:-right-8 lg:right-0 w-40 md:w-48 h-48 md:h-56 rounded-4xl overflow-hidden shadow-xl z-10 border-4 border-white opacity-80 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/default-placeholder-image.jpg"
                                alt="Activity"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Interactive floating card */}
                        <div className="absolute bottom-4 left-0 md:bottom-10 md:left-5 bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-3xl shadow-2xl z-30 border border-pink-100 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 shrink-0">
                                    <ShieldCheck size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-zinc-500 font-medium text-[10px] md:text-xs uppercase tracking-wider">Campus</p>
                                    <p className="text-zinc-900 font-bold text-base md:text-lg leading-tight">100% Secure</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FLOATING STATS BAR */}
            <section className="relative z-20 container mx-auto px-4 lg:px-8 mb-32 -mt-10">
                <div className="bg-white/90 backdrop-blur-2xl rounded-[2rem] md:rounded-4xl p-6 md:p-12 shadow-[0_20px_60px_-15px_rgba(225,29,72,0.15)] border border-pink-50">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:divide-x divide-pink-100/50">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center text-center px-4 group">
                                <div className="w-12 h-12 mb-4 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-2 tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMITTEE SECTION - HORIZONTAL SCROLL CARDS */}
            <section className="bg-zinc-900 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.pink.600)_0%,transparent_100%)] blur-[100px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Our Leadership</h2>
                            <p className="text-zinc-400 text-base md:text-xl font-light leading-relaxed">
                                Meet the dedicated individuals who drive our initiatives, organize events, and provide a strong support system for the student community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modern Profile Cards Grid */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {COMMITTEE_MEMBERS.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-zinc-800/50 backdrop-blur-md rounded-3xl p-6 border border-zinc-700/50 hover:bg-zinc-800 transition-colors overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-linear-to-b from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500 pointer-events-none" />

                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                                        {member.role}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-pink-100 transition-colors">{member.name}</h3>
                                    <p className="text-zinc-400 font-medium">{member.department}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENTO BOX GALLERY */}
            <section className="py-32 container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6">Moments in Action</h2>
                    <p className="text-xl text-zinc-500 font-light">A visual journey through our workshops, events, and initiatives aimed at fostering empowerment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    {GALLERY_IMAGES.map((imgSrc, idx) => {
                        // Create a bento box layout: first item spans 2 cols/ 2 rows if desired, or mix and match
                        const isLarge = idx === 0;
                        const isWide = idx === 3;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative rounded-4xl overflow-hidden group shadow-lg
                                    ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${isWide && !isLarge ? 'md:col-span-2' : ''}
                                `}
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`Women Cell Event ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="container mx-auto px-4 lg:px-8 mb-24 md:mb-32">
                <div className="bg-pink-600 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-pink-600/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">Need Someone to Talk To?</h2>
                        <p className="text-pink-100 text-lg md:text-xl font-light mb-8 md:mb-10 leading-relaxed">
                            Our doors are always open. We offer strictly confidential counseling and immediate support for any grievances.
                        </p>
                        <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-pink-700 font-black text-base md:text-lg rounded-full uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                            Reach Out Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
