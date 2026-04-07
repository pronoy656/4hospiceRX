import React from 'react'
import Link from 'next/link'
import { Home, Search, LifeBuoy, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Premium Atmospheric Background - Matching 4hospiceRx Style */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#BAEFFF]/40 to-[#E0F2FE]/30 -z-10" />
      
      {/* Dynamic Background Blooms */}
      <div className="absolute top-[10%] -left-32 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[10%] -right-32 w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[100px] pointer-events-none opacity-50" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 py-20">
        {/* Large 404 Visual with Perspective */}
        <div className="relative mb-12">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#003B73] to-[#BAEFFF] leading-none select-none opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-white/40 backdrop-blur-xl border border-white/50 rounded-[40px] shadow-2xl shadow-blue-900/10 flex items-center justify-center text-[#38B6FF] relative group transition-transform duration-500 hover:scale-110">
              <Search size={64} strokeWidth={1.5} className="transition-transform duration-500 group-hover:rotate-12" />
              {/* Pulsing Medical Badge Accent */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg shadow-blue-200/50 flex items-center justify-center text-[#013074]">
                <LifeBuoy size={24} className="animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="inline-block px-5 py-2 bg-[#D1E9FF] text-[#1E40AF] text-[11px] font-extrabold tracking-[0.25em] rounded-full uppercase shadow-sm">
             Destination Unavailable
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#013074] tracking-tight leading-tight">
            Lost Your Way? <br />
            <span className="text-[#38B6FF]">We're Here to Help.</span>
          </h2>
          
          <p className="text-[#5B7B9E] text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed opacity-90">
            The page you're looking for might have been moved, deleted, or never existed. Let's get you back to the clinical tools your patients rely on.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/"
            className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#003B73] to-[#005CAD] text-white rounded-[20px] font-bold shadow-xl shadow-blue-900/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-900/30"
          >
            <Home size={20} />
            Back to Home
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link 
            href="/patient-education-resources"
            className="group flex items-center gap-3 px-10 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-[#013074] rounded-[20px] font-bold shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white hover:scale-[1.03]"
          >
            Visit Resource Center
          </Link>
        </div>

        {/* Support Link */}
        <div className="mt-16 pt-8 border-t border-sky-100/50">
          <p className="text-[#94A3B8] font-medium text-sm">
            Still can't find what you need? <Link href="/contact" className="text-[#38B6FF] font-bold hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
