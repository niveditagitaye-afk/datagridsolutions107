import { createFileRoute } from "@tanstack/react-router";
import { MVPDevelopment } from "@/components/datagrid/MVPDevelopment";

export const Route = createFileRoute("/services/mvp-development")({
  head: () => ({
    meta: [
      { title: "MVP Development Services — Datagrid" },
      {
        name: "description",
        content:
          "Turn your idea into a market-ready product—faster and smarter. Datagrid builds scalable MVPs for startups and enterprises with agile development, product design and AI-first engineering.",
      },
      { property: "og:title", content: "MVP Development Services — Datagrid" },
      {
        property: "og:description",
        content:
          "Launch faster. Validate sooner. Scale confidently. End-to-end MVP development from discovery to launch and beyond.",
      },
    ],
  }),
  component: MVPDevelopment,
});
