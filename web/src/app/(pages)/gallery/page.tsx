"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import DynamicCTA from "@/components/DynamicCTA";

interface GalleryItem {
    _id: string;
    imageUrl: string;
    category: string;
    createdAt: string;
}

const CATEGORIES = ["All", "Campus", "Events", "Hostel", "Classroom"];

export default function GalleryPage() {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch("/api/gallery");
                if (response.ok) {
                    const data = await response.json();
                    setItems(data.data);
                } else {
                    setError(true);
                }
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const filteredImages = activeCategory === "All"
        ? items
        : items.filter(img => img.category === activeCategory);

    const openLightbox = (index: number) => {
        const originalIndex = items.findIndex(item => item._id === filteredImages[index]._id);
        setSelectedImageIndex(originalIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % items.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + items.length) % items.length);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans pt-[112px]">
            {/* Page Header */}
            <section className="relative py-24 px-6 bg-[#7B0046] text-white overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-agency font-bold tracking-tight mb-6 uppercase">
                            Gallery <span className="text-emerald-400">Archives</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto italic font-medium">
                            Explore the visual legacy of CM College through our curated archives.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto grow">
                {/* Category Filters */}
                <ScrollReveal className="flex flex-wrap justify-center gap-6 mb-20">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-10 py-4 rounded-3xl font-black uppercase tracking-widest text-xs transition-all duration-500 active:scale-95 ${activeCategory === category
                                ? "bg-emerald-600 text-white shadow-[0_20px_40px_rgba(5,150,105,0.3)] scale-110"
                                : "bg-zinc-50 text-zinc-400 hover:text-emerald-900 hover:bg-emerald-50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </ScrollReveal>

                {/* Image Grid */}
                {loading ? (
                    <div className="py-24 text-center">
                        <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin mx-auto mb-6"></div>
                        <p className="text-zinc-400 font-black italic tracking-[0.2em] uppercase text-xs">Accessing Archives...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-24 bg-red-50 rounded-[48px] border-4 border-red-100 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-black text-red-900 mb-4 uppercase tracking-tighter">System Notice</h2>
                        <p className="text-red-600 font-medium">The digital gallery is temporarily offline. Please try again shortly.</p>
                    </div>
                ) : filteredImages.length === 0 ? (
                    <ScrollReveal className="text-center py-24 bg-zinc-50 rounded-[64px] border-4 border-dashed border-zinc-100 max-w-3xl mx-auto">
                        <p className="text-zinc-400 text-2xl font-medium tracking-tight">No visuals found for this category yet.</p>
                    </ScrollReveal>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredImages.map((image, i) => (
                            <ScrollReveal key={image._id} delay={i * 30}>
                                <div
                                    className="group relative aspect-4/5 rounded-[48px] overflow-hidden shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.15)] transition-all duration-700 bg-zinc-100 border-8 border-white cursor-pointer"
                                    onClick={() => openLightbox(i)}
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt="Gallery entry"
                                        fill
                                        unoptimized
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-4xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-all duration-500">
                                            <Maximize2 className="text-white w-10 h-10" />
                                        </div>
                                    </div>
                                    <div className="absolute top-8 left-8">
                                        <span className="px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full text-[10px] font-black uppercase text-white tracking-widest border border-white/20 group-hover:opacity-0 transition-opacity duration-300">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </section>

            {/* Lightbox / Image Viewer */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-200 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-220 bg-white/10 p-5 rounded-4xl border border-white/10 hover:bg-white/20"
                            onClick={closeLightbox}
                        >
                            <X className="w-12 h-12" />
                        </motion.button>

                        {/* Navigation buttons */}
                        <div className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-220 pointer-events-none">
                            <motion.button
                                whileHover={{ scale: 1.1, x: -10 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 rounded-[2.5rem] bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all pointer-events-auto backdrop-blur-2xl shadow-2xl"
                                onClick={prevImage}
                            >
                                <ChevronLeft className="w-12 h-12" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, x: 10 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 rounded-[2.5rem] bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all pointer-events-auto backdrop-blur-2xl shadow-2xl"
                                onClick={nextImage}
                            >
                                <ChevronRight className="w-12 h-12" />
                            </motion.button>
                        </div>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="relative w-full h-full flex items-center justify-center pointer-events-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full max-w-7xl max-h-[85vh] pointer-events-auto shadow-[0_100px_200px_rgba(0,0,0,0.9)] rounded-[4rem] overflow-hidden border-12 border-white/5">
                                <Image
                                    src={items[selectedImageIndex].imageUrl}
                                    alt="Gallery Showcase"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                {/* Bottom Info Bar */}
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-10 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex gap-8 items-center">
                                    <p className="text-white/80 font-black tracking-[0.4em] text-[10px] uppercase">
                                        Frame <span className="text-emerald-400">{selectedImageIndex + 1}</span> of {items.length}
                                    </p>
                                    <div className="w-px h-4 bg-white/20" />
                                    <span className="text-white font-bold text-[10px] uppercase tracking-widest">{items[selectedImageIndex].category}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Final CTA */}
            <DynamicCTA className="py-24 px-6 bg-emerald-950 text-white text-center" />
        </div>
    );
}
