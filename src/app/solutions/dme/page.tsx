import React from 'react';
import HeroSection from '@/components/DMESolutions/HeroSection';
import FeatureCards from '@/components/DMESolutions/FeatureCards';
import EquipmentCatalog from '../../../components/DMESolutions/EquipmentCatalog';
import InsuranceCoverage from '@/components/DMESolutions/InsuranceCoverage';
import DMEFaq from '@/components/DMESolutions/DMEFaq';

export default function DMESolutionsPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-white via-[#BAEFFF]/50 to-white overflow-hidden">
      <HeroSection />
      
      <div className="relative z-10">
        <FeatureCards />
        <EquipmentCatalog />
        <InsuranceCoverage />
        <DMEFaq />
      </div>
    </div>
    </>
  );
}
