"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const navLinks = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Education", href: "#education" },
  { label: "Projects",  href: "#projects"  },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [darkMode,   setDarkMode]   = useState(true);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { threshold: 0.45 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* ── dark / light class on <html> ── */
  /* FIXED LOGIC FOR TAILWIND V4 */
/* ── dark / light class on <html> ── */
useEffect(() => {
  const root = window.document.documentElement;
  if (darkMode) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [darkMode]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20
          transition-all duration-500
          ${scrolled
            ? "py-3 backdrop-blur-xl bg-white/10 dark:bg-black/30 border-b border-white/10 dark:border-white/5 shadow-lg shadow-black/10"
            : "py-5 bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="relative group flex items-center gap-2 select-none"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_3px_rgba(99,102,241,0.7)] group-hover:shadow-[0_0_14px_5px_rgba(99,102,241,0.9)] transition-shadow duration-300" />
            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
              Juhairul
              <span className="text-indigo-500"> Islam</span>
            </span>
          </motion.a>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1,  y: 0  }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-full
                      transition-colors duration-300 outline-none
                      ${isActive
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="pill"
                        className="absolute inset-0 rounded-full bg-indigo-600 shadow-[0_0_12px_3px_rgba(99,102,241,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* ── Right side: theme toggle + hamburger ── */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 backdrop-blur-md"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "dark" : "light"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block text-lg"
                >
                  {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xl transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden bg-white/80 dark:bg-[#0d0d14]/90 backdrop-blur-2xl border-l border-gray-200 dark:border-white/10 flex flex-col pt-24 px-8 gap-4 shadow-2xl"
            >
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white text-xl"
                whileTap={{ scale: 0.9 }}
              >
                <HiX />
              </motion.button>

              {navLinks.map((link, i) => {
                const isActive = activeLink === link.href;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0,   opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-base font-semibold px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <div className="mt-auto mb-10 text-center text-xs text-gray-400 dark:text-gray-600">© 2025 Juhairul Islam</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}