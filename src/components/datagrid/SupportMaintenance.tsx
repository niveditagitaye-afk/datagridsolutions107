import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Activity,
  ShieldCheck,
  Clock,
  Wrench,
  LifeBuoy,
  Gauge,
  Database,
  Bug,
  Users,
  Headphones,
  Zap,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Server,
  Layers,
  Sparkles,
  Cog,
  BarChart3,
  Rocket,
} from "lucide-react";

/* ---------------- Hero Visual ---------------- */
function SupportHeroVisual() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative rounded-2xl border border-white/10 bg-navy-deep/80 p-5 shadow-navy backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
              System Health · Live
            </span>
          </div>
          <span className="text-[11px] font-medium text-white/50">Uptime 99.98%</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Apps", value: "48", icon: Server, tone: "text-orange-yellow" },
            { label: "Tickets", value: "12", icon: LifeBuoy, tone: "text-orange-bright" },
            { label: "Patches", value: "36", icon: ShieldCheck, tone: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <s.icon className={`h-4 w-4 ${s.tone}`} />
                <span className="text-[10px] font-semibold uppercase text-white/50">{s.label}</span>
              </div>
              <div className="mt-2 text-xl font-black text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[
            { name: "Optify ERP", status: "Healthy", tone: "bg-emerald-400", pct: 98 },
            { name: "Customer Portal", status: "Monitoring", tone: "bg-orange-yellow", pct: 82 },
            { name: "Payments API", status: "Healthy", tone: "bg-emerald-400", pct: 95 },
            { name: "Warehouse DB", status: "Patch queued", tone: "bg-orange-bright", pct: 74 },
          ].map((r) => (
            <div key={r.name} className="rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <span className={`h-1.5 w-1.5 rounded-full ${r.tone}`} />
                  {r.name}
                </div>
                <span className="text-white/55">{r.status}</span>
              </div>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div className={`h-full ${r.tone}`} style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-white/70">
              <Clock className="h-3.5 w-3.5 text-orange-yellow" /> Avg Response
            </div>
            <div className="mt-1 text-lg font-black text-white">14 min</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-white/70">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> SLA Met
            </div>
            <div className="mt-1 text-lg font-black text-white">99.6%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Data ---------------- */
const services = [
  {
    title: "Application Support",
    icon: LifeBuoy,
    desc: "Keep business-critical applications running smoothly with proactive monitoring and timely issue resolution.",
    items: [
      "Bug fixes and troubleshooting",
      "User support and issue management",
      "Performance optimization",
      "Database maintenance",
      "Infrastructure monitoring",
      "Security updates and patches",
    ],
  },
  {
    title: "Monthly Retainer Support",
    icon: Headphones,
    desc: "Dedicated support resources that understand your business and provide continuous assistance.",
    items: [
      "Predictable monthly costs",
      "Faster turnaround times",
      "Priority issue handling",
      "Continuous improvements",
      "Regular health checks",
      "Strategic technology guidance",
    ],
  },
  {
    title: "Hourly & On-Demand Support",
    icon: Clock,
    desc: "Occasional technical assistance without long-term commitments—flexible hourly engagement models.",
    items: [
      "Emergency fixes",
      "Feature enhancements",
      "Technology consulting",
      "Infrastructure support",
      "Performance tuning",
    ],
  },
  {
    title: "Legacy System Modernization",
    icon: RefreshCw,
    desc: "Upgrade systems built years ago that struggle to support modern business needs.",
    items: [
      "Upgrade outdated technologies",
      "Improve performance and security",
      "Modernize user interfaces",
      "Migrate to cloud infrastructure",
      "Refactor monolithic applications",
      "Integrate with modern platforms",
    ],
  },
  {
    title: "Rescue & Recovery Projects",
    icon: ShieldCheck,
    desc: "Stabilize failing applications, complete abandoned projects, and restore confidence in your platforms.",
    items: [
      "Code audits and technical assessments",
      "Stabilizing failing applications",
      "Completing unfinished projects",
      "Performance optimization",
      "Infrastructure restructuring",
      "Documentation and knowledge transfer",
    ],
  },
];

const models = [
  { title: "Dedicated Support Teams", badge: "Dedicated", icon: Users, desc: "Long-term teams exclusively managing your applications and infrastructure." },
  { title: "Shared Support Services", badge: "Flexible", icon: Layers, desc: "Cost-effective maintenance for growing organizations." },
  { title: "SLA-Based Enterprise Support", badge: "SLA", icon: ShieldCheck, desc: "Defined response times, escalation mechanisms, and operational commitments." },
  { title: "24×7 Critical Support", badge: "24×7", icon: Activity, desc: "Round-the-clock monitoring and support for business-critical systems." },
];

const reasons = [
  { title: "End-to-End Ownership", icon: CheckCircle2, desc: "From development to maintenance, one trusted technology partner." },
  { title: "Third-Party System Expertise", icon: Wrench, desc: "Supporting and improving applications developed by other vendors." },
  { title: "Proactive Monitoring", icon: Gauge, desc: "Identifying issues before they impact business operations." },
  { title: "Flexible Engagement Models", icon: Cog, desc: "Retainers, dedicated teams, hourly support, and enterprise SLAs." },
  { title: "Faster Resolution Times", icon: Zap, desc: "Experienced teams with strong technical and business understanding." },
  { title: "Continuous Improvement", icon: TrendingUp, desc: "Support that focuses on growth—not just fixing problems." },
];

const lifecycle = [
  { label: "Stability", icon: ShieldCheck },
  { label: "Security", icon: ShieldCheck },
  { label: "Performance", icon: Gauge },
  { label: "Innovation", icon: Sparkles },
  { label: "Scalability", icon: BarChart3 },
  { label: "Business Alignment", icon: TrendingUp },
];

const workflow = [
  { step: "01", title: "Assess", icon: Bug, desc: "Review the current application, infrastructure, risks, and business priorities." },
  { step: "02", title: "Stabilize", icon: ShieldCheck, desc: "Fix critical issues, improve reliability, and establish support processes." },
  { step: "03", title: "Monitor", icon: Activity, desc: "Set up regular tracking, issue management, and health checks." },
  { step: "04", title: "Improve", icon: TrendingUp, desc: "Continuously enhance performance, security, usability, and features." },
  { step: "05", title: "Scale", icon: Rocket, desc: "Support growth through architecture improvements, cloud scaling, and optimization." },
];

/* ---------------- Page ---------------- */
export function SupportMaintenance() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-80 w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <nav className="flex items-center gap-1.5 text-[12px] text-white/60">
              <Link to="/" className="hover:text-orange-yellow">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="hover:text-orange-yellow">Services</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">Support &amp; Maintenance</span>
            </nav>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <LifeBuoy className="h-3 w-3" /> Support &amp; Maintenance Services
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Support for Applications That Power Your Business
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 lg:text-lg">
              Software development doesn't end at deployment. Continuous support, proactive maintenance, and
              ongoing improvements are essential to keep applications secure, scalable, and aligned with
              evolving business needs.
            </p>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              At Datagrid, we provide comprehensive support and maintenance services for both systems we build
              and applications developed by third-party vendors.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-orange-bright pl-4 text-sm font-semibold italic text-orange-yellow">
              Maintain better. Improve continuously. Grow without disruptions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white/90 transition-colors hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
          <div className="relative">
            <SupportHeroVisual />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Long-Term Technology Partnership Beyond Go-Live
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Businesses evolve, customer expectations change, and technology landscapes continue to advance.
              Our support teams ensure your digital platforms remain stable, secure, and future-ready.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Whether you need monthly retainers, dedicated support teams, or on-demand technical expertise,
              we offer flexible engagement models tailored to your operational requirements.
            </p>
          </div>
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-navy/10">
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-10" aria-hidden />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Support Lifecycle
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { l: "Monitor", i: Activity },
                  { l: "Patch", i: ShieldCheck },
                  { l: "Optimize", i: Gauge },
                  { l: "Improve", i: TrendingUp },
                ].map((c) => (
                  <div key={c.l} className="rounded-xl border border-border bg-background p-4">
                    <c.i className="h-5 w-5 text-orange-bright" />
                    <div className="mt-2 text-sm font-bold text-foreground">{c.l}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">24×7 coverage</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between text-[12px] font-semibold text-foreground">
                  <span>Health Score</span>
                  <span className="text-emerald-600">96 / 100</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[96%] bg-gradient-to-r from-emerald-400 to-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Wrench className="h-3 w-3" /> What we do
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Our Support &amp; Maintenance Services
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: "var(--gradient-pixel)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-deep text-orange-yellow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[13px] text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-bright" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold italic text-muted-foreground">
            We don't just fix software—we restore confidence.
          </p>
        </div>
      </section>

      {/* SUPPORT MODELS */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Support Models Designed Around Your Business
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Choose an engagement that fits your operational rhythm—from shared pools to fully dedicated
              enterprise SLAs.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <div
                key={m.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-deep text-orange-yellow">
                    <m.icon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full border border-orange-bright/30 bg-orange-bright/5 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-orange-bright">
                    {m.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-black text-foreground">{m.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Why Businesses Choose Datagrid
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-deep text-orange-yellow">
                  <r.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-black text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS EVOLUTION - dark */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-16 left-1/3 h-64 w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <Sparkles className="h-3 w-3" /> Beyond Maintenance
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              More Than Maintenance—Continuous Evolution
            </h2>
            <p className="mt-4 text-base text-white/75">
              Great software is never static. Our support philosophy combines stability, security,
              performance, innovation, scalability, and business alignment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {lifecycle.map((l, idx) => (
              <div
                key={l.label}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <div className="text-[11px] font-black text-white/40">0{idx + 1}</div>
                <l.icon className="mt-2 h-5 w-5 text-orange-yellow" />
                <div className="mt-3 text-sm font-black text-white">{l.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-white/70">
            We help organizations continuously enhance their platforms to meet changing market demands and
            customer expectations.
          </p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              How Our Support Engagement Works
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A clear, staged path from assessment to scale—so support becomes a growth driver, not a cost.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px lg:block"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-orange-bright), transparent)" }}
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              {workflow.map((w) => (
                <div key={w.step} className="relative">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-bright bg-background text-sm font-black text-orange-bright">
                    {w.step}
                  </div>
                  <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow">
                    <w.icon className="mx-auto h-5 w-5 text-orange-bright" />
                    <div className="mt-3 text-base font-black text-foreground">{w.title}</div>
                    <p className="mt-2 text-[13px] text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-64 w-[32rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Looking for a Reliable Long-Term Technology Partner?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base text-white/75">
            Whether you need ongoing maintenance, emergency support, legacy modernization, or rescue services
            for an existing application, Datagrid provides the expertise and commitment to keep your business
            moving forward.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold italic text-orange-yellow">
            Build with confidence. Operate with peace of mind. Grow without interruptions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white/90 transition-colors hover:border-orange-yellow hover:text-orange-yellow"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SupportMaintenance;
