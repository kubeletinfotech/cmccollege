"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Institution {
    name?: string;
    logo: string;
}

interface InstitutionsCarouselProps {
    items: string[]; // specific to the simple array of strings used in parent
}

export default function InstitutionsCarousel({ items }: InstitutionsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default to desktop

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };

        // Set initial
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, totalPages]); // Simplified dependency

    const visibleItems = items.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-12 group">
            {/* Auto-slide Progress Bar (Premium Touch) */}
            <div className="absolute top-0 left-12 right-12 h-0.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-[#7a0b3a]/20"
                />
            </div>

            {/* Controls */}
            <button
                onClick={prev}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-zinc-100 text-zinc-400 hover:text-[#7a0b3a] hover:border-[#7a0b3a] hover:bg-white shadow-xl z-20 transition-all duration-300 transform active:scale-90 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Previous"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={next}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-zinc-100 text-zinc-400 hover:text-[#7a0b3a] hover:border-[#7a0b3a] hover:bg-white shadow-xl z-20 transition-all duration-300 transform active:scale-90 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Next"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Content Container */}
            <div className="overflow-hidden py-10 px-2">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="flex items-center justify-center gap-6 md:gap-12"
                    >
                        {visibleItems.map((logo, idx) => (
                            <motion.div
                                key={`${currentIndex}-${idx}`}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative w-32 h-20 md:w-52 md:h-32 shrink-0 bg-white rounded-2xl border border-zinc-100/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex items-center justify-center p-4 md:p-6 group/logo"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-zinc-50 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo}
                                        alt={`Institution Logo`}
                                        fill
                                        className="object-contain grayscale group-hover/logo:grayscale-0 transition-all duration-500 opacity-70 group-hover/logo:opacity-100 scale-95 group-hover/logo:scale-100"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
