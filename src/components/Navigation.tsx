"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img src="/assets/img/EonsAwayLogo.png" alt="Eons Away" />
        </Link>

        <button
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/creators"
            onClick={() => setMenuOpen(false)}
          >
            Creators
          </Link>
          <Link
            href="https://store.steampowered.com/app/2164820/Eons_Away/"
            target="_blank"
            className="nav-wishlist-btn"
          >
            Wishlist on Steam
          </Link>
        </div>
      </div>
    </nav>
  );
}
