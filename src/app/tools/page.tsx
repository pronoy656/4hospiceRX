import RouteHero from "@/components/common/RouteHero";

export default function Tools() {
  return (
    <div>
      <RouteHero 
        title="Comprehensive Hospice Rx Tools" 
        subtitle="Empower your care team with data-driven insights and medication auditing platforms."
        badge="Precision Equipment"
      />
      <div className="container" style={{ padding: "5rem 0" }}>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Explore our suite of auditing, reporting, and management tools designed 
          for hospice professionals. Our tools help minimize medication overhead 
          and maximize caregiver focus on patient outcomes.
        </p>
      </div>
    </div>
  );
}
