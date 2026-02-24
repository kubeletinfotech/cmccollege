"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AMENITIES_DATA } from "@/data/amenities";
import { ChevronRight } from "lucide-react";

export default function AmenitiesSidebar() {
    const pathname = usePathname();
    const currentSlug = pathname.split("/").pop();

    const items = Object.entries(AMENITIES_DATA).map(([slug, data]) => ({
        name: data.title,
        href: `/amenities/${slug}`,
        slug: slug
    }));

    return (
        <aside className="w-full sticky top-[112px] z-30 self-start h-fit space-y-8 transition-all duration-300">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-100 border border-zinc-100">
                {/* Header */}
                <div className="bg-[#5D1035] p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "12px 12px" }}></div>
                    <h3 className="text-xl font-bold text-white font-serif relative z-10">Amenities</h3>
                </div>

                {/* Navigation Links */}
                <nav className="p-2">
                    {items.map((item) => {
                        const isActive = currentSlug === item.slug;
                        return (
                            <Link
                                key={item.slug}
                                href={item.href}
                                className={`
                                    flex items-center justify-between px-5 py-4 rounded-xl mb-1 transition-all duration-300 group
                                    ${isActive
                                        ? "bg-[#5D1035]/5 text-[#5D1035] font-bold shadow-sm ring-1 ring-[#5D1035]/20 translate-x-1"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-[#5D1035] font-medium hover:translate-x-1"}
                                `}
                            >
                                <span>{item.name}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-[#5D1035]" : "text-zinc-300 group-hover:text-[#5D1035]"}`} />
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Quick Contact / Help Box */}
            <div className="bg-linear-to-br from-[#5D1035] to-[#3d0a23] p-8 rounded-2xl text-white text-center shadow-xl shadow-[#5D1035]/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-500"></div>

                <h4 className="font-bold text-xl mb-3 font-serif relative z-10">Need Assistance?</h4>
                <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed">
                    Contact our administrative office for more details about campus facilities.
                </p>
                <Link href="/contact" className="relative z-10 inline-flex items-center justify-center w-full bg-white text-[#5D1035] px-6 py-3 rounded-xl text-sm font-bold hover:bg-zinc-50 hover:scale-105 active:scale-95 transition-all shadow-lg">
                    Contact Us
                </Link>
            </div>
        </aside>
    );
}
