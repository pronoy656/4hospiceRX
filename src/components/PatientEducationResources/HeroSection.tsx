import React from 'react'
import { BookOpen } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-[#003B73] via-[#005FCB] to-[#38B6FF] min-h-[480px] pt-16 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-12 pointer-events-none" />
      
      {/* Icon with Glassmorphism */}
      <div className="relative z-10 mb-8">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] flex items-center justify-center text-white shadow-xl shadow-[#003B73]/20">
          <BookOpen strokeWidth={1.5} size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-extrabold tracking-[0.2em] text-white uppercase mb-8 shadow-sm">
          Education & Support
        </div>
        
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold text-white mb-6 tracking-tight leading-tight">
          Patient Education Resources
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-50/90 font-medium leading-relaxed opacity-90">
          Comprehensive guides, care information, and support materials for patients, families, and caregivers navigating the hospice journey
        </p>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 160" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full h-24 md:h-32 text-white fill-current"
          preserveAspectRatio="none"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 100C320 60 720 60 1440 100V160H0V100Z" 
          />
        </svg>
      </div>
    </div>
  )
}
