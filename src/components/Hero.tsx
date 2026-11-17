"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { ProfileBanner } from "./ProfileBanner";
import { VerseText } from "./VerseText";

const peace = (
  <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
    <text x="4" y="50" fontSize="46">
      ✌️
    </text>
  </svg>
);

export function Hero() {
  const place = siteConfig.location.replace(/^Based in\s+/i, "");

  return (
    <section id="intro" className="scroll-mt-20 pb-2">
      <ProfileBanner />

      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <h1 className="flex min-w-0 items-center text-xl font-normal tracking-wide text-[var(--text)] sm:text-2xl">
          <VerseText
            text={siteConfig.name}
            className="font-serif"
            style={
              {
                "--vt-ink": "var(--text)",
                "--vt-blend": "var(--verse-text-blend, screen)",
                "--vt-leading": "1.1",
                "--vt-key": "var(--bg)",
              } as CSSProperties
            }
          />
        </h1>
        <StickerButton label="Animate the peace sticker" rest={0} className="inline-flex">
          {peace}
        </StickerButton>
        <span className="hidden size-1.5 rounded-full bg-[var(--text-dim)] sm:inline-block" aria-hidden />
        <p className="text-sm text-[var(--text-muted)]">{place}</p>
      </div>

      <p className="mt-4 text-[0.95rem] font-medium text-[var(--text)]">{siteConfig.headline}</p>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
        <BioText />
      </p>
    </section>
  );
}

function StickerButton({
  label,
  className,
  rest,
  fly = false,
  children,
}: {
  label: string;
  className?: string;
  rest: number;
  fly?: boolean;
  children: ReactNode;
}) {
  const controls = useAnimation();

  return (
    <motion.button
      type="button"
      aria-label={label}
      className={`cursor-pointer ${className ?? ""}`}
      initial={{ rotate: rest }}
      animate={controls}
      whileHover={{ scale: 1.04, rotate: rest + 2 }}
      onClick={() => {
        void controls.start({
          rotate: [rest, rest + (fly ? 16 : 10), rest - 8, rest],
          x: fly ? [0, 18, 0] : 0,
          y: [0, fly ? -22 : -12, 0],
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }}
    >
      {children}
    </motion.button>
  );
}

function BioText() {
  const parts = siteConfig.bio.split(new RegExp(`(${siteConfig.bioHighlights.join("|")})`, "g"));

  return (
    <>
      {parts.map((part, index) =>
        siteConfig.bioHighlights.includes(part) ? (
          <span key={index} className="font-medium text-[var(--text)]">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}
