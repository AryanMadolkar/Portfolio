import { NextResponse } from "next/server";

export const revalidate = 3600;

type ContributionDay = { date: string; count: number; level: number };

async function fetchPublicContributions(username: string) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return { total: 0, contributions: [] as ContributionDay[] };

  const data = await res.json();
  const contributions: ContributionDay[] = data.contributions ?? [];
  const total =
    data.total?.lastYear ??
    contributions.reduce((sum: number, day: ContributionDay) => sum + day.count, 0);

  return { total, contributions };
}

async function fetchAuthenticatedContributions(token: string) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  contributionLevel
                }
              }
            }
          }
        }
      }`,
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  const json = await res.json();

  if (json.errors?.length) {
    console.error("GitHub GraphQL errors:", json.errors);
    return null;
  }

  const calendar = json?.data?.viewer?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  const contributions: ContributionDay[] = calendar.weeks.flatMap(
    (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: number }[] }) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: day.contributionLevel,
      }))
  );

  return {
    total: calendar.totalContributions as number,
    contributions,
  };
}

export async function GET() {
  const username = "AryanMadolkar";
  const token = process.env.GITHUB_TOKEN;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub user" }, { status: 502 });
    }

    const user = await userRes.json();

    const authContrib = token ? await fetchAuthenticatedContributions(token) : null;
    const contrib = authContrib ?? (await fetchPublicContributions(username));

    return NextResponse.json({
      username: user.login,
      name: user.name,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      contributionsLastYear: contrib.total,
      contributions: contrib.contributions.map((day) => ({
        date: day.date,
        count: day.count,
        level: Math.min(4, Math.max(0, day.level)) as 0 | 1 | 2 | 3 | 4,
      })),
      includesPrivate: Boolean(authContrib),
    });
  } catch {
    return NextResponse.json({ error: "GitHub fetch failed" }, { status: 500 });
  }
}
