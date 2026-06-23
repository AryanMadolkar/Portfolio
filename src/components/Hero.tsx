"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[var(--border-soft)] md:aspect-[21/8] md:rounded-3xl">
            <Image
              src="/hero-banner.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/20 to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-end gap-4 md:left-8 md:gap-6">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-[var(--bg)] md:h-28 md:w-28">
              <Image
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {siteConfig.available && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-3 right-0 hidden items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="section-label text-[0.62rem]">Available for work</span>
            </motion.div>
          )}
        </motion.div>

        <div className="mb-8 mt-10 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <h1 className="font-serif text-3xl tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
              {siteConfig.name}
            </h1>
            <VerifiedBadge />
            <span className="text-sm text-[var(--text-dim)] md:text-base">{siteConfig.location}</span>
          </motion.div>

          {siteConfig.available && (
            <div className="mb-6 flex items-center gap-2 sm:hidden">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="section-label text-[0.62rem]">Available for work</span>
            </div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="font-serif italic text-[var(--text-muted)]">
              {siteConfig.tagline.italic}
            </span>{" "}
            <span className="text-[var(--text)]">{siteConfig.tagline.bold}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-sm text-[var(--text-muted)] md:text-base">
              Currently{" "}
              <span className="font-medium text-[var(--text)]">{siteConfig.role}</span>
              {siteConfig.company && (
                <>
                  {" "}
                  at{" "}
                  <span className="border-b border-dotted border-[var(--text-dim)] text-[var(--text)]">
                    {siteConfig.company}
                  </span>
                </>
              )}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-[0.95rem]">
              <BioText />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BioText() {
  const parts = siteConfig.bio.split(
    new RegExp(`(${siteConfig.bioHighlights.join("|")})`, "g")
  );

  return (
    <>
      {parts.map((part, i) =>
        siteConfig.bioHighlights.includes(part) ? (
          <span key={i} className="font-medium text-[var(--text)]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function VerifiedBadge() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Verified">
      <circle cx="12" cy="12" r="10" fill="#3B82F6" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
