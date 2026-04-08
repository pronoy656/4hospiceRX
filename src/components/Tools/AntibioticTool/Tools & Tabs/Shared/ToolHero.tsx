import React from "react";
import Link from "next/link";
import { Pill, Home, ChevronRight } from "lucide-react";

export const ToolHero = () => {
  return (
    <header className="bg-gradient-to-r from-[#003B73] to-[#005CAD] pt-8 pb-16 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-400/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 text-white/60 text-[13px] font-medium mb-8">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">Hospice Antibiotic Decision Tool</span>
        </nav>

        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[22px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
            <Pill className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Hospice Antibiotic Decision Tool</h1>
            <p className="text-white/70 text-lg font-medium">Clinical decision support for antibiotic therapy in hospice patients.</p>
          </div>
        </div>
      </div>
    </header>
  );
};
