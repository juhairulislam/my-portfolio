"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  TbMail, TbPhone, TbBrandWhatsapp, TbBrandLinkedin,
  TbBrandFacebook, TbBrandX, TbSend, TbCheck,
  TbAlertCircle, TbLoader2, TbArrowUpRight, TbUser,
  TbMessageDots, TbSparkles,
} from "react-icons/tb";

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

/* ─── Contact Info ─── */
const CONTACT_INFO = [
  {
    id: "email",
    label: "Email",
    value: "juhairulislam2018@gmail.com",
    display: "juhairulislam2018@gmail.com",
    icon: TbMail,
    href: "mailto:juhairulislam2018@gmail.com",
    la: "#4f46e5", da: "#818cf8",
    lb: "rgba(79,70,229,0.07)",  db: "rgba(99,102,241,0.10)",
    lbr:"rgba(79,70,229,0.18)",  dbr:"rgba(99,102,241,0.25)",
    lg: "rgba(79,70,229,0.14)",  dg: "rgba(99,102,241,0.30)",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+8801867695506",
    display: "+880 1867 695 506",
    icon: TbPhone,
    href: "tel:+8801867695506",
    la: "#7c3aed", da: "#a78bfa",
    lb: "rgba(124,58,237,0.07)", db: "rgba(139,92,246,0.10)",
    lbr:"rgba(124,58,237,0.18)", dbr:"rgba(139,92,246,0.25)",
    lg: "rgba(124,58,237,0.12)", dg: "rgba(139,92,246,0.28)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+8801867695506",
    display: "+880 1867 695 506",
    icon: TbBrandWhatsapp,
    href: "https://wa.me/8801867695506",
    la: "#059669", da: "#34d399",
    lb: "rgba(5,150,105,0.06)",  db: "rgba(52,211,153,0.08)",
    lbr:"rgba(5,150,105,0.16)",  dbr:"rgba(52,211,153,0.22)",
    lg: "rgba(5,150,105,0.10)",  dg: "rgba(52,211,153,0.25)",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: TbBrandLinkedin,
    href: "https://www.linkedin.com/in/juhairul-islam/",
    la: "#0a66c2", da: "#60a5fa",
  },
  {
    label: "Facebook",
    icon: TbBrandFacebook,
    href: "https://web.facebook.com/juhairul.islam.2024/",
    la: "#1877f2", da: "#93c5fd",
  },
  {
    label: "Twitter / X",
    icon: TbBrandX,
    href: "https://x.com/_juhairul",
    la: "#111827", da: "#e4e4f0",
  },
  {
    label: "Gmail",
    icon: TbMail,
    href: "mailto:juhairulislam2018@gmail.com",
    la: "#ea4335", da: "#fca5a5",
  },
];

/* ─── Formspree endpoint ─── */
const FORMSPREE_URL = "https://formspree.io/f/xpqbqybv";

/* ═══════════════════════════════════════
   Contact Info Card
═══════════════════════════════════════ */
function InfoCard({ item, isDark, index, inView }) {
  const [hov, setHov] = useState(false);
  const Icon   = item.icon;
  const accent = isDark ? item.da  : item.la;
  const bg     = isDark ? item.db  : item.lb;
  const border = isDark ? item.dbr : item.lbr;
  const glow   = isDark ? item.dg  : item.lg;

  return (
    <motion.a
      href={item.href}
      target={item.id !== "phone" ? "_blank" : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 overflow-hidden"
      style={{
        background: hov ? bg : isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        border: `1px solid ${hov ? border : "rgba(128,128,128,0.10)"}`,
        boxShadow: hov ? `0 8px 32px ${glow}` : "none",
        textDecoration: "none",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${accent}06 0%, transparent 60%)` }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          background: hov ? `${accent}18` : isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
          border: `1px solid ${hov ? accent + "40" : "rgba(128,128,128,0.08)"}`,
          boxShadow: hov ? `0 0 16px ${accent}30` : "none",
        }}
      >
        <Icon style={{ fontSize: 20, color: hov ? accent : isDark ? "#52526e" : "#9ca3af", transition: "color 0.3s" }} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-zinc-600 mb-0.5">
          {item.label}
        </p>
        <p
          className="text-sm font-semibold truncate transition-colors duration-300"
          style={{ color: hov ? accent : isDark ? "#a0a0c0" : "#374151" }}
        >
          {item.display}
        </p>
      </div>

      <TbArrowUpRight
        style={{
          fontSize: 16,
          color: hov ? accent : isDark ? "#52526e" : "#d1d5db",
          transform: hov ? "translate(2px,-2px)" : "translate(0,0)",
          transition: "all 0.3s",
        }}
      />
    </motion.a>
  );
}

/* ═══════════════════════════════════════
   Social Button
═══════════════════════════════════════ */
function SocialBtn({ item, isDark, index, inView }) {
  const [hov, setHov] = useState(false);
  const Icon   = item.icon;
  const accent = isDark ? item.da : item.la;

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.07 + 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300"
      style={{
        background: hov ? `${accent}14` : isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
        border: `1px solid ${hov ? accent + "40" : "rgba(128,128,128,0.10)"}`,
        boxShadow: hov ? `0 4px 20px ${accent}20` : "none",
        textDecoration: "none",
      }}
    >
      <Icon style={{ fontSize: 16, color: hov ? accent : isDark ? "#52526e" : "#9ca3af", transition: "color 0.3s" }} />
      <span
        className="text-xs font-semibold transition-colors duration-300 whitespace-nowrap"
        style={{ color: hov ? accent : isDark ? "#52526e" : "#9ca3af" }}
      >
        {item.label}
      </span>
    </motion.a>
  );
}

/* ═══════════════════════════════════════
   Input Field
═══════════════════════════════════════ */
function Field({ label, icon: Icon, type = "text", name, value, onChange, placeholder, isDark, multiline = false, accent = "#818cf8" }) {
  const [focused, setFocused] = useState(false);
  const border = focused
    ? `${accent}60`
    : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const bg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)";

  const sharedStyle = {
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 14,
    color: isDark ? "#e2e2f0" : "#111827",
    fontSize: 14,
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused ? `0 0 0 3px ${accent}18` : "none",
    resize: "none",
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-zinc-600">
        <Icon style={{ fontSize: 12, color: focused ? accent : "inherit" }} />
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          required
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, padding: "14px 16px" }}
          className="placeholder:text-gray-300 dark:placeholder:text-zinc-700"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, padding: "13px 16px" }}
          className="placeholder:text-gray-300 dark:placeholder:text-zinc-700"
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════
   Contact Form
═══════════════════════════════════════ */
function ContactForm({ isDark, inView }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 
  const accent = isDark ? "#818cf8" : "#4f46e5";

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden"
      style={{
        border: `1px solid ${isDark ? "rgba(99,102,241,0.22)" : "rgba(79,70,229,0.18)"}`,
        background: isDark ? "rgba(255,255,255,0.018)" : "rgba(0,0,0,0.018)",
        boxShadow: `0 0 60px ${isDark ? "rgba(99,102,241,0.12)" : "rgba(79,70,229,0.08)"}`,
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}80, transparent)` }} />
      
      <div className="px-7 py-5 flex items-center gap-3" style={{ borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}` }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
          <TbMessageDots style={{ fontSize: 18, color: accent }} />
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: accent }}>Send a Message</p>
          <p className="text-xs text-gray-400 dark:text-zinc-600">I'll reply within 24 hours</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.span className="w-2 h-2 rounded-full" style={{ background: "#34d399", boxShadow: "0 0 8px #34d399" }} animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.2, 0.9] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-[10px] text-gray-400 dark:text-zinc-600 font-medium">Available</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-7 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Your Name" icon={TbUser} name="name" value={form.name} onChange={handleChange} placeholder="John Doe" isDark={isDark} accent={accent} />
          <Field label="Email Address" icon={TbMail} type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" isDark={isDark} accent={accent} />
        </div>
        <Field label="Message" icon={TbMessageDots} name="message" value={form.message} onChange={handleChange} placeholder="Hi Juhair, I'd like to discuss a project..." isDark={isDark} multiline accent={accent} />

        <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div key="success" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                <TbCheck size={15} /> Message sent successfully!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div key="error" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-xs font-semibold text-rose-500">
                <TbAlertCircle size={15} /> Something went wrong. Try again.
              </motion.div>
            )}
            {status === "idle" && (
              <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs text-gray-400 dark:text-zinc-600">
                Replies go to your email — no spam.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300"
            style={{
              background: status === "success"
                ? "linear-gradient(135deg, #059669, #34d399)"
                : `linear-gradient(135deg, ${isDark ? "#6366f1" : "#4f46e5"}, ${isDark ? "#a78bfa" : "#7c3aed"})`,
              boxShadow: status === "loading" ? "none"
                : `0 0 28px ${isDark ? "rgba(99,102,241,0.45)" : "rgba(79,70,229,0.30)"}`,
              opacity: status === "loading" ? 0.75 : 1,
            }}
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.span key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <TbLoader2 size={15} />
                  </motion.span>
                  Sending…
                </motion.span>
              ) : status === "success" ? (
                <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <TbCheck size={15} /> Sent!
                </motion.span>
              ) : (
                <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  Send Message
                  <TbSend size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   Main Component
═══════════════════════════════════════ */
export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isDark = useIsDark();

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-white dark:bg-[#06060f] px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="dark:hidden absolute -top-20 left-0 w-[560px] h-[380px] rounded-full bg-indigo-100/80 blur-[90px]" />
        <div className="dark:hidden absolute bottom-0 right-0 w-[480px] h-[360px] rounded-full bg-violet-100/70 blur-[80px]" />
        <div className="hidden dark:block absolute -top-20 -left-20 w-[600px] h-[400px] rounded-full bg-indigo-600/[0.07] blur-[110px]" />
        <div className="hidden dark:block absolute bottom-0 -right-16 w-[500px] h-[400px] rounded-full bg-violet-700/[0.05] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.014] dark:opacity-[0.022]" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.8) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-linear-to-r from-indigo-500 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-400">Contact</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2 initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white">
            Let's build something <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">together</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="flex items-center gap-2 shrink-0">
            <TbSparkles className="text-indigo-400" size={14} />
            <p className="text-sm text-gray-400 dark:text-zinc-500">Open to opportunities</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-8">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }} className="text-[15px] leading-[1.85] text-gray-500 dark:text-zinc-400">
              Have a project in mind or just want to say hi? Feel free to reach out — I respond to every message personally.
            </motion.p>

            <div className="space-y-3">
              {CONTACT_INFO.map((item, i) => (
                <InfoCard key={item.id} item={item} isDark={isDark} index={i} inView={inView} />
              ))}
            </div>

            <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}} transition={{ delay: 0.38, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="h-px origin-left" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)" }} />

            <div>
              <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.35, duration: 0.5 }} className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-zinc-600 mb-4">Find me on</motion.p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((s, i) => (
                  <SocialBtn key={s.label} item={s} isDark={isDark} index={i} inView={inView} />
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.55 }} className="relative rounded-2xl px-5 py-4 overflow-hidden" style={{ background: isDark ? "rgba(52,211,153,0.06)" : "rgba(5,150,105,0.05)", border: `1px solid ${isDark ? "rgba(52,211,153,0.18)" : "rgba(5,150,105,0.14)"}` }}>
              <div className="flex items-center gap-3">
                <motion.span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#34d399", boxShadow: "0 0 10px #34d399" }} animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.2, 0.85] }} transition={{ duration: 2.2, repeat: Infinity }} />
                <p className="text-xs font-semibold" style={{ color: isDark ? "#34d399" : "#059669" }}>Currently available for freelance & full-time roles</p>
              </div>
            </motion.div>
          </div>
          <ContactForm isDark={isDark} inView={inView} />
        </div>
      </div>
    </section>
  );
}