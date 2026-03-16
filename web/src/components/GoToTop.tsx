"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-9999 cursor-pointer group"
                    aria-label="Go to top"
                >
                    <div className="flex items-center justify-center w-9 h-9 bg-[#7a0b3a] text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(122,11,58,0.5)] hover:-translate-y-1 transition-all duration-300">
                        <ArrowUp size={20} className="group-hover:animate-bounce" strokeWidth={2.5} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
