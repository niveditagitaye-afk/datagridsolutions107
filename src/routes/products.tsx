import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/datagrid/Header";
import { Footer } from "@/components/datagrid/Footer";
import { Products } from "@/components/datagrid/Products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Datagrid" },
      {
        name: "description",
        content:
          "Datagrid Products: Unify, Glammify, OptifyERP and Sellingo — AI-native platforms built from real business experience for associations, retail, jewellery and enterprise automation.",
      },
      { property: "og:title", content: "Products — Datagrid" },
      {
        property: "og:description",
        content:
          "Four AI-native products. One connected Datagrid ecosystem. Purpose-built platforms for associations, jewellery, retail and enterprise automation.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
