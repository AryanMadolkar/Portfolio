import type { IconType } from "react-icons";
import {
  SiClerk,
  SiExpress,
  SiFramer,
  SiGooglegemini,
  SiGreensock,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRazorpay,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiScikitlearn,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FiBox, FiBarChart2, FiCpu, FiDatabase, FiKey } from "react-icons/fi";

type TechMeta = { icon: IconType; color: string };

const TECH: Record<string, TechMeta> = {
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "shadcn/ui": { icon: SiShadcnui, color: "#FFFFFF" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Motion: { icon: SiFramer, color: "#FFFFFF" },
  GSAP: { icon: SiGreensock, color: "#88CE02" },
  "TanStack Query": { icon: SiReactquery, color: "#FF4154" },
  Recharts: { icon: FiBarChart2, color: "#A1A1AA" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  Prisma: { icon: SiPrisma, color: "#5A67D8" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Neon: { icon: FiDatabase, color: "#00E599" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Convex: { icon: FiDatabase, color: "#EE342F" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  BullMQ: { icon: FiBox, color: "#E11D48" },
  "Auth.js": { icon: FiKey, color: "#A1A1AA" },
  Clerk: { icon: SiClerk, color: "#6C47FF" },
  OpenAI: { icon: SiOpenai, color: "#FFFFFF" },
  Gemini: { icon: SiGooglegemini, color: "#8E75FF" },
  XGBoost: { icon: FiCpu, color: "#A1A1AA" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Zod: { icon: SiZod, color: "#3E67B1" },
  "React Hook Form": { icon: SiReacthookform, color: "#EC5990" },
  Razorpay: { icon: SiRazorpay, color: "#3395FF" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  GitHub: { icon: FaGithub, color: "#FFFFFF" },
};

const FALLBACK: TechMeta = { icon: FiBox, color: "#A1A1AA" };

export function getTech(name: string): TechMeta {
  return TECH[name] ?? FALLBACK;
}

export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const { icon: Icon, color } = getTech(name);
  return <Icon size={size} style={{ color }} aria-label={name} />;
}
