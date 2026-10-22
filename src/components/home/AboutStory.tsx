"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="about" className="about-story">

      <div className="about-story-header">

        <div className="about-story-title">
          <motion.span
            className="about-story-label"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT JPS
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
            Built in India.
            <br />
            Looking outward.
          </motion.h2>
        </div>

        <motion.div
          className="about-story-statement"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p>
            Established in 2024, JPS Global Trade is a
            merchant export company in Nanded, India,
            connecting Indian products and businesses
            across global markets.
          </p>

          <a
            href="#contact"
            className="about-story-link"
          >
            Start a conversation
            <span>
              <ArrowUpRight size={18} />
            </span>
          </a>
        </motion.div>
      </div>


      <motion.div
        className="about-story-details"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.9,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

          <div className="about-detail">
            <span>01</span>

            <div>
              <strong>Registered for Trade</strong>

              <p>
                Registered under MSME and the Maharashtra
                Chamber of Commerce.
              </p>
            </div>
          </div>


          <div className="about-detail">
            <span>02</span>

            <div>
              <strong>Import–Export Focus</strong>

              <p>
                A practical understanding of sourcing,
                documentation, and international trade.
              </p>
            </div>
          </div>


          <div className="about-detail">
            <span>03</span>

            <div>
              <strong>Global Partnerships</strong>

              <p>
                A relationship-led approach to building
                long-term business opportunities.
              </p>
            </div>
          </div>

      </motion.div>

    </section>
  );
}
