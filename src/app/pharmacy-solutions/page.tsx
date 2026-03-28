import RouteHero from "@/components/common/RouteHero";

export default function PharmacySolutions() {
  return (
    <div>
      <RouteHero 
        title="Customized Pharmacy Solutions" 
        subtitle="Bridging the gap between hospice care and pharmaceutical providers."
        badge="Integration Hub"
      />
      <div className="container" style={{ padding: "5rem 0" }}>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          We provide enterprise-grade PBM integration, custom formulary 
          management, and direct-to-pharmacy order processing for hospice organizations 
          of all sizes.
        </p>
      </div>
    </div>
  );
}
