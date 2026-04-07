import HeroSection from "@/components/PatientEducationResources/HeroSection";
import ActionCards from "@/components/PatientEducationResources/ActionCards";
import ResourceAccordion from "@/components/PatientEducationResources/ResourceAccordion";
import FeaturedResources from "@/components/Resoources/FeaturedResources";
import SupportCTA from "@/components/PatientEducationResources/SupportCTA";

export default function PatientEducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ActionCards />

      {/* Interactive Accordion Resources Section */}
      <div className="relative -mt-16">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white via-sky-50/40 to-transparent -z-10" />
        <ResourceAccordion />
      </div>

      {/* Final Support CTA Section */}
      <SupportCTA />
    </div>
  );
}
