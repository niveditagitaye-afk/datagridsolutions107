import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Brain,
  MessageSquare,
  Eye,
  Workflow,
  Bot,
  LineChart,
  FileText,
  ScanSearch,
  Camera,
  Boxes,
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Layers,
  Plug,
  Activity,
  CheckCircle2,
  Search,
  Compass,
  Rocket,
  GitBranch,
  Gauge,
  Building2,
  Handshake,
  Globe2,
  Wrench,
  Lock,
  Zap,
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
          <span className="text-orange-yellow">AI &amp; ML Development</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              AI &amp; ML Development
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Intelligent Systems That{" "}
              <span className="text-gradient-warm">Deliver Real Business Value</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              From Generative AI and Natural Language Processing (NLP) to
              Computer Vision (CV), AI Agents and Predictive Analytics,
              Datagrid helps organizations harness artificial intelligence to
              automate operations, improve decision-making, and create smarter
              digital products.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              We combine strong engineering foundations with practical AI
              implementation experience to build solutions that are scalable,
              secure, and ready for enterprise adoption.
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

              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <linearGradient id="ai-hero-line" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f7a626" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#ed5816" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#ai-hero-line)" strokeWidth="1.1" strokeDasharray="3 4">
                  <path d="M200 200 L70 80" />
                  <path d="M200 200 L330 80" />
                  <path d="M200 200 L60 210" />
                  <path d="M200 200 L340 210" />
                  <path d="M200 200 L90 330" />
                  <path d="M200 200 L310 330" />
                  <path d="M200 200 L200 30" />
                  <path d="M200 200 L200 370" />
                </g>
                <g fill="#f7a626" opacity="0.9">
                  <circle cx="70" cy="80" r="2.5" />
                  <circle cx="330" cy="80" r="2.5" />
                  <circle cx="60" cy="210" r="2.5" />
                  <circle cx="340" cy="210" r="2.5" />
                  <circle cx="90" cy="330" r="2.5" />
                  <circle cx="310" cy="330" r="2.5" />
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
                    <Brain className="h-7 w-7" />
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">AI Core</span>
                  </div>
                </div>
              </div>

              {/* orbit nodes */}
              {[
                { icon: Sparkles, top: "4%", left: "44%", label: "LLM" },
                { icon: MessageSquare, top: "18%", left: "6%", label: "NLP" },
                { icon: Eye, top: "18%", left: "74%", label: "Vision" },
                { icon: Bot, top: "48%", left: "2%", label: "Agents" },
                { icon: Workflow, top: "48%", left: "82%", label: "Auto" },
                { icon: LineChart, top: "76%", left: "10%", label: "Predict" },
                { icon: Database, top: "76%", left: "72%", label: "Data" },
                { icon: ShieldCheck, top: "88%", left: "44%", label: "Secure" },
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
                  <Activity className="h-3 w-3" /> Inference · Live
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

/* ---------------- Capability Overview ---------------- */
const capabilities = [
  { icon: Sparkles, title: "Generative AI", desc: "LLM-powered apps, copilots and knowledge assistants." },
  { icon: MessageSquare, title: "NLP", desc: "Understand, extract and act on unstructured text." },
  { icon: Eye, title: "Computer Vision", desc: "See, detect and analyze images and video streams." },
  { icon: Workflow, title: "AI Automation", desc: "Automate repetitive business processes end-to-end." },
  { icon: Bot, title: "AI Agents", desc: "Autonomous digital workers that reason and act." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Forecast outcomes and guide better decisions." },
];

function CapabilityOverview() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            AI Capability Overview
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            The Full Spectrum of Enterprise AI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Six deeply-integrated capability areas — designed to plug into your
            existing systems and deliver measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
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
                  <h3 className="font-display text-lg font-extrabold leading-tight text-navy">
                    {c.title}
                  </h3>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reusable capability section ---------------- */
type CapSection = {
  eyebrow: string;
  title: string;
  content: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  visual: React.ReactNode;
  reverse?: boolean;
  bg?: "light" | "muted";
};

function CapabilitySection({
  eyebrow,
  title,
  content,
  items,
  icon: Icon,
  visual,
  reverse,
  bg = "light",
}: CapSection) {
  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-24 ${
        bg === "muted" ? "bg-secondary/40" : "bg-background"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={`lg:col-span-6 animate-fade-up ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
              <span className="h-1 w-6 rounded-sm bg-orange-bright" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-[17px]">
              {content}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 px-3.5 py-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-orange-bright" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:col-span-6 animate-fade-up [animation-delay:120ms] ${reverse ? "lg:[direction:ltr]" : ""}`}>
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute inset-0 rounded-3xl bg-grid-light opacity-[0.05]" aria-hidden />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-navy">
                    <Icon className="h-4 w-4 text-orange-bright" />
                    {eyebrow}
                  </div>
                  <span className="rounded-full bg-orange-yellow/15 px-2 py-0.5 text-[10px] font-bold text-orange-bright">
                    LIVE
                  </span>
                </div>
                {visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Visuals for each capability ---------------------------------- */

function GenAIVisual() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border bg-background/80 p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-orange-bright" /> LLM Assistant
        </div>
        <div className="mt-3 space-y-2 text-sm">
          <div className="rounded-lg bg-muted px-3 py-2 text-foreground">
            "Summarize Q3 revenue by region and flag anomalies."
          </div>
          <div className="rounded-lg bg-gradient-to-br from-orange-bright/10 to-orange-yellow/10 px-3 py-2 text-foreground">
            APAC +18% · EMEA +6% · <span className="font-semibold text-orange-bright">2 anomalies detected →</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["RAG", "Fine-tune", "Guardrails"].map((t) => (
          <div key={t} className="rounded-lg border border-border bg-background/60 px-3 py-2 text-center text-[11px] font-bold uppercase tracking-widest text-navy">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function NLPVisual() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border bg-background/80 p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <FileText className="h-3.5 w-3.5 text-orange-bright" /> Document Intelligence
        </div>
        <div className="mt-3 text-sm leading-relaxed text-foreground">
          <span className="rounded bg-orange-yellow/25 px-1">Acme Corp</span> agreed to a{" "}
          <span className="rounded bg-orange-bright/20 px-1">36-month</span> subscription starting{" "}
          <span className="rounded bg-navy/10 px-1 text-navy">Apr 2026</span>.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { l: "Sentiment", v: "Positive · 0.92" },
          { l: "Entities", v: "12 extracted" },
          { l: "Language", v: "EN · HI · AR" },
          { l: "Summary", v: "3 sentences" },
        ].map((x) => (
          <div key={x.l} className="rounded-lg border border-border bg-background/60 p-2.5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{x.l}</div>
            <div className="mt-0.5 text-sm font-semibold text-navy">{x.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CVVisual() {
  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-navy-deep/90 to-navy/80 p-4 text-white">
        <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div className="relative flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-orange-yellow">
          <span className="inline-flex items-center gap-1.5"><Camera className="h-3.5 w-3.5" /> Live Feed</span>
          <span>REC</span>
        </div>
        <div className="relative mt-3 aspect-[16/9] w-full rounded-lg border border-white/10 bg-navy-deep/60">
          <div className="absolute left-[10%] top-[18%] h-10 w-16 rounded border-2 border-orange-bright">
            <span className="absolute -top-4 left-0 rounded bg-orange-bright px-1 text-[9px] font-bold text-white">person 0.98</span>
          </div>
          <div className="absolute left-[46%] top-[38%] h-14 w-24 rounded border-2 border-orange-yellow">
            <span className="absolute -top-4 left-0 rounded bg-orange-yellow px-1 text-[9px] font-bold text-navy-deep">vehicle 0.94</span>
          </div>
          <div className="absolute left-[70%] top-[62%] h-8 w-14 rounded border-2 border-orange-bright/80">
            <span className="absolute -top-4 left-0 rounded bg-orange-bright/80 px-1 text-[9px] font-bold text-white">defect 0.87</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["YOLO v8", "OCR", "Segment"].map((t) => (
          <div key={t} className="rounded-lg border border-border bg-background/60 px-3 py-2 text-center text-[11px] font-bold uppercase tracking-widest text-navy">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { l: "Email in", i: MessageSquare },
    { l: "Extract", i: ScanSearch },
    { l: "Validate", i: ShieldCheck },
    { l: "Approve", i: CheckCircle2 },
    { l: "Notify", i: Zap },
  ];
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border bg-background/80 p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <Workflow className="h-3.5 w-3.5 text-orange-bright" /> Intelligent Workflow
        </div>
        <div className="mt-4 flex items-center justify-between gap-1">
          {steps.map((s, idx) => {
            const Icon = s.i;
            return (
              <div key={s.l} className="flex flex-1 flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-navy">{s.l}</div>
                {idx < steps.length - 1 && (
                  <div className="hidden" />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-orange-bright to-orange-yellow" />
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          <span>Processed 1,284</span>
          <span className="text-orange-bright">Saved 312 hrs / wk</span>
        </div>
      </div>
    </div>
  );
}

function AgentsVisual() {
  const agents = [
    { l: "Support Copilot", d: "Answers · escalates · logs" },
    { l: "Ops Agent", d: "Runs jobs · checks SLAs" },
    { l: "Sales Assistant", d: "Drafts · books · updates CRM" },
  ];
  return (
    <div className="space-y-2.5">
      {agents.map((a) => (
        <div key={a.l} className="flex items-center gap-3 rounded-xl border border-border bg-background/80 p-3.5 transition-all hover:border-orange-bright/40 hover:shadow-glow">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-navy">{a.l}</div>
            <div className="text-[12px] text-muted-foreground">{a.d}</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-yellow/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-orange-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-bright animate-pulse" />
            Active
          </span>
        </div>
      ))}
    </div>
  );
}

function PredictiveVisual() {
  const bars = [42, 58, 51, 66, 74, 69, 82, 88];
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border bg-background/80 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <LineChart className="h-3.5 w-3.5 text-orange-bright" /> Forecast · Next 8 wks
          </div>
          <span className="text-[11px] font-bold text-orange-bright">+22.4%</span>
        </div>
        <div className="mt-4 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-orange-bright to-orange-yellow" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "MAPE", v: "4.1%" },
          { l: "R²", v: "0.94" },
          { l: "Signals", v: "18" },
        ].map((x) => (
          <div key={x.l} className="rounded-lg border border-border bg-background/60 p-2.5 text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{x.l}</div>
            <div className="mt-0.5 text-base font-extrabold text-navy">{x.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Why Datagrid ---------------- */
const whyReasons = [
  {
    icon: Globe2,
    title: "Cross-Industry Experience",
    desc: "Proven delivery across healthcare, retail, manufacturing, associations, agriculture, education, and enterprise.",
  },
  {
    icon: Brain,
    title: "Deep Applied Expertise",
    desc: "Strong in NLP, Computer Vision, automation, and analytics platforms — not just prototypes.",
  },
  {
    icon: Handshake,
    title: "End-to-End Delivery",
    desc: "From consulting and model development to deployment, MLOps and long-term support.",
  },
  {
    icon: Cloud,
    title: "Open & Cloud-Native",
    desc: "Open-source stacks and cloud-native architectures that avoid lock-in and scale on demand.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    desc: "Governance, access control, audit trails and compliance built into every AI solution.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    desc: "AI that plugs into your existing systems, workflows, ERPs, CRMs and data platforms.",
  },
];

function WhyDatagrid() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Why Datagrid
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Why Datagrid for AI &amp; ML?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Enterprise AI is not a demo — it needs engineering discipline,
            business context and long-term ownership. That is exactly what we
            bring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <article
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold leading-tight text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tech Stack ---------------- */
const techGroups = [
  {
    icon: Sparkles,
    title: "LLMs & Generative AI",
    items: ["OpenAI", "Llama", "LangChain", "Vector Databases", "RAG Architectures"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    items: ["OpenCV", "YOLO", "OCR", "Image Analytics"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: ["Python", "Pandas", "NumPy", "Apache Airflow"],
  },
  {
    icon: Cloud,
    title: "Deployment & Infrastructure",
    items: ["Docker", "AWS", "Kubernetes", "MLOps Pipelines"],
  },
];

function TechStack() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
            <span className="h-1 w-6 rounded-sm bg-orange-bright" />
            Technology Stack
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technologies We Work With
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            A modern, open, cloud-native AI stack — battle-tested in production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <article
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-extrabold leading-tight text-navy">
                    {g.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-[12px] font-semibold text-foreground transition-colors group-hover:border-orange-bright/40"
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

/* ---------------- Journey ---------------- */
const journey = [
  { icon: Search, title: "Discover", desc: "Understand goals, data and success metrics." },
  { icon: Compass, title: "Prototype", desc: "Rapid PoCs to prove feasibility and value." },
  { icon: Cpu, title: "Train", desc: "Model development, evaluation and tuning." },
  { icon: GitBranch, title: "Integrate", desc: "Wire AI into apps, APIs and workflows." },
  { icon: Rocket, title: "Deploy", desc: "Production-grade MLOps pipelines & monitoring." },
  { icon: Gauge, title: "Scale", desc: "Optimize cost, latency and continuous learning." },
];

function Journey() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-yellow">
            <span className="h-1 w-6 rounded-sm bg-orange-yellow" />
            Delivery Journey
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Proof of Concept to Enterprise Scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 lg:text-lg">
            Whether you need an AI-powered MVP, intelligent automation for
            internal operations, or a large-scale platform serving millions of
            users, Datagrid provides the engineering expertise to design,
            build, deploy, and continuously evolve AI solutions that create
            measurable business impact.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-orange-yellow/60 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative flex flex-col items-start">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-navy-deep/80 text-orange-yellow shadow-navy backdrop-blur">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-bright text-[10px] font-extrabold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {s.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-sm lg:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pixel)" }}
            aria-hidden
          />
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-bright">
              <Sparkles className="h-3.5 w-3.5" /> Ready When You Are
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Let&rsquo;s Build Intelligent Systems That Help Your Business Work Smarter
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Let&rsquo;s build intelligent systems that help your business
              work smarter, move faster, and scale confidently.
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold text-navy transition-all hover:border-orange-bright hover:text-orange-bright"
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
export function AIMLDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CapabilityOverview />

        <CapabilitySection
          eyebrow="Generative AI"
          title="Generative AI"
          content="Develop intelligent applications powered by Large Language Models (LLMs) to transform customer experiences and business workflows."
          items={[
            "AI chatbots and virtual assistants",
            "Enterprise knowledge assistants",
            "Document intelligence solutions",
            "Content generation platforms",
            "AI-powered search and recommendations",
            "Custom LLM integrations and fine-tuning",
          ]}
          icon={Sparkles}
          visual={<GenAIVisual />}
        />

        <CapabilitySection
          eyebrow="NLP"
          title="Natural Language Processing (NLP)"
          content="Turn unstructured text into actionable insights through advanced language understanding systems."
          items={[
            "Text classification and sentiment analysis",
            "Information extraction and summarization",
            "OCR and document processing",
            "Multilingual language solutions",
            "Conversational AI systems",
            "Search and semantic retrieval platforms",
          ]}
          icon={MessageSquare}
          visual={<NLPVisual />}
          reverse
          bg="muted"
        />

        <CapabilitySection
          eyebrow="Computer Vision"
          title="Computer Vision"
          content="Build AI solutions that understand images and videos to automate inspection, monitoring, and recognition tasks."
          items={[
            "Object detection and recognition",
            "Image classification systems",
            "Quality inspection automation",
            "Vehicle and asset analytics",
            "Facial analysis and visual enhancement",
            "Industrial and retail vision solutions",
          ]}
          icon={Eye}
          visual={<CVVisual />}
        />

        <CapabilitySection
          eyebrow="AI Automation"
          title="AI Automation"
          content="Eliminate repetitive tasks and accelerate business operations with intelligent automation systems."
          items={[
            "Workflow automation",
            "Intelligent document processing",
            "Automated approvals and routing",
            "Data extraction and validation",
            "AI-enabled customer support",
            "Business process optimization",
          ]}
          icon={Workflow}
          visual={<AutomationVisual />}
          reverse
          bg="muted"
        />

        <CapabilitySection
          eyebrow="AI Agents"
          title="AI Agents"
          content="Deploy autonomous digital assistants that can reason, interact, and execute complex business workflows."
          items={[
            "Multi-step task automation",
            "Enterprise knowledge agents",
            "Customer support agents",
            "Internal productivity assistants",
            "AI copilots for business users",
            "Tool and API-integrated agents",
          ]}
          icon={Bot}
          visual={<AgentsVisual />}
        />

        <CapabilitySection
          eyebrow="Predictive Analytics"
          title="Predictive Analytics"
          content="Leverage historical and real-time data to forecast trends, identify opportunities, and improve strategic decisions."
          items={[
            "Demand forecasting",
            "Customer behavior analysis",
            "Risk and fraud detection",
            "Performance prediction models",
            "Recommendation engines",
            "Executive dashboards and insights",
          ]}
          icon={LineChart}
          visual={<PredictiveVisual />}
          reverse
          bg="muted"
        />

        <WhyDatagrid />
        <TechStack />
        <Journey />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
