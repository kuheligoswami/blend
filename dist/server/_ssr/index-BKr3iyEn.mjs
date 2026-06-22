import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, A as ArrowRight, S as ShieldCheck, L as Lock, a as Activity, F as FileClock, C as Calculator, b as Clock, c as CircleAlert, d as FileX, e as ListX, E as EyeOff, f as FlaskConical, g as ChartLine, U as Users, H as History, h as Smartphone, i as ClipboardList, j as SlidersHorizontal, k as Sparkles, l as Search, B as Bell, m as LayoutGrid, n as Settings, K as KeyRound, o as MailCheck, p as FileSearch, T as Timer } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function BlendLogo({ showTagline = true, className = "", variant = "default" }) {
  const stroke = variant === "light" ? "white" : "var(--teal)";
  const text = variant === "light" ? "text-white" : "text-navy";
  const tag = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2.5 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "38", height: "38", viewBox: "0 0 40 40", fill: "none", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "36", height: "36", rx: "9", stroke, strokeWidth: "2.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "14", cy: "16", r: "3.2", fill: stroke }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "26", cy: "16", r: "3.2", fill: stroke, opacity: "0.55" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "26", r: "3.2", fill: stroke }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 16 L20 26 L26 16", stroke, strokeWidth: "1.6", strokeLinecap: "round" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-[1.35rem] font-extrabold tracking-tight ${text}`, children: "Blend" }),
      showTagline && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[0.65rem] font-medium tracking-wide ${tag} mt-0.5`, children: "by Scimplify" })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlendLogo, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm font-medium text-foreground/75 hover:text-teal transition-smooth",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "default", size: "lg", asChild: true, className: "rounded-full bg-navy hover:bg-navy/90 text-white px-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", children: "Book Demo" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-background border-t border-border px-6 py-4 space-y-3", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block text-sm font-medium py-2", children: l.label }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full bg-navy hover:bg-navy/90 text-white rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", children: "Book Demo" }) })
        ] })
      ]
    }
  );
}
const heroImg = "/assets/hero-dashboard-BssFzhOt.jpg";
const moleculeBg = "/assets/molecule-bg-PpWHxXsL.jpg";
const badges = [
  { icon: ShieldCheck, label: "Role-based access" },
  { icon: Lock, label: "Secure recipe protection" },
  { icon: Activity, label: "Real-time costing" },
  { icon: FileClock, label: "Audit-ready history" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 lg:pt-40 pb-24 overflow-hidden bg-gradient-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-50 pointer-events-none",
        style: { backgroundImage: `url(${moleculeBg})`, backgroundSize: "cover", backgroundPosition: "center" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-teal/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-navy/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide text-navy mb-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-teal animate-pulse-glow" }),
          "FORMULATION COSTING · BY SCIMPLIFY"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-extrabold text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-navy", children: [
          "Secure formulation costing for modern",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "manufacturing teams" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Blend helps manufacturers and sales teams instantly calculate accurate formulation costs, manage recipes securely, and simulate raw material pricing scenarios in real time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-navy hover:bg-navy/90 text-white h-12 px-7 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#cta", children: [
            "Book Demo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full h-12 px-7 border-navy/20 text-navy hover:bg-navy/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#platform", children: "Explore Platform" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-medium text-navy/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-4 h-4 text-teal" }) }),
          b.label
        ] }, b.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-up", style: { animationDelay: "120ms" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-teal opacity-20 blur-3xl rounded-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-elevated border border-border/60 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Blend dashboard preview", width: 1280, height: 960, className: "w-full h-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block absolute -left-6 top-1/3 glass rounded-2xl p-4 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "COGM / kg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-2xl text-navy", children: [
            "₹ 1,284",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal text-base", children: ".50" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-teal font-semibold mt-1", children: "▲ 2.4% vs last batch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Active recipes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl text-navy", children: "3,418" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-navy/60 font-medium mt-1", children: "across 62 portfolios" })
        ] })
      ] })
    ] })
  ] });
}
const stats = [
  { value: "90%", label: "Faster Costing" },
  { value: "AES‑256", label: "Recipe Protection" },
  { value: "Real‑time", label: "Price Simulation" },
  { value: "Enterprise", label: "Audit Trails" },
  { value: "Mobile", label: "Optimized" }
];
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative -mt-12 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl shadow-card grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/60", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-2xl md:text-3xl text-navy", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase", children: s.label })
  ] }, s.label)) }) }) });
}
const problems = [
  { icon: Calculator, title: "Complex Excel calculations", desc: "Fragile spreadsheets passed between teams." },
  { icon: Clock, title: "Manual pricing updates", desc: "Stale raw material prices lead to lost margins." },
  { icon: CircleAlert, title: "Hidden calculation errors", desc: "One wrong cell quietly breaks a quote." },
  { icon: FileX, title: "Delayed customer quotations", desc: "Sales waits days for engineering to respond." },
  { icon: ListX, title: "No audit trail", desc: "Impossible to trace who changed what, when." },
  { icon: EyeOff, title: "Recipe exposure risks", desc: "Confidential formulas shared in plain files." }
];
function Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "The Problem" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy max-w-lg", children: "Manual formulation costing slows down innovation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md", children: "Spreadsheets weren't built for the complexity of modern formulations. Teams lose hours, margin, and confidence on every quote cycle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-4", children: problems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-5 border border-border shadow-soft hover:shadow-card transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-destructive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-navy", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed", children: p.desc })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-6 border border-border shadow-soft opacity-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-destructive", children: "Before · Spreadsheet chaos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "v37_FINAL_final.xlsx" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
          ["A2 = SUMPRODUCT(B$2:B12, C$2:C12)/D2", "#REF!"],
          ['A3 = VLOOKUP("INGRD-204", prices, 3)', "#N/A"],
          ["A4 = (E2*0.85)+E5-E7+manual_adj", "412.7"]
        ].map(([f, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[11px] bg-surface px-3 py-2 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70 truncate", children: f }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${v.startsWith("#") ? "text-destructive" : "text-foreground/70"}`, children: v })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center shadow-teal-glow rotate-90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-white" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-6 border-2 border-teal/30 shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-teal", children: "After · Blend dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Live · auto-saved" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
          { l: "COGM/kg", v: "₹1,284" },
          { l: "Batch", v: "500 kg" },
          { l: "Margin", v: "32.4%" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase", children: s.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-navy", children: s.v })
        ] }, s.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
          { n: "Solvent A", c: 38, p: "₹420/kg" },
          { n: "Active Compound", c: 42, p: "₹2,180/kg" },
          { n: "Stabilizer", c: 20, p: "₹680/kg" }
        ].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-navy", children: i.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              i.p,
              " · ",
              i.c,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-surface rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-teal rounded-full", style: { width: `${i.c * 2}%` } }) })
        ] }, i.n)) })
      ] })
    ] }) })
  ] }) });
}
const features = [
  {
    icon: Calculator,
    title: "COGM Calculator",
    points: ["Real-time cost calculation", "Batch-level costing", "Price override simulation"]
  },
  {
    icon: FlaskConical,
    title: "Recipe Management",
    points: ["Version-controlled recipes", "Ingredient composition", "Secure storage"]
  },
  {
    icon: ChartLine,
    title: "Raw Material Pricing",
    points: ["Historical price tracking", "Shared material updates", "Portfolio-wide impact"]
  },
  {
    icon: Users,
    title: "Access Control",
    points: ["Role-based permissions", "External customer access", "Product-level visibility"]
  },
  {
    icon: History,
    title: "Audit & History",
    points: ["Calculation history", "Login tracking", "Approval workflows"]
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    points: ["Responsive design", "Optimized field workflows", "Bottom navigation"]
  }
];
function Platform() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "platform", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "features", className: "font-display font-extrabold text-4xl md:text-5xl leading-tight text-navy", children: "One platform for costing, recipes, and pricing intelligence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Everything formulation, sales, and finance teams need — engineered for accuracy, speed, and confidentiality." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative bg-background rounded-2xl p-7 border border-border shadow-soft hover:shadow-teal-glow hover:-translate-y-1 transition-smooth overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 rounded-full bg-teal/0 group-hover:bg-teal/10 blur-2xl transition-smooth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shadow-teal-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-bold text-xl text-navy", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: f.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" }),
              p
            ] }, p)) })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
const steps = [
  { icon: ClipboardList, n: "01", title: "Add formulation inputs", desc: "Define ingredients, ratios, and target batch parameters." },
  { icon: SlidersHorizontal, n: "02", title: "Adjust pricing & batch details", desc: "Override raw material prices and tweak technical parameters." },
  { icon: Sparkles, n: "03", title: "Generate instant COGM output", desc: "Get a fully traceable cost-per-kg in milliseconds." }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-surface relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight", children: "From recipe to cost in three steps" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6 lg:gap-4 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-2xl p-8 border border-border shadow-card h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center shadow-teal-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold text-5xl text-teal/15", children: s.n })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-navy mb-3", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.desc })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 w-7 h-7 rounded-full bg-background border border-border items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-teal" }) })
      ] }, s.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 max-w-3xl mx-auto bg-gradient-navy rounded-3xl p-10 md:p-14 shadow-elevated text-white text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-xs font-semibold tracking-widest text-teal-bright uppercase mb-6", children: "The Formula" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center gap-5 font-display", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl md:text-3xl font-medium opacity-80", children: "COGM Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl font-extrabold", children: "=" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg md:text-xl border-b-2 border-teal-bright pb-2 px-3", children: [
              "Σ ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-bright", children: "(Ingredient Cost)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg md:text-xl pt-2 px-3", children: "Batch Size" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-8 text-white/75 max-w-xl mx-auto", children: "Blend automatically calculates formulation cost per kg while protecting recipe confidentiality." })
      ] })
    ] })
  ] });
}
const nav = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: FlaskConical, label: "Recipes" },
  { icon: ChartLine, label: "Pricing" },
  { icon: Users, label: "Access" },
  { icon: History, label: "Audit" },
  { icon: Settings, label: "Settings" }
];
const ingredients = [
  { name: "Glyphosate Tech", code: "AGR-204", qty: "180 kg", cost: "₹482/kg", total: "₹86,760" },
  { name: "Surfactant Blend", code: "SUR-118", qty: "45 kg", cost: "₹1,210/kg", total: "₹54,450" },
  { name: "Solvent System", code: "SOL-091", qty: "120 kg", cost: "₹118/kg", total: "₹14,160" },
  { name: "Stabilizer", code: "STB-027", qty: "12 kg", cost: "₹2,400/kg", total: "₹28,800" },
  { name: "Buffer Agent", code: "BUF-303", qty: "8 kg", cost: "₹890/kg", total: "₹7,120" }
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const heights = [40, 55, 48, 70, 62, 78, 85];
function DashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "Live Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight", children: "Built for the way formulation teams work" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border shadow-elevated bg-background overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-surface/60 px-5 py-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["bg-red-400/60", "bg-yellow-400/60", "bg-green-400/60"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-3 h-3 rounded-full ${c}` }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4 flex-1 max-w-md flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Search recipes, materials…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-gradient-teal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[220px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "border-r border-border bg-surface/40 p-4 hidden lg:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${n.active ? "bg-gradient-teal text-white shadow-teal-glow" : "text-foreground/70 hover:bg-background"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(n.icon, { className: "w-4 h-4" }),
                n.label
              ]
            },
            n.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 bg-gradient-navy rounded-xl text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold", children: "Enterprise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-70 mt-1", children: "62 portfolios · 18 users" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
            { l: "COGM / kg", v: "₹1,284", d: "+2.4%", up: true },
            { l: "Batch Size", v: "500 kg", d: "Standard", up: false },
            { l: "Total Cost", v: "₹6.42L", d: "−1.1%", up: false },
            { l: "Margin", v: "32.4%", d: "+0.8%", up: true }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4 bg-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-2xl text-navy mt-1", children: s.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[11px] font-semibold mt-1 ${s.up ? "text-teal" : "text-muted-foreground"}`, children: s.d })
          ] }, s.l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-xl border border-border overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between bg-surface/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-navy text-sm", children: "Formulation Ingredients" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-teal font-semibold", children: "AGRI-MIX-204" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2", children: "Material" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Qty" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Total" })
                ] }),
                ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 px-4 py-3 text-sm items-center hover:bg-surface/60", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-navy", children: i.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: i.code })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: i.qty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: i.cost }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-semibold text-navy", children: i.total })
                ] }, i.code))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-navy text-sm mb-4", children: "Cost Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32 mx-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "w-full h-full -rotate-90", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "var(--surface)", strokeWidth: "3.4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "var(--teal)", strokeWidth: "3.4", strokeDasharray: "58 100", strokeLinecap: "round" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "var(--navy)", strokeWidth: "3.4", strokeDasharray: "22 100", strokeDashoffset: "-58", strokeLinecap: "round" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-navy", children: "₹6.42L" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-sm bg-teal" }),
                      "Materials"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "58%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-sm bg-navy" }),
                      "Process"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "22%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-sm bg-border" }),
                      "Overhead"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "20%" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-navy text-sm", children: "User Roles" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: [
                  { n: "A. Mehta", r: "Admin", c: "bg-navy" },
                  { n: "S. Reddy", r: "Formulator", c: "bg-teal" },
                  { n: "K. Iyer", r: "Sales", c: "bg-teal/60" }
                ].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-7 h-7 rounded-full ${u.c}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-navy", children: u.n }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[10px]", children: u.r })
                  ] })
                ] }, u.n)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-navy text-sm", children: "Raw Material Price History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Glyphosate Tech · Last 7 months" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["1M", "3M", "6M", "1Y"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] px-2.5 py-1 rounded-md ${t === "6M" ? "bg-teal/10 text-teal font-semibold" : "text-muted-foreground"}`, children: t }, t)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3 h-36", children: heights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-md bg-gradient-to-t from-teal/20 to-teal", style: { height: `${h}%` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: months[i] })
            ] }, i)) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const agro = "/assets/ind-agro-B4HvnOed.jpg";
const pharma = "/assets/ind-pharma-5jUwxNqG.jpg";
const paints = "/assets/ind-paints-DhUHFUFr.jpg";
const personal = "/assets/ind-personal-B4DUgela.jpg";
const cleaning = "/assets/ind-cleaning-CU7t5dv9.jpg";
const industrial = "/assets/ind-industrial-93CM15fi.jpg";
const items$1 = [
  { img: agro, title: "Agrochemicals", desc: "Cost crop protection formulations with regulatory traceability." },
  { img: pharma, title: "Pharmaceuticals", desc: "Manage API-level recipes with secure version control." },
  { img: paints, title: "Paints & Coatings", desc: "Optimize pigment and resin costs across SKUs." },
  { img: personal, title: "Personal Care", desc: "Iterate on beauty and wellness formulas confidentially." },
  { img: cleaning, title: "Cleaning Chemicals", desc: "Standardize costing across surfactant portfolios." },
  { img: industrial, title: "Industrial Formulations", desc: "Scale specialty chemistry from lab to plant." }
];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "industries", className: "py-28 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "Industries" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight", children: "Trusted across formulation-driven industries" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items$1.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl overflow-hidden shadow-card border border-border bg-background hover:-translate-y-1 transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.title, loading: "lazy", width: 800, height: 600, className: "w-full h-full object-cover group-hover:scale-105 transition-smooth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-teal/0 group-hover:bg-teal/25 mix-blend-multiply transition-smooth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "absolute bottom-4 left-5 right-5 font-display font-bold text-2xl text-white", children: it.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.desc }) })
    ] }, it.title)) })
  ] }) });
}
const items = [
  { icon: KeyRound, title: "JWT Authentication", desc: "Stateless, signed sessions for every API call." },
  { icon: Users, title: "Role Permissions", desc: "Granular access by team, product, and customer." },
  { icon: Lock, title: "Recipe Confidentiality", desc: "Composition is hidden by default, even internally." },
  { icon: MailCheck, title: "Email Verification", desc: "Verified accounts before any data access." },
  { icon: FileSearch, title: "Audit Logging", desc: "Immutable record of every cost calculation." },
  { icon: Timer, title: "Session Protection", desc: "Auto-expiry, device tracking, and revocation." }
];
function Security() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "security", className: "py-28 bg-gradient-navy text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-teal/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-teal-bright/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal-bright uppercase mb-4", children: "Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl leading-tight", children: "Enterprise-grade security built into every calculation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 text-lg", children: "Your formulations are your IP. Blend treats every recipe with the security posture of a regulated enterprise system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-7 hover:bg-white/5 transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shadow-teal-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-bold text-lg", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/65 leading-relaxed", children: it.desc })
      ] }, it.title)) })
    ] })
  ] });
}
const metrics = [
  { value: 90, suffix: "%", label: "Faster Cost Calculations" },
  { value: 100, suffix: "%", label: "Instant Formula Revisions" },
  { value: 75, suffix: "%", label: "Fewer Manual Errors" },
  { value: 24, suffix: "/7", label: "Secure External Sharing" },
  { value: 360, suffix: "°", label: "Portfolio Pricing Visibility" }
];
function Counter({ to, suffix }) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "Impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight", children: "Measurable outcomes for manufacturing teams" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl p-7 shadow-soft hover:shadow-teal-glow transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-4xl md:text-5xl text-gradient-teal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: m.value, suffix: m.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground font-medium", children: m.label })
    ] }, m.label)) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest text-teal uppercase mb-4", children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight", children: [
      "Built by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "Scimplify" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Blend is developed by Scimplify to modernize formulation costing, recipe security, and pricing intelligence for industrial manufacturing teams." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-teal animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-navy", children: "Engineered for industrial manufacturing" })
    ] })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-cta p-12 md:p-20 text-center shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-bright/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl md:text-6xl text-white leading-tight max-w-3xl mx-auto", children: "Ready to modernize formulation costing?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/80 max-w-xl mx-auto", children: "Talk to our team and see how Blend secures your recipes while making costing instant." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "rounded-full bg-white text-navy hover:bg-white/90 h-12 px-7 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
          "Book Demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 w-4 h-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full h-12 px-7 border-white/40 text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Contact Sales" }) })
      ] })
    ] })
  ] }) }) });
}
const cols = [
  { title: "Platform", links: ["Features", "Security", "Pricing", "Industries"] },
  { title: "Company", links: ["About Scimplify", "Contact", "Support"] },
  { title: "Legal", links: ["Privacy", "Terms"] }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "bg-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlendLogo, { variant: "light" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-white/65 max-w-xs leading-relaxed", children: "Secure formulation costing and recipe intelligence for modern manufacturing teams." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-white/50", children: "hello@blend.scimplify.com" })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-white mb-5", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-white/65 hover:text-teal-bright transition-smooth", children: l }) }, l)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Blend by Scimplify. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50", children: "Crafted for industrial manufacturing teams." })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Platform, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Security, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
