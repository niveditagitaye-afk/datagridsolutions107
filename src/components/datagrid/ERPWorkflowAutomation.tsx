import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  Workflow,
  BarChart3,
  Database,
  RefreshCw,
  CheckCircle2,
  Wallet,
  Package,
  Users,
  Factory,
  ShoppingCart,
  Briefcase,
  Building2,
  GraduationCap,
  HeartPulse,
  Leaf,
  Boxes,
  Truck,
  ClipboardList,
  UserCog,
  Cpu,
  Cloud,
  ShieldCheck,
  LineChart,
  Bell,
  Zap,
  Target,
  Rocket,
  Compass,
  Settings,
  Plug,
  TrendingUp,
  FileSpreadsheet,
  ArrowRightCircle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

/* ---------------- Hero Visual: ERP Modules Orbit ---------------- */
function ERPHeroVisual() {
  const modules = [
    { l: "Finance", i: Wallet },
    { l: "Inventory", i: Package },
    { l: "HR", i: Users },
    { l: "CRM", i: Briefcase },
    { l: "Mfg", i: Factory },
    { l: "Procure", i: Truck },
  ];
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute -inset-10 rounded-[2.5rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-[2.5rem] bg-grid-light opacity-30" aria-hidden />

      <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-navy backdrop-blur-xl">
        <div className="flex items-center gap-2 rounded-t-xl bg-navy-deep/70 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-bright/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-yellow/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="ml-3 flex-1 rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70">
            optify.datagrid.io / operations
          </div>
        </div>

        <div className="rounded-b-xl bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-bright">
                Enterprise Suite
              </div>
              <div className="mt-1 text-sm font-bold text-navy">Connected Business Modules</div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-yellow" />
              Automated
            </div>
          </div>

          {/* Central hub with orbit modules */}
          <div className="relative mx-auto mb-4 h-56 w-full">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" fill="none">
              {[
                [80, 40],
                [200, 25],
                [320, 40],
                [80, 180],
                [200, 195],
                [320, 180],
              ].map(([x, y], i) => (
                <line
                  key={i}
                  x1="200"
                  y1="110"
                  x2={x}
                  y2={y}
                  stroke="#ed5816"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.5"
                />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-navy px-4 py-3 text-center shadow-navy">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-orange-yellow">Core</div>
              <div className="text-xs font-bold text-white">Optify ERP</div>
            </div>
            {modules.map((m, i) => {
              const positions = [
                "left-[10%] top-[10%]",
                "left-1/2 top-[3%] -translate-x-1/2",
                "right-[10%] top-[10%]",
                "left-[10%] bottom-[10%]",
                "left-1/2 bottom-[3%] -translate-x-1/2",
                "right-[10%] bottom-[10%]",
              ];
              const Icon = m.i;
              return (
                <div
                  key={m.l}
                  className={`absolute ${positions[i]} flex items-center gap-1.5 rounded-lg border border-navy/10 bg-white px-2.5 py-1.5 shadow-sm`}
                >
                  <Icon className="h-3.5 w-3.5 text-orange-bright" />
                  <span className="text-[10px] font-bold text-navy">{m.l}</span>
                </div>
              );
            })}
          </div>

          {/* Approval flow */}
          <div className="rounded-lg border border-navy/10 bg-warm-cream/30 p-2.5">
            <div className="mb-1.5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-wider text-navy/60">
              <span>Purchase Approval</span>
              <span className="inline-flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="h-3 w-3" /> Auto-routed
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-semibold text-navy">
              <span className="rounded bg-white px-1.5 py-0.5">Request</span>
              <ArrowRight className="h-3 w-3 text-orange-bright" />
              <span className="rounded bg-white px-1.5 py-0.5">Manager</span>
              <ArrowRight className="h-3 w-3 text-orange-bright" />
              <span className="rounded bg-white px-1.5 py-0.5">Finance</span>
              <ArrowRight className="h-3 w-3 text-orange-bright" />
              <span className="rounded bg-navy px-1.5 py-0.5 text-white">PO Issued</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/20 bg-white/10 p-3 shadow-navy backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-orange-bright/20 p-2">
            <Zap className="h-4 w-4 text-orange-yellow" />
          </div>
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">Workflows</div>
            <div className="text-xs font-bold text-white">1,240 automated</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Intro Visual ---------------- */
function IntroVisual() {
  const items = [
    { l: "Finance", i: Wallet },
    { l: "Sales", i: Briefcase },
    { l: "HR", i: Users },
    { l: "Inventory", i: Package },
    { l: "Ops", i: Factory },
    { l: "CRM", i: UserCog },
  ];
  return (
    <div className="relative rounded-3xl border border-navy/10 bg-white p-6 shadow-navy">
      <div className="absolute inset-0 rounded-3xl bg-grid-navy opacity-[0.04]" aria-hidden />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-bright">Unified Platform</div>
            <div className="mt-1 text-base font-bold text-navy">Departments · One System</div>
          </div>
          <div className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">Live sync</div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {items.map((it) => {
            const Icon = it.i;
            return (
              <div
                key={it.l}
                className="group rounded-xl border border-navy/10 bg-warm-cream/40 p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-md"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white group-hover:bg-orange-bright">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-navy">{it.l}</div>
                <div className="mt-0.5 text-[10px] text-navy/60">Automated</div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-navy/10 bg-navy p-4">
          <div className="flex items-center justify-between text-[10px] font-semibold text-white/60">
            <span>APPROVAL WORKFLOW</span>
            <span className="inline-flex items-center gap-1 text-orange-yellow">
              <CheckCircle2 className="h-3 w-3" /> 3-step
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-white">
            <span className="rounded bg-white/10 px-2 py-1">Draft</span>
            <ArrowRight className="h-3 w-3 text-orange-yellow" />
            <span className="rounded bg-white/10 px-2 py-1">Review</span>
            <ArrowRight className="h-3 w-3 text-orange-yellow" />
            <span className="rounded bg-orange-bright px-2 py-1">Approved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export function ERPWorkflowAutomation() {
  const capabilities = [
    {
      icon: Layers,
      title: "Enterprise Resource Planning (ERP)",
      desc: "Integrated systems that connect departments, data, and business processes on a single platform.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Digitize approvals, notifications, escalations, and business operations to eliminate manual dependencies.",
    },
    {
      icon: RefreshCw,
      title: "Business Process Automation",
      desc: "Reduce repetitive work and improve productivity through intelligent process design.",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Reporting Solutions",
      desc: "Real-time insights, executive dashboards, and KPI-driven decision-making.",
    },
    {
      icon: Database,
      title: "Legacy System Modernization",
      desc: "Transform spreadsheet-driven and disconnected operations into integrated digital ecosystems.",
    },
    {
      icon: Plug,
      title: "Integrations & APIs",
      desc: "Connect ERP with CRM, e-commerce, banking, tax, HRMS and third-party enterprise systems.",
    },
  ];

  const functionGroups = [
    {
      title: "Finance & Accounting",
      icon: Wallet,
      items: [
        "General Ledger",
        "Accounts Receivable & Payable",
        "Budgeting & Cost Centers",
        "Taxation & Compliance",
        "Financial Reporting",
      ],
    },
    {
      title: "Inventory & Supply Chain",
      icon: Boxes,
      items: [
        "Inventory Management",
        "Warehouse Operations",
        "Procurement Workflows",
        "Vendor Management",
        "Demand Planning",
      ],
    },
    {
      title: "Sales & CRM",
      icon: Briefcase,
      items: [
        "Lead Management",
        "Customer Relationship Management",
        "Sales Pipelines",
        "Quotations & Invoicing",
        "Customer Support Workflows",
      ],
    },
    {
      title: "Human Resources",
      icon: Users,
      items: [
        "Employee Management",
        "Attendance & Leave",
        "Payroll Processing",
        "Performance Management",
        "Recruitment & Onboarding",
      ],
    },
    {
      title: "Manufacturing & Operations",
      icon: Factory,
      items: [
        "Production Planning",
        "Quality Management",
        "Asset Tracking",
        "Dealer & Distributor Networks",
        "Process Monitoring",
      ],
    },
    {
      title: "Governance & Compliance",
      icon: ShieldCheck,
      items: [
        "Role-Based Access Controls",
        "Audit Trails",
        "Document Management",
        "Policy Workflows",
        "Regulatory Reporting",
      ],
    },
  ];

  const optifyFeatures = [
    "Modular architecture",
    "Rapid workflow customization",
    "Role-based access controls",
    "Mobile accessibility",
    "Advanced dashboards",
    "Third-party integrations",
    "AI-assisted reporting and automation",
    "Cloud and on-premise deployment options",
  ];

  const industries = [
    {
      title: "Manufacturing",
      icon: Factory,
      desc: "Production planning, distribution networks, dealer management, and operational automation.",
    },
    {
      title: "Agriculture & Fertilizers",
      icon: Leaf,
      desc: "Supply-chain visibility, loyalty programs, partner ecosystems, and compliance automation.",
    },
    {
      title: "Healthcare",
      icon: HeartPulse,
      desc: "Operational management, analytics platforms, and process digitization.",
    },
    {
      title: "Education",
      icon: GraduationCap,
      desc: "Student management, learning operations, and institutional workflows.",
    },
    {
      title: "Associations & Communities",
      icon: Building2,
      desc: "Membership management, event operations, and communication systems.",
    },
    {
      title: "Retail & Commerce",
      icon: ShoppingCart,
      desc: "Inventory, order management, CRM, and customer engagement platforms.",
    },
  ];

  const reasons = [
    { icon: Target, title: "Business-First Approach", desc: "We understand processes before implementing technology." },
    { icon: Settings, title: "Highly Customizable Solutions", desc: "Workflows tailored to your organization—not generic templates." },
    { icon: Rocket, title: "Rapid Implementation", desc: "Faster deployment through reusable frameworks and modular architecture." },
    { icon: TrendingUp, title: "Scalable Systems", desc: "Designed to support future growth and operational complexity." },
    { icon: Cloud, title: "Open & Flexible Platforms", desc: "Freedom from vendor lock-in and proprietary restrictions." },
    { icon: ShieldCheck, title: "End-to-End Ownership", desc: "From consulting and implementation to support and continuous improvements." },
  ];

  const process = [
    { icon: Compass, title: "Discover", desc: "Understanding current processes, challenges, and future goals." },
    { icon: ClipboardList, title: "Design", desc: "Mapping workflows and defining system architecture." },
    { icon: Cpu, title: "Implement", desc: "Configuring modules and building custom capabilities." },
    { icon: Plug, title: "Integrate", desc: "Connecting third-party systems and business applications." },
    { icon: Rocket, title: "Deploy", desc: "Cloud infrastructure, training, and go-live support." },
    { icon: LineChart, title: "Optimize", desc: "Continuous enhancements and operational improvements." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/4 h-96 w-[40rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <nav className="mb-5 flex items-center gap-1.5 text-xs font-semibold text-white/60">
                <Link to="/" className="hover:text-orange-yellow">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="hover:text-orange-yellow">Services</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-orange-yellow">ERP & Workflow Automation</span>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-yellow backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                ERP & Workflow Automation
              </div>

              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-5xl xl:text-6xl">
                Transform Complex Business Operations into{" "}
                <span className="bg-gradient-to-r from-orange-bright via-orange-yellow to-warm-yellow bg-clip-text text-transparent">
                  Intelligent Digital Workflows
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-white/75 lg:text-lg">
                From finance and inventory to HR, CRM, manufacturing, procurement, and customer
                management, Datagrid helps organizations streamline operations through scalable ERP
                solutions and workflow automation platforms.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/60 lg:text-base">
                Whether you need a complete enterprise system or automation for a specific business
                process, we design solutions that improve efficiency, transparency, and
                decision-making.
              </p>

              <p className="mt-5 text-sm font-bold text-orange-yellow lg:text-base">
                Simplify operations. Automate processes. Accelerate growth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/#cta"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            <div className="animate-fade-in">
              <ERPHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                <Layers className="h-3.5 w-3.5" /> Built Around Your Business
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                Build an ERP That Works the Way Your Business Operates
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy/70">
                Every organization follows unique processes, approvals, and operational structures.
                Standard software often creates compromises, while custom ERP solutions provide
                flexibility, visibility, and long-term scalability.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                At Datagrid, we implement, customize, and extend ERP systems tailored to your
                business requirements—enabling teams to work smarter, faster, and with complete
                operational control.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                Our expertise spans manufacturing, distribution, retail, healthcare, education,
                associations, agriculture, and service industries.
              </p>
            </div>
            <IntroVisual />
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Workflow className="h-3.5 w-3.5" /> Capabilities
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Our ERP Capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              End-to-end ERP and automation expertise—from platform implementation to intelligent
              workflow design and modernization.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-bright/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FUNCTIONS WE AUTOMATE ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Zap className="h-3.5 w-3.5" /> Business Functions
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Business Functions We Automate
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Departments connected through one ERP system—so data, decisions, and workflows flow
              without friction.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {functionGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-orange-yellow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold">{g.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-navy/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-bright" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- OPTIFY ERP ---------------- */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 right-1/3 h-96 w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-yellow backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Datagrid Product
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                Optify: Datagrid's{" "}
                <span className="bg-gradient-to-r from-orange-bright via-orange-yellow to-warm-yellow bg-clip-text text-transparent">
                  AI-Enabled ERP Platform
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                Our flagship ERP platform, Optify, combines the power of open-source technologies
                with modern automation capabilities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Built on a flexible and scalable foundation, OptifyERP enables businesses to rapidly
                implement and customize workflows across departments without the limitations of
                traditional ERP systems.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {optifyFeatures.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white backdrop-blur"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-yellow" />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optify platform visual */}
            <div className="relative">
              <div className="relative rounded-2xl border border-white/15 bg-white/5 p-6 shadow-navy backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-orange-bright p-2 text-white">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">OptifyERP</div>
                      <div className="text-[10px] text-white/60">AI-enabled platform</div>
                    </div>
                  </div>
                  <div className="rounded-full bg-orange-bright/20 px-2 py-0.5 text-[10px] font-bold text-orange-yellow">
                    v2.4
                  </div>
                </div>

                <div className="relative mx-auto h-48 w-full">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-orange-bright to-orange-deep px-5 py-3 text-center shadow-glow">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/90">Core</div>
                    <div className="text-sm font-black text-white">Optify Engine</div>
                  </div>
                  {[
                    { l: "Finance", pos: "left-0 top-0" },
                    { l: "HR", pos: "right-0 top-0" },
                    { l: "CRM", pos: "left-0 bottom-0" },
                    { l: "Inventory", pos: "right-0 bottom-0" },
                  ].map((m) => (
                    <div
                      key={m.l}
                      className={`absolute ${m.pos} rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur`}
                    >
                      {m.l}
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { l: "Uptime", v: "99.9%" },
                    { l: "Modules", v: "40+" },
                    { l: "Deploy", v: "Cloud/OP" },
                  ].map((k) => (
                    <div key={k.l} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">{k.l}</div>
                      <div className="mt-0.5 text-sm font-bold text-orange-yellow">{k.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Building2 className="h-3.5 w-3.5" /> Sectors
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Industry Experience
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              We have successfully delivered ERP and workflow solutions across:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-white to-warm-cream/40 p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-bright/10 text-orange-bright transition-colors group-hover:bg-orange-bright group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHY DATAGRID ---------------- */}
      <section className="relative bg-warm-cream/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <ShieldCheck className="h-3.5 w-3.5" /> Why Datagrid
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Why Businesses Choose Datagrid
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-navy"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-warm-cream/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Workflow className="h-3.5 w-3.5" /> Delivery Method
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-4xl">
              Our ERP Implementation Process
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-orange-bright/40 to-transparent lg:block" aria-hidden />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative">
                    <div className="relative mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-orange-bright/30 bg-white shadow-md">
                      <Icon className="h-7 w-7 text-orange-bright" />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-black text-orange-yellow">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-bold">{p.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-navy/65">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FROM SPREADSHEETS TO INTELLIGENT ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/3 h-96 w-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-yellow backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Transformation
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
              From Spreadsheets to Intelligent Enterprises
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Organizations today need more than software—they need connected, automated, and
              data-driven operations. Whether you're implementing your first ERP system, replacing
              legacy applications, or automating complex business workflows, Datagrid delivers
              solutions that increase productivity, improve visibility, and support long-term
              growth.
            </p>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            {/* Before */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-lg bg-white/10 p-2 text-white/70">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">Before</div>
                  <div className="text-base font-bold text-white">Spreadsheet-Driven</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Manual data entry & reconciliation",
                  "Disconnected departmental tools",
                  "Delayed reports & poor visibility",
                  "Approval chains via email",
                  "Version-control chaos",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-r from-orange-bright to-orange-yellow p-3 shadow-glow">
                <ArrowRightCircle className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-orange-bright/30 bg-gradient-to-br from-orange-bright/10 to-transparent p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-lg bg-orange-bright p-2 text-white">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-orange-yellow">After</div>
                  <div className="text-base font-bold text-white">Intelligent ERP Workflows</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  "Automated data sync across modules",
                  "Unified operations on one platform",
                  "Real-time dashboards & KPIs",
                  "Configurable approval workflows",
                  "Audit trails & role-based access",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-yellow" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-warm-cream/50 via-white to-warm-cream/30 p-10 text-center shadow-navy lg:p-16">
            <div className="absolute inset-0 bg-grid-navy opacity-[0.04]" aria-hidden />
            <div
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-pixel)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                <Rocket className="h-3.5 w-3.5" /> Ready to Scale
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight lg:text-5xl">
                Build an ERP That Grows With Your Business
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/70 lg:text-lg">
                Transform manual processes into intelligent workflows with scalable ERP solutions
                designed around your unique business needs.
              </p>
              <p className="mt-4 text-sm font-bold text-orange-bright lg:text-base">
                One platform. One source of truth. Unlimited possibilities.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#cta"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:border-orange-bright hover:text-orange-bright"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
