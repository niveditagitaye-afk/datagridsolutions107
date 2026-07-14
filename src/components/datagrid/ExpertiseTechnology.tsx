import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Server,
  Layout,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Workflow,
  ShieldCheck,
  Gauge,
  GitBranch,
  Sparkles,
  Boxes,
  Layers,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { ExpertiseCTA } from "./ExpertiseCTA";

/* ---------------- Tech chip (logo monogram + name) ---------------- */
type Tech = { name: string; mark: string; color: string };

function TechChip({ t }: { t: Tech }) {
  return (
    <div className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-bright/50 hover:shadow-md">
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-black tracking-tight text-white"
        style={{ background: t.color }}
        aria-hidden
      >
        {t.mark}
      </span>
      <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#1f496b]">
        {t.name}
      </span>
    </div>
  );
}

function TechGroup({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
        <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
        <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
          {title}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((t) => (
          <TechChip key={t.name} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section heading ---------------- */
function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright ${
            center ? "mx-auto" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
          {eyebrow}
        </div>
      )}
      <h2
        className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
        style={{ color: "#1f496b" }}
      >
        {title}
      </h2>
      {sub && <p className="mt-3 text-base leading-relaxed text-slate-600">{sub}</p>}
    </div>
  );
}

/* ---------------- Hero Visual ---------------- */
function TechHeroVisual() {
  const stacks: { label: string; icon: LucideIcon; count: string; tone: string }[] = [
    { label: "Backend", icon: Server, count: "9+", tone: "text-orange-yellow" },
    { label: "Frontend", icon: Layout, count: "7+", tone: "text-orange-bright" },
    { label: "Mobile", icon: Smartphone, count: "5+", tone: "text-emerald-400" },
    { label: "AI / ML", icon: Brain, count: "12+", tone: "text-orange-yellow" },
    { label: "Cloud", icon: Cloud, count: "8+", tone: "text-orange-bright" },
    { label: "Data", icon: Database, count: "10+", tone: "text-emerald-400" },
  ];

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
              Datagrid Tech Stack · Live
            </span>
          </div>
          <span className="text-[11px] font-medium text-white/50">50+ technologies</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {stacks.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <s.icon className={`h-4 w-4 ${s.tone}`} />
                <span className="text-[10px] font-semibold uppercase text-white/50">{s.count}</span>
              </div>
              <div className="mt-2 text-[13px] font-black text-white">{s.label}</div>
              <div className="text-[10px] text-white/50">technologies</div>
            </div>
          ))}
        </div>

        {/* Architecture pipeline */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
              Architecture Layers
            </span>
            <span className="text-[10px] text-emerald-400">● healthy</span>
          </div>
          <div className="flex items-center justify-between gap-1">
            {["UI", "API", "Services", "Data", "Cloud"].map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col items-center">
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-orange-bright/60 bg-orange-bright/10 text-orange-bright">
                    <Boxes className="h-3.5 w-3.5" />
                  </div>
                  <span className="mt-1 text-[9px] font-semibold text-white/70">{step}</span>
                </div>
                {i < 4 && (
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-bright/40 to-orange-yellow/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-orange-yellow" />
              <span className="text-[11px] font-semibold text-white/70">Performance</span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <div className="text-lg font-black text-white">99.99%</div>
                <div className="text-[10px] text-white/50">uptime</div>
              </div>
              <div className="flex gap-0.5">
                {[6, 8, 5, 9, 7, 10, 8].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-t bg-gradient-to-t from-orange-bright to-orange-yellow"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] font-semibold text-white/70">Security</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>DevSecOps</span>
                <span className="text-emerald-400">✓ enabled</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>Encryption</span>
                <span className="text-emerald-400">✓ AES-256</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>ISO 27001</span>
                <span className="text-emerald-400">✓ certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Intro visual ---------------- */
function IntroVisual() {
  const nodes = [
    { label: "Business Goals", icon: Target, tone: "text-orange-yellow" },
    { label: "Architecture", icon: Layers, tone: "text-orange-bright" },
    { label: "Engineering", icon: Cpu, tone: "text-emerald-400" },
    { label: "Scalability", icon: TrendingUp, tone: "text-orange-yellow" },
    { label: "Security", icon: Lock, tone: "text-orange-bright" },
    { label: "Outcomes", icon: Rocket, tone: "text-emerald-400" },
  ];
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
            Business-First Architecture
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            aligned
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {nodes.map((n) => (
            <div
              key={n.label}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:bg-white"
            >
              <n.icon className={`mx-auto h-5 w-5 ${n.tone}`} />
              <div className="mt-2 text-[11px] font-bold text-[#1f496b]">{n.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-orange-bright/20 bg-orange-bright/[0.04] p-3">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1f496b]">
            <Sparkles className="h-3.5 w-3.5 text-orange-bright" />
            Every technology choice mapped to a business outcome.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Tech data ---------------- */
const BACKEND: Tech[] = [
  { name: "Python", mark: "Py", color: "#3776AB" },
  { name: "Django", mark: "Dj", color: "#092E20" },
  { name: "FastAPI", mark: "FA", color: "#009688" },
  { name: "Flask", mark: "Fl", color: "#111827" },
  { name: "Laravel", mark: "Lv", color: "#FF2D20" },
  { name: "PHP", mark: "PHP", color: "#777BB4" },
  { name: "Node.js", mark: "Node", color: "#339933" },
  { name: "REST APIs", mark: "API", color: "#1f496b" },
  { name: "Microservices", mark: "μS", color: "#0f766e" },
];

const FRONTEND: Tech[] = [
  { name: "React.js", mark: "R", color: "#149ECA" },
  { name: "Next.js", mark: "N", color: "#111827" },
  { name: "Vue.js", mark: "V", color: "#41B883" },
  { name: "Angular", mark: "A", color: "#DD0031" },
  { name: "TypeScript", mark: "TS", color: "#3178C6" },
  { name: "HTML5 & CSS3", mark: "H5", color: "#E34F26" },
  { name: "PWA", mark: "PWA", color: "#5A0FC8" },
];

const MOBILE_NATIVE: Tech[] = [
  { name: "Java (Android)", mark: "Jv", color: "#EA2D2E" },
  { name: "Kotlin (Android)", mark: "Kt", color: "#7F52FF" },
  { name: "Swift (iOS)", mark: "Sw", color: "#FA7343" },
];
const MOBILE_CROSS: Tech[] = [
  { name: "Flutter", mark: "Fl", color: "#02569B" },
  { name: "React Native", mark: "RN", color: "#149ECA" },
];
const MOBILE_WEB: Tech[] = [
  { name: "Progressive Web Apps", mark: "PWA", color: "#5A0FC8" },
  { name: "Offline-First Apps", mark: "Off", color: "#0f766e" },
  { name: "Push Notifications", mark: "Push", color: "#d73b1a" },
  { name: "Device Integrations", mark: "Dev", color: "#1f496b" },
];

const AI_GENAI: Tech[] = [
  { name: "Large Language Models", mark: "LLM", color: "#111827" },
  { name: "Retrieval-Augmented Gen.", mark: "RAG", color: "#7c3aed" },
  { name: "AI Assistants & Copilots", mark: "Cop", color: "#0ea5e9" },
  { name: "Knowledge Management", mark: "KMS", color: "#1f496b" },
];
const AI_NLP: Tech[] = [
  { name: "Sentiment Analysis", mark: "Sen", color: "#0f766e" },
  { name: "Text Classification", mark: "Txt", color: "#d73b1a" },
  { name: "Document Intelligence", mark: "Doc", color: "#1f496b" },
  { name: "Chatbots & Conversational AI", mark: "Bot", color: "#7c3aed" },
];
const AI_VISION: Tech[] = [
  { name: "Object Detection", mark: "Obj", color: "#111827" },
  { name: "OCR Solutions", mark: "OCR", color: "#0ea5e9" },
  { name: "Image Analytics", mark: "Img", color: "#d73b1a" },
  { name: "Industrial Inspection", mark: "Ins", color: "#0f766e" },
];
const AI_PREDICT: Tech[] = [
  { name: "Demand Forecasting", mark: "Fcst", color: "#1f496b" },
  { name: "Recommendation Engines", mark: "Rec", color: "#7c3aed" },
  { name: "Performance Analytics", mark: "Perf", color: "#0ea5e9" },
  { name: "BI Models", mark: "BI", color: "#d73b1a" },
];
const AI_DATA: Tech[] = [
  { name: "ETL Pipelines", mark: "ETL", color: "#0f766e" },
  { name: "Data Warehousing", mark: "DW", color: "#1f496b" },
  { name: "Executive Dashboards", mark: "Dash", color: "#d73b1a" },
  { name: "Real-Time Reporting", mark: "RT", color: "#7c3aed" },
];

const CLOUD_PLATFORMS: Tech[] = [
  { name: "Amazon Web Services", mark: "AWS", color: "#FF9900" },
  { name: "Microsoft Azure", mark: "Az", color: "#0078D4" },
  { name: "Google Cloud Platform", mark: "GCP", color: "#4285F4" },
];
const CLOUD_DEVOPS: Tech[] = [
  { name: "Docker", mark: "D", color: "#2496ED" },
  { name: "Kubernetes", mark: "K8s", color: "#326CE5" },
  { name: "Terraform", mark: "Tf", color: "#7B42BC" },
  { name: "CI/CD Pipelines", mark: "CI", color: "#0f766e" },
  { name: "Infrastructure as Code", mark: "IaC", color: "#1f496b" },
  { name: "Automated Deployments", mark: "Dep", color: "#d73b1a" },
];
const CLOUD_MONITOR: Tech[] = [
  { name: "Prometheus", mark: "Pr", color: "#E6522C" },
  { name: "Grafana", mark: "Gr", color: "#F46800" },
  { name: "CloudWatch", mark: "CW", color: "#FF4F8B" },
  { name: "ELK Stack", mark: "ELK", color: "#005571" },
  { name: "Site Reliability Eng.", mark: "SRE", color: "#1f496b" },
];
const CLOUD_CAP: Tech[] = [
  { name: "Cloud Migration", mark: "Mig", color: "#0ea5e9" },
  { name: "Multi-Cloud Architecture", mark: "MC", color: "#7c3aed" },
  { name: "High Availability", mark: "HA", color: "#0f766e" },
  { name: "Disaster Recovery", mark: "DR", color: "#d73b1a" },
  { name: "Cost Optimization", mark: "Opt", color: "#1f496b" },
  { name: "Performance Engineering", mark: "Perf", color: "#EA580C" },
  { name: "Global Deployments", mark: "GD", color: "#0284C7" },
];

const DB_SQL: Tech[] = [
  { name: "MySQL", mark: "My", color: "#4479A1" },
  { name: "PostgreSQL", mark: "Pg", color: "#336791" },
  { name: "MsSQL", mark: "Ms", color: "#CC2927" },
];
const DB_NOSQL: Tech[] = [
  { name: "MongoDB", mark: "Mo", color: "#47A248" },
  { name: "Redis", mark: "Rd", color: "#DC382D" },
];
const DB_SEARCH: Tech[] = [
  { name: "Elasticsearch", mark: "ES", color: "#005571" },
  { name: "Data Lakes", mark: "Lake", color: "#0284C7" },
];
const DB_REPORT: Tech[] = [
  { name: "Business Intelligence", mark: "BI", color: "#1f496b" },
  { name: "Reporting Platforms", mark: "Rep", color: "#d73b1a" },
];

/* ---------------- Practice cards ---------------- */
const PRACTICES: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "AI-Assisted Development", body: "Accelerating development, testing, and documentation through intelligent tools.", icon: Sparkles },
  { title: "Agile Engineering", body: "Rapid iterations with continuous stakeholder collaboration.", icon: Workflow },
  { title: "DevSecOps", body: "Security embedded throughout the development lifecycle.", icon: ShieldCheck },
  { title: "Automated Quality Assurance", body: "Comprehensive testing and continuous integration pipelines.", icon: GitBranch },
  { title: "Cloud-Native Architecture", body: "Building scalable systems designed for modern infrastructure.", icon: Cloud },
  { title: "API-First Development", body: "Creating connected ecosystems and seamless integrations.", icon: Boxes },
  { title: "Performance Engineering", body: "Optimizing applications for speed, reliability, and scale.", icon: Zap },
  { title: "Continuous Learning Culture", body: "Adopting emerging technologies and industry best practices.", icon: Rocket },
];

/* ---------------- MAIN ---------------- */
export function ExpertiseTechnology() {
  return (
    <main className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 left-1/3 h-72 w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-in">
            <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-white/60">
              <Link to="/" className="hover:text-orange-yellow">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span>Expertise</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-orange-yellow">Technology</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <Cpu className="h-3 w-3" />
              Expertise / Technology
            </div>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Modern Technologies. Proven Engineering.{" "}
              <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                Scalable Solutions.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
              At Datagrid, we combine deep technical expertise with business understanding to build
              reliable, secure, and future-ready digital solutions. From enterprise platforms and
              mobile applications to AI systems and cloud-native architectures, our teams leverage
              modern open-source technologies that enable innovation without vendor lock-in.
            </p>
            <p className="mt-4 max-w-xl text-[13px] font-semibold text-orange-yellow">
              The right technology. The right architecture. The right outcomes.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/#cta"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow/50 hover:text-orange-yellow"
              >
                Discuss Your Requirements
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-in">
            <TechHeroVisual />
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Business-First Technology"
              title="Technology That Serves Business Goals"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              Technology is not an end in itself—it is a means to solve business problems, create
              competitive advantage, and support long-term growth.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Our architects and engineering teams carefully evaluate scalability, performance,
              maintainability, security, and total cost of ownership before recommending any
              technology stack. This business-first approach helps our clients build solutions that
              evolve with their organizations.
            </p>
          </div>
          <IntroVisual />
        </div>
      </section>

      {/* ============ BACKEND ============ */}
      <TechSection
        eyebrow="Backend Engineering"
        title="Backend Engineering"
        sub="Building robust, secure, and high-performance systems that power modern businesses."
        subheading="Technologies We Work With"
      >
        <TechGroup title="Backend Stack" items={BACKEND} />
      </TechSection>

      {/* ============ FRONTEND ============ */}
      <TechSection
        eyebrow="Frontend & Experience"
        title="Frontend & Experience Engineering"
        sub="Creating fast, intuitive, and engaging digital experiences across web platforms."
        subheading="Technologies We Work With"
        tone="alt"
      >
        <TechGroup title="Frontend Stack" items={FRONTEND} />
      </TechSection>

      {/* ============ MOBILE ============ */}
      <TechSection
        eyebrow="Mobile Technologies"
        title="Mobile Technologies"
        sub="Delivering seamless mobile experiences across every device and platform."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TechGroup title="Native Development" items={MOBILE_NATIVE} />
          <TechGroup title="Cross-Platform" items={MOBILE_CROSS} />
          <TechGroup title="Modern Mobile Web" items={MOBILE_WEB} />
        </div>
      </TechSection>

      {/* ============ AI & DATA ============ */}
      <TechSection
        eyebrow="AI & Data Engineering"
        title="Artificial Intelligence & Data Engineering"
        sub="Transforming business data into intelligence, automation, and competitive advantage."
        tone="alt"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TechGroup title="Generative AI" items={AI_GENAI} />
          <TechGroup title="Natural Language Processing" items={AI_NLP} />
          <TechGroup title="Computer Vision" items={AI_VISION} />
          <TechGroup title="Predictive Analytics" items={AI_PREDICT} />
          <TechGroup title="Data Engineering" items={AI_DATA} />
        </div>
      </TechSection>

      {/* ============ CLOUD ============ */}
      <TechSection
        eyebrow="Cloud & Infrastructure"
        title="Cloud & Infrastructure Engineering"
        sub="Building resilient, secure, and cloud-native platforms that scale with business growth."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <TechGroup title="Cloud Platforms" items={CLOUD_PLATFORMS} />
          <TechGroup title="DevOps & Platform Engineering" items={CLOUD_DEVOPS} />
          <TechGroup title="Monitoring & Reliability" items={CLOUD_MONITOR} />
          <TechGroup title="Cloud Capabilities" items={CLOUD_CAP} />
        </div>
      </TechSection>

      {/* ============ DATABASES ============ */}
      <TechSection
        eyebrow="Data Platforms"
        title="Database & Data Platforms"
        sub="Managing structured and unstructured data with performance, security, and scalability."
        tone="alt"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TechGroup title="Relational Databases" items={DB_SQL} />
          <TechGroup title="NoSQL Platforms" items={DB_NOSQL} />
          <TechGroup title="Search & Analytics" items={DB_SEARCH} />
          <TechGroup title="Reporting Platforms" items={DB_REPORT} />
        </div>
      </TechSection>

      {/* ============ PRACTICES ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Practices"
            title="Engineering Practices That Define Our Work"
            sub="Technology alone does not guarantee success. Our delivery processes and engineering culture ensure quality, reliability, and long-term sustainability."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICES.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-bright/10 text-orange-bright">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-black" style={{ color: "#1f496b" }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA (reusable) ============ */}
      <ExpertiseCTA
        heading="Looking for the Right"
        highlight="Technology Partner?"
        body="Whether you're building a new product, modernizing enterprise systems, implementing AI solutions, or scaling global platforms, Datagrid provides the expertise, talent, and engineering excellence to turn technology into lasting business value."
        tagline="Modern technologies. Proven expertise. Real business outcomes."
      />
    </main>
  );
}

/* ---------------- Section wrapper ---------------- */
function TechSection({
  eyebrow,
  title,
  sub,
  subheading,
  tone,
  children,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  subheading?: string;
  tone?: "alt";
  children: React.ReactNode;
}) {
  return (
    <section className={`relative py-20 lg:py-24 ${tone === "alt" ? "bg-slate-50/60" : ""}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
        {subheading && (
          <div className="mt-8 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
              {subheading}
            </span>
          </div>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
