import HeroSection from "@/components/MacyCatheterInsights/HeroSection";
import InsightGrid from "@/components/MacyCatheterInsights/InsightGrid";
import MedicationAccordion from "@/components/MacyCatheterInsights/MedicationAccordion";
import FAQSection from "@/components/MacyCatheterInsights/FAQSection";
import ClinicalSupportCTA from "@/components/MacyCatheterInsights/ClinicalSupportCTA";

export default function MacyCatheterPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-[#BAEFFF]/50 to-[#F1F9FF]">
      {/* Unified Master Background - Seamless across all sections */}
      <div className="absolute top-[20%] left-0 w-[800px] h-[800px] bg-blue-300/10 rounded-full blur-[150px] -ml-96 pointer-events-none opacity-60" />
      <div className="absolute top-[50%] right-0 w-[700px] h-[700px] bg-sky-300/10 rounded-full blur-[120px] -mr-80 pointer-events-none opacity-50" />
      <div className="absolute bottom-[10%] left-0 w-[600px] h-[600px] bg-indigo-200/5 rounded-full blur-[100px] -ml-72 pointer-events-none opacity-40" />

      <HeroSection />
      
      {/* Insight Section Wrap - No borders between items */}
      <div className="relative z-10 pt-10">
        <InsightGrid />
        <div className="-mt-16">
          <MedicationAccordion />
        </div>
        <div className="-mt-16">
          <FAQSection />
        </div>
      </div>

      {/* Final Support CTA */}
      <ClinicalSupportCTA />
    </div>
  );
}
