"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useAdmissionStatus } from "@/hooks/useAdmissionStatus";

export default function AdmissionsPage() {
    const { isAdmissionOpen } = useAdmissionStatus();

    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans pt-[112px]">
            {/* Page Header */}
            <section className="relative py-24 px-6 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase">
                            College Admissions
                        </h1>
                        <p className="text-xl md:text-3xl text-emerald-100 max-w-2xl mx-auto font-bold tracking-[0.3em] uppercase animate-pulse">
                            Update Soon
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Admission Overview */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-emerald-800 mb-8 uppercase tracking-wider">Admission Update Soon</h2>
                        <div className="space-y-6 text-xl text-zinc-600 leading-relaxed text-center font-medium">
                            <p className="bg-emerald-50 p-8 rounded-2xl border-2 border-dashed border-emerald-200">
                                Thank you for your interest in CM College. Admission details for the upcoming academic session will be updated here shortly. Please stay tuned and check back soon for detailed information on programs, eligibility, and the application process.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
