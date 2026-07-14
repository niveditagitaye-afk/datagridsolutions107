import { createFileRoute } from "@tanstack/react-router";
import { ExpertiseTechnology } from "@/components/datagrid/ExpertiseTechnology";

export const Route = createFileRoute("/expertise/technology")({
  head: () => ({
    meta: [
      { title: "Technology Expertise — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid's technology expertise: backend, frontend, mobile, AI & data, cloud, and databases. Modern open-source stacks engineered for scale, security, and business outcomes.",
      },
      { property: "og:title", content: "Technology Expertise — Datagrid" },
      {
        property: "og:description",
        content:
          "Modern technologies. Proven engineering. Scalable solutions—engineered by Datagrid for enterprise-grade digital platforms.",
      },
    ],
  }),
  component: ExpertiseTechnology,
});
