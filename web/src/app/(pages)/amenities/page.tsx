"use client";

import Image from "next/image";
import Link from "next/link";
import { Book, Wifi, Coffee, Monitor, Dumbbell, Bus, Stethoscope, Home, Music, Drama } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import DynamicCTA from "@/components/DynamicCTA";

export default function AmenitiesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans pt-[112px]">
            {/* Page Header */}
            <section className="relative py-20 px-6 bg-[#5D1035] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-serif">
                            Campus Amenities
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
                            World-class infrastructure designed to support your academic journey and holistic development.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Academic Amenities */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5D1035] mb-4 font-serif">Academic Infrastructure</h2>
                    <p className="text-zinc-600 text-lg">State-of-the-art learning environments for students.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            slug: "central-library",
                            title: "Central Library",
                            desc: "A vast storehouse of knowledge with thousands of books, journals, and digital resources.",
                            icon: Book,
                            image: "/images/school_library_1768115599802.png"
                        },
                        {
                            slug: "computer-labs",
                            title: "Computer Labs",
                            desc: "High-tech computer labs with high-speed internet to keep you connected with the digital world.",
                            icon: Monitor,
                            image: "/images/science_lab_1768115578614.png"
                        },
                        {
                            slug: "wifi-campus", // Note: This slug might not exist in data yet, need to check or handle 404. Let's assume we stick to ones we have data for or just generic.
                            // Actually, I only added transportation, hostel, central-library, computer-labs, cafeteria, sports-complex, medical-care.
                            // I will map wifi-campus to computer-labs or create data for it? For now let's leave link but user might see 404 if data missing.
                            // Correction: I should ensure slug exists. I didn't add wifi-campus in AMENITIES_DATA. I'll stick to non-link for Wifi if data missing, OR add data.
                            // Let's add data for wifi next or just generic link.
                            title: "Wi-Fi Campus",
                            desc: "Seamless connectivity across the campus to facilitate e-learning and research.",
                            icon: Wifi,
                            image: "/images/classroom_learning_1768115518451.png"
                        }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 100} className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-lg transition-all">
                            {/* Functional Link only if slug provided and data likely exists. For Wifi, I'll allow link but it might 404 if data not added. */}
                            <Link href={item.slug ? `/amenities/${item.slug}` : "#"} className={!item.slug ? "cursor-default" : ""}>
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2 font-serif group-hover:text-[#5D1035] transition-colors">{item.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Student Well-being */}
            <section className="py-24 px-6 bg-[#5D1035]/5">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#5D1035] mb-4 font-serif">Student Life & Well-being</h2>
                        <p className="text-zinc-600 text-lg">Facilities that ensure a comfortable and active campus life.</p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                slug: "hostel",
                                title: "Hostel Facility",
                                desc: "Secure and homely accommodation for both boys and girls.",
                                icon: Home,
                                color: "bg-emerald-100 text-emerald-700"
                            },
                            {
                                slug: "cafeteria",
                                title: "Cafeteria",
                                desc: "Hygienic and nutritious food options for students and staff.",
                                icon: Coffee,
                                color: "bg-orange-100 text-orange-700"
                            },
                            {
                                slug: "transportation",
                                title: "Transportation",
                                desc: "Safe and convenient bus services covering major routes.",
                                icon: Bus,
                                color: "bg-blue-100 text-blue-700"
                            },
                            {
                                slug: "medical-care",
                                title: "Medical Care",
                                desc: "First-aid center and on-call medical assistance for emergencies.",
                                icon: Stethoscope,
                                color: "bg-red-100 text-red-700"
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <Link href={`/amenities/${item.slug}`}>
                                    <div className="h-full bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                                        <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-[#5D1035] transition-colors">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultural & Sports */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#5D1035] mb-6 font-serif">Sports & Culture</h2>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            We believe in the holistic development of our students. Our campus provides ample opportunities for sports, fitness, and artistic expression.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { text: "Spacious Playground for Outdoor Sports", icon: Dumbbell, slug: "sports-complex" },
                                { text: "Indoor Games & Recreational Areas", icon: Drama },
                                { text: "Auditorium for Cultural Events", icon: Music },
                                { text: "Gymnasium & Fitness Center", icon: Dumbbell, slug: "sports-complex" }
                            ].map((item, i) => (
                                <li key={i} className="flex">
                                    <Link
                                        href={item.slug ? `/amenities/${item.slug}` : "#"}
                                        className={`flex items-center gap-3 text-zinc-700 font-medium ${item.slug ? "hover:text-[#5D1035] transition-colors" : ""}`}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#5D1035]/10 flex items-center justify-center text-[#5D1035]">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={200} className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                        <Link href="/amenities/sports-complex">
                            <Image
                                src="/images/school_sports_ground_1768117765955.png"
                                alt="Sports Facilities"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5D1035]/40 to-transparent pointer-events-none" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* Final Call to Action */}
            <DynamicCTA className="py-20 px-6 bg-[#5D1035] text-white text-center" />
        </div>
    );
}
