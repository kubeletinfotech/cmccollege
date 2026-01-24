'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, Share2, Printer } from 'lucide-react';

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tag: string;
}

export default function NewsDetailPage() {
    const { slug } = useParams();
    const [news, setNews] = useState<NewsItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                // Fetch the specific news item
                const res = await fetch(`/api/news`);
                const data = await res.json();
                if (data.success) {
                    const foundNews = data.data.find((item: NewsItem) => item._id === slug);
                    setNews(foundNews || null);

                    // Filter related news (same tag, excluding current)
                    if (foundNews) {
                        const related = data.data.filter((item: NewsItem) =>
                            item.tag === foundNews.tag && item._id !== foundNews._id
                        ).slice(0, 3);
                        setRelatedNews(related);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch news detail", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) fetchNewsDetail();
    }, [slug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white pt-[112px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-emerald-800 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!news) {
        return (
            <div className="min-h-screen bg-white pt-[112px] flex flex-col items-center justify-center px-4">
                <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-center">News Story Not Found</h2>
                <Link href="/news" className="text-emerald-800 font-bold hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to News
                </Link>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-white pt-[112px]">
            {/* Top Bar / Navigation */}
            <div className="border-b border-zinc-100 py-4 bg-zinc-50/50">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <Link href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-emerald-800 transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to All News
                    </Link>
                </div>
            </div>

            {/* Article Content */}
            <article className="py-12 md:py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Info */}
                    <div className="mb-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-emerald-100">
                            {news.tag}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                            {news.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-zinc-500 font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-700" />
                                <span>Published: {formatDate(news.date)}</span>
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                                <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-emerald-800" title="Share">
                                    <Share2 size={18} />
                                </button>
                                <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-emerald-800" title="Print" onClick={() => window.print()}>
                                    <Printer size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white ring-1 ring-zinc-100"
                    >
                        <Image
                            src={news.image || '/images/college.png'}
                            alt={news.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Body Text */}
                    <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed space-y-6">
                        {news.description.split('\n').map((paragraph, idx) => (
                            paragraph.trim() && <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Footer / Meta */}
                    <div className="mt-16 pt-10 border-t border-zinc-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                CM
                            </div>
                            <div>
                                <p className="text-zinc-900 font-bold">CM College News Desk</p>
                                <p className="text-zinc-500 text-sm">Official updates from CM College of Arts and Science</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related/Explore Section */}
            {relatedNews.length > 0 && (
                <section className="bg-zinc-50 py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-10 text-center md:text-left uppercase tracking-wider">Related News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedNews.map((item) => (
                                <Link
                                    key={item._id}
                                    href={`/news/${item._id}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/50"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={item.image || '/images/college.png'}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-emerald-800 text-[10px] font-bold uppercase tracking-widest mb-2">{item.tag}</p>
                                        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
