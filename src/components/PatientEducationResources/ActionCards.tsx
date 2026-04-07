import React from 'react'
import { Card } from "@/components/ui/card"
import { PhoneCall, Download, Video, ShieldCheck } from 'lucide-react'

const actionCards = [
  {
    title: "24/7 Hospice Nurse Line",
    description: "Call anytime for clinical questions",
    icon: PhoneCall,
    bgColor: "bg-red-50",
    iconColor: "text-red-400"
  },
  {
    title: "Printable Medication Log",
    description: "Track medications at home",
    icon: Download,
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-400"
  },
  {
    title: "Caregiver Training Videos",
    description: "Watch at your own pace",
    icon: Video,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400"
  },
  {
    title: "Medicare Hospice Benefits",
    description: "Understanding your coverage",
    icon: ShieldCheck,
    bgColor: "bg-sky-50",
    iconColor: "text-sky-400"
  }
]

export default function ActionCards() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 -mt-12 relative z-20 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actionCards.map((card, index) => (
          <Card 
            key={index} 
            className="group flex items-center gap-5 p-5 bg-white/90 backdrop-blur-sm border border-white/60 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-5px_rgba(56,182,255,0.08)] rounded-[2rem] transition-all duration-500 hover:-translate-y-1"
          >
            <div className={`flex-shrink-0 w-14 h-14 ${card.bgColor} rounded-2xl flex items-center justify-center ${card.iconColor} transition-transform duration-500 group-hover:scale-110 shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)]`}>
              <card.icon size={26} strokeWidth={2} />
            </div>
            
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[17px] font-bold text-[#013074] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#64748B] text-[14px] font-medium leading-tight line-clamp-1">
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
