"use client";

import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay and Blue Gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/banner.jpg")' }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Blue brand gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#38B6FF]/20 via-transparent to-[#38B6FF]/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#38B6FF]/20 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center text-white flex flex-col items-center">
                <div className="space-y-4">
                    <h1 className="text-5xl lg:text-[68px] font-extrabold tracking-tight leading-[1.1] animate-slide-up opacity-0">
                        Optimizing Comfort.<br />
                        Minimizing Cost.<br />
                        Saving Time.
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-white/90 font-medium max-w-2xl mx-auto pt-4 leading-relaxed animate-slide-up animation-delay-200 opacity-0">
                        Simplified hospice clinical solutions designed to enhance quality of life and streamline care
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-8 animate-slide-up animation-delay-400 opacity-0">
                    {/* Primary Button - Fixed Hover */}
                    <Link 
                        href="/tools" 
                        className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "h-16 px-12 bg-[#38B6FF] hover:!bg-[#2e93ff] text-white font-bold rounded-2xl shadow-2xl shadow-[#38B6FF]/40 transition-all hover:scale-105 active:scale-95 text-lg border-none"
                        )}
                    >
                        Explore Tools
                    </Link>

                    {/* Badge Pills */}
                    <div className="flex flex-wrap justify-center gap-4 animation-delay-600">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[#003B73] font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                            <Zap size={16} fill="#38B6FF" className="text-[#38B6FF]" />
                            Evidence Based
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[#003B73] font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                            By Clinicians, for Clinicians
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

