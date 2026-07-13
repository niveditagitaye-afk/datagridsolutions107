import { createFileRoute } from "@tanstack/react-router";
import { FractionalCTO } from "@/components/datagrid/FractionalCTO";

export const Route = createFileRoute("/services/fractional-cto-technology-advisory")({
  head: () => ({
    meta: [
      { title: "Fractional CTO & Technology Advisory — Datagrid" },
      {
        name: "description",
        content:
          "Strategic technology leadership without the cost of a full-time CTO. Datagrid's Fractional CTO services help startups, SMEs and enterprises make smarter product, architecture and AI decisions.",
      },
      { property: "og:title", content: "Fractional CTO & Technology Advisory — Datagrid" },
      {
        property: "og:description",
        content:
          "Technology vision. AI strategy. Execution excellence. Executive-level advisory for founders, SMEs and enterprises building AI-first products and businesses.",
      },
    ],
  }),
  component: FractionalCTO,
});
