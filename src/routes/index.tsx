import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, PrimaryLink, GhostLink, Eyebrow, ProcessSteps, CtaBand } from "@/components/site/Blocks";
import { DemoDashboard } from "@/components/site/DemoDashboard";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, TRACKS, LEAVE_FEATURES, type Track } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nedd Digital — Bookkeeping, Power BI & Custom Software" },
      { name: "description", content: "From messy books to clear insights and working software: QuickBooks bookkeeping, Power BI dashboards, automation, websites, apps and branding." },
      { property: "og:title", content: "Nedd Digital — Bookkeeping, Power BI & Custom Software" },
      { property: "og:description", content: "QuickBooks bookkeeping, Power BI dashboards, automation, websites, apps and branding for growing businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  { title: "Discover", body: "We learn how your business runs today." },
  { title: "Plan", body: "Clear scope, timeline and price up front." },
  { title: "Build", body: "Work delivered in visible stages." },
  { title: "Review", body: "You test; we refine." },
  { title: "Launch", body: "Handover and ongoing support." },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <div className="rounded-3xl border bg-card p-8">
      <Eyebrow>{track === "finance" ? "Track 01" : "Track 02"}</Eyebrow>
      <h3 className="text-2xl font-semibold text-navy">{TRACKS[track].name}</h3>
      <p className="mt-2 text-muted-foreground">{TRACKS[track].lead}</p>
      <ul className="mt-6 divide-y">
        {SERVICES.filter((s) => s.track === track).map((s) => (
          <li key={s.slug}>
            <Link to="/services/$slug" params={{ slug: s.slug }} className="group flex items-start justify-between gap-4 py-4">
              <div>
                <p className="font-semibold text-foreground">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-navy-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Index() {
  return (
    <>
      <PageHero
        eyebrow="Finance · Data · Technology"
        title="From messy books to clear insights and working software."
        lead="Nedd Digital keeps your QuickBooks accurate, turns your numbers into Power BI dashboards, and builds the websites, apps and systems your business runs on."
      >
        <PrimaryLink to="/contact">Book a free consultation</PrimaryLink>
        <GhostLink to="/services">Explore services</GhostLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Two clear paths. One team.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal><TrackCard track="finance" /></Reveal>
          <Reveal delay={100}><TrackCard track="digital" /></Reveal>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Power BI</Eyebrow>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">Your numbers, at a glance.</h2>
            <p className="mt-4 text-muted-foreground">Every bookkeeping package includes a free historical Power BI dashboard covering up to three years of your data.</p>
            <div className="mt-8"><PrimaryLink to="/services/$slug" params={{ slug: "power-bi-data-analytics" }}>See dashboards</PrimaryLink></div>
          </div>
          <DemoDashboard compact />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 rounded-3xl border bg-card p-8 md:p-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our product</Eyebrow>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">Leave Management Software</h2>
            <p className="mt-4 text-muted-foreground">Requests, approvals and live leave balances for employees, managers and admins — in one place.</p>
            <div className="mt-8"><PrimaryLink to="/products/leave-management">View the product</PrimaryLink></div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {LEAVE_FEATURES.slice(0, 6).map((f) => (
              <li key={f.title} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-navy-soft" />{f.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={STEPS} />
      <CtaBand title="Let's talk about your business" body="Tell us what you need and we'll reply within 24 hours with clear next steps." cta="Contact us" />
    </>
  );
}
