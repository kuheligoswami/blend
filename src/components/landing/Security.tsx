import { KeyRound, Users, Lock, MailCheck, FileSearch, Timer } from "lucide-react";

const items = [
  { icon: KeyRound, title: "JWT Authentication", desc: "Stateless, signed sessions for every API call." },
  { icon: Users, title: "Role Permissions", desc: "Granular access by team, product, and customer." },
  { icon: Lock, title: "Recipe Confidentiality", desc: "Composition is hidden by default, even internally." },
  { icon: MailCheck, title: "Email Verification", desc: "Verified accounts before any data access." },
  { icon: FileSearch, title: "Audit Logging", desc: "Immutable record of every cost calculation." },
  { icon: Timer, title: "Session Protection", desc: "Auto-expiry, device tracking, and revocation." },
];

export function Security() {
  return (
    <section id="security" className="py-28 bg-gradient-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-teal-bright/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-widest text-teal-bright uppercase mb-4">Security</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
            Enterprise-grade security built into every calculation
          </h2>
          <p className="mt-5 text-white/70 text-lg">
            Your formulations are your IP. Blend treats every recipe with the security
            posture of a regulated enterprise system.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="glass-dark rounded-2xl p-7 hover:bg-white/5 transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shadow-teal-glow">
                <it.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
