import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { PixelGrid } from "@/components/datagrid/PixelGrid";

type Category =
  | "AI & Analytics"
  | "ERP & Automation"
  | "Ecommerce"
  | "Association & Community"
  | "Mobile & Web Platforms";

type Study = {
  title: string;
  subtitle: string;
  tag: string;
  category: Category;
  featured?: boolean;
};

const studies: Study[] = [
  { title: "UNIFY AMS", subtitle: "Association Management Platform", tag: "Association Tech", category: "Association & Community", featured: true },
  { title: "GLAMMIFY AI", subtitle: "AI-Powered Jewelry Business Platform", tag: "AI Solution", category: "AI & Analytics", featured: true },
  { title: "SELLINGO", subtitle: "Digital Commerce Platform for SME Sellers", tag: "Ecommerce", category: "Ecommerce" },
  { title: "BJP", subtitle: "Smart Analytics Tool", tag: "Analytics", category: "AI & Analytics" },
  { title: "INC", subtitle: "Centralized Volunteer & Communication Platform", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "Yanmar", subtitle: "ERP for Multi-Tier Distribution Management", tag: "ERP", category: "ERP & Automation" },
  { title: "Sensodyne", subtitle: "Smart Sample Distribution & Survey Platform", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "Macknon", subtitle: "Interactive Room Visualiser for Tile Experience", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "MySphere", subtitle: "Career Discovery Platform for Students", tag: "Education Tech", category: "Mobile & Web Platforms" },
  { title: "CALLBOX", subtitle: "AI Talent Acceleration for Call Analytics", tag: "AI Solution", category: "AI & Analytics" },
  { title: "JITO Udaan", subtitle: "Digital Trade Show Platform", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "Prashnam", subtitle: "High-Speed DIY Survey Platform", tag: "Analytics", category: "AI & Analytics" },
  { title: "Diatrends", subtitle: "Intelligent Performance Management Platform", tag: "Analytics", category: "AI & Analytics" },
  { title: "DeGould", subtitle: "AI-Driven Infrastructure for Vehicle Inspection", tag: "AI Solution", category: "AI & Analytics" },
  { title: "Netcore Solutions", subtitle: "On-Demand Talent for Product Acceleration", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "AMP Emailers", subtitle: "Smart Email Marketing Automation Platform", tag: "Automation", category: "ERP & Automation" },
  { title: "Tropica Nursery", subtitle: "Smart Plant Data Management Platform", tag: "Agritech", category: "ERP & Automation" },
  { title: "Life Insurance Council", subtitle: "Centralized Claims Analytics Platform", tag: "Insurance Tech", category: "AI & Analytics" },
  { title: "AAHOA", subtitle: "Centralized Platform for Hospitality Member Management", tag: "Hospitality Tech", category: "Association & Community" },
  { title: "Bunts Sangha", subtitle: "Digital Platform for Community Management", tag: "Association Tech", category: "Association & Community" },
  { title: "IT Guruji", subtitle: "Scalable LMS for Live IT Training", tag: "Education Tech", category: "Mobile & Web Platforms" },
  { title: "HIYA", subtitle: "Smart ERP for Process Automation & Cost Optimization", tag: "ERP", category: "ERP & Automation" },
  { title: "Apna Urea", subtitle: "Digital Loyalty & Traceability Platform for Agri", tag: "Agritech", category: "ERP & Automation" },
  { title: "Anndata", subtitle: "Smart Automation for FMS Compliance", tag: "Automation", category: "ERP & Automation" },
  { title: "PNS Capital", subtitle: "Smart Property Management Platform", tag: "Product Platform", category: "Mobile & Web Platforms" },
  { title: "Global Food Mart", subtitle: "Cross-Border E-Commerce Platform", tag: "Ecommerce", category: "Ecommerce" },
  { title: "Nicho Group", subtitle: "Unified Digital Platform for Conglomerates", tag: "Product Platform", category: "Mobile & Web Platforms" },
];

const filters: ("All" | Category)[] = [
  "All",
  "AI & Analytics",
  "ERP & Automation",
  "Ecommerce",
  "Association & Community",
  "Mobile & Web Platforms",
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-20 text-white lg:pt-52 lg:pb-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="pointer-events-none absolute right-8 top-32 hidden lg:block opacity-40">
        <PixelGrid cols={10} rows={6} className="w-64" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] font-medium text-white/60 animate-fade-up">
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Insights</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Case Studies</span>
        </nav>

        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Insights / Case Studies
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Case <span className="text-gradient-warm">Studies</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            See how our tech solutions help clients streamline operations, improve customer experiences, and drive measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function StudyCard({ study, index, featured }: { study: Study; index: number; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up ${
        featured ? "lg:col-span-2" : ""
      }`}
      style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      <div className={`relative overflow-hidden bg-navy-deep ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
        <div
          className="absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-110"
          style={{ background: "var(--gradient-pixel)" }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.03]">
          <PixelGrid cols={featured ? 14 : 10} rows={featured ? 7 : 5} className="w-full max-w-md opacity-80" />
        </div>
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            {study.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-extrabold leading-tight text-foreground">{study.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.subtitle}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
            {study.category}
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-bright transition-colors hover:text-orange"
            aria-label={`View case study: ${study.title}`}
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Listing() {
  const [active, setActive] = useState<"All" | Category>("All");
  const filtered = active === "All" ? studies : studies.filter((s) => s.category === active);
  const featured = filtered.filter((s) => s.featured);
  const rest = filtered.filter((s) => !s.featured);

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Filter bar */}
        <div className="mb-10 -mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0">
          <div className="flex min-w-max items-center gap-2">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                    isActive
                      ? "border-transparent text-white shadow-glow"
                      : "border-border bg-card text-muted-foreground hover:border-orange-bright/40 hover:text-foreground"
                  }`}
                  style={isActive ? { background: "var(--gradient-pixel)" } : undefined}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {featured.length > 0 && active === "All" && (
          <div className="mb-8 grid gap-7 lg:grid-cols-4">
            {featured.map((s, i) => (
              <StudyCard key={s.title} study={s} index={i} featured />
            ))}
          </div>
        )}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {(active === "All" ? rest : filtered).map((s, i) => (
            <StudyCard key={s.title} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-25 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Have a Project Like These?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          Datagrid helps businesses transform ideas into scalable digital platforms with strong technology, thoughtful execution, and long-term support.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#cta"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-pixel)" }}
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Listing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}