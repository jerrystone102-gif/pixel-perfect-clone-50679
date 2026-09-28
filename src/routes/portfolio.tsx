import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Nedd Digital" },
      { name: "description", content: "Selected Nedd Digital work, including our Leave Management Software product." },
      { property: "og:title", content: "Portfolio | Nedd Digital" },
      { property: "og:description", content: "Selected Nedd Digital work, including our Leave Management Software product." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Selected work" lead="Real projects only. More case studies are being added." />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
