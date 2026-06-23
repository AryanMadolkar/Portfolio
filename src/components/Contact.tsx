"use client";

import { contactActions, socialLinks } from "@/data/portfolio";
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

        <div data-reveal className="mb-10">
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

        <div
          data-reveal
          className="grid gap-8 sm:grid-cols-3"
        >
          {contactActions.map((action) => (
            <div key={action.category}>
              <p className="section-label mb-3">{action.category}</p>
              <a
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text)]"
              >
                <ActionIcon type={action.icon} />
                {action.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionIcon({ type }: { type: "calendar" | "resume" | "whatsapp" }) {
  if (type === "calendar") {
    return (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }

  if (type === "resume") {
    return (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  }

  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
