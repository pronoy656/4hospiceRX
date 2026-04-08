import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const insuranceData = [
  {
    title: "Medicare Part A (Hospice)",
    description: "All DME related to the terminal diagnosis is covered under the hospice per diem rate. No out-of-pocket cost to the patient.",
    status: "Covered",
    type: "success"
  },
  {
    title: "Medicaid",
    description: "Hospice Medicaid covers DME similarly to Medicare. Coverage varies by state for dual-eligible patients.",
    status: "Covered",
    type: "success"
  },
  {
    title: "Private Insurance",
    description: "Most private insurance hospice benefits include DME coverage. Our team verifies benefits before delivery.",
    status: "Covered",
    type: "success"
  },
  {
    title: "Non-Hospice DME",
    description: "DME unrelated to the hospice diagnosis is covered under regular Medicare Part B or insurance. Separate authorization required.",
    status: "Separate Auth",
    type: "warning"
  }
];

export default function InsuranceCoverage() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#013074] mb-6 tracking-tight">
            Insurance Coverage
          </h2>
          <p className="text-lg md:text-xl text-[#5B7B9E] max-w-2xl mx-auto font-semibold">
            Most hospice DME is fully covered with no out-of-pocket cost
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {insuranceData.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-[0_10px_45px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-2"
            >
              <div className="mb-8">
                {item.type === 'success' ? (
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[12px] font-bold uppercase tracking-wider border border-emerald-100/50">
                     <CheckCircle2 className="w-4 h-4" />
                     {item.status}
                   </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-[12px] font-bold uppercase tracking-wider border border-rose-100/50">
                    <AlertCircle className="w-4 h-4" />
                    {item.status}
                  </div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#013074] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-[#64748B] text-sm md:text-[15px] leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
