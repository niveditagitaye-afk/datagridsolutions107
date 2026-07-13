import {
  ArrowRight,
  ArrowRightCircle,
  ChevronRight,
  Sparkles,
  Rocket,
  Compass,
  ClipboardList,
  Layers,
  Palette,
  Cpu,
  Cloud,
  LineChart,
  CheckCircle2,
  Target,
  Zap,
  Lightbulb,
  ShoppingBag,
  Store,
  Smartphone,
  Brain,
  Building2,
  Globe2,
  Code2,
  Database,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  GitBranch,
  Puzzle,
  Gauge,
  Flag,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero Visual: MVP Launch Dashboard ---------------- */
function MVPHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute -inset-10 rounded-[2.5rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-[2.5rem] bg-grid-light opacity-30" aria-hidden />

      <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-navy backdrop-blur-xl">
        <div className="flex items-center gap-2 rounded-t-xl bg-navy-deep/70 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-bright/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-yellow/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="ml-3 flex-1 rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70">
            launchpad.datagrid.io / sprint-04
          </div>
        </div>

        <div className="rounded-b-xl bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-bright">
                MVP Sprint · Week 4
              </div>
              <div className="mt-1 text-sm font-bold text-navy">Idea → Live Product</div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-yellow" />
              Shipping
            </div>
          </div>

          {/* Roadmap progress */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold text-navy/60">
              <span>PRODUCT ROADMAP</span>
              <span className="text-orange-bright">72%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-warm-cream">
              <div
                className="h-full rounded-full"
                style={{ width: "72%", background: "var(--gradient-pixel)" }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-navy/50">
              <span>Idea</span>
              <span>Prototype</span>
              <span className="text-orange-bright">Launch</span>
              <span>Scale</span>
            </div>
          </div>

          {/* Sprint board */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { l: "To do", n: 4, c: "bg-navy/5 text-navy" },
              { l: "In progress", n: 7, c: "bg-orange-bright/10 text-orange-bright" },
              { l: "Shipped", n: 12, c: "bg-navy text-white" },
            ].map((s) => (
              <div
                key={s.l}
                className={`rounded-lg border border-navy/10 ${s.c} p-2`}
              >
                <div className="text-[9px] font-bold uppercase tracking-wider opacity-80">
                  {s.l}
                </div>
                <div className="mt-0.5 text-lg font-black leading-none">{s.n}</div>
              </div>
            ))}
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: "MAU", v: "1.2k" },
              { l: "Retention", v: "68%" },
              { l: "NPS", v: "+42" },
            ].map((k) => (
              <div
                key={k.l}
                className="rounded-lg border border-navy/10 bg-warm-cream/40 p-2 text-center"
              >
                <div className="text-[9px] font-semibold uppercase tracking-wider text-navy/60">
                  {k.l}
                </div>
                <div className="mt-0.5 text-sm font-black text-navy">{k.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating idea card */}
      <div className="absolute -left-6 -top-4 hidden rounded-xl border border-navy/10 bg-white p-3 shadow-md sm:block">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-orange-bright/10 p-1.5 text-orange-bright">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-navy/50">
              New Idea
            </div>
            <div className="text-xs font-bold text-navy">Validated</div>
          </div>
        </div>
      </div>

      {/* Floating rocket card */}
      <div className="absolute -bottom-4 -right-6 hidden rounded-xl border border-navy/10 bg-white p-3 shadow-md sm:block">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-navy p-1.5 text-orange-yellow">
            <Rocket className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-navy/50">
              Launch
            </div>
            <div className="text-xs font-bold text-navy">Day 42</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Intro Visual: Idea → Scale Flow ---------------- */
function IntroVisual() {
  const steps = [
    { l: "Idea", i: Lightbulb },
    { l: "Prototype", i: Palette },
    { l: "Launch", i: Rocket },
    { l: "Feedback", i: Users },
    { l: "Scale", i: TrendingUp },
  ];
  return (
    <div className="relative rounded-3xl border border-navy/10 bg-white p-6 shadow-navy">
      <div className="absolute inset-0 rounded-3xl bg-grid-navy opacity-[0.04]" aria-hidden />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-bright">
              Startup Journey
            </div>
            <div className="mt-1 text-base font-bold text-navy">Idea to Scale · In Weeks</div>
          </div>
          <div className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">
            Agile Loop
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {steps.map((s, i) => {
            const Icon = s.i;
            return (
              <div
                key={s.l}
                className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-warm-cream/40 p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-md"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white group-hover:bg-orange-bright">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-navy">{s.l}</div>
                  <div className="text-[11px] text-navy/60">Sprint {i + 1}</div>
                </div>
                <div className="h-1.5 w-16 rounded-full bg-warm-cream">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(i + 1) * 20}%`,
                      background: "var(--gradient-pixel)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-navy/10 bg-navy p-4">
          <div className="flex items-center justify-between text-[10px] font-semibold text-white/60">
            <span>CONTINUOUS FEEDBACK LOOP</span>
            <span className="inline-flex items-center gap-1 text-orange-yellow">
              <CheckCircle2 className="h-3 w-3" /> Live
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-white">
            <span className="rounded bg-white/10 px-2 py-1">Build</span>
            <ArrowRight className="h-3 w-3 text-orange-yellow" />
            <span className="rounded bg-white/10 px-2 py-1">Measure</span>
            <ArrowRight className="h-3 w-3 text-orange-yellow" />
            <span className="rounded bg-orange-bright px-2 py-1">Learn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export function MVPDevelopment() {
  const capabilities = [
    {
      icon: Compass,
      title: "Product Discovery & Consulting",
      desc: "Transform ideas into clear business and technical requirements.",
    },
    {
      icon: ClipboardList,
      title: "Business Analysis",
      desc: "Identify core features, user journeys, and market opportunities.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Create intuitive experiences focused on user adoption and engagement.",
    },
    {
      icon: Layers,
      title: "Architecture & Technology Selection",
      desc: "Choose scalable technologies aligned with future business growth.",
    },
    {
      icon: GitBranch,
      title: "Agile Development",
      desc: "Rapid iterations with continuous stakeholder feedback.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      desc: "Production-ready infrastructure from day one.",
    },
    {
      icon: TrendingUp,
      title: "Post-Launch Scaling",
      desc: "Enhancements, analytics, optimization, and long-term support.",
    },
  ];

  const buildTypes = [
    {
      icon: Store,
      title: "SaaS Products",
      desc: "Subscription-based platforms and digital businesses.",
      span: "lg:col-span-2",
    },
    {
      icon: ShoppingBag,
      title: "Marketplaces",
      desc: "B2B, B2C, and multi-vendor commerce platforms.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Native, cross-platform, and progressive web applications.",
    },
    {
      icon: Brain,
      title: "AI-Driven Products",
      desc: "Generative AI, NLP, computer vision, and intelligent automation solutions.",
      span: "lg:col-span-2",
    },
    {
      icon: Building2,
      title: "Enterprise Innovation Platforms",
      desc: "Internal products, workflow systems, and digital transformation initiatives.",
      span: "lg:col-span-2",
    },
    {
      icon: Globe2,
      title: "Industry-Specific Solutions",
      desc: "Healthcare, education, agriculture, retail, manufacturing, and community ecosystems.",
    },
  ];

  const journey = [
    { title: "MVP", desc: "Ship the smallest lovable product to validate the core hypothesis.", icon: Rocket },
    { title: "Product-Market Fit", desc: "Iterate rapidly on real user signals until traction is proven.", icon: Target },
    { title: "Growth Stage", desc: "Scale features, distribution, and infrastructure with confidence.", icon: TrendingUp },
    { title: "Enterprise Scale", desc: "Harden security, compliance, and platform depth for global reach.", icon: Building2 },
  ];

  const reasons = [
    {
      icon: Users,
      title: "Complete Product Team Under One Roof",
      desc: "Business analysts, designers, architects, developers, QA, DevOps, and product managers.",
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      desc: "Agile execution with shorter release cycles.",
    },
    {
      icon: Puzzle,
      title: "Technology-Agnostic Approach",
      desc: "Selecting the right tools based on business needs, not trends.",
    },
    {
      icon: Brain,
      title: "AI-First Engineering Practices",
      desc: "Accelerated development, smarter testing, and improved productivity.",
    },
    {
      icon: Gauge,
      title: "Investor-Ready Solutions",
      desc: "Scalable platforms built to support growth and funding requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Technology Partnership",
      desc: "Supporting businesses beyond launch and into expansion.",
    },
  ];

  const techGroups = [
    {
      title: "Backend",
      icon: Code2,
      items: ["Python", "Django", "FastAPI", "Flask", "Laravel", "Node.js"],
    },
    {
      title: "Frontend",
      icon: Palette,
      items: ["React", "Vue.js", "Next.js"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      items: ["Flutter", "Android", "iOS", "React Native", "PWA"],
    },
    {
      title: "AI & Data",
      icon: Brain,
      items: ["Generative AI", "NLP", "Computer Vision", "Predictive Analytics"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Databases",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ];

  const process = [
    { icon: Compass, title: "Discovery Workshop", desc: "Understanding the problem, users, market, and business goals." },
    { icon: Target, title: "Feature Prioritization", desc: "Defining the smallest set of features needed for market validation." },
    { icon: Palette, title: "UX & Prototyping", desc: "Creating clickable designs and user journeys." },
    { icon: GitBranch, title: "Agile Development", desc: "Rapid sprint-based execution with regular demos." },
    { icon: Rocket, title: "Launch & Validation", desc: "Deploying to real users and collecting feedback." },
    { icon: LineChart, title: "Scale & Optimize", desc: "Enhancing the product based on data and market insights." },
  ];

  const showcaseProducts = [
    "AI-powered SaaS platforms",
    "Association management systems",
    "Marketplace applications",
    "ERP solutions",
    "Community platforms",
    "EdTech products",
    "E-commerce ecosystems",
    "Industry-specific digital products",
  ];

  const partnerSteps = [
    { l: "Build the first version", i: Rocket },
    { l: "Achieve product-market fit", i: Target },
    { l: "Scale engineering teams", i: Users },
    { l: "Add advanced capabilities", i: Brain },
    { l: "Optimize infrastructure", i: Cloud },
    { l: "Expand globally", i: Globe2 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/4 h-96 w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <nav className="mb-5 flex items-center gap-1.5 text-xs font-semibold text-white/60">
                <Link to="/" className="hover:text-orange-yellow">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="hover:text-orange-yellow">Services</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-orange-yellow">MVP Development</span>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-yellow backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                MVP Development Services
              </div>

              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-5xl xl:text-6xl">
                Turn Your Idea into a{" "}
                <span className="bg-gradient-to-r from-orange-bright via-orange-yellow to-warm-yellow bg-clip-text text-transparent">
                  Market-Ready Product
                </span>
                —Faster and Smarter
              </h1>

              <p className="mt-6 text-base leading-relaxed text-white/75 lg:text-lg">
                Great businesses start with great ideas, but successful products are built through
                speed, validation, and continuous learning. At Datagrid, we help startups,
                entrepreneurs, and enterprises transform concepts into scalable Minimum Viable
                Products (MVPs) that reach the market quickly and evolve with customer feedback.
              </p>

              <p className="mt-5 text-sm font-bold text-orange-yellow lg:text-base">
                Launch faster. Validate sooner. Scale confidently.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            <div className="animate-fade-in">
              <MVPHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                <Lightbulb className="h-3.5 w-3.5" /> From Whiteboard to Live Product
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                From Idea to Product in Weeks, Not Months
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy/70">
                Many innovative ideas fail—not because of technology, but because they take too
                long to reach real users.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                Our MVP development approach focuses on building only what matters most:
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Validate business assumptions quickly",
                  "Minimize development costs and risks",
                  "Gather real customer feedback",
                  "Accelerate investor and stakeholder confidence",
                  "Build a strong foundation for future scaling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-navy/75">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-bright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-navy/70">
                Whether you have a detailed product specification or just an idea on a
                whiteboard, our team helps you bring it to life.
              </p>
            </div>
            <IntroVisual />
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Layers className="h-3.5 w-3.5" /> Product Team
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              End-to-End Product Development Capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              We provide everything required to launch a successful digital product.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-bright/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Rocket className="h-3.5 w-3.5" /> Product Portfolio
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              What We Build
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildTypes.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`group relative overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-white to-warm-cream/30 p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy ${b.span ?? ""}`}
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-bright/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-bright/10 text-orange-bright transition-colors group-hover:bg-orange-bright group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-navy/10 bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-navy/50">
                      Live
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{b.desc}</p>

                  {/* mini product-screen accent */}
                  <div className="mt-5 rounded-lg border border-navy/10 bg-white p-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-bright/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-yellow/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-navy/20" />
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-warm-cream" />
                      <div className="h-1.5 w-3/4 rounded bg-warm-cream" />
                      <div className="h-1.5 w-1/2 rounded bg-orange-bright/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- STARTUP-FRIENDLY, ENTERPRISE-READY ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <TrendingUp className="h-3.5 w-3.5" /> Built to Scale
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Startup-Friendly, Enterprise-Ready
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Our MVPs are designed with future growth in mind. We don't believe in rebuilding
              products after validation. Instead, we create scalable architectures that allow
              businesses to evolve.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent lg:block"
              aria-hidden
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((j, i) => {
                const Icon = j.icon;
                return (
                  <div key={j.title} className="relative">
                    <div className="relative mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-orange-bright/30 bg-white shadow-md">
                      <Icon className="h-7 w-7 text-orange-bright" />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-black text-orange-yellow">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-bold">{j.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-navy/65">{j.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-bold text-orange-bright lg:text-base">
            This approach reduces technical debt and accelerates long-term success.
          </p>
        </div>
      </section>

      {/* ---------------- WHY FOUNDERS CHOOSE DATAGRID ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <ShieldCheck className="h-3.5 w-3.5" /> Founder-First
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Why Founders Choose Datagrid
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-bright/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- TECHNOLOGIES ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Cpu className="h-3.5 w-3.5" /> Tech Stack
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Technologies We Use
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-orange-yellow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold">{g.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span
                        key={i}
                        className="rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1 text-xs font-semibold text-navy/75 transition-colors group-hover:border-orange-bright/30"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Workflow className="h-3.5 w-3.5" /> Delivery Method
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Our MVP Development Process
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent lg:block"
              aria-hidden
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative">
                    <div className="relative mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-orange-bright/30 bg-white shadow-md">
                      <Icon className="h-7 w-7 text-orange-bright" />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-black text-orange-yellow">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-bold">{p.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-navy/65">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FROM STARTUP IDEAS TO SCALABLE PRODUCTS ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Sparkles className="h-3.5 w-3.5" /> Track Record
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              From Startup Ideas to Scalable Products
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Over the years, Datagrid has helped businesses build a wide range of digital
              products across industries.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProducts.map((p) => (
              <div
                key={p}
                className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-md"
              >
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-bright/10 text-orange-bright transition-colors group-hover:bg-orange-bright group-hover:text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-navy">{p}</div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-navy/70">
            Our experience across multiple domains enables us to identify risks early, accelerate
            execution, and build products with long-term sustainability in mind.
          </p>
        </div>
      </section>

      {/* ---------------- TECHNOLOGY PARTNER (DARK) ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/3 h-96 w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-yellow backdrop-blur">
              <Flag className="h-3.5 w-3.5" /> Long-Term Partnership
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
              Not Just an MVP Vendor—
              <span className="bg-gradient-to-r from-orange-bright via-orange-yellow to-warm-yellow bg-clip-text text-transparent">
                Your Technology Partner
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Many development companies stop after launch. We grow alongside our clients as
              their technology partner.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerSteps.map((s, i) => {
              const Icon = s.i;
              return (
                <div
                  key={s.l}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-orange-yellow/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-bright text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-orange-yellow">
                        Stage {i + 1}
                      </div>
                      <div className="text-sm font-bold text-white">{s.l}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
            <ArrowRightCircle className="h-5 w-5 text-orange-yellow" />
            <span>
              From launch to global scale—we support every stage of your product journey.
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-warm-cream/50 via-white to-warm-cream/30 p-10 text-center shadow-navy lg:p-16">
            <div className="absolute inset-0 bg-grid-navy opacity-[0.04]" aria-hidden />
            <div
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-pixel)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                <Rocket className="h-3.5 w-3.5" /> Ready to Build
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-5xl">
                Have an Idea? Let's Build the First Version Together.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 lg:text-lg">
                Whether you're a startup founder, enterprise innovator, or industry expert with
                a new vision, Datagrid provides the expertise, technology, and execution
                capabilities to turn ideas into successful digital products.
              </p>
              <p className="mt-4 text-sm font-bold text-orange-bright lg:text-base">
                Start small. Learn fast. Scale without limits.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:border-orange-bright hover:text-orange-bright"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
