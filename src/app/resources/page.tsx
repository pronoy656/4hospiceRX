import HeroSection from "@/components/Resoources/HeroSection";
import ResourceGrid from "@/components/Resoources/ResourceGrid";
import FeaturedResources from "@/components/Resoources/FeaturedResources";

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* Background Wrapper for Resource Section to ensure seamless mix */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white via-sky-50/40 to-transparent -z-10" />
        <ResourceGrid />
        <FeaturedResources />
      </div>
    </div>
  );
}
