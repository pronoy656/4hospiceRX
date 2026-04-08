import React from "react";
import { Button } from "@/components/ui/button";

export const ToolActions = () => {
  return (
    <div className="flex flex-wrap gap-6 pt-4">
      <Button className="h-14 px-10 bg-gradient-to-r from-[#003B73] to-[#005CAD] hover:from-[#002B54] hover:to-[#004A8B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/10 border-none transition-all hover:-translate-y-1">
        Generate Recommendation
      </Button>
      <Button className="h-14 px-10 bg-[#94a3b8]/40 hover:bg-[#94a3b8]/60 text-[#475569] font-bold text-lg rounded-2xl transition-all">
        Reset
      </Button>
      <Button className="h-14 px-10 bg-[#94a3b8]/40 hover:bg-[#94a3b8]/60 text-[#475569] font-bold text-lg rounded-2xl transition-all">
        Documentation for EMR
      </Button>
    </div>
  );
};
