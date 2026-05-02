"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode, FiCpu, FiLayers, FiHeart,
} from "react-icons/fi";
import { GiCricketBat, GiPaintBrush } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";

/* ─── data ─────────────────────────────────────────────────── */
const SKILLS = [
  { label: "React.js",   pct: 90 },
  { label: "Node.js",    pct: 82 },
  { label: "MongoDB",    pct: 78 },
  { label: "TypeScript", pct: 72 },
  { label: "Next.js",    pct: 80 },
];

const PASSIONS = [
  {
    icon: FiCode,
    title: "Clean Code",
    desc: "I treat every codebase like a living document — readable, maintainable, and purposeful.",
  },
  {
    icon: FiCpu,
    title: "Performance",
    desc: "Speed is a feature. I obsess over lighthouse scores and optimal rendering strategies.",
  },
  {
    icon: FiLayers,
    title: "Architecture",
    desc: "Scalable design patterns excite me. I think in systems, not just components.",
  },
];

const HOBBIES = [
  { icon: GiCricketBat,         label: "Cricket"   },
  { icon: GiPaintBrush,         label: "Painting"  },
  { icon: MdOutlineTravelExplore, label: "Travel"   },
  { icon: FiHeart,              label: "Open Source"},
];

/* ─── animation variants ────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden:  { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

/* ─── skill bar ─────────────────────────────────────────────── */
function SkillBar({ label, pct, index, inView }) {
  return (
    <motion.div
      variants={fadeLeft}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">{label}</span>
        <span className="text-xs font-semibold text-indigo-500">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
        />
      </div>
    </motion.div>
  );
}

/* ─── section ───────────────────────────────────────────────── */
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden
                 bg-white dark:bg-[#0a0a0f]
                 px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      {/* ambient blobs — identical to Hero */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full
                      bg-indigo-500/10 blur-[120px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full
                      bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">

        {/* ── section label ── */}
        <motion.div
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-indigo-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp} custom={1}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold
                     text-gray-900 dark:text-white tracking-tight mb-14
                     font-[family-name:var(--font-syne)]"
        >
          The story{" "}
          <span className="text-indigo-500">behind the code</span>
        </motion.h2>

        {/* ── two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* LEFT — narrative + hobbies */}
          <div className="space-y-8">

            {/* journey */}
            <motion.div
              variants={fadeUp} custom={2}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="space-y-5"
            >
              <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                My coding journey began with a single curiosity — <em className="text-gray-700 dark:text-zinc-200 not-italic font-medium">"How does a website actually work?"</em> That question pulled me into a rabbit hole of HTML, CSS, and eventually JavaScript. What started as tinkering in a browser inspector turned into a full-blown passion for building things that people use every day.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                Today I specialise in the <span className="text-indigo-400 font-semibold">MERN stack</span> — crafting fast, accessible, and beautifully designed interfaces on the front-end, paired with well-structured, scalable APIs on the back-end. I love the challenge of translating a design into pixel-perfect, performant code that delights both users and developers.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                What excites me most is the intersection of <span className="text-indigo-400 font-semibold">design and engineering</span> — where thoughtful UI meets solid architecture. I'm endlessly curious, always learning, and believe that the best software feels effortless precisely because tremendous effort went into it.
              </p>
            </motion.div>

            {/* hobbies */}
            <motion.div
              variants={fadeUp} custom={3}
              initial="hidden" animate={inView ? "visible" : "hidden"}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-4">
                Life beyond the screen
              </p>
              <div className="flex flex-wrap gap-3">
                {HOBBIES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2
                               bg-gray-100 dark:bg-white/5
                               border border-gray-200 dark:border-white/10
                               text-gray-700 dark:text-zinc-300
                               hover:border-indigo-500 hover:text-indigo-500
                               dark:hover:text-indigo-400
                               text-xs font-medium
                               px-4 py-2 rounded-full
                               transition-all duration-300 cursor-default"
                  >
                    <Icon className="text-sm shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* what I enjoy cards */}
            <div className="space-y-3">
              {PASSIONS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp} custom={4 + i}
                  initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-4
                             bg-white/60 dark:bg-white/[0.03]
                             border border-gray-200 dark:border-white/10
                             backdrop-blur-md rounded-2xl px-5 py-4
                             hover:border-indigo-500/50
                             hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5
                             transition-all duration-300 group"
                >
                  <div className="w-9 h-9 shrink-0 rounded-xl
                                  bg-indigo-500/10 border border-indigo-500/20
                                  flex items-center justify-center
                                  group-hover:bg-indigo-500 group-hover:border-indigo-500
                                  transition-all duration-300">
                    <Icon className="text-sm text-indigo-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 dark:text-zinc-500 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — skills + quick facts */}
          <div className="space-y-10">

            {/* skill bars */}
            <div>
              <motion.p
                variants={fadeUp} custom={2}
                initial="hidden" animate={inView ? "visible" : "hidden"}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-6"
              >
                Core Technologies
              </motion.p>
              <div className="space-y-5">
                {SKILLS.map((s, i) => (
                  <SkillBar key={s.label} {...s} index={i} inView={inView} />
                ))}
              </div>
            </div>

            {/* fun facts glassmorphism card */}
            <motion.div
              variants={fadeUp} custom={5}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative rounded-3xl overflow-hidden
                         bg-white/60 dark:bg-white/[0.03]
                         border border-gray-200 dark:border-white/10
                         backdrop-blur-md p-6"
            >
              {/* inner glow */}
              <div className="absolute top-0 right-0 w-32 h-32
                              bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xs font-semibold uppercase tracking-widest
                            text-indigo-400 mb-5">
                Quick Facts
              </p>

              <ul className="space-y-3">
                {[
                  ["🎓", "Self-taught developer with 1+ years hands-on experience"],
                  ["🌐", "Passionate about open-source and the developer community"],
                  ["🏏", "Hit the cricket pitch every weekend to recharge"],
                  ["🎨", "Hobby painter — digital art is my creative escape"],
                  ["✈️",  "Explorer at heart; new places fuel new ideas"],
                  ["📚", "Always reading — currently deep into system design"],
                ].map(([emoji, fact]) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="text-base leading-snug">{emoji}</span>
                    <span className="text-sm text-gray-600 dark:text-zinc-400 leading-snug">{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp} custom={6}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              href="#contact"
              className="inline-flex items-center gap-2
                         bg-indigo-600 hover:bg-indigo-500
                         text-white text-sm font-medium
                         px-6 py-3 rounded-full
                         shadow-lg shadow-indigo-500/30
                         hover:shadow-indigo-500/50
                         transition-all duration-300
                         hover:-translate-y-0.5 active:scale-95"
            >
              Let's Work Together
              <span aria-hidden>→</span>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}