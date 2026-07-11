import { createFileRoute } from "@tanstack/react-router";
import { GCCDedicatedTeams } from "@/components/datagrid/GCCDedicatedTeams";

export const Route = createFileRoute(
  "/services/global-capability-centers-dedicated-teams",
)({
  head: () => ({
    meta: [
      { title: "Global Capability Centers (GCC) & Dedicated Teams — Datagrid" },
      {
        name: "description",
        content:
          "Build your global engineering center in India with Datagrid. Dedicated developers, managed product teams, and fully operated Global Capability Centers for enterprises worldwide.",
      },
      {
        property: "og:title",
        content: "Global Capability Centers (GCC) & Dedicated Teams — Datagrid",
      },
      {
        property: "og:description",
        content:
          "Scale faster with dedicated engineering teams and managed GCCs — talent, leadership, and operational excellence, delivered from India.",
      },
    ],
  }),
  component: GCCDedicatedTeams,
});
