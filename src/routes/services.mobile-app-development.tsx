import { createFileRoute } from "@tanstack/react-router";
import { MobileAppDevelopment } from "@/components/datagrid/MobileAppDevelopment";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid builds native, cross-platform, and progressive mobile applications across iOS, Android, Flutter, React Native, and PWA — engineered for performance, security, and scale.",
      },
      { property: "og:title", content: "Mobile App Development — Datagrid" },
      {
        property: "og:description",
        content:
          "From consumer apps to enterprise mobility and AI-powered platforms — build once, reach everywhere, grow without limits.",
      },
    ],
  }),
  component: MobileAppDevelopment,
});
