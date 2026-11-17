"use client";

import { useEffect, useState } from "react";
import { menuLinks } from "@/data/portfolio";

const SCALES = [1, 0.78, 0.62, 0.48];

export function SectionRail() {
  const [active, setActive] = useState(menuLinks[0]?.href.slice(1) ?? "");

  useEffect(() => {
    const ids = menuLinks.map((link) => link.href.slice(1));
    const visible = new Map<string, number>();

    const pick = () => {
      const center = window.innerHeight * 0.38;
      let best = "";
      let bestDistance = Number.POSITIVE_INFINITY;
      for (const [id, top] of visible) {
        const distance = Math.abs(top - center);
        if (distance < bestDistance) {
          best = id;
          bestDistance = distance;
        }
      }
      if (best) setActive(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        pick();
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    const onScroll = () => {
      const remaining = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      if (remaining < 8) setActive(ids[ids.length - 1]);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeIndex = Math.max(
    0,
    menuLinks.findIndex((link) => link.href === `#${active}`),
  );

  return (
    <nav aria-label="Sections" className="fixed top-1/2 left-3 z-30 hidden -translate-y-1/2 flex-col sm:flex">
      <span aria-hidden className="absolute inset-y-1 left-0 border-l border-dashed border-[var(--border-soft)]" />
      {menuLinks.map((link, index) => {
        const id = link.href.slice(1);
        const isActive = id === active;
        const distance = Math.abs(activeIndex - index);
        const scale = SCALES[Math.min(distance, SCALES.length - 1)];
        return (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            aria-current={isActive ? "location" : undefined}
            className="group relative flex h-3.5 w-14 items-center"
          >
            <span
              className={`block h-0.5 w-full origin-left rounded-full transition-all duration-300 ${
                isActive ? "bg-[var(--text)]" : "bg-[var(--text-dim)]/45 group-hover:bg-[var(--text-muted)]"
              }`}
              style={{ transform: `scaleX(${scale})` }}
            />
            <span className="pointer-events-none absolute left-16 rounded-md border border-[var(--border-soft)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
