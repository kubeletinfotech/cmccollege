'use client';

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import Skeleton from "@/components/Skeleton";

// Lazy load non-critical sections to improve initial TBT
const Gallery = dynamic(() => import("@/components/Gallery"), {
    ssr: true,
    loading: () => <div className="py-16 bg-zinc-50 h-[400px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-3xl" /></div>
});
const NewsSection = dynamic(() => import("@/components/NewsSection"), {
    ssr: true,
    loading: () => <div className="py-20 bg-white h-[450px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const ClubsCarousel = dynamic(() => import("@/components/ClubsCarousel"), {
    ssr: true,
    loading: () => <div className="py-12 bg-zinc-50 h-[300px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const StatsSection = dynamic(() => import("@/components/StatsSection"), {
    ssr: true,
    loading: () => <div className="py-16 bg-[#111111] h-[150px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const Collaborations = dynamic(() => import("@/components/Collaborations"), {
    ssr: true,
    loading: () => <div className="py-12 bg-white h-[200px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
    ssr: true,
    loading: () => <div className="py-16 bg-white h-[400px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const DynamicCTA = dynamic(() => import("@/components/DynamicCTA"), {
    ssr: true,
    loading: () => <div className="py-12 bg-white h-[200px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const HomeMap = dynamic(() => import("@/components/HomeMap"), {
    ssr: true,
    loading: () => <div className="py-12 bg-white h-[400px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
const Professionals = dynamic(() => import("@/components/Professionals"), {
    ssr: true,
    loading: () => <div className="py-24 bg-zinc-50 h-[450px] flex items-center justify-center"><Skeleton className="w-[90%] h-full rounded-2xl" /></div>
});
import { useAdmissionStatus } from "@/hooks/useAdmissionStatus";


interface GalleryImage {
    _id: string;
    title: string;
    imageUrl: string;
    category: string;
}

interface HomeClientProps {
    initialNews?: any[];
    initialGallery?: GalleryImage[];
}

export default function HomeClient({ initialNews, initialGallery }: HomeClientProps) {
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(initialGallery || []);
    const [isLoading, setIsLoading] = useState(!initialGallery);

    // Hero Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMsgExpanded, setIsMsgExpanded] = useState(false);

    // Hero Slider Configuration
    const desktopImages = [
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner4?tr=w-1897,h-713,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner1.png?tr=w-1897,h-713,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner2.png?tr=w-1897,h-713,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner.png?tr=w-1897,h-713,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner3?updatedAt=1770883358267&tr=w-1897,h-713,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner5.png?tr=w-1897,h-713,fo-center"
    ];

    const tabletImages = [
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner3?updatedAt=1770883358267&tr=w-1536,h-1300,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner1.png?tr=w-1536,h-1300,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner2.png?tr=w-1536,h-1300,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner.png?tr=w-1536,h-1300,fo-center",
        "https://ik.imagekit.io/1yxtj9qun/Banner/Banner5?tr=w-1536,h-1300,fo-center"
    ];

    const mobileImages = [
        "https://ik.imagekit.io/1yxtj9qun/Banner/mobile_banner_college1.jpeg?updatedAt=1770370477197&tr=w-750,h-936,fo-auto",
        "https://ik.imagekit.io/1yxtj9qun/Banner/bannerMobile.png?updatedAt=1770370477316&tr=w-750,h-936,fo-auto",
    ];

    // Track visible slide count based on viewport
    const [deviceSlideCount, setDeviceSlideCount] = useState(desktopImages.length);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setDeviceSlideCount(mobileImages.length);
            } else if (window.innerWidth < 1024) {
                setDeviceSlideCount(tabletImages.length);
            } else {
                setDeviceSlideCount(desktopImages.length);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileImages.length, tabletImages.length, desktopImages.length]);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % deviceSlideCount);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, deviceSlideCount]);

    useEffect(() => {
        if (currentSlide >= deviceSlideCount) {
            setCurrentSlide(0);
        }
    }, [deviceSlideCount, currentSlide]);

    const { isAdmissionOpen } = useAdmissionStatus();

    const handleDeptClick = (e: React.MouseEvent, slug: string) => {
        if (slug === "human-resource-management" || slug === "sociology") {
            e.preventDefault();
            toast("Content coming soon!", {
                icon: "🚧",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    useEffect(() => {
        if (initialGallery) return;

        const fetchGallery = async () => {
            try {
                const response = await fetch("/api/gallery");
                const data = await response.json();
                if (data.success && data.data) {
                    setGalleryImages(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch gallery images:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGallery();
    }, [initialGallery]);

    const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

    const handleInteraction = () => {
        setIsPaused(true);
        if (pauseTimerRef.current) {
            clearTimeout(pauseTimerRef.current);
        }
        pauseTimerRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % deviceSlideCount);
        handleInteraction();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + deviceSlideCount) % deviceSlideCount);
        handleInteraction();
    };

    return (
        <div className="flex min-h-screen flex-col text-zinc-900 font-sans pt-[110px] lg:pt-[216px] bg-white">
            {/* Hero Section - Professional Academic Banner */}
            <section className="relative h-[468px] md:h-[650px] lg:h-[700px] w-full overflow-hidden bg-zinc-900">
                {/* Hero Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 transform-gpu"
                        >
                            {/* Desktop Image */}
                            <div className="hidden lg:block w-full h-full relative">
                                <Image
                                    src={desktopImages[currentSlide % desktopImages.length]}
                                    alt={`Hero Slide ${currentSlide + 1}`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="100vw"
                                    priority={currentSlide === 0}
                                />
                            </div>

                            {/* Tablet Image */}
                            <div className="hidden md:block lg:hidden w-full h-full relative">
                                <Image
                                    src={tabletImages[currentSlide % tabletImages.length]}
                                    alt={`Hero Slide ${currentSlide + 1}`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="100vw"
                                    priority={currentSlide === 0}
                                />
                            </div>

                            {/* Mobile Image */}
                            <div className="block md:hidden w-full h-full relative">
                                <Image
                                    src={mobileImages[currentSlide % mobileImages.length]}
                                    alt={`Hero Slide ${currentSlide + 1}`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="100vw"
                                    priority={currentSlide === 0}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Professional Overlay - Side Gradient for text legibility */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
                </div>

                {/* Content Container */}
                <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    {isAdmissionOpen && (
                        <div className="max-w-3xl">
                            <ScrollReveal>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="inline-block px-4 py-1.5 bg-[#7B0046] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 rounded-sm shadow-lg">
                                        Admission 2024-25
                                    </span>
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-prestigious font-bold text-white mb-4 leading-[1.2] md:leading-[1.1] uppercase drop-shadow-md">
                                        Empowering Generations Through <span className="text-white/80 not-italic font-normal">Knowledge & Ethics</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-xl text-zinc-100/90 mb-8 max-w-xl font-normal leading-relaxed drop-shadow-sm">
                                        Join CM College of Arts and Science - A legacy of excellence in higher education in the heart of Wayanad.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <Link
                                            href="/admissions"
                                            className="px-8 py-4 bg-white text-[#7B0046] font-bold rounded-lg shadow-xl hover:bg-zinc-100 transition-all text-sm uppercase tracking-widest hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                                        >
                                            Apply Online
                                            <ChevronRight size={18} />
                                        </Link>
                                        <Link
                                            href="/about"
                                            className="px-8 py-4 bg-[#7B0046] text-white font-bold rounded-lg shadow-xl hover:bg-[#600036] transition-all text-sm uppercase tracking-widest hover:scale-105 active:scale-95 border-b-2 border-white/20"
                                        >
                                            Explore Programs
                                        </Link>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    )}
                </div>

                {/* Navigation Controls - Minimalist Professional Style */}
                <div className="absolute bottom-10 right-6 lg:right-12 z-30 flex items-center gap-4">
                    <div className="flex gap-2">
                        {Array.from({ length: deviceSlideCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/30"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7B0046]/20 z-30">
                    <motion.div
                        key={currentSlide}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-[#7B0046]"
                    />
                </div>
            </section>

            {/* About Section - Premium Bordered Card */}
            <section className="pt-8 pb-8 px-4 md:pt-14 md:pb-10 md:px-6 bg-emerald-50">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto bg-white border-l-4 border-l-[#7B0046] border-t border-r border-b border-gray-100 shadow-xl shadow-[#7B0046]/5 p-6 md:p-14 rounded-r-2xl relative overflow-hidden transform-gpu">
                        {/* Background decoration - Optimized for performance */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B0046]/5 rounded-full blur-xl lg:blur-2xl -mr-32 -mt-32 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-start text-left">
                            <h2 className="text-2xl md:text-3xl font-agency font-bold text-emerald-800 mb-4 uppercase">
                                CM College
                            </h2>

                            <div className="text-base text-zinc-600 leading-relaxed font-normal space-y-4 lg:columns-2 lg:gap-12 text-left md:text-justify">
                                <p className="block md:hidden">
                                    CM College of Arts and Science, Nadavayal, Wayanad, is a self-financing institution affiliated with the University of Calicut. Established in 2010 under the guidance of CM Center Madavoor, the college is set across 15 acres of serene campus, committed to providing quality higher education and empowering students.
                                </p>
                                <div className="hidden md:block space-y-4">
                                    <p className="break-inside-avoid">
                                        CM college of Arts and Science Nadavayal, Wayanad, Kerala is a self-financing college affiliated to the University of Calicut, run by CM center Madavoor, Calicut, Kerala. Established in the year April 2010, the college is situated in Panamaram, shares its 15 acres of beautiful land. Recognized by Government of kerala, the college is affiliated to the University of Calicut.
                                    </p>
                                    <p className="break-inside-avoid">
                                        In a short span of time, our college has achieved greater heights since its inception a decade ago by educating thousands of students from various parts of our states. Even though, Wayanad district has been little backward compared to many other districts of Kerala due to its geographical structure, we undertake the challenge to serve and provide better education for all the community.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="/about">
                                    <button className="px-6 py-2.5 bg-[#7B0046] text-white font-medium text-base rounded-lg hover:bg-[#600036] transition-colors shadow-sm hover:shadow-md active:scale-95 cursor-pointer">
                                        Know More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <Collaborations />

            {/* Premium Divider */}
            <div className="relative py-4 md:py-6 bg-white">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300/50"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="bg-zinc-50 px-4">
                        <div className="h-2 w-2 rounded-full bg-[#7B0046] ring-4 ring-gray-300"></div>
                    </div>
                </div>
            </div>

            <section className="pb-16 md:pb-24 pt-8 px-4 md:px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">

                            {/* Image Section - Top on mobile, Left on desktop */}
                            <div className="w-full md:w-5/12 relative h-[300px] md:h-auto">
                                <Image
                                    src="https://ik.imagekit.io/1yxtj9qun/About/principal.jpeg?updatedAt=1768826571745"
                                    alt="Principal"
                                    fill
                                    className="object-cover transform-gpu"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent md:hidden" />
                            </div>

                            {/* Content Section - Bottom on mobile, Right on desktop */}
                            <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center border-l-0 md:border-l-4 border-l-[#7B0046]">
                                {/* Label */}
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-[#7B0046] animate-pulse"></span>
                                    <span className="text-white text-xs md:text-sm font-bold tracking-widest bg-[#7B0046] px-4 py-2 rounded-full uppercase">
                                        Principal&apos;s Message
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="relative mb-8">
                                    <span className="absolute -top-6 -left-1 text-5xl text-emerald-100/40 font-serif leading-none select-none">&quot;</span>
                                    <div className="relative z-10 space-y-3 text-zinc-600 leading-relaxed text-sm md:text-base text-left">
                                        <div className="block md:hidden">
                                            <p className="font-medium">
                                                {isMsgExpanded
                                                    ? "Welcome to CM College of Arts and Science. Located in the serene surroundings of Wayanad, our college offers quality education rooted in discipline and strong human values. We focus on academic excellence, practical skills, and holistic development guided by a dedicated faculty. With modern facilities, eco-friendly campus, active student life, and strong placement support, CM College provides the ideal environment for learning and growth. We warmly invite students from Kerala and beyond to join us and build a successful future."
                                                    : "Welcome to CM College of Arts and Science. We offer quality education rooted in discipline and values, providing an ideal environment for your academic and holistic growth."
                                                }
                                            </p>
                                            <button
                                                onClick={() => setIsMsgExpanded(!isMsgExpanded)}
                                                className="mt-2 text-[#7B0046] font-bold text-sm flex items-center gap-1 cursor-pointer"
                                            >
                                                {isMsgExpanded ? "Read Less" : "Read More"}
                                            </button>
                                        </div>
                                        <p className="hidden md:block">
                                            Welcome to CM College of Arts and Science. Located in the serene surroundings of Wayanad, our college offers quality education rooted in discipline and strong human values. We focus on academic excellence, practical skills, and holistic development guided by a dedicated faculty. With modern facilities, eco-friendly campus, active student life, and strong placement support, CM College provides the ideal environment for learning and growth. We warmly invite students from Kerala and beyond to join us and build a successful future.
                                        </p>
                                    </div>
                                </div>

                                {/* Signature Block */}
                                <div className="mt-4 pt-6 border-t border-zinc-100 flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#7B0046] flex items-center justify-center text-white shadow-lg shadow-[#7B0046]/20 shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-zinc-900 leading-tight">Shafi Pulpara</h4>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                                            <p className="text-xs font-bold text-[#7B0046] uppercase tracking-wider">Principal</p>
                                            <span className="hidden sm:inline text-zinc-300">•</span>
                                            <p className="text-xs text-zinc-500 font-medium">CM College of Arts & Science</p>
                                        </div>
                                    </div>

                                    <Link href="/about/principal">
                                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 text-[#7B0046] md:hover:bg-[#7B0046]/5 md:hover:border-[#7B0046]/20 transition-[background-color,border-color,transform] active:scale-95 cursor-pointer">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Academic Programs Section - Premium Full Width Layout */}
            <section className="pb-16 md:pb-24 pt-8 px-4 md:px-6 bg-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <ScrollReveal className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-agency font-bold text-emerald-800 mb-4 uppercase tracking-tight">Departments of Academic Studies</h2>
                        <p className="text-zinc-600 text-base max-w-2xl mx-auto font-medium leading-relaxed">Offering a wide range of undergraduate and postgraduate programs driven by excellence.</p>
                    </ScrollReveal>

                    <ScrollReveal className="w-full mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {[
                                { name: "Dpt. Of Computer Science", slug: "computer-science", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Computer%20Science/Cs-bg.png" },
                                { name: "Dpt. Of Management", slug: "management", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Management/Management-bg.png" },
                                { name: "Dpt. Of Mass Communication And Journalism", slug: "mass-communication", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Masscom/masscom-bg.png" },
                                { name: "Dpt. Of Economics", slug: "economics", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Ecnomics/ecnomics-bg.png?updatedAt=1768828596627" },
                                { name: "Dpt. Of English", slug: "english", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/English/english-bg.jpg" },
                                { name: "Dpt. Of Commerce", slug: "commerce", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Commerce/commerce-bg.jpg" },
                                { name: "Dpt. Of Human Resource Management", slug: "human-resource-management", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/computer-lab.jpeg" },
                                { name: "Dpt. Of Sociology", slug: "sociology", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/library.jpeg" },
                                { name: "Dpt. Of Malayalam", slug: "malayalam", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Malayalam/malayalam" },
                                { name: "Dpt. Of Arabic", slug: "arabic", img: "https://ik.imagekit.io/1yxtj9qun/Departments%20/Arabic/Arabic-Language.jpg" }
                            ].map((dept, i) => (
                                <Link
                                    key={i}
                                    href={`/departments/${dept.slug}`}
                                    className="group relative block h-full min-h-[90px] md:min-h-[110px] p-3 md:p-4 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 ease-out border-t border-r border-b border-gray-100 border-l-4 border-l-[#7B0046] hover:-translate-y-1 transform-gpu overflow-hidden"
                                    onClick={(e) => handleDeptClick(e, dept.slug)}
                                >
                                    {/* Optimization: Fast Hover State */}
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <Image
                                            src={dept.img}
                                            alt={dept.name}
                                            fill
                                            className="object-cover transform scale-100 lg:group-hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20"></div>
                                    </div>

                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                                        <h3 className="text-xs md:text-sm font-bold text-emerald-900 group-hover:text-white transition-colors duration-300 uppercase tracking-wider leading-relaxed">
                                            {dept.name}
                                        </h3>
                                        <div className="h-0.5 w-0 bg-emerald-400 mx-auto mt-0 group-hover:mt-3 group-hover:w-10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>



            {/* Facilities Preview Section - Grouped Animation for Performance */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-emerald-50/50">
                <div className="max-w-[1600px] mx-auto">
                    <ScrollReveal className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-agency font-bold text-emerald-900 mb-4 uppercase tracking-tight">Campus Facilities</h2>
                        <div className="h-1 w-16 bg-[#7B0046] mx-auto mb-6 rounded-full"></div>
                        <p className="text-zinc-600 text-sm md:text-base font-medium">Premium infrastructure providing a comfortable and modern learning environment.</p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {[
                                { name: "Hostel", slug: "hostels", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/hostel.jpeg" },
                                { name: "Masjid", slug: "prayer-hall", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/masjid.jpeg" },
                                { name: "Labs", slug: "computer-lab", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/computer-lab.jpeg" },
                                { name: "Library", slug: "library", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/library.jpeg" },
                                { name: "Bus", slug: "bus-facility", img: "https://ik.imagekit.io/1yxtj9qun/Home/images/buss.jpeg" }
                            ].map((facility, i) => (
                                <Link key={i} href={`/amenities/${facility.slug}`} className="group block">
                                    <div className="relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm border border-white transform-gpu transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                        <Image
                                            src={facility.img}
                                            alt={facility.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10">
                                            <span className="text-lg font-bold text-white tracking-widest uppercase drop-shadow-md">{facility.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="mt-14 text-center">
                        <Link href="/amenities">
                            <button className="px-8 py-3.5 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-900 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-emerald-800/10 uppercase tracking-widest text-xs">
                                Explore All Amenities
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            <StatsSection />
            <Professionals />
            <NewsSection initialNews={initialNews} />
            <Testimonials />
            <ClubsCarousel />
            <Gallery initialItems={initialGallery} />
            <HomeMap />
            <DynamicCTA variant="glass" />
        </div>
    );
}
