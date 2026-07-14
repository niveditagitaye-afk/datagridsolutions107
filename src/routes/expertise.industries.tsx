import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { ExpertiseIndustries } from "@/components/datagrid/ExpertiseIndustries";

export const Route = createFileRoute("/expertise/industries")({
  head: () => ({
    meta: [
      { title: "Industries Expertise — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid's industry expertise across manufacturing, healthcare, education, agriculture, retail, associations, hospitality, jewellery, political analytics, and startups. Technology solutions backed by deep domain understanding.",
      },
      { property: "og:title", content: "Industries Expertise — Datagrid" },
      {
        property: "og:description",
        content:
          "Deep industry expertise. Technology solutions that deliver real business impact across 12+ sectors.",
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <Header />
      <ExpertiseIndustries />
      <Footer />
    </>
  );
}
