import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Rocket,
  Brain,
  BarChart3,
  Cog,
  Users,
  Compass,
  LifeBuoy,
  Cloud,
  type LucideIcon,
} from "lucide-react";
const logoWhite = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop";

type ChildLink = { label: string; to?: string; href?: string; description?: string; icon?: LucideIcon };
type MegaGroup = { title: string; items: ChildLink[] };

type NavItem =
  | { label: string; href: string; to?: undefined; children?: undefined; mega?: undefined }
  | { label: string; to: string; href?: undefined; children?: undefined; mega?: undefined }
  | { label: string; children: ChildLink[]; href?: undefined; to?: undefined; mega?: undefined }
  | { label: string; mega: MegaGroup[]; href?: undefined; to?: undefined; children?: undefined };

const nav: NavItem[] = [
  {
    label: "Services",
    mega: [
      {
        title: "Build & Develop",
        items: [
          { label: "Custom Software Development", to: "/services/custom-software-development", description: "Tailor-made platforms for your business", icon: Code2 },
          { label: "Web Application Development", to: "/services/web-application-development", description: "SaaS, portals & PWAs built to scale", icon: Globe },
          { label: "Mobile App Development", to: "/services/mobile-app-development", description: "Native, Flutter & React Native apps", icon: Smartphone },
          { label: "MVP Development", to: "/services/mvp-development", description: "Launch fast, validate & scale confidently", icon: Rocket },
        ],
      },
      {
        title: "AI, Data & Automation",
        items: [
          { label: "AI & ML Development", to: "/services/ai-ml-development", description: "GenAI, NLP, CV, agents & analytics", icon: Brain },
          { label: "Decision Intelligence", to: "/services/decision-intelligence-business-insights", description: "Dashboards & predictive insights", icon: BarChart3 },
          { label: "ERP & Workflow Automation", to: "/services/erp-workflow-automation", description: "Scalable ERP & process automation", icon: Cog },
        ],
      },
      {
        title: "Teams, Advisory & Operations",
        items: [
          { label: "GCC & Dedicated Teams", to: "/services/global-capability-centers-dedicated-teams", description: "Global capability centers in India", icon: Users },
          { label: "Fractional CTO Advisory", to: "/services/fractional-cto-technology-advisory", description: "Strategic technology leadership", icon: Compass },
          { label: "Support & Maintenance", to: "/services/support-maintenance", description: "Reliable long-term application support", icon: LifeBuoy },
          { label: "Cloud, DevOps & SRE", to: "/services/cloud-devops-sre", description: "AWS, Azure, GCP, CI/CD & 24×7 SRE", icon: Cloud },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    children: [
      { label: "Technology", to: "/expertise/technology", description: "Our modern engineering stack" },
      { label: "Industries", to: "/expertise/industries", description: "Domains and sectors we serve" },
    ],
  },
  { label: "Products", to: "/products" },
  { label: "Case Studies", href: "/#case-studies" },
  {
    label: "About Us",
    children: [
      { label: "About Us", to: "/about-us", description: "Our story, journey and global presence" },
      { label: "Leadership Team", to: "/leadership", description: "Meet the people behind Datagrid" },
      { label: "Certification", to: "/certification", description: "ISO & CMMI accredited standards" },
      { label: "Why Datagrid?", to: "/why-datagrid", description: "What makes us different" },
    ],
  },

  { label: "Careers", href: "/#careers" },
  {
    label: "Insights",
    children: [
      { label: "Case Studies", to: "/case-studies", description: "Client success stories & outcomes" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);

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
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
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
            // MEGA MENU
            if ("mega" in n && n.mega) {
              const isOpen = openMenu === n.label;
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(n.label)}
                  onMouseLeave={() => setOpenMenu((v) => (v === n.label ? null : v))}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu((v) => (v === n.label ? null : n.label))}
                    className="group relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-semibold text-white/85 transition-colors hover:text-white"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {n.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                  {/* mega panel: fixed to viewport width so it never clips */}
                  <div
                    className={`fixed left-1/2 top-[calc(var(--header-h,64px)+0px)] z-50 w-[min(96vw,1120px)] -translate-x-1/2 px-2 pt-2 transition-all duration-200 ${
                      isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                    style={{ top: scrolled ? "56px" : "88px" }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-2xl ring-1 ring-black/5">
                      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1f496b 1px, transparent 0)", backgroundSize: "18px 18px" }} aria-hidden />
                      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
                        {n.mega.map((group) => (
                          <div key={group.title}>
                            <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                              <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
                              <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
                                {group.title}
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {group.items.map((c) => {
                                const Icon = c.icon;
                                const inner = (
                                  <div className="group/item flex items-start gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-orange-bright/5">
                                    {Icon && (
                                      <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#1f496b] transition-colors group-hover/item:bg-orange-bright/10 group-hover/item:text-orange-bright">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                    )}
                                    <div className="min-w-0">
                                      <div className="text-[13px] font-bold text-[#1f496b] group-hover/item:text-orange-bright">
                                        {c.label}
                                      </div>
                                      {c.description && (
                                        <div className="mt-0.5 text-[11.5px] leading-snug text-slate-500">
                                          {c.description}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                                return c.to ? (
                                  <li key={c.label}>
                                    <Link to={c.to} onClick={() => setOpenMenu(null)}>{inner}</Link>
                                  </li>
                                ) : (
                                  <li key={c.label}>
                                    <a href={c.href} onClick={() => setOpenMenu(null)}>{inner}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            // STANDARD DROPDOWN
            if ("children" in n && n.children) {
              const isOpen = openMenu === n.label;
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(n.label)}
                  onMouseLeave={() => setOpenMenu((v) => (v === n.label ? null : v))}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu((v) => (v === n.label ? null : n.label))}
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
                              onClick={() => setOpenMenu(null)}
                              className="group/item block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <div className="text-sm font-semibold text-white group-hover/item:text-orange-yellow">{c.label}</div>
                              {c.description && <div className="mt-0.5 text-[12px] text-white/55">{c.description}</div>}
                            </Link>
                          ) : (
                            <a
                              key={c.label}
                              href={c.href}
                              onClick={() => setOpenMenu(null)}
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
        <div className="relative max-h-[calc(100vh-64px)] overflow-y-auto border-t border-white/10 bg-navy-deep xl:hidden">
          <div className="space-y-1 px-5 py-4">
            {nav.map((n) => {
              // Mobile: mega -> accordion with groups flattened
              if ("mega" in n && n.mega) {
                const mIsOpen = mobileOpenMenu === n.label;
                return (
                  <div key={n.label}>
                    <button
                      type="button"
                      onClick={() => setMobileOpenMenu((v) => (v === n.label ? null : n.label))}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
                    >
                      {n.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mIsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mIsOpen && (
                      <div className="ml-3 mt-1 space-y-3 border-l border-white/10 pl-3 pb-2">
                        {n.mega.map((group) => (
                          <div key={group.title}>
                            <div className="px-3 pt-1 text-[10px] font-black uppercase tracking-wider text-orange-yellow/80">
                              {group.title}
                            </div>
                            <div className="mt-1 space-y-0.5">
                              {group.items.map((c) =>
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
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if ("children" in n && n.children) {
                const mIsOpen = mobileOpenMenu === n.label;
                return (
                  <div key={n.label}>
                    <button
                      type="button"
                      onClick={() => setMobileOpenMenu((v) => (v === n.label ? null : n.label))}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-orange-yellow"
                    >
                      {n.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mIsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mIsOpen && (
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
