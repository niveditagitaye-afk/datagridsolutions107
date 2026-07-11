import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Users,
  UserPlus,
  Boxes,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Cpu,
  Cloud,
  Database,
  Code2,
  Smartphone,
  Brain,
  Sparkles,
  Layers,
  Handshake,
  Gauge,
  TrendingUp,
  Wallet,
  Rocket,
  Workflow,
  Server,
  MapPin,
  Activity,
  Zap,
  Compass,
  LineChart,
  HeartPulse,
  ShoppingCart,
  Factory,
  Leaf,
  GraduationCap,
  Landmark,
  MessageSquare,
  Palette,
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
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Services</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Global Capability Centers &amp; Dedicated Teams</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              Global Capability Centers &amp; Dedicated Teams
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Global Engineering Center in India{" "}
              <span className="text-gradient-warm">with Confidence</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Scale faster, innovate continuously, and reduce operational complexity with dedicated engineering teams and managed Global Capability Centers powered by Datagrid.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              From a single specialist to a 100-member cross-functional team, we help global organizations establish, operate, and grow high-performing technology capabilities in India — without the challenges of local hiring, infrastructure, compliance, and administration.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-yellow/30 bg-orange-yellow/10 px-4 py-1.5 text-sm font-semibold text-orange-yellow">
              <Sparkles className="h-3.5 w-3.5" /> Your vision. Our talent. One integrated team.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          {/* Hero visual: global delivery hub */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl" aria-hidden />
              <div className="absolute inset-0 bg-grid-light opacity-40 rounded-3xl" aria-hidden />

              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <linearGradient id="gcc-line" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f7a626" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#ed5816" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#gcc-line)" strokeWidth="1.1" strokeDasharray="3 4">
                  <path d="M200 200 L60 70" />
                  <path d="M200 200 L340 70" />
                  <path d="M200 200 L40 200" />
                  <path d="M200 200 L360 200" />
                  <path d="M200 200 L70 340" />
                  <path d="M200 200 L330 340" />
                </g>
                <g fill="#f7a626" opacity="0.9">
                  <circle cx="60" cy="70" r="3" />
                  <circle cx="340" cy="70" r="3" />
                  <circle cx="40" cy="200" r="3" />
                  <circle cx="360" cy="200" r="3" />
                  <circle cx="70" cy="340" r="3" />
                  <circle cx="330" cy="340" r="3" />
                </g>
              </svg>

              {/* central India hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-2xl bg-orange-bright/30 blur-xl" />
                  <div
                    className="relative flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-white/20 text-white shadow-glow"
                    style={{ background: "var(--gradient-pixel)" }}
                  >
                    <MapPin className="h-7 w-7" />
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">India Hub</span>
                    <span className="text-[9px] font-semibold text-white/80">Datagrid GCC</span>
                  </div>
                </div>
              </div>

              {/* orbit nodes = global geographies + team pods */}
              {[
                { icon: Globe2, top: "4%", left: "42%", label: "USA" },
                { icon: Globe2, top: "18%", left: "6%", label: "UK" },
                { icon: Globe2, top: "18%", left: "76%", label: "MEA" },
                { icon: Users, top: "48%", left: "2%", label: "Dev Pod" },
                { icon: Brain, top: "48%", left: "82%", label: "AI Pod" },
                { icon: ShieldCheck, top: "76%", left: "10%", label: "QA/Ops" },
                { icon: Handshake, top: "76%", left: "72%", label: "Leadership" },
                { icon: Cloud, top: "88%", left: "44%", label: "DevOps" },
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

              <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-white/15 bg-navy-deep/85 p-3 shadow-navy backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-yellow">
                  <Activity className="h-3 w-3" /> 100+ Engineers · Live
                </div>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-4 w-1.5 rounded-sm"
                      style={{ background: i % 3 === 0 ? "#f7a626" : "rgba(255,255,255,0.2)" }}
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
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            About the Practice
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Your Trusted Partner for Building Teams in India
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
            For over 10 years, Datagrid has helped startups, enterprises, and product companies across the USA, UK, Middle East, Africa, and India build reliable engineering organizations that operate as a natural extension of their in-house teams.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Whether you need dedicated developers, AI engineers, complete product squads, or a fully managed Global Capability Center, we provide the people, processes, leadership, and operational excellence to support your growth.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "10+", v: "Years experience" },
              { k: "5+", v: "Global geographies" },
              { k: "100+", v: "Team members / GCC" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card p-4">
                <div className="font-display text-2xl font-extrabold text-navy">{s.k}</div>
                <div className="mt-1 text-xs font-semibold text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy to-navy-deep p-8 text-white shadow-navy">
            <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
            <div
              className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-pixel)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-orange-yellow">
                <Building2 className="h-3.5 w-3.5" /> Datagrid India Delivery Hub
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "Dedicated Devs" },
                  { icon: Brain, label: "AI Engineers" },
                  { icon: Boxes, label: "Product Squads" },
                  { icon: ShieldCheck, label: "QA & Security" },
                  { icon: Cloud, label: "Cloud & DevOps" },
                  { icon: Briefcase, label: "Delivery Leaders" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-orange-yellow">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                  <Globe2 className="h-4 w-4 text-orange-yellow" /> Serving USA · UK · MEA · APAC · India
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-yellow">24×7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Engagement Models ---------------- */
const engagementModels = [
  { icon: Users, title: "Dedicated Developers", desc: "Experienced professionals working exclusively on your projects and aligned with your culture, tools, and processes." },
  { icon: UserPlus, title: "Staff Augmentation", desc: "Quickly strengthen your existing teams with specialized skills, without lengthy recruitment cycles." },
  { icon: Boxes, title: "Managed Product Teams", desc: "Cross-functional squads with architects, developers, QA, DevOps, designers, and PMs delivering complete ownership." },
  { icon: Building2, title: "Global Capability Centers (GCC)", desc: "Establish and scale your long-term engineering, AI, support, or operations center in India with a trusted local partner." },
];

function EngagementModels() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Engagement Models
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Flexible Engagement Models
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Choose the model that fits your stage, scale, and speed — from a single specialist to a fully managed offshore center.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((m, i) => {
            const Icon = m.icon;
            return (
              <article
                key={m.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-pixel)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight text-navy">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GCC Without Challenges ---------------- */
const gccPillars = [
  { icon: UserPlus, label: "Recruitment & talent acquisition" },
  { icon: Compass, label: "Engineering leadership & governance" },
  { icon: Briefcase, label: "HR, payroll, and compliance support" },
  { icon: Building2, label: "Office infrastructure & operations" },
  { icon: Gauge, label: "Delivery management & reporting" },
  { icon: ShieldCheck, label: "Secure development environments" },
  { icon: TrendingUp, label: "Scalable team expansion models" },
  { icon: Handshake, label: "Flexible engagement structures" },
];

function GCCWithoutChallenges() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Managed Operations
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Build Your GCC Without the Traditional Challenges
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Launching an offshore center should accelerate growth — not create administrative burdens. Datagrid enables organizations to establish Global Capability Centers with everything managed on the ground.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gccPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-navy">
                      <CheckCircle2 className="h-4 w-4 text-orange-bright" />
                      {p.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-navy lg:text-lg">
          Focus on innovation and business outcomes while we manage execution on the ground.
        </p>
      </div>
    </section>
  );
}

/* ---------------- End-to-End Talent ---------------- */
const talentGroups: { title: string; icon: typeof Users; roles: string[] }[] = [
  {
    title: "Technology Leadership",
    icon: Compass,
    roles: ["Chief Architects", "Solution Architects", "Technical Leads", "Engineering Managers"],
  },
  {
    title: "Product & Delivery",
    icon: Briefcase,
    roles: ["Business Analysts", "Product Owners", "Project Managers", "Scrum Masters"],
  },
  {
    title: "Engineering Teams",
    icon: Code2,
    roles: ["Backend Developers", "Frontend Developers", "Mobile Engineers", "Full-Stack Developers"],
  },
  {
    title: "AI & Data Specialists",
    icon: Brain,
    roles: ["AI Engineers", "Machine Learning Experts", "NLP Specialists", "Computer Vision Engineers", "Data Scientists"],
  },
  {
    title: "Quality & Operations",
    icon: ShieldCheck,
    roles: ["QA Engineers", "Automation Testers", "DevOps Specialists", "Cloud Engineers"],
  },
  {
    title: "Content & Support",
    icon: MessageSquare,
    roles: ["Technical Writers", "Content Operations Teams", "HR, Admin & Accounts", "Support & Maintenance Teams"],
  },
];

function EndToEndTalent() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Capability Matrix
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            End-to-End Talent Under One Roof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Unlike traditional staff augmentation firms, Datagrid provides complete business and technology capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {talentGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <article
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-navy">{g.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {g.roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-navy lg:text-lg">
          Whether you require five specialists or an entire engineering organization, we can scale with your business.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Technology Expertise ---------------- */
const techGroups: { title: string; icon: typeof Code2; items: string[] }[] = [
  { title: "Backend Engineering", icon: Server, items: ["Python", "Django", "Flask", "FastAPI", "Laravel", "PHP", "Node.js"] },
  { title: "Frontend Technologies", icon: Code2, items: ["React", "Vue.js", "Angular", "Next.js"] },
  { title: "Mobile Development", icon: Smartphone, items: ["Flutter", "Android", "iOS", "React Native"] },
  { title: "Artificial Intelligence", icon: Brain, items: ["Generative AI", "NLP", "Computer Vision", "AI Agents", "Predictive Analytics"] },
  { title: "Data & Databases", icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Infra Automation"] },
];

function TechExpertise() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Technology
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technology Expertise That Powers Global Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Our teams deliver solutions using modern, enterprise-grade technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <article
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-extrabold text-navy">{g.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-navy"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </article>
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
  { icon: Handshake, label: "Associations & Event Tech" },
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Leaf, label: "Agriculture & AgriTech" },
  { icon: GraduationCap, label: "Education & EdTech" },
  { icon: Wallet, label: "Financial Services" },
  { icon: Users, label: "Community Platforms" },
  { icon: Layers, label: "Enterprise SaaS Products" },
  { icon: Landmark, label: "Political & Public Sector" },
  { icon: Brain, label: "AI & Data-Driven Businesses" },
];

function Industries() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Proven Across Multiple Industries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Our dedicated teams and managed centers have successfully supported organizations across sectors.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.label}
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-orange-bright/50 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {ind.label}
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          This cross-industry experience enables us to understand both technology and business challenges.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Why Global Companies Choose Datagrid ---------------- */
const reasons = [
  { icon: Rocket, title: "Faster Team Formation", desc: "Build and onboard engineering teams in weeks, not months." },
  { icon: Workflow, title: "Lower Operational Complexity", desc: "No local hiring, payroll, compliance, or infrastructure headaches." },
  { icon: TrendingUp, title: "Flexible Scaling", desc: "Expand teams based on business priorities and market opportunities." },
  { icon: ShieldCheck, title: "Long-Term Stability", desc: "Strong employee retention and knowledge continuity across engagements." },
  { icon: Gauge, title: "Transparent Governance", desc: "Clear reporting, agile processes, and direct stakeholder communication." },
  { icon: Wallet, title: "Cost-Effective Growth", desc: "Access world-class engineering talent while optimizing operational costs." },
  { icon: Zap, title: "Innovation-Driven Culture", desc: "Continuous learning, AI-first practices, and modern engineering methodologies." },
];

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Why Datagrid
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Why Global Companies Choose Datagrid
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const featured = i === 0;
            return (
              <article
                key={r.title}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1.5 hover:shadow-glow animate-fade-up ${
                  featured
                    ? "border-orange-bright/40 bg-gradient-to-br from-navy to-navy-deep text-white lg:col-span-1 lg:row-span-1"
                    : "border-border bg-card"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-pixel)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-glow ${
                      featured
                        ? "bg-white/10 text-orange-yellow"
                        : "bg-gradient-to-br from-orange-bright to-orange-yellow text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={`mt-5 font-display text-lg font-extrabold leading-tight ${
                      featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {r.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      featured ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {r.desc}
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

/* ---------------- Strategic Partner ---------------- */
function StrategicPartner() {
  const pillars = [
    "Deep integration with your organization",
    "Shared goals and accountability",
    "Strong engineering culture",
    "Continuous improvement",
    "Business-centric delivery",
    "Sustainable scaling models",
  ];
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-yellow">
            <span className="h-1 w-6 rounded-sm bg-orange-yellow" />
            Partnership
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Strategic Partner, Not Just a Vendor
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 lg:text-lg">
            We believe global capability centers should create long-term business value — not simply reduce costs. Our approach focuses on building offshore teams that behave, perform, and innovate like your own organization.
          </p>
          <p className="mt-6 text-base font-semibold text-orange-yellow">
            The result is an offshore team that behaves, performs, and innovates like your own.
          </p>
        </div>
        <div className="lg:col-span-6 animate-fade-up [animation-delay:120ms]">
          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-orange-yellow/40"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-yellow" />
                <span className="text-sm font-semibold text-white">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Startup to Enterprise GCC ---------------- */
const scaleLadder = [
  { icon: UserPlus, label: "A dedicated developer" },
  { icon: Brain, label: "A specialized AI team" },
  { icon: Boxes, label: "A complete product engineering squad" },
  { icon: LineChart, label: "A 24×7 support organization" },
  { icon: Server, label: "An offshore development center" },
  { icon: Building2, label: "A fully managed Global Capability Center" },
];

function ScaleLadder() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Scale
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            From Startup Teams to Enterprise GCCs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Whether you need one specialist or a full capability center — we grow with your ambition.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px lg:block"
            style={{
              background:
                "repeating-linear-gradient(to right, #ed5816 0 6px, transparent 6px 12px)",
            }}
            aria-hidden
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {scaleLadder.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.label}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-orange-bright/40 bg-card text-orange-bright shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 rounded-2xl border border-border bg-card p-4 text-center">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">
                      Stage {i + 1}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-navy">{s.label}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base font-semibold text-navy lg:text-lg">
          Datagrid provides the talent, leadership, and operational excellence to help you scale with confidence.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-40 blur-3xl"
        style={{ background: "radial-gradient(60% 50% at 50% 50%, rgba(237,88,22,0.35), transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
          <Palette className="h-3.5 w-3.5" />
          Ready to Build?
        </span>
        <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Build Your Global Engineering Capability with Datagrid
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
          Partner with an experienced technology organization that combines world-class talent, proven delivery processes, and long-term commitment to your success.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          Let's create a high-performing team that grows with your business and powers your next decade of innovation.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page Export ---------------- */
export function GCCDedicatedTeams() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <EngagementModels />
        <GCCWithoutChallenges />
        <EndToEndTalent />
        <TechExpertise />
        <Industries />
        <WhyChoose />
        <StrategicPartner />
        <ScaleLadder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
