"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="about" className="about-story">

      <div className="about-story-header">

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


      <div className="about-story-grid">

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
            JPS Global Trade is focused on domestic
            trade and import-export operations, connecting
            products, sourcing opportunities, and
            businesses across borders.
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
              <strong>International Business</strong>

              <p>
                Business knowledge shaped around
                export, import, sourcing, and
                cross-border trade.
              </p>
            </div>
          </div>


          <div className="about-detail">
            <span>02</span>

            <div>
              <strong>Trade Expertise</strong>

              <p>
                A practical understanding of domestic
                trade and the processes involved in
                international business.
              </p>
            </div>
          </div>


          <div className="about-detail">
            <span>03</span>

            <div>
              <strong>Business Relationships</strong>

              <p>
                A focus on building collaborative
                relationships around long-term
                business opportunities.
              </p>
            </div>
          </div>

        </motion.div>

      </div>


      <div className="about-story-bottom">

        <motion.div
          className="about-story-location"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="about-location-mark">
            IN
          </div>

          <div>
            <span>BASED IN</span>

            <strong>
              Maharashtra, India
            </strong>
          </div>
        </motion.div>


        <motion.div
          className="about-story-education"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>BACKGROUND</span>

          <p>
            BBA in International Business and
            postgraduate education in Export and
            Import Management.
          </p>
        </motion.div>

      </div>

    </section>
  );
}