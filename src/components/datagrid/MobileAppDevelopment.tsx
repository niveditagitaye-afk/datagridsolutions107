import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Layers,
  Code2,
  Globe2,
  Building2,
  ShoppingCart,
  Signal,
  Brain,
  Rocket,
  Search,
  Palette,
  Wrench,
  ShieldCheck,
  CloudUpload,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Leaf,
  Factory,
  Utensils,
  Users,
  Home,
  Wallet,
  Handshake,
  Sparkles,
  Cpu,
  Cloud,
  Database,
  Server,
  Zap,
  CheckCircle2,
  Wifi,
  BarChart3,
  Lock,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero Visual: Phone Mockup ---------------- */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow */}
      <div
        className="absolute -inset-10 rounded-[3rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      {/* Grid backdrop */}
      <div className="absolute inset-0 rounded-[3rem] bg-grid-light opacity-30" aria-hidden />

      <div className="relative flex items-center justify-center gap-4">
        {/* Back phone */}
        <div className="hidden translate-y-8 sm:block">
          <div className="w-40 rounded-[2rem] border border-white/15 bg-navy-deep/70 p-2 shadow-navy backdrop-blur">
            <div className="rounded-[1.6rem] bg-white/95 p-3">
              <div className="mb-2 h-1.5 w-8 rounded-full bg-navy/20" />
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-gradient-to-br from-orange-bright/20 to-orange-yellow/10" />
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-10 rounded-md bg-navy/5" />
                  <div className="h-10 rounded-md bg-navy/5" />
                </div>
                <div className="h-2 w-3/4 rounded bg-navy/10" />
                <div className="h-2 w-1/2 rounded bg-navy/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Front phone (main) */}
        <div className="animate-fade-up">
          <div className="w-56 rounded-[2.4rem] border border-white/20 bg-white/10 p-2 shadow-navy backdrop-blur-xl sm:w-64">
            <div className="rounded-[2rem] bg-white p-3.5">
              {/* Notch */}
              <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-navy/20" />
              {/* Header row */}
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-navy/50">
                    Welcome
                  </div>
                  <div className="text-sm font-bold text-navy">Datagrid App</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-bright to-orange-yellow" />
              </div>
              {/* Hero card */}
              <div className="mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy-deep p-3 text-white">
                <div className="text-[10px] uppercase tracking-widest text-orange-yellow">Today</div>
                <div className="mt-1 text-lg font-extrabold">$ 12,480</div>
                <div className="mt-1 text-[10px] text-white/70">+8.4% vs last week</div>
                <div className="mt-2 flex gap-0.5">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-sm bg-orange-yellow/70"
                      style={{ height: `${8 + ((i * 7) % 20)}px` }}
                    />
                  ))}
                </div>
              </div>
              {/* Quick actions */}
              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  { icon: Zap, label: "Sync" },
                  { icon: Wifi, label: "Live" },
                  { icon: BarChart3, label: "Stats" },
                  { icon: Lock, label: "Secure" },
                ].map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-yellow/15 text-orange-bright">
                      <a.icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-[8px] font-semibold text-navy/60">{a.label}</div>
                  </div>
                ))}
              </div>
              {/* List */}
              <div className="space-y-2">
                {[
                  { t: "Field team check-in", s: "3 mins ago" },
                  { t: "New order · #10421", s: "12 mins ago" },
                  { t: "Sync completed", s: "Offline queue clear" },
                ].map((it) => (
                  <div key={it.t} className="flex items-center gap-2 rounded-lg bg-navy/5 p-2">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-br from-navy to-navy-deep" />
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-navy">{it.t}</div>
                      <div className="text-[9px] text-navy/50">{it.s}</div>
                    </div>
                    <ChevronRight className="h-3 w-3 text-navy/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute -left-2 top-6 hidden animate-fade-up rounded-xl border border-white/15 bg-white/95 p-2.5 shadow-navy sm:block">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-bright/15 text-orange-bright">
              <CloudUpload className="h-3.5 w-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-navy">Cloud Sync</div>
              <div className="text-[9px] text-navy/50">API · realtime</div>
            </div>
          </div>
        </div>
        <div className="absolute -right-2 bottom-8 hidden animate-fade-up rounded-xl border border-white/15 bg-white/95 p-2.5 shadow-navy sm:block">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy/10 text-navy">
              <ShieldCheck className="h-3.5 w-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-navy">Encrypted</div>
              <div className="text-[9px] text-navy/50">End-to-end</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Services</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Mobile App Development</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              Mobile App Development
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Mobile Experiences That{" "}
              <span className="bg-gradient-to-r from-orange-bright via-orange-warm to-orange-yellow bg-clip-text text-transparent">
                Engage, Scale, and Deliver Results
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              From consumer applications and enterprise mobility solutions to AI-powered platforms and offline-first field applications, Datagrid develops high-performance mobile experiences across Android, iOS, Flutter, React Native, and Progressive Web Apps (PWA).
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              We help businesses transform ideas into intuitive, secure, and scalable mobile products that users love and organizations trust.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-yellow/30 bg-orange-yellow/10 px-4 py-2 text-sm font-semibold text-orange-yellow">
              <Sparkles className="h-4 w-4" />
              One vision. Any platform. Unlimited possibilities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            Overview
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Mobile Solutions for Modern Businesses
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
            <p>
              Mobile is no longer an extension of business — it&rsquo;s often the primary customer and employee touchpoint.
            </p>
            <p>
              At Datagrid, we design and build mobile applications that combine exceptional user experiences with enterprise-grade performance, security, and scalability.
            </p>
            <p>
              Whether you need a native application, a cross-platform solution, or a progressive web app, our engineering teams deliver products that are built for growth and long-term success.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-navy/10 bg-gradient-to-br from-white to-navy/[0.03] p-6 shadow-navy/40 lg:p-8">
            <div className="absolute inset-0 rounded-3xl bg-grid-light opacity-40" aria-hidden />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy">
                  <Smartphone className="h-4 w-4 text-orange-bright" />
                  User Journey
                </div>
                <div className="text-[10px] font-semibold text-navy/40">v2.4 · Production</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { s: "Discover", c: "bg-orange-yellow/20 text-orange-bright" },
                  { s: "Engage", c: "bg-navy/10 text-navy" },
                  { s: "Convert", c: "bg-orange-bright/15 text-orange-bright" },
                ].map((st) => (
                  <div key={st.s} className={`rounded-xl px-3 py-3 text-center ${st.c}`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest">{st.s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { icon: Layers, t: "Design system", s: "Reusable UI kit across screens" },
                  { icon: CloudUpload, t: "Realtime sync", s: "Offline queue · conflict-free" },
                  { icon: ShieldCheck, t: "Secure by default", s: "Encrypted storage & transit" },
                  { icon: BarChart3, t: "Product analytics", s: "Funnels, retention, cohorts" },
                ].map((r) => (
                  <div
                    key={r.t}
                    className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-navy/50"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/[0.06] text-navy">
                      <r.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-navy">{r.t}</div>
                      <div className="text-[12px] text-foreground/60">{r.s}</div>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-orange-bright" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
const capabilities = [
  {
    icon: Smartphone,
    title: "Native iOS & Android App Development",
    desc: "Build powerful native applications optimized for performance, scalability, and seamless integration with the Android and iOS ecosystem.",
    labelHead: "Ideal for",
    items: [
      "Premium brands & enterprise solutions",
      "Field force automation",
      "Retail and commerce apps",
      "Real-time tracking systems",
      "Business productivity tools",
      "Healthcare applications",
      "Financial services",
      "Subscription platforms",
    ],
  },
  {
    icon: Layers,
    title: "Flutter App Development",
    desc: "Develop beautiful cross-platform applications with a single codebase while maintaining native-like performance and experiences.",
    labelHead: "Benefits",
    items: [
      "Faster time to market",
      "Lower development costs",
      "Consistent UI across devices",
      "Simplified maintenance",
      "Rapid feature delivery",
    ],
  },
  {
    icon: Code2,
    title: "React Native Development",
    desc: "Build scalable mobile products with reusable components and efficient cross-platform delivery models.",
    labelHead: "Ideal for",
    items: [
      "Startup MVPs",
      "Business applications",
      "Marketplace platforms",
      "Social and community apps",
      "Customer engagement solutions",
    ],
  },
  {
    icon: Globe2,
    title: "Progressive Web Apps (PWA)",
    desc: "Create installable, mobile-first web experiences that work seamlessly across devices — even in low-connectivity environments.",
    labelHead: "Capabilities",
    items: [
      "Offline functionality",
      "Fast loading experiences",
      "No app-store dependency",
      "Lower maintenance costs",
      "Cross-device compatibility",
    ],
  },
];

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.004_90)] py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            Capabilities
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Our Mobile Development Capabilities
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Native, cross-platform, and progressive — pick the right approach for every product and audience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
            >
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: "var(--gradient-pixel)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-orange-yellow shadow-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-extrabold leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
                <div className="mt-5 text-[11px] font-bold uppercase tracking-widest text-orange-bright">
                  {c.labelHead}
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[13px] text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-bright" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- App Types Bento ---------------- */
const appTypes = [
  {
    icon: Building2,
    title: "Enterprise Applications",
    items: [
      "ERP and workflow apps",
      "Employee self-service platforms",
      "Internal communication systems",
      "Business automation solutions",
    ],
    accent: "from-navy to-navy-deep",
  },
  {
    icon: ShoppingCart,
    title: "Customer Applications",
    items: [
      "E-commerce apps",
      "Loyalty and rewards platforms",
      "Community engagement apps",
      "Membership solutions",
    ],
    accent: "from-orange-bright to-orange-warm",
  },
  {
    icon: Signal,
    title: "Field Force & Offline Applications",
    items: [
      "Survey platforms",
      "Sales automation tools",
      "Agricultural solutions",
      "Healthcare field operations",
      "Rural connectivity applications",
    ],
    accent: "from-navy-deep to-navy",
  },
  {
    icon: Brain,
    title: "AI-Powered Mobile Apps",
    items: [
      "Intelligent assistants",
      "Computer vision applications",
      "Recommendation systems",
      "Personalized user experiences",
      "Smart automation tools",
    ],
    accent: "from-orange-warm to-orange-yellow",
  },
  {
    icon: Rocket,
    title: "Startup & Product Apps",
    items: [
      "MVP development",
      "Marketplace platforms",
      "Subscription businesses",
      "SaaS companion applications",
      "Consumer digital products",
    ],
    accent: "from-navy to-orange-bright",
  },
];

function AppTypes() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            What We Build
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            We Build Every Type of Mobile Application
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Our teams have delivered mobile solutions across industries and business models.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {appTypes.map((t, idx) => {
            const layout =
              idx === 0
                ? "md:col-span-3"
                : idx === 1
                ? "md:col-span-3"
                : idx === 2
                ? "md:col-span-4"
                : idx === 3
                ? "md:col-span-2"
                : "md:col-span-6";
            return (
              <div
                key={t.title}
                className={`group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy ${layout}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-navy ${t.accent}`}
                  >
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold leading-tight">{t.title}</h3>
                </div>
                <ul className={`grid gap-1.5 text-[13px] text-foreground/75 ${idx === 4 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-orange-bright" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
const industries = [
  { icon: HeartPulse, label: "Healthcare & Life Sciences" },
  { icon: GraduationCap, label: "Education & EdTech" },
  { icon: Leaf, label: "Agriculture & AgriTech" },
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Utensils, label: "Hospitality" },
  { icon: Users, label: "Associations & Events" },
  { icon: Home, label: "Real Estate" },
  { icon: Wallet, label: "Financial Services" },
  { icon: Handshake, label: "Community Organizations" },
];

function Industries() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.004_90)] py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            Industry Experience
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Industry Experience
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Our mobile teams have successfully built solutions for:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((i, idx) => (
            <div
              key={i.label}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy/5 to-orange-yellow/10 text-navy transition-colors group-hover:text-orange-bright">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="text-[13px] font-bold text-navy">{i.label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base text-foreground/70">
          This experience enables us to understand both user expectations and business requirements across different domains.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
const process = [
  { icon: Search, title: "Discover", desc: "Understanding business goals, users, workflows, and technical requirements." },
  { icon: Palette, title: "Design", desc: "Creating intuitive, engaging, and conversion-focused experiences." },
  { icon: Code2, title: "Develop", desc: "Building scalable applications using modern engineering practices." },
  { icon: ShieldCheck, title: "Test", desc: "Comprehensive functional, performance, security, and device testing." },
  { icon: CloudUpload, title: "Deploy", desc: "Publishing to app stores and configuring cloud infrastructure." },
  { icon: TrendingUp, title: "Grow", desc: "Continuous improvements, analytics, maintenance, and feature expansion." },
];

function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            How We Work
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Our Mobile Development Process
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, oklch(from var(--navy) l c h / 0.25) 0 6px, transparent 6px 12px)",
            }}
            aria-hidden
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((p, idx) => (
              <div key={p.title} className="relative">
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-navy/10 bg-white text-navy shadow-navy transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-bright/40 group-hover:text-orange-bright">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-bright to-orange-warm text-[10px] font-extrabold text-white shadow-glow">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/70">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Datagrid ---------------- */
const whyReasons = [
  { icon: Layers, title: "Platform Agnostic Expertise", desc: "Native, cross-platform, and web-based mobile solutions under one roof." },
  { icon: Handshake, title: "End-to-End Delivery", desc: "From business analysis and UI/UX design to deployment and long-term support." },
  { icon: ShieldCheck, title: "Enterprise-Grade Engineering", desc: "Secure, scalable, and maintainable architectures built for growth." },
  { icon: Brain, title: "AI-Enabled Innovation", desc: "Intelligent features integrated seamlessly into mobile experiences." },
  { icon: Zap, title: "Agile Development Approach", desc: "Faster iterations, transparent communication, and predictable outcomes." },
  { icon: Globe2, title: "Global Delivery Experience", desc: "Supporting clients across multiple countries, industries, and time zones." },
];

function WhyDatagrid() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.004_90)] py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            Why Datagrid
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Why Businesses Choose Datagrid
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((r) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
            >
              <div
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: "var(--gradient-pixel)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-orange-yellow shadow-navy">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold leading-tight">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Technologies ---------------- */
const techGroups = [
  { icon: Smartphone, title: "Native Platforms", chips: ["Android", "Kotlin", "Java", "iOS", "Swift"] },
  { icon: Layers, title: "Cross-Platform Frameworks", chips: ["Flutter", "React Native"] },
  { icon: Globe2, title: "Progressive Web Technologies", chips: ["PWA", "Service Workers", "Offline Storage", "Web Push"] },
  { icon: Server, title: "Backend & APIs", chips: ["Python", "Django", "Flask", "FastAPI", "Laravel", "Node.js"] },
  { icon: Cloud, title: "Cloud & DevOps", chips: ["AWS", "Docker", "Kubernetes", "CI/CD", "Firebase"] },
  { icon: Database, title: "Data & Analytics", chips: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
];

function Technologies() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
            <Cpu className="h-3 w-3 text-orange-bright" />
            Stack
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Technologies We Work With
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-white to-navy/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-orange-yellow shadow-navy">
                  <g.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-base font-extrabold text-navy">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full border border-navy/10 bg-white px-3 py-1 text-[12px] font-semibold text-navy/80 transition-colors hover:border-orange-bright/40 hover:text-orange-bright"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Built to Scale (dark) ---------------- */
function BuiltToScale() {
  const focus = [
    { icon: Zap, t: "High-performance architecture" },
    { icon: ShieldCheck, t: "Secure data handling" },
    { icon: Wifi, t: "Offline capabilities" },
    { icon: Cloud, t: "Cloud scalability" },
    { icon: Code2, t: "API-first development" },
    { icon: BarChart3, t: "Analytics and monitoring" },
    { icon: Wrench, t: "Long-term maintainability" },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-yellow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Built to Scale
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Mobile Apps Built to Scale
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            Whether you are building an MVP, digitizing enterprise operations, or launching a consumer platform, our engineering practices ensure your application is ready to grow with your business.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((f) => (
              <div
                key={f.t}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-orange-yellow/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-yellow/15 text-orange-yellow">
                  <f.icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-white/90">{f.t}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-white/70">
            From thousands of users to millions of interactions, we build mobile solutions designed for real-world scale.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl lg:p-8">
            <div className="absolute inset-0 rounded-3xl bg-grid-light opacity-30" aria-hidden />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-[11px] font-bold uppercase tracking-widest text-orange-yellow">
                  Mobile Architecture
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live
                </div>
              </div>
              {/* App layer */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">App Layer</div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["iOS", "Android", "PWA"].map((p) => (
                    <div
                      key={p}
                      className="rounded-lg bg-gradient-to-br from-navy to-navy-deep px-3 py-2 text-center text-xs font-bold text-white shadow-navy"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              {/* Connector */}
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-orange-yellow/60 to-transparent" />
              </div>
              {/* API layer */}
              <div className="rounded-2xl border border-orange-yellow/25 bg-orange-yellow/5 p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-orange-yellow">API Gateway</div>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {["Auth", "Sync", "Realtime", "Push"].map((p) => (
                    <div
                      key={p}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-center text-[11px] font-semibold text-white/85"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              {/* Connector */}
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-orange-yellow/60 to-transparent" />
              </div>
              {/* Cloud layer */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Cloud & Data</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[
                    { i: Cloud, t: "AWS · Firebase" },
                    { i: Database, t: "Postgres · Mongo" },
                    { i: ShieldCheck, t: "Encrypted" },
                    { i: BarChart3, t: "Analytics" },
                  ].map((c) => (
                    <div
                      key={c.t}
                      className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-[11px] font-semibold text-white/85"
                    >
                      <c.i className="h-3.5 w-3.5 text-orange-yellow" />
                      {c.t}
                    </div>
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

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-navy-deep p-10 text-white shadow-navy lg:p-16">
          <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
          <div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pixel)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-yellow backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Let&rsquo;s Build Together
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Turn Your Mobile App Idea Into a Scalable Digital Product
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              Whether you need a native application, a cross-platform solution, or a Progressive Web App, Datagrid provides the expertise, technology, and execution capabilities to bring your vision to life.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-yellow/30 bg-orange-yellow/10 px-4 py-1.5 text-sm font-semibold text-orange-yellow">
              Build once. Reach everywhere. Grow without limits.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Capabilities />
        <AppTypes />
        <Industries />
        <Process />
        <WhyDatagrid />
        <Technologies />
        <BuiltToScale />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
