import { createFileRoute } from "@tanstack/react-router";
import { AboutUs } from "@/components/datagrid/AboutUs";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Datagrid | Technology with Purpose. Partnerships with Trust." },
      { name: "description", content: "Datagrid is a global software engineering and digital transformation company with offices in Mumbai, Nashik, Pune and the USA — trusted by businesses in 15+ countries." },
      { property: "og:title", content: "About Us — Datagrid" },
      { property: "og:description", content: "A decade of engineering excellence, global delivery, and trusted partnerships. Meet the team and story behind Datagrid." },
    ],
  }),
  component: AboutUs,
});
