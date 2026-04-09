"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Pill, Home, ChevronRight, Check, AlertCircle, ChevronDown } from "lucide-react";

export default function NauseaManagementTool() {
  const [activeTab, setActiveTab] = useState("Unknown/Assessment");
  const [selectedContraindications, setSelectedContraindications] = useState<string[]>([]);
  const [metabolic, setMetabolic] = useState("");
  const [satiety, setSatiety] = useState("");
  const [obstruction, setObstruction] = useState("");
  const [dizziness, setDizziness] = useState("");
  const [cns, setCns] = useState("");
  const [opioid, setOpioid] = useState("");
  const [anxiety, setAnxiety] = useState("");
  const [tolerateOral, setTolerateOral] = useState("");

  const handleReset = () => {
    setSelectedContraindications([]);
    setMetabolic("");
    setSatiety("");
    setObstruction("");
    setDizziness("");
    setCns("");
    setOpioid("");
    setAnxiety("");
    setTolerateOral("");
  };

  const tabs = [
    "Unknown/Assessment",
    "Chemical / Metabolic",
    "Gastric stasis",
    "Bowel obstruction",
    "Vestibular/Motion",
    "Increased ICP",
    "Opioid-Induced",
    "Anxiety-related"
  ];

  const contraindicationsList = [
    "Phenothiazines (prochlorperazine)",
    "Butyrophenones (haloperidol)",
    "5-HT3 antagonists (ondansetron)",
    "Prokinetics (metoclopramide)",
    "Antihistamines (meclizine)",
    "Anticholinergics (scopolamine)",
    "Corticosteroids (dexamethasone)",
    "Atypical antipsychotics (olanzapine)",
    "Piperacillin–tazobactam",
    "Cefepime"
  ];

  const toggleContraindication = (item: string) => {
    setSelectedContraindications(prev => 
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
            <span className="text-white">Nausea Management Tool</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="w-[72px] h-[72px] shrink-0 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
              <Pill className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Nausea Management Tool</h1>
              <p className="text-white/90 text-[15px] md:text-[17px] font-medium">Evidence-based approach to nausea and vomiting management</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[840px] mx-auto px-6 pt-10 pb-24 relative z-20 space-y-8">
        
        {/* Category Pills / Tabs */}
        <div className="flex flex-wrap gap-3 justify-center max-w-[700px] mx-auto mb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-sm ${
                  isActive 
                    ? "bg-[#3db0ff] text-white" 
                    : "bg-[#A7B6CB] text-white hover:bg-[#8da3be]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Medication History & Contraindications */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-[19px] font-extrabold text-[#013074]">Medication History & Contraindications</h2>
            <p className="text-[13px] font-bold text-[#013074]">Select any antiemetic classes the patient has had allergic reactions to, adverse responses, or failed trials:</p>
          </div>
          
          <div className="space-y-3">
            {contraindicationsList.map((item) => {
              const isSelected = selectedContraindications.includes(item);
              return (
                <div 
                  key={item}
                  onClick={() => toggleContraindication(item)}
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

          <div className="bg-[#FFF8ED] border-l-[4px] border-orange-400 rounded-lg p-5 flex gap-4 mt-8">
            <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <div className="text-[14px] text-[#714d24] font-bold leading-relaxed">
              Special Populations: Recommendations will be automatically adjusted for elderly patients (&gt;65 years), renal impairment, and other risk factors based on your selections above.
            </div>
          </div>
        </div>

        {/* Nausea Type Assessment */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 p-8 space-y-6">
          <h2 className="text-[17px] font-extrabold text-[#013074]">Nausea Type Assessment</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient have recent labs showing metabolic abnormalities (elevated BUN/Cr, hypercalcemia, electrolyte imbalances)?</label>
              <div className="relative">
                <select 
                  value={metabolic}
                  onChange={(e) => setMetabolic(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient report early satiety, bloating, or feeling full after small meals?</label>
              <div className="relative">
                <select 
                  value={satiety}
                  onChange={(e) => setSatiety(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient have signs/symptoms of bowel obstruction (abdominal distension, absent bowel sounds, no bowel movements)?</label>
              <div className="relative">
                <select 
                  value={obstruction}
                  onChange={(e) => setObstruction(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient report dizziness, vertigo, or is nausea worse with position changes or movement?</label>
              <div className="relative">
                <select 
                  value={dizziness}
                  onChange={(e) => setDizziness(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient have brain metastases, cerebral edema, or headaches worse in the morning?</label>
              <div className="relative">
                <select 
                  value={cns}
                  onChange={(e) => setCns(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Did nausea start within 7 days of starting or increasing opioid medication?</label>
              <div className="relative">
                <select 
                  value={opioid}
                  onChange={(e) => setOpioid(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">Does the patient have significant anxiety or is nausea associated with specific anxiety-provoking situations?</label>
              <div className="relative">
                <select 
                  value={anxiety}
                  onChange={(e) => setAnxiety(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-[#013074] ml-1">When nauseated or vomiting, can the patient tolerate oral medications?</label>
              <div className="relative">
                <select 
                  value={tolerateOral}
                  onChange={(e) => setTolerateOral(e.target.value)}
                  className="w-full h-[52px] px-5 appearance-none bg-white border border-[#013074]/80 rounded-[12px] text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#013074] pointer-events-none" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <button className="bg-[#005CAD] hover:bg-[#004a8f] text-white px-8 py-3.5 rounded-[12px] font-bold shadow-sm transition-colors text-[15px]">
            Analyze Assessment
          </button>
          <button 
            onClick={handleReset}
            className="bg-gradient-to-b from-[#A5C3D6] to-[#C1D6E8] hover:brightness-105 text-white px-10 py-3.5 rounded-[12px] font-bold shadow-sm transition-all text-[15px]"
          >
            Reset Assessment
          </button>
        </div>

      </main>
    </div>
  );
}
