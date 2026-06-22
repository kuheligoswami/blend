import { BlendLogo } from "@/components/BlendLogo";

const cols = [
  { title: "Platform", links: ["Features", "Security", "Pricing", "Industries"] },
  { title: "Company", links: ["About Scimplify", "Contact", "Support"] },
  { title: "Legal", links: ["Privacy", "Terms"] },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12">
          <div>
            <BlendLogo variant="light" />
            <p className="mt-5 text-sm text-white/65 max-w-xs leading-relaxed">
              Secure formulation costing and recipe intelligence for modern manufacturing teams.
            </p>
            <p className="mt-6 text-xs text-white/50">hello@blend.scimplify.com</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-semibold text-white mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/65 hover:text-teal-bright transition-smooth">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Blend by Scimplify. All rights reserved.</p>
          <p className="text-xs text-white/50">Crafted for industrial manufacturing teams.</p>
        </div>
      </div>
    </footer>
  );
}
