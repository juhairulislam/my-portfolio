"use client";

import React from "react";

// ── Nav Links ──────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ── Social Data ────────────────────────────────────────────────────────────
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/juhairulislam",
    color: "#475569",
    darkColor: "#e2e8f0",
    glow: "rgba(226,232,240,0.15)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juhairul-islam/",
    color: "#0077b5",
    darkColor: "#60a5fa",
    glow: "rgba(96,165,250,0.15)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/_juhairul",
    color: "#0f1419",
    darkColor: "#f1f5f9",
    glow: "rgba(241,245,249,0.12)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/juhairul.islam.2024/",
    color: "#1877f2",
    darkColor: "#818cf8",
    glow: "rgba(129,140,248,0.15)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-black/[0.05] dark:border-white/[0.06] bg-slate-50/50 dark:bg-transparent">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 dark:opacity-100">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-40 rounded-full bg-indigo-500/10 dark:bg-indigo-900/20 blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-32 rounded-full bg-violet-500/10 dark:bg-violet-900/15 blur-[60px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 rounded-full bg-purple-500/10 dark:bg-purple-900/15 blur-[60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14 text-center md:text-left">
          
          {/* Brand col */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-300 dark:via-violet-300 dark:to-purple-300 bg-clip-text text-transparent tracking-tight">
                Juhairul Islam
              </span>
              <div className="mt-1 flex items-center justify-center md:justify-start gap-2">
                <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-indigo-500/40 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/30">
                  Frontend Developer
                </span>
              </div>
            </div>
            <p className="text-black/50 dark:text-white/35 text-sm leading-relaxed max-w-xs">
              Crafting immersive digital experiences with clean code and thoughtful design. Open to exciting opportunities.
            </p>

            {/* Availability badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-600 dark:text-emerald-400/80 text-xs font-medium tracking-wide">
                Available for work
              </span>
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/30 font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-black/50 dark:text-white/40 hover:text-indigo-600 dark:hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    <span className="hidden md:block w-4 h-px bg-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-violet-500 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/30 font-semibold mb-5">
              Get In Touch
            </h4>
            <a
              href="mailto:juhairulislam2018@gmail.com"
              className="group inline-flex items-center gap-2 text-black/50 dark:text-white/40 hover:text-indigo-600 dark:hover:text-indigo-300 text-sm transition-colors duration-200 mb-6"
            >
              <svg className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              juhairulislam2018@gmail.com
            </a>

            {/* Social icons */}
            <div className="w-full flex flex-col items-center md:items-start">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/30 font-semibold mb-4">
                Socials
              </h4>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group relative w-10 h-10 rounded-xl border border-black/[0.08] dark:border-white/[0.07] bg-white/50 dark:bg-white/[0.02] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-white/[0.15] text-black/40 dark:text-white/40"
                    onMouseEnter={(e) => {
                      const isDark = document.documentElement.classList.contains("dark");
                      e.currentTarget.style.color = isDark ? s.darkColor : s.color;
                      e.currentTarget.style.boxShadow = `0 0 16px ${s.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="relative flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/[0.05] dark:via-white/[0.08] to-transparent" />
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-indigo-500/30 dark:bg-indigo-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500/40 dark:bg-violet-500/60" />
            <div className="w-1 h-1 rounded-full bg-purple-500/30 dark:bg-purple-500/50" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/[0.05] dark:via-white/[0.08] to-transparent" />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-black/30 dark:text-white/20 text-xs tracking-wide">
            © {year}{" "}
            <span className="font-medium text-indigo-600/70 dark:text-indigo-400/60">
              Juhairul Islam
            </span>
            . All rights reserved.
          </p>
          <p className="text-black/25 dark:text-white/15 text-xs tracking-wider">
            Designed &amp; Built with{" "}
            <span className="text-rose-500/60 dark:text-rose-400/50">♥</span>{" "}
            using Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}