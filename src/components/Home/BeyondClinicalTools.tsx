"use client";

import React from 'react';
import { BookOpen, Building2, Syringe, Package, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const blocks = [
  {
    title: "Patient Education Resources",
    description: "Browse curated educational materials, care guides, and family-facing resources designed to support patients and their loved ones navigating the hospice journey with compassion and clarity.",
    icon: BookOpen,
    btnText: "Browse",
    btnType: "blue",
  },
  {
    title: "Hospice PBM / Pharmacy Solution Overview",
    description: "Explore our comprehensive pharmacy benefit management solution tailored exclusively for hospice organizations — formulary management, clinical support, and cost optimization in one platform.",
    icon: Building2,
    btnText: "Learn More",
    btnType: "grey",
  },
  {
    title: "Macy Catheter Insights",
    description: "Clinical evidence, dosing protocols, and best practices for the Macy Catheter — a reliable alternative route for rectal medication delivery when oral and IV access is unavailable.",
    icon: Syringe,
    btnText: "Read More",
    btnType: "blue",
  },
  {
    title: "DME Solutions",
    description: "Comprehensive durable medical equipment catalog and streamlined ordering workflows — from hospital beds and oxygen concentrators to specialized comfort equipment for hospice patients.",
    icon: Package,
    btnText: "Explore",
    btnType: "grey",
  }
];

export default function BeyondClinicalTools() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient - Seamless blend from previous section (#F8FAFC) and more vibrant center */}
      <div className="absolute inset-0 bg-[#F8FAFC] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#BAEFFF] to-[#E0F2FE] -z-10 opacity-90" />
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-white/50 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className={`inline-block px-5 py-2 bg-[#D1E9FF] text-[#1E40AF] text-[11px] font-extrabold tracking-[0.25em] rounded-full mb-8 uppercase shadow-sm ${headerInView ? 'animate-slide-up' : ''}`}>
            Solutions & Resources
          </div>
          <h2 className={`text-[2.75rem] md:text-[3.5rem] font-extrabold text-[#013074] mb-5 tracking-tight leading-tight ${headerInView ? 'animate-slide-up animation-delay-100' : ''}`}>
            Beyond Clinical Tools
          </h2>
          <p className={`text-[#5B7B9E] text-lg md:text-xl font-semibold opacity-90 ${headerInView ? 'animate-slide-up animation-delay-200' : ''}`}>
            Pharmacy solutions, patient education, DME, and catheter insights
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {blocks.map((block, index) => (
            <div 
              key={index} 
              className={`bg-white/90 backdrop-blur-md border border-white/50 p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_45px_-15px_rgba(14,165,233,0.1)] flex flex-col items-start gap-6 hover:shadow-[0_25px_65px_-15px_rgba(14,165,233,0.2)] transition-all duration-500 group opacity-0 ${gridInView ? `animate-slide-up animation-delay-${index * 100 + 300}` : ''}`}
            >
              <div className="w-14 h-14 bg-[#E0F2FE] rounded-2xl flex items-center justify-center text-[#0EA5E9] shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0EA5E9] group-hover:text-white">
                <block.icon size={28} strokeWidth={2} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#013074] mb-3 group-hover:text-[#0EA5E9] transition-colors duration-300">
                  {block.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-[17px] font-medium opacity-95">
                  {block.description}
                </p>
              </div>

              <button className={`
                inline-flex items-center gap-2 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform group-hover:translate-x-1
                ${block.btnType === 'blue' 
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white hover:shadow-xl hover:shadow-sky-500/40' 
                  : 'bg-[#F1F5F9] text-[#1D4ED8] hover:bg-[#E2E8F0]'}
              `}>
                {block.btnText} <ChevronRight size={18} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}