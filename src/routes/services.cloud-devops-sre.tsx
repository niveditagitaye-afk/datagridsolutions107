import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { CloudDevOpsSRE } from "@/components/datagrid/CloudDevOpsSRE";

export const Route = createFileRoute("/services/cloud-devops-sre")({
  head: () => ({
    meta: [
      { title: "Cloud, DevOps & SRE Services — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid builds secure, scalable & always-on cloud infrastructure across AWS, Azure & GCP with DevOps automation, Kubernetes, CI/CD and 24×7 SRE.",
      },
      { property: "og:title", content: "Cloud, DevOps & SRE Services — Datagrid" },
      {
        property: "og:description",
        content:
          "Cloud-native platforms, DevOps automation, SRE, migration and managed cloud operations by Datagrid.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CloudDevOpsSREPage,
});

function CloudDevOpsSREPage() {
  return (
    <>
      <Header />
      <CloudDevOpsSRE />
      <Footer />
    </>
  );
}
