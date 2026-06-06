import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/datagrid/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Datagrid" },
      { name: "description", content: "Get in touch with Datagrid for software development, AI, cloud, ERP, mobile app, and digital transformation projects." },
      { property: "og:title", content: "Contact — Datagrid" },
      { property: "og:description", content: "Connect with our team in Mumbai, Pune, Nashik, and the USA." },
    ],
  }),
  component: Contact,
});