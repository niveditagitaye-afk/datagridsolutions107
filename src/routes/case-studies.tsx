import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/datagrid/CaseStudies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Datagrid" },
      { name: "description", content: "Explore Datagrid case studies — enterprise platforms, AI products, ERP, ecommerce and analytics solutions delivered for 750+ global clients." },
      { property: "og:title", content: "Case Studies — Datagrid" },
      { property: "og:description", content: "How Datagrid helps clients streamline operations, improve customer experiences, and drive measurable growth." },
    ],
  }),
  component: CaseStudies,
});