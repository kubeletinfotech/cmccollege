"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Disable smooth scroll on mobile for better performance on low-end devices
        if (window.innerWidth < 1024) return;

        const lenis = new Lenis({
            lerp: 0.08, // Slightly reduced for better performance
            wheelMultiplier: 1,
            touchMultiplier: 2,
            smoothWheel: true,
            // @ts-ignore - smoothTouch is heavy on low-end devices
            smoothTouch: false,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Reset scroll position on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return <>{children}</>;
}
