"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiOpenai,
  SiVercel,
  SiVite,
  SiThreedotjs,
  SiClerk,
} from "react-icons/si";
import { FiBox, FiBarChart2, FiActivity, FiCpu, FiDatabase } from "react-icons/fi";

type TechMeta = { icon: IconType; color: string; lightColor?: string };

const TECH: Record<string, TechMeta> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E", lightColor: "#CA8A04" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF", lightColor: "#171717" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8", lightColor: "#0284C7" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E", lightColor: "#059669" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Prisma: { icon: SiPrisma, color: "#5A67D8" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  OpenAI: { icon: SiOpenai, color: "#FFFFFF", lightColor: "#171717" },
  Vercel: { icon: SiVercel, color: "#FFFFFF", lightColor: "#171717" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "Three.js": { icon: SiThreedotjs, color: "#FFFFFF", lightColor: "#171717" },
  Clerk: { icon: SiClerk, color: "#6C47FF" },
  Convex: { icon: FiDatabase, color: "#EE342F" },
  XGBoost: { icon: FiCpu, color: "#A1A1AA", lightColor: "#52525B" },
  BullMQ: { icon: FiBox, color: "#A1A1AA", lightColor: "#52525B" },
  "Data Viz": { icon: FiBarChart2, color: "#A1A1AA", lightColor: "#52525B" },
  Dashboard: { icon: FiBarChart2, color: "#A1A1AA", lightColor: "#52525B" },
  "Live Stats": { icon: FiActivity, color: "#A1A1AA", lightColor: "#52525B" },
  Predictions: { icon: FiActivity, color: "#A1A1AA", lightColor: "#52525B" },
};

const FALLBACK: TechMeta = { icon: FiBox, color: "#A1A1AA", lightColor: "#52525B" };

export function getTech(name: string): TechMeta {
  return TECH[name] ?? FALLBACK;
}

export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () => setIsLight(document.documentElement.classList.contains("light"));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const { icon: Icon, color, lightColor } = getTech(name);
  const resolvedColor = isLight && lightColor ? lightColor : color;

  return <Icon size={size} style={{ color: resolvedColor }} aria-label={name} />;
}
