import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Code2, Brain, Bot, Users, Workflow,
  Smartphone, Cloud, Megaphone, Play, Globe, Briefcase, Users2, Clock,
  CheckCircle2, Cpu, GitBranch, Layers, Boxes, ShieldCheck,
  Activity, Calendar, GraduationCap, Stethoscope, Hotel, ShoppingBag,
  Factory, Leaf, FileSpreadsheet, Building2, Gem, ClipboardList, Hammer,
  TestTube2, Rocket, LifeBuoy, ExternalLink, Server, Palette, Database,
  Cog,
} from "lucide-react";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { PixelGrid } from "@/components/datagrid/PixelGrid";
import heroImg from "@/assets/hero-grid.jpg";
import optifyLogo from "@/assets/products/optify.png";
import sellingoLogo from "@/assets/products/sellingo.jpg";
import glammifyLogo from "@/assets/products/glammify.png";
import unifyamsLogo from "@/assets/products/unifyams.png";
import caseScmt from "@/assets/cases/scmt.jpg";
import caseHiya from "@/assets/cases/hiya.jpg";
import caseIndie from "@/assets/cases/indie.jpg";
import caseMysphere from "@/assets/cases/mysphere.jpg";
import testi1 from "@/assets/testimonials/t1.jpg";
import testi2 from "@/assets/testimonials/t2.jpg";
import testi3 from "@/assets/testimonials/t3.jpg";

const activityPalette = ["bg-orange-pale", "bg-orange-light", "bg-orange-yellow", "bg-orange-bright"] as const;

function getActivityCellClass(index: number) {
  const intensity = (index * 7 + 3) % activityPalette.length;
  const isActive = (index * 5 + 2) % 9 > 2;
  return isActive ? activityPalette[intensity] : "bg-muted";
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-24 text-white lg:pt-52 lg:pb-32">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />
      <div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-orange-yellow" />
            <span>AI-First Engineering Partner</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI-First Software{" "}
            <span className="text-gradient-warm">Development</span>{" "}
            Company for Global Businesses
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Transform your business ideas into scalable digital products — engineered
            with modern AI, shipped at startup speed, built for enterprise scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Start Your Project</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#case-studies" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
              View Case Studies
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-orange-yellow hover:text-white">
              Schedule Consultation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 text-white">
            {[
              { k: "20+", v: "Years" },
              { k: "750+", v: "Projects" },
              { k: "15+", v: "Countries" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl font-extrabold text-orange-yellow">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* central core */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div
                className="absolute inset-0 -m-10 rounded-full opacity-50 blur-2xl"
                style={{ background: "var(--gradient-pixel)" }}
                aria-hidden
              />
              <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/25 bg-navy-deep/90 shadow-glow backdrop-blur">
                <PixelGrid cols={4} rows={4} className="w-10 opacity-90" />
                <div className="mt-1.5 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-yellow">
                  Datagrid
                </div>
                <div className="font-mono text-[8px] uppercase tracking-widest text-white/50">
                  core.os
                </div>
              </div>
            </div>

            {/* orbital ring */}
            <div className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-white/15" aria-hidden />
            <div className="pointer-events-none absolute inset-[2%] rounded-full border border-white/10" aria-hidden />

            {/* connector lines */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
              {[30, 90, 150, 210, 270, 330].map((deg) => {
                const r = 38;
                const rad = (deg * Math.PI) / 180;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <line
                    key={deg}
                    x1="50" y1="50" x2={x} y2={y}
                    stroke="url(#hg)"
                    strokeWidth="0.3"
                    strokeDasharray="0.8 1.2"
                  />
                );
              })}
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ed5816" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f7a626" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* 6 modules in balanced hex arrangement */}
            {[
              { i: Code2, l: "Software", deg: 270 },
              { i: Brain, l: "AI / LLM", deg: 330 },
              { i: Cloud, l: "Cloud", deg: 30 },
              { i: Workflow, l: "ERP", deg: 90 },
              { i: Bot, l: "Automation", deg: 150 },
              { i: Smartphone, l: "Mobile", deg: 210 },
            ].map((m, idx) => {
              const rad = (m.deg * Math.PI) / 180;
              const left = 50 + 42 * Math.cos(rad);
              const top = 50 + 42 * Math.sin(rad);
              const Icon = m.i;
              return (
                <div
                  key={m.l}
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 animate-float"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${idx * 0.4}s`,
                    animationDuration: "6s",
                  }}
                >
                  <div className="glass-dark flex w-32 items-center gap-2.5 rounded-2xl border border-white/15 px-3 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-orange-bright group-hover:shadow-glow">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-warm text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-display text-[12px] font-bold leading-tight text-white">{m.l}</div>
                      <div className="truncate font-mono text-[9px] uppercase text-white/45">module.connect()</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── SECTION HEADING ───────────────────────── */
function SectionHeading({
  eyebrow, title, description, cta, light, center,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${center ? "md:flex-col md:items-center md:text-center" : ""}`}>
      <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
          light ? "border-white/20 text-orange-yellow" : "border-navy/15 text-orange-bright"
        }`}>
          <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
          {eyebrow}
        </div>
        <h2 className={`font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 max-w-2xl text-base ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        )}
      </div>
      {cta && !center && (
        <a
          href={cta.href}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-card transition-all hover:bg-orange-bright"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

/* ───────────────────────── SERVICES (3-panel interactive) ───────────────────────── */
type Service = {
  i: typeof Code2;
  t: string;
  d: string;
  tags: string[];
  c: string;
};

const services: Service[] = [
  { i: Code2, t: "Custom Software Development", d: "Tailor-made software solutions designed around your unique business processes, goals, and long-term growth plans.", tags: ["Web Platforms", "SaaS", "Enterprise"], c: "from-redorange to-orange-bright" },
  { i: Brain, t: "Generative AI / LLM", d: "Build intelligent AI-powered applications, copilots, and workflow automation systems using modern LLM technologies.", tags: ["LLMs", "Copilots", "RAG"], c: "from-orange-bright to-orange" },
  { i: Cpu, t: "AI & ML Consultancy", d: "Identify, strategize, and implement practical AI and machine learning solutions for real business impact.", tags: ["Strategy", "MLOps", "Roadmaps"], c: "from-orange to-orange-yellow" },
  { i: Users, t: "Resource Augmentation", d: "Quickly scale your engineering capabilities with dedicated developers, designers, QA engineers, and DevOps specialists.", tags: ["Dev Teams", "QA", "DevOps"], c: "from-orange-yellow to-orange-light" },
  { i: Workflow, t: "ERP & Workflow Automation", d: "Streamline operations, improve visibility, and automate processes through scalable ERP and workflow systems.", tags: ["ERP", "Automation", "Ops"], c: "from-orange to-redorange" },
  { i: Smartphone, t: "Mobile App Development", d: "Build fast, scalable, and user-friendly mobile applications for Android, iOS, and cross-platform environments.", tags: ["iOS", "Android", "Cross-platform"], c: "from-orange-bright to-orange-yellow" },
  { i: Cloud, t: "Cloud Solutions", d: "Secure, scalable, and high-performance cloud infrastructure solutions for modern digital businesses.", tags: ["AWS", "Azure", "GCP"], c: "from-redorange to-orange" },
  { i: Megaphone, t: "Digital Marketing", d: "Drive brand visibility, customer engagement, and lead generation through performance-focused digital marketing solutions.", tags: ["SEO", "Performance", "Content"], c: "from-orange-yellow to-redorange" },
];

function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const ActiveIcon = s.i;
  const next = () => setActive((a) => (a + 1) % services.length);
  const prev = () => setActive((a) => (a - 1 + services.length) % services.length);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT — intro */}
            <div className="relative border-b border-border p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute right-6 top-6 opacity-60">
                <PixelGrid cols={6} rows={3} className="w-24" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-bright">
                What We Do
              </div>
              <h2 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-navy lg:text-6xl">
                Services
              </h2>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-warm" />
              <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
                We build scalable digital products and technology solutions tailored to business needs. From custom software and AI to cloud, ERP, and mobile apps, Datagrid helps companies innovate faster and grow smarter.
              </p>
              <div className="mt-10 hidden lg:block">
                <PixelGrid cols={10} rows={2} className="w-40 opacity-70" />
              </div>
            </div>

            {/* MIDDLE — numbered list */}
            <div className="relative border-b border-border p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10">
              <ul className="space-y-1">
                {services.map((srv, i) => {
                  const isActive = i === active;
                  return (
                    <li key={srv.t}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => setActive(i)}
                        className={`group flex w-full items-start gap-4 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                          isActive ? "bg-navy/[0.03]" : "hover:bg-navy/[0.02]"
                        }`}
                      >
                        <span className={`mt-1 font-mono text-xs tracking-widest transition-colors ${isActive ? "text-orange-bright" : "text-muted-foreground/70"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span className={`block font-display text-base font-bold leading-snug transition-colors ${isActive ? "text-navy" : "text-navy/60 group-hover:text-navy"}`}>
                            {srv.t}
                          </span>
                        </span>
                        <span
                          className={`mt-2 h-px flex-shrink-0 self-center bg-gradient-warm transition-all duration-500 ${
                            isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                          }`}
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT — active detail */}
            <div className="relative overflow-hidden bg-navy p-8 text-white lg:col-span-4 lg:p-10">
              <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl bg-gradient-to-br ${s.c} transition-all duration-700`}
                aria-hidden
              />
              <div className="pointer-events-none absolute bottom-6 right-6 opacity-50">
                <PixelGrid cols={5} rows={5} className="w-20" />
              </div>

              <div key={active} className="relative flex h-full min-h-[420px] flex-col animate-fade-up">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.c} shadow-glow`}>
                  <ActiveIcon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 font-display text-2xl font-extrabold leading-tight text-white lg:text-3xl">
                  {s.t}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75 lg:text-base">
                  {s.d}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-end justify-between pt-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                    <span className="text-orange-yellow">{String(active + 1).padStart(2, "0")}</span>
                    <span className="mx-1.5">/</span>
                    <span>{String(services.length).padStart(2, "0")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous service"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-orange-bright hover:bg-orange-bright"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next service"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-orange-bright hover:bg-orange-bright"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── EXPERTISE (AI engineering flow) ───────────────────────── */
const flow = [
  { i: ClipboardList, label: "Plan", note: "Discovery + AI-assisted scoping" },
  { i: Hammer, label: "Build", note: "Copilots + senior engineers" },
  { i: TestTube2, label: "Test", note: "AI-powered QA & coverage" },
  { i: Bot, label: "Automate", note: "Intelligent workflow ops" },
  { i: Rocket, label: "Scale", note: "Cloud-native, future-ready" },
  { i: LifeBuoy, label: "Support", note: "24x7 managed engineering" },
];

const expertiseTiles = [
  { i: Sparkles, t: "AI-assisted development", d: "Codegen, copilots & smart refactors throughout the SDLC." },
  { i: Activity, t: "Intelligent automation", d: "Operational workflows automated end-to-end." },
  { i: ShieldCheck, t: "AI-powered testing", d: "Higher quality, fewer regressions in production." },
  { i: GitBranch, t: "Smarter docs & planning", d: "AI keeps specs, ADRs and runbooks alive." },
  { i: Layers, t: "Developer productivity", d: "Modern AI tooling embedded in every team." },
  { i: Boxes, t: "Future-ready scale", d: "Architectures built for what's next." },
];

function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div
        className="absolute right-0 top-0 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our Expertise"
          title="An AI-first delivery pipeline, end to end."
          description="A modern engineering operating system — combining seasoned teams with AI at every stage of the build."
          cta={{ label: "Discuss Partnership", href: "#cta" }}
        />

        {/* Pipeline */}
        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px md:block" aria-hidden>
            <div className="h-full w-full bg-gradient-to-r from-transparent via-orange-bright/60 to-transparent" />
          </div>
          <div className="absolute left-0 right-0 top-7 hidden md:block" aria-hidden>
            <div className="mx-auto h-2 w-2 -translate-y-[3px] animate-pulse rounded-full bg-orange-bright shadow-[0_0_20px_4px_rgba(237,88,22,0.6)]" />
          </div>

          <ol className="relative grid grid-cols-2 gap-y-10 md:grid-cols-6 md:gap-x-4">
            {flow.map((step, i) => (
              <li key={step.label} className="group relative flex flex-col items-center text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-navy-deep transition-all group-hover:-translate-y-1 group-hover:border-orange-bright">
                  <step.i className="h-6 w-6 text-orange-yellow transition-colors group-hover:text-orange-bright" />
                  <span className="absolute -right-1 -top-1 rounded-full bg-orange-bright px-1.5 text-[9px] font-mono font-bold leading-4 text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-4 font-display text-sm font-extrabold uppercase tracking-widest text-white">
                  {step.label}
                </div>
                <div className="mt-1 max-w-[140px] text-[11px] leading-snug text-white/60">
                  {step.note}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Capability tiles */}
        <div className="mt-20 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {expertiseTiles.map((e, i) => (
            <div
              key={e.t}
              className="glass-dark group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-orange-bright"
            >
              <div className="absolute right-3 top-3 font-mono text-[10px] text-white/30">0{i + 1}</div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-warm text-white">
                <e.i className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">{e.t}</h3>
              <p className="mt-2 text-sm text-white/65">{e.d}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-orange-yellow">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-bright" /> live
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST MATRIX ───────────────────────── */
const trust = [
  { k: "15+", l: "Countries", i: Globe, d: "Global delivery footprint" },
  { k: "750+", l: "Projects Delivered", i: Briefcase, d: "Shipped & supported" },
  { k: "100+", l: "Team Size", i: Users2, d: "Engineers, designers, AI specialists" },
  { k: "20+", l: "Years Experience", i: Clock, d: "Two decades of building" },
];

function TrustMatrix() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Global Impact Grid"
          title="Trusted By Global Businesses"
          description="Proof points that span continents, industries and engineering disciplines."
        />

        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <div
              key={t.l}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-navy"
            >
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: "var(--gradient-pixel)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-orange-yellow">
                    <t.i className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    grid.0{i + 1}
                  </span>
                </div>
                <div className="mt-8 font-display text-5xl font-extrabold text-navy lg:text-6xl">
                  <span className="text-gradient-warm">{t.k}</span>
                </div>
                <div className="mt-2 font-display text-lg font-bold text-navy">{t.l}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>

                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-gradient-pixel"
                    style={{ width: `${[70, 90, 60, 100][i]}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── INDUSTRIES ───────────────────────── */
const industries: { l: string; i: typeof Calendar; tagline: string }[] = [
  { l: "Associations & Events", i: Calendar, tagline: "AMS + community OS" },
  { l: "Jewelry", i: Gem, tagline: "Retail ERP & catalog" },
  { l: "Manufacturing & Supply", i: Factory, tagline: "Production + SCM" },
  { l: "Hospitality", i: Hotel, tagline: "Guest experience tech" },
  { l: "Education", i: GraduationCap, tagline: "LMS & campus ops" },
  { l: "Retail & Ecommerce", i: ShoppingBag, tagline: "Omnichannel commerce" },
  { l: "Agritech", i: Leaf, tagline: "Farm-to-supply intel" },
  { l: "Insurance", i: ShieldCheck, tagline: "Claims & policy AI" },
  { l: "Real Estate", i: Building2, tagline: "CRM + property OS" },
  { l: "Accounting", i: FileSpreadsheet, tagline: "Books, audit, billing" },
  { l: "Healthcare", i: Stethoscope, tagline: "EMR & care workflows" },
  { l: "Corporates", i: Briefcase, tagline: "Internal platforms" },
];

const industryClusters: {
  id: string;
  code: string;
  title: string;
  blurb: string;
  items: { l: string; i: typeof Calendar; tagline: string }[];
}[] = [
  {
    id: "biz",
    code: "POD · 01",
    title: "Business Platforms",
    blurb: "Operating systems for organizations and teams.",
    items: [industries[0], industries[11], industries[9]],
  },
  {
    id: "commerce",
    code: "POD · 02",
    title: "Commerce & Lifestyle",
    blurb: "Customer-facing retail, hospitality and brand tech.",
    items: [industries[1], industries[5], industries[3]],
  },
  {
    id: "ops",
    code: "POD · 03",
    title: "Operations & Supply",
    blurb: "Workflows that move products, assets and land.",
    items: [industries[2], industries[6], industries[8]],
  },
  {
    id: "impact",
    code: "POD · 04",
    title: "Impact Sectors",
    blurb: "Mission-driven platforms with real-world outcomes.",
    items: [industries[4], industries[10], industries[7]],
  },
];

function Industries() {
  const [activeId, setActiveId] = useState<string>(industryClusters[0].id);
  const active = industryClusters.find((c) => c.id === activeId) ?? industryClusters[0];
  const ActiveIcons = active.items;

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[oklch(0.985_0.004_90)] py-24 lg:py-32"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.22]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, #f7a626, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-[36rem] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, #1f496b, transparent 70%)" }}
        aria-hidden
      />
      {/* faint connector lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="ind-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#1f496b" stopOpacity="0" />
            <stop offset="50%" stopColor="#ed5816" />
            <stop offset="100%" stopColor="#1f496b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 220 Q 400 120 800 280 T 1200 240" stroke="url(#ind-line)" strokeWidth="1.2" fill="none" />
        <path d="M0 560 Q 350 700 720 520 T 1200 600" stroke="url(#ind-line)" strokeWidth="1.2" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ── header band ── */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-bright shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-bright animate-pixel-pulse" />
              Industry Intelligence · 04 Pods
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[56px]">
              Industries <span className="text-gradient-warm">We Serve</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[17px]">
              Tailored digital solutions for industries that need scalable platforms, automation,
              intelligence, and long-term technology support.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "12+", l: "Verticals" },
                { k: "750+", l: "Projects" },
                { k: "15+", l: "Countries" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="relative overflow-hidden rounded-xl border border-navy/10 bg-white px-3 py-4 text-center shadow-card"
                >
                  <PixelGrid cols={4} rows={4} className="pointer-events-none absolute -right-2 -top-2 w-10 opacity-40" />
                  <div className="font-display text-2xl font-extrabold text-navy">{s.k}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── spotlight dashboard ── */}
        <div className="relative mt-14 grid gap-5 lg:grid-cols-12">
          {/* Left: pod selector */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-navy/10 bg-white p-2 shadow-card">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-redorange/70" />
                  <span className="h-2 w-2 rounded-full bg-orange-yellow/80" />
                  <span className="h-2 w-2 rounded-full bg-navy/30" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  industry.pods
                </span>
              </div>
              <ul className="space-y-1.5 p-1.5">
                {industryClusters.map((c, i) => {
                  const isActive = c.id === activeId;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(c.id)}
                        onClick={() => setActiveId(c.id)}
                        className={`group relative flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? "border-orange-bright/50 bg-gradient-to-r from-orange-bright/[0.07] to-transparent shadow-glow"
                            : "border-navy/[0.08] bg-white hover:border-orange-bright/30 hover:bg-orange-bright/[0.03]"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] font-bold tracking-[0.16em] ${
                            isActive ? "text-orange-bright" : "text-muted-foreground"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span className="block font-display text-[14px] font-extrabold leading-tight text-navy">
                            {c.title}
                          </span>
                          <span className="mt-0.5 block text-[11.5px] leading-snug text-muted-foreground">
                            {c.items.length} verticals
                          </span>
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 transition-all ${
                            isActive
                              ? "translate-x-0.5 text-orange-bright"
                              : "text-navy/25 group-hover:translate-x-0.5 group-hover:text-orange-bright"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* core terminal */}
              <div className="m-1.5 mt-3 overflow-hidden rounded-xl bg-navy p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-bright animate-pixel-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-yellow">
                    Datagrid · Core
                  </span>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-white/75">
                  One engineering core. Four industry pods. Hover a pod to focus its verticals.
                </p>
                <a
                  href="#cta"
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-[13px] font-bold text-orange-yellow hover:text-white"
                >
                  Don't see your industry?
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: spotlight + bento */}
          <div className="lg:col-span-8">
            {/* spotlight card */}
            <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
              <div
                className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(247,166,38,0.55), transparent 70%)" }}
                aria-hidden
              />
              <PixelGrid cols={6} rows={6} className="pointer-events-none absolute right-5 top-5 w-16 opacity-50" />

              <div className="relative flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-orange-bright">
                  {active.code}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-orange-bright/40 to-transparent" />
                <span className="rounded-full bg-navy/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-navy/60">
                  live
                </span>
              </div>
              <h3 className="relative mt-3 font-display text-2xl font-extrabold leading-tight text-navy sm:text-[28px]">
                {active.title}
              </h3>
              <p className="relative mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                {active.blurb}
              </p>

              {/* vertical tiles */}
              <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                {ActiveIcons.map((ind, idx) => {
                  const Icon = ind.i;
                  return (
                    <div
                      key={ind.l}
                      className="group relative overflow-hidden rounded-xl border border-navy/10 bg-[oklch(0.985_0.004_90)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:bg-white hover:shadow-glow"
                      style={{ animation: `fade-in 0.4s ease-out both`, animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:border-orange-bright/50 group-hover:text-orange-bright">
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </span>
                        <span className="font-mono text-[10px] text-navy/40">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mt-4 font-display text-[14px] font-extrabold leading-tight text-navy">
                        {ind.l}
                      </div>
                      <div className="mt-1 text-[11.5px] leading-snug text-muted-foreground">
                        {ind.tagline}
                      </div>
                      <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 text-navy/20 transition-all group-hover:translate-x-0.5 group-hover:text-orange-bright" />
                    </div>
                  );
                })}
              </div>

              {/* floating data tags */}
              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                {["scalable", "automation-ready", "AI-augmented", "long-term support"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-widest text-navy/70"
                  >
                    <span className="h-1 w-1 rounded-full bg-orange-bright" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* mini bento — other pods at a glance */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {industryClusters
                .filter((c) => c.id !== activeId)
                .map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    onMouseEnter={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                    className="group relative overflow-hidden rounded-xl border border-navy/10 bg-white p-4 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-orange-bright">
                        {c.code}
                      </span>
                      <span className="h-px flex-1 bg-navy/10" />
                    </div>
                    <div className="mt-2 font-display text-[14px] font-extrabold leading-tight text-navy">
                      {c.title}
                    </div>
                    <div className="mt-2 flex -space-x-1.5">
                      {c.items.map((ind) => {
                        const Icon = ind.i;
                        return (
                          <span
                            key={ind.l}
                            title={ind.l}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-navy/10 bg-[oklch(0.985_0.004_90)] text-navy transition-colors group-hover:border-orange-bright/40 group-hover:text-orange-bright"
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                        );
                      })}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* ── ticker of all verticals ── */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-navy/10 bg-white py-3 shadow-card">
          <div className="flex items-center gap-6 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industries.map((ind) => {
              const Icon = ind.i;
              return (
                <div
                  key={ind.l}
                  className="flex shrink-0 items-center gap-2 font-mono text-[11.5px] uppercase tracking-widest text-navy/70"
                >
                  <Icon className="h-3.5 w-3.5 text-orange-bright" />
                  {ind.l}
                  <span className="ml-4 h-1 w-1 rounded-full bg-navy/20" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}




/* ───────────────────────── PRODUCTS (ecosystem) ───────────────────────── */
const products = [
  { n: "Optify", logo: optifyLogo, tag: "ERP Simplified", d: "Next-gen ERP platform — production, inventory, finance and operations unified with AI insights.", accent: "from-[#5b3aa9] to-[#1f49a8]" },
  { n: "Sellingo", logo: sellingoLogo, tag: "Selling Simplified", d: "AI sales workspace — pipelines, outreach and conversation intelligence in one connected place.", accent: "from-[#1f496b] to-[#ed5816]" },
  { n: "Glammify", logo: glammifyLogo, tag: "Where Glamour Meets AI", d: "Modern jewelry & beauty retail OS with AI-led merchandising, catalogs and virtual try-on.", accent: "from-[#ed5816] to-[#f7a626]" },
  { n: "Unify AMS", logo: unifyamsLogo, tag: "Association Management", d: "AI-powered association management — memberships, events, communities, all unified.", accent: "from-[#d73b1a] to-[#f17e00]" },
];

function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Datagrid Product Ecosystem"
          title="Four AI-native products. One connected ecosystem."
          description="Vertical SaaS products built on two decades of engineering — each best-in-class, all interoperable."
        />

        <div className="relative">
          {/* central hub (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 lg:block" aria-hidden>
            <div
              className="absolute inset-0 -m-4 rounded-full opacity-50 blur-2xl"
              style={{ background: "var(--gradient-pixel)" }}
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-3xl border border-orange-bright/40 bg-navy shadow-glow">
              <PixelGrid cols={4} rows={4} className="w-9 opacity-90" />
              <div className="mt-1 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-yellow">
                Datagrid
              </div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-white/45">hub</div>
            </div>
          </div>

          {/* subtle connecting cross (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-bright/25 to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-bright/25 to-transparent lg:block" aria-hidden />

          <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
            {products.map((p, i) => (
              <a
                key={p.n}
                href="#"
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow"
                style={{ animationDelay: `${i * 0.08}s`, animation: "fade-up 0.7s ease-out both" }}
              >
                {/* corner gradient wash */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br opacity-[0.07] transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 ${p.accent}`}
                />
                {/* connector node toward center hub */}
                <div
                  className={`pointer-events-none absolute hidden h-2.5 w-2.5 rounded-full bg-orange-bright shadow-[0_0_14px_3px_rgba(237,88,22,0.55)] lg:block ${
                    i === 0
                      ? "bottom-0 right-0 translate-x-1.5 translate-y-1.5"
                      : i === 1
                      ? "bottom-0 left-0 -translate-x-1.5 translate-y-1.5"
                      : i === 2
                      ? "top-0 right-0 translate-x-1.5 -translate-y-1.5"
                      : "top-0 left-0 -translate-x-1.5 -translate-y-1.5"
                  }`}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-20 w-44 items-center">
                    <img
                      src={p.logo}
                      alt={`${p.n} logo`}
                      loading="lazy"
                      className="h-full w-auto max-w-full object-contain object-left transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-bright">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-bright" />
                    AI Native
                  </span>
                </div>

                <div className="relative mt-5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">{p.tag}</div>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">{p.d}</p>
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors group-hover:text-orange-bright">
                    Explore Product
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-orange-bright group-hover:bg-orange-bright group-hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── CASE STUDIES (featured + grid) ───────────────────────── */
const cases = [
  { n: "SCMT", t: "Supply Chain Modernization", p: "Legacy ERP unable to scale across plants.", s: "Modular cloud-native SCM with AI demand forecasting.", o: "↑ 42% throughput", img: caseScmt, ind: "Manufacturing" },
  { n: "HIYA ERP", t: "Jewelry ERP Platform", p: "Multi-store ops with fragmented inventory.", s: "Unified ERP with realtime stock & POS sync.", o: "↑ 3x faster billing", img: caseHiya, ind: "Jewelry" },
  { n: "Indie", t: "Events & Community App", p: "No central platform for community engagement.", s: "Mobile-first events platform with AI matchmaking.", o: "10k+ active members", img: caseIndie, ind: "Events" },
  { n: "MySphere", t: "Workspace Productivity", p: "Scattered tools fragmenting team workflow.", s: "Single AI-powered workspace OS.", o: "↓ 35% tool sprawl", img: caseMysphere, ind: "SaaS" },
];

function CaseStudies() {
  const [featured, ...rest] = cases;
  return (
    <section id="case-studies" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Featured Case Studies"
          title="Outcomes, not deliverables."
          description="A snapshot of recent work — from supply chain modernization to community platforms."
          cta={{ label: "View All Case Studies", href: "#" }}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured large image-led card */}
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow lg:col-span-7 lg:row-span-2">
            <div className="relative h-80 overflow-hidden lg:h-96">
              <img
                src={featured.img}
                alt={`${featured.n} case study`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                <Sparkles className="h-3 w-3 text-orange-yellow" /> Featured Case
              </div>
              <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-orange-bright px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-glow">
                {featured.o}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] font-bold uppercase tracking-widest text-orange-yellow">{featured.ind}</div>
                <h3 className="mt-1 font-display text-3xl font-extrabold text-white lg:text-4xl">{featured.n}</h3>
                <div className="mt-1 text-base font-semibold text-white/80">{featured.t}</div>
              </div>
            </div>

            <div className="p-8">
              <dl className="grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Challenge</dt>
                  <dd className="mt-1 text-sm text-navy/80">{featured.p}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Solution</dt>
                  <dd className="mt-1 text-sm text-navy/80">{featured.s}</dd>
                </div>
              </dl>

              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-bright"
              >
                View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* Smaller image-led cards */}
          {rest.map((cs, i) => (
            <article
              key={cs.n}
              className="group relative flex overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow lg:col-span-5"
            >
              <div className="relative w-40 shrink-0 overflow-hidden sm:w-48">
                <img
                  src={cs.img}
                  alt={`${cs.n} case study`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-navy backdrop-blur">
                  CS.{String(i + 2).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-orange-bright">{cs.ind}</div>
                    <h3 className="mt-1 font-display text-xl font-extrabold text-navy">{cs.n}</h3>
                    <div className="text-xs font-semibold text-navy/60">{cs.t}</div>
                  </div>
                  <span className="rounded-full border border-orange-bright/40 bg-orange-bright/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-orange-bright">
                    {cs.o}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-xs text-navy/70">
                  <span className="font-bold text-navy">Solution — </span>{cs.s}
                </p>

                <a href="#" className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-navy group-hover:text-orange-bright">
                  View Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-pixel transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TECH STACK (command center w/ tabs) ───────────────────────── */
const stack: {
  cat: string;
  icon: typeof Server;
  c: string;
  items: { name: string; level?: "core" | "ai" }[];
}[] = [
  {
    cat: "Backend Engineering",
    icon: Server,
    c: "from-redorange to-orange-bright",
    items: [
      { name: "Python", level: "core" }, { name: "Django" }, { name: "Flask" },
      { name: "FastAPI" }, { name: "Laravel" }, { name: "PHP" }, { name: "Node.js", level: "core" },
    ],
  },
  {
    cat: "Frontend & Mobile",
    icon: Palette,
    c: "from-orange-bright to-orange",
    items: [
      { name: "React", level: "core" }, { name: "Next.js" }, { name: "Vue.js" },
      { name: "Flutter" }, { name: "Android" }, { name: "iOS" }, { name: "React Native" },
    ],
  },
  {
    cat: "AI & Data Engineering",
    icon: Brain,
    c: "from-orange to-orange-yellow",
    items: [
      { name: "OpenAI", level: "ai" }, { name: "LangChain", level: "ai" }, { name: "TensorFlow" },
      { name: "PyTorch" }, { name: "NLP" }, { name: "Computer Vision" },
    ],
  },
  {
    cat: "Cloud & DevOps",
    icon: Cloud,
    c: "from-orange-yellow to-redorange",
    items: [
      { name: "AWS", level: "core" }, { name: "Docker" }, { name: "Kubernetes" },
      { name: "CI/CD" }, { name: "Redis" }, { name: "MongoDB" }, { name: "MySQL" },
    ],
  },
];

const capabilities = [
  { l: "Scalable Architecture", i: Layers },
  { l: "API Development", i: GitBranch },
  { l: "Microservices", i: Boxes },
  { l: "ERP Customization", i: Workflow },
  { l: "Cloud Deployment", i: Cloud },
  { l: "DevOps Automation", i: Cog },
  { l: "AI Integration", i: Brain },
  { l: "Cross-Platform Apps", i: Smartphone },
  { l: "Data Engineering", i: Database },
];

function TechStack() {
  const [active, setActive] = useState(0);
  const current = stack[active];
  const Icon = current.icon;

  return (
    <section id="tech" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -left-32 top-1/3 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="The Datagrid Technology Command Center."
          description="From enterprise platforms to AI-powered applications — we build future-ready solutions with trusted, modern technologies across the stack."
        />

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {/* terminal-style top bar */}
          <div className="flex items-center justify-between border-b border-border bg-navy px-5 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-redorange" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange-yellow" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange-light" />
              <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-white/60">
                ~ datagrid / tech.stack / {current.cat.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-orange-yellow sm:inline">
              ● live
            </span>
          </div>

          {/* tabs */}
          <div className="flex overflow-x-auto border-b border-border bg-secondary">
            {stack.map((g, i) => {
              const TIcon = g.icon;
              const isActive = i === active;
              return (
                <button
                  key={g.cat}
                  onClick={() => setActive(i)}
                  className={`relative inline-flex shrink-0 items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-navy" : "text-muted-foreground hover:text-navy"
                  }`}
                >
                  <TIcon className="h-4 w-4" />
                  {g.cat}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-pixel" />
                  )}
                </button>
              );
            })}
          </div>

          {/* content */}
          <div className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-4">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${current.c} text-white shadow-md`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">{current.cat}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {current.items.length} battle-tested technologies across our engineering practice.
              </p>
              <div className="mt-5 flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-bright" /> core
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-yellow" /> ai-native
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2.5">
                {current.items.map((it) => (
                  <span
                    key={it.name}
                    className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                      it.level === "core"
                        ? "border-orange-bright/40 bg-orange-bright/10 text-orange-bright hover:bg-orange-bright hover:text-white"
                        : it.level === "ai"
                        ? "border-orange-yellow/40 bg-orange-yellow/10 text-navy hover:bg-orange-yellow"
                        : "border-border bg-secondary text-navy hover:border-orange-bright hover:bg-orange-bright hover:text-white"
                    }`}
                  >
                    {it.level && <span className={`h-1.5 w-1.5 rounded-full ${it.level === "core" ? "bg-orange-bright" : "bg-orange-yellow"}`} />}
                    {it.name}
                  </span>
                ))}
              </div>

              {/* mini activity grid */}
              <div className="mt-8 grid grid-cols-16 gap-1" style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))" }} aria-hidden>
                {Array.from({ length: 48 }).map((_, k) => (
                  <span
                    key={k}
                    className={`h-3 rounded-[2px] ${getActivityCellClass(k)}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-extrabold text-navy">Engineering Capabilities</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.l}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright hover:shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright/10 to-orange-yellow/10 text-orange-bright transition-colors group-hover:from-orange-bright group-hover:to-orange group-hover:text-white">
                  <c.i className="h-4 w-4" />
                </span>
                {c.l}
                <CheckCircle2 className="ml-auto h-4 w-4 text-orange-bright opacity-60 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
const testimonials = [
  { n: "Apurwa Peters", r: "Founder, Indie Events", q: "Datagrid felt less like a vendor and more like our extended engineering team.", thumb: testi1, duration: "2:14" },
  { n: "Heather Williams", r: "Product Lead, MySphere", q: "Shipped 3x faster than we budgeted, with quality we didn't expect.", thumb: testi2, duration: "1:48" },
  { n: "Rohan Mehta", r: "Co-founder, HIYA", q: "Their AI-first approach unlocked features we couldn't have built in-house.", thumb: testi3, duration: "3:02" },
  { n: "Bhikshu Impex", r: "Director", q: "End-to-end ownership. Zero hand-holding required.", video: false },
  { n: "Matt — Callbox", r: "VP Engineering", q: "Modern engineering practices applied to a complex enterprise rollout.", video: false },
  { n: "Pankaj Ostwal — Madhya Bharat", r: "CEO", q: "Transformed how our teams operate on a daily basis.", video: false },
  { n: "Pradeep Goyal — Pradeep Metals", r: "Managing Director", q: "Reliable, strategic and consistently ahead of the curve.", video: false },
];

function Testimonials() {
  return (
    <section className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Video Testimonials"
          title="What partners say after shipping with us."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <article
              key={t.n}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
            >
              {/* Video thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <img
                  src={t.thumb}
                  alt={`${t.n} video testimonial thumbnail`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                {/* Play button */}
                <button
                  aria-label={`Play testimonial from ${t.n}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="absolute inset-0 -m-2 animate-pulse rounded-full bg-orange-bright/30 blur-md" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-navy shadow-glow ring-4 ring-white/20 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-bright group-hover:text-white">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </span>
                </button>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-navy/80 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-redorange" />
                  {t.duration}
                </div>
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-navy backdrop-blur">
                  <Play className="h-2.5 w-2.5 fill-current" /> Watch story
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-display text-base font-bold leading-snug text-navy">"{t.q}"</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pixel font-display text-sm font-extrabold text-white">
                    {t.n[0]}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-navy">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}


          {testimonials.slice(3).map((t) => (
            <div
              key={t.n}
              className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-orange-bright"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-pixel font-display text-base font-extrabold text-white">
                  {t.n[0]}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-navy">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/80">"{t.q}"</p>
              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-6 rounded-full bg-gradient-pixel" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-hero py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
      />
      <div
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Currently taking on Q1 engagements
          </div>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-gradient-warm">great together.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            From idea to execution, Datagrid helps businesses build scalable digital
            solutions with confidence, speed and long-term technology support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:hello@datagrid.co.in"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Discuss Your Project</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:hello@datagrid.co.in" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
              Schedule Consultation
            </a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-dark rounded-3xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-orange-yellow">datagrid.contact()</div>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                <a href="mailto:hello@datagrid.co.in" className="font-display text-lg font-bold text-white hover:text-orange-yellow">hello@datagrid.co.in</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                <a href="tel:+919999999999" className="font-display text-lg font-bold text-white hover:text-orange-yellow">+91 99999 99999</a>
              </div>
              <div className="pt-4">
                <PixelGrid cols={10} rows={3} className="opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <TrustMatrix />
        <Industries />
        <Products />
        <CaseStudies />
        <TechStack />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
