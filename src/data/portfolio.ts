export const siteConfig = {
  name: "Aryan Madolkar",
  title: "Aryan Madolkar — Full Stack Developer",
  description:
    "Full stack developer building scalable products with React, TypeScript, Node.js, and modern cloud infrastructure.",
  location: "Based in India",
  available: true,
  role: "Full Stack Developer",
  github: "AryanMadolkar",
  avatarUrl: "https://avatars.githubusercontent.com/u/136626566?v=4",
  company: null,
  tagline: {
    italic: "Building",
    bold: "Digital Experiences.",
  },
  bio: "Specializing in crafting seamless interfaces with TypeScript, Next.js, and GSAP. Driven by a keen eye for design and a passion for interactive aesthetics.",
  bioHighlights: ["TypeScript", "Next.js", "GSAP"],
  about: {
    heading: "Developer with a passion for craft",
    paragraphs: [
      "I'm a full-stack developer who turns complex problems into clean, elegant products. From AI-powered SaaS platforms to predictive ML systems, I build things that are powerful and delightful to use.",
      "Currently exploring the intersection of AI and developer tooling — building experiences where the technology disappears and the work flows naturally.",
    ],
    stats: [
      { value: "7+", label: "Projects shipped" },
      { value: "10+", label: "Technologies" },
      { value: "3+", label: "Years building" },
    ],
  },
  tech: [
    {
      title: "Languages & Frameworks",
      items: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
    },
    {
      title: "Styling & UI",
      items: ["Tailwind CSS", "ShadCN", "Vite", "Three.js"],
    },
    {
      title: "Data & Backend",
      items: ["PostgreSQL", "Supabase", "Convex", "Redis", "BullMQ", "Prisma"],
    },
    {
      title: "Tools & Infrastructure",
      items: ["Docker", "GitHub Apps", "Clerk", "OpenAI", "XGBoost", "Vercel"],
    },
  ],
  techMarquee: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Convex",
    "Redis",
    "Prisma",
    "Docker",
    "OpenAI",
    "Vercel",
  ],
};

export type Project = {
  id: string;
  title: string;
  label: string;
  description: string;
  href: string;
  repo?: string;
  tags: string[];
  accent: string;
  image?: string;
  preview: {
    headline: string;
    sub: string;
    bg: string;
    glow: string;
  };
  live?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Dockflow Pro",
    label: "Full Stack Developer",
    description:
      "A platform for docks to add and remove tasks and manage port operations — keeping workflows organized and ports running smoothly.",
    href: "https://github.com/AryanMadolkar/Dockflow-Pro",
    repo: "https://github.com/AryanMadolkar/Dockflow-Pro",
    tags: ["React", "TypeScript", "Vite"],
    accent: "from-blue-500/20",
    image: "/projects/dockflow-pro.png",
    preview: {
      headline: "Manage Your Port.",
      sub: "Add tasks, remove tasks, stay in control.",
      bg: "from-[#0b1a33] via-[#0a1322] to-[#070b14]",
      glow: "rgba(59,130,246,0.5)",
    },
  },
  {
    id: "02",
    title: "Podcastr — AI Podcast Platform",
    label: "Full Stack Developer",
    description:
      "AI SaaS platform for creating and discovering podcasts with text-to-audio synthesis, multi-voice AI generation, and AI thumbnail creation.",
    href: "https://github.com/AryanMadolkar/podcastr",
    repo: "https://github.com/AryanMadolkar/podcastr",
    tags: ["Next.js", "OpenAI", "Convex", "Clerk"],
    accent: "from-purple-500/20",
    image: "/projects/podcastr.png",
    preview: {
      headline: "Create AI Podcasts.",
      sub: "Multi-voice. One click.",
      bg: "from-[#1d1033] via-[#150b26] to-[#0a0714]",
      glow: "rgba(168,85,247,0.5)",
    },
  },
  {
    id: "03",
    title: "Beacon",
    label: "Full Stack / ML Engineer",
    description:
      "Predictive dependency health platform that scans GitHub repos and uses XGBoost ML to score packages 0–100.",
    href: "https://github.com/aryanpachori/Beacon",
    repo: "https://github.com/aryanpachori/Beacon",
    tags: ["Node.js", "Python", "XGBoost", "BullMQ", "PostgreSQL"],
    accent: "from-indigo-500/20",
    image: "/projects/beacon.png",
    preview: {
      headline: "Beacon.",
      sub: "ML-scored package health.",
      bg: "from-[#141436] via-[#0e0e26] to-[#080814]",
      glow: "rgba(99,102,241,0.5)",
    },
  },
  {
    id: "04",
    title: "Leaf — A Home for Book Lovers",
    label: "Full Stack Developer",
    description:
      "A community platform for readers. Book discovery, social shelves, and a clean reading-first UI built on Next.js and Supabase.",
    href: "https://leaf-peach.vercel.app",
    repo: "https://github.com/AryanMadolkar",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    accent: "from-emerald-500/20",
    live: true,
    image: "/projects/leaf.png",
    preview: {
      headline: "A Home for Book Lovers.",
      sub: "Discover. Shelve. Read.",
      bg: "from-[#0a2620] via-[#081a16] to-[#05100d]",
      glow: "rgba(52,211,153,0.5)",
    },
  },
  {
    id: "05",
    title: "UniTrack — Admissions Compass",
    label: "Frontend Developer",
    description:
      "University admissions requirements tracker. Compare entry criteria, deadlines, and eligibility across institutions.",
    href: "#",
    tags: ["React", "Dashboard", "Data Viz"],
    accent: "from-cyan-500/20",
    image: "/projects/unitrack.png",
    preview: {
      headline: "Your Admissions Compass.",
      sub: "Compare every requirement.",
      bg: "from-[#072730] via-[#061b22] to-[#041013]",
      glow: "rgba(34,211,238,0.5)",
    },
  },
  {
    id: "06",
    title: "double-pivot — Football Alternate History",
    label: "Full Stack Developer",
    description:
      "Football intelligence platform for simulating alternate histories. Change a transfer, run seasons forward, and watch trophies, dynasties, and Ballon d'Ors unfold differently.",
    href: "https://double-pivot.vercel.app",
    repo: "https://github.com/AryanMadolkar/double-pivot",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    accent: "from-green-500/20",
    live: true,
    image: "/projects/double-pivot.png",
    preview: {
      headline: "Rewrite Football History.",
      sub: "One decision. A thousand timelines.",
      bg: "from-[#0c1a10] via-[#08140c] to-[#040a06]",
      glow: "rgba(74,222,128,0.5)",
    },
  },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AryanMadolkar" },
  { label: "Twitter", href: "https://x.com/aryanmadolkar10" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aryanmadolkar" },
  { label: "Email", href: "mailto:madolkararyan16@gmail.com" },
];

export const navSocials: SocialLink[] = [
  { label: "Twitter", href: "https://x.com/aryanmadolkar10" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aryanmadolkar" },
  { label: "GitHub", href: "https://github.com/AryanMadolkar" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
];
