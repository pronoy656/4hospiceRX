"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AccessDialog } from '../common/AccessDialog';

export default function HospiceCare() {
  const [isAccessDialogOpen, setIsAccessDialogOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Vibrant Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003074] via-[#0052C2] to-[#38B6FF] -z-10" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to Elevate Your Hospice Care?
        </h2>
        <p className="text-[#E0F2FE] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          Join hundreds of hospice organizations using 4HospiceRx for clinical decision support and pharmacy solutions.
        </p>

        <button 
          onClick={() => setIsAccessDialogOpen(true)}
          className="inline-flex items-center gap-2 bg-white text-[#003074] font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-[#F1F5F9] transition-all transform hover:scale-[1.03] active:scale-95 text-lg"
        >
          Get Started Free <ArrowRight size={20} strokeWidth={3} />
        </button>
      </div>

      <AccessDialog isOpen={isAccessDialogOpen} onOpenChange={setIsAccessDialogOpen} />
    </section>
  );
}