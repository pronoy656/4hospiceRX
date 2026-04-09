"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Pill, Home, ChevronRight, ChevronDown, Check, AlertCircle } from "lucide-react";

export default function AnticoagulationTool() {
  const [selectedContraindications, setSelectedContraindications] = useState<string[]>([]);
  const [selectedStrokeRisks, setSelectedStrokeRisks] = useState<string[]>([]);
  const [selectedBleedingRisks, setSelectedBleedingRisks] = useState<string[]>([]);
  const [age, setAge] = useState("60");

  const contraindications = [
    "Active or recent major bleeding (within 30 days)",
    "High fall risk or history of recurrent falls (≥2 falls in past 6 months)",
    "Severe thrombocytopenia (platelet count <50,000/µL)",
    "Severe hepatic dysfunction (Child-Pugh Class C) or coagulopathy",
    "Recent intracranial hemorrhage or CNS malignancy",
    "Actively dying or bedbound with minimal responsiveness",
    "Severe dysphagia or inability to safely take oral medication"
  ];

  const strokeRisks = [
    "Congestive Heart Failure / LV Dysfunction (1 point)",
    "Hypertension (1 point)",
    "Diabetes Mellitus (1 point)",
    "Prior Stroke/TIA/Thromboembolism (2 points)",
    "Vascular Disease (MI, PAD, aortic plaque) (1 point)"
  ];

  const bleedingRisks = [
    "Hypertension (uncontrolled, SBP >160 mmHg) (1 point)",
    "Abnormal Renal Function (dialysis, CrCl <30) (1 point)",
    "Abnormal Liver Function (cirrhosis, bilirubin >2x, AST/ALT >3x) (1 point)",
    "Prior Stroke (1 point)",
    "Prior Major Bleeding or Bleeding Predisposition (1 point)",
    "Labile INR (if on warfarin, TTR <60%) (1 point)",
    "Drugs (antiplatelet agents, NSAIDs) (1 point)",
    "Alcohol Use (≥8 drinks/week) (1 point)"
  ];

  const toggleItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const calculateScore = (items: string[]) => {
    return items.reduce((total, item) => total + (item.includes("2 points") ? 2 : 1), 0);
  };

  const strokeScore = calculateScore(selectedStrokeRisks);
  const bleedingScore = calculateScore(selectedBleedingRisks);

  const handleReset = () => {
    setSelectedContraindications([]);
    setSelectedStrokeRisks([]);
    setSelectedBleedingRisks([]);
    setAge("");
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
            <span className="text-white">Anticoagulation Decision Tool</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="w-[72px] h-[72px] shrink-0 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
              <Pill className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Anticoagulation Decision Tool</h1>
              <p className="text-white/90 text-[15px] md:text-[17px] font-medium">Clinical Decision Support for Anticoagulation Management in Hospice Patients</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[840px] mx-auto px-6 pt-10 pb-24 relative z-20 space-y-6">
        
        {/* Patient Demographics */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <h2 className="text-[17px] font-bold text-[#013074]">Patient Demographics</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Patient Age (years)</label>
              <input 
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full h-[52px] px-5 bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Gender</label>
              <div className="relative">
                <select className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Initial Indication for Anticoagulation</label>
              <div className="relative">
                <select className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
                  <option value="">Select an option</option>
                  <option value="afib">Atrial Fibrillation</option>
                  <option value="vte">Venous Thromboembolism (DVT/PE)</option>
                  <option value="valve">Mechanical Heart Valve</option>
                  <option value="stroke">Prior Stroke/TIA</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Current Anticoagulant</label>
              <div className="relative">
                <select className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
                  <option value="">Select</option>
                  <option value="warfarin">Warfarin</option>
                  <option value="apixaban">Apixaban (Eliquis)</option>
                  <option value="rivaroxaban">Rivaroxaban (Xarelto)</option>
                  <option value="dabigatran">Dabigatran (Pradaxa)</option>
                  <option value="edoxaban">Edoxaban (Savaysa)</option>
                  <option value="enoxaparin">Enoxaparin (Lovenox)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Anticipated Life Expectancy</label>
              <div className="relative">
                <select className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
                  <option value="">Select</option>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months (&lt; 6 months)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Contraindications Assessment */}
        <div className="bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-[19px] font-bold text-[#013074]">Contraindications Assessment</h2>
            <p className="text-[14px] font-bold text-[#013074]">Check any that apply:</p>
          </div>
          
          <div className="space-y-3">
            {contraindications.map((item) => {
              const isSelected = selectedContraindications.includes(item);
              return (
                <div 
                  key={item}
                  onClick={() => toggleItem(item, selectedContraindications, setSelectedContraindications)}
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

        {/* Stroke Risk */}
        <div className="bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-[19px] font-extrabold text-[#013074]">Stroke Risk</h2>
            <p className="text-[14px] font-bold text-[#013074]">CHA₂DS₂-VASc Score: {strokeScore}</p>
          </div>
          
          <div className="space-y-3">
            {strokeRisks.map((item) => {
              const isSelected = selectedStrokeRisks.includes(item);
              return (
                <div 
                  key={item}
                  onClick={() => toggleItem(item, selectedStrokeRisks, setSelectedStrokeRisks)}
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

        {/* Bleeding Risk */}
        <div className="bg-white rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-[19px] font-extrabold text-[#013074]">Bleeding Risk</h2>
            <p className="text-[14px] font-bold text-[#013074]">HAS-BLED Score: {bleedingScore}</p>
          </div>
          
          <div className="space-y-3">
            {bleedingRisks.map((item) => {
              const isSelected = selectedBleedingRisks.includes(item);
              return (
                <div 
                  key={item}
                  onClick={() => toggleItem(item, selectedBleedingRisks, setSelectedBleedingRisks)}
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

        {/* Evidence Notes */}
        <div className="bg-[#FFF8ED] border-l-[4px] border-orange-400 rounded-lg p-5 flex gap-4 mt-8">
          <AlertCircle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
          <div className="text-[14.5px] text-[#714d24]">
            <span className="font-bold">Evidence Notes </span> 
            UTIs show 60–92% symptomatic response to antibiotics in hospice populations. Consider non-antibiotic symptom management (e.g., phenazopyridine, fluids if appropriate) when goals are comfort-focused.
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
