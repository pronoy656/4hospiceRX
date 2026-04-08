import React from 'react';
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#003B73] to-[#005CAD] pt-32 pb-40 text-center text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-6 z-10 flex flex-col items-center">
        <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8">
          Durable Medical Equipment
        </Badge>
        <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
          DME Solutions
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Comprehensive equipment catalog with streamlined ordering — from hospital beds and 
          oxygen to specialized comfort equipment for hospice patients
        </p>
      </div>

      {/* Curved bottom transition SVG */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] overflow-hidden translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto text-white fill-current"
        >
          <path d="M0 60C240 75 480 75 720 60C960 45 1200 45 1440 60V100H0V60Z" />
        </svg>
      </div>
    </section>
  );
}