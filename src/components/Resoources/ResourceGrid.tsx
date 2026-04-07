import React from 'react'
import { Card } from "@/components/ui/card"
import { Book, FileText, Video, Download, Users, Lightbulb } from 'lucide-react'

interface ResourceItem {
  title: string;
  description: string;
  itemsCount: number;
  Icon: React.ElementType;
}

const resources: ResourceItem[] = [
  {
    title: "Patient & Family Guides",
    description: "Comprehensive guides covering what to expect in hospice, medication management, and symptom understanding.",
    itemsCount: 24,
    Icon: Book
  },
  {
    title: "Clinical Guidelines",
    description: "Evidence-based clinical protocols and best practices for hospice symptom management and medication use.",
    itemsCount: 18,
    Icon: FileText
  },
  {
    title: "Training Videos",
    description: "Visual learning resources for healthcare professionals on tool usage and clinical decision-making.",
    itemsCount: 12,
    Icon: Video
  },
  {
    title: "Downloadable Resources",
    description: "Printable quick-reference cards, pocket guides, and assessment forms for bedside use.",
    itemsCount: 30,
    Icon: Download
  },
  {
    title: "Caregiver Support",
    description: "Resources specifically designed for informal caregivers providing day-to-day patient support at home.",
    itemsCount: 15,
    Icon: Users
  },
  {
    title: "Best Practices",
    description: "Curated collection of industry best practices for hospice pharmacy operations and clinical care.",
    itemsCount: 20,
    Icon: Lightbulb
  }
]

export default function ResourceGrid() {
  return (
    <section className="relative py-20 lg:py-28 -mt-8 lg:-mt-16 overflow-hidden">
      {/* Mixed-up background layer connecting to hero blue */}
      <div className="absolute inset-0 bg-[#F5FAFF] -z-20" />
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-white via-[#EBF6FF] to-[#DCEFFF] -z-10 opacity-60" />

      {/* Strategic decorative blur blobs utilizing colors from the hero for "mixing" */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-300/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-sky-400/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group p-8 md:p-10 bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_15px_45px_-15px_rgba(14,165,233,0.1)] hover:shadow-[0_25px_65px_-15px_rgba(14,165,233,0.2)] transition-all duration-500 rounded-[2.5rem] flex flex-col justify-between h-full "
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-[#E0F2FE] rounded-2xl flex items-center justify-center text-[#0EA5E9] shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0EA5E9] group-hover:text-white">
                    <resource.Icon size={28} strokeWidth={2} />
                  </div>
                  <span className="text-[12px] font-extrabold text-[#1D4ED8] bg-[#D1E9FF] px-4 py-1.5 rounded-full shadow-sm tracking-tight">
                    {resource.itemsCount} items
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#013074] group-hover:text-[#0EA5E9] transition-colors duration-300 tracking-tight leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-[#5B7B9E] leading-relaxed text-[17px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
