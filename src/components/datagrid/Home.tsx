import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Code2, Brain, Bot, Users, Workflow,
  Smartphone, Cloud, Megaphone, Play, Globe, Briefcase, Users2, Clock,
  CheckCircle2, Cpu, Database, GitBranch, Layers, Boxes, ShieldCheck,
  Zap, Activity, Calendar, GraduationCap, Stethoscope, Hotel, ShoppingBag,
  Factory, Leaf, FileSpreadsheet, Building2, Gem,
} from "lucide-react";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { PixelGrid } from "@/components/datagrid/PixelGrid";
import heroImg from "@/assets/hero-grid.jpg";

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-32 pb-24 text-white lg:pt-40 lg:pb-32">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
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
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-orange-bright px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02]">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

        {/* Right: bento module-connect visual */}
        <div className="relative lg:col-span-5">
          <div className="relative grid h-full grid-cols-3 grid-rows-4 gap-3">
            {[
              { i: Code2, l: "Software", c: "bg-redorange" },
              { i: Brain, l: "AI / LLM", c: "bg-orange-bright" },
              { i: Cloud, l: "Cloud", c: "bg-orange" },
              { i: Smartphone, l: "Mobile", c: "bg-orange-yellow" },
              { i: Workflow, l: "ERP", c: "bg-orange-light" },
              { i: Bot, l: "Automation", c: "bg-redorange" },
            ].map((m, idx) => (
              <div
                key={idx}
                className={`glass-dark group flex flex-col justify-between rounded-2xl p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-orange-bright ${
                  idx === 0 ? "col-span-2 row-span-2" : ""
                } ${idx === 5 ? "col-span-2" : ""}`}
                style={{ animationDelay: `${idx * 0.1}s`, animation: "fade-up 0.8s ease-out both" }}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${m.c} text-white`}>
                  <m.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">{m.l}</div>
                  <div className="text-[10px] font-mono uppercase text-white/40">module.connect()</div>
                </div>
              </div>
            ))}
          </div>

          {/* small floating pixel cluster */}
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
  eyebrow,
  title,
  description,
  cta,
  light,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  light?: boolean;
}) {
  return (
    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
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
          <p className={`mt-4 max-w-2xl text-base ${light ? "text-white/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        )}
      </div>
      {cta && (
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

/* ───────────────────────── SERVICES ───────────────────────── */
const services = [
  { i: Code2, t: "Custom Software Development", d: "Tailor-made solutions designed around your unique business processes, goals and growth plans.", c: "from-redorange to-orange-bright", size: "lg" },
  { i: Brain, t: "Generative AI / LLM", d: "Build intelligent AI-powered applications, copilots and automation systems using modern LLM technologies.", c: "from-orange-bright to-orange", size: "lg" },
  { i: Cpu, t: "AI & ML Consultancy", d: "Identify, strategize and implement practical AI and machine learning solutions.", c: "from-orange to-orange-yellow", size: "sm" },
  { i: Users, t: "Resource Augmentation", d: "Scale your team with dedicated developers, designers, QA and DevOps experts.", c: "from-orange-yellow to-orange-light", size: "sm" },
  { i: Workflow, t: "ERP & Workflow Automation", d: "Streamline operations and automate workflows with scalable ERP solutions.", c: "from-orange to-redorange", size: "sm" },
  { i: Smartphone, t: "Mobile App Development", d: "Fast, scalable, user-friendly apps for Android, iOS and cross-platform.", c: "from-orange-bright to-orange-yellow", size: "sm" },
  { i: Cloud, t: "Cloud Solutions", d: "Secure, scalable, high-performance cloud infrastructure for modern businesses.", c: "from-redorange to-orange", size: "sm" },
  { i: Megaphone, t: "Digital Marketing", d: "Drive visibility, engagement and lead generation through performance-led marketing.", c: "from-orange-yellow to-redorange", size: "sm" },
];

function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Build Faster. Scale Smarter. Deliver Excellence."
          description="Eight core capabilities, one integrated engineering partner. Pick what you need — or stitch them together for full-stack outcomes."
          cta={{ label: "Discuss Your Project", href: "#cta" }}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.t}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                s.size === "lg" ? "lg:col-span-2 lg:row-span-1 lg:p-8" : ""
              } ${i === 0 ? "lg:row-span-1" : ""}`}
            >
              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-30 bg-gradient-to-br ${s.c}`}
                aria-hidden
              />
              <div>
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.c} text-white shadow-md`}>
                  <s.i className="h-6 w-6" />
                </div>
                <h3 className={`font-display font-extrabold leading-tight text-navy ${s.size === "lg" ? "text-2xl" : "text-lg"}`}>
                  {s.t}
                </h3>
                <p className={`mt-2 text-muted-foreground ${s.size === "lg" ? "text-base" : "text-sm"}`}>{s.d}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-bright opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── EXPERTISE ───────────────────────── */
const expertise = [
  { i: Zap, t: "AI-assisted development practices", d: "Accelerate delivery with intelligent codegen and copilots." },
  { i: Activity, t: "Faster project execution", d: "Intelligent automation across the SDLC." },
  { i: ShieldCheck, t: "AI-powered testing", d: "Higher software quality, fewer regressions." },
  { i: GitBranch, t: "Smarter planning & docs", d: "Modern AI assists planning and documentation." },
  { i: Layers, t: "Developer productivity", d: "Modern AI-enabled engineering tools throughout." },
  { i: Boxes, t: "Scalable, future-ready", d: "Architectures designed for what's next." },
  { i: Workflow, t: "Workflow automation", d: "Reduce manual effort across teams." },
  { i: Users2, t: "Experienced + AI", d: "Senior engineers paired with modern AI capabilities." },
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
          title="Accelerate Your Tech Roadmap with an AI-First Development Partner"
          description="A modern engineering operating system — combining seasoned teams with AI throughout the build."
          cta={{ label: "Discuss Partnership", href: "#cta" }}
        />

        <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => (
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
  { l: "Associations & Events", i: Calendar },
  { l: "Jewelry", i: Gem },
  { l: "Manufacturing & Supply", i: Factory },
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
    <section id="industries" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Domain depth across twelve verticals."
          description="From jewelry ERP to agritech to event tech — we bring battle-tested patterns to every engagement."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <a
              key={ind.l}
              href="#"
              className="group relative flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-orange-bright hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-orange-yellow transition-colors group-hover:bg-orange-bright group-hover:text-white">
                <ind.i className="h-5 w-5" />
              </div>
              <div className="font-display text-sm font-bold leading-tight text-navy">{ind.l}</div>
              <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-orange-bright" />
              <div className="font-mono text-[10px] text-muted-foreground/60">VERT.{String(i + 1).padStart(2, "0")}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRODUCTS ───────────────────────── */
const products = [
  { n: "UnifyAMS.ai", tag: "Associations & Events", d: "AI-powered association management — memberships, events, communities, all unified.", c: "from-redorange to-orange-bright" },
  { n: "Glammify.ai", tag: "Jewelry Tech", d: "Modern jewelry retail & catalog OS with AI-led merchandising and virtual try-on.", c: "from-orange-bright to-orange" },
  { n: "Optifyerp.ai", tag: "Manufacturing ERP", d: "Next-gen ERP for manufacturers — production, inventory, finance with AI insights.", c: "from-orange to-orange-yellow" },
  { n: "Sellingo.ai", tag: "Sales Enablement", d: "AI sales workspace — pipelines, outreach, conversation intelligence in one place.", c: "from-orange-yellow to-redorange" },
];

function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Software products that scale with you."
          description="Four AI-native SaaS products built on top of two decades of engineering experience."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p) => (
            <a
              key={p.n}
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className={`absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-30 group-hover:scale-125 bg-gradient-to-br ${p.c}`}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className={`inline-flex items-center gap-2 rounded-md bg-gradient-to-br ${p.c} px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}>
                    <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                    AI Native
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-extrabold text-navy">{p.n}</h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                </div>
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${p.c} p-3 shadow-md`}>
                  <div className="grid h-full w-full grid-cols-3 gap-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className={`rounded-[2px] ${i % 2 === 0 ? "bg-white/90" : "bg-white/30"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="relative mt-5 text-base text-muted-foreground">{p.d}</p>
              <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-orange-bright">
                Explore Product <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CASE STUDIES ───────────────────────── */
const cases = [
  { n: "SCMT", t: "Supply Chain Modernization", p: "Legacy ERP unable to scale across plants.", s: "Modular cloud-native SCM with AI demand forecasting.", o: "↑ 42% throughput", c: "from-redorange to-orange" },
  { n: "HIYA ERP", t: "Jewelry ERP Platform", p: "Multi-store ops with fragmented inventory.", s: "Unified ERP with realtime stock & POS sync.", o: "↑ 3x faster billing", c: "from-orange-bright to-orange-yellow" },
  { n: "Indie", t: "Events & Community App", p: "No central platform for community engagement.", s: "Mobile-first events platform with AI matchmaking.", o: "10k+ active members", c: "from-orange to-redorange" },
  { n: "MySphere", t: "Workspace Productivity", p: "Scattered tools fragmenting team workflow.", s: "Single AI-powered workspace OS.", o: "↓ 35% tool sprawl", c: "from-orange-yellow to-orange-bright" },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Featured Case Studies"
          title="Outcomes, not deliverables."
          description="A snapshot of recent work — from supply chain modernization to community platforms."
          cta={{ label: "View All Case Studies", href: "#" }}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((cs, i) => (
            <article
              key={cs.n}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              {/* visual */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${cs.c}`}>
                <div className="absolute inset-0 bg-grid-light opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <PixelGrid cols={14} rows={6} className="w-full opacity-90" />
                </div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
                  CS.{String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">
                  {cs.o}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-extrabold text-navy">{cs.n}</h3>
                <div className="text-sm font-semibold text-orange-bright">{cs.t}</div>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Problem</dt>
                    <dd className="text-navy/80">{cs.p}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Solution</dt>
                    <dd className="text-navy/80">{cs.s}</dd>
                  </div>
                </dl>

                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-orange-bright">
                  View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TECH STACK ───────────────────────── */
const stack = [
  { cat: "Backend Engineering", items: ["Python", "Django", "Flask", "FastAPI", "Laravel", "PHP", "Node.js"] },
  { cat: "Frontend & Mobile", items: ["React", "Next.js", "Vue.js", "Flutter", "Android", "iOS", "React Native"] },
  { cat: "AI & Data Engineering", items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "NLP", "Computer Vision"] },
  { cat: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Redis", "MongoDB", "MySQL"] },
];

const capabilities = [
  "Scalable Architecture", "API Development", "Microservices", "ERP Customization",
  "Cloud Deployment", "DevOps Automation", "AI Integration", "Cross-Platform Apps",
];

function TechStack() {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="From enterprise platforms to AI-powered applications."
          description="We build future-ready solutions with trusted, modern technologies across the stack."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {stack.map((g, i) => (
            <div key={g.cat} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-extrabold text-navy">{g.cat}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">stack.{i}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-orange-bright hover:bg-orange-bright hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-extrabold text-navy">Engineering Capabilities</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {capabilities.map((c) => (
              <div
                key={c}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright hover:shadow-card"
              >
                <CheckCircle2 className="h-4 w-4 text-orange-bright" />
                {c}
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
            <a href="mailto:hello@datagrid.co.in" className="group inline-flex items-center gap-2 rounded-full bg-orange-bright px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02]">
              Discuss Your Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

/* ───────────────────────── ROOT ───────────────────────── */
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
