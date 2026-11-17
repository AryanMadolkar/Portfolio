"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";

export function About() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section id="about" className="section-block">
      <h2 className="mb-4 font-serif text-3xl italic tracking-tight text-[var(--text)] sm:text-4xl">
        {greeting} !
      </h2>
      <ul className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
        {siteConfig.about.points.map((point) => (
          <li key={point.lead} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-dim)]" aria-hidden />
            <p>
              <span className="font-medium text-[var(--text)]">{point.lead}</span> {point.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
