import { ClipboardList, SlidersHorizontal, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardList, n: "01", title: "Add formulation inputs", desc: "Define ingredients, ratios, and target batch parameters." },
  { icon: SlidersHorizontal, n: "02", title: "Adjust pricing & batch details", desc: "Override raw material prices and tweak technical parameters." },
  { icon: Sparkles, n: "03", title: "Generate instant COGM output", desc: "Get a fully traceable cost-per-kg in milliseconds." },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">How it works</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight">
            From recipe to cost in three steps
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="bg-background rounded-2xl p-8 border border-border shadow-card h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center shadow-teal-glow">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-display font-extrabold text-5xl text-teal/15">{s.n}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 w-7 h-7 rounded-full bg-background border border-border items-center justify-center shadow-soft">
                  <ArrowRight className="w-3.5 h-3.5 text-teal" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formula card */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-navy rounded-3xl p-10 md:p-14 shadow-elevated text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <p className="relative text-xs font-semibold tracking-widest text-teal-bright uppercase mb-6">The Formula</p>
          <div className="relative inline-flex items-center gap-5 font-display">
            <span className="text-2xl md:text-3xl font-medium opacity-80">COGM Rate</span>
            <span className="text-3xl md:text-4xl font-extrabold">=</span>
            <div className="text-left">
              <div className="text-lg md:text-xl border-b-2 border-teal-bright pb-2 px-3">
                Σ <span className="text-teal-bright">(Ingredient Cost)</span>
              </div>
              <div className="text-lg md:text-xl pt-2 px-3">Batch Size</div>
            </div>
          </div>
          <p className="relative mt-8 text-white/75 max-w-xl mx-auto">
            Blend automatically calculates formulation cost per kg while protecting recipe confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
