import React from 'react'
import { Card } from "@/components/ui/card"
import { Droplets, Clock, ShieldCheck, UserCheck } from 'lucide-react'

const insights = [
  {
    title: "What is the Macy Catheter?",
    description: "A specially designed rectal catheter that allows comfortable, reliable delivery of liquid medications when oral, sublingual, or IV routes are unavailable or impractical.",
    icon: Droplets,
  },
  {
    title: "Rapid Onset",
    description: "Medications administered via the Macy Catheter typically achieve onset within 10-20 minutes, comparable to subcutaneous administration for most hospice medications.",
    icon: Clock,
  },
  {
    title: "Patient Comfort",
    description: "Designed for comfort and dignity. Once placed, the catheter remains in position, eliminating the need for repeated rectal access for each medication dose.",
    icon: ShieldCheck,
  },
  {
    title: "Caregiver Friendly",
    description: "Simple administration technique that trained caregivers can perform confidently at home, reducing the need for nursing visits for breakthrough medication dosing.",
    icon: UserCheck,
  },
]

export default function InsightGrid() {
  return (
    <section className="relative py-20 px-6 -mt-20">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-white/80 backdrop-blur-sm border border-white/40 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-5px_rgba(56,182,255,0.08)] rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center gap-6"
            >
              <div className={`flex-shrink-0 w-16 h-16 bg-[#E3F2FF] rounded-2xl flex items-center justify-center text-[#38B6FF] transition-transform duration-500 group-hover:scale-110 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]`}>
                <insight.icon size={28} strokeWidth={2} />
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-bold text-[#013074] leading-tight transition-colors duration-300 group-hover:text-blue-600">
                  {insight.title}
                </h3>
                <p className="text-[#64748B] text-[15px] font-medium leading-relaxed opacity-90">
                  {insight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
