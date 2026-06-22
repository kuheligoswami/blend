import agro from "@/assets/ind-agro.jpg";
import pharma from "@/assets/ind-pharma.jpg";
import paints from "@/assets/ind-paints.jpg";
import personal from "@/assets/ind-personal.jpg";
import cleaning from "@/assets/ind-cleaning.jpg";
import industrial from "@/assets/ind-industrial.jpg";

const items = [
  { img: agro, title: "Agrochemicals", desc: "Cost crop protection formulations with regulatory traceability." },
  { img: pharma, title: "Pharmaceuticals", desc: "Manage API-level recipes with secure version control." },
  { img: paints, title: "Paints & Coatings", desc: "Optimize pigment and resin costs across SKUs." },
  { img: personal, title: "Personal Care", desc: "Iterate on beauty and wellness formulas confidentially." },
  { img: cleaning, title: "Cleaning Chemicals", desc: "Standardize costing across surfactant portfolios." },
  { img: industrial, title: "Industrial Formulations", desc: "Scale specialty chemistry from lab to plant." },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">Industries</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight">
            Trusted across formulation-driven industries
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl overflow-hidden shadow-card border border-border bg-background hover:-translate-y-1 transition-smooth">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/25 mix-blend-multiply transition-smooth" />
                <h3 className="absolute bottom-4 left-5 right-5 font-display font-bold text-2xl text-white">{it.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
