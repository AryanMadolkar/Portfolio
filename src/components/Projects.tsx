"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { TechIcon } from "./TechIcon";

export function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--border-soft)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div data-reveal className="mb-4 flex items-center gap-4">
              <span className="section-label">Selected work</span>
              <span className="section-line" />
            </div>
            <h2
              data-reveal
              className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl"
            >
              Things I&apos;ve built
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            A selection of projects that showcase my range — from AI-powered platforms to
            real-time tools and developer infrastructure.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const isExternal = project.href.startsWith("http");
  const hasLink = project.href !== "#";

  return (
    <motion.div data-reveal className="group flex flex-col">
      <div
        ref={frameRef}
        className="relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[#0d0d10] shadow-xl shadow-black/20 transition-all duration-500 group-hover:border-[var(--border-hover)]"
        onMouseMove={(e) => {
          if (!frameRef.current) return;
          const rect = frameRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          frameRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
        }}
        onMouseLeave={() => {
          if (frameRef.current) frameRef.current.style.transform = "";
        }}
      >
        <BrowserPreview project={project} />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-serif text-xl italic tracking-tight text-[var(--text)] md:text-2xl">
            {project.title.split(" — ")[0]}
          </h3>
          <p className="section-label mt-1.5">{project.label}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--text)]"
            >
              <RepoIcon />
            </a>
          )}
          {hasLink && (
            <a
              href={project.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Open ${project.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--invert)] text-[var(--invert-text)] transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 line-clamp-2 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <TechBadge key={tag} name={tag} />
        ))}
      </div>
    </motion.div>
  );
}

function BrowserPreview({ project }: { project: Project }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#141417] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto hidden w-1/2 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[0.6rem] text-zinc-500 sm:block">
          {project.live ? project.href.replace("https://", "") : `${project.id} · preview`}
        </span>
      </div>

      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      ) : (
        <div
          className={`relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${project.preview.bg} px-6 text-center`}
        >
          <div
            className="pointer-events-none absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: project.preview.glow, opacity: 0.35 }}
          />
          <h4 className="relative z-10 text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            {project.preview.headline}
          </h4>
          <p className="relative z-10 mt-2 text-xs text-zinc-300/80 md:text-sm">
            {project.preview.sub}
          </p>
          <span className="relative z-10 mt-4 rounded-full bg-white/90 px-4 py-1.5 text-[0.65rem] font-semibold text-zinc-950">
            Explore
          </span>
        </div>
      )}
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-2)] transition-transform hover:-translate-y-0.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TechIcon name={name} size={15} />
      {hovered && (
        <span className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border-soft)] bg-[var(--surface-2)] px-2 py-1 text-[0.65rem] text-[var(--text)] shadow-lg">
          {name}
        </span>
      )}
    </span>
  );
}

function RepoIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}
