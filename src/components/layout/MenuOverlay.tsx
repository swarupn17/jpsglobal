"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

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

export default function MenuOverlay({
  open,
  onClose,
}: MenuOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="jps-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >

          <motion.div
            className="jps-menu-panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="jps-menu-header">

              <div className="jps-menu-brand">
                <img
                  src="/images/company/logo.png"
                  alt="JPS Global Trade"
                />

                <span>
                  JPS GLOBAL TRADE
                </span>
              </div>

              <button
                className="jps-menu-close"
                onClick={onClose}
                aria-label="Close menu"
              >
                <span>Close</span>

                <span className="jps-menu-close-icon">
                  <X size={20} />
                </span>
              </button>

            </div>


            <div className="jps-menu-content">

              <div className="jps-menu-eyebrow">
                EXPLORE JPS
              </div>

              <nav className="jps-menu-links">

                {links.map((link, index) => (
                  <motion.a
                    key={link.number}
                    href={link.href}
                    className="jps-menu-link"
                    onClick={onClose}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + index * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >

                    <span className="jps-menu-number">
                      {link.number}
                    </span>

                    <span className="jps-menu-link-name">
                      {link.label}
                    </span>

                    <span className="jps-menu-link-arrow">
                      <ArrowUpRight size={24} />
                    </span>

                  </motion.a>
                ))}

              </nav>

            </div>


            <div className="jps-menu-footer">

              <span>
                JPS GLOBAL TRADE
              </span>

              <span>
                Connecting India with the world.
              </span>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}