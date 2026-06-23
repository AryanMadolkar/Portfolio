"use client";

import { socialLinks } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--border-soft)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div data-reveal className="mb-6">
          <span className="section-label">Contact</span>
        </div>

        <h2
          data-reveal
          className="mb-14 text-3xl font-medium leading-snug tracking-tight text-[var(--text)] md:text-4xl lg:text-[2.75rem]"
        >
          Let&apos;s build something{" "}
          <span className="font-serif italic">extraordinary</span> together.
        </h2>

        <div data-reveal>
          <p className="section-label mb-4">Social links</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text)]"
              >
                <SocialIcon label={link.label} size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
