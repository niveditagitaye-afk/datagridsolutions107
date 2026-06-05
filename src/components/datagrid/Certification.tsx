import { ArrowRight, ChevronRight, ShieldCheck, Award, Layers, Sparkles, Lock, Settings2, TrendingUp, BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import iso9001 from "@/assets/certifications/iso-9001.jpg";
import iso27001 from "@/assets/certifications/iso-27001.jpg";
import cmmi from "@/assets/certifications/cmmi-level-5.png";

const certs = [
  {
    title: "ISO 9001:2015",
    theme: "Quality Management",
    icon: Award,
    image: iso9001,
    description:
      "Demonstrates Datagrid's commitment to quality management, continuous improvement, and consistent delivery standards across every engagement.",
    points: ["Process-driven delivery", "Continuous improvement", "Customer satisfaction focus"],
  },
  {
    title: "ISO 27001:2022",
    theme: "Information Security",
    icon: ShieldCheck,
    image: iso27001,
    description:
      "Reflects Datagrid's strong information security practices, risk management approach, and commitment to protecting client data end-to-end.",
    points: ["ISMS framework", "Risk-based controls", "Data protection by design"],
  },
  {
    title: "CMMI Level 5",
    theme: "Process Maturity",
    icon: Layers,
    image: cmmi,
    description:
      "Represents highly mature development processes focused on optimization, predictability, quality, and continuous improvement at scale.",
    points: ["Optimized processes", "Predictable outcomes", "Quantitative quality management"],
  },
];

const trust = [
  { icon: BadgeCheck, title: "Quality-first delivery", text: "Every solution measured against ISO 9001 quality benchmarks." },
  { icon: Lock, title: "Secure development practices", text: "ISO 27001-aligned controls embedded across the SDLC." },
  { icon: Settings2, title: "Mature engineering processes", text: "CMMI Level 5 discipline applied to planning and execution." },
  { icon: TrendingUp, title: "Continuous improvement", text: "Data-driven optimisation across people, process and platforms." },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-24 text-white lg:pt-52 lg:pb-32">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] font-medium text-white/60 animate-fade-up">
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Company</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Certification</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              Company / Certification
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              <span className="text-gradient-warm">Certifications</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              At Datagrid Solutions, excellence, quality, and information security are embedded into every solution we deliver. Our <span className="font-semibold text-white">ISO 9001:2015</span>, <span className="font-semibold text-white">ISO 27001:2022</span>, and <span className="font-semibold text-white">CMMI Level 5</span> certifications demonstrate our commitment to maintaining world-class quality standards, robust data security practices, and highly mature development processes.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              These globally recognized credentials ensure that our clients benefit from secure, reliable, and scalable technology solutions backed by continuous improvement and operational excellence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-bright" /> 3 global accreditations</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-yellow" /> 750+ clients trusted</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-yellow/70" /> Continuous compliance</div>
            </div>
          </div>

          {/* Visual badge cluster */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl" />
              <div className="absolute inset-0 bg-grid-light opacity-20 rounded-3xl" aria-hidden />
              <div className="absolute inset-6 grid grid-cols-2 gap-4">
                {certs.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className={`group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all hover:-translate-y-1 hover:border-orange-bright/40 ${i === 2 ? "col-span-2" : ""}`}
                    >
                      <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright/20 to-orange-yellow/10 text-orange-yellow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/85">{c.title}</div>
                      <div className="mt-0.5 text-[11px] text-white/55">{c.theme}</div>
                    </div>
                  );
                })}
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full opacity-40 blur-2xl" style={{ background: "var(--gradient-pixel)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertCards() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-bright/20 bg-orange-bright/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
            <Sparkles className="h-3 w-3" /> Accreditations
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Globally recognised <span className="text-gradient-warm">standards</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Independently audited and renewed — proof that quality, security and process maturity are non-negotiable at Datagrid.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* certificate visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy-deep to-navy-deep">
                  <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />
                  <img
                    src={c.image}
                    alt={`${c.title} certificate`}
                    className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep shadow">
                    <BadgeCheck className="h-3 w-3 text-orange-bright" /> Certified
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">{c.title}</h3>
                      <p className="text-[12px] font-semibold uppercase tracking-widest text-orange-bright">{c.theme}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-orange-bright" />
                        {p}
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
  );
}

function Trust() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Built on <span className="text-gradient-warm">certified standards</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            What our certifications mean for the way we plan, build, secure and ship your software.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-deep to-navy-deep text-orange-yellow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
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
          Build with a <span className="text-gradient-warm">certified technology partner</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          Partner with Datagrid to create secure, scalable, and high-quality digital solutions backed by globally recognized standards.
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
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:border-orange-yellow hover:text-orange-yellow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function Certification() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CertCards />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}