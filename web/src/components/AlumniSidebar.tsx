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
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

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
        <aside className="w-full">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200 sticky top-24">
                <h3 className="text-lg font-bold text-zinc-900 mb-6 px-2">Navigation</h3>
                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-between p-3 rounded-xl transition-all group",
                                    isActive
                                        ? "bg-emerald-50 text-emerald-700 font-semibold"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={cn("w-5 h-5", isActive ? "text-emerald-600" : "text-zinc-400 group-hover:text-zinc-600")} />
                                    <span>{item.label}</span>
                                </div>
                                {isActive && (
                                    <motion.div layoutId="active-nav-indicator">
                                        <ChevronRight className="w-4 h-4 text-emerald-600" />
                                    </motion.div>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
