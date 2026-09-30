
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <Image
            src="/images/company/logo.png"
            alt="JPS Global Trade"
            width={82}
            height={52}
            priority
          />

          <span className={`navbar-brand ${merriweather.className}`}>
            JPS Global Trade
          </span>
        </Link>

        <div className="navbar-links">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="navbar-enquire">
          <span>Enquire Now</span>
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="navbar-mobile-enquire"
              onClick={() => setOpen(false)}
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

