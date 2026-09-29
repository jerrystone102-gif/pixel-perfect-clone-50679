import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import leaveImg from "@/assets/leave-management-demo.jpg.asset.json";
import siteImg from "@/assets/nedddigital-website.jpg.asset.json";
import { LEAVE_DEMO_URL } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Nedd Digital" },
      { name: "description", content: "Real work from Nedd Digital: our Leave Management Software product and business website projects." },
      { property: "og:title", content: "Portfolio | Nedd Digital" },
      { property: "og:description", content: "Real work from Nedd Digital: our Leave Management Software product and business website projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Project = { name: string; category: "Products" | "Websites"; image: string; description: string; details: string[]; link: { label: string; href?: string; to?: string } };

const PROJECTS: Project[] = [
  {
    name: "Leave Management Software",
    category: "Products",
    image: leaveImg.url,
    description: "Our own web application for handling leave requests, approvals and balances across employee, manager and admin roles.",
    details: ["Role-based views", "Approvals workflow", "Live balances", "Reports & audit logs"],
    link: { label: "Open live demo", href: LEAVE_DEMO_URL },
  },
  {
    name: "Nedd Digital QuickBooks & Power BI website",
    category: "Websites",
    image: siteImg.url,
    description: "A marketing website for QuickBooks bookkeeping and Power BI services, with service pages, pricing tables and a dashboard preview.",
    details: ["Responsive design", "Pricing pages", "Booking calls-to-action"],
    link: { label: "Visit site", href: "https://nedddigital.com" },
  },
];

const CATS = ["All", "Products", "Websites"] as const;

function Page() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = PROJECTS.filter((p) => cat === "All" || p.category === cat);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Work we've built." lead="Real projects only — shown as they are, with live links where available." />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${cat === c ? "border-navy bg-navy text-on-navy" : "text-navy hover:bg-muted"}`}>{c}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-10">
          {list.map((p, i) => (
            <article key={p.name} className={`grid items-center gap-8 overflow-hidden rounded-3xl border bg-card lg:grid-cols-5 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="bg-muted p-4 lg:col-span-3 lg:p-8">
                <img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" className="w-full rounded-xl border shadow-lg" />
              </div>
              <div className="p-8 lg:col-span-2 lg:pl-0">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-navy">{p.category}</span>
                <h2 className="mt-4 text-2xl font-semibold text-navy">{p.name}</h2>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.details.map((d) => <li key={d} className="rounded-md border px-2.5 py-1 text-xs text-muted-foreground">{d}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={p.link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-navy hover:underline">{p.link.label}<ArrowUpRight className="h-4 w-4" /></a>
                  {p.category === "Products" && <Link to="/products/leave-management" className="font-semibold text-navy-soft hover:underline">Product details</Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project in mind?" body="Tell us what you want to build and we'll reply with clear next steps." cta="Start a project" />
    </>
  );
}
