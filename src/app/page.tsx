import HeroSection from "@/components/Home/HeroSection";
import ClinicalTools from "@/components/Home/ClinicalTools";
import Link from "next/link";
import BeyondClinicalTools from "@/components/Home/BeyondClinicalTools";
import HospiceCare from "@/components/Home/HospiceCare";
import StayInformed from "@/components/Home/StayInformed";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClinicalTools />
      <BeyondClinicalTools />
      <HospiceCare />
      <StayInformed />
    </div>
  );
}

