'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from "lucide-react";
import Skeleton from './Skeleton';

interface GalleryItem {
    _id: string;
    title?: string;
    category?: string;
    imageUrl: string;
}

const fallbackItems: GalleryItem[] = [];

interface GalleryProps {
    initialItems?: GalleryItem[];
}

export default function Gallery({ initialItems }: GalleryProps) {
    const [items, setItems] = useState<GalleryItem[]>(initialItems || []);
    const [loading, setLoading] = useState(!initialItems);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();

    useEffect(() => {
        if (initialItems) return;

        const fetchGallery = async () => {
            try {
                const response = await fetch("/api/gallery");
                const data = await response.json();

                if (data.success && data.data.length > 0) {
                    setItems(data.data.slice(0, 10)); // Fetch enough for marquee
                } else {
                    setItems(fallbackItems);
                }
            } catch (error) {
                console.error('Failed to fetch gallery:', error);
                setItems(fallbackItems);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    // Start Marquee Animation when items are ready
    useEffect(() => {
        if (!loading && items.length > 4) {
            controls.start({
                x: "-50%",
                transition: {
                    duration: 30, // Adjust speed here (seconds for full loop)
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        }
    }, [loading, items.length, controls]);


    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'unset';
    };

    const nextLightBoxImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % items.length);
        }
    };

    const prevLightBoxImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + items.length) % items.length);
        }
    };

    // Marquee Content - Duplicated for seamless loop
    const marqueeItems = [...items, ...items];

    return (
        <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-agency font-bold text-[#7B0046] uppercase tracking-wide mb-3"
                    >
                        Explore CM College
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-32 bg-emerald-500 mx-auto rounded-full"
                    />
                </div>

                {/* Content: Loading / Grid / Marquee */}
                <div className="min-h-[300px] overflow-hidden relative">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="aspect-video relative rounded-xl overflow-hidden bg-zinc-200">
                                    <Skeleton className="w-full h-full" variant="rect" />
                                </div>
                            ))}
                        </div>
                    ) : items.length <= 4 ? (
                        // Static Grid for <= 4 items
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer bg-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title || "Gallery Image"}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                            <Maximize2 size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        // Infinite Marquee for > 4 items
                        <div
                            className="flex w-full"
                            onMouseEnter={() => controls.stop()}
                            onMouseLeave={() => controls.start({ x: "-50%", transition: { duration: 30, ease: "linear", repeat: Infinity, type: "tween" } })}
                            ref={containerRef}
                        >
                            <motion.div
                                className="flex gap-4 min-w-max"
                                animate={controls}
                                initial={{ x: 0 }}
                            >
                                {marqueeItems.map((item, index) => (
                                    <div
                                        key={`${item._id}-${index}`}
                                        className="relative w-[85vw] sm:w-[45vw] lg:w-[22vw] aspect-video overflow-hidden rounded-xl cursor-pointer bg-zinc-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group shrink-0"
                                        onClick={() => openLightbox(index % items.length)}
                                    >
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title || "Gallery Image"}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                                <Maximize2 size={20} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Footer Action */}
                <div className="mt-12 text-center">
                    <Link href="/gallery" className="inline-flex items-center gap-2 text-[#7B0046] font-semibold hover:text-emerald-700 transition-colors group">
                        <span className="uppercase tracking-wider text-sm">View All Photos</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        <div className="absolute top-0 right-0 p-6 z-110">
                            <button
                                className="p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                onClick={closeLightbox}
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors z-110 hover:bg-white/10 rounded-full"
                            onClick={prevLightBoxImage}
                        >
                            <ChevronLeft size={40} />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors z-110 hover:bg-white/10 rounded-full"
                            onClick={nextLightBoxImage}
                        >
                            <ChevronRight size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                                <Image
                                    src={items[selectedImageIndex].imageUrl}
                                    alt="Full View"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <span className="text-white/80 text-sm font-medium">
                                        {selectedImageIndex + 1} / {items.length}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
