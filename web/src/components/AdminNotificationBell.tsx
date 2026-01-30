"use client";

import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

export default function AdminNotificationBell() {
    const [unseenCount, setUnseenCount] = useState(0);
    // Use ref to keep track of previous count for comparison in interval/effects without stale closures
    const prevCountRef = useRef(0);

    const fetchUnseenCount = async (silent = true) => {
        try {
            const res = await fetch("/api/admin/career/unseen-count", { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                const newCount = data.count || 0;

                // Trigger notification if count definitely increased
                if (!silent && newCount > prevCountRef.current) {
                    toast("New Career Application Received", {
                        icon: "📄",
                        duration: 5000,
                        style: {
                            border: '1px solid #10B981',
                            padding: '16px',
                            color: '#064E3B',
                            background: '#ECFDF5',
                        },
                    });
                }

                setUnseenCount(newCount);
                prevCountRef.current = newCount;
            }
        } catch (error) {
            console.error("Failed to fetch notification count", error);
        }
    };

    const handleMarkAsSeen = async () => {
        if (unseenCount === 0) return;

        try {
            const res = await fetch("/api/admin/career/mark-seen", {
                method: "PATCH",
            });
            if (res.ok) {
                setUnseenCount(0);
                prevCountRef.current = 0;
                toast.success("Marked as seen");
            }
        } catch (error) {
            console.error("Failed to mark notifications as read", error);
        }
    };

    // Initial load
    useEffect(() => {
        fetchUnseenCount(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Polling
    useEffect(() => {
        const interval = setInterval(() => {
            fetchUnseenCount(false);
        }, 10000); // reduced to 10s for faster feedback during demo

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array relies on refs for comparing state, which is cleaner for intervals

    return (
        <button
            onClick={handleMarkAsSeen}
            className="relative p-2 text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            title={unseenCount > 0 ? `${unseenCount} unseen applications` : "No new notifications"}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
            </svg>
            {unseenCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
                </span>
            )}
        </button>
    );
}
