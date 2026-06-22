import {
  Calculator, FlaskConical, LineChart, Users, History, Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "COGM Calculator",
    points: ["Real-time cost calculation", "Batch-level costing", "Price override simulation"],
  },
  {
    icon: FlaskConical,
    title: "Recipe Management",
    points: ["Version-controlled recipes", "Ingredient composition", "Secure storage"],
  },
  {
    icon: LineChart,
    title: "Raw Material Pricing",
    points: ["Historical price tracking", "Shared material updates", "Portfolio-wide impact"],
  },
  {
    icon: Users,
    title: "Access Control",
    points: ["Role-based permissions", "External customer access", "Product-level visibility"],
  },
  {
    icon: History,
    title: "Audit & History",
    points: ["Calculation history", "Login tracking", "Approval workflows"],
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    points: ["Responsive design", "Optimized field workflows", "Bottom navigation"],
  },
];

export function Platform() {
  return (
    <section id="platform" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-4">Platform</p>
          <h2 id="features" className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy">
            One platform for costing, recipes, and pricing intelligence
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Everything formulation, sales, and finance teams need — engineered for accuracy, speed, and confidentiality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-background rounded-2xl p-7 border border-border shadow-soft hover:shadow-teal-glow hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-teal/0 group-hover:bg-teal/10 blur-2xl transition-smooth" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shadow-teal-glow">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-navy">{f.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
