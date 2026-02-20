"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Award, Building } from "lucide-react";

// Mock Data
const CM_COLLEGE_SCHOLARSHIPS = [
    { title: "POST MATRIC SCHOLARSHIP-MINORITY" },
    { title: "THE CHAIRMAN'S SCHOLARSHIP" },
    { title: "COLLEGE MANAGEMENT SCHOLARSHIP" },
    { title: "COLLEGE MINORITY SCHOLARSHIP" },
    { title: "COLLEGE SPORTS SCHOLARSHIP" },
    { title: "COLLEGE ST SCHOLARSHIP" },
    { title: "SCHOLARSHIP TEST" },
    { title: "THE DIRECTOR SCHOLARSHIP" },
    { title: "SCHOLARSHIP TEST LAKSHADWEEP STUDENTS" },
    { title: "COLLEGE MERIT SCHOLARSHIP" },
    { title: "COLLEGE PTA REFERENCE SCHOLARSHIP" },
    { title: "THE PEOPLE REPRESENTATIVE SCHOLARSHIP" },
    { title: "IMAM RAZI MERIT SCHOLARSHIP" },
];

export default function ScholarshipsPage() {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-zinc-100 min-h-[80vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-emerald-900 mb-2 font-serif">Scholarships & Financial Aid</h1>
                <p className="text-zinc-600">
                    We believe financial constraints should not be a barrier to education. Explore our range of government and management scholarships.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CM_COLLEGE_SCHOLARSHIPS.map((sch, idx) => (
                    <div
                        key={idx}
                        className="p-5 rounded-2xl border border-zinc-100 hover:border-emerald-200 hover:shadow-md transition-all bg-white group flex items-center gap-4"
                    >
                        <div className="p-3 bg-emerald-50 rounded-xl shrink-0">
                            <GraduationCap className="w-6 h-6 text-emerald-900" />
                        </div>

                        <h3 className="font-bold text-lg text-zinc-900 group-hover:text-emerald-900 transition-colors">
                            {sch.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
