"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-editorial">
      <div className="hero-editorial-inner">

        <motion.div
          className="hero-editorial-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-kicker">
            <span>JPS GLOBAL TRADE</span>
            <i />
            <span>INDIA</span>
          </div>

          <h1>
            Connecting
            <span>India with</span>
            the world.
          </h1>

          <p>
            Building international business relationships through quality
            products, reliable sourcing and export-import expertise.
          </p>

          <div className="hero-actions">
            <Link href="#products" className="hero-primary">
              Explore Our Business
              <ArrowUpRight size={18} />
            </Link>

            <Link href="#about" className="hero-secondary">
              Discover JPS
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="hero-meta">
            <div>
              <span>FOCUS</span>
              <strong>International Trade</strong>
            </div>

            <div>
              <span>BASED IN</span>
              <strong>India</strong>
            </div>

            <div>
              <span>SECTORS</span>
              <strong>Spices · Medical Devices</strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-editorial-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-image-frame">
            <img
              src="/images/company/hero-trade.png"
              alt="International trade through Indian spices, medical devices and global shipping"
            />

            <div className="hero-image-label">
              <span>01</span>
              <span>GLOBAL TRADE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}