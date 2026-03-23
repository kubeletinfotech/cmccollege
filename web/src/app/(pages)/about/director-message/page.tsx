"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function DirectorMessagePage() {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = `Welcome to CM College of Arts and Science. As the Director, it is my privilege to be part of an institution that is committed to academic excellence and the holistic development of our students. Our goal is to provide a nurturing environment where students can achieve their full potential, not just academically, but as responsible and compassionate citizens. We focus on integrating traditional values with modern educational methodologies to ensure our graduates are well-equipped to face the challenges of the contemporary world. We believe in the power of education to transform lives and are dedicated to making quality education accessible to all sections of society. Our vision is to build a community of learners who are driven by ethics, innovation, and a commitment to social progress. We invite you to join us on this journey of growth and discovery.`;

    // Truncate logic
    const truncatedText = fullText.slice(0, 350) + "...";

    return (
        <div className="bg-white pt-4 pb-20 relative overflow-x-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                    {/* LEFT: Portrait Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 shrink-0"
                    >
                        <div className="relative w-full aspect-4/5 lg:aspect-3/4 rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="https://ik.imagekit.io/1yxtj9qun/About/director-cmc.jpeg?tr=w-600,h-800,q-100,f-auto,fo-auto"
                                alt="Zainudheen T K"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT: Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12 flex flex-col justify-center"
                    >
                        <h4 className="text-[#7a0b3a] font-extrabold tracking-[0.15em] uppercase text-xl mb-6">Director&apos;s Message</h4>

                        <div className="text-zinc-600 leading-[1.8] text-base lg:text-lg text-justify font-light mb-6">
                            <p className="text-justify">
                                {isExpanded ? fullText : truncatedText}
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-2 inline-flex items-center gap-1 text-[#7a0b3a] font-semibold text-sm hover:underline focus:outline-hidden"
                            >
                                {isExpanded ? (
                                    <>Read Less <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>Read More <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#7a0b3a] tracking-tight">ZAINUDHEEN T K</h3>
                            <p className="text-[#7a0b3a]/80 font-medium text-sm mb-8">(Director, CM College)</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
