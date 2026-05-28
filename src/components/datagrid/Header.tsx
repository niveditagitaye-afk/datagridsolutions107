import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import logoWhite from "@/assets/datagrid-logo-white.png";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Tech", href: "#tech" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="relative hidden border-b border-white/10 lg:block">
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
              <Mail className="h-3 w-3" /> hello@datagrid.co.in
            </a>
            <a href="tel:+919999999999" className="inline-flex items-center gap-1.5 hover:text-orange-yellow transition-colors">
              <Phone className="h-3 w-3" /> +91 99999 99999
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoWhite} alt="Datagrid" className="h-8 w-auto lg:h-9" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative rounded-md px-3.5 py-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-white"
            >
              {n.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Start Your Project</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="relative border-t border-white/10 bg-navy-deep lg:hidden">
          <div className="space-y-1 px-5 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full px-5 py-3 text-center text-sm font-bold text-white shadow-glow"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Start Your Project
            </a>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/60">
              <a href="mailto:hello@datagrid.co.in" className="inline-flex items-center gap-2"><Mail className="h-3 w-3" /> hello@datagrid.co.in</a>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2"><Phone className="h-3 w-3" /> +91 99999 99999</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
