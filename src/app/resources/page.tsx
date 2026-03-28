import RouteHero from "@/components/common/RouteHero";

export default function Resources() {
  return (
    <div>
      <RouteHero 
        title="Knowledge & Insights" 
        subtitle="Stay ahead with latest hospice trends and medication breakthroughs."
        badge="Resource Library"
      />
      <div className="container" style={{ padding: "5rem 0" }}>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Explore our collection of whitepapers, clinical case studies, and 
          industry webinars dedicated to the evolution of medication 
          management in hospice settings.
        </p>
      </div>
    </div>
  );
}
