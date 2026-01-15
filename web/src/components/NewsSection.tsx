'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tag: string;
}

export default function NewsSection() {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
                const data = await res.json();
                if (data.success) {
                    setNewsItems(data.data.slice(0, 3)); // Show only latest 3
                }
            } catch (error) {
                console.error("Failed to fetch news", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        });
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-semibold text-emerald-800 mb-3 tracking-tight"
                    >
                        Latest News & Events
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mx-auto text-center font-medium"
                    >
                        Highlights from campus life, academic activities, and events
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-zinc-100">
                                <Image
                                    src={item.image || '/images/college.png'}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider shadow-sm">
                                    {item.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium text-zinc-500">{formatDate(item.date)}</span>
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-600 mb-6 text-sm leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="mt-auto flex items-center text-emerald-700 font-bold text-sm group-hover:gap-2 transition-all duration-300">
                                    <span>Read more</span>
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link href="/news">
                        <button className="px-8 py-3 rounded-full border border-zinc-200 text-zinc-600 font-semibold hover:bg-zinc-50 hover:text-emerald-800 hover:border-emerald-200 transition-all">
                            View All Events
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
