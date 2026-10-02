import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, PrimaryLink, GhostLink, Eyebrow, ProcessSteps, CtaBand } from "@/components/site/Blocks";
import { DemoDashboard } from "@/components/site/DemoDashboard";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, TRACKS, LEAVE_FEATURES, type Track } from "@/lib/site";
import { PORTFOLIO, CATEGORY_LABEL } from "@/lib/portfolio";

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
  { title: "Understand", body: "We spend real time learning how your business runs before suggesting anything." },
  { title: "Plan", body: "A scope, timeline and price, agreed in writing before work starts." },
  { title: "Build", body: "Work delivered in stages you can actually see, not one big reveal at the end." },
  { title: "Refine", body: "You review it, we adjust it, then we hand it over with support attached." },
];

const WHY = [
  { title: "Finance and tech together", body: "Your bookkeeper and your developer are the same team, so nothing gets lost explaining your business twice to two different providers." },
  { title: "A price before we start", body: "You get a written quote and scope before any work begins, so there's no surprise invoice halfway through." },
  { title: "One person to call", body: "A single point of contact who already knows your setup, instead of a new rep every time you reach out." },
];

const PREVIEW = (["websites", "webdev", "mobile", "branding"] as const)
  .map((c) => PORTFOLIO.find((p) => p.category === c))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
        eyebrow="Finance, Data, Technology"
        title="Your books handled properly, your numbers finally making sense, and software that fits how you actually work."
        lead="Most businesses don't lose money because they're doing something wrong. They lose it because nobody has time to keep the books current, the reports don't answer the real questions, and the tools were never built for how the team actually works. Nedd Digital fixes all three, under one roof."
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
            <p className="mt-4 text-muted-foreground">Most business owners can tell you what their revenue was last month. Fewer can tell you which three customers are carrying the business, or how long cash actually lasts if a slow month hits. That's the gap a proper dashboard closes. Every bookkeeping package includes a free historical Power BI dashboard covering up to three years of your data, so you start seeing the picture from day one, not six months in.</p>
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
            <p className="mt-4 text-muted-foreground">Built because we needed it ourselves first. Employees request time off, managers approve it, and everyone can see real leave balances without a spreadsheet getting passed around by email. Requests, approvals and live balances for employees, managers and admins, all in one place.</p>
            <div className="mt-8"><PrimaryLink to="/products/leave-management">View the product</PrimaryLink></div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {LEAVE_FEATURES.slice(0, 6).map((f) => (
              <li key={f.title} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-navy-soft" />{f.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Eyebrow>Why Nedd Digital</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold text-navy md:text-4xl">One team for your numbers and your technology.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">Recent work</h2>
          </div>
          <GhostLink to="/portfolio" light={false}>View full portfolio</GhostLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW.map((p) => (
            <Link key={p.id} to="/portfolio" search={{ item: p.id }} className="group overflow-hidden rounded-2xl border bg-card">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.cover} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="p-4 text-sm font-semibold text-navy">{CATEGORY_LABEL[p.category]}</p>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSteps steps={STEPS} />
      <CtaBand title="Let's talk about your business." body="Tell us what's slowing you down and we'll reply within 24 hours with clear next steps, not a sales pitch." cta="Contact us" />
    </>
  );
}
