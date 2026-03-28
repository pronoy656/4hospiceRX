"use client";

import React from 'react'
import { Badge } from "@/components/ui/badge";
import { tools } from "./Data";
import { ToolCard } from "./ToolCard";
import { useInView } from '@/hooks/useInView';

export default function Toolspage() {
    const [gridRef, isInView] = useInView({ threshold: 0.1 });

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Header section with deep blue gradient */}
            <section className="relative bg-gradient-to-b from-[#003B73] to-[#005CAD] pt-28 pb-32 text-center text-white overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative max-w-[1200px] mx-auto px-6 z-10 flex flex-col items-center">
                    <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        12 Evidence-Based Tools
                    </Badge>
                    <h1 className="text-[56px] font-extrabold leading-tight mb-6">Clinical Tools</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        Hospice-specific decision support tools, alphabetized for quick access
                    </p>
                </div>

                {/* Curved bottom transition SVG - Subtle River Waves */}
                <div className="absolute bottom-0 left-0 w-full leading-[0] overflow-hidden">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#F8FAFC] fill-current">
                        <path d="M0 60C240 75 480 75 720 60C960 45 1200 45 1440 60V100H0V60Z" />
                    </svg>
                </div>
            </section>

            {/* Grid of Tools */}
            <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20 -mt-8 lg:-mt-16">
                <div 
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {tools.map((tool, index) => (
                        <div 
                            key={index} 
                            className={`opacity-0 ${isInView ? `animate-slide-up animation-delay-${(index % 8) * 100 + 100}` : ''}`}
                        >
                            <ToolCard {...tool} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
