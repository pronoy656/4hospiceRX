import React from 'react'

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-[#013074] to-[#005CAD] pt-20 pb-30 text-center text-white overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#38B6FF]/20 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#38B6FF]/10 blur-[110px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative max-w-[1200px] mx-auto px-6 z-10 flex flex-col items-center">
                <div className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 transition-colors backdrop-blur-sm">
                    Comprehensive Solutions
                </div>

                <h1 className="text-[3.5rem] md:text-[4rem] font-black leading-tight mb-8 tracking-tight">
                    Pharmacy Solutions
                </h1>

                <p className="text-white/80 text-xl md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                    PBM services, Macy Catheter insights, and DME solutions — everything your hospice agency needs
                </p>
            </div>

            {/* Curved bottom transition SVG - River Waves Appearance */}
            <div className="absolute bottom-0 left-0 w-full leading-[0] overflow-hidden translate-y-[1px]">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white fill-current">
                    <path d="M0 60C240 75 480 75 720 60C960 45 1200 45 1440 60V100H0V60Z" />
                </svg>
            </div>
        </section>
    )
}
