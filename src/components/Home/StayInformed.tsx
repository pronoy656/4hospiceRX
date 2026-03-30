"use client";

import React from 'react';

export default function StayInformed() {
  return (
    <section className="relative py-24 pb-32 px-6 overflow-hidden">
      {/* Vibrant Left-to-Right Light Blue Gradient Background */}
      <div className="absolute inset-0 bg-[#E0F2FE] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#BAE6FD] via-[#F8FAFC] to-[#BAE6FD] -z-10 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.4),transparent_50%)] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[2.75rem] md:text-[3.5rem] font-black text-[#013074] mb-6 tracking-tight uppercase">
          STAY INFORMED
        </h2>
        
        <p className="text-[#64748B] text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Sign up to receive the latest updates on hospice care and palliative care therapies directly to your inbox from our Clinical Team, including useful tools like the methadone calculator and insights on respiratory interchange!
        </p>

        <form className="max-w-[700px] mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input 
            type="email" 
            placeholder="Email*" 
            required
            className="flex-1 w-full px-8 py-5 bg-white/90 backdrop-blur-sm border border-[#38B6FF]/30 rounded-[22px] text-[#033074] placeholder-[#94A3B8] font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-[#38B6FF]/10 focus:border-[#38B6FF] transition-all shadow-sm"
          />
          <button className="w-full sm:w-auto px-12 py-5 bg-[#38B6FF] hover:bg-[#31a1e0] text-white font-black text-xl rounded-[22px] shadow-[0_15px_30px_-5px_rgba(56,182,255,0.4)] transition-all transform hover:translate-y-[-2px] active:scale-95">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}