import { createFileRoute } from "@tanstack/react-router";
import { WhyDatagrid } from "@/components/datagrid/WhyDatagrid";

export const Route = createFileRoute("/why-datagrid")({
  head: () => ({
    meta: [
      { title: "Why Datagrid? — Datagrid" },
      { name: "description", content: "Discover why businesses choose Datagrid for software development — certified quality, client-focused delivery, and long-term partnership." },
      { property: "og:title", content: "Why Datagrid? — Datagrid" },
      { property: "og:description", content: "Discover why businesses choose Datagrid for software development — certified quality, client-focused delivery, and long-term partnership." },
    ],
  }),
  component: WhyDatagrid,
});
