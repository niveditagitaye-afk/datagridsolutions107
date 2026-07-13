import { createFileRoute } from "@tanstack/react-router";
import { DecisionIntelligence } from "@/components/datagrid/DecisionIntelligence";

export const Route = createFileRoute("/services/decision-intelligence-business-insights")({
  head: () => ({
    meta: [
      { title: "Decision Intelligence & Business Insights — Datagrid" },
      {
        name: "description",
        content:
          "Turn business data into smarter decisions. Datagrid builds executive dashboards, predictive analytics, sentiment analysis and AI-powered recommendations that drive measurable outcomes.",
      },
      { property: "og:title", content: "Decision Intelligence & Business Insights — Datagrid" },
      {
        property: "og:description",
        content:
          "See beyond reports. From data engineering to predictive intelligence and executive dashboards — Datagrid helps leaders make decisions with confidence.",
      },
    ],
  }),
  component: DecisionIntelligence,
});
