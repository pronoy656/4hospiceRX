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
        <section className="bg-[#F8FAFC]">
            {/* Dark Blue Banner - Matching Reference */}
            <div className="bg-[#013074] py-5 px-6 text-center shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Hospice Clinical Tools
                </h2>
            </div>

            <div className="max-w-[1240px] mx-auto px-6 pt-8 pb-20">
                {/* Centered Subtitle */}
                <div className="text-center mb-12">
                    <p className="text-[#5B7B9E] text-[1.1rem] leading-relaxed max-w-3xl mx-auto">
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
                            className={`opacity-0 ${isInView ? `animate-slide-up animation-delay-${(index % 8) * 100 + 100}` : ''}`}
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