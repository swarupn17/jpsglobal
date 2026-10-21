"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const spices = [
  { name: "Turmeric", slug: "turmeric" },
  { name: "Red Chilli", slug: "red-chilli" },
  { name: "Cumin", slug: "cumin" },
  { name: "Ginger", slug: "ginger" },
];

export default function SpicesStory() {
  return (
   <section id="spices" className="spices-story">

      <div className="spices-story-header">
        <motion.span
          className="spices-story-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          01 / SPICES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          From Indian fields
          <br />
          to global tables.
        </motion.h2>
      </div>


      <div className="spices-story-main">

        <motion.div
          className="spices-story-image"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link href="/products/spices"><img src="/images/products/spices-collection.png" alt="Turmeric, red chilli, cumin and ginger" /></Link>

          <div className="spices-story-image-caption">
            <span>INDIAN SPICES</span>

            <span className="spices-story-round-arrow">
              <ArrowDownRight size={20} />
            </span>
          </div>
        </motion.div>


        <motion.div
          className="spices-story-copy"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <p className="spices-story-description">
            JPS Global Trade works with a focused selection of
            Indian agricultural products for buyers seeking
            dependable sourcing and global opportunities.
          </p>

          <div className="spices-list">
            {spices.map((spice, index) => (
              <Link
                className="spices-list-item"
                href={`/products/spices/${spice.slug}`}
                key={spice.slug}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {spice.name}
                </strong>
              </Link>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  );
}
