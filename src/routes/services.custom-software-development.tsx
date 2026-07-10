import { createFileRoute } from "@tanstack/react-router";
import { CustomSoftwareDevelopment } from "@/components/datagrid/CustomSoftwareDevelopment";

export const Route = createFileRoute("/services/custom-software-development")({
  head: () => ({
    meta: [
      { title: "Custom Software Development — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid builds custom business software—enterprise apps, portals, ERP/CRM, analytics, e-commerce, and mobile/cloud platforms—designed to fit your workflows and scale with your growth.",
      },
      { property: "og:title", content: "Custom Software Development — Datagrid" },
      {
        property: "og:description",
        content:
          "Tailor-made digital platforms that automate operations, improve customer experiences, and scale from MVP to enterprise.",
      },
    ],
  }),
  component: CustomSoftwareDevelopment,
});
