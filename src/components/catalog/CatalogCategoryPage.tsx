import PageFrame from "@/components/PageFrame";
import { CategorySlug, categories, getProductsForCategory } from "@/lib/product-catalog";
import ProductSlider from "@/components/catalog/ProductSlider";

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
        <div className="jps-page-heading"><span>EXPLORE THE RANGE</span><h2>Find the right product detail.</h2></div>
        <ProductSlider products={products} />
      </section>
    </PageFrame>
  );
}
