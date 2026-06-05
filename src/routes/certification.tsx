import { createFileRoute } from "@tanstack/react-router";
import { Certification } from "@/components/datagrid/Certification";

export const Route = createFileRoute("/certification")({
  head: () => ({
    meta: [
      { title: "Certifications — Datagrid" },
      { name: "description", content: "Datagrid is ISO 9001:2015, ISO 27001:2022 and CMMI Level 5 certified — quality, security and process maturity for enterprise software delivery." },
      { property: "og:title", content: "Certifications — Datagrid" },
      { property: "og:description", content: "ISO 9001, ISO 27001 and CMMI Level 5 — globally recognised standards behind every Datagrid solution." },
    ],
  }),
  component: Certification,
});