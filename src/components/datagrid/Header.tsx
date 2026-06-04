import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/datagrid-logo-white.png";

type NavItem =
  | { label: string; href: string; to?: undefined; children?: undefined }
  | { label: string; to: string; href?: undefined; children?: undefined }
  | { label: string; children: { label: string; to?: string; href?: string; description?: string }[]; href?: undefined; to?: undefined };

const nav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Products", href: "/#products" },
  { label: "Case Studies", href: "/#case-studies" },
  {
    label: "Company",
    children: [
      { label: "Leadership Team", to: "/leadership", description: "Meet the people behind Datagrid" },
      { label: "Industries", href: "/#industries", description: "Sectors we serve worldwide" },
      { label: "Technology", href: "/#tech", description: "Our engineering stack" },
    ],
  },
  { label: "Careers", href: "/#careers" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#cta" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/80 backdrop-blur-xl shadow-navy"
          : "bg-navy-deep"
      }`}
    >
      {/* subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      {/* warm glow accent */}
      <div
        className="pointer-events-none absolute -top-24 right-1/3 h-40 w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      {/* top contact strip */}
      <div className="relative hidden border-b border-white/10 xl:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5 text-[11px] font-medium text-white/60">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              ISO 9001 & ISO 27001 Certified
            </span>
            <span className="text-white/30">·</span>
            <span>Trusted by 750+ global businesses</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@datagrid.co.in" className="inline-flex items-center gap-1.5 hover:text-orange-yellow transition-colors">
              <Mail className="h-3 w-3" />
              <span>hello@datagrid.co.in</span>
            </a>
            <a href="tel:+919999999999" className="inline-flex items-center gap-1.5 hover:text-orange-yellow transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91 99999 99999</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/15 text-white/70 transition-all hover:border-orange-bright hover:text-orange-bright"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoWhite} alt="Datagrid" className="h-7 w-auto lg:h-8" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((n) => {
            if ("children" in n && n.children) {
              const isOpen = companyOpen;
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setCompanyOpen((v) => !v)}
                    className="group relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-white"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {n.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-deep/95 p-2 shadow-navy backdrop-blur-xl">
                      <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
                      <div className="relative space-y-1">
                        {n.children.map((c) =>
                          c.to ? (
                            <Link
                              key={c.label}
                              to={c.to}
                              onClick={() => setCompanyOpen(false)}
                              className="group/item block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <div className="text-sm font-semibold text-white group-hover/item:text-orange-yellow">{c.label}</div>
                              {c.description && <div className="mt-0.5 text-[12px] text-white/55">{c.description}</div>}
                            </Link>
                          ) : (
                            <a
                              key={c.label}
                              href={c.href}
                              onClick={() => setCompanyOpen(false)}
                              className="group/item block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <div className="text-sm font-semibold text-white group-hover/item:text-orange-yellow">{c.label}</div>
                              {c.description && <div className="mt-0.5 text-[12px] text-white/55">{c.description}</div>}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if ("to" in n && n.to) {
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className="group relative rounded-md px-3 py-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-white"
                >
                  {n.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            }
            return (
              <a
                key={n.label}
                href={n.href!}
                className="group relative rounded-md px-3 py-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-white"
              >
                {n.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="/#cta"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-[13px] font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative whitespace-nowrap">Start Your Project</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="rounded-md p-2 text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="relative border-t border-white/10 bg-navy-deep xl:hidden">
          <div className="space-y-1 px-5 py-4">
            {nav.map((n) => {
              if ("children" in n && n.children) {
                return (
                  <div key={n.label}>
                    <button
                      type="button"
                      onClick={() => setMobileCompanyOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
                    >
                      {n.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCompanyOpen && (
                      <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                        {n.children.map((c) =>
                          c.to ? (
                            <Link
                              key={c.label}
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-white/75 hover:text-orange-yellow"
                            >
                              {c.label}
                            </Link>
                          ) : (
                            <a
                              key={c.label}
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-white/75 hover:text-orange-yellow"
                            >
                              {c.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              if ("to" in n && n.to) {
                return (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
                  >
                    {n.label}
                  </Link>
                );
              }
              return (
                <a
                  key={n.label}
                  href={n.href!}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href="/#cta"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full px-5 py-3 text-center text-sm font-bold text-white shadow-glow"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Start Your Project
            </a>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/60">
              <a href="mailto:hello@datagrid.co.in" className="inline-flex items-center gap-2"><Mail className="h-3 w-3" /><span>hello@datagrid.co.in</span></a>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2"><Phone className="h-3 w-3" /><span>+91 99999 99999</span></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
