import { createFileRoute } from "@tanstack/react-router";
import { WebApplicationDevelopment } from "@/components/datagrid/WebApplicationDevelopment";

export const Route = createFileRoute("/services/web-application-development")({
  head: () => ({
    meta: [
      { title: "Web Application Development — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid builds secure, scalable, high-performance web applications — enterprise systems, SaaS platforms, customer portals, marketplaces, and PWAs — engineered for growth.",
      },
      { property: "og:title", content: "Web Application Development — Datagrid" },
      {
        property: "og:description",
        content:
          "From startup MVPs to enterprise platforms serving millions — modern, cloud-native web applications built for long-term scale.",
      },
    ],
  }),
  component: WebApplicationDevelopment,
});
