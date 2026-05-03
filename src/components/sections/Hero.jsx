"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiGithub, FiLinkedin, FiDownload, FiArrowRight
} from "react-icons/fi";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const ROLES = [
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "MongoDB Expert",
  "Full Stack Engineer",
];

const SOCIALS = [
  { icon: FiGithub,    href: "https://github.com/juhairulislam",             label: "GitHub"   },
  { icon: FiLinkedin,  href: "https://www.linkedin.com/in/juhairul-islam",    label: "LinkedIn" },
  { icon: FaXTwitter,  href: "https://x.com/@_juhairul",                      label: "Twitter"  },
  { icon: FaFacebookF, href: "https://web.facebook.com/juhairul.islam.2024", label: "Facebook" },
];

const STATS = [
  { value: "1+",  label: "Years Exp."  },
  { value: "10+", label: "Projects"    },
  { value: "5+",  label: "Clients"     },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

function useTyping(words) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx]  = useState(0);
  const [charIdx, setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1600);
        } else {
          setCharIdx((c) => c + 1);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return display;
}

export default function Hero() {
  const typedText = useTyping(ROLES);
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or return a simple loader/skeleton
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0a0a0f] px-6 md:px-12 lg:px-20 pt-24 pb-16"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-14 md:gap-10 lg:gap-20">

        <div className="flex-1 min-w-0">
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 mb-5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_3px_rgba(99,102,241,0.7)] animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1
            variants={fadeUp} custom={1}
            initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3 tracking-tight font-[family-name:var(--font-syne)]"
          >
            Hi, I'm{" "}
            <span className="text-indigo-500">Juhairul</span>
            <br />Islam
          </motion.h1>

          <motion.p
            variants={fadeUp} custom={2}
            initial="hidden" animate="visible"
            className="text-base sm:text-lg text-gray-500 dark:text-zinc-400 font-medium mb-5 h-7 flex items-center gap-1"
          >
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-indigo-500 animate-[blink_1s_step-end_infinite]" />
          </motion.p>

          <motion.p
            variants={fadeUp} custom={3}
            initial="hidden" animate="visible"
            className="text-sm sm:text-base text-gray-500 dark:text-zinc-500 leading-relaxed mb-8 max-w-xl"
          >
            A developer crafting modern web experiences with performance,
            precision, and clean design. Focused on building scalable
            applications that solve real problems with simplicity and speed.
          </motion.p>

          <motion.div
            variants={fadeUp} custom={4}
            initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 mb-9"
          >
            <Link
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <FiDownload className="text-base" />
              Download Resume
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-zinc-300 border border-gray-300 dark:border-white/15 hover:border-indigo-500 hover:text-indigo-500 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Hire Me
              <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={5}
            initial="hidden" animate="visible"
            className="flex items-center gap-3"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
              >
                <Icon className="text-base" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex-shrink-0 flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 to-violet-600 blur-2xl opacity-30 scale-110" />

            <div className="relative p-[3px] rounded-full bg-linear-to-br from-indigo-500 to-violet-600">
              <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gray-100 dark:bg-[#0f0f1a] flex items-center justify-center">
                <Image
                  src="/myImage.png"
                  alt="Juhairul Islam"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-4 bg-white dark:bg-[#12121a] border border-gray-200 dark:border-white/10 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
            >
              <span className="text-xl">💻</span>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-zinc-500 leading-none">Experience</p>
                <p className="text-xs font-bold text-gray-900 dark:text-white">1+ Years</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 -right-4 bg-white dark:bg-[#12121a] border border-gray-200 dark:border-white/10 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
            >
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-zinc-500 leading-none">Projects</p>
                <p className="text-xs font-bold text-gray-900 dark:text-white">10+ Done</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-5 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md rounded-2xl px-6 py-4"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                <div className="text-center">
                  <p className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-zinc-500 mt-0.5">{s.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}