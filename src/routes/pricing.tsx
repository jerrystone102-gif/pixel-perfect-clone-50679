import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero, CtaBand, Eyebrow } from "@/components/site/Blocks";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Nedd Digital" },
      { name: "description", content: "Transparent pricing for QuickBooks bookkeeping, setup and migration, and Power BI dashboards. Custom quotes for software, websites and branding." },
      { property: "og:title", content: "Pricing | Nedd Digital" },
      { property: "og:description", content: "Transparent pricing for QuickBooks bookkeeping, setup and migration, and Power BI dashboards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Plan = { name: string; price: string; unit?: string; sub?: string; tag: string; features: string[]; note?: string; popular?: boolean; custom?: boolean };

const BOOKKEEPING: Plan[] = [
  { name: "Essential", price: "$500", unit: "/month", sub: "Setup: $500 one-time", tag: "For small businesses", features: ["Up to 100 transactions/month", "End-of-month entry (28–30th)", "Bank & credit card reconciliation", "Basic AR/AP tracking (record only)", "Monthly financial statements", "Email support", "1 historical dashboard (last 3 years)"] },
  { name: "Professional", price: "$1,200", unit: "/month", sub: "Setup: $1,500 one-time", tag: "For growing businesses", popular: true, features: ["Up to 300 transactions/month", "Weekly entry & updates", "Full AR/AP management (reminders, follow-ups)", "Payroll allocation & job costing", "Monthly close process", "Dedicated bookkeeper", "Priority email & phone support", "1 historical dashboard (last 3 years)"] },
  { name: "Enterprise", price: "$2,500+", unit: "/month", sub: "Setup: custom quote", tag: "For large operations", custom: true, features: ["Unlimited transactions", "Daily transaction processing", "Full-service bookkeeping", "Multi-entity management", "Advanced job/project costing", "CFO-level support", "Monthly financial reviews", "1 historical dashboard (last 3 years)"] },
];

const SETUP: Plan[] = [
  { name: "Fresh Setup", price: "$1,500–3,000", tag: "New QuickBooks file", features: ["Chart of accounts design", "Opening balances", "Products/services setup", "Bank connections", "User training"] },
  { name: "QuickBooks Cleanup", price: "$1,000–2,500", tag: "Messy or behind books", features: ["Audit existing file", "Fix errors & reconcile", "Reorganize chart of accounts", "Clean up old data", "Optimize for reporting"] },
  { name: "Migration Service", price: "$2,000–4,000", tag: "Switching systems", features: ["Desktop to Online migration", "From Xero / FreshBooks / Wave", "Data mapping & validation", "Historical data transfer", "Post-migration support"] },
];

const MONTHLY: Plan[] = [
  { name: "Essential", price: "$600", unit: "/month", sub: "Annual: $6,120/year (save $1,080)", tag: "Small businesses & startups", features: ["1 custom dashboard (up to 10 visuals)", "Connect any 1 data source", "Daily automated refresh", "Monthly performance review", "2 hours training", "Email support (48-hour response)", "Dashboard files yours to keep"] },
  { name: "Business", price: "$900", unit: "/month", sub: "Annual: $9,180/year (save $1,620)", tag: "Growing businesses", popular: true, features: ["Up to 3 dashboards (25 visuals)", "Up to 3 data sources", "Hourly automated refresh", "Up to 10 users", "Monthly insights report", "4 hours training", "Priority support (24-hour response)", "Bi-weekly data quality checks"] },
  { name: "Premium", price: "$1,500", unit: "/month", sub: "Annual: $15,300/year (save $2,700)", tag: "Larger operations", custom: true, features: ["Up to 5 dashboards + advanced analytics", "Unlimited data sources", "Real-time refresh", "Unlimited users", "Monthly strategy call", "8 hours training", "Dedicated dashboard specialist", "Weekly performance reviews"] },
];

const ONETIME: Plan[] = [
  { name: "Starter Build", price: "$1,500", unit: " one-time", sub: "Delivery in 1–2 weeks", tag: "A clean dashboard, fast", features: ["1 custom dashboard (up to 10 visuals)", "Connect 1 data source", "Historical data (last 3 years)", "2-hour training session", "Full file ownership", "No automated refresh"] },
  { name: "Professional Build", price: "$2,500", unit: " one-time", sub: "Delivery in 2–3 weeks", tag: "Complete multi-page solution", popular: true, features: ["Up to 3 dashboards (20 visuals)", "Up to 2 data sources", "Historical data (last 3 years)", "Advanced KPIs & filters", "Multi-user access setup", "4-hour training session", "No automated refresh"] },
  { name: "Advanced Build", price: "$4,000", unit: " one-time", sub: "Delivery in 3–4 weeks", tag: "Multiple sources, advanced analytics", custom: true, features: ["Up to 5 dashboards (30+ visuals)", "Multiple data sources", "Historical data (last 3 years)", "Custom DAX & data modeling", "Unlimited users", "8-hour training + documentation"] },
];

function PlanCard({ p }: { p: Plan }) {
  return (
    <div className={`relative flex flex-col rounded-3xl border p-7 ${p.popular ? "border-accent bg-navy text-on-navy shadow-xl" : "bg-card"}`}>
      {p.popular && <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Most popular</span>}
      <p className={`text-sm ${p.popular ? "text-on-navy-muted" : "text-muted-foreground"}`}>{p.tag}</p>
      <h3 className={`mt-1 text-xl font-semibold ${p.popular ? "" : "text-navy"}`}>{p.name}</h3>
      <p className="mt-5 font-display text-4xl font-semibold">
        {p.price}<span className={`text-base font-normal ${p.popular ? "text-on-navy-muted" : "text-muted-foreground"}`}>{p.unit}</span>
      </p>
      {p.sub && <p className={`mt-1 text-sm ${p.popular ? "text-on-navy-muted" : "text-muted-foreground"}`}>{p.sub}</p>}
      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {p.features.map((f) => (
          <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5 ${p.popular ? "bg-accent text-accent-foreground" : "border border-navy/20 text-navy hover:bg-muted"}`}
      >
        {p.custom ? "Contact us" : "Get started"}
      </Link>
    </div>
  );
}

function Grid({ plans }: { plans: Plan[] }) {
  return <div className="mt-10 grid gap-6 lg:grid-cols-3">{plans.map((p) => <PlanCard key={p.name} p={p} />)}</div>;
}

function Page() {
  const [dash, setDash] = useState<"monthly" | "onetime">("monthly");
  return (
    <>
      <PageHero eyebrow="Pricing" title="Clear, transparent pricing." lead="No hidden fees. Choose the package that fits your business, or ask for a custom quote." />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>QuickBooks bookkeeping</Eyebrow>
        <h2 className="text-3xl font-semibold text-navy md:text-4xl">Monthly bookkeeping packages</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Every package includes a free historical Power BI dashboard covering your last 3 years of data (no automated refresh).</p>
        <Grid plans={BOOKKEEPING} />
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Eyebrow>One-time services</Eyebrow>
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">QuickBooks setup & migration</h2>
          <Grid plans={SETUP} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Power BI dashboards</Eyebrow>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">Live dashboards, your way</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Connected to QuickBooks, Excel, Google Sheets, Xero, CSV or databases. Monthly plans are month-to-month with 30-day notice; pay annually to save 15%.</p>
          </div>
          <div role="tablist" aria-label="Dashboard pricing type" className="inline-flex rounded-full border bg-card p-1">
            {([["monthly", "Monthly support"], ["onetime", "One-time build"]] as const).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={dash === k} onClick={() => setDash(k)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${dash === k ? "bg-navy text-on-navy" : "text-navy"}`}>{l}</button>
            ))}
          </div>
        </div>
        <Grid plans={dash === "monthly" ? MONTHLY : ONETIME} />
        {dash === "onetime" && <p className="mt-6 text-sm text-muted-foreground">Want automated refresh later? Add a monthly support plan any time, from $600/month.</p>}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-3xl border bg-card p-8 md:p-12">
          <Eyebrow>Custom quotes</Eyebrow>
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">When a custom quote makes sense</h2>
          <div className="mt-6 grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
            <p><strong className="text-foreground">Websites, software, mobile apps and branding</strong> are priced per project after a short discovery call, because scope varies widely.</p>
            <p><strong className="text-foreground">Business automation and Leave Management Software</strong> depend on your systems, team size and workflow.</p>
            <p><strong className="text-foreground">Larger bookkeeping or dashboard needs</strong> — multiple entities, high volumes or many data sources — get a tailored package.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which package fits?" body="Tell us about your business and we'll recommend the right option — no obligation." cta="Get a recommendation" />
    </>
  );
}
