import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

/**
 * Reusable final CTA for all Expertise pages.
 * Keep this styling identical across every /expertise/* page.
 */
export function ExpertiseCTA({
  eyebrow = "Let's build together",
  heading,
  highlight,
  body,
  tagline,
}: {
  eyebrow?: string;
  heading: string;
  highlight: string;
  body: string;
  tagline: string;
}) {
  return (
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
          {eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          {heading}{" "}
          <span className="bg-gradient-to-r from-orange-bright to-orange-yellow bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">{body}</p>
        <p className="mt-3 text-[13px] font-semibold text-orange-yellow">{tagline}</p>
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
  );
}
