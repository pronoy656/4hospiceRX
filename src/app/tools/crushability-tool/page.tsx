"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Pill, Home, ChevronRight, AlertCircle } from "lucide-react";

export default function CrushabilityTool() {
  const [medications, setMedications] = useState([""]);

  const addMedication = () => {
    setMedications([...medications, ""]);
  };

  const updateMedication = (index: number, value: string) => {
    const newMeds = [...medications];
    newMeds[index] = value;
    setMedications(newMeds);
  };

  const handleClearAll = () => {
    setMedications([""]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-gradient-to-r from-[#207cbf] to-[#57aef2] pt-12 pb-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-200/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[840px] mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/80 text-[13px] font-medium mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <span className="text-white">Crushability / Do Not Crush Tool</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="w-[72px] h-[72px] shrink-0 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
              <Pill className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Crushability / Do Not Crush Tool</h1>
              <p className="text-white/90 text-[15px] md:text-[17px] font-medium">Evidence-based guidance for medication administration in patients with dysphagia</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[700px] mx-auto px-6 pt-10 pb-24 relative z-20">
        
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <h2 className="text-[19px] font-extrabold text-[#013074]">Input Parameters</h2>
          
          <div className="space-y-4">
            {medications.map((med, index) => (
              <div key={index} className="space-y-2">
                <label className="text-[13px] font-bold text-[#013074] ml-1">Medication Name</label>
                <input 
                  type="text"
                  placeholder="Enter medication name"
                  value={med}
                  onChange={(e) => updateMedication(index, e.target.value)}
                  className="w-full h-[52px] px-5 bg-white border border-[#013074]/30 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#013074] shadow-sm transition-colors"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <button 
              onClick={addMedication}
              className="w-full bg-gradient-to-b from-[#A5C3D6] to-[#C1D6E8] hover:brightness-105 text-white h-[52px] rounded-[12px] font-bold shadow-sm transition-all text-[15px]"
            >
              Additional Med
            </button>
            <button 
              onClick={handleClearAll}
              className="w-full bg-gradient-to-b from-[#A5C3D6] to-[#C1D6E8] hover:brightness-105 text-white h-[52px] rounded-[12px] font-bold shadow-sm transition-all text-[15px]"
            >
              Clear all
            </button>
            <button className="w-full bg-[#005CAD] hover:bg-[#004a8f] text-white h-[52px] rounded-[12px] font-bold shadow-sm transition-colors text-[15px]">
              Crush/Open Check
            </button>
          </div>

          <div className="bg-[#FFF8ED] border-l-[4px] border-orange-400 rounded-lg p-5 flex gap-4 mt-6">
            <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <div className="text-[14px] text-[#714d24] leading-relaxed">
              <span className="font-bold">Evidence Notes </span> 
              This tool provides general guidance based on current literature and resources including ISMP, NIOSH, and clinical practice guidelines. Always verify with current prescribing information, consult with pharmacy, and use clinical judgment. For hazardous drugs, follow USP &lt;800&gt; standards. This information does not replace professional medical advice.
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
