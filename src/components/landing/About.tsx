export function About() {
  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">About</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight">
          Built by <span className="text-gradient-teal">Scimplify</span>
        </h2>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Blend is developed by Scimplify to modernize formulation costing, recipe security,
          and pricing intelligence for industrial manufacturing teams.
        </p>
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-soft">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-sm font-medium text-navy">Engineered for industrial manufacturing</span>
        </div>
      </div>
    </section>
  );
}
