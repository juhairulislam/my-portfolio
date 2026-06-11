"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiHtml5,
  SiJavascript, SiFramer, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiGithub, SiPostman,
  SiVercel, SiNpm, SiNetlify, SiFigma,
} from "react-icons/si";
import { TbBrain, TbMessages, TbUsers, TbAtom } from "react-icons/tb";

/* ─────────────────────────── Dark Mode Hook ─────────────────────────── */
function useIsDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

/* ─────────────────────────── Data ─────────────────────────── */
const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    sym: "✦",
    desc: "Interfaces that feel alive",
    la: "#4f46e5", da: "#818cf8",
    lb: "rgba(99,102,241,0.07)",  db: "rgba(99,102,241,0.09)",
    lbr:"rgba(99,102,241,0.20)",  dbr:"rgba(99,102,241,0.28)",
    lg: "rgba(99,102,241,0.09)",  dg: "rgba(99,102,241,0.18)",
    skills: [
      { name:"Next.js",       icon:SiNextdotjs,   core:true  },
      { name:"React.js",      icon:SiReact,       core:true  },
      { name:"Tailwind CSS",  icon:SiTailwindcss, core:true  },
      { name:"JavaScript",    icon:SiJavascript,  core:true  },
      { name:"HTML & CSS",    icon:SiHtml5,       core:false },
      { name:"Framer Motion", icon:SiFramer,      core:false },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    sym: "⬡",
    desc: "APIs built to scale",
    la: "#7c3aed", da: "#a78bfa",
    lb: "rgba(139,92,246,0.07)", db: "rgba(139,92,246,0.09)",
    lbr:"rgba(139,92,246,0.20)", dbr:"rgba(139,92,246,0.28)",
    lg: "rgba(139,92,246,0.09)", dg: "rgba(139,92,246,0.18)",
    skills: [
      { name:"Node.js",    icon:SiNodedotjs, core:true  },
      { name:"Express.js", icon:SiExpress,   core:true  },
      { name:"REST API",   icon:SiPostman,   core:false },
    ],
  },
  {
    id: "database",
    label: "Database",
    sym: "◈",
    desc: "Data structured with intent",
    la: "#059669", da: "#34d399",
    lb: "rgba(5,150,105,0.06)",  db: "rgba(52,211,153,0.08)",
    lbr:"rgba(5,150,105,0.18)",  dbr:"rgba(52,211,153,0.24)",
    lg: "rgba(5,150,105,0.09)",  dg: "rgba(52,211,153,0.18)",
    skills: [
      { name:"MongoDB", icon:SiMongodb, core:true },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    sym: "⌬",
    desc: "Workflows that don't break",
    la: "#ea580c", da: "#fb923c",
    lb: "rgba(234,88,12,0.06)",  db: "rgba(251,146,60,0.08)",
    lbr:"rgba(234,88,12,0.18)",  dbr:"rgba(251,146,60,0.24)",
    lg: "rgba(234,88,12,0.09)",  dg: "rgba(251,146,60,0.18)",
    skills: [
      { name:"Git",          icon:SiGit,     core:true  },
      { name:"GitHub",       icon:SiGithub,  core:true  },
      { name:"Vercel",       icon:SiVercel,  core:true  },
      { name:"npm Packages", icon:SiNpm,     core:true  },
      { name:"Netlify",      icon:SiNetlify, core:false },
      { name:"Figma",        icon:SiFigma,   core:false },
    ],
  },
  {
    id: "others",
    label: "Others",
    sym: "◎",
    desc: "The human side of code",
    la: "#db2777", da: "#f472b6",
    lb: "rgba(219,39,119,0.06)", db: "rgba(244,114,182,0.08)",
    lbr:"rgba(219,39,119,0.18)", dbr:"rgba(244,114,182,0.24)",
    lg: "rgba(219,39,119,0.09)", dg: "rgba(244,114,182,0.18)",
    skills: [
      { name:"Problem Solving",       icon:TbBrain,    core:true  },
      { name:"Analytical Thinking",   icon:TbAtom,     core:true  },
      { name:"Team Management",       icon:TbUsers,    core:false },
      { name:"English Communication", icon:TbMessages, core:false },
    ],
  },
];

/* ─────────────────────────── Pulsing Dot ─────────────────────────── */
function PulseDot({ color }) {
  return (
    <motion.span
      className="absolute -top-[5px] -right-[5px] w-[9px] h-[9px] rounded-full"
      style={{ background: color, boxShadow: `0 0 10px 3px ${color}70` }}
      animate={{ opacity: [0.55, 1, 0.55], scale: [0.82, 1.28, 0.82] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─────────────────────────── Skill Chip ─────────────────────────── */
function SkillChip({ name, icon: Icon, core, accent, bg, border, index, inView }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.76, y: 16 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: index * 0.058 + 0.05, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex items-center gap-2.5 rounded-2xl px-4 py-3 cursor-default select-none"
      style={{
        background: hov ? bg : "transparent",
        border: `1px solid ${hov ? border : "rgba(148,163,184,0.12)"}`,
        boxShadow: hov ? `0 4px 28px ${accent}18, inset 0 1px 0 ${accent}10` : "none",
        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {core && <PulseDot color={accent} />}

      {/* Icon box */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: hov ? `${accent}15` : "rgba(148,163,184,0.07)",
          border: `1px solid ${hov ? accent + "35" : "rgba(148,163,184,0.10)"}`,
          transition: "all 0.28s ease",
        }}
      >
        <Icon
          style={{
            fontSize: 15,
            color: hov ? accent : "var(--skills-icon-color, #64748b)",
            transition: "color 0.28s",
          }}
        />
      </div>

      <span
        className="text-[13px] font-semibold whitespace-nowrap tracking-tight"
        style={{
          color: hov ? accent : "var(--skills-chip-text, #475569)",
          transition: "color 0.28s",
          fontFamily: "var(--font-dm-sans, inherit)",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────── Tab Button ─────────────────────────── */
function TabButton({ cat, isActive, isDark, onClick }) {
  const accent = isDark ? cat.da : cat.la;
  const tabBg   = isDark ? cat.db : cat.lb;
  const border  = isDark ? cat.dbr : cat.lbr;

  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-[18px] py-[9px] rounded-full text-[13px] font-semibold outline-none transition-all duration-300"
      style={{
        background: isActive ? tabBg : "transparent",
        border: `1px solid ${isActive ? border : "rgba(148,163,184,0.16)"}`,
        color: isActive ? accent : isDark ? "#64748b" : "#6b7280",
        boxShadow: isActive ? `0 0 20px ${accent}1a` : "none",
        letterSpacing: "-0.01em",
      }}
    >
      {/* Animated indicator dot */}
      {isActive && (
        <motion.span
          layoutId="tab-indicator"
          className="w-[7px] h-[7px] rounded-full shrink-0"
          style={{ background: accent }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      )}

      <span className="font-mono text-[14px] leading-none">{cat.sym}</span>
      <span>{cat.label}</span>

      <span
        className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold"
        style={{
          background: isActive ? `${accent}18` : "rgba(148,163,184,0.10)",
          color: isActive ? accent : isDark ? "#64748b" : "#9ca3af",
        }}
      >
        {cat.skills.length}
      </span>
    </button>
  );
}

/* ─────────────────────────── Panel Header ─────────────────────────── */
function PanelHeader({ cat, accent, border, isDark }) {
  return (
    <div
      className="flex items-center justify-between px-6 py-[18px]"
      style={{
        borderBottom: `1px solid ${border}`,
        background: isDark ? "rgba(255,255,255,0.013)" : "rgba(0,0,0,0.018)",
        transition: "all 0.4s",
      }}
    >
      <div className="flex items-center gap-3.5">
        {/* Symbol box */}
        <div
          className="w-10 h-10 rounded-[13px] flex items-center justify-center shrink-0"
          style={{
            background: isDark ? `${accent}12` : `${accent}0e`,
            border: `1px solid ${border}`,
            transition: "all 0.4s",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={cat.id + "-sym"}
              initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.3, opacity: 0, rotate: 20 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="font-mono text-xl leading-none"
              style={{ color: accent }}
            >
              {cat.sym}
            </motion.span>
          </AnimatePresence>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.p
              key={cat.id + "-label"}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="text-[13px] font-bold leading-tight tracking-tight"
              style={{ color: accent, fontFamily: "var(--font-syne, inherit)" }}
            >
              {cat.label}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={cat.id + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="text-[11px] mt-0.5"
              style={{ color: isDark ? "#64748b" : "#6b7280" }}
            >
              {cat.desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Core stack badge */}
      <div className="hidden sm:flex items-center gap-2 text-[11px]" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
        <motion.span
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.3, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        core stack
      </div>
    </div>
  );
}

/* ─────────────────────────── Main Export ─────────────────────────── */
export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isDark = useIsDark();
  const [active, setActive] = useState("frontend");

  const cat    = CATEGORIES.find((c) => c.id === active);
  const accent = isDark ? cat.da  : cat.la;
  const border = isDark ? cat.dbr : cat.lbr;
  const bg     = isDark ? cat.db  : cat.lb;
  const glow   = isDark ? cat.dg  : cat.lg;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-white dark:bg-[#06060f] px-6 md:px-12 lg:px-20 py-28 md:py-36"
      style={{
        "--skills-chip-text": isDark ? "#94a3b8" : "#475569",
        "--skills-icon-color": isDark ? "#64748b" : "#6b7280",
      }}
    >
      {/* ── Ambient background blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* light */}
        <div className="dark:hidden absolute -top-32 left-1/3 w-[600px] h-[280px] rounded-full bg-indigo-100/70 blur-[100px]" />
        <div className="dark:hidden absolute -bottom-20 right-0 w-[440px] h-[360px] rounded-full bg-violet-100/60 blur-[90px]" />
        {/* dark */}
        <div className="hidden dark:block absolute -top-16 left-1/3 w-[760px] h-[260px] rounded-full bg-indigo-600/[0.048] blur-[120px]" />
        <div className="hidden dark:block absolute -bottom-20 right-0 w-[480px] h-[420px] rounded-full bg-violet-700/[0.038] blur-[110px]" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.013] dark:opacity-[0.020]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.9) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-7 h-px bg-linear-to-r from-indigo-500 to-transparent" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-400">
                Skills
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-tight leading-[1.08] text-gray-900 dark:text-white"
            >
              Built with the{" "}
              <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                right tools
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-[13px] text-gray-500 dark:text-zinc-500 max-w-[210px] leading-relaxed md:text-right shrink-0"
          >
            Hover any skill. Glowing dots mark my core stack.
          </motion.p>
        </div>

        {/* ── Category Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="flex flex-wrap gap-2 mb-5"
        >
          {CATEGORIES.map((c) => (
            <TabButton
              key={c.id}
              cat={c}
              isActive={active === c.id}
              isDark={isDark}
              onClick={() => setActive(c.id)}
            />
          ))}
        </motion.div>

        {/* ── Skills Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.24, duration: 0.6 }}
          className="relative rounded-[22px] overflow-hidden"
          style={{
            border: `1px solid ${border}`,
            boxShadow: `0 0 56px ${glow}`,
            transition: "border-color 0.4s, box-shadow 0.4s",
          }}
        >
          {/* top shine line */}
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${accent}90 50%, transparent 100%)`,
              transition: "background 0.4s",
            }}
          />

          <PanelHeader cat={cat} accent={accent} border={border} isDark={isDark} />

          <div
            className="p-6"
            style={{ background: bg, transition: "background 0.4s" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-chips"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-2.5"
              >
                {cat.skills.map((s, i) => (
                  <SkillChip
                    key={s.name}
                    {...s}
                    accent={accent}
                    bg={bg}
                    border={border}
                    index={i}
                    inView={inView}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* bottom corner glow */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl"
            style={{ background: glow, transition: "background 0.4s" }}
          />
        </motion.div>

        {/* ── All-skills pill strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.52, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-2 justify-center"
        >
          {CATEGORIES.flatMap((c) =>
            c.skills.map((s) => {
              const dotColor = isDark ? c.da : c.la;
              return (
                <button
                  key={c.id + s.name}
                  onClick={() => setActive(c.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-250"
                  style={{
                    background: "rgba(148,163,184,0.07)",
                    border: "1px solid rgba(148,163,184,0.13)",
                    color: isDark ? "#94a3b8" : "#6b7280",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = dotColor;
                    e.currentTarget.style.borderColor = `${dotColor}38`;
                    e.currentTarget.style.background = `${dotColor}09`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? "#94a3b8" : "#6b7280";
                    e.currentTarget.style.borderColor = "rgba(148,163,184,0.13)";
                    e.currentTarget.style.background = "rgba(148,163,184,0.07)";
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: dotColor }}
                  />
                  {s.name}
                </button>
              );
            })
          )}
        </motion.div>
      </div>
    </section>
  );
}