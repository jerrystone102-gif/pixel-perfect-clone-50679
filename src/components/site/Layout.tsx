import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/nedd-digital-logo.png.asset.json";
import { CONTACT, SERVICES, TRACKS, type Track } from "@/lib/site";

const NAV = [
  { to: "/products/leave-management", label: "Products" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Nedd Digital home">
      <img src={logo.url} alt="" width={40} height={40} className="h-10 w-10 rounded-md bg-card object-contain p-0.5" />
      <span className={`font-display text-lg font-semibold ${light ? "text-on-navy" : "text-navy"}`}>Nedd Digital</span>
    </Link>
  );
}

function ServiceColumn({ track, onNavigate }: { track: Track; onNavigate?: () => void }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{TRACKS[track].name}</p>
      <ul className="space-y-1">
        {SERVICES.filter((s) => s.track === track).map((s) => (
          <li key={s.slug}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              onClick={onNavigate}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const close = () => {
    setOpen(false);
    setMenu(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-background"}`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" activeOptions={{ exact: true }} activeProps={{ className: "text-navy-soft" }}>
            Home
          </Link>
          <div className="relative" onMouseLeave={() => setMenu(false)}>
            <button
              type="button"
              aria-expanded={menu}
              aria-haspopup="true"
              onClick={() => setMenu((v) => !v)}
              onMouseEnter={() => setMenu(true)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${menu ? "rotate-180" : ""}`} />
            </button>
            {menu && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 gap-6 rounded-xl border bg-popover p-5 shadow-xl">
                  <ServiceColumn track="finance" onNavigate={close} />
                  <ServiceColumn track="digital" onNavigate={close} />
                  <Link to="/services" onClick={close} className="col-span-2 border-t pt-3 text-sm font-semibold text-navy-soft hover:underline">
                    See all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted" activeProps={{ className: "text-navy-soft" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">
            Contact us
          </Link>
          <button type="button" className="rounded-md p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t bg-background px-5 pb-8 pt-4 lg:hidden">
          <Link to="/" onClick={close} className="block py-2 text-lg font-semibold">Home</Link>
          <div className="my-4 grid gap-6 sm:grid-cols-2">
            <ServiceColumn track="finance" onNavigate={close} />
            <ServiceColumn track="digital" onNavigate={close} />
          </div>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={close} className="block py-2 text-lg font-semibold">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={close} className="mt-4 flex justify-center rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground">
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-on-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-on-navy-muted">
            Business, finance, data and technology solutions for growing businesses.
          </p>
        </div>
        {(["finance", "digital"] as const).map((t) => (
          <div key={t}>
            <p className="text-sm font-semibold text-accent">{TRACKS[t].name}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.filter((s) => s.track === t).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-on-navy-muted hover:text-on-navy">
                    {s.name}
                  </Link>
                </li>
              ))}
              {t === "digital" && (
                <li>
                  <Link to="/products/leave-management" className="text-on-navy-muted hover:text-on-navy">Leave Management Software</Link>
                </li>
              )}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold text-accent">Contact</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-on-navy-muted">
            <a href={CONTACT.phoneHref} className="flex gap-2 hover:text-on-navy"><Phone className="h-4 w-4 shrink-0" />{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="flex gap-2 hover:text-on-navy"><Mail className="h-4 w-4 shrink-0" />{CONTACT.email}</a>
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />{CONTACT.address}</p>
          </address>
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link to="/pricing" className="hover:text-accent">Pricing</Link>
            <Link to="/about" className="hover:text-accent">About</Link>
            <Link to="/contact" className="hover:text-accent">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-on-navy/10 py-6 text-center text-xs text-on-navy-muted">
        © {new Date().getFullYear()} Nedd Digital. All rights reserved.
      </div>
    </footer>
  );
}
