import {
  ArrowRight,
  ChevronRight,
  Building2,
  Users,
  Database,
  BarChart3,
  ShoppingBag,
  Smartphone,
  GraduationCap,
  Leaf,
  HeartPulse,
  Store,
  Factory,
  Vote,
  LineChart,
  Rocket,
  Search,
  Compass,
  PenTool,
  Layers,
  Code2,
  Cloud,
  ShieldCheck,
  Wrench,
  ServerCog,
  Boxes,
  Cpu,
  Radio,
  Lock,
  Plug,
  Activity,
  Gauge,
  Briefcase,
  Handshake,
  Globe2,
  GitBranch,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-20 text-white lg:pt-52 lg:pb-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1.5 text-[13px] font-medium text-white/60 animate-fade-up"
        >
          <Link to="/" className="hover:text-orange-yellow transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Services</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Custom Software Development</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              Custom Software Development
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build Software That{" "}
              <span className="text-gradient-warm">Fits Your Business</span>,
              Not the Other Way Around
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Every business is unique, and so are its challenges. At Datagrid,
              we design, develop, and scale custom business applications that
              align perfectly with your processes, goals, and growth plans.
              From startup ideas to enterprise-grade platforms serving millions
              of users, we transform complex requirements into reliable digital
              solutions.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div
                className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                aria-hidden
              />
              <div className="absolute inset-0 bg-grid-light opacity-40 rounded-3xl" aria-hidden />

              {/* connector svg */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f7a626" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ed5816" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#hero-line)" strokeWidth="1.2" strokeDasharray="3 4">
                  <path d="M200 200 L80 90" />
                  <path d="M200 200 L320 90" />
                  <path d="M200 200 L80 310" />
                  <path d="M200 200 L320 310" />
                  <path d="M200 200 L200 40" />
                  <path d="M200 200 L200 360" />
                </g>
              </svg>

              {/* central core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-2xl bg-orange-bright/30 blur-xl" />
                  <div
                    className="relative flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/20 text-white shadow-glow"
                    style={{ background: "var(--gradient-pixel)" }}
                  >
                    <Cpu className="h-7 w-7" />
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Core</span>
                  </div>
                </div>
              </div>

              {/* orbit nodes */}
              {[
                { icon: Layers, top: "6%", left: "44%", label: "Modules" },
                { icon: Database, top: "18%", left: "8%", label: "Data" },
                { icon: Cloud, top: "18%", left: "72%", label: "Cloud" },
                { icon: BarChart3, top: "72%", left: "8%", label: "Insights" },
                { icon: Plug, top: "72%", left: "72%", label: "APIs" },
                { icon: ShieldCheck, top: "84%", left: "44%", label: "Secure" },
              ].map((n, i) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.label}
                    className="absolute flex flex-col items-center gap-1"
                    style={{ top: n.top, left: n.left, animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-navy-deep/80 text-orange-yellow shadow-navy backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                      {n.label}
                    </span>
                  </div>
                );
              })}

              {/* mini dashboard blocks */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-white/15 bg-navy-deep/85 p-3 shadow-navy backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-yellow">
                  <Activity className="h-3 w-3" /> Uptime 99.99%
                </div>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-4 w-1.5 rounded-sm"
                      style={{
                        background: i % 3 === 0 ? "#f7a626" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
              <span className="h-1 w-6 rounded-sm bg-orange-bright" />
              Tailored Engineering
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Custom Software. Tailored Workflows.{" "}
              <span className="text-gradient-warm">Unlimited Possibilities.</span>
            </h2>
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-deep">
              Custom Software Built Around Your Business
            </h3>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Off-the-shelf products often force organizations to change
                their processes to fit the software. We believe technology
                should adapt to your business—not the other way around.
              </p>
              <p>
                For over 15 years, Datagrid has helped organizations across
                the globe build tailor-made digital platforms that automate
                operations, improve customer experiences, unlock new revenue
                streams, and support long-term growth.
              </p>
              <p>
                Whether you are launching a new product, modernizing legacy
                systems, or digitizing complex workflows, our team provides
                complete ownership—from business analysis and architecture to
                development, deployment, scaling, and ongoing support.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute inset-0 rounded-3xl bg-grid-light opacity-[0.05]" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy-deep">
                    <Sparkles className="h-3.5 w-3.5 text-orange-bright" />
                    Workflow Studio
                  </div>
                  <span className="rounded-full bg-orange-yellow/15 px-2 py-0.5 text-[10px] font-bold text-orange-bright">
                    LIVE
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { icon: Search, label: "Discover" },
                    { icon: PenTool, label: "Design" },
                    { icon: Code2, label: "Build" },
                    { icon: Cloud, label: "Deploy" },
                    { icon: Gauge, label: "Scale" },
                  ].map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.label}
                        className="group flex items-center gap-3 rounded-xl border border-border bg-background/80 p-3 transition-all hover:border-orange-bright/40 hover:shadow-glow"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-bright to-orange-yellow text-white">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-foreground">
                            {s.label}
                          </div>
                          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-orange-bright to-orange-yellow"
                              style={{ width: `${(i + 1) * 18 + 10}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          0{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What We Build ---------------- */
const buildCategories = [
  {
    icon: Building2,
    title: "Enterprise Applications",
    items: [
      "Business process automation systems",
      "Internal management platforms",
      "Multi-location enterprise applications",
      "Workflow and approval systems",
      "Digital transformation initiatives",
    ],
  },
  {
    icon: Users,
    title: "Customer & Partner Portals",
    items: [
      "Self-service portals",
      "Vendor and dealer management systems",
      "Community and membership platforms",
      "B2B and B2C ecosystems",
      "Franchise and distributor networks",
    ],
  },
  {
    icon: Boxes,
    title: "ERP & CRM Solutions",
    items: [
      "Inventory management",
      "Procurement systems",
      "Sales and CRM platforms",
      "HR and payroll solutions",
      "Financial and operational dashboards",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    items: [
      "Business intelligence solutions",
      "Executive dashboards",
      "Survey and data collection systems",
      "Data warehousing and reporting",
      "Real-time analytics platforms",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Marketplace Platforms",
    items: [
      "Multi-vendor marketplaces",
      "Digital catalog solutions",
      "Order management systems",
      "Loyalty and rewards programs",
      "Omnichannel commerce platforms",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Cloud Applications",
    items: [
      "Android and iOS applications",
      "Progressive Web Apps (PWA)",
      "Field force automation systems",
      "Offline-first applications",
      "Cloud-native platforms",
    ],
  },
];

function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Capabilities
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What We Build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            We develop scalable, secure, and future-ready business solutions
            including:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {buildCategories.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-pixel)" }}
                  aria-hidden
                />
                <div className="relative flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">
                    {c.title}
                  </h3>
                </div>
                <ul className="relative mt-5 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-orange-bright" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industry Expertise ---------------- */
const industries = [
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    text: "Learning management systems, student engagement platforms, career discovery portals, certification systems, and digital learning ecosystems.",
  },
  {
    icon: Leaf,
    title: "Agriculture & AgriTech",
    text: "Farmer loyalty programs, supply-chain visibility, product traceability, dealer networks, and rural digital engagement platforms.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    text: "Healthcare dashboards, claims analytics, compliance systems, survey platforms, patient engagement tools, and operational automation.",
  },
  {
    icon: Store,
    title: "E-commerce & Retail",
    text: "Marketplaces, digital catalogs, inventory management, customer portals, order processing systems, and omnichannel commerce solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Distribution",
    text: "ERP platforms, dealer management systems, production workflows, inventory optimization, and channel partner ecosystems.",
  },
  {
    icon: Vote,
    title: "Political & Community Organizations",
    text: "Volunteer management systems, survey tools, communication platforms, analytics dashboards, and constituency engagement solutions.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence & Analytics",
    text: "Executive dashboards, reporting platforms, data visualization systems, KPI tracking, and real-time decision-making tools.",
  },
  {
    icon: Rocket,
    title: "Startups & Innovative Products",
    text: "From MVP development to enterprise-scale platforms, we help founders transform ideas into market-ready digital products.",
  },
];

function IndustryExpertise() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Industry Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Over the years, we have delivered custom business solutions across
            diverse industries and business models.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.title}
                className="group relative flex gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative flex-none">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-deep text-orange-yellow shadow-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 rounded-md bg-orange-bright px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-extrabold leading-tight text-foreground group-hover:text-orange-bright">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ind.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Idea to Enterprise Scale ---------------- */
const journeySteps = [
  { icon: Briefcase, label: "Business analysis and consulting" },
  { icon: Compass, label: "Product discovery workshops" },
  { icon: PenTool, label: "UI/UX design" },
  { icon: Layers, label: "Software architecture" },
  { icon: Code2, label: "Full-stack development" },
  { icon: Smartphone, label: "Mobile applications" },
  { icon: Cloud, label: "Cloud infrastructure" },
  { icon: ShieldCheck, label: "Quality assurance and automation" },
  { icon: GitBranch, label: "DevOps and deployment" },
  { icon: Wrench, label: "Ongoing support and enhancements" },
];

function IdeaToEnterprise() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
              <span className="h-1 w-6 rounded-sm bg-orange-bright" />
              Delivery Journey
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From Idea to Enterprise Scale
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Some companies approach us with detailed requirements. Others
                come with nothing more than an idea. We support both.
              </p>
              <p>
                Our team works closely with stakeholders to understand
                business objectives, identify opportunities, define workflows,
                design user experiences, and build scalable technology
                foundations that support long-term growth.
              </p>
            </div>
            <h3 className="mt-8 font-display text-lg font-semibold text-navy-deep">
              Our end-to-end services include:
            </h3>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              {/* connector line */}
              <div
                className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-orange-bright via-orange-yellow to-transparent md:block"
                aria-hidden
              />
              <ol className="space-y-4">
                {journeySteps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li
                      key={s.label}
                      className="group relative flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-base font-bold text-foreground">
                          {s.label}
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Built to Scale (dark) ---------------- */
const scaleFeatures = [
  { icon: ServerCog, label: "High availability and fault tolerance" },
  { icon: Cloud, label: "Cloud-native scalability" },
  { icon: Boxes, label: "Multi-tenant architectures" },
  { icon: Activity, label: "Real-time analytics" },
  { icon: Lock, label: "Secure data management" },
  { icon: Plug, label: "API-first integrations" },
  { icon: Radio, label: "Distributed processing" },
  { icon: Gauge, label: "Performance optimization" },
];

function BuiltToScale() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div
        className="absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-yellow">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Engineered for Scale
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Built to Scale from <span className="text-gradient-warm">Day One</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 lg:text-lg">
            We believe scalability should never be an afterthought. Our
            engineering practices focus on creating solutions that can evolve
            with your business—from hundreds of users to millions of daily
            transactions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Whether it is a startup MVP or an enterprise platform, we build
            systems designed for:
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scaleFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-orange-yellow/40 hover:bg-white/[0.06] animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-sm font-bold leading-snug text-white">
                  {f.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur lg:p-8">
          <p className="text-base leading-relaxed text-white/80 lg:text-lg">
            Our experience includes designing and supporting platforms capable
            of handling large-scale user bases, high transaction volumes, and
            complex operational workflows, including systems engineered to
            support{" "}
            <span className="font-bold text-orange-yellow">
              tens of millions of registrations and interactions per day
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Businesses Choose Datagrid ---------------- */
const reasons = [
  {
    icon: Briefcase,
    title: "Business-First Thinking",
    text: "We understand business problems before writing code.",
  },
  {
    icon: Handshake,
    title: "Complete Ownership",
    text: "From strategy to support, we remain your long-term technology partner.",
  },
  {
    icon: Layers,
    title: "Cross-Industry Experience",
    text: "Experience across education, agriculture, healthcare, retail, manufacturing, associations, politics, and enterprise operations.",
  },
  {
    icon: Code2,
    title: "Open Technology Ecosystem",
    text: "We leverage modern open-source technologies to build scalable and cost-effective solutions.",
  },
  {
    icon: Globe2,
    title: "Global Delivery Capability",
    text: "Dedicated teams serving organizations across multiple countries and time zones.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Architecture",
    text: "Applications designed to evolve, integrate, and scale with changing business needs.",
  },
];

function WhyDatagrid() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Why Datagrid
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Businesses Choose Datagrid
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <article
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-pixel)" }}
                  aria-hidden
                />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-extrabold leading-tight text-foreground">
                  {r.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div
        className="absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Transform Your Business with{" "}
          <span className="text-gradient-warm">Custom Technology</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
          Whether you need a customer portal, ERP system, analytics platform,
          marketplace, mobile application, or an entirely new digital product,
          Datagrid brings the experience, technology expertise, and engineering
          excellence to turn your vision into reality.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          Let's build a solution that is uniquely yours—and ready for
          tomorrow's growth.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export function CustomSoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhatWeBuild />
        <IndustryExpertise />
        <IdeaToEnterprise />
        <BuiltToScale />
        <WhyDatagrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
