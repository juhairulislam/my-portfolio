"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TbAtom, TbBuildingCommunity, TbCalendar, TbMapPin, TbSparkles, TbBook2, TbFlask } from "react-icons/tb";
import { PiGraduationCapBold } from "react-icons/pi";

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
const TIMELINE = [
  {
    id: "university",
    type: "current",
    degree: "Bachelor of Science in Physics",
    institution: "National University",
    period: "2023 — Present",
    location: "Bangladesh",
    icon: TbAtom,
    sym: "✦",
    la: "#4f46e5", da: "#818cf8",
    lb: "rgba(79,70,229,0.07)",  db: "rgba(99,102,241,0.10)",
    lbr:"rgba(79,70,229,0.18)",  dbr:"rgba(99,102,241,0.28)",
    lg: "rgba(79,70,229,0.14)",  dg: "rgba(99,102,241,0.32)",
    highlights: [
      { icon: TbFlask,  text: "Currently in 3rd Year — Deep diving into advanced theoretical physics" },
      { icon: TbBook2,  text: "Analytical thinking sharpened through problem-based learning" },
      { icon: TbSparkles, text: "Bridging physics foundations with software engineering" },
    ],
    badge: "3rd Year Ongoing",
    badgeColor: { l: "rgba(79,70,229,0.10)", d: "rgba(99,102,241,0.15)" },
  },
  {
    id: "alim",
    type: "completed",
    degree: "Alim (Higher Secondary)",
    institution: "Tamirul Millat Kamil Madrasah",
    period: "Completed",
    location: "Tongi, Gazipur",
    icon: PiGraduationCapBold,
    sym: "◈",
    la: "#7c3aed", da: "#a78bfa",
    lb: "rgba(124,58,237,0.06)", db: "rgba(139,92,246,0.09)",
    lbr:"rgba(124,58,237,0.16)", dbr:"rgba(139,92,246,0.22)",
    lg: "rgba(124,58,237,0.10)", dg: "rgba(139,92,246,0.25)",
    highlights: [
      { icon: TbBook2,   text: "Completed Alim — equivalent to HSC in the Madrasah education system" },
      { icon: TbMapPin,  text: "Tamirul Millat Kamil Madrasah, Tongi, Gazipur" },
    ],
    badge: "Completed",
    badgeColor: { l: "rgba(124,58,237,0.10)", d: "rgba(139,92,246,0.14)" },
  },
];

/* ─── Highlight row ─── */
function HighlightRow({ icon: Icon, text, accent, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3"
    >
      <div
        className="mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
      >
        <Icon style={{ fontSize: 12, color: accent }} />
      </div>
      <p className="text-xs leading-relaxed text-gray-500 dark:text-zinc-500">{text}</p>
    </motion.div>
  );
}

/* ─── Timeline Card ─── */
function TimelineCard({ item, isActive, onClick, isDark, inView, index }) {
  const accent = isDark ? item.da  : item.la;
  const bg     = isDark ? item.db  : item.lb;
  const border = isDark ? item.dbr : item.lbr;
  const glow   = isDark ? item.dg  : item.lg;
  const Icon   = item.icon;
  const isCurrent = item.type === "current";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center pt-1 shrink-0">
        <motion.div
          className="relative w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 z-10"
          style={{
            background: isActive ? `${accent}20` : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
            border: `1.5px solid ${isActive ? accent + "60" : "rgba(128,128,128,0.12)"}`,
            boxShadow: isActive ? `0 0 20px ${glow}` : "none",
          }}
          animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Icon style={{ fontSize: 18, color: isActive ? accent : isDark ? "#52526e" : "#9ca3af", transition: "color 0.3s" }} />

          {isCurrent && (
            <motion.span
              className="absolute inset-0 rounded-2xl"
              style={{ border: `1.5px solid ${accent}` }}
              animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>

        {index < TIMELINE.length - 1 && (
          <div
            className="w-px flex-1 mt-2 min-h-[40px]"
            style={{
              background: `linear-gradient(to bottom, ${accent}40, rgba(128,128,128,0.06))`,
              transition: "background 0.4s",
            }}
          />
        )}
      </div>

      <div className="flex-1 pb-10">
        <motion.div
          className="relative rounded-2xl overflow-hidden transition-all duration-400"
          style={{
            border: `1px solid ${isActive ? border : "rgba(128,128,128,0.10)"}`,
            background: isActive ? bg : isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)",
            boxShadow: isActive ? `0 8px 40px ${glow}` : "none",
          }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
        >
          {isActive && (
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}80, transparent)` }}
            />
          )}

          <div className="px-5 pt-5 pb-4">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <p
                  className="font-[family-name:var(--font-syne)] text-base font-bold leading-tight mb-1 transition-colors duration-300"
                  style={{ color: isActive ? accent : isDark ? "#a0a0c0" : "#374151" }}
                >
                  {item.degree}
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <TbBuildingCommunity style={{ fontSize: 12, color: isDark ? "#52526e" : "#9ca3af" }} />
                  <span className="text-xs text-gray-400 dark:text-zinc-500 font-medium">{item.institution}</span>
                </div>
              </div>

              <span
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: isDark ? item.badgeColor.d : item.badgeColor.l,
                  color: accent,
                  border: `1px solid ${accent}30`,
                }}
              >
                {isCurrent && (
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: accent }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                )}
                {item.badge}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <TbCalendar style={{ fontSize: 11, color: isDark ? "#52526e" : "#9ca3af" }} />
                <span className="text-[11px] text-gray-400 dark:text-zinc-600">{item.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TbMapPin style={{ fontSize: 11, color: isDark ? "#52526e" : "#9ca3af" }} />
                <span className="text-[11px] text-gray-400 dark:text-zinc-600">{item.location}</span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                key="highlights"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="mx-5 mb-5 rounded-xl p-4 space-y-3"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)",
                    border: `1px solid ${border}`,
                  }}
                >
                  {item.highlights.map((h, i) => (
                    <HighlightRow
                      key={h.text}
                      icon={h.icon}
                      text={h.text}
                      accent={accent}
                      delay={i * 0.07}
                      inView={true}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!isActive && (
            <div className="px-5 pb-4">
              <p className="text-[10px] text-gray-300 dark:text-zinc-700 italic">Click to expand details</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Highlight summary card ─── */
function SummaryCard({ isDark, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.38, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden p-6"
      style={{
        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
      }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
        style={{ background: "rgba(99,102,241,0.08)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-px h-20 opacity-50"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-px w-20 opacity-50"
        style={{ background: "linear-gradient(to left, rgba(99,102,241,0.5), transparent)" }}
      />

      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400 mb-5">
        Education Snapshot
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Institutions", value: "2" },
            { label: "Current Year", value: "3rd" },
            { label: "Field", value: "Physics" },
            { label: "Status", value: "Active" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl px-3 py-3 text-center"
              style={{
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
              }}
            >
              <p
                className="font-[family-name:var(--font-syne)] text-lg font-extrabold leading-none mb-1"
                style={{ color: isDark ? "#818cf8" : "#4f46e5" }}
              >
                {value}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-zinc-600">{label}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl px-4 py-3.5"
          style={{
            background: isDark ? "rgba(99,102,241,0.07)" : "rgba(79,70,229,0.06)",
            border: `1px solid ${isDark ? "rgba(99,102,241,0.20)" : "rgba(79,70,229,0.14)"}`,
          }}
        >
          <p className="text-xs leading-relaxed text-gray-500 dark:text-zinc-500">
            Currently pursuing an undergraduate degree in Physics while actively building full-stack web applications —
            merging <span className="font-semibold" style={{ color: isDark ? "#818cf8" : "#4f46e5" }}>analytical rigor</span> with
            {" "}<span className="font-semibold" style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}>engineering creativity</span>.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main ─── */
export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isDark = useIsDark();
  const [active, setActive] = useState("university");

  return (
    <section
      id="education"
      ref={ref}
      className="relative overflow-hidden bg-white dark:bg-[#06060f] px-6 md:px-12 lg:px-20 py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="dark:hidden absolute -top-24 right-0 w-[600px] h-[360px] rounded-full bg-indigo-100/70 blur-[90px]" />
        <div className="dark:hidden absolute bottom-0 left-0 w-[400px] h-[340px] rounded-full bg-violet-100/60 blur-[80px]" />
        <div className="hidden dark:block absolute -top-20 right-0 w-[640px] h-[340px] rounded-full bg-indigo-600/[0.055] blur-[110px]" />
        <div className="hidden dark:block absolute bottom-0 left-0 w-[420px] h-[360px] rounded-full bg-violet-700/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.014] dark:opacity-[0.022]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.8) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-linear-to-r from-indigo-500 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-400">
            Education
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white"
          >
            Where I learned{" "}
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              to think deeply
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-sm text-gray-400 dark:text-zinc-500 max-w-[220px] leading-relaxed md:text-right shrink-0"
          >
            Click a card to explore details.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
          <div>
            {TIMELINE.map((item, i) => (
              <TimelineCard
                key={item.id}
                item={item}
                isActive={active === item.id}
                onClick={() => setActive(active === item.id ? item.id : item.id)}
                isDark={isDark}
                inView={inView}
                index={i}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            <SummaryCard isDark={isDark} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}