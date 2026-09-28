import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Nedd Digital" },
      { name: "description", content: "Bookkeeping, Power BI, automation, websites, software, mobile apps and branding from Nedd Digital." },
      { property: "og:title", content: "Services | Nedd Digital" },
      { property: "og:description", content: "Bookkeeping, Power BI, automation, websites, software, mobile apps and branding from Nedd Digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="Practical solutions across finance, data and technology." lead="Choose the area that matches what your business needs." />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
