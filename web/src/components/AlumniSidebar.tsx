"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Info,
    Users,
    FileText,
    Image as ImageIcon,
    Trophy,
} from "lucide-react";

const menuItems = [
    { label: "About Alumni", href: "/alumni", icon: Info },
    { label: "Office Bearers", href: "/alumni/office-bearers", icon: Users },
    { label: "Report", href: "/alumni/report", icon: FileText },
    { label: "Alumni Gallery", href: "/alumni/gallery", icon: ImageIcon },
    { label: "Alumni Achievers", href: "/alumni/achievers", icon: Trophy },
];

export default function AlumniSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full lg:sticky lg:top-32 z-30 self-start h-fit">
            <div className="bg-[#fcf9f5] rounded-xl border border-[#e5e0d8] overflow-hidden shadow-sm">
                <div className="p-6 bg-[#7a0b3a] text-white">
                    <h3 className="font-bold font-serif text-xl tracking-wide">Alumni Association</h3>
                </div>
                <nav className="p-3">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 border-l-4",
                                            isActive
                                                ? "bg-white border-[#7a0b3a] text-[#7a0b3a] shadow-sm"
                                                : "border-transparent text-zinc-700 hover:bg-zinc-100 hover:text-[#7a0b3a]"
                                        )}
                                    >
                                        <item.icon className={cn("w-5 h-5", isActive ? "text-[#7a0b3a]" : "text-zinc-400 group-hover:text-[#7a0b3a]")} />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
