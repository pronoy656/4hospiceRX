"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Pill, Home, ChevronRight, ChevronDown, Check } from "lucide-react";

export default function BuprenorphineTool() {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [indication, setIndication] = useState("");
  const [formulation, setFormulation] = useState("");
  const [dose, setDose] = useState("");
  const [frequency, setFrequency] = useState("");
  const [painControl, setPainControl] = useState("");
  const [swallowingAbility, setSwallowingAbility] = useState("");
  const [tabletCapability, setTabletCapability] = useState("");

  const handleReset = () => {
    setSelectedAllergies([]);
    setIndication("");
    setFormulation("");
    setDose("");
    setFrequency("");
    setPainControl("");
    setSwallowingAbility("");
    setTabletCapability("");
  };


  const allergiesList = [
    "Morphine",
    "Codeine",
    "Oxycodone",
    "Oxymorphone",
    "Hydrocodone",
    "Hydromorphone",
    "Methadone",
    "Fentanyl",
    "Tramadol",
    "No known allergies"
  ];

  const toggleAllergy = (item: string) => {
    setSelectedAllergies(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
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
            <span className="text-white">Buprenorphine Decision Tool</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="w-[72px] h-[72px] shrink-0 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
              <Pill className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Buprenorphine Decision Tool for Hospice</h1>
              <p className="text-white/90 text-[15px] md:text-[17px] font-medium">Clinical Assessment and Opioid Rotation Guidance</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[840px] mx-auto px-6 pt-10 pb-24 relative z-20 space-y-6">
        
        {/* Clinical Assessment Questions */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <h2 className="text-[17px] font-extrabold text-[#013074]">Clinical Assessment Questions</h2>
          
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-[#013074] ml-1">Indication for Buprenorphine</label>
            <div className="relative">
              <select 
                value={indication}
                onChange={(e) => setIndication(e.target.value)}
                className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
              >
                <option value="">Select an indication</option>
                <option value="pain">Pain Management</option>
                <option value="oud">Opioid Use Disorder (OUD)</option>
                <option value="both">Both</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Documented Opioid Allergies or Intolerances */}
        <div className="bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-[19px] font-extrabold text-[#013074]">Documented Opioid Allergies or Intolerances</h2>
            <p className="text-[14px] font-bold text-[#013074]">Select all documented allergies or intolerances (check all that apply):</p>
          </div>
          
          <div className="space-y-3">
            {allergiesList.map((item) => {
              const isSelected = selectedAllergies.includes(item);
              return (
                <div 
                  key={item}
                  onClick={() => toggleAllergy(item)}
                  className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-[16px] cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#0f172a] shadow-sm flex items-center justify-center">
                    {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                  </div>
                  <span className="text-[14.5px] font-semibold text-[#013074] tracking-tight">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Buprenorphine Regimen Details */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <h2 className="text-[17px] font-extrabold text-[#013074]">Current Buprenorphine Regimen Details</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Current Formulation</label>
              <div className="relative">
                <select 
                  value={formulation}
                  onChange={(e) => setFormulation(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select formulation</option>
                  <option value="patch">Transdermal Patch (Butrans)</option>
                  <option value="sublingual">Sublingual Tablet/Film</option>
                  <option value="buccal">Buccal Film (Belbuca)</option>
                  <option value="injection">Injection (Sublocade)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Current Dose</label>
              <div className="relative">
                <select 
                  value={dose}
                  onChange={(e) => setDose(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select dose(formulation-dependent)</option>
                  <option value="low">Low Dose</option>
                  <option value="medium">Medium Dose</option>
                  <option value="high">High Dose</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Administration Frequency</label>
              <div className="relative">
                <select 
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select frequency(formulation-dependent)</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                  <option value="bid">Twice Daily (BID)</option>
                  <option value="tid">Three times Daily (TID)</option>
                  <option value="monthly">Monthly</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Additional Assessment */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Current Pain Control Assessment</label>
              <div className="relative">
                <select 
                  value={painControl}
                  onChange={(e) => setPainControl(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select pain control status</option>
                  <option value="controlled">Controlled</option>
                  <option value="uncontrolled">Uncontrolled</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Ability to Swallow Oral Medications</label>
              <div className="relative">
                <select 
                  value={swallowingAbility}
                  onChange={(e) => setSwallowingAbility(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select swallowing ability</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="difficulty">With Difficulty</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Capability for Partial Tablet Administration</label>
              <div className="relative">
                <select 
                  value={tabletCapability}
                  onChange={(e) => setTabletCapability(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select capability</option>
                  <option value="capable">Capable</option>
                  <option value="incapable">Incapable</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <button className="bg-[#005CAD] hover:bg-[#004a8f] text-white px-8 py-3.5 rounded-[12px] font-bold shadow-sm transition-colors text-[15px]">
            Generate Recommendation
          </button>
          <button 
            onClick={handleReset}
            className="bg-gradient-to-b from-[#A5C3D6] to-[#C1D6E8] hover:brightness-105 text-white px-10 py-3.5 rounded-[12px] font-bold shadow-sm transition-all text-[15px]"
          >
            Reset
          </button>
        </div>

      </main>
    </div>
  );
}
