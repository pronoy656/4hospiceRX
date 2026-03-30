"use client";

import React from 'react'
import { ToolCard } from '../Tools/ToolCard'
import { tools } from '../Tools/Data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function ClinicalTools() {
    const [gridRef, isInView] = useInView({ threshold: 0.1 });

    return (
        <section className="relative overflow-hidden">
            {/* Background Gradient - Matching BeyondClinicalTools for consistency */}
            <div className="absolute inset-0 bg-[#F8FAFC] -z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#BAEFFF] to-[#F8FAFC] -z-10 opacity-70" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent blur-[120px] -z-10" />

            {/* Dark Blue Banner - Matching Reference */}
            <div className="bg-[#013074] py-5 px-6 text-center shadow-md relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Hospice Clinical Tools
                </h2>
            </div>

            <div className="max-w-[1240px] mx-auto px-6 pt-12 pb-24 relative z-10">
                {/* Centered Subtitle */}
                <div className="text-center mb-16">
                    <p className="text-[#033074] text-[1.15rem] font-bold leading-relaxed max-w-3xl mx-auto opacity-90">
                        Access our comprehensive collection of evidence-based clinical decision support tools designed specifically for hospice and palliative care professionals.
                    </p>
                </div>

                <div 
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {tools.slice(0, 8).map((tool, index) => (
                        <div 
                            key={index} 
                            className={`h-full opacity-0 ${isInView ? `animate-slide-up animation-delay-${(index % 8) * 100 + 100}` : ''}`}
                        >
                            <ToolCard {...tool} />
                        </div>
                    ))}
                </div>

                {/* View All link for when showing 8 tools */}
                <div className="mt-16 text-center">
                    <Link
                        href="/tools"
                        className="inline-flex items-center gap-2 text-[#38B6FF] font-extrabold text-lg hover:gap-3 transition-all group"
                    >
                        Explore All Tools <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}