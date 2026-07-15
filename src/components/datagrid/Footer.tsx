import { Linkedin, Mail, Phone, Twitter, Github } from "lucide-react";
const logo = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop";

const footerYear = 2026;

const industries = [
  "Association & Event Technology",
  "Jewelry Technology",
  "Healthcare",
  "Hospitality",
  "Retail & Ecommerce",
  "Manufacturing",
  "Agritech",
  "Education",
  "Insurance",
  "Real Estate",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-pixel)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-lg bg-white px-4 py-3 inline-block">
              <img src={logo} alt="Datagrid" className="h-9" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              AI-first software development company helping global businesses
              ship scalable digital products with speed and confidence.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:hello@datagrid.co.in" className="flex items-center gap-2 text-white/80 hover:text-orange-yellow">
                <Mail className="h-4 w-4" /> hello@datagrid.co.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 text-white/80 hover:text-orange-yellow">
                <Phone className="h-4 w-4" /> +91 99999 99999
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-white/15 p-2.5 text-white/80 transition-all hover:border-orange-bright hover:bg-orange-bright hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-orange-yellow">
              Industries
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {industries.map((i) => (
                <li key={i}>
                  <a href="#industries" className="text-white/75 hover:text-orange-yellow">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-orange-yellow">
              Company
            </h4>
            <ul className="mt-5 space-y-2 text-sm">
              {["Technologies", "Resources", "Case Studies", "Careers", "Contact"].map((l) => (
                <li key={l}><a href="#" className="text-white/75 hover:text-orange-yellow">{l}</a></li>
              ))}
            </ul>
            <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-orange-yellow">
              Legal
            </h4>
            <ul className="mt-5 space-y-2 text-sm">
              {["Privacy", "Terms", "Sitemap"].map((l) => (
                <li key={l}><a href="#" className="text-white/75 hover:text-orange-yellow">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {footerYear} Datagrid Solutions. All rights reserved. ISO 9001 & ISO 27001 Certified.</p>
          <p className="font-mono">Built with grid, pixels & AI.</p>
        </div>
      </div>
    </footer>
  );
}
