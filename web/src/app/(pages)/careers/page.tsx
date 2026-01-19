"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Upload } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans pt-[112px]">
            {/* Page Header */}
            <section className="relative py-24 px-6 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Careers
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                            Join our team of dedicated educators and professionals committed to excellence and values.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="flex-grow py-20 px-6 bg-zinc-50">
                <ScrollReveal className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-zinc-100">
                        <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center font-serif">Apply Now</h2>

                        <form className="space-y-6">
                            {/* Position Select */}
                            <div>
                                <select
                                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-white text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>— Please choose an option —</option>
                                    <option value="teaching">Teaching Faculty</option>
                                    <option value="admin">Administrative Staff</option>
                                    <option value="support">Support Staff</option>
                                </select>
                            </div>

                            {/* Name & Email */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400"
                                />
                            </div>

                            {/* Phone & Location */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Your Location"
                                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400"
                                />
                            </div>

                            {/* File Upload */}
                            <div className="relative">
                                <input
                                    type="file"
                                    id="resume"
                                    className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-white flex items-center gap-3 text-zinc-500 peer-focus:ring-2 peer-focus:ring-emerald-500/20 peer-focus:border-emerald-500 transition-all">
                                    <span className="px-3 py-1 bg-zinc-100 rounded-md border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-wider">Choose File</span>
                                    <span className="text-sm">No file chosen</span>
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <textarea
                                placeholder="Covering Letter"
                                rows={6}
                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-zinc-400 resize-none"
                            ></textarea>

                            {/* Submit Button */}
                            <div className="pt-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-10 py-4 bg-[#7B0046] text-white font-bold rounded-full hover:bg-[#5a0033] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm tracking-widest uppercase"
                                >
                                    Submit Your Application
                                </button>
                            </div>

                        </form>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
