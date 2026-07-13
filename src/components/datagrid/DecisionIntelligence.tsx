import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  BarChart3,
  LineChart,
  PieChart,
  MessageSquare,
  TrendingUp,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Gauge,
  Users,
  Building2,
  Factory,
  ShoppingCart,
  Briefcase,
  Eye,
  Lightbulb,
  Zap,
  Activity,
  Bell,
  ShieldCheck,
  Workflow,
  Target,
  Brain,
  Filter,
  Wand2,
  Server,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero Visual: Decision Intelligence Dashboard ---------------- */
function DIDashboardVisual() {
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
            insights.datagrid.io / executive
          </div>
        </div>

        <div className="rounded-b-xl bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-bright">Executive Overview</div>
              <div className="mt-1 text-sm font-bold text-navy">Q4 · Business Health</div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-yellow" />
              Live
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: "Revenue", v: "$4.8M", t: "+18%", c: "text-emerald-600" },
              { l: "NPS", v: "72", t: "+6", c: "text-orange-bright" },
              { l: "Attrition", v: "4.1%", t: "-1.2", c: "text-emerald-600" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-navy/10 bg-warm-cream/30 p-2">
                <div className="text-[9px] font-semibold uppercase tracking-wider text-navy/60">{k.l}</div>
                <div className="mt-0.5 text-sm font-extrabold text-navy">{k.v}</div>
                <div className={`text-[10px] font-bold ${k.c}`}>{k.t}</div>
              </div>
            ))}
          </div>

          {/* Trend chart */}
          <div className="mt-3 rounded-lg border border-navy/10 bg-white p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="text-[10px] font-semibold text-navy">Predictive Trend · 6M</div>
              <TrendingUp className="h-3 w-3 text-orange-bright" />
            </div>
            <svg viewBox="0 0 200 60" className="h-14 w-full">
              <defs>
                <linearGradient id="di-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ed5816" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ed5816" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 45 L30 40 L60 35 L90 28 L120 30 L150 20 L180 15 L200 10 L200 60 L0 60 Z" fill="url(#di-grad)" />
              <path d="M0 45 L30 40 L60 35 L90 28 L120 30 L150 20 L180 15 L200 10" fill="none" stroke="#ed5816" strokeWidth="1.5" />
              <path d="M180 15 L200 10 L200 5" fill="none" stroke="#1f496b" strokeWidth="1.5" strokeDasharray="2 2" />
              {[45, 40, 35, 28, 30, 20, 15].map((y, i) => (
                <circle key={i} cx={i * 30} cy={y} r="1.6" fill="#1f496b" />
              ))}
            </svg>
          </div>

          {/* AI recommendation */}
          <div className="mt-2 flex items-start gap-2 rounded-lg border border-orange-bright/25 bg-orange-bright/5 p-2">
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-orange-bright text-white">
              <Sparkles className="h-3 w-3" />
            </div>
            <div className="text-[10px] leading-snug text-navy">
              <span className="font-bold">AI recommends:</span> reallocate 12% of ad spend to APAC — projected +8% ROI.
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-4 top-20 hidden rotate-[-6deg] rounded-xl border border-white/20 bg-white/95 p-2.5 shadow-navy backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-navy/10">
            <MessageSquare className="h-4 w-4 text-navy" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">Sentiment</div>
            <div className="text-[11px] font-bold text-emerald-600">+ 82% positive</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-20 hidden rotate-[5deg] rounded-xl border border-white/20 bg-white/95 p-2.5 shadow-navy backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-orange-bright/15">
            <Bell className="h-4 w-4 text-orange-bright" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">Alert</div>
            <div className="text-[11px] font-bold text-navy">Attrition risk · Team B</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Data ---------------- */
const capabilities = [
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    tagline: "Real-time visibility into critical business metrics.",
    lead: "Solutions Include:",
    points: [
      "CEO dashboards",
      "Sales performance analytics",
      "Operational dashboards",
      "Financial reporting systems",
      "HR and workforce insights",
      "Manufacturing analytics",
    ],
  },
  {
    icon: MessageSquare,
    title: "Sentiment Analysis",
    tagline: "Understand emotions, opinions, and hidden patterns across organizational data.",
    lead: "Applications:",
    points: [
      "Employee feedback analysis",
      "Customer sentiment monitoring",
      "Survey intelligence",
      "Social media analytics",
      "Brand perception studies",
      "Internal communication effectiveness",
    ],
    footer: "Transform unstructured text into strategic business insights.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    tagline: "Use historical data to anticipate future outcomes.",
    lead: "Solutions:",
    points: [
      "Employee attrition prediction",
      "Demand forecasting",
      "Sales trend analysis",
      "Risk identification",
      "Customer behavior modeling",
      "Performance projections",
    ],
    footer: "Move from reactive decision-making to proactive planning.",
  },
  {
    icon: Layers,
    title: "Business Intelligence Platforms",
    tagline: "Create a single source of truth for enterprise operations.",
    lead: "Capabilities:",
    points: [
      "Data warehousing",
      "Multi-source integrations",
      "KPI management",
      "Interactive dashboards",
      "Automated reporting",
      "Role-based analytics access",
    ],
  },
  {
    icon: Sparkles,
    title: "AI-Driven Recommendations",
    tagline: "Go beyond reporting and provide actionable guidance.",
    lead: "Examples:",
    points: [
      "Identify underperforming regions",
      "Detect employee burnout patterns",
      "Recommend process improvements",
      "Forecast operational bottlenecks",
      "Highlight growth opportunities",
      "Optimize resource allocation",
    ],
  },
];

const flow = [
  { icon: Database, title: "Collect", body: "Gather data from systems, forms, surveys, CRMs, ERPs, applications, and external sources." },
  { icon: Filter, title: "Clean", body: "Structure, validate, normalize, and prepare data for reliable analysis." },
  { icon: BarChart3, title: "Analyze", body: "Identify trends, patterns, performance gaps, and business opportunities." },
  { icon: Brain, title: "Predict", body: "Use AI and machine learning to forecast outcomes and risks." },
  { icon: Wand2, title: "Recommend", body: "Convert insights into clear business actions and decision support." },
  { icon: Eye, title: "Visualize", body: "Deliver executive dashboards and role-based reporting for leadership and teams." },
];

const expertise = [
  {
    icon: Workflow,
    title: "Data Engineering",
    chips: ["Data pipelines", "ETL processes", "Data cleansing", "Data warehousing", "API integrations"],
  },
  {
    icon: PieChart,
    title: "Analytics Platforms",
    chips: ["Power BI", "Metabase", "Custom dashboards", "Executive reporting"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    chips: ["Predictive analytics", "NLP models", "Sentiment analysis", "Recommendation engines", "Pattern recognition"],
  },
  {
    icon: Server,
    title: "Data Technologies",
    chips: ["Python", "Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
  },
];

const useCases = [
  { icon: Briefcase, title: "Executive Decision Dashboards", body: "Leadership-level visibility into business performance, risks, and growth opportunities." },
  { icon: TrendingUp, title: "Sales & Revenue Intelligence", body: "Track sales performance, predict trends, and identify high-value opportunities." },
  { icon: Users, title: "Employee & HR Insights", body: "Understand workforce patterns, attrition risks, productivity signals, and employee sentiment." },
  { icon: Gauge, title: "Operations Intelligence", body: "Monitor workflows, identify bottlenecks, and improve business efficiency." },
  { icon: MessageSquare, title: "Customer & Brand Sentiment", body: "Analyze customer feedback, survey responses, social conversations, and brand perception." },
  { icon: Factory, title: "Manufacturing & Financial Analytics", body: "Track operational, production, financial, and performance metrics in real time." },
];

const whyReasons = [
  { icon: Target, title: "Business-First Analytics", body: "We focus on decisions, not just dashboards." },
  { icon: Brain, title: "AI-Powered Insights", body: "Combining machine learning with practical business applications." },
  { icon: Eye, title: "Executive Visibility", body: "Simple, meaningful, and actionable reporting for leadership teams." },
  { icon: Layers, title: "End-to-End Ownership", body: "From data engineering to visualization and predictive intelligence." },
  { icon: ShieldCheck, title: "Scalable Architectures", body: "Solutions designed to grow alongside your organization." },
  { icon: Building2, title: "Domain Understanding", body: "Deep experience across multiple industries and business functions." },
];

/* ---------------- Page ---------------- */
export function DecisionIntelligence() {
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
              <span className="text-white/90">Decision Intelligence & Business Insights</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">
              <BarChart3 className="h-3 w-3" />
              Decision Intelligence & Business Insights
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Turn Business Data Into{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-pixel)" }}>
                Smarter Decisions
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Modern organizations generate enormous amounts of data, but very few transform it into meaningful action.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
              Datagrid helps businesses convert fragmented information into executive dashboards, predictive insights, sentiment analysis, performance intelligence, and AI-powered recommendations that drive measurable business outcomes.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-yellow/30 bg-orange-yellow/10 px-4 py-1.5 text-[13px] font-semibold text-orange-yellow">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-yellow" />
              See beyond reports. Make decisions with confidence.
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
            <DIDashboardVisual />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Strategic Intelligence
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              From Data Collection to Strategic Intelligence
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Data alone does not create value. The real advantage lies in understanding:
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "What is happening?",
                "Why is it happening?",
                "What will happen next?",
                "What actions should leaders take?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-[15px] text-navy">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-bright" />
                  <span className="font-semibold">{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Our Decision Intelligence solutions combine business understanding, data engineering, analytics, machine learning, and visualization to provide actionable insights — not just dashboards.
            </p>
          </div>

          {/* Insight flow visual */}
          <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-navy">
            <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/60">Insight Flow</div>
                <Activity className="h-4 w-4 text-orange-bright" />
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: Database, l: "Raw Data", t: "CRM · ERP · Surveys · Apps" },
                  { icon: BarChart3, l: "Dashboards", t: "Executive & operational KPIs" },
                  { icon: TrendingUp, l: "Predictions", t: "AI-forecasted trends & risks" },
                  { icon: Sparkles, l: "Recommendations", t: "Prescriptive next-best actions" },
                  { icon: Lightbulb, l: "Decisions", t: "Measurable business outcomes" },
                ].map((row, i) => (
                  <div key={row.l} className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-white">
                      <row.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 rounded-xl border border-navy/10 bg-warm-cream/30 p-3">
                      <div className="text-[13px] font-bold text-navy">{row.l}</div>
                      <div className="text-[12px] text-navy/60">{row.t}</div>
                    </div>
                    <span className="text-[10px] font-mono text-navy/40">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Capabilities
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>

                <div className="mt-4 rounded-xl border border-navy/10 bg-warm-cream/30 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-navy/70">{c.lead}</div>
                  <ul className="mt-2 space-y-1.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-navy">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-bright" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {c.footer && (
                  <p className="mt-4 text-[13px] font-semibold italic text-orange-bright">{c.footer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA → DECISION FLOW */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              How We Turn Data Into Decisions
            </h2>
          </div>

          <div className="relative mt-14">
            {/* connector line (desktop) */}
            <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px lg:block" style={{ backgroundImage: "linear-gradient(to right, transparent, #ed5816 40%, #ed5816 60%, transparent)" }} aria-hidden />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {flow.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-orange-bright bg-white text-navy shadow-glow">
                      <s.icon className="h-5 w-5 text-orange-bright" />
                    </div>
                    <div className="mt-2 text-[10px] font-mono font-bold text-navy/50">STEP 0{i + 1}</div>
                    <h3 className="mt-1 text-base font-bold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="relative bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Technology Stack
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Data & Analytics Expertise
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug">{e.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.chips.map((c) => (
                    <span key={c} className="rounded-full border border-navy/15 bg-warm-cream/40 px-2.5 py-0.5 text-[11px] font-semibold text-navy">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              In Practice
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Business Use Cases
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className={`group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow ${
                  i === 0 || i === 5 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                    <u.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-navy/40">USE CASE · 0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>

                {/* Mini chart accent */}
                <svg viewBox="0 0 120 24" className="mt-5 h-6 w-full opacity-70">
                  {[6, 12, 8, 16, 10, 18, 14, 20, 16, 22].map((h, idx) => (
                    <rect
                      key={idx}
                      x={idx * 12}
                      y={24 - h}
                      width="8"
                      height={h}
                      rx="1"
                      fill={idx % 2 === 0 ? "#1f496b" : "#ed5816"}
                      opacity={idx % 2 === 0 ? 0.7 : 0.9}
                    />
                  ))}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DATAGRID */}
      <section className="relative bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
              Why Datagrid
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Businesses Choose Datagrid
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

      {/* INSIGHT DASHBOARD SHOWCASE (dark) */}
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
              Command Center
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Insights That Leaders Can Act On
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
            {/* KPI cards */}
            {[
              { l: "Revenue", v: "$4.8M", d: "+18% MoM", c: "text-orange-yellow" },
              { l: "Active Users", v: "128K", d: "+9.2%", c: "text-orange-yellow" },
              { l: "Attrition", v: "4.1%", d: "-1.2 pts", c: "text-emerald-400" },
            ].map((k) => (
              <div key={k.l} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2 backdrop-blur-md">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">{k.l}</div>
                <div className="mt-1 text-3xl font-extrabold text-white">{k.v}</div>
                <div className={`mt-1 text-[12px] font-bold ${k.c}`}>{k.d}</div>
              </div>
            ))}

            {/* Trend chart */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:col-span-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Predictive Trend</div>
                  <div className="text-sm font-bold text-white">Revenue forecast · next 6 months</div>
                </div>
                <LineChart className="h-4 w-4 text-orange-yellow" />
              </div>
              <svg viewBox="0 0 400 100" className="h-28 w-full">
                <defs>
                  <linearGradient id="di-hero-grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f7a626" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f7a626" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 80 L50 70 L100 60 L150 55 L200 40 L250 45 L300 30 L350 22 L400 12 L400 100 L0 100 Z" fill="url(#di-hero-grad)" />
                <path d="M0 80 L50 70 L100 60 L150 55 L200 40 L250 45 L300 30 L350 22 L400 12" fill="none" stroke="#f7a626" strokeWidth="2" />
                <path d="M300 30 L350 22 L400 12" stroke="#fab951" strokeWidth="2" strokeDasharray="4 3" fill="none" />
              </svg>
            </div>

            {/* Sentiment panel */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Sentiment</div>
                <MessageSquare className="h-4 w-4 text-orange-yellow" />
              </div>
              <div className="space-y-2.5">
                {[
                  { l: "Positive", v: 82, c: "bg-emerald-400" },
                  { l: "Neutral", v: 13, c: "bg-white/40" },
                  { l: "Negative", v: 5, c: "bg-orange-bright" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="flex items-center justify-between text-[11px] text-white/80">
                      <span>{s.l}</span>
                      <span className="font-bold">{s.v}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full ${s.c}`} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forecast card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Forecast</div>
                <TrendingUp className="h-4 w-4 text-orange-yellow" />
              </div>
              <div className="text-2xl font-extrabold text-white">+12.4%</div>
              <div className="text-[12px] text-white/70">Projected Q1 growth · 92% confidence</div>
              <div className="mt-3 flex gap-1">
                {[30, 40, 55, 50, 65, 78, 88].map((v, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-orange-yellow/70" style={{ height: `${v * 0.35}px` }} />
                ))}
              </div>
            </div>

            {/* AI recommendation card */}
            <div className="rounded-2xl border border-orange-yellow/30 bg-orange-yellow/10 p-5 backdrop-blur-md md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-orange-yellow">AI Recommendation</div>
                <Sparkles className="h-4 w-4 text-orange-yellow" />
              </div>
              <div className="text-sm font-bold text-white">Reallocate 12% of ad spend to APAC region.</div>
              <div className="mt-1 text-[12px] text-white/70">Projected impact: +8% ROI over the next quarter.</div>
              <button className="mt-3 inline-flex items-center gap-1 rounded-full bg-orange-bright px-3 py-1 text-[11px] font-bold text-white">
                Approve <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Alerts */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:col-span-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Operational Alerts & Decision Signals</div>
                <Bell className="h-4 w-4 text-orange-yellow" />
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {[
                  { i: Zap, l: "Attrition risk", t: "Engineering · Team B", c: "text-orange-bright" },
                  { i: ShoppingCart, l: "Demand spike", t: "SKU-4820 up 34% WoW", c: "text-orange-yellow" },
                  { i: ShieldCheck, l: "Anomaly cleared", t: "Payment fraud model", c: "text-emerald-400" },
                ].map((a) => (
                  <div key={a.l} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                      <a.i className={`h-4 w-4 ${a.c}`} />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-white">{a.l}</div>
                      <div className="text-[11px] text-white/60">{a.t}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-warm-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-bright/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-bright">
            <Lightbulb className="h-3 w-3" />
            Ready to Decide Smarter?
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your Business Already Has Data. Let's Unlock Its True Value.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Partner with Datagrid to transform information into intelligence, intelligence into decisions, and decisions into measurable business growth.
          </p>
          <p className="mt-3 text-sm font-semibold text-orange-bright">
            Better data. Better insights. Better decisions.
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:border-orange-bright hover:text-orange-bright"
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
