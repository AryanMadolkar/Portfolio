import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="section-block">
      <h2 className="section-heading">Work</h2>
      <ul>
        {projects.map((project) => {
          const title = project.title.split(" — ")[0];
          const external = project.href.startsWith("http");
          return (
            <li key={project.id}>
              <a
                href={project.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative flex min-h-11 items-center gap-3 overflow-hidden rounded-md px-2 py-2 text-sm transition-colors hover:bg-[var(--row)]"
              >
                <span className="blueprint-bg pointer-events-none absolute inset-0" />
                <span className="relative min-w-0 flex-1 truncate">
                  <span className="font-medium text-[var(--text)]">{title}</span>
                  <span className="ml-3 font-normal text-[var(--text-muted)]">{project.summary}</span>
                </span>
                {project.live && (
                  <span className="live-badge relative shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wide uppercase">
                    live
                  </span>
                )}
                <ArrowIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="relative size-3.5 shrink-0 text-[var(--text-dim)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M7 17 17 7" strokeLinecap="round" />
      <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
