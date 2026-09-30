"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    number: "01",
    title: "Spices",
    description:
      "Indian spices sourced for businesses that value consistency, quality, and dependable trade.",
    image: "/images/company/hero-trade.png",
    position: "center left",
  },
  {
    number: "02",
    title: "Medical Devices",
    description:
      "Essential medical devices selected for reliable sourcing and international business requirements.",
    image: "/images/company/hero-trade.png",
    position: "center right",
  },
];

export default function TradeFocus() {
  return (
    <section className="trade-focus">

      <div className="trade-focus-intro">
        <motion.div
          className="trade-focus-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          WHAT WE TRADE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          What we bring
          <br />
          to the world.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          From the richness of Indian spices to essential
          healthcare products, JPS Global Trade connects
          dependable sourcing with international opportunity.
        </motion.p>
      </div>


      <div className="trade-focus-products">

        {products.map((product, index) => (
          <motion.article
            key={product.number}
            className="trade-product"
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="trade-product-image">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  objectPosition: product.position,
                }}
              />

              <div className="trade-product-overlay" />

              <div className="trade-product-top">
                <span>{product.number}</span>

                <span className="trade-product-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>

              <div className="trade-product-bottom">
                <h3>{product.title}</h3>

                <p>{product.description}</p>
              </div>
            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}