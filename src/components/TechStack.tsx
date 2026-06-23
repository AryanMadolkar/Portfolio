"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { TechIcon } from "./TechIcon";

const BASE_SPEED = 0.55;
const VELOCITY_LERP = 0.035;
const SCROLL_IDLE_MS = 200;

export function TechStack() {
  const row = [...siteConfig.techMarquee, ...siteConfig.techMarquee];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(-BASE_SPEED);
  const targetVelocityRef = useRef(-BASE_SPEED);
  const lastScrollY = useRef(0);
  const rafRef = useRef<number>(0);
  const scrollIdleRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (Math.abs(delta) > 1) {
        targetVelocityRef.current = delta > 0 ? -BASE_SPEED : BASE_SPEED;
        lastScrollY.current = y;
      }

      clearTimeout(scrollIdleRef.current);
      scrollIdleRef.current = setTimeout(() => {
        targetVelocityRef.current = -BASE_SPEED;
      }, SCROLL_IDLE_MS);
    };

    const animate = () => {
      velocityRef.current +=
        (targetVelocityRef.current - velocityRef.current) * VELOCITY_LERP;

      offsetRef.current += velocityRef.current;

      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          while (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
          while (offsetRef.current > 0) offsetRef.current -= halfWidth;
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
  }, []);

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

      <div
        className="relative mx-auto max-w-6xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex w-max gap-3 will-change-transform">
          {row.map((tech, i) => (
            <TechBadge key={`${tech}-${i}`} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechBadge({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm transition-transform hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TechIcon name={name} size={24} />
      {hovered && (
        <span className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border-soft)] bg-[var(--surface)] px-2 py-1 text-[0.65rem] font-medium text-[var(--text)] shadow-lg">
          {name}
        </span>
      )}
    </div>
  );
}
