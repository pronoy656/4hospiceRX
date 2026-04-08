import React from "react";

interface ToolSectionProps {
  label: string;
  children: React.ReactNode;
}

export const ToolSection = ({ label, children }: ToolSectionProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-[16px] font-extrabold text-[#013074] ml-1">{label}</h2>
      {children}
    </div>
  );
};
