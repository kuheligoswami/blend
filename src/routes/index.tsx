import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Problem } from "@/components/landing/Problem";
import { Platform } from "@/components/landing/Platform";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Industries } from "@/components/landing/Industries";
import { Security } from "@/components/landing/Security";
import { Impact } from "@/components/landing/Impact";
import { About } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blend by Scimplify — Secure Formulation Costing for Manufacturing Teams" },
      {
        name: "description",
        content:
          "Blend is a secure formulation costing and recipe management platform by Scimplify. Calculate COGM, manage recipes, and simulate raw material pricing in real time.",
      },
      { property: "og:title", content: "Blend by Scimplify — Formulation Costing Platform" },
      {
        property: "og:description",
        content:
          "Instant COGM calculations, secure recipe management, and real-time pricing intelligence for industrial manufacturing teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Platform />
      <HowItWorks />
      <DashboardPreview />
      <Industries />
      <Security />
      <Impact />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
