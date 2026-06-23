"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { siteConfig } from "@/data/portfolio";

type Activity = {
  date: string;
  count: number;
  level: number;
};

type GitHubData = {
  username: string;
  contributionsLastYear: number;
  profileUrl: string;
  contributions: Activity[];
  includesPrivate: boolean;
};

const calendarTheme = {
  dark: ["#161618", "#1a2e1f", "#245a38", "#3d8f5c", "#4ade80"],
  light: ["#e4e4e7", "#bbf7d0", "#86efac", "#4ade80", "#15803d"],
};

export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));

    setIsLight(document.documentElement.classList.contains("light"));

    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-[var(--border-soft)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <div data-reveal className="mb-4 flex items-center justify-center gap-4">
          <span className="section-label">Activity</span>
          <span className="section-line" />
        </div>

        <div data-reveal className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
            GitHub contributions
          </h2>
          {data && (
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              <span className="font-medium text-[var(--text)]">
                {data.contributionsLastYear}
              </span>{" "}
              contributions in the last year
            </p>
          )}
        </div>

        <div
          data-reveal
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8"
        >
          {error && (
            <p className="text-center text-sm text-[var(--text-muted)]">
              Could not load contributions.{" "}
              <a
                href={`https://github.com/${siteConfig.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] underline"
              >
                View on GitHub
              </a>
            </p>
          )}

          {!error && !data && (
            <div className="flex h-32 items-center justify-center text-sm text-[var(--text-dim)]">
              Loading contributions…
            </div>
          )}

          {data && (
            <>
              <div className="flex justify-center overflow-hidden">
                <ActivityCalendar
                  data={data.contributions}
                  colorScheme={isLight ? "light" : "dark"}
                  theme={calendarTheme}
                  blockSize={10}
                  blockMargin={3}
                  fontSize={12}
                  showTotalCount={false}
                  style={{ color: "var(--text-muted)", maxWidth: "100%" }}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              </div>
              <p className="mt-4 text-center text-xs text-[var(--text-dim)]">
                <a
                  href={data.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--text)]"
                >
                  @{data.username}
                </a>
                {!data.includesPrivate && (
                  <>
                    {" · "}
                    <span>Public activity only</span>
                  </>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
