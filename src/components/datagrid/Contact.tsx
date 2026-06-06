import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Building2,
  Globe2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";

const locations = [
  { city: "Mumbai", note: "Head Office — Andheri East", icon: Building2 },
  { city: "USA", note: "North America Operations", icon: Globe2 },
  { city: "Pune", note: "Engineering & Delivery", icon: MapPin },
  { city: "Nashik", note: "Development Centre", icon: MapPin },
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
          <span className="text-orange-yellow">Contact</span>
        </nav>

        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
            Contact Datagrid
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Let's Build Something <span className="text-gradient-warm">Great Together</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Connect with Datagrid to discuss your software development, AI, cloud, ERP, mobile app, or digital transformation requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactInfoAndForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left: contact info */}
          <div className="space-y-6 lg:col-span-2 animate-fade-up">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-foreground">Mumbai — Head Office</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                604/605, Crystal Plaza, next to Atul Projects, Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Crystal+Plaza+Andheri+East+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-bright hover:text-orange-yellow"
              >
                <MapPin className="h-4 w-4" /> View on Google Maps
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+918657992211"
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <Phone className="h-5 w-5 text-orange-bright" />
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="mt-1 text-sm font-bold text-foreground group-hover:text-orange-bright">+91-86579 92211</div>
              </a>
              <a
                href="mailto:info@datagrid.co.in"
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-glow"
              >
                <Mail className="h-5 w-5 text-orange-bright" />
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 text-sm font-bold text-foreground group-hover:text-orange-bright break-all">info@datagrid.co.in</div>
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Follow us</div>
              <div className="mt-3 flex items-center gap-3">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-orange-bright hover:bg-orange-bright hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm lg:p-10">
              <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically respond within one business day.
              </p>

              <form
                className="mt-7 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      required
                      maxLength={80}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-orange-bright focus:ring-2 focus:ring-orange-bright/20"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      required
                      maxLength={80}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-orange-bright focus:ring-2 focus:ring-orange-bright/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={160}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-orange-bright focus:ring-2 focus:ring-orange-bright/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={2000}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-orange-bright focus:ring-2 focus:ring-orange-bright/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  Submit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {submitted && (
                  <p className="text-sm font-semibold text-orange-bright">
                    Thanks — we'll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-bright">
            Global presence
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our Locations
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Engineering and delivery centres across India and North America.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((l, i) => {
            const Icon = l.icon;
            return (
              <article
                key={l.city}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-bright/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-bright to-orange-yellow text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">{l.city}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{l.note}</p>
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
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
          Tell us about your idea, and our team will help you plan the right technology solution.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#top"
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

export function Contact() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ContactInfoAndForm />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}