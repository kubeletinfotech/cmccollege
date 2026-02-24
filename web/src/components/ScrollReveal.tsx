"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Performant ScrollReveal component.
 * Uses a single IntersectionObserver per instance to trigger high-perf CSS transitions.
 */
export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentRef);
                }
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly after coming into view
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                willChange: 'opacity, transform', // Keep persistent to avoid layout shifts on state change
            }}
        >
            {children}
        </div>
    );
}

