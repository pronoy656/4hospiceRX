import React from "react";
import { InitialAssessment } from "../Shared/InitialAssessment";
import { TrialedAntibiotics } from "../Shared/TrialedAntibiotics";
import { TreatmentParameters } from "../Shared/TreatmentParameters";
import { AllergySelector } from "../Shared/AllergySelector";

interface SepsisTabProps {
  data: any;
  selectedSymptoms: string[];
  toggleSymptom: (symptom: string) => void;
  trialedAntibiotics: string[];
  toggleAntibiotic: (id: string) => void;
}

export const SepsisTab = ({ 
  data, 
  selectedSymptoms, 
  toggleSymptom, 
  trialedAntibiotics, 
  toggleAntibiotic 
}: SepsisTabProps) => {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold text-[#003B73] mb-6">{data.title}</h2>
      
      <InitialAssessment 
        symptoms={data.symptoms}
        selectedSymptoms={selectedSymptoms}
        toggleSymptom={toggleSymptom}
        showSuspectedSource={true}
      />

      <TrialedAntibiotics 
        antibiotics={data.antibiotics}
        trialedAntibiotics={trialedAntibiotics}
        toggleAntibiotic={toggleAntibiotic}
        evidenceNote={data.evidence}
      />

      <TreatmentParameters 
        label={data.treatmentLabel} 
        routeLabel="Route (IV typically required)"
        showCatheter={false}
      />

      <AllergySelector options={data.allergies} />
    </div>
  );
};
