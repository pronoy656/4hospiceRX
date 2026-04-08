import React, { useState } from "react";
import { Check } from "lucide-react";
import { ToolSection } from "./ToolSection";

interface AllergySelectorProps {
  options: string[];
}

export const AllergySelector = ({ options }: AllergySelectorProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAllergy = (allergy: string) => {
    setSelected(prev => 
      prev.includes(allergy) ? prev.filter(a => a !== allergy) : [...prev, allergy]
    );
  };

  return (
    <div className="mb-16">
      <ToolSection label="Antibiotic Allergies / Adverse Reactions">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {options.map((allergy) => (
            <label 
              key={allergy} 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => toggleAllergy(allergy)}
            >
              <div 
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected.includes(allergy)
                    ? "bg-[#0f172a] border-[#0f172a]"
                    : "border-[#1e293b] bg-white group-hover:border-[#0f172a]"
                }`}
              >
                {selected.includes(allergy) && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
              </div>
              <span className={`text-[15px] font-bold tracking-tight transition-colors ${
                selected.includes(allergy) ? "text-[#013074]" : "text-[#013074]/70"
              }`}>
                {allergy}
              </span>
            </label>
          ))}
        </div>
      </ToolSection>
    </div>
  );
};
