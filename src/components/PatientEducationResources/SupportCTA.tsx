import React from 'react'

const stats = [
  { value: "50+", label: "Guides" },
  { value: "24/7", label: "Support" },
  { value: "Free", label: "Access" },
  { value: "4.9", label: "Rating" }
]

export default function SupportCTA() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-[#003B73] via-[#005FCB] to-[#38B6FF] rounded-[3rem] p-12 md:p-20 overflow-hidden text-center text-white">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-[3rem] font-extrabold mb-6 tracking-tight">
            Need More Support?
          </h2>
          <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16 opacity-90 font-medium">
            Our clinical team is available 24/7 to answer your questions and provide personalized guidance for your hospice care needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[1.5rem] py-6 px-4 flex flex-col items-center justify-center shadow-lg shadow-[#003B73]/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl md:text-[2rem] font-extrabold mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-blue-100/80 text-[13px] font-bold uppercase tracking-[0.1em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
