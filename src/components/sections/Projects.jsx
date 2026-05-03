"use client";

import Link from "next/link";
import Image from "next/image";

export const projects = [
  {
    id: "suncart",
    name: "SunCart",
    tagline: "Summer Essentials Store",
    description:
      "A modern summer-themed eCommerce platform where users can explore and purchase seasonal products like sunglasses, outfits, and skincare. Features secure user authentication and personalized profile management.",
    image: "/projects/suncart.png",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth", "MongoDB"],
    live: "https://a-08-juhairul-b13.vercel.app/",
    github: "https://github.com/juhairulislam/A-08-Juhairul-B13",
    challenges:
      "Connecting and managing MongoDB database, handling Vercel deployment, and implementing secure Google Authentication using BetterAuth.",
    improvements:
      "Add product reviews, wishlist feature, payment gateway integration, and order tracking system.",
    category: "Full Stack",
    color: "from-orange-500 to-amber-400",
    glowColor: "rgba(251, 146, 60, 0.15)",
  },
  {
    id: "keenkeeper",
    name: "KeenKeeper",
    tagline: "Keep Your Friendships Alive",
    description:
      "A modern friendship management application designed to help users track interactions, set relationship goals, and visualize communication patterns to maintain meaningful connections.",
    image: "/projects/keenkeeper.png",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "Recharts", "React Icons"],
    live: "https://a-07-juhairul-b-13-f5xy.vercel.app/",
    github: "https://github.com/juhairulislam/A-07-Juhairul-B-13",
    challenges:
      "Implementing real-time interaction system with automated timeline and integrating Recharts for accurate visual analytics of communication habits.",
    improvements:
      "Add push notifications for follow-up reminders, AI-powered relationship insights, and mobile app version.",
    category: "Full Stack",
    color: "from-violet-500 to-purple-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    id: "digitool",
    name: "Digital Tools Store",
    tagline: "Digital Tools Buying Platform",
    description:
      "An interactive React-based e-commerce interface for browsing and purchasing digital tools. Features dynamic state management for cart operations, real-time price calculations, and smooth user experience.",
    image: "/projects/digitool.png",
    tech: ["React.js", "JavaScript ES6+", "Tailwind CSS", "DaisyUI", "React-Toastify"],
    live: "https://a06-juhairul-b13.netlify.app",
    github: "https://github.com/juhairulislam/A06-Juhairul-B13",
    challenges:
      "Managing dynamic UI states to toggle between product views and cart, real-time cart total synchronization, and implementing notification system.",
    improvements:
      "Add backend integration, user accounts, product search/filter, and payment processing.",
    category: "Frontend",
    color: "from-cyan-500 to-blue-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: "github-tracker",
    name: "GitHub Issue Tracker",
    tagline: "API-Driven Issue Management",
    description:
      "An API-driven interface designed to display and organize GitHub issue data. Features secure login, dynamic data fetching, and an interactive tab-based system for filtering and viewing specific issue details.",
    image: "/projects/github.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "API Integration", "JSON"],
    live: "https://juhairulislam.github.io/A05-Juhairul-B13/",
    github: "https://github.com/juhairulislam/A05-Juhairul-B13",
    challenges:
      "Managing UI state transitions for tab-based filtering, handling async data fetching with loading states, and implementing smooth modal system.",
    improvements:
      "Add real-time updates via GitHub webhooks, issue assignment tracking, and multi-repo support.",
    category: "Frontend",
    color: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// TypeScript টাইপ সরিয়ে শুধুমাত্র JavaScript প্রপস রাখা হয়েছে
const CategoryBadge = ({ category, color }) => (
  <span
    className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${color} bg-clip-text text-transparent border border-white/10`}
  >
    {category}
  </span>
);

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="projects">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-900/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400/70 font-medium mb-4">
            — My Work —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of projects I&apos;ve crafted — each one a new challenge, a new lesson.
          </p>
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500/50" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.12]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 50% 0%, ${project.glowColor}, transparent 70%)`,
                }}
              />

              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/40 to-transparent" />

                {/* Category badge — top right */}
                <div className="absolute top-3 right-3">
                  <CategoryBadge category={project.category} color={project.color} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="mb-3">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                  >
                    {project.name}
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5 tracking-wide">{project.tagline}</p>
                </div>

                <p className="text-white/55 text-sm leading-relaxed line-clamp-2 mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-white/50 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-white/30 font-mono">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/projects/${project.id}`}
                  className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-[#06060f] text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg`}
                  style={{
                    boxShadow: `0 0 20px ${project.glowColor}`,
                  }}
                >
                  View Details
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-white/20 text-xs tracking-wider">
            More projects coming soon · Currently building in public
          </p>
        </div>
      </div>
    </section>
  );
}