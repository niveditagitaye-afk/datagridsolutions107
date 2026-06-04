import { ArrowRight, Linkedin, Sparkles, Cpu, Users, Trophy, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { PixelGrid } from "@/components/datagrid/PixelGrid";
import deepak from "@/assets/team/deepak-jain.jpg";
import karishma from "@/assets/team/karishma.png";
import akeeb from "@/assets/team/akeeb-khan.png";
import rushiraj from "@/assets/team/rushiraj-parulekar.png";
import tushar from "@/assets/team/tushar-kumar.png";
import akshada from "@/assets/team/akshda-dabhekar.png";
import dhiraj from "@/assets/team/dhiraj-neve.png";
import sagar from "@/assets/team/sagar-hazare.png";
import karan from "@/assets/team/karan-kotak.png";

const founders = [
  {
    name: "Deepak Jain",
    role: "Co-founder & CEO",
    image: deepak,
    bio: "Deepak leads Datagrid with over two decades of experience in building scalable enterprise technology. His vision drives the company's AI-first product strategy and global delivery excellence.",
    highlights: ["20+ years in technology leadership", "Enterprise digital transformation", "AI-first product strategy"],
  },
  {
    name: "Karishma Aggarwal",
    role: "Co-founder & CTO",
    image: karishma,
    bio: "Karishma shapes Datagrid's engineering DNA — leading platform architecture, R&D, and the technology choices behind every solution delivered to 750+ global clients.",
    highlights: ["Platform & cloud architecture", "AI / ML engineering practice", "Global delivery frameworks"],
  },
];

const team = [
  { name: "Akeeb Khan", role: "Senior VP Tech.", image: akeeb },
  { name: "Rushiraj Paralkar", role: "VP Tech.", image: rushiraj },
  { name: "Tushar Kuwar", role: "VP Tech.", image: tushar },
  { name: "Akshada Dabhekar", role: "Hr. Admin Head", image: akshada },
  { name: "Dhiraj Neve", role: "Marketing Head", image: dhiraj },
  { name: "Sagar Hajare", role: "Sr. QA Engineer", image: sagar },
  { name: "Karan Kotak", role: "Sr. Devops Engineer", image: karan },
];

const values = [
  { icon: Sparkles, title: "Innovation", text: "AI-first thinking applied to every product, process, and decision we make." },
  { icon: Cpu, title: "Technical Excellence", text: "Engineering rigor, modern architecture, and quality at every layer of delivery." },
  { icon: Users, title: "Collaboration", text: "Cross-functional teams that work as true extensions of our clients' business." },
  { icon: Trophy, title: "Client Success", text: "Measured by the outcomes we unlock — growth, efficiency, and transformation." },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-44 pb-24 text-white lg:pt-52 lg:pb-32">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[13px] font-medium text-white/60 animate-fade-up">
          <Link to="/" className="hover:text-orange-yellow transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-white/70">Company</span>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
          <span className="text-orange-yellow">Leadership</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow animate-pulse" />
              Company / Leadership
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              Our <span className="text-gradient-warm">Leadership</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Our expert team combines innovation, technical excellence, and collaboration to deliver tailored IT solutions that drive growth, efficiency, and digital transformation for every client.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-bright" /> 20+ years of leadership</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-yellow" /> 750+ projects delivered</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-orange-light" /> 15+ countries served</div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-navy" />
              <div className="absolute inset-6">
                <PixelGrid className="h-full w-full opacity-70" />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/15 bg-navy-deep/80 px-5 py-4 backdrop-blur shadow-glow">
                <div className="text-[11px] uppercase tracking-widest text-orange-yellow">Datagrid Leadership</div>
                <div className="mt-1 font-display text-2xl font-bold text-white">9 Leaders</div>
                <div className="text-[12px] text-white/60">driving global delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-bright">Leadership Philosophy</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Driven by Vision.<br />Built on Technology.<br /><span className="text-gradient-warm">Led by People.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Datagrid's leadership team brings together strategic thinking, engineering excellence, AI-first innovation, and client-focused execution to help global businesses build scalable digital solutions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "20+", v: "Years of experience" },
                { k: "750+", v: "Projects delivered" },
                { k: "15+", v: "Countries served" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-card p-4 shadow-card">
                  <div className="font-display text-3xl font-extrabold text-navy">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-lg bg-gradient-pixel shadow-glow" aria-hidden />
              <Sparkles className="h-8 w-8 text-orange-bright" />
              <p className="mt-5 font-display text-2xl font-bold leading-snug text-navy">
                "Great technology is only as powerful as the team behind it. We invest in people who think long-term, build with care, and lead with purpose."
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="h-10 w-10 rounded-full bg-gradient-pixel" />
                <div>
                  <div className="text-sm font-bold text-navy">Datagrid Leadership</div>
                  <div className="text-[12px] text-muted-foreground">Engineering · Strategy · People</div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 opacity-60" aria-hidden>
                <PixelGrid className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard({ f, reverse }: { f: typeof founders[number]; reverse?: boolean }) {
  return (
    <article className={`group relative grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-navy lg:grid-cols-12 lg:p-10 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div className="relative lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <img src={f.image} alt={f.name} className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-sm bg-orange-yellow" /> Founder
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 lg:py-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-pale/40 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-redorange">
          {f.role}
        </div>
        <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy">{f.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.bio}</p>
        <ul className="mt-6 space-y-2.5">
          {f.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-sm bg-gradient-pixel" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={`${f.name} on LinkedIn`}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-navy transition-all hover:border-orange-bright hover:text-orange-bright"
        >
          <Linkedin className="h-4 w-4" /> Connect
        </button>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
    </article>
  );
}

function Founders() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-bright">Founders</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            The Vision Behind Datagrid
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Two leaders, one mission — to build a globally trusted, AI-first software engineering company.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {founders.map((f) => (
            <FounderCard key={f.name} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamGrid() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-bright">Leadership Team</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              The People Powering Every Engagement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              An experienced team across engineering, operations, marketing, and people — all aligned around client outcomes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-navy hover:border-orange-bright/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-secondary/50 to-muted/60">
                <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute right-3 top-3 grid grid-cols-3 gap-0.5 opacity-70">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <span key={j} className={`h-1 w-1 rounded-sm ${j % 3 === 0 ? "bg-orange-bright" : "bg-orange-pale"}`} />
                  ))}
                </div>
              </div>
              <div className="relative border-t border-border p-5">
                <h3 className="font-display text-lg font-bold tracking-tight text-navy">{m.name}</h3>
                <div className="mt-1 text-[13px] font-semibold uppercase tracking-wider text-orange-bright">{m.role}</div>
                <div className="mt-3 h-px w-10 bg-gradient-pixel transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="absolute -top-24 left-1/4 h-72 w-[40rem] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-yellow">Our Principles</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Leadership That Builds With Purpose
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:bg-white/[0.06]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-pixel text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
                <div className="absolute inset-x-6 bottom-3 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-500 group-hover:scale-x-100" />
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
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-white shadow-navy lg:p-16">
          <div className="absolute inset-0 bg-grid-light opacity-30" aria-hidden />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-pixel)" }} aria-hidden />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build With a Team That Understands <span className="text-gradient-warm">Technology and Business</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-white/75">
                Partner with Datagrid to turn ideas into scalable digital products with the support of an experienced leadership and engineering team.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href="/#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-pixel)" }}
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:border-orange-yellow hover:text-orange-yellow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Founders />
        <TeamGrid />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}