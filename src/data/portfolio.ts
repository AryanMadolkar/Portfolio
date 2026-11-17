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
  headline: "Building digital experiences.",
  bio: "Specializing in crafting seamless interfaces with TypeScript, Next.js, and GSAP. Driven by a keen eye for design and a passion for interactive aesthetics.",
  bioHighlights: ["TypeScript", "Next.js", "GSAP"],
  about: {
    heading: "Developer with a passion for craft",
    points: [
      {
        lead: "I'm a full-stack developer",
        text: "who turns complex problems into clean, elegant products. From AI-powered SaaS platforms to predictive ML systems, I build things that are powerful and delightful to use.",
      },
      {
        lead: "Right now, I'm exploring AI and developer tooling",
        text: "and building experiences where the technology disappears and the work flows naturally.",
      },
    ],
    stats: [
      { value: "7+", label: "Projects shipped" },
      { value: "10+", label: "Technologies" },
      { value: "3+", label: "Years building" },
    ],
  },
  tech: [
    {
      title: "Language",
      items: ["TypeScript", "Python"],
    },
    {
      title: "Frontend",
      items: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "shadcn/ui",
        "Vite",
        "Motion",
        "GSAP",
        "TanStack Query",
        "Recharts",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "Supabase",
        "Convex",
        "Redis",
        "BullMQ",
        "Auth.js",
        "Clerk",
      ],
    },
    {
      title: "AI",
      items: ["OpenAI", "Gemini", "XGBoost", "scikit-learn"],
    },
    {
      title: "Tools",
      items: ["Zod", "React Hook Form", "Razorpay", "Vercel", "GitHub"],
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  label: string;
  summary: string;
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
    title: "Thrive",
    label: "Full Stack Developer",
    summary: "A social platform for personal journeys",
    description:
      "Document a journey, share progress, and follow other people building in public. Discover, timelines, and profiles on Next.js and Postgres.",
    href: "https://thriveapp-psi.vercel.app",
    repo: "https://github.com/AryanMadolkar/Thrive",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    accent: "from-amber-500/20",
    live: true,
    preview: {
      headline: "Document the journey.",
      sub: "Share progress. Inspire someone.",
      bg: "from-[#2a2114] via-[#1a140e] to-[#0c0a08]",
      glow: "rgba(232,180,90,0.45)",
    },
  },
  {
    id: "02",
    title: "Dockflow Pro",
    label: "Full Stack Developer",
    summary: "Port tasks and dock operations",
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
    id: "03",
    title: "Podcastr — AI Podcast Platform",
    label: "Full Stack Developer",
    summary: "AI podcasts with multi-voice audio",
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
    id: "04",
    title: "Beacon",
    label: "Full Stack / ML Engineer",
    summary: "ML scores for package health",
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
    id: "05",
    title: "Leaf — A Home for Book Lovers",
    label: "Full Stack Developer",
    summary: "A home for book lovers",
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
    id: "06",
    title: "double-pivot — Football Alternate History",
    label: "Full Stack Developer",
    summary: "Football alternate-history simulator",
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
  handle: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AryanMadolkar", handle: "@AryanMadolkar" },
  { label: "Twitter", href: "https://x.com/aryanmadolkar10", handle: "@aryanmadolkar10" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aryanmadolkar", handle: "aryanmadolkar" },
  { label: "Email", href: "mailto:madolkararyan16@gmail.com", handle: "madolkararyan16@gmail.com" },
];

export const menuLinks = [
  { label: "Intro", href: "#intro" },
  { label: "Work", href: "#work" },
  { label: "Socials", href: "#socials" },
  { label: "Stack", href: "#stack" },
  { label: "Bookshelf", href: "#bookshelf" },
  { label: "About", href: "#about" },
  { label: "Activity", href: "#activity" },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: { src: string; width: number; height: number; alt: string };
  spine: { src: string; width: number; height: number };
};

const cover = (id: string, width: number, height: number, alt: string) => ({
  src: `/images/books/${id}-cover.jpg?v=1`,
  width,
  height,
  alt,
});

const spine = (id: string, width: number, height: number) => ({
  src: `/images/books/${id}-spine.svg?v=8`,
  width,
  height,
});

export const books: Book[] = [
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    cover: cover("dune", 331, 500, "Dune by Frank Herbert"),
    spine: spine("dune", 40, 312),
  },
  {
    id: "shoe-dog",
    title: "Shoe Dog",
    author: "Phil Knight",
    cover: cover("shoe-dog", 331, 500, "Shoe Dog by Phil Knight"),
    spine: spine("shoe-dog", 46, 308),
  },
  {
    id: "greenlights",
    title: "Greenlights",
    author: "Matthew McConaughey",
    cover: cover("greenlights", 318, 457, "Greenlights by Matthew McConaughey"),
    spine: spine("greenlights", 42, 304),
  },
  {
    id: "ove",
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    cover: cover("ove", 322, 500, "A Man Called Ove by Fredrik Backman"),
    spine: spine("ove", 36, 292),
  },
  {
    id: "morrie",
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    cover: cover("morrie", 342, 500, "Tuesdays with Morrie by Mitch Albom"),
    spine: spine("morrie", 38, 300),
  },
  {
    id: "psycho",
    title: "Psycho-Cybernetics",
    author: "Maxwell Maltz",
    cover: cover("psycho", 297, 475, "Psycho-Cybernetics by Maxwell Maltz"),
    spine: spine("psycho", 34, 304),
  },
  {
    id: "genius-makers",
    title: "Genius Makers",
    author: "Cade Metz",
    cover: cover("genius-makers", 331, 500, "Genius Makers by Cade Metz"),
    spine: spine("genius-makers", 42, 294),
  },
  {
    id: "book-of-elon",
    title: "The Book of Elon",
    author: "Eric Jorgenson",
    cover: cover("book-of-elon", 700, 1082, "The Book of Elon by Eric Jorgenson"),
    spine: spine("book-of-elon", 36, 306),
  },
  {
    id: "steve-jobs",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: cover("steve-jobs", 295, 445, "Steve Jobs by Walter Isaacson"),
    spine: spine("steve-jobs", 36, 310),
  },
  {
    id: "rich-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: cover("rich-dad", 333, 500, "Rich Dad Poor Dad by Robert Kiyosaki"),
    spine: spine("rich-dad", 50, 300),
  },
];
