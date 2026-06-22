import { useEffect, useState } from "react";
import { BlendLogo } from "@/components/BlendLogo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="shrink-0"><BlendLogo /></a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 hover:text-teal transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant="default" size="lg" asChild className="rounded-full bg-navy hover:bg-navy/90 text-white px-6 shadow-soft">
            <a href="#cta">Book Demo</a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium py-2">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full bg-navy hover:bg-navy/90 text-white rounded-full">
            <a href="#cta">Book Demo</a>
          </Button>
        </div>
      )}
    </header>
  );
}
