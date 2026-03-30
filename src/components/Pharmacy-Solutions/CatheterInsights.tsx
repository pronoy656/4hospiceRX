import React from 'react'
import { Syringe, CheckCircle2, ChevronRight } from 'lucide-react'

const benefits = [
    "Reliable alternative when oral/IV unavailable",
    "Rapid onset within 10–20 minutes",
    "Compatible with most hospice medications",
    "Reduces need for subcutaneous access",
    "Comfortable for patients and families",
    "Evidence-based clinical protocols included"
]

const badges = ["Clinical Evidence", "Dosing Protocols", "Medication Compatibility", "Best Practices"]

export default function CatheterInsights() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#BAEFFF] via-white to-[#BAE6FD]">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] p-10 md:p-16 flex flex-col lg:flex-row gap-16 border border-gray-50">
                    
                    {/* Left Column - Content */}
                    <div className="lg:w-3/5 space-y-8">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-[#38B6FF] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-100">
                                <Syringe size={28} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-[#013074] tracking-tight leading-tight">
                                    Macy Catheter Insights
                                </h2>
                                <p className="text-[#38B6FF] font-black text-sm uppercase tracking-wider mt-1">
                                    Alternative Medication Delivery
                                </p>
                            </div>
                        </div>

                        <p className="text-[#64748B] text-lg font-medium leading-relaxed opacity-90">
                            The Macy Catheter provides a reliable, comfortable alternative route for rectal medication delivery when oral and IV routes are unavailable. Explore comprehensive clinical evidence, dosing protocols, medication compatibility data, and best practices developed specifically for hospice care settings.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {badges.map((badge, i) => (
                                <span key={i} className="px-4 py-2 bg-[#E0F2FE] text-[#38B6FF] rounded-full text-xs font-bold transition-colors hover:bg-[#BAE6FD] cursor-default">
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-2 bg-[#38B6FF] hover:bg-[#31a1e0] text-white px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-sky-200 group">
                            Read More <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Column - Benefits List */}
                    <div className="lg:w-2/5 flex flex-col gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4 bg-[#E0F2FE]/40 p-4 rounded-2xl border border-white transition-all hover:bg-[#E0F2FE]/60">
                                <CheckCircle2 className="text-[#38B6FF] flex-shrink-0" size={20} strokeWidth={3} />
                                <span className="text-[#013074] font-bold text-sm opacity-80">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}