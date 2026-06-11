"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../components/sections/Projects"; 

// ── Icons ──────────────────────────────────────────────────────────────────
const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ── Info Card ──────────────────────────────────────────────────────────────
function InfoCard({ icon, title, children, accentColor }) {
  return (
    <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-6 overflow-hidden group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 0% 0%, ${accentColor}10, transparent 70%)`,
        }}
      />
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${accentColor}20`, color: accentColor }}
        >
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest">{title}</h3>
      </div>
      <div className="text-white/55 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function ProjectDetail({ params }) {
  // Unwrapping params using React.use() for Next.js 15 compatibility
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  // Finding the specific project from the data array
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  const glowRgb = project.glowColor;

  return (
    <main className="min-h-screen bg-[#06060f] relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: `${glowRgb}` }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors duration-200 mb-10 group"
        >
          <BackIcon />
          <span className="group-hover:-translate-x-0.5 transition-transform duration-200">Back to Projects</span>
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-white/[0.07] mb-10">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#06060f] via-[#06060f]/20 to-transparent" />

          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6">
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/10 bg-[#06060f]/60 backdrop-blur-sm bg-linear-to-r ${project.color} bg-clip-text text-transparent`}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Title + Links row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <h1
              className={`text-4xl md:text-5xl font-extrabold bg-linear-to-r ${project.color} bg-clip-text text-transparent leading-tight`}
            >
              {project.name}
            </h1>
            <p className="text-white/40 text-sm mt-2 tracking-wide">{project.tagline}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r ${project.color} text-[#06060f] text-sm font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.03]`}
            >
              <ExternalIcon />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/60 text-sm font-medium transition-all duration-300 hover:border-white/[0.2] hover:text-white/90 hover:bg-white/[0.06]"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 mb-6">
          <p className="text-white/65 leading-relaxed text-base">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 mb-6">
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-mono border border-white/[0.08] bg-white/[0.03] bg-linear-to-r ${project.color} bg-clip-text text-transparent`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <InfoCard
            icon={<LightningIcon />}
            title="Challenges Faced"
            accentColor="#f59e0b"
          >
            {project.challenges}
          </InfoCard>
          <InfoCard
            icon={<TargetIcon />}
            title="Future Improvements"
            accentColor="#8b5cf6"
          >
            {project.improvements}
          </InfoCard>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.05]">
          <Link
            href="/#projects"
            
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors duration-200"
          >
            <BackIcon />
            All Projects
          </Link>
          <div className="flex gap-2">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  p.id === project.id
                    ? `bg-linear-to-r ${project.color} scale-125`
                    : "bg-white/20 hover:bg-white/40"
                }`}
                title={p.name}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}