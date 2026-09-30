"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding product requirements, specifications, quantities, and business needs.",
  },
  {
    number: "02",
    title: "Source",
    text: "We identify suitable products and sourcing opportunities aligned with the requirement.",
  },
  {
    number: "03",
    title: "Prepare",
    text: "Product, documentation, coordination, and trade requirements are brought together for the transaction.",
  },
  {
    number: "04",
    title: "Connect",
    text: "We work toward dependable business relationships and smooth cross-border trade.",
  },
];

export default function TradeProcess() {
  return (
    <section className="trade-process">

      <div className="trade-process-top">

        <motion.span
          className="trade-process-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          HOW WE WORK
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
          Trade is more than
          <br />
          moving products.
        </motion.h2>

      </div>


      <div className="trade-process-intro">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          It is about understanding requirements,
          finding the right sourcing opportunity,
          and building reliable connections across
          the trade process.
        </motion.p>

        <motion.div
          className="trade-process-arrow"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <ArrowDown size={28} />
        </motion.div>

      </div>


      <div className="trade-process-list">

        {steps.map((step, index) => (
          <motion.div
            className="trade-process-step"
            key={step.number}
            initial={{
              opacity: 0,
              y: 50,
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
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <span className="trade-process-number">
              {step.number}
            </span>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.text}
            </p>

            <span className="trade-process-line" />

          </motion.div>
        ))}

      </div>

    </section>
  );
}