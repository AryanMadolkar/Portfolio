import { socialLinks } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

const labels: Record<string, string> = {
  Twitter: "X",
};

export function Socials() {
  return (
    <section id="socials" className="section-block">
      <h2 className="section-heading">Socials</h2>
      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-dashed border-[var(--border-soft)] sm:grid-cols-2">
        {socialLinks.map((link, index) => {
          const external = link.href.startsWith("http");
          const lastRowStart = socialLinks.length - (socialLinks.length % 2 || 2);
          return (
            <a
              key={link.label}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`group relative flex items-center gap-3 overflow-hidden p-4 transition-colors hover:bg-[var(--row)] ${
                index % 2 === 0 ? "sm:border-r sm:border-dashed sm:border-[var(--border-soft)]" : ""
              } ${index < socialLinks.length - 1 ? "border-b border-dashed border-[var(--border-soft)]" : ""} ${
                index >= lastRowStart ? "sm:border-b-0" : ""
              }`}
            >
              <span className="blueprint-bg pointer-events-none absolute inset-0" />
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg)] text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                <SocialIcon label={link.label} size={16} />
              </span>
              <span className="relative min-w-0">
                <span className="block text-sm font-medium leading-none text-[var(--text)]">
                  {labels[link.label] ?? link.label}
                </span>
                <span className="mt-1 block truncate font-mono text-xs text-[var(--text-muted)]">
                  {link.handle}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
