import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Users,
  Calendar,
  Ticket,
  Smartphone,
  QrCode,
  HeartHandshake,
  Handshake,
  MessageSquare,
  BarChart3,
  Wand2,
  Camera,
  ScanFace,
  Eraser,
  Film,
  Megaphone,
  Share2,
  Wallet,
  Boxes,
  Users2,
  Building2,
  ShoppingCart,
  Factory,
  Gauge,
  Workflow,
  Brain,
  BookOpen,
  Tag,
  Package,
  ClipboardList,
  Search,
  Store,
  LineChart,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
  Home,
  ExternalLink,
} from "lucide-react";

import unifyLogo from "@/assets/products/unifyams.png";
import glammifyLogo from "@/assets/products/glammify.png";
import optifyLogo from "@/assets/products/optify.png";
import sellingoLogo from "@/assets/products/sellingo.jpg";

const products = [
  {
    id: "unify",
    name: "Unify",
    logo: unifyLogo,
    subtitle: "Association & Event Management Platform",
    headline: "One Platform. Every Member. Every Event.",
    description:
      "Unify is an enterprise-grade Association Management System (AMS) designed to help associations, chambers, trade bodies, and event organizers manage their complete ecosystem through a single digital platform.",
    capabilities: [
      { icon: Users, label: "Membership Management" },
      { icon: Ticket, label: "Event Registration & Ticketing" },
      { icon: Smartphone, label: "Mobile Event Applications" },
      { icon: QrCode, label: "Lead Retrieval Systems" },
      { icon: HeartHandshake, label: "Fundraising & Donations" },
      { icon: Users2, label: "Committee & Volunteer Management" },
      { icon: Handshake, label: "Vendor & Sponsor Management" },
      { icon: MessageSquare, label: "Communication Automation" },
      { icon: BarChart3, label: "Executive Dashboards & Analytics" },
    ],
    closing:
      "Trusted by large associations and event organizations to deliver seamless member experiences and world-class events.",
    cta: "Visit Unify",
    accent: "from-[#1f496b] to-[#3b82c4]",
  },
  {
    id: "glammify",
    name: "Glammify",
    logo: glammifyLogo,
    subtitle: "AI-Powered Jewellery Visualization Platform",
    headline: "Transform Jewellery Photography with Artificial Intelligence.",
    description:
      "Glammify enables jewellery businesses to create professional marketing content without expensive photoshoots. Using advanced AI, jewellers transform raw product images into stunning visuals featuring models, mannequins, lifestyle scenes, and social-ready content.",
    capabilities: [
      { icon: Wand2, label: "AI Model Generation" },
      { icon: Camera, label: "Jewellery-on-Model Visualization" },
      { icon: ScanFace, label: "Virtual Try-On Experiences" },
      { icon: Eraser, label: "Background Removal & Enhancement" },
      { icon: Film, label: "Reel & Social Media Content" },
      { icon: Megaphone, label: "Automated Marketing Assets" },
      { icon: Share2, label: "Multi-Channel Publishing" },
    ],
    closing:
      "Helping jewellery brands accelerate digital commerce through intelligent content creation.",
    cta: "Explore Glammify",
    accent: "from-[#d73b1a] to-[#f59e0b]",
  },
  {
    id: "optify",
    name: "OptifyERP",
    logo: optifyLogo,
    subtitle: "AI-Enabled ERP & Workflow Automation Platform",
    headline: "Simplify Operations. Automate Workflows. Accelerate Growth.",
    description:
      "OptifyERP is Datagrid's flexible enterprise platform for organizations seeking powerful ERP capabilities without the limitations of traditional systems. Built on a modern open-source foundation, it enables businesses to rapidly configure workflows across finance, HR, inventory, CRM, manufacturing, procurement, payroll, and customer operations.",
    capabilities: [
      { icon: Wallet, label: "Finance & Accounting" },
      { icon: Boxes, label: "Inventory & Supply Chain" },
      { icon: Users2, label: "Human Resources & Payroll" },
      { icon: Building2, label: "CRM & Sales Management" },
      { icon: ShoppingCart, label: "Procurement Automation" },
      { icon: Factory, label: "Manufacturing Operations" },
      { icon: Gauge, label: "Executive Dashboards" },
      { icon: Workflow, label: "Workflow Automation" },
      { icon: Brain, label: "AI-Assisted Business Insights" },
    ],
    closing: "Designed to adapt to businesses—not force businesses to adapt to software.",
    cta: "Discover OptifyERP",
    accent: "from-[#1f496b] to-[#d73b1a]",
  },
  {
    id: "sellingo",
    name: "Sellingo",
    logo: sellingoLogo,
    subtitle: "Digital Catalog & Retail Management Platform for Jewellery",
    headline: "Modern Retail Experiences for the Jewellery Industry.",
    description:
      "Sellingo helps jewellery businesses digitize their product catalogs, inventory operations, and customer interactions through a comprehensive and easy-to-use platform.",
    capabilities: [
      { icon: BookOpen, label: "Digital Product Catalogs" },
      { icon: Tag, label: "Barcode & Label Printing" },
      { icon: Package, label: "Inventory Management" },
      { icon: ClipboardList, label: "Order Processing" },
      { icon: Users, label: "Customer Management" },
      { icon: LineChart, label: "Sales Tracking" },
      { icon: Search, label: "Product Search & Discovery" },
      { icon: Store, label: "Multi-Store Operations" },
      { icon: BarChart3, label: "Business Analytics" },
    ],
    closing:
      "Empowering jewellers to manage products, operations, and customer experiences from a unified platform.",
    cta: "Learn More About Sellingo",
    accent: "from-[#d73b1a] to-[#1f496b]",
  },
];

const philosophyPrinciples = [
  "Business-first thinking",
  "Scalable architecture",
  "Open and flexible technology ecosystems",
  "AI-enabled capabilities",
  "Exceptional user experiences",
  "Continuous innovation",
];

const reasons = [
  {
    icon: BookOpen,
    title: "Deep Domain Knowledge",
    body: "Understanding industry-specific challenges and workflows.",
  },
  {
    icon: Layers,
    title: "Scalable Engineering",
    body: "Architectures designed for long-term growth and enterprise adoption.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Innovation",
    body: "Embedding intelligence where it creates measurable business value.",
  },
  {
    icon: Cpu,
    title: "Open Technology Foundations",
    body: "Flexible ecosystems without expensive vendor lock-in.",
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    body: "Products that evolve with changing markets and customer expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Ready",
    body: "Security, compliance, and reliability baked into every product.",
  },
];

function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />
      <div className="relative rounded-[1.75rem] border border-white/10 bg-white/70 p-5 shadow-2xl backdrop-blur-xl dark:bg-navy-deep/40">
        <div className="flex items-center justify-between px-1 pb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-bright" />
            Datagrid Product Hub
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-orange-bright/70" />
            <span className="h-2 w-2 rounded-full bg-orange-yellow/70" />
            <span className="h-2 w-2 rounded-full bg-navy/40" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-10 items-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
              <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-orange-bright">
                AI Native
              </div>
              <div
                className={`mt-1 h-1 w-10 rounded-full bg-gradient-to-r ${p.accent}`}
              />
              <div className="mt-3 space-y-1">
                <div className="h-1.5 w-full rounded-full bg-slate-100" />
                <div className="h-1.5 w-3/4 rounded-full bg-slate-100" />
                <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-navy-deep p-3 text-white">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Products</div>
            <div className="text-lg font-black text-orange-yellow">04</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Industries</div>
            <div className="text-lg font-black text-orange-yellow">10+</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Deployments</div>
            <div className="text-lg font-black text-orange-yellow">150+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophyVisual() {
  return (
    <div className="relative rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[11px] font-bold uppercase tracking-wider text-navy">
          Product Principles
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-bright/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-bright">
          <Sparkles className="h-3 w-3" /> AI Enabled
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {philosophyPrinciples.map((p, i) => (
          <div
            key={p}
            className="rounded-xl border border-black/5 bg-gradient-to-br from-slate-50 to-white p-3 transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-orange-bright/10 text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              Principle
            </div>
            <div className="mt-1.5 text-[13px] font-semibold text-navy">{p}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-navy-deep p-4 text-white">
        <div className="text-[10px] uppercase tracking-wider text-white/60">Scalable Architecture</div>
        <div className="mt-2 flex items-center gap-2">
          {["Cloud", "APIs", "Data", "AI", "Edge"].map((l) => (
            <span
              key={l}
              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/85"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, reversed }: { product: (typeof products)[number]; reversed: boolean }) {
  return (
    <div
      className={`group grid gap-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-xl lg:grid-cols-12 lg:gap-10 lg:p-10 ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`lg:col-span-7 ${reversed ? "lg:[direction:ltr]" : ""}`}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-12 items-center rounded-xl bg-white px-3 ring-1 ring-black/5">
            <img src={product.logo} alt={product.name} className="max-h-9 w-auto object-contain" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-bright/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-bright" /> AI Native
          </span>
        </div>
        <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-orange-bright">
          {product.subtitle}
        </div>
        <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
          {product.headline}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-navy">
            Key Capabilities
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {product.capabilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-black/5 bg-slate-50/60 px-3 py-2 text-[13px] font-medium text-navy transition-colors hover:border-orange-bright/40 hover:bg-orange-bright/5"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white text-orange-bright ring-1 ring-black/5">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[13px] font-semibold text-navy/80">{product.closing}</p>

        <div className="mt-6">
          <a
            href="#"
            className="group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            {product.cta}
            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className={`lg:col-span-5 ${reversed ? "lg:[direction:ltr]" : ""}`}>
        <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-slate-50 to-white p-5">
          <div
            className={`pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${product.accent} opacity-20 blur-3xl`}
            aria-hidden
          />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <div className="flex h-10 items-center">
                <img src={product.logo} alt="" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-bright/70" />
                <span className="h-2 w-2 rounded-full bg-orange-yellow/70" />
                <span className="h-2 w-2 rounded-full bg-navy/40" />
              </div>
            </div>
            <div className="mt-5 grid flex-1 grid-cols-2 gap-2.5">
              {product.capabilities.slice(0, 4).map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-3 shadow-sm"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-orange-bright/10 text-orange-bright">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="mt-3 text-[11px] font-bold text-navy leading-tight">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-navy-deep p-3 text-white">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/60">
                <span>Live Metrics</span>
                <span className="text-orange-yellow">●</span>
              </div>
              <div className="mt-1 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-black text-orange-yellow">99.9%</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">Uptime</div>
                </div>
                <div>
                  <div className="text-sm font-black text-orange-yellow">SOC2</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">Secure</div>
                </div>
                <div>
                  <div className="text-sm font-black text-orange-yellow">API</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-orange-bright">
                <Home className="h-3 w-3" /> Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-navy">Products</span>
            </nav>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-bright" />
              Datagrid Products
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Building Products That{" "}
              <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                Solve Real Business Problems
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              At Datagrid, we believe the best products are born from real-world challenges. Over the years, our
              experience across industries has helped us build powerful digital platforms that simplify operations,
              create new business opportunities, and deliver measurable value.
            </p>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
              From associations and events to AI-powered retail experiences and enterprise automation, our products
              combine deep domain expertise with modern technology and scalable architecture.
            </p>
            <p className="mt-4 text-[13px] font-bold text-orange-bright">
              Innovation driven by experience. Products built for growth.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy hover:border-orange-bright hover:text-orange-bright"
              >
                Discuss Your Requirements
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative border-t border-black/5 bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              Product Philosophy
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Technology Products Designed for Modern Businesses
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Our products are built on the same principles that guide every Datagrid engagement:
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {philosophyPrinciples.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 rounded-lg border border-black/5 bg-slate-50/60 px-3 py-2.5 text-[14px] font-medium text-navy"
                >
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-orange-bright" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">
              Today, our platforms serve associations, enterprises, manufacturers, retailers, and businesses across
              multiple industries and geographies.
            </p>
          </div>
          <div className="lg:col-span-6">
            <PhilosophyVisual />
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section id="ecosystem" className="relative border-t border-black/5 py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-grid-light"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              <Sparkles className="h-3 w-3" /> Product Ecosystem
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Our Product Ecosystem
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Purpose-built platforms created from real business experience and modern engineering practices.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Built from real experience */}
      <section className="relative border-t border-black/5 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              Real Experience
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Products Built from Real Business Experience
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Unlike many software companies that build products in isolation, every Datagrid product originates from
              solving real business problems for real customers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-lg"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-bright/10 text-orange-bright transition-colors group-hover:bg-orange-bright group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation beyond services */}
      <section className="relative overflow-hidden border-t border-black/5 py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
              Innovation
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Innovation Beyond Services
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Our products represent our commitment to solving industry challenges through technology, automation, and
              intelligent systems. As we continue to invest in AI, data, cloud technologies, and digital transformation,
              we remain focused on creating platforms that empower organizations to operate smarter, grow faster, and
              deliver exceptional experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:p-8">
            {[
              { icon: Factory, title: "Industry Challenge", body: "Real problems observed across sectors we serve." },
              { icon: Wand2, title: "Product Innovation", body: "AI-enabled platforms engineered for scale." },
              { icon: BarChart3, title: "Business Impact", body: "Measurable growth, efficiency, and experiences." },
            ].map((s, i, arr) => (
              <>
                <div key={s.title} className="rounded-2xl border border-black/5 bg-gradient-to-br from-slate-50 to-white p-5 text-center">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-orange-bright/10 text-orange-bright">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-base font-bold text-navy">{s.title}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                {i < arr.length - 1 && (
                  <div key={`arrow-${i}`} className="hidden justify-center text-orange-bright lg:flex">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — same style as site-wide CTA */}
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
            Let's Build Together
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Looking for a Product That{" "}
            <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
              Fits Your Business Needs?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Whether you manage an association, run a manufacturing company, operate a jewellery business, or seek
            enterprise automation, Datagrid offers proven platforms designed to help your organization thrive in a
            digital-first world.
          </p>
          <p className="mt-3 text-[13px] font-semibold text-orange-yellow">
            Purpose-built products. Real-world impact. Future-ready innovation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
              style={{ background: "var(--gradient-pixel)" }}
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow/50 hover:text-orange-yellow"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
