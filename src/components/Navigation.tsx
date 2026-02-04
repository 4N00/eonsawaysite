"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { href: "#story", label: "Story" },
    { href: "#features", label: "Features" },
    { href: "#world", label: "World" },
    { href: "#gallery", label: "Gallery" },
    { href: "#community", label: "Community" },
  ];

  // If not on homepage, prepend "/" to anchor links
  const getHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="nav-logo">
            <img src="/assets/img/EonsAwayLogo.png" alt="Eons Away" />
          </Link>
        </motion.div>

        <button
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <motion.div
          className={`nav-links ${menuOpen ? "open" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={getHref(link.href)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
          </div>
          <div>
            <Link href="/presskit" onClick={() => setMenuOpen(false)}>
              Press
            </Link>
          </div>
          <div>
            <Link href="/creators" onClick={() => setMenuOpen(false)}>
              Creators
            </Link>
          </div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              href="https://store.steampowered.com/app/2164820/Eons_Away/"
              target="_blank"
              className="nav-wishlist-btn"
            >
              Wishlist on Steam
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-nav-overlay"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={getHref(link.href)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Link href="/faq" onClick={() => setMenuOpen(false)}>
                  FAQ
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/presskit" onClick={() => setMenuOpen(false)}>
                  Press
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/creators" onClick={() => setMenuOpen(false)}>
                  Creators
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  href="https://store.steampowered.com/app/2164820/Eons_Away/"
                  target="_blank"
                  className="nav-wishlist-btn"
                >
                  Wishlist on Steam
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
