import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const tools = [
    { title: "Medication Auditor", desc: "Automated analysis of medication orders for cost and clinical compliance.", icon: "📋" },
    { title: "Formulary Manager", desc: "Digital management of hospice-specific drug lists and preferred medications.", icon: "🧪" },
    { title: "Cost Predictor", desc: "AI-driven forecasting for patient medication expenses throughout care.", icon: "📉" },
    { title: "PBM Connector", desc: "Direct integration with major Pharmacy Benefit Managers for instant claims.", icon: "🔗" }
]

export default function ClinicalTools() {
    return (
        <section className="py-24 bg-bg-secondary">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-text-primary">Clinical <span className="text-primary italic">Intelligence</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">Precision-built tools to handle the complexities of hospice medication management.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tools.map((tool) => (
                        <Card key={tool.title} className="group border-border-color hover:border-primary/50 transition-all hover:shadow-xl rounded-3xl overflow-hidden bg-bg-primary">
                            <CardHeader className="pb-2">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                                <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-text-secondary text-sm leading-relaxed">{tool.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}