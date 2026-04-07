import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-[#003B73] to-[#005CAD] pt-28 pb-32 text-center text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 z-10 flex flex-col items-center">
        <div className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-colors uppercase mb-6 backdrop-blur-sm shadow-sm">
          Education & Support
        </div>
        
        <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight mb-6 tracking-tight">
          Resources
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Educational materials for healthcare professionals, patients, and caregivers
        </p>
      </div>

      {/* Curved bottom transition SVG - Matching the Tools Page */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] overflow-hidden translate-y-[1px]">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white fill-current">
          <path d="M0 60C240 75 480 75 720 60C960 45 1200 45 1440 60V100H0V60Z" />
        </svg>
      </div>
    </div>
  )
}