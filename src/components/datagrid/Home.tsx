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
                  <div className="font-display text-sm font-bold text-white">{m.l}</div>
                  <div className="text-[10px] font-mono uppercase text-white/40">module.connect()</div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 animate-float opacity-90">
            <PixelGrid cols={6} rows={4} />
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
const industries = [
  { l: "Associations & Events", i: Calendar, featured: true },
  { l: "Jewelry", i: Gem, featured: true },
  { l: "Manufacturing & Supply", i: Factory, featured: true },
  { l: "Hospitality", i: Hotel },
  { l: "Education", i: GraduationCap },
  { l: "Retail & Ecommerce", i: ShoppingBag },
  { l: "Agritech", i: Leaf },
  { l: "Insurance", i: ShieldCheck },
  { l: "Real Estate", i: Building2 },
  { l: "Accounting", i: FileSpreadsheet },
  { l: "Healthcare", i: Stethoscope },
  { l: "Corporates", i: Briefcase },
];

function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      {/* world-map style dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.40 0.07 240) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Domain depth across twelve verticals."
          description="From jewelry ERP to agritech to event tech — we bring battle-tested patterns to every engagement."
        />

        {/* Mobile horizontal scroll, desktop matrix grid */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const featured = ind.featured;
            return (
              <a
                key={ind.l}
                href="#"
                className={`group relative w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border p-5 transition-all hover:-translate-y-1 md:w-auto ${
                  featured
                    ? "border-transparent bg-navy text-white shadow-navy hover:shadow-glow"
                    : "border-border bg-card hover:border-orange-bright"
                }`}
              >
                {/* warm accent corner */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 ${
                    featured ? "opacity-40" : "opacity-0 group-hover:opacity-30"
                  }`}
                  style={{ background: "var(--gradient-pixel)" }}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      featured
                        ? "bg-white/10 text-orange-yellow"
                        : "bg-navy text-orange-yellow group-hover:bg-orange-bright group-hover:text-white"
                    }`}>
                      <ind.i className="h-5 w-5" />
                    </div>
                    {featured && (
                      <span className="rounded-full border border-orange-bright/50 bg-orange-bright/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-orange-yellow">
                        Flagship
                      </span>
                    )}
                  </div>

                  <div className={`font-display text-base font-extrabold leading-tight ${
                    featured ? "text-white" : "text-navy"
                  }`}>
                    {ind.l}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className={`font-mono text-[10px] tracking-widest ${
                      featured ? "text-white/40" : "text-muted-foreground/60"
                    }`}>
                      VERT.{String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      featured ? "text-orange-yellow" : "text-muted-foreground group-hover:text-orange-bright"
                    }`} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRODUCTS (ecosystem) ───────────────────────── */
const products = [
  { n: "UnifyAMS.ai", tag: "Associations & Events", d: "AI-powered association management — memberships, events, communities, all unified.", c: "from-redorange to-orange-bright" },
  { n: "Glammify.ai", tag: "Jewelry Tech", d: "Modern jewelry retail & catalog OS with AI-led merchandising and virtual try-on.", c: "from-orange-bright to-orange" },
  { n: "Optifyerp.ai", tag: "Manufacturing ERP", d: "Next-gen ERP for manufacturers — production, inventory, finance with AI insights.", c: "from-orange to-orange-yellow" },
  { n: "Sellingo.ai", tag: "Sales Enablement", d: "AI sales workspace — pipelines, outreach, conversation intelligence in one place.", c: "from-orange-yellow to-redorange" },
];

function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Datagrid Product Ecosystem"
          title="Four AI-native products. One connected ecosystem."
          description="Vertical SaaS products built on two decades of engineering — each best-in-class, all interoperable."
        />

        <div className="relative">
          {/* central ecosystem hub (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 lg:block" aria-hidden>
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-2xl"
              style={{ background: "var(--gradient-pixel)" }}
            />
            <div className="absolute inset-6 rounded-full border border-orange-bright/30" />
            <div className="absolute inset-10 flex items-center justify-center rounded-full border border-orange-bright/50 bg-navy text-orange-yellow font-display text-xs font-extrabold uppercase tracking-widest">
              Datagrid
            </div>
          </div>

          {/* connecting cross lines on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-bright/30 to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-bright/30 to-transparent lg:block" aria-hidden />

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((p, i) => (
              <a
                key={p.n}
                href="#"
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animation: "fade-up 0.7s ease-out both",
                }}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-30 group-hover:scale-125 bg-gradient-to-br ${p.c}`}
                />
                {/* connector dot pointing to center */}
                <div className={`pointer-events-none absolute hidden h-2 w-2 rounded-full bg-orange-bright shadow-[0_0_12px_2px_rgba(237,88,22,0.6)] lg:block ${
                  i === 0 ? "bottom-0 right-0 translate-x-1 translate-y-1"
                  : i === 1 ? "bottom-0 left-0 -translate-x-1 translate-y-1"
                  : i === 2 ? "top-0 right-0 translate-x-1 -translate-y-1"
                  : "top-0 left-0 -translate-x-1 -translate-y-1"
                }`} aria-hidden />

                <div className="relative flex items-start justify-between">
                  <div>
                    <div className={`inline-flex items-center gap-2 rounded-md bg-gradient-to-br ${p.c} px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}>
                      <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                      AI Native
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-extrabold text-navy">{p.n}</h3>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                  </div>
                  <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${p.c} p-3 shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <div className="grid h-full w-full grid-cols-3 gap-0.5">
                      {Array.from({ length: 9 }).map((_, k) => (
                        <div key={k} className={`rounded-[2px] ${k % 2 === 0 ? "bg-white/90" : "bg-white/30"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="relative mt-5 text-base text-muted-foreground">{p.d}</p>
                <div className="relative mt-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-orange-bright">
                    Explore Product <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-orange-bright group-hover:text-orange-bright">
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
  { n: "SCMT", t: "Supply Chain Modernization", p: "Legacy ERP unable to scale across plants.", s: "Modular cloud-native SCM with AI demand forecasting.", o: "↑ 42% throughput", c: "from-redorange to-orange", ind: "Manufacturing" },
  { n: "HIYA ERP", t: "Jewelry ERP Platform", p: "Multi-store ops with fragmented inventory.", s: "Unified ERP with realtime stock & POS sync.", o: "↑ 3x faster billing", c: "from-orange-bright to-orange-yellow", ind: "Jewelry" },
  { n: "Indie", t: "Events & Community App", p: "No central platform for community engagement.", s: "Mobile-first events platform with AI matchmaking.", o: "10k+ active members", c: "from-orange to-redorange", ind: "Events" },
  { n: "MySphere", t: "Workspace Productivity", p: "Scattered tools fragmenting team workflow.", s: "Single AI-powered workspace OS.", o: "↓ 35% tool sprawl", c: "from-orange-yellow to-orange-bright", ind: "SaaS" },
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

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Featured large */}
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow lg:col-span-7 lg:row-span-2">
            <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${featured.c}`}>
              <div className="absolute inset-0 bg-grid-light opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <PixelGrid cols={18} rows={8} className="w-full opacity-90" />
              </div>
              {/* gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                <Sparkles className="h-3 w-3" /> Featured Case
              </div>
              <div className="absolute right-6 top-6 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy">
                {featured.o}
              </div>
            </div>
            {/* orange accent line */}
            <div className="h-1 w-full bg-gradient-pixel" />
            <div className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-bright">{featured.ind}</div>
              <h3 className="mt-2 font-display text-3xl font-extrabold text-navy">{featured.n}</h3>
              <div className="mt-1 text-base font-semibold text-navy/70">{featured.t}</div>

              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Challenge</dt>
                  <dd className="mt-1 text-sm text-navy/80">{featured.p}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Solution</dt>
                  <dd className="mt-1 text-sm text-navy/80">{featured.s}</dd>
                </div>
              </dl>

              <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-bright">
                View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* Smaller cards */}
          {rest.map((cs, i) => (
            <article
              key={cs.n}
              className="group relative flex overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow lg:col-span-5"
            >
              <div className={`relative w-32 shrink-0 overflow-hidden bg-gradient-to-br ${cs.c}`}>
                <div className="absolute inset-0 bg-grid-light opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <PixelGrid cols={5} rows={9} className="w-full opacity-90" />
                </div>
                <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-navy">
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
              {/* orange accent line */}
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
                {Array.from({ length: 48 }).map((_, k) => {
                  const palette = ["bg-orange-pale", "bg-orange-light", "bg-orange-yellow", "bg-orange-bright"];
                  const intensity = Math.floor(Math.random() * 4);
                  return (
                    <span
                      key={k}
                      className={`h-3 rounded-[2px] ${Math.random() > 0.35 ? palette[intensity] : "bg-muted"}`}
                    />
                  );
                })}
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
  { n: "Apurwa Peters", r: "Founder", q: "Datagrid felt less like a vendor and more like our extended engineering team.", video: true, c: "from-redorange to-orange" },
  { n: "Heather", r: "Product Lead", q: "Shipped 3x faster than we budgeted, with quality we didn't expect.", video: true, c: "from-orange-bright to-orange-yellow" },
  { n: "Indie", r: "Co-founder", q: "Their AI-first approach unlocked features we couldn't have built in-house.", video: true, c: "from-orange to-redorange" },
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
          eyebrow="Testimonials"
          title="What partners say after shipping with us."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.n}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${t.c} p-7 text-white shadow-card transition-all hover:-translate-y-1 hover:shadow-glow`}
            >
              <div className="absolute inset-0 bg-grid-light opacity-30" />
              <div className="relative flex h-56 flex-col justify-between">
                <button
                  aria-label={`Play testimonial from ${t.n}`}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-navy shadow-glow transition-transform group-hover:scale-110"
                >
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </button>
                <div>
                  <p className="font-display text-lg font-bold leading-snug">"{t.q}"</p>
                  <div className="mt-3 text-sm font-semibold text-white/90">{t.n}</div>
                  <div className="text-xs text-white/70">{t.r}</div>
                </div>
              </div>
            </div>
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
