import { notFound } from "next/navigation";
import CatalogProductPage from "@/components/catalog/CatalogProductPage";
import { products, getProduct } from "@/lib/product-catalog";

export function generateStaticParams() {
  return products.map((product) => ({ category: product.category, slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();
  return <CatalogProductPage product={product} />;
}
