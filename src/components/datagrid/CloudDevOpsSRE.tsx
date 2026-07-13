import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Server,
  ShieldCheck,
  Activity,
  Gauge,
  GitBranch,
  Container,
  Boxes,
  Workflow,
  Rocket,
  Zap,
  Database,
  Globe,
  Lock,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cog,
  Sparkles,
  Network,
  Cpu,
  HardDrive,
  type LucideIcon,
} from "lucide-react";

/* ---------------- Hero Visual ---------------- */
function CloudHeroVisual() {
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
              Cloud Control Plane · Live
            </span>
          </div>
          <span className="text-[11px] font-medium text-white/50">Uptime 99.99%</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "AWS", value: "42", icon: Cloud, tone: "text-orange-yellow" },
            { label: "Azure", value: "18", icon: Cloud, tone: "text-orange-bright" },
            { label: "GCP", value: "9", icon: Cloud, tone: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <s.icon className={`h-4 w-4 ${s.tone}`} />
                <span className="text-[10px] font-semibold uppercase text-white/50">{s.label}</span>
              </div>
              <div className="mt-2 text-xl font-black text-white">{s.value}</div>
              <div className="text-[10px] text-white/50">clusters</div>
            </div>
          ))}
        </div>

        {/* CI/CD Pipeline */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">CI/CD Pipeline</span>
            <span className="text-[10px] text-emerald-400">● passing</span>
          </div>
          <div className="flex items-center justify-between gap-1">
            {["Code", "Build", "Test", "Deploy", "Monitor"].map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col items-center">
                  <div className={`grid h-7 w-7 place-items-center rounded-full border ${i < 4 ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-400" : "border-orange-bright/60 bg-orange-bright/10 text-orange-bright animate-pulse"}`}>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="mt-1 text-[9px] font-semibold text-white/70">{step}</span>
                </div>
                {i < 4 && <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/40 to-orange-bright/40" />}
              </div>
            ))}
          </div>
        </div>

        {/* Kubernetes + Security */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2">
              <Container className="h-4 w-4 text-orange-yellow" />
              <span className="text-[11px] font-semibold text-white/70">Kubernetes</span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <div className="text-lg font-black text-white">128</div>
                <div className="text-[10px] text-white/50">pods running</div>
              </div>
              <div className="flex gap-0.5">
                {[6, 8, 5, 9, 7, 10, 8].map((h, i) => (
                  <div key={i} className="w-1 rounded-t bg-gradient-to-t from-orange-bright to-orange-yellow" style={{ height: `${h * 3}px` }} />
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
                <span>IAM policies</span><span className="text-emerald-400">✓ 100%</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>Encryption</span><span className="text-emerald-400">✓ AES-256</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/70">
                <span>Compliance</span><span className="text-emerald-400">✓ SOC2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable primitives ---------------- */
function SectionHeading({ eyebrow, title, sub, center }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright ${center ? "mx-auto" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: "#1f496b" }}>
        {title}
      </h2>
      {sub && <p className="mt-3 text-base leading-relaxed text-slate-600">{sub}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-xl ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
      {children}
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export function CloudDevOpsSRE() {
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
              <span>Services</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-orange-yellow">Cloud, DevOps & SRE</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <Cloud className="h-3 w-3" />
              Cloud, DevOps & SRE Services
            </div>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Build Secure, Scalable &{" "}
              <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                Always-On
              </span>{" "}
              Digital Infrastructure
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
              Modern businesses need more than servers—they need reliable, automated, and cloud-native platforms
              that support rapid innovation and continuous growth.
            </p>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/60">
              Datagrid helps organizations design, deploy, automate, monitor, and optimize infrastructure across
              AWS, Microsoft Azure, and Google Cloud Platform.
            </p>
            <p className="mt-4 max-w-xl text-[13px] font-semibold text-orange-yellow">
              Automate deployments. Improve reliability. Scale without limits.
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
            <CloudHeroVisual />
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Cloud Engineering"
              title="Cloud Infrastructure Built for Growth"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              Whether you're launching a startup MVP, migrating enterprise workloads, or supporting millions of
              users, our cloud and DevOps teams create secure and resilient platforms that accelerate delivery
              and reduce operational complexity.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              From infrastructure automation to 24×7 monitoring, we provide end-to-end cloud engineering services
              tailored to your business requirements.
            </p>
          </div>

          {/* Architecture card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-bright/10 via-transparent to-navy-deep/5 blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1f496b" }}>
                  Reference Architecture
                </span>
                <span className="text-[10px] font-semibold text-emerald-600">● Production ready</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Web / Mobile Apps", icon: Globe, tone: "bg-orange-bright/10 text-orange-bright" },
                  { label: "Load Balancer & CDN", icon: Network, tone: "bg-orange-yellow/10 text-orange-bright" },
                  { label: "Kubernetes / Compute", icon: Container, tone: "bg-[#1f496b]/10 text-[#1f496b]" },
                  { label: "Managed Databases", icon: Database, tone: "bg-emerald-500/10 text-emerald-600" },
                  { label: "Monitoring & Observability", icon: Activity, tone: "bg-orange-bright/10 text-orange-bright" },
                  { label: "Security & IAM", icon: Lock, tone: "bg-[#1f496b]/10 text-[#1f496b]" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-3 py-2.5">
                    <div className={`grid h-9 w-9 place-items-center rounded-lg ${row.tone}`}>
                      <row.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#1f496b" }}>{row.label}</span>
                    <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES: Cloud Platforms ============ */}
      <section className="relative bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Multi-Cloud"
            title="Our Cloud & DevOps Capabilities"
            sub="Deep engineering expertise across the world's leading cloud platforms."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Amazon Web Services (AWS)",
                blurb: "Build highly available and cost-efficient cloud platforms.",
                items: [
                  "EC2 & Auto Scaling",
                  "RDS & Database Management",
                  "S3 & Cloud Storage",
                  "Route53 & DNS Management",
                  "Lambda & Serverless Computing",
                  "VPC & Network Architecture",
                  "CloudFront & CDN",
                  "CloudWatch Monitoring",
                  "Security & IAM Management",
                ],
              },
              {
                title: "Microsoft Azure",
                blurb: "Enterprise-grade cloud solutions for modern organizations.",
                items: [
                  "Azure Virtual Machines",
                  "Azure Kubernetes Service (AKS)",
                  "Azure DevOps Pipelines",
                  "Azure Active Directory",
                  "Storage & Database Services",
                  "Backup & Disaster Recovery",
                  "Enterprise Identity Management",
                  "Security & Compliance Solutions",
                ],
              },
              {
                title: "Google Cloud Platform (GCP)",
                blurb: "Scalable infrastructure for modern digital products.",
                items: [
                  "Compute Engine",
                  "Cloud Run",
                  "Kubernetes Engine (GKE)",
                  "Cloud SQL",
                  "BigQuery Analytics",
                  "Serverless Applications",
                  "AI & Data Services",
                  "Global Load Balancing",
                ],
              },
            ].map((p) => (
              <Card key={p.title}>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-bright/15 to-orange-yellow/15 text-orange-bright">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black" style={{ color: "#1f496b" }}>{p.title}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">{p.blurb}</p>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Services Include</div>
                  <ul className="mt-3 space-y-1.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[13px] text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-bright" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVOPS ENGINEERING ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Automation"
            title="DevOps Engineering Services"
            sub="Accelerate software delivery through automation, standardization, and modern engineering practices."
            center
          />

          {/* Pipeline flow */}
          <div className="mt-10 hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 md:block">
            <div className="flex items-center justify-between gap-2">
              {[
                { label: "Code", icon: GitBranch },
                { label: "Build", icon: Cog },
                { label: "Test", icon: CheckCircle2 },
                { label: "Deploy", icon: Rocket },
                { label: "Monitor", icon: Activity },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-orange-bright/30 bg-white text-orange-bright shadow-sm">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[12px] font-bold" style={{ color: "#1f496b" }}>{s.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-px flex-1 bg-gradient-to-r from-orange-bright/40 via-orange-yellow/40 to-orange-bright/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {([
              { title: "CI/CD Automation", icon: Workflow, items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure DevOps", "Automated release pipelines"] },
              { title: "Infrastructure as Code (IaC)", icon: Boxes, items: ["Terraform", "CloudFormation", "Ansible", "Automated environment provisioning"] },
              { title: "Containerization & Orchestration", icon: Container, items: ["Docker", "Kubernetes", "Helm", "Container security", "Multi-environment deployments"] },
              { title: "Release Management", icon: Rocket, items: ["Blue-Green deployments", "Canary releases", "Rollback strategies", "Zero-downtime deployments"] },
            ] as { title: string; icon: LucideIcon; items: string[] }[]).map((g) => (
              <Card key={g.title}>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#1f496b]/10 text-[#1f496b]">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black" style={{ color: "#1f496b" }}>{g.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold text-slate-700 transition-colors group-hover:border-orange-bright/30 group-hover:bg-orange-bright/5 group-hover:text-orange-bright">
                      {it}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SRE (DARK) ============ */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-15" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-72 w-[32rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow" />
              Site Reliability Engineering
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Site Reliability Engineering (SRE)
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Keeping mission-critical systems available, secure, and high-performing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Uptime", value: "99.99%", icon: Activity, tone: "text-emerald-400" },
              { label: "MTTR", value: "< 15 min", icon: Zap, tone: "text-orange-yellow" },
              { label: "Incidents", value: "2 open", icon: AlertTriangle, tone: "text-orange-bright" },
              { label: "Alerts (24h)", value: "18", icon: Gauge, tone: "text-white" },
            ].map((k) => (
              <div key={k.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <k.icon className={`h-5 w-5 ${k.tone}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{k.label}</span>
                </div>
                <div className="mt-3 text-2xl font-black text-white">{k.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              "24×7 monitoring and alerting",
              "Performance optimization",
              "Capacity planning",
              "Incident management",
              "Disaster recovery planning",
              "Backup automation",
              "High availability architectures",
              "Security hardening",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[13px] text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOUD MIGRATION ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Migration"
            title="Cloud Migration Services"
            sub="Move to the cloud with minimal disruption and maximum business value."
            center
          />

          <div className="mt-12">
            <div className="grid gap-3 md:grid-cols-6">
              {[
                { label: "Assess", icon: BarChart3 },
                { label: "Plan", icon: Layers },
                { label: "Migrate", icon: RefreshCw },
                { label: "Secure", icon: ShieldCheck },
                { label: "Optimize", icon: Gauge },
                { label: "Scale", icon: Rocket },
              ].map((s, i) => (
                <div key={s.label} className="relative">
                  <Card className="!p-5 text-center">
                    <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Step {i + 1}
                    </div>
                    <div className="mt-1 text-sm font-black" style={{ color: "#1f496b" }}>{s.label}</div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                "On-premise to cloud migration",
                "Legacy application modernization",
                "Database migration",
                "Hybrid cloud environments",
                "Multi-cloud strategies",
                "Cost optimization initiatives",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-[13.5px] text-slate-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-bright" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANAGED CLOUD OPERATIONS ============ */}
      <section className="relative bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Managed Services"
            title="Managed Cloud Operations"
            sub="Focus on innovation while we manage your infrastructure."
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Continuous Monitoring", icon: Activity },
              { title: "Patch Management", icon: RefreshCw },
              { title: "Security Updates", icon: ShieldCheck },
              { title: "Infrastructure Scaling", icon: Gauge },
              { title: "Backup Verification", icon: HardDrive },
              { title: "Cost Governance", icon: BarChart3 },
              { title: "Monthly Health Reports", icon: Sparkles },
              { title: "SLA-Driven Support", icon: CheckCircle2 },
            ].map((m) => (
              <Card key={m.title} className="!p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f496b]/10 text-[#1f496b] transition-colors group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                  <m.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-black" style={{ color: "#1f496b" }}>{m.title}</div>
                <div className="mt-1 h-px w-8 bg-orange-bright/40 transition-all group-hover:w-16" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGIES & TOOLS ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Stack"
            title="Technologies & Tools"
            sub="A modern, battle-tested toolchain for reliable cloud engineering."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Cloud Platforms", icon: Cloud, items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
              { title: "Containers & Orchestration", icon: Container, items: ["Docker", "Kubernetes", "Helm"] },
              { title: "Automation", icon: Cog, items: ["Terraform", "Ansible", "CloudFormation"] },
              { title: "CI/CD", icon: Workflow, items: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"] },
              { title: "Monitoring & Observability", icon: Activity, items: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "Sentry"] },
              { title: "Databases", icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
            ].map((g) => (
              <Card key={g.title} className="!p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-bright/15 to-orange-yellow/15 text-orange-bright">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-black" style={{ color: "#1f496b" }}>{g.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-orange-bright/40 hover:text-orange-bright">
                      {it}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY DATAGRID ============ */}
      <section className="relative bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why Datagrid"
            title="Why Businesses Choose Datagrid"
            sub="Enterprise-grade cloud engineering with an automation-first mindset."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Multi-Cloud Expertise", desc: "Deep experience across AWS, Azure, and GCP ecosystems.", icon: Cloud },
              { title: "Cloud-Native Thinking", desc: "Architectures designed for flexibility, resilience, and future growth.", icon: Layers },
              { title: "Automation-First Approach", desc: "Reducing manual processes and improving deployment reliability.", icon: Workflow },
              { title: "Enterprise Security Standards", desc: "Strong focus on governance, compliance, and data protection.", icon: ShieldCheck },
              { title: "Cost Optimization", desc: "Balancing performance with operational efficiency.", icon: BarChart3 },
              { title: "End-to-End Ownership", desc: "From architecture and migration to monitoring and managed operations.", icon: Cpu },
            ].map((r) => (
              <Card key={r.title}>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black" style={{ color: "#1f496b" }}>{r.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIFECYCLE ============ */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Lifecycle"
            title="From Deployment to Always-On Operations"
            sub="Datagrid manages the complete infrastructure lifecycle — from architecture planning and cloud deployment to monitoring, security, optimization, and long-term operations."
            center
          />

          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent md:block" aria-hidden />
            <div className="relative grid gap-4 md:grid-cols-6">
              {[
                { label: "Design", icon: Layers },
                { label: "Automate", icon: Workflow },
                { label: "Deploy", icon: Rocket },
                { label: "Monitor", icon: Activity },
                { label: "Secure", icon: ShieldCheck },
                { label: "Optimize", icon: Gauge },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-white shadow-lg ring-1 ring-slate-200">
                    <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-[#1f496b] to-[#2d6a94] text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-black" style={{ color: "#1f496b" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
            <Sparkles className="h-3 w-3" />
            Let's build together
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Modernize Your{" "}
            <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
              Cloud Infrastructure?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Partner with Datagrid to build secure, scalable, and future-ready cloud platforms powered by
            automation, reliability, and engineering excellence.
          </p>
          <p className="mt-3 text-[13px] font-semibold text-orange-yellow">
            Deploy faster. Operate smarter. Scale globally.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/#cta"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow/50 hover:text-orange-yellow"
            >
              Discuss Your Requirements
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
