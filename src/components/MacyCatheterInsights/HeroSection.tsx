import React from 'react'
import { Syringe } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-[#003B73] to-[#005CAD] min-h-[480px] pt-16 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-12 pointer-events-none" />
      
      {/* Syringe Icon with Glassmorphism */}
      <div className="relative z-10 mb-8">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-[18px] flex items-center justify-center text-white shadow-xl shadow-[#003B73]/20 transition-transform duration-500 hover:scale-110">
          <Syringe strokeWidth={1.5} size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-extrabold tracking-[0.2em] text-white uppercase mb-8 shadow-sm">
          Alternative Medication Delivery
        </div>
        
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold text-white mb-6 tracking-tight leading-tight">
          Macy Catheter Insights
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-50/90 font-medium leading-relaxed opacity-90">
          Clinical evidence, dosing protocols, medication compatibility, and best practices for reliable rectal medication delivery in hospice care
        </p>
      </div>

      {/* Modern Wave Divider - Crisp White Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full h-auto text-white fill-current"
          preserveAspectRatio="none"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 60C320 80 720 80 1440 60V100H0V60Z" 
          />
        </svg>
      </div>
    </div>
  )
}