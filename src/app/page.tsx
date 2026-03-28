import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-32 pb-40 relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.05),transparent_60%)]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-16">
        <div className="animate-fade-in text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[0.85rem] font-semibold mb-8 uppercase tracking-wider">
            Next-Gen Hospice Pharmacy
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-text-primary leading-[1.1] mb-8">
            Revolutionizing Hospice Pharmacology with <span className="text-primary">Precision Tools</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
            Experience the future of medication management. Our platform provides 
            cutting-edge solutions for hospice providers to optimize care and 
            reduce costs seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link href="/signup" className="px-10 py-4.5 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-transform hover:bg-primary-hover hover:-translate-y-0.5">
              Get Started Free
            </Link>
            <Link href="/tools" className="px-10 py-4.5 bg-white text-text-primary font-bold rounded-lg border border-border-color transition-colors hover:bg-bg-secondary">
              Explore Tools
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <div className="absolute w-[400px] h-[400px] bg-primary rounded-full blur-[100px] opacity-10 -z-10"></div>
          <div className="w-full max-w-[400px] bg-white/70 backdrop-blur-3xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl p-8">
            <div className="flex gap-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
            </div>
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="text-sm text-text-secondary">Monthly Cost Savings</div>
                <div className="text-xl font-bold text-primary">+24%</div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full">
                <div className="w-3/4 h-full bg-primary rounded-full"></div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-text-secondary">Pharmacy Efficiency</div>
                <div className="text-lg font-bold">98.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section className="mt-40 bg-bg-secondary py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-text-primary mb-4">
              Powerful Solutions for <span className="text-primary">Modern Care</span>
            </h2>
            <p className="text-text-secondary">Tailored for the unique needs of hospice providers and their pharmacists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Advanced Analytics", desc: "Real-time insights into medication utilization and cost patterns.", icon: "📊" },
              { title: "Pharmacy Integration", desc: "Seamless connectivity with existing PBM and pharmacy systems.", icon: "🔌" },
              { title: "Cost Optimization", desc: "Proven tools to maximize efficiency and minimize pharmaceutical waste.", icon: "💰" }
            ].map(f => (
              <div key={f.title} className="bg-bg-primary p-12 rounded-3xl border border-border-color transition-all hover:-translate-y-1.5 hover:shadow-xl">
                <div className="text-4xl mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

