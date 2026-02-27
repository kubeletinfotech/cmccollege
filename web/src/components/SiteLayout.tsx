"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserSync from "./UserSync";
import { Toaster } from "react-hot-toast";
import PageTransition from "./PageTransition";
import dynamic from "next/dynamic";

const BottomTicker = dynamic(() => import("./BottomTicker"), { ssr: false });
const AdmissionPopup = dynamic(() => import("./AdmissionPopup"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <Footer />
            <AdmissionPopup />
            <WhatsAppWidget />
            <UserSync />
            <Toaster position="top-right" />
        </SmoothScroll>
    );
}
