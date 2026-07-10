import { createFileRoute } from "@tanstack/react-router";
import { AIMLDevelopment } from "@/components/datagrid/AIMLDevelopment";

export const Route = createFileRoute("/services/ai-ml-development")({
  head: () => ({
    meta: [
      { title: "AI & ML Development — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid builds enterprise AI & ML solutions — Generative AI, NLP, Computer Vision, AI Agents, Automation, and Predictive Analytics — designed to automate operations and improve decisions.",
      },
      { property: "og:title", content: "AI & ML Development — Datagrid" },
      {
        property: "og:description",
        content:
          "Intelligent systems that deliver real business value — from LLM copilots to computer vision, agents, and predictive analytics.",
      },
    ],
  }),
  component: AIMLDevelopment,
});
