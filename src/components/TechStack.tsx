"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { TechIcon } from "./TechIcon";

const BASE_SPEED = 0.55;
const VELOCITY_LERP = 0.035;
const SCROLL_IDLE_MS = 200;
const REPETITIONS = 4;

const maskStyle = {
  maskImage:
    "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
  WebkitMaskImage:
    "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
};

function splitIntoRows<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export function TechStack() {
  const [rowOne, rowTwo] = splitIntoRows(siteConfig.techMarquee);

  return (
    <section className="border-t border-[var(--border-soft)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-4 flex items-center gap-4">
          <span className="section-label">Tech stack</span>
          <span className="section-line" />
        </div>
        <h2
          data-reveal
          className="mb-12 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl"
        >
          Tools I work with
        </h2>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const initializedRef = useRef(false);
  const dir = direction === "left" ? -1 : 1;
  const velocityRef = useRef(dir * BASE_SPEED);
  const targetVelocityRef = useRef(dir * BASE_SPEED);
  const lastScrollY = useRef(0);
  const rafRef = useRef<number>(0);
  const scrollIdleRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    initializedRef.current = false;
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (Math.abs(delta) > 1) {
        targetVelocityRef.current =
          delta > 0 ? -dir * BASE_SPEED : dir * BASE_SPEED;
        lastScrollY.current = y;
      }

      clearTimeout(scrollIdleRef.current);
      scrollIdleRef.current = setTimeout(() => {
        targetVelocityRef.current = dir * BASE_SPEED;
      }, SCROLL_IDLE_MS);
    };

    const animate = () => {
      velocityRef.current +=
        (targetVelocityRef.current - velocityRef.current) * VELOCITY_LERP;

      const track = trackRef.current;
      if (track) {
        const segmentWidth = track.scrollWidth / REPETITIONS;

        if (segmentWidth > 0) {
          if (!initializedRef.current) {
            offsetRef.current = dir === 1 ? -segmentWidth : 0;
            initializedRef.current = true;
          }

          offsetRef.current += velocityRef.current;

          if (dir === -1) {
            while (offsetRef.current <= -segmentWidth) {
              offsetRef.current += segmentWidth;
            }
            while (offsetRef.current > 0) {
              offsetRef.current -= segmentWidth;
            }
          } else {
            while (offsetRef.current >= 0) {
              offsetRef.current -= segmentWidth;
            }
            while (offsetRef.current < -segmentWidth) {
              offsetRef.current += segmentWidth;
            }
          }
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollIdleRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [dir]);

  return (
    <div className="relative overflow-hidden pt-8 pb-1" style={maskStyle}>
      <div ref={trackRef} className="flex w-max items-center will-change-transform">
        {Array.from({ length: REPETITIONS }, (_, rep) =>
          items.flatMap((tech, i) => [
            <TechBadge key={`${rep}-${tech}-${i}`} name={tech} />,
            <TechSeparator key={`${rep}-sep-${tech}-${i}`} />,
          ]),
        )}
      </div>
    </div>
  );
}

function TechSeparator() {
  return (
    <div
      aria-hidden
      className="mx-6 h-6 w-0.5 shrink-0 bg-[var(--border-soft)]"
    />
  );
}

function TechBadge({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-2.5 py-1 text-[0.65rem] font-medium text-[var(--text)] shadow-md"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>

      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm transition-transform hover:-translate-y-0.5 hover:border-[var(--border-hover)]">
        <TechIcon name={name} size={24} />
      </div>
    </div>
  );
}
