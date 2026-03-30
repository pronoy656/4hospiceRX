import React from 'react'
import { Shield, Clock, FileText, CheckCircle2, ClipboardList } from 'lucide-react'

const features = [
    {
        title: "Formulary Management",
        desc: "Curated hospice-specific formulary with real-time eligibility and coverage verification across all payers.",
        icon: <Shield className="w-6 h-6 text-[#38B6FF]" />
    },
    {
        title: "Real-Time Analytics",
        desc: "Live dashboards tracking medication spend, utilization patterns, and formulary compliance across your agency.",
        icon: <Clock className="w-6 h-6 text-[#38B6FF]" />
    },
    {
        title: "Prior Authorization",
        desc: "Streamlined PA workflows with dedicated team reducing turnaround to under 24 hours for urgent needs.",
        icon: <FileText className="w-6 h-6 text-[#38B6FF]" />
    },
    {
        title: "Regulatory Compliance",
        desc: "Built-in HIPAA, DEA, and state-specific regulatory compliance monitoring and automated reporting.",
        icon: <CheckCircle2 className="w-6 h-6 text-[#38B6FF]" />
    }
]

export default function PbmOverview() {
    return (
        <section className="py-24 px-6 relative bg-gradient-to-b from-white via-[#F0F9FF] to-white">
            <div className="max-w-[1200px] mx-auto">
                {/* Center Blueprint Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#38B6FF] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-sky-100">
                        <ClipboardList size={32} strokeWidth={2.5} />
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-[2.75rem] font-black text-[#013074] mb-4 tracking-tight leading-tight">
                        Hospice PBM Overview
                    </h2>
                    <p className="text-[#64748B] text-xl font-medium max-w-2xl mx-auto opacity-70 leading-relaxed">
                        Comprehensive pharmacy benefit management designed exclusively for hospice organizations
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-[#F1F5F9] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] flex flex-col items-center text-center group cursor-default hover:shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
                            <div className="w-16 h-16 bg-[#E0F2FE] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#013074] mb-4 leading-tight tracking-tight uppercase">
                                {feature.title}
                            </h3>
                            <p className="text-[#64748B] text-[1.1rem] leading-relaxed font-semibold opacity-70">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Centered Compliance Card */}
                <div className="flex justify-center">
                    <div className="max-w-[420px] w-full bg-white p-12 rounded-[3.5rem] border border-[#F1F5F9] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06)] flex flex-col items-center text-center group cursor-default hover:shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
                        <div className="w-16 h-16 bg-[#E0F2FE] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            {features[3].icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#013074] mb-4 leading-tight tracking-tight uppercase">
                            {features[3].title}
                        </h3>
                        <p className="text-[#64748B] text-[1.1rem] leading-relaxed font-semibold opacity-70">
                            {features[3].desc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}