"use client";

import { Merriweather } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import MenuOverlay from "@/components/layout/MenuOverlay";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.16]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -55]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["48px", "38px", "30px"]
  );

  return (
    <section ref={sectionRef} className="jps-intro">
      <div className="jps-intro-sticky">

        <div className="jps-intro-header">
          <div className="jps-brand">
            <img
              src="/images/company/logo.png"
              alt="JPS Global Trade"
            />

            <span className={merriweather.className}>
              JPS Global Trade
            </span>
          </div>

          <button
            className="jps-menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </div>

        <motion.div
          className="jps-intro-content"
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
        >
          <h1>
            Connecting India
            <br />
            with the world.
          </h1>

          <p>
            Quality products. Reliable sourcing.
            <br />
            International business.
          </p>
        </motion.div>

        <motion.div
          className="jps-intro-visual"
          style={{
            scale: imageScale,
            borderRadius: imageRadius,
            y: imageY,
          }}
        >
          <img
            src="/images/company/hero-trade.png"
            alt="JPS Global Trade connecting Indian products with international markets"
          />

          <div className="jps-intro-pill">
            <span>Explore our products</span>

            <span className="jps-arrow">
              <ArrowRight size={19} />
            </span>
          </div>
        </motion.div>

        <div className="jps-intro-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="jps-scroll-line" />
        </div>

        <MenuOverlay
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </section>
  );
}