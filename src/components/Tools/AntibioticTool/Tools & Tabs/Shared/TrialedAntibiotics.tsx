import React from "react";
import { Card } from "@/components/ui/card";
import { Check, CircleAlert } from "lucide-react";

interface TrialedAntibioticsProps {
  antibiotics: { id: string; name: string }[];
  trialedAntibiotics: string[];
  toggleAntibiotic: (id: string) => void;
  evidenceNote: string;
}

export const TrialedAntibiotics = ({ 
  antibiotics, 
  trialedAntibiotics, 
  toggleAntibiotic,
  evidenceNote 
}: TrialedAntibioticsProps) => {
  return (
    <Card className="border border-slate-200 shadow-sm p-8 rounded-[28px] overflow-hidden mb-10">
      <h3 className="text-xl font-bold text-[#013074] mb-3">Recently Trialed Antibiotics</h3>
      <p className="text-[14px] text-slate-500 font-medium mb-8 leading-relaxed max-w-3xl">
        Select any antibiotic the patient has been unsuccessfully trialed on for this infection. The tool will avoid recommending these agents.
      </p>

      <div className="space-y-3">
        {antibiotics.map((abx) => (
          <div 
            key={abx.id}
            onClick={() => toggleAntibiotic(abx.id)}
            className={`flex items-center gap-4 p-3.5 px-6 rounded-2xl cursor-pointer transition-all ${
              trialedAntibiotics.includes(abx.id) 
                ? "bg-[#F1F5F9]" 
                : "bg-[#F8FAFC] hover:bg-[#F1F5F9]"
            }`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              trialedAntibiotics.includes(abx.id)
                ? "bg-[#0f172a] border-[#0f172a]"
                : "border-[#1e293b] bg-white"
            }`}>
              {trialedAntibiotics.includes(abx.id) && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
            </div>
            <span className={`text-[15px] font-bold ${trialedAntibiotics.includes(abx.id) ? "text-[#013074]" : "text-[#013074]/70"}`}>
              {abx.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-2xl bg-[#FFF7ED] border border-orange-100 flex gap-4">
        <div className="flex-shrink-0 mt-0.5">
          <CircleAlert className="w-5 h-5 text-orange-400" />
        </div>
        <p className="text-[14px] leading-relaxed text-[#92400E] font-semibold">
          Evidence Notes <span className="font-medium text-[#013074]">{evidenceNote}</span>
        </p>
      </div>
    </Card>
  );
};
