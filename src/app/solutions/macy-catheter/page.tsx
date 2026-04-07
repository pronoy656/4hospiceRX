import HeroSection from "@/components/MacyCatheterInsights/HeroSection";
import InsightGrid from "@/components/MacyCatheterInsights/InsightGrid";

export default function MacyCatheterPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <InsightGrid />
      
      {/* Light atmospheric background gradient */}
      <div className="relative -mt-16 pb-24">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white via-sky-50/40 to-transparent -z-10" />
      </div>
    </div>
  );
}
