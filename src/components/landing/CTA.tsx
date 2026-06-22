import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-cta p-12 md:p-20 text-center shadow-elevated">
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-bright/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white leading-tight max-w-3xl mx-auto">
              Ready to modernize formulation costing?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              Talk to our team and see how Blend secures your recipes while making costing instant.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 h-12 px-7 shadow-elevated">
                <a href="#contact">Book Demo <ArrowRight className="ml-1 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-white/40 text-white hover:bg-white/10">
                <a href="#contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
