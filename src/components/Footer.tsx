import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <span className="font-mono text-xs tracking-wider text-[var(--text-dim)]">
          © {new Date().getFullYear()} {siteConfig.name}.
        </span>
        <span className="font-mono text-xs tracking-wider text-[var(--text-dim)]">
          Built with Next.js, Tailwind & Motion.
        </span>
      </div>
    </footer>
  );
}
