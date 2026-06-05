import { ArrowRight, ChevronRight, Search, Compass, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

const features = [
  {
    icon: Search,
    title: "Understand your needs",
    text: "We take the time to understand your needs and fine tune requirements.",
  },
  {
    icon: Compass,
    title: "Long-term vision",
    text: "We provide to your specific needs and project requirements.",
  },
  {
    icon: FlagCheck,
    title: "Goals",
    text: "Offer seamless coordination with your hiring managers. We act as a support team.",
  },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-20 text-white lg:pt-52 lg:pb-28">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] font-medium text-white/60 animate-fade-up">
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Company</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Why Datagrid</span>
        </nav>

        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Company / Why Datagrid
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Why <span className="text-gradient-warm">Datagrid</span>?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            As an app and software development company, we are proud that we have been certified in ISO 9001:2015 and ISO 27001:2013, both of which are appropriate for our industry and essential to us providing a quality service with optimum security and aligned with the latest industry standards.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-7 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-foreground">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            );
          })}
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
          Build With a Partner Who Understands Your Business
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          Datagrid combines certified processes, technical expertise, and client-focused delivery to help businesses build scalable digital solutions.
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
        </div>
      </div>
    </section>
  );
}

export function WhyDatagrid() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
