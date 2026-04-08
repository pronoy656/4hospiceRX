import React from 'react';
import { Bed, Wind, Accessibility, Heart } from 'lucide-react';

const categories = [
  {
    icon: Bed,
    title: "Hospital Beds",
    count: "4 items",
    iconColor: "text-[#38B6FF]",
    bgColor: "bg-sky-50"
  },
  {
    icon: Wind,
    title: "Oxygen Equipment",
    count: "4 items",
    iconColor: "text-[#0052CC]",
    bgColor: "bg-blue-50"
  },
  {
    icon: Accessibility,
    title: "Mobility & Transfer",
    count: "4 items",
    iconColor: "text-[#002B5B]",
    bgColor: "bg-slate-50"
  },
  {
    icon: Heart,
    title: "Comfort Equipment",
    count: "4 items",
    iconColor: "text-[#2563EB]",
    bgColor: "bg-blue-50/50"
  }
];

export default function EquipmentCatalog() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Equipment Catalog
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Browse our complete hospice DME inventory by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-[#F8FAFC]/50 rounded-[32px] p-10 pt-12 border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] text-center transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] hover:border-slate-200 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl ${category.bgColor} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors group-hover:text-[#0052CC]">
                {category.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

