import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ToolCardProps {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export const ToolCard: React.FC<ToolCardProps> = ({ title, desc, icon }) => {
    return (
        <Card className="border border-[#E2E8F0] rounded-[24px] shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between h-full">
            <div className="p-7 flex flex-col gap-4 flex-1">
                <div className="w-12 h-12 bg-[#E3F2FF] rounded-[14px] flex items-center justify-center text-[#38B6FF]">
                    {icon}
                </div>

                <div className="space-y-3">
                    <h3 className="text-[1.15rem] font-bold text-[#003B73] leading-[1.3] line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-[0.88rem] text-[#64748B] leading-relaxed line-clamp-2">
                        {desc}
                    </p>
                </div>
            </div>

            <div className="px-7 pb-7 pt-0">
                <Button className="w-full h-11 bg-[#38B6FF] hover:!bg-[#2e93ff] text-white font-bold rounded-xl transition-all shadow-sm border-none cursor-pointer">
                    Launch Tool
                </Button>
            </div>
        </Card>
    );
};
