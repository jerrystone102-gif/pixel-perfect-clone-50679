import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nedd Digital" },
      { name: "description", content: "Call +1 (281) 547-9290 or email info@nedddigital.com." },
      { property: "og:title", content: "Contact Nedd Digital" },
      { property: "og:description", content: "Call +1 (281) 547-9290 or email info@nedddigital.com." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to Nedd Digital" lead="Phone +1 (281) 547-9290 · info@nedddigital.com · 111 Town Square Place, Jersey City, NJ" />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
