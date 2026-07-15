import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Sparkles, Globe, Users, Clock, ShieldCheck, Heart, Handshake, BookOpen, Cpu, Award, MapPin, Linkedin, Building2, Rocket, Brain, Cloud, Database, Code as Code2, CircleCheck as CheckCircle2, Lock, BadgeCheck } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
const deepakImg = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop";
const karishmaImg = "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop";

const trustMatrix = [
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Users, value: "100+", label: "Professionals" },
  { icon: Clock, value: "24×7", label: "Global Delivery" },
  { icon: ShieldCheck, value: "10+", label: "Years of Trust" },
];

const values = [
  { icon: Heart, title: "Customer First", body: "Our clients' success defines our success." },
  { icon: Lock, title: "Integrity & Trust", body: "We protect data, relationships, and commitments." },
  { icon: BookOpen, title: "Continuous Learning", body: "Growing together through knowledge sharing and innovation." },
  { icon: Cpu, title: "Automation with Purpose", body: "Let technology handle repetition so people can create." },
  { icon: Award, title: "Ownership & Excellence", body: "We deliver with accountability, quality, and pride." },
];

const journey = [
  { year: "2015", title: "The Beginning", tag: "Founded", body: "Started Datagrid with 5 passionate team members. Built on a vision to deliver high-quality software solutions and become a trusted technology partner for businesses embracing digital transformation." },
  { year: "2018", title: "Expanding to Nashik", tag: "Growth", body: "Established our Nashik Development Center. Strengthened our engineering capabilities and created opportunities to nurture technology talent beyond metropolitan cities." },
  { year: "2021", title: "Crossing 100+ Team Members", tag: "Milestone", body: "A milestone powered by customer trust. Expanded into a multidisciplinary organization with expertise spanning software engineering, enterprise solutions, cloud technologies, and emerging digital platforms." },
  { year: "2022", title: "Launching USA Operations", tag: "Global", body: "Established our presence in the United States. Opened our sales and business development operations in Miami, bringing Datagrid closer to international clients and strategic partnerships." },
  { year: "2023", title: "Pune Development Center", tag: "Expansion", body: "Strengthening innovation and talent. Expanded operations to Pune, one of India's leading technology hubs, enabling deeper collaboration, growth, and access to world-class engineering talent." },
  { year: "2024", title: "AI, ML & Intelligent Automation", tag: "Innovation", body: "Embracing the next generation of technology. Invested heavily in Artificial Intelligence, Machine Learning, NLP, Computer Vision, and intelligent business automation to help clients innovate faster and operate smarter." },
  { year: "2026", title: "AI-First Engineering Organization", tag: "Today", body: "Building the future of software development. Adopted an AI-first approach across engineering — intelligent tools for development, testing, documentation, QA, and delivery — enabling better products, faster execution, and exceptional customer experiences." },
];

const offices = [
  { city: "Mumbai", country: "India", role: "Headquarters", icon: Building2 },
  { city: "Nashik", country: "India", role: "Development Center", icon: Code2 },
  { city: "Pune", country: "India", role: "Development Center", icon: Code2 },
  { city: "Miami", country: "USA", role: "Sales & Business Development", icon: Rocket },
];

const countries = [
  "India","USA","Canada","UK","Netherlands","Brazil","UAE","Qatar","Tanzania","Uganda","Zambia","Australia","Germany","Switzerland","Singapore","South Korea","Luxembourg",
];

const certOutcomes = [
  "Consistent and predictable project delivery",
  "Strong information security and confidentiality practices",
  "Well-defined quality management processes",
  "Continuous improvement across teams and operations",
  "Compliance with international standards and best practices",
  "Greater trust, transparency, and accountability",
];

export function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 lg:pt-28">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-25" aria-hidden />
          <div
            className="pointer-events-none absolute -top-32 left-1/4 h-96 w-[42rem] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pixel)" }}
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div className="lg:col-span-7">
              {/* breadcrumb */}
              <nav className="flex items-center gap-1.5 text-[12px] font-medium text-white/50">
                <Link to="/" className="hover:text-orange-yellow">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-white/80">About Us</span>
              </nav>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
                <Sparkles className="h-3 w-3" /> About Datagrid
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technology with Purpose.{" "}
                <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                  Partnerships with Trust.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/80">
                Datagrid is a global software engineering and digital transformation
                company helping organizations build, modernize, and scale technology
                solutions with confidence.
              </p>
              <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/65">
                With offices in Mumbai, Nashik and the United States, we combine deep
                business understanding with expertise in software development, AI,
                cloud platforms, enterprise systems, and data intelligence to deliver
                solutions across diverse industries.
              </p>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/65">
                From innovative startups to large enterprises, we partner with our
                clients to create technology that drives growth, improves efficiency,
                and creates lasting impact.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/#services"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.03]"
                  style={{ background: "var(--gradient-pixel)" }}
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow/50 hover:text-orange-yellow"
                >
                  Meet Our Leadership
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero visual: pixel constellation */}
            <div className="relative lg:col-span-5">
              <div className="relative aspect-square w-full max-w-[520px] mx-auto">
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
                <div
                  className="absolute inset-0 rounded-[2rem] opacity-[0.08]"
                  style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "22px 22px" }}
                  aria-hidden
                />

                {/* Central hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="flex h-28 w-28 items-center justify-center rounded-2xl shadow-glow"
                    style={{ background: "var(--gradient-pixel)" }}
                  >
                    <div className="text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/90">Datagrid</div>
                      <div className="mt-0.5 text-[11px] font-bold text-white">Core Platform</div>
                    </div>
                  </div>
                </div>

                {/* Orbit nodes */}
                {[
                  { icon: Brain, label: "AI / ML", pos: "top-6 left-6" },
                  { icon: Cloud, label: "Cloud", pos: "top-6 right-6" },
                  { icon: Database, label: "Data", pos: "bottom-6 left-6" },
                  { icon: Code2, label: "Software", pos: "bottom-6 right-6" },
                  { icon: ShieldCheck, label: "Trust", pos: "top-1/2 -translate-y-1/2 left-2" },
                  { icon: Globe, label: "Global", pos: "top-1/2 -translate-y-1/2 right-2" },
                ].map(({ icon: Icon, label, pos }) => (
                  <div key={label} className={`absolute ${pos}`}>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-navy-deep/80 text-orange-yellow shadow-navy backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}

                {/* connector lines */}
                <svg className="absolute inset-0 h-full w-full" aria-hidden>
                  <defs>
                    <linearGradient id="cg" x1="0" x2="1">
                      <stop offset="0%" stopColor="#d73b1a" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f5b544" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {[
                    ["12%","12%"],["88%","12%"],["12%","88%"],["88%","88%"],["6%","50%"],["94%","50%"],
                  ].map(([x,y], i) => (
                    <line key={i} x1="50%" y1="50%" x2={x} y2={y} stroke="url(#cg)" strokeWidth="1" strokeDasharray="3 4" />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT + TRUST MATRIX ================= */}
        <section className="relative bg-background py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                Who we are
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                About Datagrid
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Datagrid is a global software engineering and digital transformation
                  company helping organizations build, modernize, and scale technology
                  solutions with confidence.
                </p>
                <p>
                  With offices in Mumbai, Nashik and the United States, we combine deep
                  business understanding with expertise in software development, AI, cloud
                  platforms, enterprise systems, and data intelligence to deliver solutions
                  across diverse industries.
                </p>
                <p>
                  From innovative startups to large enterprises, we partner with our clients
                  to create technology that drives growth, improves efficiency, and creates
                  lasting impact.
                </p>
              </div>
            </div>

            {/* Trust matrix card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1f496b 1px, transparent 0)", backgroundSize: "18px 18px" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
                      Global Proof
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-black tracking-tight">Trust, at a glance</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    A decade of partnerships, engineering excellence, and global delivery.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {trustMatrix.map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:-translate-y-0.5 hover:border-orange-bright/50 hover:shadow-md"
                      >
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1f496b]/5 text-[#1f496b] group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="mt-3 text-2xl font-black text-[#1f496b]">{value}</div>
                        <div className="text-[11.5px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11.5px] text-muted-foreground">
                    <BadgeCheck className="h-3.5 w-3.5 text-orange-bright" />
                    ISO 9001 & ISO 27001 Certified · Trusted by 750+ global businesses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP HIGHLIGHT ================= */}
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1f496b 1px, transparent 0)", backgroundSize: "22px 22px" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                Leadership Team
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                Led by builders who partner for the long term
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Datagrid is led by experienced technology leaders who combine business
                understanding, engineering excellence, and long-term partnership thinking.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {[
                {
                  name: "Deepak Jain",
                  role: "Co-Founder, CEO & Director",
                  img: deepakImg,
                  bio: "Deepak leads Datagrid's vision, global expansion, and technology strategy. With 20+ years of experience in software engineering, enterprise platforms, AI, and digital transformation, he has helped organizations across industries build scalable solutions and successful digital products. He is passionate about innovation, open technologies, and creating long-term partnerships that deliver meaningful business outcomes.",
                  tags: ["Vision", "Strategy", "Global Expansion"],
                },
                {
                  name: "Karishma Aggarwal",
                  role: "Co-Founder & CTO",
                  img: karishmaImg,
                  bio: "Karishma, with an experience of 15+ years drives Datagrid's technology vision with a strong belief that repetitive work belongs to computers, allowing people to focus on creativity and decision-making. She leads engineering, automation, and AI initiatives, helping organizations build intelligent, scalable, and efficient digital solutions that simplify operations and accelerate growth.",
                  tags: ["Engineering", "Automation", "AI"],
                },
              ].map((p) => (
                <article
                  key={p.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-2xl"
                >
                  <div className="grid gap-0 sm:grid-cols-5">
                    <div className="relative sm:col-span-2">
                      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 sm:h-full">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-orange-bright px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                          <Sparkles className="h-3 w-3" /> Co-Founder
                        </div>
                      </div>
                    </div>
                    <div className="relative p-6 sm:col-span-3 lg:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-black tracking-tight">{p.name}</h3>
                          <p className="mt-1 text-[13px] font-bold text-orange-bright">{p.role}</p>
                        </div>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-300">
                          <Linkedin className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
                        {p.bio}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-[#1f496b]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/leadership"
                className="group inline-flex items-center gap-2 rounded-full border border-[#1f496b]/20 bg-white px-6 py-3 text-sm font-bold text-[#1f496b] shadow-sm transition-all hover:border-orange-bright hover:text-orange-bright hover:shadow-md"
              >
                View Full Leadership Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= VISION & VALUES ================= */}
        <section className="relative bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                  Vision & Values
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                  What we stand for
                </h2>
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-md">
                  <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-pixel)" }} />
                  <div className="relative">
                    <div className="text-[11px] font-black uppercase tracking-wider text-orange-bright">Our Vision</div>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#1f496b]">
                      To empower businesses worldwide with intelligent technology,
                      exceptional customer experiences and innovative solutions that
                      create sustainable growth and lasting impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {values.map(({ icon: Icon, title, body }) => (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-xl"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f496b]/5 text-[#1f496b] transition-colors group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-black tracking-tight">{title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                      <span className="pointer-events-none absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-gradient-to-r from-orange-bright to-orange-yellow transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR JOURNEY ================= */}
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(#1f496b 1px, transparent 1px), linear-gradient(90deg, #1f496b 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                Our Journey
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                A Decade of Growth, Innovation, and Lasting Partnerships
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                From a small team of passionate engineers to a global technology
                partner serving clients across industries and continents, our journey
                has been defined by customer trust, continuous learning, and a
                relentless drive to innovate.
              </p>
            </div>

            <div className="relative mt-14">
              {/* center line (md+) */}
              <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-orange-bright via-slate-300 to-transparent md:left-1/2 md:block" aria-hidden />
              {/* mobile line */}
              <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-orange-bright via-slate-300 to-transparent md:hidden" aria-hidden />

              <ul className="space-y-8">
                {journey.map((j, i) => {
                  const left = i % 2 === 0;
                  return (
                    <li key={j.year} className="relative md:grid md:grid-cols-2 md:gap-10">
                      {/* node */}
                      <span className="absolute left-4 top-4 z-10 -translate-x-1/2 md:left-1/2">
                        <span className="block h-3.5 w-3.5 rounded-sm bg-orange-bright shadow-glow ring-4 ring-orange-bright/15" />
                      </span>

                      <div className={`pl-10 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright/40 hover:shadow-xl">
                          <div className={`flex items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                            <span className="rounded-md bg-[#1f496b] px-2 py-0.5 text-[11px] font-black text-white">{j.year}</span>
                            <span className="rounded-full bg-orange-bright/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-orange-bright">
                              {j.tag}
                            </span>
                          </div>
                          <h3 className="mt-3 text-lg font-black tracking-tight">{j.title}</h3>
                          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                            {j.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-orange-bright/25 bg-white p-6 text-center shadow-md">
              <div className="text-[11px] font-black uppercase tracking-widest text-orange-bright">
                The Journey Continues…
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                The first decade established our foundation. The next decade is focused on
                global growth, AI-driven innovation, stronger customer partnerships, and
                building technology that creates lasting impact across industries and
                communities worldwide.
              </p>
              <p className="mt-4 text-[15px] font-black text-[#1f496b]">
                Build Faster. Scale Smarter. Deliver Better.
              </p>
            </div>
          </div>
        </section>

        {/* ================= GLOBAL PRESENCE ================= */}
        <section className="relative overflow-hidden bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                Global Presence
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                Proudly Built in India. Trusted Around the World.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                With headquarters in Mumbai, development centers in Nashik and Pune, and a
                sales office in Miami, Datagrid delivers technology solutions to
                organizations across 15+ countries and multiple industries.
              </p>
            </div>

            {/* Offices */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map(({ city, country, role, icon: Icon }) => (
                <div
                  key={city}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f496b]/5 text-[#1f496b] group-hover:bg-orange-bright/10 group-hover:text-orange-bright">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-base font-black tracking-tight">{city}</div>
                      <div className="text-[11.5px] font-semibold uppercase tracking-wider text-muted-foreground">{country}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[12px] font-semibold text-[#1f496b]">
                    <MapPin className="h-3.5 w-3.5 text-orange-bright" />
                    {role}
                  </div>
                </div>
              ))}
            </div>

            {/* Countries chips */}
            <div className="mt-14">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-orange-bright" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
                  Countries We Have Served
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[#1f496b] shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-bright hover:text-orange-bright"
                  >
                    <Globe className="h-3 w-3 text-orange-bright" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* By the numbers */}
            <div className="mt-14 grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:grid-cols-4 sm:p-8">
              {trustMatrix.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-[#1f496b] sm:text-4xl">{value}</div>
                  <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[14px] font-semibold text-[#1f496b]">
              Proudly built in India. Trusted by businesses around the world.
            </p>
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="relative bg-slate-50 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/25 bg-orange-bright/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-bright">
                Certifications
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                Quality, Security, and Trust at the Core
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                At Datagrid, we believe that great technology is built on strong processes,
                continuous improvement, and uncompromising data security. Our internationally
                recognized certifications reflect our commitment to delivering reliable
                solutions while protecting our clients' information and intellectual property.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                {
                  icon: BadgeCheck,
                  code: "ISO 9001",
                  title: "Quality Management Systems",
                  body: "Our ISO 9001 certification demonstrates our commitment to standardized processes, continuous improvement, customer satisfaction, and consistent delivery excellence across every project and engagement.",
                },
                {
                  icon: ShieldCheck,
                  code: "ISO 27001",
                  title: "Information Security Management Systems",
                  body: "We follow globally accepted security practices to safeguard client data, intellectual property, and business information through robust controls, secure development practices, and continuous risk management.",
                },
              ].map(({ icon: Icon, code, title, body }) => (
                <div
                  key={code}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-all hover:-translate-y-1 hover:border-orange-bright/40 hover:shadow-2xl"
                >
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-10 blur-3xl" style={{ background: "var(--gradient-pixel)" }} />
                  <div className="relative flex items-start gap-5">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1f496b] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-widest text-orange-bright">
                        {code} · Certified
                      </div>
                      <h3 className="mt-1 text-xl font-black tracking-tight">{title}</h3>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2">
                <Handshake className="h-4 w-4 text-orange-bright" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#1f496b]">
                  What This Means for Our Clients
                </span>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {certOutcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[13.5px] text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-bright" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-center text-[14px] font-semibold text-[#1f496b]">
              Quality in every delivery. Security in every interaction. Trust in every partnership.
            </p>
          </div>
        </section>

        {/* ================= FINAL CTA (shared style) ================= */}
        <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-20" aria-hidden />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pixel)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-bright/30 bg-orange-bright/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-yellow">
              <Sparkles className="h-3 w-3" /> Let's build together
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build with a Technology{" "}
              <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
                Partner You Can Trust
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
              From software engineering and AI to cloud, enterprise systems, and long-term
              support, Datagrid helps businesses create technology that drives growth and
              lasting impact.
            </p>
            <p className="mt-3 text-[13px] font-semibold text-orange-yellow">
              Technology with purpose. Partnerships with trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:border-orange-yellow/50 hover:text-orange-yellow"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
