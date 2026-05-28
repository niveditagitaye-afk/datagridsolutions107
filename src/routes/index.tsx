import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/datagrid/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Datagrid — AI-First Software Development for Global Businesses" },
      { name: "description", content: "Datagrid Solutions builds scalable, AI-first digital products for enterprises worldwide. 750+ projects, 15+ countries, 20+ years of engineering excellence." },
      { property: "og:title", content: "Datagrid — AI-First Software Development for Global Businesses" },
      { property: "og:description", content: "Transform your business ideas into scalable digital products with Datagrid — an AI-first software development partner for enterprises." },
    ],
  }),
  component: Home,
});
