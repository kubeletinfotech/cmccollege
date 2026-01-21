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
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <div className="bg-[#FAF9F6] rounded-t-xl overflow-hidden border border-zinc-200">
                {/* Header */}
                <div className="bg-[#5D1035] p-5">
                    <h3 className="text-xl font-bold text-white font-serif">Amenities</h3>
                </div>

                {/* Navigation Links */}
                <nav className="">
                    {items.map((item) => {
                        const isActive = currentSlug === item.slug;
                        return (
                            <Link
                                key={item.slug}
                                href={item.href}
                                className={`
                                    flex items-center justify-between px-6 py-4 border-b border-zinc-100 transition-all duration-300
                                    ${isActive
                                        ? "bg-white text-[#5D1035] font-bold border-l-4 border-l-[#5D1035] shadow-sm"
                                        : "text-zinc-600 hover:bg-white hover:text-[#5D1035] hover:pl-8 font-medium"}
                                `}
                            >
                                <span>{item.name}</span>
                                {isActive && <ChevronRight className="w-4 h-4" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Quick Contact / Help Box (Optional, based on common sidebars) */}
            <div className="bg-[#5D1035] p-6 rounded-xl text-white text-center">
                <h4 className="font-bold text-lg mb-2 font-serif">Need Assistance?</h4>
                <p className="text-white/80 text-sm mb-4">Contact our administrative office for more details.</p>
                <Link href="/contact" className="inline-block bg-white text-[#5D1035] px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-100 transition-colors">
                    Contact Us
                </Link>
            </div>
        </aside>
    );
}
