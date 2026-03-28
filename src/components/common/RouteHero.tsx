interface RouteHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function RouteHero({ title, subtitle, badge }: RouteHeroProps) {
  return (
    <section className="pt-32 pb-10 bg-[radial-gradient(circle_at_10%_50%,rgba(37,99,235,0.05),transparent_60%)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[800px] mx-auto">
          {badge && (
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[0.85rem] font-semibold mb-8 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="text-[3.5rem] font-bold text-text-primary leading-tight mb-8">
            {title}
          </h1>
          <p className="text-[1.25rem] text-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

