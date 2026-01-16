"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, Award } from "lucide-react";

export default function AccreditationSection() {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-8 md:p-10 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
            {/* Simple Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#7B0046]"></div>

            <ScrollReveal>
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Icon / Badge Area */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 bg-rose-50 rounded-xl flex items-center justify-center text-[#7B0046] border border-rose-100/50">
                            <ShieldCheck size={32} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Accreditation</h2>
                            <span className="px-3 py-1 bg-[#7B0046]/10 text-[#7B0046] text-xs font-bold uppercase tracking-wider rounded-full">
                                UGC Recognized
                            </span>
                        </div>

                        <div className="prose prose-zinc text-zinc-600 max-w-none text-justify text-base leading-relaxed">
                            <p>
                                Our college has been recognized by the <strong>University Grants Commission (UGC)</strong> under <strong>Section 2(f) of the Act 1957</strong>. This recognition signifies that our college is eligible to receive central funding and participate in various central government schemes and initiatives related to higher education.
                            </p>
                            <p>
                                Section 2(f) of the UGC Act 1957 defines a university as "a university established or incorporated by or under a Central Act, a Provincial Act or a State Act, and includes any such institution as may, in consultation with the University concerned, be recognized by the Commission in accordance with the regulations made in this behalf under this Act."
                            </p>
                            <p>
                                In summary, our college's recognition by the UGC under Section 2(f) of the Act 1957 is a testament to our commitment to providing quality education and our dedication to meeting the standards set by the regulatory body. It provides us with access to central funding and other government schemes, thereby enabling us to enhance the overall educational experience for our students.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
