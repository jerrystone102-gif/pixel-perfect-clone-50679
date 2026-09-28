import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/products/leave-management")({
  head: () => ({
    meta: [
      { title: "Leave Management Software | Nedd Digital" },
      { name: "description", content: "Leave requests, approvals, live balances, policies, CSV import, reports and audit logs." },
      { property: "og:title", content: "Leave Management Software | Nedd Digital" },
      { property: "og:description", content: "Leave requests, approvals, live balances, policies, CSV import, reports and audit logs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Product" title="Leave Management Software" lead="Requests, approvals and live balances for employees, managers and admins." />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply with clear next steps." cta="Contact us" />
    </>
  );
}
