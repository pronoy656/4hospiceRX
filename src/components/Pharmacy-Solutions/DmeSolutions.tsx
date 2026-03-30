import React from 'react'
import { Box, Bed, Wind, Accessibility, Heart, ArrowRight } from 'lucide-react'

const solutions = [
    {
        title: "Hospital Beds",
        desc: "Full electric, semi-electric, and bariatric options for maximum patient comfort.",
        icon: <Bed className="w-5 h-5 text-[#38B6FF]" />
    },
    {
        title: "Oxygen Equipment",
        desc: "Concentrators, portable units, and respiratory supplies for all care levels.",
        icon: <Wind className="w-5 h-5 text-[#38B6FF]" />
    },
    {
        title: "Mobility Aids",
        desc: "Wheelchairs, walkers, and transfer equipment for safe patient transport.",
        icon: <Accessibility className="w-5 h-5 text-[#38B6FF]" />
    },
    {
        title: "Comfort Equipment",
        desc: "Pressure-relief mattresses and positioning aids for continuous comfort.",
        icon: <Heart className="w-5 h-5 text-[#38B6FF]" />
    }
]

export default function DmeSolutions() {
    return (
        <section className="py-24 px-6 relative bg-gradient-to-b from-[#BAE6FD] to-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="w-16 h-16 bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#013074] mb-8 shadow-sm">
                        <Box size={32} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-[2.75rem] font-black text-[#013074] mb-4 tracking-tight leading-loose">
                        DME Solutions
                    </h2>
                    <p className="text-[#64748B] text-lg font-medium max-w-2xl mx-auto opacity-70 leading-relaxed uppercase">
                        Comprehensive durable medical equipment for hospice patient comfort
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                    {solutions.map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-[#F1F5F9] flex items-start gap-8 transition-all hover:translate-y-[-5px] hover:shadow-lg duration-500">
                            <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#013074] tracking-tight leading-tight uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-[#64748B] leading-relaxed opacity-90">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <button className="bg-[#EFF8FF] text-[#38B6FF] font-black px-12 py-5 rounded-2xl flex items-center gap-3 transition-all hover:bg-[#E0F2FE] shadow-sm transform hover:translate-y-[-2px] active:scale-95 group">
                        EXPLORE FULL CATALOG <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    )
}