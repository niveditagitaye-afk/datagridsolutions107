import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/datagrid-logo.png";

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
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Datagrid" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-orange-bright"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="mailto:hello@datagrid.co.in"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-navy"
            aria-label="Email"
          >
            <Mail className="h-3.5 w-3.5" /> hello@datagrid.co.in
          </a>
          <a
            href="tel:+919999999999"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-navy"
            aria-label="Phone"
          >
            <Phone className="h-3.5 w-3.5" /> +91 99999 99999
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 text-navy transition-colors hover:bg-navy hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:shadow-glow hover:bg-orange-bright"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="rounded-md p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-5 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-navy px-5 py-3 text-center text-sm font-bold text-white"
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
