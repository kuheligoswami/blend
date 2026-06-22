import heroImg from "@/assets/hero-dashboard.jpg";
import moleculeBg from "@/assets/molecule-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Lock, Activity, FileClock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Role-based access" },
  { icon: Lock, label: "Secure recipe protection" },
  { icon: Activity, label: "Real-time costing" },
  { icon: FileClock, label: "Audit-ready history" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-24 overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ backgroundImage: `url(${moleculeBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide text-navy mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-glow" />
            FORMULATION COSTING · BY SCIMPLIFY
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-navy">
            Secure formulation costing for modern{" "}
            <span className="text-gradient-teal">manufacturing teams</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Blend helps manufacturers and sales teams instantly calculate accurate formulation
            costs, manage recipes securely, and simulate raw material pricing scenarios in real time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-navy hover:bg-navy/90 text-white h-12 px-7 shadow-elevated">
              <a href="#cta">Book Demo <ArrowRight className="ml-1 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-navy/20 text-navy hover:bg-navy/5">
              <a href="#platform">Explore Platform</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs font-medium text-navy/80">
                <span className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-teal" />
                </span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-6 bg-gradient-teal opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/60 animate-float">
            <img src={heroImg} alt="Blend dashboard preview" width={1280} height={960} className="w-full h-auto" />
          </div>
          <div className="hidden md:block absolute -left-6 top-1/3 glass rounded-2xl p-4 shadow-card">
            <p className="text-xs text-muted-foreground">COGM / kg</p>
            <p className="font-display font-bold text-2xl text-navy">₹ 1,284<span className="text-teal text-base">.50</span></p>
            <p className="text-[11px] text-teal font-semibold mt-1">▲ 2.4% vs last batch</p>
          </div>
          <div className="hidden md:block absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-card">
            <p className="text-xs text-muted-foreground">Active recipes</p>
            <p className="font-display font-bold text-2xl text-navy">3,418</p>
            <p className="text-[11px] text-navy/60 font-medium mt-1">across 62 portfolios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
