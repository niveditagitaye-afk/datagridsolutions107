import { createFileRoute } from "@tanstack/react-router";
import { ERPWorkflowAutomation } from "@/components/datagrid/ERPWorkflowAutomation";

export const Route = createFileRoute("/services/erp-workflow-automation")({
  head: () => ({
    meta: [
      { title: "ERP & Workflow Automation Services — Datagrid" },
      {
        name: "description",
        content:
          "Scalable ERP solutions and workflow automation for finance, inventory, HR, CRM, manufacturing and procurement. Datagrid helps enterprises simplify operations and accelerate growth.",
      },
      { property: "og:title", content: "ERP & Workflow Automation Services — Datagrid" },
      {
        property: "og:description",
        content:
          "Transform complex operations into intelligent digital workflows with Datagrid's ERP implementation, business process automation and Optify ERP platform.",
      },
    ],
  }),
  component: ERPWorkflowAutomation,
});
