"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiLayers, FiActivity, FiTarget, FiArrowUpRight } from "react-icons/fi";
import { GiAtom, GiCricketBat } from "react-icons/gi";
import { TbBrain } from "react-icons/tb";

/* ─── Data ─── */
const SKILLS = [
  { label: "Next.js / React.js", pct: 90, color: "from-indigo-500 to-violet-500" },
  { label: "Node.js / Express.js", pct: 80, color: "from-violet-500 to-purple-500" },
  { label: "MongoDB", pct: 85, color: "from-indigo-400 to-violet-400" },
  { label: "Tailwind CSS", pct: 95, color: "from-violet-400 to-purple-400" },
];

const PASSIONS = [
  {
    icon: FiCode,
    title: "Structure & Creativity",
    desc: "I balance maintainable, clean code with intuitive, user-centered design for a professional feel.",
  },
  {
    icon: FiLayers,
    title: "Scalable Systems",
    desc: "From eCommerce platforms to API-driven tools, I build systems that grow and perform efficiently.",
  },
  {
    icon: TbBrain,
    title: "Future in AI",
    desc: "Currently mastering software fundamentals with a long-term goal of transitioning into AI/ML engineering.",
  },
];

const HOBBIES = [
  { icon: GiAtom, label: "Physics Enthusiast" },
  { icon: GiCricketBat, label: "Cricket" },
  { icon: FiActivity, label: "Disciplined Living" },
  { icon: FiTarget, label: "Purpose Driven" },
];

const HIGHLIGHTS = [
  { emoji: "🎓", text: "Physics background · Analytical Thinking" },
  { emoji: "⚡", text: "Full-stack expertise in MERN & Next.js" },
  { emoji: "🤖", text: "Exploring AI for future integration" },
  { emoji: "🏆", text: "Built real-world eCommerce & Auth systems" },
];

/* ─── Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Skill Bar ─── */
function SkillBar({ label, pct, color, index, inView }) {
  return (
    <motion.div
      variants={fadeLeft}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{label}</span>
        <motion.span
          className="text-xs font-bold tabular-nums text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.09 + 0.4 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="relative h-[3px] rounded-full bg-zinc-200 dark:bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${color}`}
        />
        <motion.div
          initial={{ left: 0, opacity: 0 }}
          animate={inView ? { left: `${pct}%`, opacity: 1 } : { left: 0, opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)] dark:shadow-[0_0_8px_2px_rgba(99,102,241,0.8)]"
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ visibility: isClient ? "visible" : "hidden" }}
      className="relative overflow-hidden bg-white dark:bg-[#06060f] px-6 md:px-12 lg:px-20 py-28 md:py-36 transition-colors duration-500"
    >
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-[560px] h-[560px] rounded-full bg-indigo-500/[0.05] dark:bg-indigo-600/[0.07] blur-[110px]" />
        <div className="absolute bottom-0 -left-16 w-[400px] h-[400px] rounded-full bg-violet-500/[0.04] dark:bg-violet-600/[0.06] blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Eyebrow ── */}
        <motion.div
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">About Me</span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          variants={fadeUp} custom={1}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-16 font-[family-name:var(--font-syne)]"
        >
          The story{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              behind the code
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/60 to-transparent" />
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* ═══ LEFT COLUMN ═══ */}
          <div className="space-y-10">

            {/* Bio */}
            <motion.div
              variants={fadeUp} custom={2}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p className="text-[15px] leading-[1.9] text-zinc-600 dark:text-zinc-400">
                My coding journey began with a single curiosity that quickly evolved into building real-world, functional systems. I am a{" "}
                <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Full-stack Developer</span>{" "}
                focused on building modern, scalable web applications with clean, user-centered design.
              </p>
              <p className="text-[15px] leading-[1.9] text-zinc-600 dark:text-zinc-400">
                Having developed platforms like eCommerce systems, authentication modules, and API-driven trackers, I've strengthened my ability to manage complex application states and design systems that solve meaningful problems.
              </p>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              variants={fadeUp} custom={3}
              initial="hidden" animate={inView ? "visible" : "hidden"}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600 mb-4">
                Beyond the Terminal
              </p>
              <div className="flex flex-wrap gap-2.5">
                {HOBBIES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-white/[0.03] hover:border-indigo-500/40 hover:bg-indigo-500/[0.06] text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-300 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-default"
                  >
                    <Icon className="text-xs shrink-0 text-indigo-500 dark:text-indigo-400" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Passion cards */}
            <div className="space-y-3">
              {PASSIONS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp} custom={4 + i}
                  initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="group relative flex items-start gap-4 rounded-2xl border border-zinc-100 dark:border-white/[0.07] bg-zinc-50/50 dark:bg-white/[0.02] px-5 py-4 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-400 overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/[0.04] to-transparent" />
                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300">
                    <Icon className="text-xs" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-0.5">{title}</p>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT COLUMN ═══ */}
          <div className="space-y-10">

            {/* Skills */}
            <div>
              <motion.p
                variants={fadeUp} custom={2}
                initial="hidden" animate={inView ? "visible" : "hidden"}
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600 mb-7"
              >
                Technical Stack
              </motion.p>
              <div className="space-y-6">
                {SKILLS.map((s, i) => (
                  <SkillBar key={s.label} {...s} index={i} inView={inView} />
                ))}
              </div>
            </div>

            {/* Quick Highlights card */}
            <motion.div
              variants={fadeUp} custom={5}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative rounded-2xl border border-zinc-100 dark:border-white/[0.07] bg-zinc-50/50 dark:bg-white/[0.02] p-6 overflow-hidden"
            >
              <div className="pointer-events-none absolute top-0 right-0 w-28 h-28 bg-indigo-500/[0.08] rounded-full blur-2xl" />
              <div className="pointer-events-none absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-indigo-500/40 to-transparent" />
              <div className="pointer-events-none absolute top-0 right-0 h-px w-20 bg-gradient-to-l from-indigo-500/40 to-transparent" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400 mb-5">
                Quick Highlights
              </p>
              <ul className="space-y-3.5">
                {HIGHLIGHTS.map(({ emoji, text }) => (
                  <li key={text} className="flex items-start gap-3 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <span className="text-base shrink-0 mt-px">{emoji}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp} custom={6}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.45)]"
            >
              Let's Build Something Together
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}