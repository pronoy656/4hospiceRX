import React from "react";
import { ChevronDown } from "lucide-react";
import { ToolSection } from "./ToolSection";

interface TreatmentParametersProps {
  label: string;
  routeLabel?: string;
  showCatheter?: boolean;
}

export const TreatmentParameters = ({ 
  label, 
  routeLabel = "Route Preference", 
  showCatheter = true 
}: TreatmentParametersProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-[18px] font-bold text-[#013074]">{label}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <ToolSection label="Patient Age">
          <input 
            type="text" 
            placeholder="years" 
            className="w-full h-12 px-5 bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
          />
        </ToolSection>

        <ToolSection label="Patient Weight">
          <input 
            type="text" 
            placeholder="kg" 
            className="w-full h-12 px-5 bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
          />
        </ToolSection>

        <ToolSection label="Creatinine Clearance (CrCl)">
          <div className="relative">
            <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
              <option value="">Select CrCl range</option>
              <option value="60">&gt; 60 mL/min</option>
              <option value="30-60">30-60 mL/min</option>
              <option value="15-30">15-30 mL/min</option>
              <option value="<15">&lt; 15 mL/min</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </ToolSection>

        <ToolSection label="Sex">
          <div className="relative">
            <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </ToolSection>

        <ToolSection label={routeLabel}>
          <div className="relative">
            <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
              <option value="oral">Oral PO</option>
              <option value="iv">IV / Injectable</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </ToolSection>

        {showCatheter && (
          <ToolSection label="Catheter Present">
            <div className="relative">
              <select className="w-full h-12 px-5 appearance-none bg-white border border-[#CBD5E1] rounded-xl text-[#013074] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm pr-12">
                <option value="none">No catheter</option>
                <option value="foley">Foley Catheter</option>
                <option value="suprapubic">Suprapubic Catheter</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </ToolSection>
        )}
      </div>
    </div>
  );
};
