"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px', // Start revealing slightly before it enters the viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform] duration-700 ease-out transform-gpu ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                willChange: !isVisible ? 'opacity, transform' : 'auto',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased'
            }}
        >
            {children}
        </div>
    );
}
