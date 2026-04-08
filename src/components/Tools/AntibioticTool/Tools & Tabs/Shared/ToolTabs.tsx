import React from "react";

interface ToolTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "UTI", label: "Urinary Tract Infection" },
  { id: "Pneumonia", label: "Pneumonia / Respiratory" },
  { id: "Skin", label: "Skin & Soft Tissue" },
  { id: "Sepsis", label: "Sepsis / Bacteremia" }
];

export const ToolTabs = ({ activeTab, setActiveTab }: ToolTabsProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all ${
            activeTab === tab.id 
              ? "bg-[#38B6FF] text-white shadow-lg shadow-blue-500/20" 
              : "bg-[#94a3b8]/40 text-[#475569] hover:bg-[#94a3b8]/60"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
