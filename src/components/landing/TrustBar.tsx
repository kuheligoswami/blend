const stats = [
  { value: "90%", label: "Faster Costing" },
  { value: "AES‑256", label: "Recipe Protection" },
  { value: "Real‑time", label: "Price Simulation" },
  { value: "Enterprise", label: "Audit Trails" },
  { value: "Mobile", label: "Optimized" },
];

export function TrustBar() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="glass rounded-2xl shadow-card grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center">
              <div className="font-display font-extrabold text-2xl md:text-3xl text-navy">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
