import {
  LayoutGrid, FlaskConical, LineChart, Users, History, Settings, Search, Bell,
} from "lucide-react";

const nav = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: FlaskConical, label: "Recipes" },
  { icon: LineChart, label: "Pricing" },
  { icon: Users, label: "Access" },
  { icon: History, label: "Audit" },
  { icon: Settings, label: "Settings" },
];

const ingredients = [
  { name: "Glyphosate Tech", code: "AGR-204", qty: "180 kg", cost: "₹482/kg", total: "₹86,760" },
  { name: "Surfactant Blend", code: "SUR-118", qty: "45 kg", cost: "₹1,210/kg", total: "₹54,450" },
  { name: "Solvent System", code: "SOL-091", qty: "120 kg", cost: "₹118/kg", total: "₹14,160" },
  { name: "Stabilizer", code: "STB-027", qty: "12 kg", cost: "₹2,400/kg", total: "₹28,800" },
  { name: "Buffer Agent", code: "BUF-303", qty: "8 kg", cost: "₹890/kg", total: "₹7,120" },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const heights = [40, 55, 48, 70, 62, 78, 85];

export function DashboardPreview() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">Live Dashboard</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight">
            Built for the way formulation teams work
          </h2>
        </div>

        <div className="rounded-3xl border border-border shadow-elevated bg-background overflow-hidden">
          {/* Top bar */}
          <div className="border-b border-border bg-surface/60 px-5 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              {["bg-red-400/60", "bg-yellow-400/60", "bg-green-400/60"].map((c, i) => (
                <span key={i} className={`w-3 h-3 rounded-full ${c}`} />
              ))}
            </div>
            <div className="ml-4 flex-1 max-w-md flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5">
              <Search className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Search recipes, materials…</span>
            </div>
            <Bell className="w-4 h-4 text-muted-foreground" />
            <div className="w-7 h-7 rounded-full bg-gradient-teal" />
          </div>

          <div className="grid lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="border-r border-border bg-surface/40 p-4 hidden lg:block">
              <div className="space-y-1">
                {nav.map((n) => (
                  <div
                    key={n.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      n.active ? "bg-gradient-teal text-white shadow-teal-glow" : "text-foreground/70 hover:bg-background"
                    }`}
                  >
                    <n.icon className="w-4 h-4" />
                    {n.label}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gradient-navy rounded-xl text-white">
                <p className="text-xs opacity-80">Plan</p>
                <p className="font-display font-bold">Enterprise</p>
                <p className="text-[10px] opacity-70 mt-1">62 portfolios · 18 users</p>
              </div>
            </aside>

            {/* Main */}
            <div className="p-6 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { l: "COGM / kg", v: "₹1,284", d: "+2.4%", up: true },
                  { l: "Batch Size", v: "500 kg", d: "Standard", up: false },
                  { l: "Total Cost", v: "₹6.42L", d: "−1.1%", up: false },
                  { l: "Margin", v: "32.4%", d: "+0.8%", up: true },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border p-4 bg-background">
                    <p className="text-xs text-muted-foreground">{s.l}</p>
                    <p className="font-display font-extrabold text-2xl text-navy mt-1">{s.v}</p>
                    <p className={`text-[11px] font-semibold mt-1 ${s.up ? "text-teal" : "text-muted-foreground"}`}>{s.d}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Ingredients */}
                <div className="lg:col-span-2 rounded-xl border border-border overflow-hidden">
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-surface/40">
                    <p className="font-display font-bold text-navy text-sm">Formulation Ingredients</p>
                    <span className="text-xs text-teal font-semibold">AGRI-MIX-204</span>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-5 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="col-span-2">Material</span>
                      <span>Qty</span>
                      <span>Rate</span>
                      <span className="text-right">Total</span>
                    </div>
                    {ingredients.map((i) => (
                      <div key={i.code} className="grid grid-cols-5 px-4 py-3 text-sm items-center hover:bg-surface/60">
                        <div className="col-span-2">
                          <p className="font-medium text-navy">{i.name}</p>
                          <p className="text-[11px] text-muted-foreground">{i.code}</p>
                        </div>
                        <span className="text-foreground/80">{i.qty}</span>
                        <span className="text-foreground/80">{i.cost}</span>
                        <span className="text-right font-semibold text-navy">{i.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-border p-4">
                    <p className="font-display font-bold text-navy text-sm mb-4">Cost Breakdown</p>
                    <div className="relative w-32 h-32 mx-auto">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--surface)" strokeWidth="3.4" />
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--teal)" strokeWidth="3.4" strokeDasharray="58 100" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--navy)" strokeWidth="3.4" strokeDasharray="22 100" strokeDashoffset="-58" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] text-muted-foreground">Total</span>
                        <span className="font-display font-bold text-navy">₹6.42L</span>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1.5 text-xs">
                      <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-teal"/>Materials</span><span className="font-semibold">58%</span></div>
                      <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-navy"/>Process</span><span className="font-semibold">22%</span></div>
                      <div className="flex justify-between"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-border"/>Overhead</span><span className="font-semibold">20%</span></div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border p-4">
                    <p className="font-display font-bold text-navy text-sm">User Roles</p>
                    <div className="mt-3 space-y-2">
                      {[
                        { n: "A. Mehta", r: "Admin", c: "bg-navy" },
                        { n: "S. Reddy", r: "Formulator", c: "bg-teal" },
                        { n: "K. Iyer", r: "Sales", c: "bg-teal/60" },
                      ].map((u) => (
                        <div key={u.n} className="flex items-center gap-2 text-xs">
                          <span className={`w-7 h-7 rounded-full ${u.c}`} />
                          <div className="flex-1">
                            <p className="font-medium text-navy">{u.n}</p>
                            <p className="text-muted-foreground text-[10px]">{u.r}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price history chart */}
              <div className="rounded-xl border border-border p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-display font-bold text-navy text-sm">Raw Material Price History</p>
                    <p className="text-[11px] text-muted-foreground">Glyphosate Tech · Last 7 months</p>
                  </div>
                  <div className="flex gap-2">
                    {["1M", "3M", "6M", "1Y"].map((t) => (
                      <span key={t} className={`text-[11px] px-2.5 py-1 rounded-md ${t === "6M" ? "bg-teal/10 text-teal font-semibold" : "text-muted-foreground"}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end gap-3 h-36">
                  {heights.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t-md bg-gradient-to-t from-teal/20 to-teal" style={{ height: `${h}%` }} />
                      <span className="text-[10px] text-muted-foreground">{months[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
