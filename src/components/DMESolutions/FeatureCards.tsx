import React from 'react';
import { Truck, PhoneCall, ShieldCheck, Settings } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "24hr",
    subtitle: "Standard Delivery",
    iconColor: "text-[#0052CC]",
    bgColor: "bg-[#F0F7FF]"
  },
  {
    icon: PhoneCall,
    title: "24/7",
    subtitle: "Tech Support",
    iconColor: "text-[#002B5B]",
    bgColor: "bg-slate-50"
  },
  {
    icon: ShieldCheck,
    title: "100%",
    subtitle: "Medicare Covered",
    iconColor: "text-[#38B6FF]",
    bgColor: "bg-sky-50"
  },
  {
    icon: Settings,
    title: "Free",
    subtitle: "Setup & Training",
    iconColor: "text-[#475569]",
    bgColor: "bg-slate-50"
  }
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-20 z-20 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[32px] p-10 pt-12 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-50/50 text-center transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bgColor} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-[13px] text-slate-400 font-semibold tracking-wide uppercase">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

