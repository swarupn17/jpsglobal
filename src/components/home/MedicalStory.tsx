"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const devices = [
  "Pulse Oximeters",
  "Digital Thermometers",
  "Blood Pressure Monitors",
  "Glucometers",
  "Compact Nebuliser",
  "Stethoscopes",
];

export default function MedicalStory() {
  return (
    <section id="medical" className="medical-story">

      <div className="medical-story-header">
        <motion.span
          className="medical-story-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          02 / MEDICAL DEVICES
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
          Essential devices.
          <br />
          Reliable sourcing.
        </motion.h2>
      </div>

      <div className="medical-story-main">

        <motion.div
          className="medical-story-copy"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="medical-story-description">
            JPS Global Trade works with a focused range of
            essential medical devices, supporting dependable
            sourcing for businesses and international trade.
          </p>

          <div className="medical-list">
            {devices.map((device, index) => (
              <div
                className="medical-list-item"
                key={device}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {device}
                </strong>

                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="medical-story-image"
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
          <img
            src="/images/company/hero-trade.png"
            alt="Medical devices for international trade"
          />

          <div className="medical-story-caption">
            <span>MEDICAL DEVICES</span>

            <span className="medical-story-arrow">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}