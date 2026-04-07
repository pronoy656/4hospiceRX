"use client";

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import {
  Link2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

interface Medication {
  name: string;
  dosage: string;
  absorption: string;
  note: string;
}

interface Category {
  id: string;
  title: string;
  medicationCount: number;
  medications: Medication[];
}

const categories: Category[] = [
  {
    id: "pain-management",
    title: "Pain Management",
    medicationCount: 3,
    medications: [
      {
        name: "Morphine Sulfate (liquid)",
        dosage: "5-20 mg q2–4h PRN",
        absorption: "~80% of oral dose",
        note: "Most commonly used. Well-absorbed rectally."
      },
      {
        name: "Hydromorphone (liquid)",
        dosage: "0.5–4 mg q3–4h PRN",
        absorption: "~78% of oral dose",
        note: "Most commonly used. Well-absorbed rectally."
      },
      {
        name: "Methadone (liquid)",
        dosage: "2.5–10 mg q8–12h",
        absorption: "~90% of oral dose",
        note: "Most commonly used. Well-absorbed rectally."
      }
    ]
  },
  {
    id: "anxiety-agitation",
    title: "Anxiety & Agitation",
    medicationCount: 3,
    medications: [
      {
        name: "Lorazepam (liquid)",
        dosage: "0.5–2 mg q4–6h PRN",
        absorption: "~95% of oral dose",
        note: "Highly effective for acute agitation and anxiety episodes."
      },
      {
        name: "Midazolam (liquid)",
        dosage: "1–5 mg q2–4h PRN",
        absorption: "~50-60% of oral dose",
        note: "Rapid onset for procedural distress or terminal agitation."
      },
      {
        name: "Haloperidol (liquid)",
        dosage: "0.5–2 mg q4–8h PRN",
        absorption: "~90% of oral dose",
        note: "Primary antipsychotic for terminal delirium management."
      }
    ]
  },
  {
    id: "nausea-secretions",
    title: "Nausea & Secretions",
    medicationCount: 3,
    medications: [
      {
        name: "Haloperidol (liquid)",
        dosage: "0.5–1.5 mg q6-8h PRN",
        absorption: "~90% of oral dose",
        note: "Effective for medication-induced and metabolic nausea."
      },
      {
        name: "Metoclopramide (liquid)",
        dosage: "10 mg q6h PRN",
        absorption: "~80% of oral dose",
        note: "Prokinetic agent for nausea related to stasis."
      },
      {
        name: "Atropine 1% (Ophthalmic sol.)",
        dosage: "1-2 drops q4h PRN",
        absorption: "Well-absorbed",
        note: "Used for management of terminal respiratory secretions."
      }
    ]
  },
  {
    id: "seizure-management",
    title: "Seizure Management",
    medicationCount: 3,
    medications: [
      {
        name: "Levetiracetam (liquid)",
        dosage: "500-1500 mg BID",
        absorption: "~100% of oral dose",
        note: "Excellent bioavailability via rectal route."
      },
      {
        name: "Phenobarbital (liquid)",
        dosage: "30-120 mg daily",
        absorption: "~90% of oral dose",
        note: "Reliable maintenance for established seizure disorders."
      },
      {
        name: "Diazepam (liquid/gel)",
        dosage: "5-10 mg q4h PRN",
        absorption: "Rapid absorption",
        note: "Agent of choice for acute/breakthrough status epilepticus."
      }
    ]
  }
]

export default function MedicationAccordion() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["pain-management"]);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-[1000px] mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#013074] text-center mb-16 tracking-tight">
          Medication Compatibility & Dosing
        </h2>

        <div className="flex flex-col gap-6">
          {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);

            return (
              <div key={category.id} className="flex flex-col gap-4">
                <Card 
                  className={`py-4 px-6 md:py-4 md:px-8 bg-white/90 backdrop-blur-sm border-0 shadow-[0_4px_25px_-5px_rgba(51,144,255,0.06)] rounded-[2rem] flex flex-row items-start justify-between cursor-pointer transition-all duration-300 ${isExpanded ? 'shadow-[0_10px_35px_-5px_rgba(51,144,255,0.12)]' : ''}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-start gap-6 pt-1">
                    <div className="w-14 h-14 bg-[#E3F2FF] rounded-[18px] flex items-center justify-center text-[#38B6FF] shadow-inner">
                      <Link2 size={26} strokeWidth={2} className="rotate-45" />
                    </div>
                    <div className="flex flex-col pt-1.5">
                      <h3 className="text-[1.35rem] font-bold text-[#003B73] tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[#94A3B8] text-[14px] font-medium tracking-tight">
                        {category.medicationCount} medications
                      </p>
                    </div>
                  </div>
                  <div className="text-[#94A3B8] pt-4">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </Card>

                {/* Smooth Animation Wrapper */}
                <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0 flex flex-col gap-3 px-2 md:px-4 pb-2">
                    {category.medications.map((med, index) => (
                      <Card key={index} className="p-5 md:p-7 bg-white/60 backdrop-blur-md border border-[#E3F2FF] shadow-sm rounded-[1.8rem] flex flex-col gap-3 hover:bg-white/80 transition-colors duration-300">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-[1.125rem] font-bold text-[#003B73]">
                            {med.name}
                          </h4>
                          <span className="flex-shrink-0 text-[12px] font-bold text-[#38B6FF] bg-[#E3F2FF] px-3 py-1 rounded-full uppercase tracking-tight">
                            {med.absorption}
                          </span>
                        </div>
                        
                        <div className="inline-flex">
                          <span className="text-[13px] font-bold text-[#38B6FF] bg-[#F1F9FF] border border-[#E3F2FF] px-4 py-1.5 rounded-full">
                            {med.dosage}
                          </span>
                        </div>
                        
                        <p className="text-[#64748B] text-[14px] font-medium opacity-90 pt-1">
                          {med.note}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
