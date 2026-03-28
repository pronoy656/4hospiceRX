import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                <div className="space-y-8 animate-fade-in">
                    <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-primary bg-primary/10 border-none font-semibold uppercase tracking-widest text-[0.75rem]">
                        Empowering Hospice Care
                    </Badge>
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
                        The Future of <span className="text-primary italic">Hospice Pharmacy</span> is Here.
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Maximize care efficiency and minimize pharmaceutical costs with our state-of-the-art management suite tailored specifically for clinicians and providers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Link 
                            href="/signup" 
                            className={cn(
                                buttonVariants({ variant: "default", size: "lg" }),
                                "h-14 px-10 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 flex items-center justify-center"
                            )}
                        >
                            Get Started Now
                        </Link>
                        <Link 
                            href="/tools" 
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "h-14 px-10 border-border-color rounded-xl font-bold bg-white transition-all hover:bg-bg-secondary flex items-center justify-center"
                            )}
                        >
                            View Clinical Tools
                        </Link>
                    </div>
                </div>
                
                <div className="relative hidden lg:block">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-30"></div>
                    <div className="relative bg-white/40 backdrop-blur-2xl border border-white/40 p-10 rounded-[3rem] shadow-2xl">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl shadow-sm border border-border-color/50">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl font-bold">✓</div>
                                <div>
                                    <div className="font-bold text-text-primary">Real-time Auditing</div>
                                    <div className="text-sm text-text-secondary">Automated cost reconciliation</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/20 translate-x-8">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold">⚙</div>
                                <div>
                                    <div className="font-bold text-primary">PBM Integration</div>
                                    <div className="text-sm text-primary/70">Seamless workflow sync</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl shadow-sm border border-border-color/50">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-2xl font-bold">$</div>
                                <div>
                                    <div className="font-bold text-text-primary">Net Savings</div>
                                    <div className="text-sm text-text-secondary">+32% Average per patient</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}