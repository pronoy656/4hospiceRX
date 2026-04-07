import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ClinicalSupportCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#003B73] to-[#005CAD] rounded-[3rem] p-12 md:p-20 overflow-hidden text-center text-white shadow-2xl shadow-blue-900/10 transition-transform duration-500 hover:scale-[1.01]">
          {/* Internal Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-[3rem] font-extrabold mb-6 tracking-tight">
              Need Clinical Support?
            </h2>
            <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 opacity-90 font-medium tracking-tight">
              Our pharmacists are available 24/7 for Macy Catheter dosing questions, medication compatibility checks, and clinical guidance.
            </p>

            <div className="flex justify-center">
              <button className="group relative flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.25rem] font-extrabold text-[1.1rem] text-white hover:bg-white/20 transition-all duration-300 shadow-xl shadow-[#003B73]/20">
                Contact Pharmacist
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
