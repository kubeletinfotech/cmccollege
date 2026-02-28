'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Briefcase, MapPin, Clock, ArrowRight, Building, Award } from 'lucide-react';
import Link from 'next/link';
import Skeleton from '@/components/Skeleton';
import Image from 'next/image';

interface Vacancy {
    _id: string;
    title: string;
    department: string;
    description: string;
    experienceRequired: string;
    createdAt: string;
}

export default function CareersPage() {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const response = await fetch("/api/vacancies");
                const data = await response.json();
                if (data.success && data.data) {
                    setVacancies(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch vacancies:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchVacancies();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-stone-50 font-sans pt-[120px] pb-24 text-zinc-800">
            {/* Hero Section */}
            <div className="relative bg-zinc-900 text-white overflow-hidden py-24 mb-16">
                <div className="absolute inset-0 opacity-20 MixBlendMode-overlay">
                    <Image
                        src="https://ik.imagekit.io/1yxtj9qun/Home/images/computer-lab.jpeg"
                        alt="Campus"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-900/90 to-zinc-900/90" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/20 text-emerald-100 font-bold text-xs uppercase tracking-widest mb-6 border border-emerald-400/30"
                    >
                        Join Our Team
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold font-agency uppercase tracking-tight mb-6 drop-shadow-lg"
                    >
                        Shape the Future of <span className="text-emerald-400">Education</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-8"
                    >
                        Become part of a passionate academic community dedicated to innovation, student success, and professional growth at CM College.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/careers/apply">
                            <button className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl shadow-xl hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm inline-flex items-center gap-2">
                                Submit General Application <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center md:text-left">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Building size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Modern Infrastructure</h3>
                        <p className="text-zinc-500 font-medium">Work in a serene, eco-friendly campus with state-of-the-art facilities and labs.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100">
                        <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Award size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Academic Excellence</h3>
                        <p className="text-zinc-500 font-medium">Join a faculty dedicated to upholding rigorous standards and holistic development.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-[24px] shadow-sm border border-zinc-100">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Prime Location</h3>
                        <p className="text-zinc-500 font-medium">Located in beautiful Wayanad, offering a perfect blend of nature and accessibility.</p>
                    </motion.div>
                </div>

                {/* Vacancies Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-agency font-bold text-emerald-900 uppercase tracking-tight mb-2">Current Openings</h2>
                        <div className="w-16 h-1 bg-emerald-500 rounded-full mb-4"></div>
                        <p className="text-zinc-600 font-medium">Discover your next career opportunity with us.</p>
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-xs h-[250px] flex flex-col justify-between">
                                <div>
                                    <Skeleton className="w-24 h-6 rounded-full mb-4" />
                                    <Skeleton className="w-3/4 h-8 rounded-lg mb-2" />
                                    <Skeleton className="w-1/2 h-5 rounded-lg" />
                                </div>
                                <div>
                                    <Skeleton className="w-full h-16 rounded-xl mb-4" />
                                    <Skeleton className="w-full h-12 rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : vacancies.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {vacancies.map((vacancy) => (
                            <motion.div
                                key={vacancy._id}
                                variants={itemVariants}
                                className="bg-white border hover:border-emerald-300 border-zinc-200 p-8 rounded-[24px] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden"
                            >
                                {/* Decorative blob */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-100 transition-colors pointer-events-none"></div>

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg flex items-center gap-1.5">
                                            <Briefcase size={14} /> {vacancy.department}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 leading-tight group-hover:text-emerald-800 transition-colors">{vacancy.title}</h3>

                                    <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium mb-6">
                                        <div className="flex items-center gap-1.5 bg-zinc-50 px-2 py-1.5 rounded-md">
                                            <Clock size={16} className="text-emerald-600" />
                                            {vacancy.experienceRequired || 'Fresher / Any'}
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-zinc-50 px-2 py-1.5 rounded-md">
                                            <MapPin size={16} className="text-emerald-600" />
                                            On-site
                                        </div>
                                    </div>

                                    {vacancy.description && (
                                        <p className="text-zinc-600 text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                                            {vacancy.description}
                                        </p>
                                    )}

                                    <Link href={`/careers/apply?position=${encodeURIComponent(vacancy.title)}`} className="mt-auto block">
                                        <button className="w-full py-3.5 bg-zinc-900 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm uppercase tracking-wide text-sm active:scale-95">
                                            Apply Now <ChevronRight size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white border-2 border-dashed border-zinc-200 rounded-[32px] p-16 text-center shadow-sm"
                    >
                        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-10 h-10 text-zinc-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-3">No Current Openings</h3>
                        <p className="text-zinc-500 max-w-md mx-auto mb-8 font-medium">
                            We don't have any specific active vacancies at the moment, but we are always looking for great talent.
                        </p>
                        <Link href="/careers/apply">
                            <button className="px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest inline-flex items-center gap-2">
                                Send Speculative CV <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
