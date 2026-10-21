import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { CategorySlug, categories, getProductsForCategory } from "@/lib/product-catalog";

export default function CatalogCategoryPage({ category }: { category: CategorySlug }) {
  const details = categories[category];
  const products = getProductsForCategory(category);

  return (
    <PageFrame>
      <section className={`jps-page-hero catalog-hero catalog-hero-${category}`}>
        <div>
          <span>PRODUCT CATEGORY / {details.number}</span>
          <h1>{details.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1>
          <p>{details.description}</p>
          <a href="#catalogue" className="jps-page-button">Explore the range <b>↓</b></a>
        </div>
        <img src={details.image} alt={details.imageAlt} />
      </section>

      <section id="catalogue" className="jps-page-section catalogue-section">
        <div className="jps-page-heading"><span>EXPLORE THE RANGE</span><h2>Find the right<br />product detail.</h2></div>
        <div className="catalogue-grid">
          {products.map((product) => (
            <article className="catalogue-card" key={product.slug}>
              <Link href={`/products/${product.category}/${product.slug}`} className="catalogue-card-image">
                <img src={product.image} alt={product.imageAlt} />
                <span>{product.number}</span><b>↗</b>
              </Link>
              <p>{product.botanicalName ?? "Medical device category"}</p>
              <h3>{product.title}</h3>
              <div className="catalogue-card-line" />
              <Link href={`/products/${product.category}/${product.slug}`}>View product detail <b>↗</b></Link>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
