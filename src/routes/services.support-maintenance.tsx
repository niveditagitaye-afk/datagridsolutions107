import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { SupportMaintenance } from "@/components/datagrid/SupportMaintenance";

export const Route = createFileRoute("/services/support-maintenance")({
  head: () => ({
    meta: [
      { title: "Support & Maintenance Services — Datagrid" },
      {
        name: "description",
        content:
          "Reliable application support, proactive maintenance, legacy modernization, and rescue services from Datagrid — flexible retainers, dedicated teams, SLA-based & 24×7 support.",
      },
      { property: "og:title", content: "Support & Maintenance Services — Datagrid" },
      {
        property: "og:description",
        content:
          "Keep applications secure, scalable, and evolving with Datagrid's support, maintenance, and modernization services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportMaintenancePage,
});

function SupportMaintenancePage() {
  return (
    <>
      <Header />
      <SupportMaintenance />
      <Footer />
    </>
  );
}
