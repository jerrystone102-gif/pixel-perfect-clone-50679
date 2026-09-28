import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Nedd Digital" },
      { name: "description", content: "Bookkeeping plans from $500/month. Software, website and dashboard work quoted per project." },
      { property: "og:title", content: "Pricing | Nedd Digital" },
      { property: "og:description", content: "Bookkeeping plans from $500/month. Software, website and dashboard work quoted per project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Clear pricing" lead="Bookkeeping plans: Essential $500/mo, Professional $1,200/mo, Enterprise $2,500+/mo. Other work is quoted per project." />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
