"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

/**
 * Premium SmoothScroll using Lenis.
 * Provides the "anti-gravity" feel by overriding native scroll with high-perf easing.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with premium settings for "antigravity" feel
        const lenis = new Lenis({
            duration: 1.5, // Slightly longer for flowy motion
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Optimized RAF loop
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            lenisRef.current = null;
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}

