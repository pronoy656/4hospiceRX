"use client";

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import {
  Heart,
  Pill,
  Brain,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Clock
} from 'lucide-react'

interface Resource {
  title: string;
  description: string;
  category: string;
  readTime: string;
}

interface Topic {
  id: string;
  title: string;
  icon: React.ElementType;
  resourceCount: number;
  resources: Resource[];
}

const topics: Topic[] = [
  {
    id: "hospice-care",
    title: "Understanding Hospice Care",
    icon: Heart,
    resourceCount: 3,
    resources: [
      {
        title: "What Is Hospice Care?",
        description: "A comprehensive introduction to hospice care philosophy, eligibility criteria, and what families can expect when transitioning to hospice services.",
        category: "Guide",
        readTime: "5 min read"
      },
      {
        title: "Hospice vs. Palliative Care",
        description: "Understanding the key differences between hospice and palliative care, and when each approach is most appropriate for patient needs.",
        category: "Comparison",
        readTime: "4 min read"
      },
      {
        title: "The Hospice Team: Who's Involved",
        description: "Meet the interdisciplinary team that provides holistic hospice care — from physicians and nurses to chaplains and volunteers.",
        category: "Overview",
        readTime: "6 min read"
      }
    ]
  },
  {
    id: "medication-management",
    title: "Medication Management",
    icon: Pill,
    resourceCount: 2,
    resources: [
      {
        title: "Administering Rescue Medications",
        description: "A step-by-step guide for caregivers on safely administering as-needed medications for comfort and symptom relief.",
        category: "Tutorial",
        readTime: "8 min read"
      },
      {
        title: "Understanding Pain Relievers",
        description: "Information about common medications used in hospice for pain management, including dosage and side effects.",
        category: "Guide",
        readTime: "10 min read"
      }
    ]
  },
  {
    id: "symptom-management",
    title: "Symptom Management",
    icon: Brain,
    resourceCount: 3,
    resources: [
      {
        title: "Managing Breathlessness",
        description: "Techniques and supportive measures for patients experiencing shortness of breath or anxiety.",
        category: "Protocol",
        readTime: "5 min read"
      },
      {
        title: "Nutrition & Hydration",
        description: "Navigating changes in appetite and fluid intake during the end-of-life journey.",
        category: "Guide",
        readTime: "7 min read"
      }
    ]
  },
  {
    id: "caregiver-support",
    title: "Caregiver Support",
    icon: Users,
    resourceCount: 3,
    resources: [
      {
        title: "Self-Care for Caregivers",
        description: "Strategies for maintaining your own physical and emotional well-being while caring for a loved one.",
        category: "Guide",
        readTime: "6 min read"
      },
      {
        title: "Having Difficult Conversations",
        description: "Communication tips for talking about end-of-life wishes with family and healthcare providers.",
        category: "Comparison",
        readTime: "9 min read"
      }
    ]
  }
]

export default function ResourceAccordion() {
  const [expandedTopics, setExpandedTopics] = useState<string[]>(["hospice-care"]);

  const toggleTopic = (id: string) => {
    setExpandedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-20 flex flex-col gap-6">
      {topics.map((topic) => {
        const isExpanded = expandedTopics.includes(topic.id);
        const Icon = topic.icon;

        return (
          <div key={topic.id} className="flex flex-col gap-4">
            <Card
              className={`p-6 md:p-8 bg-white border-0 shadow-[0_4px_25px_-5px_rgba(51,144,255,0.06)] rounded-[2.5rem] flex flex-row items-start justify-between cursor-pointer transition-all duration-300 ${isExpanded ? 'shadow-[0_10px_35px_-5px_rgba(51,144,255,0.12)]' : ''}`}
              onClick={() => toggleTopic(topic.id)}
            >
              <div className="flex items-start gap-6 pt-1">
                <div className="w-14 h-14 bg-[#E3F2FF] rounded-[18px] flex items-center justify-center text-[#38B6FF]">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-1.5">
                  <h3 className="text-[1.35rem] font-bold text-[#003B73] tracking-tight">
                    {topic.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[14px] font-medium tracking-tight">
                    {topic.resourceCount} resources
                  </p>
                </div>
              </div>
              <div className="text-[#94A3B8] pt-4">
                {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </Card>

            {/* Smooth Animation Wrapper */}
            <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="min-h-0 flex flex-col gap-3 px-2 md:px-4 pb-2">
                {topic.resources.map((resource, index) => (
                  <Card key={index} className="group p-4 md:p-6 bg-white/50 backdrop-blur-sm border border-[#EBF6FF] shadow-sm hover:shadow-md transition-all duration-300 rounded-[1.5rem] flex flex-row items-start justify-between cursor-pointer">
                    <div className="flex items-start gap-5 pt-1">
                      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#38B6FF] shadow-sm border border-[#F1F9FF]">
                        <FileText size={20} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 space-y-2 pt-1">
                        <h4 className="text-[1.05rem] font-bold text-[#003B73] transition-colors duration-300 group-hover:text-blue-600">
                          {resource.title}
                        </h4>
                        <p className="text-[#64748B] text-[14px] leading-relaxed font-medium line-clamp-2 max-w-2xl">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-[12px] font-bold text-[#38B6FF] bg-[#E3F2FF] px-3 py-1 rounded-full">
                            {resource.category}
                          </span>
                          <span className="text-[12px] font-medium text-[#94A3B8] flex items-center gap-1.5 font-semibold opacity-90">
                            <Clock size={12} strokeWidth={2} />
                            {resource.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
