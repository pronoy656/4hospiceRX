"use client";

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { 
  Link2, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react'

const faqs = [
  {
    id: "stay-duration",
    question: "How long can the Macy Catheter remain in place?",
    answer: "The Macy Catheter is designed for temporary use and can remain in place for up to 28 days as specified in the clinical guidelines. Correct placement and routine maintenance are essential for long-term comfort.",
    category: "Duration & Usage"
  },
  {
    id: "clinical-indications",
    question: "When should the Macy Catheter be used?",
    answer: "It should be used when oral, sublingual, or IV administration is unavailable or impractical. Use is particularly indicated for patients with dysphagia, nausea, or active terminal agitation where rapid medication onset is critical.",
    category: "Clinical Protocol"
  },
  {
    id: "med-compatibility",
    question: "Which medications are compatible?",
    answer: "Most liquid medications typically administered orally or sublingually can be given via the Macy Catheter. This includes morphine sulfate, hydromorphone, methadone, lorazepam, and haloperidol.",
    category: "Pharmacology"
  },
  {
    id: "contraindications",
    question: "What are the primary contraindications?",
    answer: "Contraindications include severe rectal trauma, active rectal bleeding, or surgery in the rectal area within the last 30 days. Always consult the full clinical protocol before initiation.",
    category: "Patient Safety"
  }
]

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-[#D1E9FF] text-[#1E40AF] text-[11px] font-extrabold tracking-[0.25em] rounded-full mb-6 uppercase shadow-sm">
            Common Inquiries
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#013074] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="flex flex-col gap-4">
                <Card 
                  className={`py-4 px-6 md:py-4 md:px-8 bg-white border-0 shadow-[0_4px_25px_-5px_rgba(51,144,255,0.06)] rounded-[2rem] flex flex-row items-start justify-between cursor-pointer transition-all duration-300 ${isExpanded ? 'shadow-[0_10px_35px_-5px_rgba(51,144,255,0.12)]' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-6 pt-1">
                    <div className="w-14 h-14 bg-[#E3F2FF] rounded-[18px] flex items-center justify-center text-[#38B6FF] shadow-inner">
                      <Link2 size={26} strokeWidth={2} className="rotate-45" />
                    </div>
                    <div className="flex flex-col pt-1.5">
                      <h3 className="text-[1.3rem] font-bold text-[#003B73] tracking-tight">
                        {faq.question}
                      </h3>
                      <p className="text-[#94A3B8] text-[14px] font-medium tracking-tight">
                        {faq.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#94A3B8] pt-4">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </Card>

                {/* Animated Answer Wrapper - Matching Medication Card Style */}
                <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0 flex flex-col gap-3 px-2 md:px-4 pb-2">
                    <Card className="p-6 md:p-8 bg-white/70 backdrop-blur-md border border-[#E3F2FF] shadow-sm rounded-[1.8rem] flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-bold text-[#38B6FF] bg-[#E3F2FF] px-3 py-1 rounded-full uppercase tracking-tight">
                          Clinical Guidance
                        </span>
                      </div>
                      <p className="text-[#64748B] text-[1.05rem] font-medium leading-[1.7] opacity-90">
                        {faq.answer}
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
