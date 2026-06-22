import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 90, suffix: "%", label: "Faster Cost Calculations" },
  { value: 100, suffix: "%", label: "Instant Formula Revisions" },
  { value: 75, suffix: "%", label: "Fewer Manual Errors" },
  { value: 24, suffix: "/7", label: "Secure External Sharing" },
  { value: 360, suffix: "°", label: "Portfolio Pricing Visibility" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Impact() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">Impact</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight">
            Measurable outcomes for manufacturing teams
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background border border-border rounded-2xl p-7 shadow-soft hover:shadow-teal-glow transition-smooth">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-gradient-teal">
                <Counter to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
