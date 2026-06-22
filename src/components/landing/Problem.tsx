import { AlertCircle, FileX, Clock, Calculator, EyeOff, ListX, ArrowRight } from "lucide-react";

const problems = [
  { icon: Calculator, title: "Complex Excel calculations", desc: "Fragile spreadsheets passed between teams." },
  { icon: Clock, title: "Manual pricing updates", desc: "Stale raw material prices lead to lost margins." },
  { icon: AlertCircle, title: "Hidden calculation errors", desc: "One wrong cell quietly breaks a quote." },
  { icon: FileX, title: "Delayed customer quotations", desc: "Sales waits days for engineering to respond." },
  { icon: ListX, title: "No audit trail", desc: "Impossible to trace who changed what, when." },
  { icon: EyeOff, title: "Recipe exposure risks", desc: "Confidential formulas shared in plain files." },
];

export function Problem() {
  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">The Problem</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy max-w-lg">
            Manual formulation costing slows down innovation
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Spreadsheets weren't built for the complexity of modern formulations.
            Teams lose hours, margin, and confidence on every quote cycle.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="bg-background rounded-2xl p-5 border border-border shadow-soft hover:shadow-card transition-smooth">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
                  <p.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-display font-semibold text-base text-navy">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="space-y-5">
            {/* Before */}
            <div className="bg-background rounded-2xl p-6 border border-border shadow-soft opacity-80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-destructive">Before · Spreadsheet chaos</span>
                <span className="text-[10px] text-muted-foreground">v37_FINAL_final.xlsx</span>
              </div>
              <div className="space-y-1.5">
                {[
                  ["A2 = SUMPRODUCT(B$2:B12, C$2:C12)/D2", "#REF!"],
                  ["A3 = VLOOKUP(\"INGRD-204\", prices, 3)", "#N/A"],
                  ["A4 = (E2*0.85)+E5-E7+manual_adj", "412.7"],
                ].map(([f, v]) => (
                  <div key={f} className="flex items-center justify-between font-mono text-[11px] bg-surface px-3 py-2 rounded-md">
                    <span className="text-foreground/70 truncate">{f}</span>
                    <span className={`font-semibold ${v.startsWith("#") ? "text-destructive" : "text-foreground/70"}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center shadow-teal-glow rotate-90">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* After */}
            <div className="bg-background rounded-2xl p-6 border-2 border-teal/30 shadow-elevated">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">After · Blend dashboard</span>
                <span className="text-[10px] text-muted-foreground">Live · auto-saved</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { l: "COGM/kg", v: "₹1,284" },
                  { l: "Batch", v: "500 kg" },
                  { l: "Margin", v: "32.4%" },
                ].map((s) => (
                  <div key={s.l} className="bg-surface rounded-xl p-3">
                    <p className="text-[10px] text-muted-foreground uppercase">{s.l}</p>
                    <p className="font-display font-bold text-lg text-navy">{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { n: "Solvent A", c: 38, p: "₹420/kg" },
                  { n: "Active Compound", c: 42, p: "₹2,180/kg" },
                  { n: "Stabilizer", c: 20, p: "₹680/kg" },
                ].map((i) => (
                  <div key={i.n}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-navy">{i.n}</span>
                      <span className="text-muted-foreground">{i.p} · {i.c}%</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-teal rounded-full" style={{ width: `${i.c * 2}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
