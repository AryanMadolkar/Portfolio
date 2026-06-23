"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FiSun, FiMoon } from "react-icons/fi";
import { navLinks, navSocials } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-[var(--border-soft)] bg-[var(--bg)]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" aria-label="Home" className="flex items-center gap-2">
          <FlameLogo />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-2 hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 sm:flex">
            {navSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
              >
                <SocialIcon label={social.label} size={16} />
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}

function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
    >
      {light ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}

function FlameLogo() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/20">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c1 3-1.5 4.5-1.5 7 0 1.4 1 2.5 1.5 3 .5-.8 1-1.7 1-3 1 1 2 2.5 2 4.5a5 5 0 11-9.6 1.9C5 13 8 11 8 7c2 .5 3 2 3 3 .6-2.4-.5-5.5 1-8z" />
      </svg>
    </span>
  );
}
