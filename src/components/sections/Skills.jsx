"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiHtml5,
  SiJavascript, SiFramer, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiGithub, SiPostman,
  SiVercel, SiNpm, SiNetlify, SiFigma
} from "react-icons/si";
import { TbBrain, TbMessages, TbUsers, TbAtom } from "react-icons/tb";

/* ─── Dark mode hook ─── */
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

/* ─── Data ─── */
const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    sym: "✦",
    desc: "Interfaces that feel alive",
    la: "#4f46e5", da: "#818cf8",
    lb: "rgba(79,70,229,0.07)",  db: "rgba(99,102,241,0.10)",
    lbr:"rgba(79,70,229,0.18)",  dbr:"rgba(99,102,241,0.25)",
    lg: "rgba(79,70,229,0.12)",  dg: "rgba(99,102,241,0.30)",
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
    lb: "rgba(124,58,237,0.07)", db: "rgba(139,92,246,0.10)",
    lbr:"rgba(124,58,237,0.18)", dbr:"rgba(139,92,246,0.25)",
    lg: "rgba(124,58,237,0.10)", dg: "rgba(139,92,246,0.28)",
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
    lbr:"rgba(5,150,105,0.16)",  dbr:"rgba(52,211,153,0.22)",
    lg: "rgba(5,150,105,0.10)",  dg: "rgba(52,211,153,0.25)",
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
    lbr:"rgba(234,88,12,0.16)",  dbr:"rgba(251,146,60,0.22)",
    lg: "rgba(234,88,12,0.10)",  dg: "rgba(251,146,60,0.25)",
    skills: [
      { name:"Git",           icon:SiGit,       core:true  },
      { name:"GitHub",        icon:SiGithub,    core:true  },
      { name:"Vercel",        icon:SiVercel,    core:true  },
      { name:"npm Packages",  icon:SiNpm,       core:true  },
      { name:"Netlify",       icon:SiNetlify,   core:false },
      { name:"Figma",         icon:SiFigma,     core:false },
    ],
  },
  {
    id: "others",
    label: "Others",
    sym: "◎",
    desc: "The human side of code",
    la: "#db2777", da: "#f472b6",
    lb: "rgba(219,39,119,0.06)", db: "rgba(244,114,182,0.08)",
    lbr:"rgba(219,39,119,0.16)", dbr:"rgba(244,114,182,0.22)",
    lg: "rgba(219,39,119,0.10)", dg: "rgba(244,114,182,0.25)",
    skills: [
      { name:"Problem Solving",       icon:TbBrain,    core:true  },
      { name:"Analytical Thinking",   icon:TbAtom,     core:true  },
      { name:"Team Management",       icon:TbUsers,    core:false },
      { name:"English Communication", icon:TbMessages, core:false },
    ],
  },
];

/* ─── Skill Chip ─── */
function SkillChip({ name, icon: Icon, core, accent, bg, border, index, inView }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity:0, scale:0.78, y:14 }}
      animate={inView ? { opacity:1, scale:1, y:0 } : {}}
      transition={{ delay: index * 0.06 + 0.08, duration:0.5, ease:[0.22,1,0.36,1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex items-center gap-2.5 rounded-2xl px-4 py-3 cursor-default select-none"
      style={{
        background: hov ? bg : "transparent",
        border: `1px solid ${hov ? border : "rgba(128,128,128,0.15)"}`,
        boxShadow: hov ? `0 4px 24px ${accent}18` : "none",
        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {core && (
        <motion.span
          className="absolute -top-[5px] -right-[5px] w-[9px] h-[9px] rounded-full"
          style={{ background: accent, boxShadow: `0 0 8px 2px ${accent}80` }}
          animate={{ opacity:[0.6,1,0.6], scale:[0.85,1.25,0.85] }}
          transition={{ duration:2.6, repeat:Infinity, ease:"easeInOut" }}
        />
      )}

      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: hov ? `${accent}18` : "rgba(128,128,128,0.08)",
          border: `1px solid ${hov ? accent + "38" : "rgba(128,128,128,0.12)"}`,
          transition: "all 0.28s ease",
        }}
      >
        <Icon style={{ fontSize:15, color: hov ? accent : "#666", transition:"color 0.28s" }} />
      </div>

      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{
          color: hov ? accent : "var(--chip-text)",
          transition: "color 0.28s",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ─── Main ─── */
export default function Skills() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const isDark = useIsDark();
  const [active, setActive] = useState("frontend");

  const cat = CATEGORIES.find((c) => c.id === active);
  const accent = isDark ? cat.da  : cat.la;
  const bg     = isDark ? cat.db  : cat.lb;
  const border = isDark ? cat.dbr : cat.lbr;
  const glow   = isDark ? cat.dg  : cat.lg;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-white dark:bg-[#06060f] px-6 md:px-12 lg:px-20 py-28 md:py-36"
      // Light theme-এ টেক্সট কালার আরও গাঢ় (#374151) করা হয়েছে ব্রাইটনেসের জন্য
      style={{ "--chip-text": isDark ? "#94a3b8" : "#374151" }}
    >
      {/* ── Backgrounds ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="dark:hidden absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] h-[320px] rounded-full bg-indigo-100/80 blur-[90px]" />
        <div className="dark:hidden absolute -bottom-16 -right-16 w-[480px] h-[380px] rounded-full bg-violet-100/70 blur-[80px]" />
        <div className="hidden dark:block absolute -top-20 left-1/2 -translate-x-1/2 w-[820px] h-[300px] rounded-full bg-indigo-600/[0.055] blur-[110px]" />
        <div className="hidden dark:block absolute -bottom-16 -right-16 w-[500px] h-[440px] rounded-full bg-violet-700/[0.045] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.014] dark:opacity-[0.022]"
          style={{
            backgroundImage:"linear-gradient(rgba(99,102,241,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.8) 1px,transparent 1px)",
            backgroundSize:"64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <motion.div
              initial={{ opacity:0, y:14 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-400">
                Skills
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity:0, y:22 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.08, duration:0.65, ease:[0.22,1,0.36,1] }}
              className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white"
            >
              Built with the{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                right tools
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity:0 }}
            animate={inView ? { opacity:1 } : {}}
            transition={{ delay:0.22, duration:0.6 }}
            className="text-sm text-gray-500 dark:text-zinc-400 max-w-[220px] leading-relaxed md:text-right shrink-0"
          >
            Hover any skill. Glowing dots mark my core stack.
          </motion.p>
        </div>

        {/* ── Category Tabs ── */}
        <LayoutGroup>
          <motion.div
            initial={{ opacity:0, y:14 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.16, duration:0.55 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;
              const tabAccent = isDark ? c.da : c.la;
              const tabBg     = isDark ? c.db : c.lb;
              const tabBorder = isDark ? c.dbr: c.lbr;

              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold outline-none transition-all duration-300"
                  style={{
                    background: isActive ? tabBg  : "transparent",
                    border:`1px solid ${isActive ? tabBorder : "rgba(128,128,128,0.20)"}`,
                    color: isActive ? tabAccent : isDark ? "#64748b" : "#4b5563",
                    boxShadow: isActive ? `0 0 18px ${tabAccent}20` : "none",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ background: tabBg }}
                      transition={{ type:"spring", stiffness:380, damping:28 }}
                    />
                  )}
                  <span className="relative z-10 font-mono text-[15px] leading-none">{c.sym}</span>
                  <span className="relative z-10">{c.label}</span>
                  <span
                    className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: isActive ? `${tabAccent}1a` : "rgba(128,128,128,0.12)",
                      color: isActive ? tabAccent : isDark ? "#64748b" : "#4b5563",
                    }}
                  >
                    {c.skills.length}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </LayoutGroup>

        {/* ── Skills Panel ── */}
        <motion.div
          initial={{ opacity:0, y:18 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.24, duration:0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            border:`1px solid ${border}`,
            boxShadow:`0 0 50px ${glow}`,
            transition:"border-color 0.4s, box-shadow 0.4s",
          }}
        >
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{ background:`linear-gradient(90deg, transparent, ${accent}80, transparent)`, transition:"background 0.4s" }}
          />

          <div
            className="flex items-center justify-between px-7 py-5"
            style={{
              borderBottom:`1px solid ${border}`,
              background: isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.02)",
              transition:"all 0.4s",
            }}
          >
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active + "-sym"}
                  initial={{ scale:0.3, opacity:0, rotate:-20 }}
                  animate={{ scale:1, opacity:1, rotate:0 }}
                  exit={{ scale:0.3, opacity:0, rotate:20 }}
                  transition={{ type:"spring", stiffness:420, damping:22 }}
                  className="font-mono text-2xl"
                  style={{ color: accent }}
                >
                  {cat.sym}
                </motion.span>
              </AnimatePresence>
              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active + "-lbl"}
                    initial={{ opacity:0, x:-8 }}
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, x:8 }}
                    transition={{ duration:0.2 }}
                    className="text-sm font-bold leading-tight"
                    style={{ color: accent }}
                  >
                    {cat.label}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active + "-desc"}
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity:0 }}
                    transition={{ duration:0.28 }}
                    className="text-xs text-gray-600 dark:text-zinc-400"
                  >
                    {cat.desc}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 dark:text-zinc-400">
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ background: accent, boxShadow:`0 0 8px ${accent}` }}
                animate={{ opacity:[0.5,1,0.5], scale:[0.85,1.25,0.85] }}
                transition={{ duration:2.2, repeat:Infinity }}
              />
              core stack
            </div>
          </div>

          <div
            className="p-7"
            style={{ background: bg, transition:"background 0.4s" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-chips"}
                initial={{ opacity:0, y:10 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-8 }}
                transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
                className="flex flex-wrap gap-3"
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

          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl"
            style={{ background: glow, transition:"background 0.4s" }}
          />
        </motion.div>

        {/* ── All-skills strip ── */}
        <motion.div
          initial={{ opacity:0 }}
          animate={inView ? { opacity:1 } : {}}
          transition={{ delay:0.55, duration:0.8 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {CATEGORIES.flatMap((c) =>
            c.skills.map((s) => {
              const dotColor = isDark ? c.da : c.la;
              return (
                <button
                  key={c.id + s.name}
                  onClick={() => setActive(c.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300"
                  style={{
                    background: "rgba(128,128,128,0.08)",
                    border: "1px solid rgba(128,128,128,0.15)",
                    color: isDark ? "#94a3b8" : "#4b5563",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = dotColor;
                    e.currentTarget.style.borderColor = `${dotColor}40`;
                    e.currentTarget.style.background = `${dotColor}09`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? "#94a3b8" : "#4b5563";
                    e.currentTarget.style.borderColor = "rgba(128,128,128,0.15)";
                    e.currentTarget.style.background = "rgba(128,128,128,0.08)";
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dotColor }} />
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