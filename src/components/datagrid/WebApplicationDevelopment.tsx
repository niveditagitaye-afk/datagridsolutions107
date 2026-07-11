import {
  ArrowRight,
  ChevronRight,
  Layers,
  Code2,
  Cloud,
  Database,
  Server,
  Cpu,
  ShieldCheck,
  Rocket,
  Users,
  ShoppingCart,
  Building2,
  Globe2,
  BarChart3,
  Zap,
  Sparkles,
  Search,
  Palette,
  Wrench,
  CloudUpload,
  TrendingUp,
  CheckCircle2,
  HeartPulse,
  GraduationCap,
  Leaf,
  Factory,
  Wallet,
  Home,
  Handshake,
  Store,
  Boxes,
  Workflow,
  Lock,
  Gauge,
  Network,
  Braces,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero Visual: Web App Architecture ---------------- */
function WebArchVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute -inset-10 rounded-[2.5rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-[2.5rem] bg-grid-light opacity-30" aria-hidden />

      <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-navy backdrop-blur-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 rounded-t-xl bg-navy-deep/70 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-bright/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-yellow/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="ml-3 flex-1 rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70">
            app.datagrid.io / dashboard
          </div>
        </div>

        {/* Dashboard body */}
        <div className="rounded-b-xl bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="h-3 w-32 rounded bg-navy/80" />
              <div className="mt-1.5 h-2 w-24 rounded bg-navy/20" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-6 w-6 rounded-md bg-orange-bright/20" />
              <div className="h-6 w-6 rounded-md bg-navy/10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-navy/10 p-2">
              <BarChart3 className="mb-1 h-4 w-4 text-orange-bright" />
              <div className="h-1.5 w-full rounded bg-navy/10" />
              <div className="mt-1 h-3 w-10 rounded bg-navy/80" />
            </div>
            <div className="rounded-lg border border-navy/10 p-2">
              <Users className="mb-1 h-4 w-4 text-navy" />
              <div className="h-1.5 w-full rounded bg-navy/10" />
              <div className="mt-1 h-3 w-8 rounded bg-navy/80" />
            </div>
            <div className="rounded-lg border border-navy/10 p-2">
              <Zap className="mb-1 h-4 w-4 text-orange-yellow" />
              <div className="h-1.5 w-full rounded bg-navy/10" />
              <div className="mt-1 h-3 w-12 rounded bg-navy/80" />
            </div>
          </div>

          <div className="mt-3 rounded-lg border border-navy/10 bg-gradient-to-br from-navy/[.03] to-orange-bright/[.05] p-3">
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-navy to-orange-bright"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-navy/70">
            <span className="inline-flex items-center gap-1 rounded bg-navy/5 px-1.5 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              API 200ms
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-navy/5 px-1.5 py-0.5">
              <Cloud className="h-2.5 w-2.5" /> AWS · us-east
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-navy/5 px-1.5 py-0.5">
              <Database className="h-2.5 w-2.5" /> PG
            </span>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-16 hidden animate-fade-up rounded-lg border border-white/20 bg-white/95 px-3 py-2 shadow-navy sm:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-navy">
          <Server className="h-3.5 w-3.5 text-orange-bright" /> Microservices
        </div>
      </div>
      <div className="absolute -right-4 bottom-12 hidden animate-fade-up rounded-lg border border-white/20 bg-white/95 px-3 py-2 shadow-navy sm:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-navy">
          <ShieldCheck className="h-3.5 w-3.5 text-orange-bright" /> SOC 2 · ISO 27001
        </div>
      </div>
      <div className="absolute -right-6 top-8 hidden rounded-lg border border-white/20 bg-white/95 px-3 py-2 shadow-navy md:block">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-navy">
          <Cpu className="h-3.5 w-3.5 text-orange-bright" /> 99.99% uptime
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 text-white lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-xs font-medium text-white/60">
          <Link to="/" className="hover:text-orange-yellow">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="hover:text-orange-yellow">Services</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">Web Application Development</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">
              <Globe2 className="h-3 w-3" /> Web Application Development
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Scalable Web Applications That{" "}
              <span className="bg-gradient-to-r from-orange-bright via-orange-yellow to-orange-light bg-clip-text text-transparent">
                Power Modern Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              From startup MVPs and customer portals to enterprise platforms serving millions of users,
              Datagrid develops secure, high-performance web applications tailored to unique business requirements.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              Using modern technologies and proven engineering practices, we create digital solutions
              that are reliable, scalable, and built for long-term growth.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-orange-bright/30 bg-orange-bright/10 px-4 py-2.5 text-sm font-semibold text-orange-yellow">
              <Sparkles className="h-4 w-4" />
              From idea to enterprise scale — everything on the web, built right.
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>

          <div className="relative">
            <WebArchVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section wrapper ---------------- */
function Section({
  eyebrow,
  title,
  intro,
  children,
  dark = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 lg:py-24 ${dark ? "bg-navy-deep text-white" : "bg-background"}`}
    >
      {dark && <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
              dark ? "border-white/15 bg-white/5 text-orange-yellow" : "border-navy/15 bg-navy/5 text-navy"
            }`}>
              {eyebrow}
            </span>
          )}
          <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : ""}`}>
            {title}
          </h2>
          {intro && (
            <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-muted-foreground"}`}>
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ---------------- Intro Section ---------------- */
function Intro() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
            Custom Web Applications
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Custom Web Applications for Every Business Need
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Every organization has unique processes, customers, and growth ambitions. Off-the-shelf
              software often creates limitations, while custom web applications unlock flexibility,
              efficiency, and competitive advantage.
            </p>
            <p>
              At Datagrid, we design and develop web applications that automate operations, improve
              customer experiences, and enable organizations to scale confidently.
            </p>
            <p>
              Whether it's an internal business system, a customer-facing platform, a SaaS product,
              or an enterprise portal, we build solutions that evolve with your business.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pixel)" }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-navy">
            <div className="flex items-center justify-between border-b border-navy/10 pb-3">
              <div className="flex items-center gap-2">
                <MonitorSmartphone className="h-4 w-4 text-orange-bright" />
                <span className="text-sm font-semibold text-navy">Business Workspace</span>
              </div>
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-orange-bright" />
                <span className="h-2 w-2 rounded-full bg-orange-yellow" />
                <span className="h-2 w-2 rounded-full bg-navy/20" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: Workflow, label: "Workflow Automation", tag: "Active" },
                { icon: Users, label: "Customer Portal", tag: "12.4k" },
                { icon: BarChart3, label: "Analytics", tag: "Live" },
                { icon: Boxes, label: "Inventory", tag: "1,240" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="group rounded-xl border border-navy/10 p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-md"
                >
                  <m.icon className="h-4 w-4 text-navy" />
                  <div className="mt-2 text-sm font-semibold text-navy">{m.label}</div>
                  <div className="mt-1 text-[11px] font-mono text-orange-bright">{m.tag}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-gradient-to-br from-navy/[.04] to-orange-bright/[.06] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-navy">Monthly Active Users</span>
                <span className="text-xs font-mono text-orange-bright">+34%</span>
              </div>
              <div className="flex items-end gap-1.5 h-14">
                {[30, 45, 40, 60, 55, 75, 70, 90, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-navy to-orange-bright"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Expertise Cards ---------------- */
const expertise = [
  {
    icon: Building2,
    title: "Enterprise Web Applications",
    desc: "Develop secure and scalable platforms that streamline operations and support complex business workflows.",
    items: [
      "Business process automation",
      "Multi-user enterprise systems",
      "Workflow management platforms",
      "Internal business applications",
      "Role-based access systems",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    desc: "Transform ideas into subscription-based digital products with modern, cloud-native architectures.",
    items: [
      "Multi-tenant SaaS platforms",
      "Subscription and billing systems",
      "Customer onboarding portals",
      "Analytics dashboards",
      "API-first ecosystems",
    ],
  },
  {
    icon: Users,
    title: "Customer & Partner Portals",
    desc: "Build engaging digital experiences for customers, distributors, vendors, and partners.",
    items: [
      "Self-service portals",
      "Vendor management systems",
      "Dealer and distributor platforms",
      "Membership applications",
      "Community ecosystems",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Marketplace Solutions",
    desc: "Create digital commerce experiences designed for growth and customer engagement.",
    items: [
      "B2B and B2C platforms",
      "Marketplace applications",
      "Product catalogs",
      "Order management systems",
      "Loyalty and rewards programs",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Progressive Web Applications (PWA)",
    desc: "Deliver app-like experiences directly through the browser with speed, offline access, and cross-device compatibility.",
    items: [
      "Mobile-first experiences",
      "Offline capabilities",
      "Faster deployment cycles",
      "Lower maintenance costs",
      "No app-store dependency",
    ],
  },
];

function Expertise() {
  return (
    <Section eyebrow="Expertise" title="Our Web Development Expertise">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e) => (
          <div
            key={e.title}
            className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-md">
              <e.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {e.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13px] text-navy/80">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-bright" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Technologies ---------------- */
const techGroups = [
  {
    icon: Server,
    title: "Backend Development",
    items: ["Python", "Django", "Flask", "FastAPI", "Laravel", "PHP", "Node.js"],
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    items: ["React.js", "Vue.js", "Next.js", "Angular", "HTML5 & Modern JavaScript"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Infrastructure Automation"],
  },
];

function Technologies() {
  return (
    <Section eyebrow="Technology Stack" title="Technologies We Specialize In">
      <div className="grid gap-6 md:grid-cols-2">
        {techGroups.map((g) => (
          <div
            key={g.title}
            className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-navy"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-navy/[.03] px-3 py-1.5 text-xs font-semibold text-navy transition-all hover:border-orange-bright/40 hover:bg-orange-bright/10 hover:text-navy-deep"
                >
                  <Braces className="h-3 w-3 text-orange-bright" />
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Applications Bento ---------------- */
const apps = [
  {
    icon: Building2,
    title: "Enterprise Systems",
    items: ["ERP solutions", "CRM platforms", "HRMS applications", "Procurement systems", "Inventory management"],
    span: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Platforms",
    items: [
      "Business intelligence dashboards",
      "Survey systems",
      "Reporting portals",
      "Executive analytics platforms",
      "Data management solutions",
    ],
  },
  {
    icon: Globe2,
    title: "Industry Platforms",
    items: [
      "EdTech ecosystems",
      "Healthcare applications",
      "AgriTech solutions",
      "Community platforms",
      "Hospitality systems",
    ],
  },
  {
    icon: Rocket,
    title: "Startup Products",
    items: ["MVPs", "Marketplaces", "Subscription businesses", "Digital platforms", "Innovative technology products"],
    span: "lg:col-span-2",
  },
];

function Applications() {
  return (
    <Section
      eyebrow="What We Build"
      title="Applications We Build"
      intro="Our teams have delivered web applications across multiple industries and use cases."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((a) => (
          <div
            key={a.title}
            className={`group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy ${a.span || ""}`}
          >
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-30"
              style={{ background: "var(--gradient-pixel)" }}
            />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-md">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{a.title}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13px] text-navy/80">
                    <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-bright" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Performance & Scale (dark) ---------------- */
const perfPillars = [
  { icon: Cloud, label: "Cloud-native architecture" },
  { icon: Network, label: "API-first development" },
  { icon: Gauge, label: "High availability" },
  { icon: ShieldCheck, label: "Security and compliance" },
  { icon: Zap, label: "Performance optimization" },
  { icon: Layers, label: "Multi-tenant scalability" },
  { icon: BarChart3, label: "Real-time analytics" },
  { icon: Workflow, label: "Seamless third-party integrations" },
];

function PerformanceScale() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-96 w-[40rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">
              Engineering
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Built for Performance and Scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              We engineer applications that are ready to support growth from day one.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {perfPillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all hover:border-orange-bright/40 hover:bg-white/10"
                >
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-bright to-orange-yellow text-white">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-white/90">{p.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Whether serving thousands of users or handling millions of daily transactions,
              our engineering practices ensure reliability, maintainability, and long-term scalability.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-white/[.04] p-6 shadow-navy backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-mono text-white/60">SYSTEM · ARCHITECTURE</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2 py-0.5 font-mono text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> healthy
                </span>
              </div>

              {/* Client tier */}
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-3">
                <div className="mb-2 text-[10px] font-mono uppercase tracking-widest text-white/50">Client Tier</div>
                <div className="grid grid-cols-3 gap-2">
                  {["Web App", "Mobile PWA", "Admin Portal"].map((c) => (
                    <div key={c} className="rounded-lg border border-white/10 bg-navy/40 px-2 py-2 text-center text-[11px] font-semibold">
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-2 flex justify-center">
                <div className="h-4 w-px bg-gradient-to-b from-orange-bright to-transparent" />
              </div>

              {/* API / Services */}
              <div className="rounded-xl border border-orange-bright/30 bg-orange-bright/5 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-yellow">API Gateway · Microservices</span>
                  <Lock className="h-3 w-3 text-orange-yellow" />
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {["Auth", "Users", "Billing", "Analytics", "Notify", "Search", "Files", "Webhooks"].map((s) => (
                    <div key={s} className="rounded-md border border-white/10 bg-navy/50 px-1.5 py-1.5 text-center text-[10px] font-semibold">
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-2 flex justify-center">
                <div className="h-4 w-px bg-gradient-to-b from-orange-bright to-transparent" />
              </div>

              {/* Data tier */}
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-3">
                <div className="mb-2 text-[10px] font-mono uppercase tracking-widest text-white/50">Data Tier</div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { i: Database, l: "Postgres" },
                    { i: Database, l: "Redis" },
                    { i: Database, l: "Mongo" },
                    { i: Search, l: "ES" },
                  ].map((d) => (
                    <div key={d.l} className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-navy/40 py-2">
                      <d.i className="h-3.5 w-3.5 text-orange-yellow" />
                      <span className="text-[10px] font-semibold">{d.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-mono text-white/60">
                <div className="rounded bg-white/5 px-2 py-1.5 text-center">99.99% SLA</div>
                <div className="rounded bg-white/5 px-2 py-1.5 text-center">Auto-scale</div>
                <div className="rounded bg-white/5 px-2 py-1.5 text-center">Multi-region</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Datagrid ---------------- */
const whyReasons = [
  { icon: Layers, title: "Technology Agnostic Approach", desc: "We recommend technologies based on business goals, not preferences." },
  { icon: Workflow, title: "End-to-End Delivery", desc: "From business analysis to DevOps and long-term support." },
  { icon: Braces, title: "Open-Source Expertise", desc: "Modern, cost-effective, and scalable technology ecosystems." },
  { icon: Globe2, title: "Global Delivery Experience", desc: "Supporting organizations across multiple industries and geographies." },
  { icon: Sparkles, title: "AI-Enabled Engineering Practices", desc: "Accelerated development, smarter testing, and improved quality processes." },
  { icon: Handshake, title: "Long-Term Technology Partnership", desc: "Many of our clients continue working with us for years as their businesses evolve." },
];

function WhyChoose() {
  return (
    <Section eyebrow="Why Datagrid" title="Why Businesses Choose Datagrid">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyReasons.map((r) => (
          <div
            key={r.title}
            className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-bright/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-md">
              <r.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */
const processSteps = [
  { icon: Search, title: "Discover", desc: "Understanding business challenges and opportunities." },
  { icon: Palette, title: "Design", desc: "Creating intuitive experiences and scalable architectures." },
  { icon: Wrench, title: "Develop", desc: "Building robust applications with agile methodologies." },
  { icon: ShieldCheck, title: "Test", desc: "Ensuring quality, security, and performance." },
  { icon: CloudUpload, title: "Deploy", desc: "Cloud infrastructure, automation, and production readiness." },
  { icon: TrendingUp, title: "Grow", desc: "Continuous improvements, enhancements, and support." },
];

function Process() {
  return (
    <Section eyebrow="Process" title="Our Development Process">
      <div className="relative">
        {/* connector */}
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent lg:block" aria-hidden />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="group relative rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-md">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-center text-[11px] font-mono font-semibold text-orange-bright">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 text-center text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Industries ---------------- */
const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education & EdTech" },
  { icon: Store, label: "Retail & E-commerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Leaf, label: "Agriculture & AgriTech" },
  { icon: Handshake, label: "Associations & Events" },
  { icon: Wallet, label: "Financial Services" },
  { icon: Home, label: "Real Estate" },
  { icon: Users, label: "Community Organizations" },
  { icon: Cloud, label: "Enterprise SaaS Platforms" },
];

function Industries() {
  return (
    <Section
      eyebrow="Industries"
      title="Industries We Serve"
      intro="Our web development expertise spans multiple sectors — from regulated enterprises to fast-moving startups."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-md transition-transform group-hover:scale-110">
              <ind.icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-navy">{ind.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Build a Web Platform That Grows With Your Business
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
          Whether you're launching a startup, modernizing enterprise operations, or creating a digital
          ecosystem for customers and partners, Datagrid delivers web applications that combine
          technology excellence with business impact.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-orange-bright/30 bg-orange-bright/10 px-4 py-2.5 text-sm font-semibold text-orange-yellow">
          <Sparkles className="h-4 w-4" />
          Secure. Scalable. Future-ready. Built for growth.
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow hover:text-orange-yellow"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export function WebApplicationDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Expertise />
        <Technologies />
        <Applications />
        <PerformanceScale />
        <WhyChoose />
        <Process />
        <Industries />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
