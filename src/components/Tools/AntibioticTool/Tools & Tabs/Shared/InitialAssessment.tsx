import React from "react";
import { ChevronDown, Check } from "lucide-react";
import { ToolSection } from "./ToolSection";

interface InitialAssessmentProps {
  symptoms: string[];
  selectedSymptoms: string[];
  toggleSymptom: (symptom: string) => void;
  showInfectionType?: boolean;
  showSuspectedSource?: boolean;
}

export const InitialAssessment = ({ 
  symptoms, 
  selectedSymptoms, 
  toggleSymptom,
  showInfectionType = false,
  showSuspectedSource = false
}: InitialAssessmentProps) => {
  return (
    <div className="space-y-10">
      <ToolSection label="Patient Prognosis">
        <div className="relative">
          <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
            <option value="">Select prognosis</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        </div>
        <p className="text-[13px] text-rose-400/80 font-medium ml-1 mt-2">
          Consider estimated life expectancy vs treatment duration.
        </p>
      </ToolSection>

      {showInfectionType && (
        <ToolSection label="Infection Type">
          <div className="relative">
            <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
              <option value="">Select infection type</option>
              <option value="cellulitis">Cellulitis</option>
              <option value="abscess">Abscess</option>
              <option value="wound">Infected Wound / Pressure Injury</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </ToolSection>
      )}

      {showSuspectedSource && (
        <ToolSection label="Suspected Source">
          <div className="relative">
            <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
              <option value="">Select source if known</option>
              <option value="urinary">Urinary</option>
              <option value="respiratory">Respiratory</option>
              <option value="skin">Skin / Soft Tissue</option>
              <option value="gi">GI / Biliary</option>
              <option value="other">Other / Unknown</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </ToolSection>
      )}

      <ToolSection label="Presenting Symptoms">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
          {symptoms.map((symptom) => (
            <label key={symptom} className="flex items-center gap-3 cursor-pointer group w-fit">
              <div 
                onClick={() => toggleSymptom(symptom)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedSymptoms.includes(symptom)
                    ? "bg-[#0f172a] border-[#0f172a]"
                    : "border-[#1e293b] bg-white group-hover:border-[#0f172a]"
                }`}
              >
                {selectedSymptoms.includes(symptom) && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
              </div>
              <span className="text-[15px] font-bold text-[#013074] tracking-tight">{symptom}</span>
            </label>
          ))}
        </div>
      </ToolSection>

      <ToolSection label="Goals of Care">
        <div className="relative">
          <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
            <option value="">Select goals of care</option>
            <option value="comfort">Comfort Focused</option>
            <option value="aggressive">Aggressive Management</option>
            <option value="shared">Shared Decision Making</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        </div>
      </ToolSection>
    </div>
  );
};
