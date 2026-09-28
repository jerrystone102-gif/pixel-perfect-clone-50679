import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-accent" : "text-navy-soft"}`}>
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-on-navy">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="reveal max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-on-navy-muted">{lead}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ to, children, params }: { to: string; children: ReactNode; params?: Record<string, string> }) {
  return (
    <Link
      to={to as "/"}
      params={params as never}
      className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function GhostLink({ to, children, light = true }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to as "/"}
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${light ? "border-on-navy/30 text-on-navy hover:bg-on-navy/10" : "border-navy/20 text-navy hover:bg-muted"}`}
    >
      {children}
    </Link>
  );
}

export function ProcessSteps({ steps, title = "How we work" }: { steps: { title: string; body: string }[]; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Eyebrow>Our process</Eyebrow>
      <h2 className="text-3xl font-semibold text-navy md:text-4xl">{title}</h2>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-5" style={{ gridTemplateColumns: undefined }}>
        {steps.map((s, i) => (
          <li key={s.title} className="bg-card p-6">
            <Reveal delay={i * 80}>
              <span className="font-display text-sm font-semibold text-accent-foreground/60">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CtaBand({ title, body, cta, to = "/contact" }: { title: string; body: string; cta: string; to?: string }) {
  return (
    <section className="px-5 pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-8 py-14 text-on-navy md:px-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 text-on-navy-muted">{body}</p>
          </div>
          <PrimaryLink to={to}>{cta}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
