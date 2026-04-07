import React from 'react'
import { Card } from "@/components/ui/card"
import { Heart } from 'lucide-react'

interface FeaturedItem {
  title: string;
  category: string;
  readTime: string;
}

const featuredResources: FeaturedItem[] = [
  {
    title: "Understanding Hospice Medications",
    category: "Guide",
    readTime: "8 min read"
  },
  {
    title: "Managing Pain at End of Life",
    category: "Clinical Protocol",
    readTime: "12 min read"
  },
  {
    title: "Caregiver's Guide to Symptom Management",
    category: "Family Resource",
    readTime: "6 min read"
  }
]

export default function FeaturedResources() {
  return (
    <section className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[2.5rem] font-extrabold text-[#013074] text-center mb-16 tracking-tight">
          Featured Resources
        </h2>

        <div className="flex flex-col gap-6">
          {featuredResources.map((item, index) => (
            <Card
              key={index}
              className="group p-8 md:p-10 bg-white border-0 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-5px_rgba(56,182,255,0.12)] transition-all duration-500 rounded-[35px] flex items-start gap-8"
            >
              <div className="flex items-start justify-start gap-6">
                {/* Refined Heart Icon Container - Soft Curved Rectangle */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#E3F2FF] rounded-[22px] flex items-center justify-center text-[#38B6FF] transition-all duration-300 group-hover:scale-105">
                  <Heart size={28} strokeWidth={2.2} />
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-[1.5rem] font-bold text-[#013074] leading-tight mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[15px] font-bold text-[#38B6FF]">
                      {item.category}
                    </span>
                    <span className="text-[15px] font-medium text-[#94A3B8]">
                      {item.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
