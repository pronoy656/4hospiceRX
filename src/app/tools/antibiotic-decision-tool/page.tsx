"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolHero } from "@/components/Tools/AntibioticTool/Tools & Tabs/Shared/ToolHero";
import { ToolTabs } from "@/components/Tools/AntibioticTool/Tools & Tabs/Shared/ToolTabs";
import { UTITab } from "@/components/Tools/AntibioticTool/Tools & Tabs/UTI/UTITab";
import { PneumoniaTab } from "@/components/Tools/AntibioticTool/Tools & Tabs/Pneumonia/PneumoniaTab";
import { SkinTab } from "@/components/Tools/AntibioticTool/Tools & Tabs/SkinSoftTissue/SkinTab";
import { SepsisTab } from "@/components/Tools/AntibioticTool/Tools & Tabs/SepsisBacteremia/SepsisTab";
import { ToolActions } from "@/components/Tools/AntibioticTool/Tools & Tabs/Shared/ToolActions";

const toolData: Record<string, any> = {
  UTI: {
    title: "Urinary Tract Infection Assessment",
    treatmentLabel: "If Proceeding with Treatment",
    symptoms: ["Dysuria", "Frequency / Urgency", "Hematuria", "Suprapubic pain", "Fever >100.4°F", "Altered mental status"],
    antibiotics: [
      { id: "none", name: "NONE" },
      { id: "bactrim", name: "Trimethoprim–sulfamethoxazole (Bactrim)" },
      { id: "macrobid", name: "Nitrofurantoin (Macrobid)" },
      { id: "cipro", name: "Ciprofloxacin" },
      { id: "levaquin", name: "Levofloxacin" },
      { id: "keflex", name: "Cephalexin (Keflex)" },
      { id: "augmentin", name: "Amoxicillin–clavulanate (Augmentin)" },
      { id: "ceftriaxone", name: "Ceftriaxone" },
      { id: "zosyn", name: "Piperacillin–tazobactam" },
      { id: "cefepime", name: "Cefepime" }
    ],
    trialed: ["augmentin", "ceftriaxone", "zosyn", "cefepime"],
    evidence: "UTIs show 60–92% symptomatic response to antibiotics in hospice populations. Consider non-antibiotic symptom management (e.g., phenazopyridine, fluids if appropriate) when goals are comfort-focused.",
    allergies: ["Penicillins", "Cephalosporins", "Fluoroquinolones", "Sulfonamides (Bactrim)", "Nitrofurantoin"]
  },
  Pneumonia: {
    title: "Pneumonia / Respiratory Infection Assessment",
    treatmentLabel: "If Proceeding with Treatment",
    symptoms: ["Cough", "Productive sputum", "Dyspnea / SOB", "Fever >100.4°F", "Rales / crackles", "Hypoxia (O₂ sat <90%)"],
    antibiotics: [
      { id: "none", name: "NONE" },
      { id: "azithromycin", name: "Azithromycin" },
      { id: "doxycycline", name: "Doxycycline" },
      { id: "amoxicillin", name: "Amoxicillin" },
      { id: "augmentin", name: "Amoxicillin–clavulanate (Augmentin)" },
      { id: "levofloxacin", name: "Levofloxacin" },
      { id: "ceftriaxone", name: "Ceftriaxone" },
      { id: "unasyn", name: "Ampicillin–sulbactam" }
    ],
    trialed: ["ceftriaxone", "unasyn"],
    evidence: "Pneumonia shows limited symptomatic response (0–53%) to antibiotics when prognosis is days to short weeks. Consider non-antibiotic symptom management (opioids for dyspnea, antipyretics, oxygen, anticholinergics for secretions).",
    allergies: ["Penicillins", "Cephalosporins", "Fluoroquinolones", "Macrolides (Azithromycin)", "Tetracyclines"]
  },
  Skin: {
    title: "Skin & Soft Tissue Infection Assessment",
    treatmentLabel: "If Proceeding with Treatment",
    symptoms: ["Erythema", "Warmth", "Swelling", "Purulent drainage", "Pain at site", "Fever"],
    antibiotics: [
      { id: "none", name: "NONE" },
      { id: "keflex", name: "Cephalexin (Keflex)" },
      { id: "augmentin", name: "Amoxicillin–clavulanate (Augmentin)" },
      { id: "doxy", name: "Doxycycline" },
      { id: "clindamycin", name: "Clindamycin" },
      { id: "bactrim", name: "Trimethoprim–sulfamethoxazole (Bactrim)" },
      { id: "vanco", name: "Vancomycin" },
      { id: "cefazolin", name: "Cefazolin" },
      { id: "unasyn", name: "Ampicillin–sulbactam" }
    ],
    trialed: ["keflex", "vanco"],
    evidence: "Consider topical antimicrobials (e.g., metronidazole gel) for odor control in non-healing wounds. Systemic antibiotics may not significantly alter trajectory when prognosis is days to weeks.",
    allergies: ["Penicillins", "Cephalosporins", "Fluoroquinolones", "Clindamycin", "Sulfonamides (Bactrim)"]
  },
  Sepsis: {
    title: "Sepsis / Bacteremia Assessment",
    treatmentLabel: "If Proceeding with Treatment",
    symptoms: ["Fever or hypothermia", "Tachycardia", "Hypotension", "Altered mental status", "Rigors / chills", "Identified infection source"],
    antibiotics: [
      { id: "none", name: "NONE" },
      { id: "cefepime", name: "Cefepime" },
      { id: "zosyn", name: "Piperacillin–tazobactam" },
      { id: "meropenem", name: "Meropenem" },
      { id: "vanco", name: "Vancomycin" },
      { id: "levofloxacin", name: "Levofloxacin" },
      { id: "ceftriaxone", name: "Ceftriaxone" }
    ],
    trialed: ["zosyn", "meropenem"],
    evidence: "Bacteremia often shows no observed symptom improvement with antibiotics in hospice patients with short prognosis. For days–weeks prognosis, discuss goals of care and consider comfort measures rather than aggressive treatment.",
    allergies: ["Penicillins", "Cephalosporins", "Fluoroquinolones", "Macrolides (Azithromycin)", "Tetracyclines"]
  }
};

export default function AntibioticDecisionTool() {
  const [activeTab, setActiveTab] = useState("UTI");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [trialedAntibiotics, setTrialedAntibiotics] = useState<string[]>(toolData[activeTab].trialed || []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setTrialedAntibiotics(toolData[tabId]?.trialed || []);
    setSelectedSymptoms([]);
  };

  const currentData = toolData[activeTab] || toolData.UTI;

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const toggleAntibiotic = (id: string) => {
    setTrialedAntibiotics(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <ToolHero />

      <main className="max-w-[1200px] mx-auto px-6 pt-12 pb-20 relative z-20">
        <ToolTabs activeTab={activeTab} setActiveTab={handleTabChange} />

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="space-y-12"
            >
              {activeTab === "UTI" && (
                <UTITab 
                  data={currentData}
                  selectedSymptoms={selectedSymptoms}
                  toggleSymptom={toggleSymptom}
                  trialedAntibiotics={trialedAntibiotics}
                  toggleAntibiotic={toggleAntibiotic}
                />
              )}

              {activeTab === "Pneumonia" && (
                <PneumoniaTab 
                  data={currentData}
                  selectedSymptoms={selectedSymptoms}
                  toggleSymptom={toggleSymptom}
                  trialedAntibiotics={trialedAntibiotics}
                  toggleAntibiotic={toggleAntibiotic}
                />
              )}

              {activeTab === "Skin" && (
                <SkinTab 
                  data={currentData}
                  selectedSymptoms={selectedSymptoms}
                  toggleSymptom={toggleSymptom}
                  trialedAntibiotics={trialedAntibiotics}
                  toggleAntibiotic={toggleAntibiotic}
                />
              )}

              {activeTab === "Sepsis" && (
                <SepsisTab 
                  data={currentData}
                  selectedSymptoms={selectedSymptoms}
                  toggleSymptom={toggleSymptom}
                  trialedAntibiotics={trialedAntibiotics}
                  toggleAntibiotic={toggleAntibiotic}
                />
              )}

              {!["UTI", "Pneumonia", "Skin", "Sepsis"].includes(activeTab) && (
                <div className="py-24 text-center bg-white rounded-[32px] border border-dashed border-slate-200 shadow-sm">
                   <h3 className="text-xl font-bold text-[#003B73] mb-2">{currentData.title}</h3>
                   <p className="text-slate-400 font-medium">This assessment module is currently under development.</p>
                </div>
              )}

              <ToolActions />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
