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
};

export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <section id="activity" className="section-block">
      <h2 className="section-heading">Activity</h2>
      {data && (
        <p className="mb-4 text-sm text-[var(--text-muted)]">
          <span className="font-medium text-[var(--text)]">{data.contributionsLastYear}</span>{" "}
          contributions in the last year
        </p>
      )}

      {error && (
        <p className="text-sm text-[var(--text-muted)]">
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
        <p className="text-sm text-[var(--text-dim)]">Loading contributions…</p>
      )}

      {data && (
        <>
          <div className="activity-fit w-full">
            <ActivityCalendar
              data={data.contributions}
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              showWeekdayLabels={false}
              showTotalCount={false}
              style={{ color: "var(--text-muted)" }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
          <p className="mt-3 text-xs text-[var(--text-dim)]">
            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--text)]"
            >
              @{data.username}
            </a>
            {!data.includesPrivate && <span> · Public activity only</span>}
          </p>
        </>
      )}
    </section>
  );
}
