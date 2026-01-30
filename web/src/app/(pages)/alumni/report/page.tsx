"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";

const reports = [
    { title: "Annual Alumni Meet Report 2024", date: "March 15, 2024", size: "2.4 MB" },
    { title: "Alumni Association Audited Report 2023-24", date: "April 10, 2024", size: "1.8 MB" },
    { title: "Executive Committee Meeting Minutes", date: "January 05, 2024", size: "850 KB" },
];

export default function AlumniReportPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-200/40 border border-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800">
                            <FileText className="w-5 h-5" />
                        </span>
                        Reports & Documents
                    </h3>

                    <div className="space-y-4">
                        {reports.map((report, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-md hover:border-emerald-100 transition-all gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl border border-zinc-100 text-red-500 shadow-sm">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 text-lg leading-tight mb-1">{report.title}</h4>
                                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {report.date}
                                            </span>
                                            <span className="bg-zinc-200 px-2 py-0.5 rounded text-xs text-zinc-600 font-medium">{report.size}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-emerald-600 text-white rounded-xl transition-colors text-sm font-medium shrink-0">
                                    <Download size={16} />
                                    <span>Download</span>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
