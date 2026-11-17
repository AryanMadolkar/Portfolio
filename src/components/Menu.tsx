"use client";

import { useEffect, useState } from "react";
import { menuLinks } from "@/data/portfolio";

export function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 left-5 z-50 sm:hidden">
      {open && (
        <nav
          aria-label="Sections"
          className="mb-2 w-44 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-1.5 shadow-2xl shadow-black/40"
        >
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--row)] hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="rounded-full bg-[var(--invert)] px-4 py-2 text-sm font-medium text-[var(--invert-text)] shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5"
      >
        {open ? "Close" : "Menu"}
      </button>
    </div>
  );
}
