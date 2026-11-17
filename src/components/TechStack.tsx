import { siteConfig } from "@/data/portfolio";
import { TechIcon } from "./TechIcon";

export function TechStack() {
  return (
    <section id="stack" className="section-block">
      <h2 className="section-heading">Stack</h2>
      <div className="flex flex-col">
        {siteConfig.tech.map((group, index) => (
          <div
            key={group.title}
            className="flex flex-col gap-3 border-t border-dashed border-[var(--border-soft)] py-4 sm:flex-row sm:items-start sm:gap-6"
          >
            <p className="flex w-32 shrink-0 items-baseline gap-2 pt-1 text-sm text-[var(--text-dim)]">
              <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
              <span>{group.title}</span>
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((name) => (
                <li key={name}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[var(--border-soft)] px-2.5 py-1 text-sm text-[var(--text)]">
                    <TechIcon name={name} size={14} />
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
