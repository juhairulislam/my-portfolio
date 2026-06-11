"use client";

import Link from "next/link";
import Image from "next/image";

// ── Project Data ──────────────────────────────────────────────────────────
export const projects = [
   {
    id: "digitool",
    name: "Digital Tools Store",
    tagline: "Digital Tools Buying Platform",
    description:
      "A streamlined digital marketplace interface focusing on a frictionless user experience. This project demonstrates advanced React state management, featuring a dynamic dual-view layout where users can switch between a product gallery and a real-time updated shopping cart without page reloads.",
    challenges:
      "Managing the global cart state—ensuring that adding, removing, and calculating totals happened instantly across different UI components—was the core technical challenge. Implementing React-Toastify for non-intrusive user feedback while maintaining a clean UI aesthetic required precise timing.",
    improvements:
      "I aim to add a persistent cart feature using Browser Local Storage, implement a comprehensive product search with category filtering, and create a system for digital product delivery via email after checkout.",
    image: "/projects/digitool.png",
    tech: ["React.js", "JavaScript ES6+", "Tailwind CSS", "DaisyUI"],
    live: "https://a06-juhairul-b13.netlify.app",
    github: "https://github.com/juhairulislam/A06-Juhairul-B13",
    category: "Frontend",
    color: "from-cyan-600 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
    lightGlow: "rgba(6, 182, 212, 0.08)",
  },
  {
    id: "suncart",
    name: "SunCart",
    tagline: "Summer Essentials Store",
    description:
      "A high-performance summer-themed e-commerce application built with the Next.js App Router. This platform provides a seamless shopping experience where users can browse seasonal essentials, view detailed product information through protected routes, and manage their orders with a robust authentication system.",
    challenges:
      "Implementing BetterAuth for secure Google social login while maintaining proxy-protected routes was a significant hurdle. Additionally, ensuring smooth data persistence with MongoDB and handling dynamic route rendering in Next.js required careful configuration to avoid hydration errors.",
    improvements:
      "I plan to integrate a secure payment gateway like SSLCommerz or Stripe for real-time transactions, implement a comprehensive order tracking dashboard, and add an AI-powered product recommendation engine based on user browsing history.",
    image: "/projects/suncart.png",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth", "MongoDB"],
    live: "https://a-08-juhairul-b13.vercel.app/",
    github: "https://github.com/juhairulislam/A-08-Juhairul-B13",
    category: "Full Stack",
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(251, 146, 60, 0.15)",
    lightGlow: "rgba(251, 146, 60, 0.08)",
  },
  {
    id: "keenkeeper",
    name: "KeenKeeper",
    tagline: "Keep Your Friendships Alive",
    description:
      "KeenKeeper is a specialized relationship management tool designed to fight 'friendship fade.' By leveraging data visualization, it helps users track their last interactions and set specific communication goals, transforming social habits into visual insights to maintain long-term connections.",
    challenges:
      "The primary challenge was integrating Recharts for dynamic data visualization—specifically, transforming raw interaction logs into meaningful pie charts. Creating a logic-heavy timeline filter that updates in real-time based on interaction types (Call/Text/Video) also required advanced state management.",
    improvements:
      "Upcoming features include automated browser push notifications to remind users to reach out to friends and an advanced 'Relationship Health' score calculated by interaction frequency and interaction quality metrics.",
    image: "/projects/keenkeeper.png",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "Recharts", "React Icons"],
    live: "https://a-07-juhairul-b-13-f5xy.vercel.app/",
    github: "https://github.com/juhairulislam/A-07-Juhairul-B-13",
    category: "Frontend",
    color: "from-violet-600 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.15)",
    lightGlow: "rgba(139, 92, 246, 0.08)",
  },
 
  {
    id: "github-tracker",
    name: "GitHub Issue Tracker",
    tagline: "API-Driven Issue Management",
    description:
      "A professional-grade dashboard for managing software development workflows. By consuming the GitHub API, this application provides an organized view of repository issues, categorized by their current state (Open/Closed), allowing developers to analyze project bottlenecks efficiently.",
    challenges:
      "Handling asynchronous API requests and managing the DOM to render large JSON payloads efficiently was a major task. Creating a tab-based filtering system that remains performant while searching through hundreds of issues required optimizing JavaScript array methods.",
    improvements:
      "Future iterations will include the ability to create and edit issues directly from the app using GitHub Personal Access Tokens (PAT) and a markdown previewer for issue comments and descriptions.",
    image: "/projects/github.png",
    tech: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    live: "https://juhairulislam.github.io/A05-Juhairul-B13/",
    github: "https://github.com/juhairulislam/A05-Juhairul-B13",
    category: "Frontend",
    color: "from-emerald-600 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    lightGlow: "rgba(16, 185, 129, 0.08)",
  },
];

// ── Components ────────────────────────────────────────────────────────────

const ArrowIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CategoryBadge = ({ category, color }) => (
  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-linear-to-r ${color} bg-clip-text text-transparent border border-indigo-500/20 dark:border-white/10 bg-white/50 dark:bg-transparent backdrop-blur-md`}>
    {category}
  </span>
);

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-slate-50 dark:bg-[#030308] transition-colors duration-500" id="projects">
      {/* Dynamic Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-200/40 dark:bg-violet-900/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 font-bold mb-4">
            — My Work —
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-indigo-200 dark:via-violet-200 dark:to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/40 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            A selection of projects I&apos;ve crafted — each one a new challenge, a new lesson.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-indigo-500" />
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-indigo-500" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:border-white/[0.12]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent dark:from-[#06060f] dark:via-[#06060f]/40 dark:to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4">
                  <CategoryBadge category={project.category} color={project.color} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className={`text-2xl font-bold bg-linear-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.name}
                  </h3>
                  <p className="text-indigo-600/70 dark:text-white/40 text-xs font-bold mt-1 uppercase tracking-tighter">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-white/60 font-bold shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Main Action Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className={`group/btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r ${project.color} text-white dark:text-[#06060f] text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/20`}
                >
                  View Details
                  <ArrowIcon />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.lightGlow}, transparent 70%)`,
                }}
              />
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-slate-400 dark:text-white/20 text-xs font-bold tracking-[0.2em] uppercase">
            🚀 More Innovation Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}