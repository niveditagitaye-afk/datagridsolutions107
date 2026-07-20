/* ============================================
   GLOBAL.JS — Shared functionality for Datagrid static site
   ============================================ */

// ── Logo URL ──
const LOGO_WHITE = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop";

// ── SVG Icon paths (lucide-react equivalents) ──
const ICONS = {
  linkedin: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  menu: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  arrowRight: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowUpRight: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  chevronDown: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  chevronRight: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  code2: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  globe: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  smartphone: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  rocket: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  brain: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>',
  barChart3: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  cog: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  users: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  compass: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  lifeBuoy: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>',
  cloud: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  twitter: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 13 2 2.4 5 4 8 4 8 0 12-7 12-13 0-1.6-.3-3-1-4.3 1-1 2-2 3-3z"/></svg>',
  github: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.28-.5-4.72-.5-7 0-2-1.5-3-1.5-3-1.5 1.5-1.5 2.5-1.5 3.5C3 6.5 3 8 3 9.5 3 13 6 15 9 15.5c-.5.7-1 1.5-1 3v4"/></svg>',
  sparkles: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063L6 13a4 4 0 0 0 2.5-2.937L11 8.5a2 2 0 0 0 1.437 1.437L15 11a4 4 0 0 0-2.5 2.937L11 15.5a2 2 0 0 0-1.063-1.437z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  play: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  briefcase: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  clock: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  checkCircle: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  cpu: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  gitBranch: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  layers: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m12.83 2.18 8.93 4.6a2 2 0 0 1 0 3.6l-8.93 4.6a2 2 0 0 1-1.66 0L2.24 10.4a2 2 0 0 1 0-3.6l8.93-4.6a2 2 0 0 1 1.66 0Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  boxes: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19.97l4.97 2.71a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0L12 13.03l-4.97-2.71a2 2 0 0 0-2.06 0Z"/><path d="M7 7.52 12 10.5l5-2.98L12 4.5Z"/></svg>',
  shieldCheck: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
  activity: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  calendar: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  graduationCap: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  stethoscope: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>',
  hotel: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21V7l9-4 9 4v14"/><path d="M3 21h18"/><path d="M9 21v-6h6v6"/></svg>',
  shoppingBag: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  factory: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M2 20a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v13a3 3 0 0 0 3 3Z"/></svg>',
  leaf: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 3.3 2.3 7.74 1.5 12.24C19.39 19.28 14.77 21 11 20Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  fileSpreadsheet: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2v6h6"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M8 14h8"/><path d="M8 18h8"/><path d="M8 10h2"/><path d="M12 10h2"/><path d="M8 22v-4"/><path d="M16 22v-4"/></svg>',
  building2: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  gem: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>',
  clipboardList: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  hammer: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="M18 15l4-4"/><path d="m21.5 11.5-9-9"/><path d="M6.5 4.5 4 7l5 5"/></svg>',
  testTube: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M14.5 14.5 2 2"/><path d="M15 15 3 3"/><path d="M16 16 4 4"/><path d="M17 17 5 5"/><path d="M18 18 6 6"/><path d="M19 19 7 7"/><path d="M20 20 8 8"/><path d="M9 9 21 21"/><path d="M10 10 22 22"/><path d="M11 11 23 23"/><path d="M12 12 24 24"/></svg>',
  externalLink: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  server: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
  palette: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  database: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  megaphone: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  bot: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
  workflow: '<svg class="icon" width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>',
};

// ── Navigation data ──
const NAV_DATA = [
  {
    label: "Services",
    mega: [
      {
        title: "Build & Develop",
        items: [
          { label: "Custom Software Development", to: "services.html#custom-software-development", description: "Tailor-made platforms for your business", icon: "code2" },
          { label: "Web Application Development", to: "services.html#web-application-development", description: "SaaS, portals & PWAs built to scale", icon: "globe" },
          { label: "Mobile App Development", to: "services.html#mobile-app-development", description: "Native, Flutter & React Native apps", icon: "smartphone" },
          { label: "MVP Development", to: "services.html#mvp-development", description: "Launch fast, validate & scale confidently", icon: "rocket" },
        ],
      },
      {
        title: "AI, Data & Automation",
        items: [
          { label: "AI & ML Development", to: "services.html#ai-ml-development", description: "GenAI, NLP, CV, agents & analytics", icon: "brain" },
          { label: "Decision Intelligence", to: "services.html#decision-intelligence-business-insights", description: "Dashboards & predictive insights", icon: "barChart3" },
          { label: "ERP & Workflow Automation", to: "services.html#erp-workflow-automation", description: "Scalable ERP & process automation", icon: "cog" },
        ],
      },
      {
        title: "Teams, Advisory & Operations",
        items: [
          { label: "GCC & Dedicated Teams", to: "services.html#global-capability-centers-dedicated-teams", description: "Global capability centers in India", icon: "users" },
          { label: "Fractional CTO Advisory", to: "services.html#fractional-cto-technology-advisory", description: "Strategic technology leadership", icon: "compass" },
          { label: "Support & Maintenance", to: "services.html#support-maintenance", description: "Reliable long-term application support", icon: "lifeBuoy" },
          { label: "Cloud, DevOps & SRE", to: "services.html#cloud-devops-sre", description: "AWS, Azure, GCP, CI/CD & 24×7 SRE", icon: "cloud" },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    children: [
      { label: "Technology", to: "expertise.html#technology", description: "Our modern engineering stack" },
      { label: "Industries", to: "expertise.html#industries", description: "Domains and sectors we serve" },
    ],
  },
  { label: "Products", to: "products.html" },
  { label: "Case Studies", href: "index.html#case-studies" },
  {
    label: "About Us",
    children: [
      { label: "About Us", to: "about-us.html", description: "Our story, journey and global presence" },
      { label: "Leadership Team", to: "about-us.html#leadership", description: "Meet the people behind Datagrid" },
      { label: "Certification", to: "about-us.html#certification", description: "ISO & CMMI accredited standards" },
      { label: "Why Datagrid?", to: "about-us.html#why-datagrid", description: "What makes us different" },
    ],
  },
  { label: "Careers", href: "index.html#careers" },
  {
    label: "Insights",
    children: [
      { label: "Case Studies", to: "case-studies.html", description: "Client success stories & outcomes" },
    ],
  },
  { label: "Contact", to: "contact.html" },
];

const INDUSTRIES = [
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

// ── Helper: icon SVG ──
function icon(name, size) {
  const s = size || 24;
  return ICONS[name] ? ICONS[name].replace('width="24" height="24"', `width="${s}" height="${s}"`) : '';
}

// ── Build Header HTML ──
function buildHeader(activePage) {
  const megaMenuHtml = NAV_DATA.map((n) => {
    if (n.mega) {
      const groups = n.mega.map((group) => `
        <div>
          <div class="mega-group-title">
            <span class="dot"></span>
            <span class="text">${group.title}</span>
          </div>
          <ul>
            ${group.items.map((c) => `
              <li>
                <a href="${c.to}" class="mega-item">
                  <span class="icon-box">${icon(c.icon, 16)}</span>
                  <div>
                    <div class="label">${c.label}</div>
                    <div class="desc">${c.description}</div>
                  </div>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('');
      return `
        <div class="nav-item" data-nav-label="${n.label}">
          <button class="nav-link" type="button">
            ${n.label}
            <span class="chevron">${icon('chevronDown', 14)}</span>
            <span class="underline-bar"></span>
          </button>
          <div class="mega-panel">
            <div class="mega-panel-inner">
              <div class="mega-panel-grid">${groups}</div>
            </div>
          </div>
        </div>
      `;
    }
    if (n.children) {
      const items = n.children.map((c) => `
        <a href="${c.to || c.href}" class="dropdown-link">
          <div class="label">${c.label}</div>
          ${c.description ? `<div class="desc">${c.description}</div>` : ''}
        </a>
      `).join('');
      return `
        <div class="nav-item" data-nav-label="${n.label}">
          <button class="nav-link" type="button">
            ${n.label}
            <span class="chevron">${icon('chevronDown', 14)}</span>
            <span class="underline-bar"></span>
          </button>
          <div class="dropdown-panel">
            <div class="dropdown-panel-inner">${items}</div>
          </div>
        </div>
      `;
    }
    if (n.to) {
      const isActive = activePage === n.to;
      return `<a href="${n.to}" class="nav-link ${isActive ? 'active' : ''}">${n.label}<span class="underline-bar"></span></a>`;
    }
    return `<a href="${n.href}" class="nav-link">${n.label}<span class="underline-bar"></span></a>`;
  }).join('');

  // Mobile menu
  const mobileMenuHtml = NAV_DATA.map((n) => {
    if (n.mega) {
      const groups = n.mega.map((group) => `
        <div>
          <div class="group-title">${group.title}</div>
          ${group.items.map((c) => `<a href="${c.to}" class="sub-link">${c.label}</a>`).join('')}
        </div>
      `).join('');
      return `
        <div class="mobile-nav-item" data-label="${n.label}">
          <button class="mobile-accordion-trigger" type="button">
            ${n.label}
            <span class="chevron">${icon('chevronDown', 16)}</span>
          </button>
          <div class="mobile-accordion-content" style="display:none;">
            ${groups}
          </div>
        </div>
      `;
    }
    if (n.children) {
      const items = n.children.map((c) => `<a href="${c.to || c.href}" class="sub-link">${c.label}</a>`).join('');
      return `
        <div class="mobile-nav-item" data-label="${n.label}">
          <button class="mobile-accordion-trigger" type="button">
            ${n.label}
            <span class="chevron">${icon('chevronDown', 16)}</span>
          </button>
          <div class="mobile-accordion-content" style="display:none;">
            ${items}
          </div>
        </div>
      `;
    }
    if (n.to) {
      const isActive = activePage === n.to;
      return `<a href="${n.to}" class="mobile-nav-link ${isActive ? 'active' : ''}">${n.label}</a>`;
    }
    return `<a href="${n.href}" class="mobile-nav-link">${n.label}</a>`;
  }).join('');

  return `
    <header class="site-header" id="siteHeader">
      <div class="header-grid-bg"></div>
      <div class="header-glow"></div>

      <div class="header-top-strip">
        <div class="header-top-strip-inner">
          <div class="left-group">
            <span style="display:inline-flex;align-items:center;gap:0.375rem;">
              <span style="height:6px;width:6px;border-radius:2px;background:var(--orange-yellow);animation:pulse 2s infinite;"></span>
              ISO 9001 & ISO 27001 Certified
            </span>
            <span style="color:rgba(255,255,255,0.3);">·</span>
            <span>Trusted by 750+ global businesses</span>
          </div>
          <div class="right-group">
            <a href="mailto:hello@datagrid.co.in">${icon('mail', 12)}<span>hello@datagrid.co.in</span></a>
            <a href="tel:+919999999999">${icon('phone', 12)}<span>+91 99999 99999</span></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="social-link" aria-label="LinkedIn">${icon('linkedin', 12)}</a>
          </div>
        </div>
      </div>

      <div class="header-main">
        <a href="index.html" class="header-logo">
          <img src="${LOGO_WHITE}" alt="Datagrid" style="height:1.75rem;width:auto;">
        </a>

        <nav class="header-nav">
          ${megaMenuHtml}
        </nav>

        <div class="header-cta">
          <a href="index.html#cta" class="btn-cta-gradient">
            <span class="shine"></span>
            <span style="position:relative;white-space:nowrap;">Start Your Project</span>
            <span style="position:relative;">${icon('arrowRight', 14)}</span>
          </a>
        </div>

        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
          ${icon('menu', 24)}
        </button>
      </div>

      <div class="mobile-menu" id="mobileMenu" style="display:none;">
        <div class="mobile-menu-inner">
          ${mobileMenuHtml}
          <a href="index.html#cta" class="mobile-cta">Start Your Project</a>
          <div class="mobile-contact">
            <a href="mailto:hello@datagrid.co.in">${icon('mail', 12)}<span>hello@datagrid.co.in</span></a>
            <a href="tel:+919999999999">${icon('phone', 12)}<span>+91 99999 99999</span></a>
          </div>
        </div>
      </div>
    </header>
  `;
}

// ── Build Footer HTML ──
function buildFooter() {
  const industriesHtml = INDUSTRIES.map((i) => `<li><a href="index.html#industries">${i}</a></li>`).join('');
  const companyLinks = ["Technologies", "Resources", "Case Studies", "Careers", "Contact"]
    .map((l) => `<li><a href="#">${l}</a></li>`).join('');
  const legalLinks = ["Privacy", "Terms", "Sitemap"]
    .map((l) => `<li><a href="#">${l}</a></li>`).join('');

  return `
    <footer class="site-footer">
      <div class="footer-grid-bg"></div>
      <div class="footer-glow"></div>

      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-col-brand">
            <div class="footer-logo-box">
              <img src="${LOGO_WHITE}" alt="Datagrid" style="height:2.25rem;">
            </div>
            <p class="footer-desc">
              AI-first software development company helping global businesses
              ship scalable digital products with speed and confidence.
            </p>
            <div class="footer-contact">
              <a href="mailto:hello@datagrid.co.in">${icon('mail', 16)} hello@datagrid.co.in</a>
              <a href="tel:+919999999999">${icon('phone', 16)} +91 99999 99999</a>
            </div>
            <div class="footer-social">
              <a href="#" aria-label="social link">${icon('linkedin', 16)}</a>
              <a href="#" aria-label="social link">${icon('twitter', 16)}</a>
              <a href="#" aria-label="social link">${icon('github', 16)}</a>
            </div>
          </div>

          <div class="footer-col-industries">
            <h4 class="footer-heading">Industries</h4>
            <ul class="footer-links">${industriesHtml}</ul>
          </div>

          <div class="footer-col-company">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links-list">${companyLinks}</ul>
            <h4 class="footer-heading" style="margin-top:2rem;">Legal</h4>
            <ul class="footer-links-list">${legalLinks}</ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Datagrid Solutions. All rights reserved. ISO 9001 & ISO 27001 Certified.</p>
          <p class="mono">Built with grid, pixels & AI.</p>
        </div>
      </div>
    </footer>
  `;
}

// ── Build PixelGrid ──
function buildPixelGrid(cols, rows, className) {
  const palette = ['var(--redorange)', 'var(--orange-bright)', 'var(--orange)', 'var(--orange-yellow)', 'var(--orange-light)', 'var(--orange-pale)'];
  const cells = [];
  for (let i = 0; i < cols * rows; i++) {
    const x = i % cols;
    const y = Math.floor(i / cols);
    const filled = (x * 3 + y * 5 + cols + rows) % 7 > 1;
    const color = filled ? palette[i % palette.length] : 'rgba(255,255,255,0.05)';
    const delay = (i % 12) * 0.15;
    cells.push(`<div style="background:${color};animation-delay:${delay}s;"></div>`);
  }
  return `<div class="pixel-grid ${className || ''}" style="grid-template-columns:repeat(${cols},minmax(0,1fr));">${cells.join('')}</div>`;
}

// ── Init: inject header & footer ──
function initSite() {
  const activePage = document.body.getAttribute('data-page') || '';
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');

  if (headerSlot) headerSlot.innerHTML = buildHeader(activePage);
  if (footerSlot) footerSlot.innerHTML = buildFooter();

  // Sticky header
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileToggle && mobileMenu) {
    let open = false;
    mobileToggle.addEventListener('click', () => {
      open = !open;
      mobileMenu.style.display = open ? 'block' : 'none';
      mobileToggle.innerHTML = open ? icon('x', 24) : icon('menu', 24);
    });
  }

  // Desktop dropdown/mega menu (hover + click)
  document.querySelectorAll('.nav-item').forEach((item) => {
    let openTimeout;
    item.addEventListener('mouseenter', () => {
      clearTimeout(openTimeout);
      document.querySelectorAll('.nav-item.open').forEach((other) => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', () => {
      openTimeout = setTimeout(() => item.classList.remove('open'), 200);
    });
    const btn = item.querySelector('.nav-link');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('open');
      });
    }
  });

  // Mobile accordion
  document.querySelectorAll('.mobile-accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const chevron = trigger.querySelector('.chevron');
      const isOpen = content.style.display !== 'none';
      // Close all
      document.querySelectorAll('.mobile-accordion-content').forEach((c) => {
        c.style.display = 'none';
      });
      document.querySelectorAll('.mobile-accordion-trigger .chevron').forEach((ch) => {
        ch.style.transform = '';
      });
      if (!isOpen) {
        content.style.display = 'block';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.style.display = 'none';
        if (mobileToggle) {
          mobileToggle.innerHTML = icon('menu', 24);
        }
        open = false;
      }
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach((el) => observer.observe(el));
  }

  // Inject pixel grids
  document.querySelectorAll('[data-pixel-grid]').forEach((el) => {
    const cols = parseInt(el.dataset.pixelGrid.split(',')[0]) || 8;
    const rows = parseInt(el.dataset.pixelGrid.split(',')[1]) || 4;
    const cls = el.dataset.pixelClass || '';
    el.innerHTML = buildPixelGrid(cols, rows, cls);
  });
}

// Auto-init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
