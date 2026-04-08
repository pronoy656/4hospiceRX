"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What DME is covered under the hospice benefit?",
    answer: "Most Durable Medical Equipment (DME) related to the terminal illness and for the comfort of the hospice patient is covered. This includes items such as hospital beds, wheelchairs, oxygen equipment, walkers, and specialized comfort equipment. Our clinical team works with you to determine the best equipment for the patient's specific needs."
  },
  {
    question: "How quickly can DME be delivered?",
    answer: "We provide 24-hour standard delivery for all equipment orders. In urgent situations, our team works to deliver essential equipment as quickly as possible to ensure patient comfort is maintained without delay."
  },
  {
    question: "Who sets up the equipment?",
    answer: "Our professional technicians handle all equipment setup and installation. They ensure everything is functioning correctly and provide thorough training to family members and caregivers on how to safely use and manage the equipment."
  },
  {
    question: "What happens when equipment needs repair?",
    answer: "We provide 24/7 technical support for all provided equipment. If an item malfunctions or needs repair, our team will either fix it on-site or provide a replacement immediately to avoid any disruption in care."
  },
  {
    question: "What about equipment pickup after discharge?",
    answer: "When equipment is no longer needed, simply notify us, and we will arrange for a prompt pickup. We handle all logistics, cleaning, and maintenance procedures once the equipment is returned."
  }
];

export default function DMEFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent border-t border-slate-100/50">
      <div className="container-custom">
        <div className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#013074] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 px-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.1)]"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0EA5E9] font-black text-sm">
                    Q
                  </div>
                  <span className={`text-[17px] md:text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-[#013074]'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="p-8 pt-0 pl-[calc(24px+40px+24px)] md:pl-[calc(32px+40px+24px)] text-[#64748B] text-lg font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
