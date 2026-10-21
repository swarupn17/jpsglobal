import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { categories } from "@/lib/product-catalog";

const productCategories = [
  { slug: "spices", type: "Whole spices & powders" },
  { slug: "agricultural-products", type: "Fresh & plant-based products" },
  { slug: "medical-devices", type: "Healthcare supply categories" },
] as const;

export default function ProductsPage() {
  return <PageFrame>
    <section className="jps-page-hero catalogue-root-hero">
      <div><span>PRODUCTS</span><h1>Explore our<br />product range.</h1><p>Choose a category, then open a dedicated page for the product information and enquiry details you need.</p></div>
      <video autoPlay muted loop playsInline><source src="/raw/IMG_5386.MOV.mp4" type="video/mp4" /></video>
    </section>
    <section className="jps-page-section catalogue-section">
      <div className="jps-page-heading"><span>PRODUCT CATEGORIES</span><h2>Made for<br />clear selection.</h2></div>
      <div className="category-grid">
        {productCategories.map(({ slug, type }) => {
          const category = categories[slug];
          return <article key={slug} className="category-card"><Link href={`/products/${slug}`} className="category-card-image"><img src={category.image} alt={category.imageAlt} /><span>{category.number}</span><b>↗</b></Link><p>{type}</p><h3>{category.label}</h3><Link href={`/products/${slug}`}>Explore category <b>↗</b></Link></article>;
        })}
      </div>
    </section>
  </PageFrame>;
}
