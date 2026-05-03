"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiLayers, FiActivity, FiTarget } from "react-icons/fi";
import { GiAtom, GiCricketBat } from "react-icons/gi";
import { TbBrain } from "react-icons/tb";

/* ─── Data ─── */
const SKILLS = [
  { label: "Next.js / React.js", pct: 90 },
  { label: "MongoDB / Mongoose", pct: 85 },
  { label: "Node.js / Express.js", pct: 80 },
  { label: "TypeScript", pct: 75 },
  { label: "Tailwind CSS", pct: 95 },
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

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-white dark:bg-[#0a0a0f] px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ visibility: isClient ? "visible" : "hidden" }}
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-indigo-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">About Me</span>
        </motion.div>

        <motion.h2
          variants={fadeUp} custom={1}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-14 font-[family-name:var(--font-syne)]"
        >
          The story <span className="text-indigo-500">behind the code</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Narrative Column */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp} custom={2}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="space-y-5"
            >
              <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                My coding journey began with a single curiosity that quickly evolved into building real-world, functional systems. I am a <span className="text-indigo-400 font-semibold text-gray-700 dark:text-zinc-200 not-italic">Full-stack Developer</span> focused on building modern, scalable web applications with clean, user-centered design.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed">
                Having developed platforms like eCommerce systems, authentication modules, and API-driven trackers, I’ve strengthened my ability to manage complex application states and design systems that solve meaningful problems.
              </p>
            </motion.div>

            {/* Hobbies & Interests */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-4">Beyond the Terminal</p>
              <div className="flex flex-wrap gap-3">
                {HOBBIES.map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300">
                    <Icon className="text-sm shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Passion Cards */}
            <div className="space-y-3">
              {PASSIONS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp} custom={4 + i}
                  initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-4 bg-white/60 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 group hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <Icon className="text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 dark:text-zinc-500">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Facts Column */}
          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-6">Technical Stack</p>
              <div className="space-y-5">
                {SKILLS.map((s, i) => (
                  <SkillBar key={s.label} {...s} index={i} inView={inView} />
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <motion.div
              variants={fadeUp} custom={5}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative rounded-3xl overflow-hidden bg-white/60 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 backdrop-blur-md p-6"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-5">Quick Highlights</p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-zinc-400">
                <li className="flex items-center gap-3"><span>🎓</span> Physics background (Analytical Thinking)</li>
                <li className="flex items-center gap-3"><span>⚡</span> Full-stack expertise in MERN & Next.js</li>
                <li className="flex items-center gap-3"><span>🤖</span> Exploring AI for future integration</li>
                <li className="flex items-center gap-3"><span>🏆</span> Built real-world eCommerce & Auth systems</li>
              </ul>
            </motion.div>

            <motion.a
              variants={fadeUp} custom={6}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              href="#contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300"
            >
              Let's Build Something Together →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}