import { createFileRoute } from "@tanstack/react-router";
import { Leadership } from "@/components/datagrid/Leadership";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Datagrid" },
      { name: "description", content: "Meet the Datagrid leadership team — founders and senior leaders driving AI-first software engineering and global delivery for 750+ clients." },
      { property: "og:title", content: "Leadership Team — Datagrid" },
      { property: "og:description", content: "Meet the leaders behind Datagrid's AI-first enterprise technology and global engineering delivery." },
    ],
  }),
  component: Leadership,
});