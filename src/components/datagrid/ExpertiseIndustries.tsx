import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  GraduationCap,
  Sprout,
  Truck,
  CalendarDays,
  ShoppingBag,
  HeartPulse,
  Vote,
  MessageSquare,
  Plane,
  Gem,
  Rocket,
  BarChart3,
  Cpu,
  Layers,
  Globe2,
  Sparkles,
  ShieldCheck,
  Handshake,
  Home as HomeIcon,
  Activity,
  Database,
  LineChart,
  Gauge,
  PieChart,
  Zap,
} from "lucide-react";
import { ExpertiseCTA } from "./ExpertiseCTA";

type Industry = {
  name: string;
  icon: typeof Factory;
  description: string;
  solutions: string[];
  benefits: string[];
  accent: string;
};

const industries: Industry[] = [
  {
    name: "Manufacturing & Industrial",
    icon: Factory,
    description:
      "Helping manufacturers digitize operations, improve visibility, and optimize production processes.",
    solutions: [
      "Manufacturing ERP systems",
      "Dealer & distributor management",
      "Production planning systems",
      "Inventory management",
      "Quality control workflows",
      "Supply chain analytics",
      "Performance dashboards",
    ],
    benefits: [
      "Improved operational efficiency",
      "Better inventory visibility",
      "Reduced manual processes",
      "Faster decision-making",
      "Stronger channel management",
    ],
    accent: "from-orange-bright/70 to-orange-yellow/60",
  },
  {
    name: "Education & EdTech",
    icon: GraduationCap,
    description:
      "Creating digital learning ecosystems that empower institutions, educators, and students.",
    solutions: [
      "Learning Management Systems",
      "Student management platforms",
      "Career guidance systems",
      "Certification & assessment portals",
      "Mobile learning applications",
      "Community engagement platforms",
    ],
    benefits: [
      "Improved student engagement",
      "Centralized academic operations",
      "Better communication channels",
      "Data-driven educational insights",
    ],
    accent: "from-sky-400/70 to-blue-500/60",
  },
  {
    name: "Agriculture & AgriTech",
    icon: Sprout,
    description:
      "Driving digital transformation across agriculture, fertilizer, and rural ecosystems.",
    solutions: [
      "Farmer loyalty platforms",
      "Product traceability systems",
      "Retailer & dealer networks",
      "Mobile apps for field teams",
      "Supply chain visibility",
      "Compliance & reporting systems",
    ],
    benefits: [
      "Increased farmer engagement",
      "End-to-end supply chain visibility",
      "Stronger retailer ecosystems",
      "Operational transparency",
    ],
    accent: "from-emerald-400/70 to-lime-400/60",
  },
  {
    name: "Supply Chain & Distribution",
    icon: Truck,
    description:
      "Building connected ecosystems for manufacturers, distributors, dealers, and retailers.",
    solutions: [
      "Distribution management systems",
      "Logistics dashboards",
      "Inventory optimization",
      "Order management solutions",
      "Procurement automation",
      "Warehouse management",
    ],
    benefits: [
      "Faster order processing",
      "Improved inventory control",
      "Better partner collaboration",
      "Real-time operational insights",
    ],
    accent: "from-amber-400/70 to-orange-bright/60",
  },
  {
    name: "Association & Event Technology",
    icon: CalendarDays,
    description:
      "One of Datagrid's strongest specializations — powering associations, communities, and events worldwide.",
    solutions: [
      "Membership management",
      "Event registration platforms",
      "Mobile event applications",
      "Lead retrieval systems",
      "Fundraising platforms",
      "Vendor & sponsor management",
    ],
    benefits: [
      "Improved member engagement",
      "Seamless event experiences",
      "Centralized operations",
      "Stronger communication ecosystems",
    ],
    accent: "from-fuchsia-400/70 to-pink-500/60",
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description:
      "Helping businesses create connected digital commerce experiences.",
    solutions: [
      "E-commerce platforms",
      "Digital marketplaces",
      "Catalog management",
      "Loyalty & rewards programs",
      "Order management",
      "Customer engagement apps",
    ],
    benefits: [
      "Expanded digital reach",
      "Automated operations",
      "Better customer experiences",
      "Increased sales efficiency",
    ],
    accent: "from-rose-400/70 to-red-500/60",
  },
  {
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    description:
      "Building secure, compliant, and intelligent healthcare solutions.",
    solutions: [
      "Healthcare dashboards",
      "Claims management systems",
      "Data analytics platforms",
      "Survey & outreach apps",
      "Mobile healthcare solutions",
      "Process automation",
    ],
    benefits: [
      "Improved operational efficiency",
      "Better patient engagement",
      "Accurate reporting & analytics",
      "Regulatory compliance",
    ],
    accent: "from-teal-400/70 to-cyan-500/60",
  },
  {
    name: "Political & Election Analytics",
    icon: Vote,
    description:
      "Delivering large-scale data, communication, and analytics platforms for political organizations and campaigns.",
    solutions: [
      "Volunteer management",
      "Survey platforms",
      "Sentiment analysis",
      "Constituency dashboards",
      "Communication ecosystems",
      "Election intelligence platforms",
    ],
    benefits: [
      "Better voter engagement",
      "Organizational visibility",
      "Data-backed decisions",
      "Efficient volunteer coordination",
    ],
    accent: "from-indigo-400/70 to-violet-500/60",
  },
  {
    name: "Smart Communication Platforms",
    icon: MessageSquare,
    description:
      "Helping organizations communicate with customers, employees, members, and stakeholders effectively.",
    solutions: [
      "Email automation",
      "WhatsApp API integrations",
      "SMS & notification platforms",
      "Community communication tools",
      "Marketing automation",
    ],
    benefits: [
      "Improved outreach effectiveness",
      "Personalized communication",
      "Better engagement metrics",
      "Automated workflows",
    ],
    accent: "from-orange-yellow/70 to-orange-bright/60",
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    description:
      "Digitizing customer experiences and operations within the hospitality ecosystem.",
    solutions: [
      "Membership platforms",
      "Event & conference systems",
      "Loyalty programs",
      "Booking & registration apps",
      "Customer engagement",
      "Hospitality analytics",
    ],
    benefits: [
      "Enhanced guest experiences",
      "Centralized operations",
      "Improved member satisfaction",
      "Data-driven decisions",
    ],
    accent: "from-sky-400/70 to-teal-400/60",
  },
  {
    name: "Jewellery & Luxury Retail",
    icon: Gem,
    description:
      "A specialized domain where Datagrid blends technology, AI, and deep business understanding.",
    solutions: [
      "Digital catalog platforms",
      "Inventory & barcode systems",
      "AI-powered jewelry visualization",
      "Social media automation",
      "Customer engagement apps",
      "Retail management systems",
    ],
    benefits: [
      "Faster product showcasing",
      "Reduced operational effort",
      "Improved customer experiences",
      "Enhanced digital presence",
    ],
    accent: "from-yellow-400/70 to-orange-yellow/60",
  },
  {
    name: "Startups & Innovative Businesses",
    icon: Rocket,
    description:
      "Helping founders transform ideas into scalable digital products.",
    solutions: [
      "MVPs & SaaS platforms",
      "Mobile applications",
      "AI-driven products",
      "Marketplace ecosystems",
      "Subscription businesses",
      "Enterprise software products",
    ],
    benefits: [
      "Faster time-to-market",
      "Lower technology risks",
      "Scalable architectures",
      "Long-term growth readiness",
    ],
    accent: "from-orange-bright/70 to-rose-500/60",
  },
];

const analytics = [
  { label: "Executive Dashboards", icon: Gauge },
  { label: "Business Intelligence", icon: BarChart3 },
  { label: "Sentiment Analysis", icon: Activity },
  { label: "Employee Performance", icon: LineChart },
  { label: "Predictive Analytics", icon: PieChart },
  { label: "Survey & Data Collection", icon: Database },
  { label: "Real-Time Reporting", icon: Zap },
  { label: "AI-Driven Insights", icon: Sparkles },
];

const differentiators = [
  {
    icon: Layers,
    title: "Technology + Domain Expertise",
    body: "We understand both software engineering and industry workflows.",
  },
  {
    icon: Cpu,
    title: "Open & Flexible Architectures",
    body: "Solutions built for long-term scalability and true ownership.",
  },
  {
    icon: Sparkles,
    title: "AI-Enabled Innovation",
    body: "Practical implementation of AI across business functions.",
  },
  {
    icon: Globe2,
    title: "Global Delivery Experience",
    body: "Supporting organizations across multiple countries and industries.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Capabilities",
    body: "From strategy and consulting to development, cloud ops, and long-term support.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    body: "We grow alongside our clients as an extension of their business.",
  },
];

function HeroVisual() {
  const nodes = [
    { label: "Manufacturing", icon: Factory, x: 12, y: 18 },
    { label: "Healthcare", icon: HeartPulse, x: 78, y: 12 },
    { label: "Retail", icon: ShoppingBag, x: 6, y: 62 },
    { label: "Education", icon: GraduationCap, x: 82, y: 58 },
    { label: "Events", icon: CalendarDays, x: 44, y: 6 },
    { label: "AgriTech", icon: Sprout, x: 22, y: 86 },
    { label: "Hospitality", icon: Plane, x: 66, y: 88 },
  ];
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-deep/90 p-4 shadow-2xl lg:h-[480px]">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(215,59,26,0.25), transparent 60%)" }}
        aria-hidden
      />
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        {nodes.map((n, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${n.x + 6}%`}
            y2={`${n.y + 6}%`}
            stroke="rgba(255,255,255,0.15)"
            strokeDasharray="3 4"
          />
        ))}
      </svg>

      {nodes.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <Icon className="h-3.5 w-3.5 text-orange-yellow" />
            {n.label}
          </div>
        );
      })}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-orange-bright/40 bg-gradient-to-br from-orange-bright to-orange-yellow px-5 py-4 text-center shadow-glow">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Datagrid</div>
        <div className="text-sm font-black text-white">Industry Core</div>
      </div>
    </div>
  );
}

function IntroVisual() {
  const rings = [
    { label: "Software", icon: Layers },
    { label: "AI", icon: Sparkles },
    { label: "ERP", icon: Database },
    { label: "Mobile", icon: Rocket },
    { label: "Cloud", icon: Globe2 },
    { label: "Analytics", icon: BarChart3 },
  ];
  return (
    <div className="relative rounded-3xl border border-border/60 bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Solutions Ecosystem
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Live
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {rings.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.label}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-orange-bright/50 hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-orange-bright" />
              <div className="text-xs font-bold text-foreground">{r.label}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 rounded-xl border border-border/60 bg-navy-deep p-4 text-white">
        <div className="text-[10px] font-bold uppercase tracking-widest text-orange-yellow">
          Connected Industry Clusters
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Manufacturing", "Healthcare", "Retail", "Education", "Events", "Hospitality", "AgriTech"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-white/80"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export function ExpertiseIndustries() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-muted/40 pt-28 pb-20 lg:pt-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-orange-bright">Home</Link>
            <span className="mx-2">/</span>
            <span>Expertise</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">Industries</span>
          </nav>
          <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-bright">
                <HomeIcon className="h-3 w-3" />
                Expertise / Industries
              </div>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Deep Industry Expertise.{" "}
                <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                  Technology Solutions That Deliver Real Business Impact.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Every industry operates differently. Business processes, customer expectations, compliance
                requirements, and growth challenges vary significantly across sectors.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Over the last 10+ years, Datagrid has partnered with organizations across multiple industries
                to build scalable software products, enterprise platforms, mobile applications, AI solutions,
                ERP systems, analytics platforms, and digital ecosystems that solve real business problems.
              </p>
              <p className="mt-4 text-sm font-semibold text-orange-bright">
                Technology expertise backed by domain understanding.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-foreground hover:border-orange-bright hover:text-orange-bright"
                >
                  Discuss Your Requirements
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-border/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">
              Introduction
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Building Solutions Across Diverse Industries
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              From global manufacturers and healthcare organizations to educational institutions, associations,
              political organizations, retailers, and innovative startups, our experience enables us to combine
              strong engineering practices with deep business insights.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We don't just build software — we understand the workflows, challenges, and opportunities unique
              to every industry we serve.
            </p>
          </div>
          <IntroVisual />
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="relative border-b border-border/60 bg-muted/30 py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">
              Industry Expertise
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Purpose-built platforms shaped by decades of domain experience across regulated, operational, and
              customer-facing sectors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <article
                  key={ind.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/50 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${ind.accent}`}
                    aria-hidden
                  />
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/40 text-orange-bright transition-colors group-hover:border-orange-bright/50 group-hover:bg-orange-bright/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black leading-tight text-foreground">{ind.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>

                  <div className="mt-5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                      Solutions We Build
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {ind.solutions.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-[13px] text-foreground/80">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-bright" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 rounded-xl border border-border/60 bg-muted/30 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-orange-bright">
                      Typical Benefits
                    </div>
                    <ul className="mt-2 space-y-1">
                      {ind.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[12.5px] text-foreground/80">
                          <ChevronRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-orange-bright" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="border-b border-border/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">
              Decision Intelligence
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Data, Analytics & Decision Intelligence Across Industries
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Regardless of the sector, data remains a strategic asset. Our expertise helps leadership teams
              make better decisions through actionable intelligence.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {analytics.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright/50 hover:shadow-md"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-bright/10 text-orange-bright">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-bold text-foreground">{a.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-border/70 bg-navy-deep p-6 text-white lg:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { k: "42%", v: "Faster reporting cycles" },
                { k: "3×", v: "Better cross-team visibility" },
                { k: "24×7", v: "Real-time monitoring" },
              ].map((m) => (
                <div key={m.v} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-black text-orange-yellow">{m.k}</div>
                  <div className="mt-1 text-sm text-white/70">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="relative border-b border-border/60 bg-muted/30 py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-orange-bright">
              The Datagrid Edge
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              What Makes Datagrid Different?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/50 hover:shadow-xl"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-bright/10 text-orange-bright">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 right-0 h-72 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <div className="text-[11px] font-bold uppercase tracking-widest text-orange-yellow">
            Continuous Growth
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Industries Continue to Evolve.{" "}
            <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
              So Do We.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Every new engagement expands our understanding, strengthens our expertise, and enables us to
            deliver even greater value.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Whether you operate in manufacturing, healthcare, agriculture, retail, education, hospitality,
            associations, or emerging industries, Datagrid brings the experience, technology, and business
            perspective needed to accelerate your digital journey.
          </p>
        </div>
      </section>

      {/* SHARED CTA */}
      <ExpertiseCTA
        eyebrow="Let's build together"
        heading="Looking for a Technology Partner Who Understands"
        highlight="Your Industry?"
        body="Partner with Datagrid to build solutions tailored to your business challenges, customer expectations, and growth ambitions."
        tagline="Industry expertise. Engineering excellence. Measurable outcomes."
      />
    </main>
  );
}
