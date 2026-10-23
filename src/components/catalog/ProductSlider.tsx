"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "@/lib/product-catalog";
import { useRef } from "react";

export default function ProductSlider({ products }: { products: Product[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  function move(direction: "previous" | "next") {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: (direction === "next" ? 1 : -1) * slider.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <div className="product-slider">
      <div className="product-slider-controls" aria-label="Product slider controls">
        <button className="product-slider-control-previous" type="button" onClick={() => move("previous")} aria-label="Previous products">
          <ArrowLeft size={18} />
        </button>
        <button className="product-slider-control-next" type="button" onClick={() => move("next")} aria-label="Next products">
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="product-slider-track" ref={sliderRef} aria-label="Product range">
        {products.map((product) => (
          <article className="catalogue-card product-slider-card" key={product.slug}>
            <Link href={`/products/${product.category}/${product.slug}`} className="catalogue-card-image">
              <img src={product.image} alt={product.imageAlt} />
              <span>{product.number}</span>
              <b>↗</b>
            </Link>
            <p>{product.botanicalName ?? "Medical device category"}</p>
            <h3>{product.title}</h3>
            <Link href={`/products/${product.category}/${product.slug}`}>View detail <b>↗</b></Link>
          </article>
        ))}
      </div>
    </div>
  );
}
