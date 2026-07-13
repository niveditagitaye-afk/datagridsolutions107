import {
  ArrowRight,
  ChevronRight,
  Compass,
  Rocket,
  Building2,
  Users,
  Lightbulb,
  Map as MapIcon,
  Sparkles,
  Brain,
  Layers,
  UserCog,
  ShieldCheck,
  CheckCircle2,
  Target,
  TrendingUp,
  Award,
  Cpu,
  Network,
  Handshake,
  Gauge,
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { useState } from "react";

/* ---------------- Hero Visual: Strategy Board ---------------- */
function StrategyVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute -inset-10 rounded-[2.5rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-[2.5rem] bg-grid-light opacity-30" aria-hidden />

      <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-navy backdrop-blur-xl">
        {/* Advisory dashboard */}
        <div className="flex items-center gap-2 rounded-t-xl bg-navy-deep/70 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-bright/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-yellow/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="ml-3 flex-1 rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70">
            cto.datagrid.io / strategy-board
          </div>
        </div>

        <div className="rounded-b-xl bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-bright">Advisory Board</div>
              <div className="mt-1 text-sm font-bold text-navy">Technology Roadmap 2026</div>
            </div>
            <div className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">Live</div>
          </div>

          {/* roadmap phases */}
          <div className="space-y-2">
            {[
              { label: "Discovery & Vision", pct: 100, color: "bg-orange-bright" },
              { label: "AI Strategy Sprint", pct: 78, color: "bg-orange-yellow" },
              { label: "Architecture Design", pct: 55, color: "bg-orange-warm" },
              { label: "Execution Plan", pct: 32, color: "bg-navy" },
            ].map((r) => (
              <div key={r.label} className="rounded-lg border border-navy/10 p-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-navy">
                  <span>{r.label}</span>
                  <span className="text-navy/60">{r.pct}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-navy/10">
                  <div className={`h-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* decision nodes */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Brain, label: "AI" },
              { icon: Layers, label: "Stack" },
              { icon: Target, label: "MVP" },
            ].map((n) => (
              <div key={n.label} className="flex items-center gap-1.5 rounded-md border border-navy/10 bg-warm-cream/40 px-2 py-1.5">
                <n.icon className="h-3.5 w-3.5 text-orange-bright" />
                <span className="text-[10px] font-semibold text-navy">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -left-4 top-16 hidden rotate-[-6deg] rounded-xl border border-white/20 bg-white/95 p-2.5 shadow-navy backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-orange-bright/15">
            <Compass className="h-4 w-4 text-orange-bright" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">Vision</div>
            <div className="text-[11px] font-bold text-navy">3-Year Roadmap</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-16 hidden rotate-[5deg] rounded-xl border border-white/20 bg-white/95 p-2.5 shadow-navy backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-navy/10">
            <Sparkles className="h-4 w-4 text-navy" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">AI Adoption</div>
            <div className="text-[11px] font-bold text-navy">ROI-focused</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Data ---------------- */
const audiences = [
  {
    icon: Rocket,
    title: "Startups & Founders",
    body: "Turn ideas into scalable products without building an expensive in-house technology leadership team.",
  },
  {
    icon: Building2,
    title: "SMEs & Family Businesses",
    body: "Digitize operations, automate workflows, and create long-term technology roadmaps.",
  },
  {
    icon: Layers,
    title: "Enterprises Launching New Initiatives",
    body: "Get strategic guidance for innovation programs, digital transformation, and AI adoption.",
  },
  {
    icon: Lightbulb,
    title: "Non-Technical Entrepreneurs",
    body: "Access experienced technology leadership while focusing on business growth and market expansion.",
  },
];

const services = [
  {
    key: "strategy",
    icon: Compass,
    title: "Technology Strategy & Roadmapping",
    tagline: "Align technology investments with long-term business goals.",
    lead: "We Help You:",
    points: [
      "Define product vision and architecture",
      "Select the right technology stack",
      "Build digital transformation roadmaps",
      "Plan budgets and implementation phases",
      "Reduce technology risks and technical debt",
    ],
    chips: ["Vision", "Architecture", "Roadmap", "Budget", "Risk"],
  },
  {
    key: "ai",
    icon: Brain,
    title: "AI Strategy & Adoption Consulting",
    tagline:
      "Every organization needs an AI strategy — but not every organization needs to build its own AI products.",
    lead: "Our AI Advisory Includes:",
    points: [
      "AI readiness assessments",
      "Generative AI adoption strategies",
      "Internal productivity transformation",
      "AI-powered workflow automation",
      "Enterprise knowledge assistants",
      "Customer service automation",
      "Predictive analytics opportunities",
      "Responsible AI governance frameworks",
    ],
    chips: ["GenAI", "Automation", "Governance", "ROI", "Build vs Buy"],
  },
  {
    key: "product",
    icon: Target,
    title: "Product & MVP Consulting",
    tagline: "Transform ideas into scalable digital products.",
    lead: "Services Include:",
    points: [
      "Product discovery workshops",
      "Feature prioritization",
      "MVP planning",
      "User journey design",
      "Architecture decisions",
      "Go-to-market technology strategies",
    ],
    chips: ["Discovery", "MVP", "UX", "Architecture", "GTM"],
  },
  {
    key: "team",
    icon: UserCog,
    title: "Engineering Team Advisory",
    tagline: "Build high-performing teams aligned with your growth plans.",
    lead: "We Support:",
    points: [
      "Hiring strategies",
      "Team structures",
      "Vendor evaluations",
      "Offshore development models",
      "GCC planning",
      "Engineering process improvements",
    ],
    chips: ["Hiring", "Structure", "GCC", "Process"],
  },
  {
    key: "vendor",
    icon: ShieldCheck,
    title: "Technology Vendor Management",
    tagline: "Act as your independent technology representative.",
    lead: "We Help With:",
    points: [
      "Vendor selection",
      "Technical due diligence",
      "Proposal evaluation",
      "Code quality reviews",
      "Delivery governance",
      "Risk management",
    ],
    chips: ["Due Diligence", "Reviews", "Governance", "Risk"],
  },
];

const whyReasons = [
  { icon: Award, title: "10+ Years of Technology Leadership", body: "Experience across startups, SMEs, enterprises, and global organizations." },
  { icon: Network, title: "Cross-Industry Expertise", body: "Healthcare, education, agriculture, retail, manufacturing, communities, associations, and digital products." },
  { icon: Brain, title: "AI-First Strategic Thinking", body: "Helping businesses create practical and sustainable AI adoption plans." },
  { icon: Handshake, title: "Technology-Agnostic Advice", body: "Recommendations driven by business goals — not technology preferences." },
  { icon: Gauge, title: "End-to-End Execution Capability", body: "When required, our advisory can seamlessly transition into implementation." },
  { icon: Cpu, title: "Strong Open-Source Expertise", body: "Modern, scalable, and cost-effective technology ecosystems." },
];

const engagements = [
  {
    icon: Calendar,
    badge: "Ongoing",
    title: "Monthly Advisory Retainer",
    body: "Ongoing strategic technology leadership and decision-making support.",
  },
  {
    icon: Briefcase,
    badge: "Most Popular",
    title: "Fractional CTO Engagement",
    body: "Dedicated hours every month with regular executive involvement.",
    featured: true,
  },
  {
    icon: Clock,
    badge: "Project",
    title: "Project-Based Consulting",
    body: "Technology guidance for specific initiatives or digital programs.",
  },
  {
    icon: GraduationCap,
    badge: "Founders",
    title: "Startup Mentorship Programs",
    body: "Helping founders build, validate, and scale products efficiently.",
  },
];

const gains = [
  "Executive-level technology leadership",
  "A practical AI adoption roadmap",
  "Better product and architecture decisions",
  "Lower technology risks",
  "Faster time-to-market",
  "Access to a complete engineering ecosystem",
  "Long-term strategic partnership",
  "Technology investments aligned with business outcomes",
];

/* ---------------- Page ---------------- */
export function FractionalCTO() {
  const [activeService, setActiveService] = useState(services[0].key);
  const current = services.find((s) => s.key === activeService)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 right-1/4 h-96 w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-in">
            <nav className="mb-5 flex items-center gap-1.5 text-[12px] font-medium text-white/60">
              <Link to="/" className="hover:text-orange-yellow">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="hover:text-orange-yellow">Services</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/90">Fractional CTO & Technology Advisory</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">
              <Sparkles className="h-3 w-3" />
              Fractional CTO & Technology Advisory
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Strategic Technology Leadership Without the Cost of a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-pixel)" }}
              >
                Full-Time CTO
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Build the right product, choose the right technologies, embrace AI strategically, and scale with confidence — guided by experienced technology leaders who understand both business and engineering.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
              Datagrid's Fractional CTO services help startups, SMEs, family businesses, and growing enterprises make smarter technology decisions without the commitment and cost of hiring a full-time Chief Technology Officer.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-yellow/30 bg-orange-yellow/10 px-4 py-1.5 text-[13px] font-semibold text-orange-yellow">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-yellow" />
              Technology vision. AI strategy. Execution excellence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          <div className="animate-fade-in">
            <StrategyVisual />
          </div>
        </div>
      </section>

      {/* WHAT IS A FRACTIONAL CTO */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Advisory Partnership
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              What is a Fractional CTO?
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                A Fractional CTO acts as your trusted technology advisor and strategic partner, helping you define, build, and scale digital products and business systems.
              </p>
              <p>
                We bridge the gap between business objectives and technical execution, ensuring every investment in technology creates measurable business value.
              </p>
              <p>
                Whether you're building a new SaaS platform, launching a mobile app, modernizing operations, or exploring AI opportunities, our leadership team helps you move faster and avoid costly mistakes.
              </p>
            </div>
          </div>

          {/* Right roadmap visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
              <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                    Business Goals → Technology Execution
                  </div>
                  <MapIcon className="h-4 w-4 text-orange-bright" />
                </div>

                <div className="space-y-3">
                  {[
                    { g: "Grow revenue", t: "SaaS platform + AI upsell engine", icon: TrendingUp },
                    { g: "Reduce cost", t: "Workflow automation & GCC", icon: Gauge },
                    { g: "Delight customers", t: "Mobile + support automation", icon: Sparkles },
                    { g: "De-risk decisions", t: "Architecture + vendor governance", icon: ShieldCheck },
                  ].map((row) => (
                    <div
                      key={row.g}
                      className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-warm-cream/30 p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-glow"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-white">
                        <row.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-bold text-navy">{row.g}</div>
                        <div className="text-[12px] text-navy/60">{row.t}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange-bright opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="relative bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Built For
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who Is This Service For?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30" style={{ background: "var(--gradient-pixel)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Advisory Practice
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Fractional CTO Services
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Five focus areas covering the full lifecycle — from vision and strategy to execution governance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* left nav */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-navy/10 bg-white p-2 shadow-sm">
                {services.map((s) => {
                  const active = s.key === activeService;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setActiveService(s.key)}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
                        active
                          ? "bg-navy text-white shadow-navy"
                          : "text-navy hover:bg-warm-cream/50"
                      }`}
                    >
                      <div
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${
                          active ? "bg-white/15 text-orange-yellow" : "bg-navy/5 text-orange-bright"
                        }`}
                      >
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-bold leading-tight">{s.title}</div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          active ? "translate-x-0.5 text-orange-yellow" : "text-navy/30 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* right detail */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-8 shadow-navy">
                <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-bright/10 text-orange-bright">
                      <current.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight">{current.title}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {current.tagline}
                  </p>

                  <div className="mt-6 rounded-xl border border-navy/10 bg-warm-cream/30 p-5">
                    <div className="text-[12px] font-semibold uppercase tracking-wider text-navy/70">
                      {current.lead}
                    </div>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {current.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-navy">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-bright" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {current.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-navy/15 bg-white px-3 py-1 text-[11px] font-semibold text-navy"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {current.key === "ai" && (
                    <div className="mt-6 rounded-xl border border-orange-bright/25 bg-orange-bright/5 p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-wider text-orange-bright">
                        We Help You Answer
                      </div>
                      <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-navy sm:grid-cols-2">
                        {[
                          "Where should AI be implemented?",
                          "Which processes should remain human-led?",
                          "Which tools should be adopted?",
                          "Build or buy?",
                          "Open-source or commercial platforms?",
                          "How do we create measurable ROI from AI investments?",
                        ].map((q) => (
                          <li key={q} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-bright" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-FIRST TRANSFORMATION */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -top-32 left-1/4 h-80 w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-yellow">
              AI-First Transformation
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your AI-First Business Transformation Partner
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75">
              The future belongs to businesses that combine human expertise with intelligent automation.
              Our Fractional CTO engagements focus on helping organizations:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Adopt AI Responsibly", body: "Practical implementations with clear business outcomes." },
              { icon: TrendingUp, title: "Increase Productivity", body: "Leveraging AI tools across engineering, operations, sales, and customer support." },
              { icon: Sparkles, title: "Build Smarter Products", body: "Embedding intelligence into customer experiences and internal systems." },
              { icon: Award, title: "Long-Term Competitive Advantage", body: "Technology strategies that remain relevant for years — not months." },
            ].map((c, i) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-orange-yellow/40"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-orange-yellow">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono text-white/40">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-[15px] italic text-white/80">
              AI is no longer an experiment. It is a boardroom priority, and every business needs a clear roadmap for adoption.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DATAGRID */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Why Datagrid
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Businesses Choose Datagrid as Their Fractional CTO Partner
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyReasons.map((r) => (
              <div
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="relative bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Engagement Models
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Flexible Engagement Models
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Choose the level of support that suits your business.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagements.map((e) => (
              <div
                key={e.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                  e.featured
                    ? "border-orange-bright/40 bg-white shadow-glow"
                    : "border-navy/10 bg-white shadow-sm hover:border-orange-bright/40 hover:shadow-glow"
                }`}
              >
                {e.featured && (
                  <span
                    className="absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
                    style={{ background: "var(--gradient-pixel)" }}
                  >
                    {e.badge}
                  </span>
                )}
                {!e.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-navy/15 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-navy/70">
                    {e.badge}
                  </span>
                )}
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-orange-bright transition-colors hover:text-navy"
                >
                  Discuss this model
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GAIN */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Outcomes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What You Gain
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-navy sm:p-8">
              <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
              <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                {gains.map((g) => (
                  <div
                    key={g}
                    className="group flex items-center gap-3 rounded-xl border border-navy/10 bg-warm-cream/30 p-4 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-bright/10 text-orange-bright transition-colors group-hover:bg-orange-bright group-hover:text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-navy">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[45rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">
            <Users className="h-3 w-3" />
            Let's Talk Strategy
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Need a Technology Leader, Not Another Vendor?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80">
            Whether you're building a startup, modernizing your business, exploring AI opportunities, or planning your next digital initiative, Datagrid's Fractional CTO services provide the expertise, strategy, and guidance needed to move forward with confidence.
          </p>
          <p className="mt-4 text-sm font-semibold text-orange-yellow">
            Think bigger. Build smarter. Scale with the right technology decisions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-orange-yellow hover:text-orange-yellow"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
