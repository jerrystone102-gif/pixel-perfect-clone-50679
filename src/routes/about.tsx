import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nedd Digital" },
      { name: "description", content: "Nedd Digital helps businesses with bookkeeping, data, automation and digital tools. Based in Jersey City, NJ." },
      { property: "og:title", content: "About Nedd Digital" },
      { property: "og:description", content: "Nedd Digital helps businesses with bookkeeping, data, automation and digital tools. Based in Jersey City, NJ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="One team for your finance, data and technology." lead="Based at 111 Town Square Place, Jersey City, NJ." />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
