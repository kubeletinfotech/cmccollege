"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function AlumniGalleryPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-800">
                            <ImageIcon className="w-5 h-5" />
                        </span>
                        Alumni Gallery
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden relative group cursor-pointer"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 bg-zinc-200">
                                    <ImageIcon size={32} />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <p className="text-white font-medium">Alumni Meet {2020 + idx}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-zinc-400 mt-8 text-sm">More photos coming soon...</p>
                </div>
            </div>
        </div>
    );
}
