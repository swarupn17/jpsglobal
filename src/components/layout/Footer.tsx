"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    number: "01",
    label: "Home",
    href: "#top",
  },
  {
    number: "02",
    label: "Spices",
    href: "#spices",
  },
  {
    number: "03",
    label: "Medical Devices",
    href: "#medical",
  },
  {
    number: "04",
    label: "About JPS",
    href: "#about",
  },
  {
    number: "05",
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="jps-footer">

      <div className="jps-footer-navigation">

        <div className="jps-footer-heading">
          <span>EXPLORE JPS</span>

          <h2>
            More to
            <br />
            discover.
          </h2>
        </div>


        <nav className="jps-footer-links">

          {links.map((link, index) => (
            <motion.a
              key={link.number}
              href={link.href}
              className="jps-footer-link"
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="jps-footer-number">
                {link.number}
              </span>

              <span className="jps-footer-link-name">
                {link.label}
              </span>

              <span className="jps-footer-link-arrow">
                <ArrowUpRight size={22} />
              </span>
            </motion.a>
          ))}

        </nav>

      </div>
<div className="jps-footer-brand">

  <motion.div
    className="jps-footer-logo"
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
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <span className="jps-footer-logo-main">
      JPS
    </span>

    <span className="jps-footer-logo-sub">
      GLOBAL TRADE
    </span>

    <span className="jps-footer-logo-line" />
  </motion.div>

  <div className="jps-footer-meta">
          <div>
            <span>JPS GLOBAL TRADE</span>
            <p>Connecting India with the world.</p>
          </div>

          <div>
            <span>CONTACT</span>
            <p>jpsglobaltrade@gmail.com</p>
          </div>

          <div>
            <span>LOCATION</span>
            <p>Maharashtra, India</p>
          </div>

        </div>

      </div>


      <div className="jps-footer-bottom">

        <span>
          © {new Date().getFullYear()} JPS Global Trade
        </span>

        <span>
          Domestic Trade · Import · Export
        </span>

      </div>

    </footer>
  );
}