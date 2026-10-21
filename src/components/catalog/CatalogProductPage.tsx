import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { Product, categories } from "@/lib/product-catalog";

export default function CatalogProductPage({ product }: { product: Product }) {
  const category = categories[product.category];
  return (
    <PageFrame>
      <section className={`jps-page-hero catalog-hero product-detail-hero ${product.isMedical ? "medical-detail" : ""}`}>
        <div>
          <Link className="breadcrumb" href={`/products/${product.category}`}>← {category.label}</Link>
          <span>PRODUCT / {product.number}</span>
          <h1>{product.title}{product.botanicalName && <><br /><em>{product.botanicalName}</em></>}</h1>
          <p>{product.shortDescription}</p>
          <Link href="/contact" className="jps-page-button">Send an enquiry <b>↗</b></Link>
        </div>
        <img src={product.image} alt={product.imageAlt} />
      </section>

      <section className="jps-page-section product-detail-body">
        <div className="jps-page-heading"><span>PRODUCT OVERVIEW</span><h2>Clear details<br />for buyers.</h2></div>
        <div className="product-detail-copy">
          <p>{product.overview}</p>
          {product.isMedical && <p className="product-safety-note">This is a sourcing page, not clinical or regulatory guidance. Product availability, certification status and regulatory suitability are confirmed for each buyer enquiry.</p>}
          <div className="product-uses">
            <span>COMMON USES</span>
            <ul>{product.uses.map((use) => <li key={use}>{use}</li>)}</ul>
          </div>
          <div className="product-facts">
            <div><span>{product.isMedical ? "PRODUCT CATEGORY" : "AVAILABLE FORMS"}</span><strong>{product.forms.map((form) => <span className="fact-line" key={form}>{form}</span>)}</strong></div>
            <div><span>ENQUIRY TOPICS</span><strong>{product.enquiries.map((topic) => <span className="fact-line" key={topic}>{topic}</span>)}</strong></div>
          </div>
        </div>
      </section>

      <section className="catalogue-next">
        <div><span>HAVE A SPECIFIC REQUIREMENT?</span><h2>Let&apos;s start with<br />the details.</h2></div>
        <Link href="/contact" className="jps-page-button">Discuss your requirement <b>↗</b></Link>
      </section>
    </PageFrame>
  );
}
