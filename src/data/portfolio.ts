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
  src: `/images/books/${id}-cover.jpg?v=2`,
  width,
  height,
  alt,
});

const spine = (id: string, width: number, height: number) => ({
  src: `/images/books/${id}-spine.svg?v=10`,
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
  {
    id: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    cover: cover("normal-people", 325, 500, "Normal People by Sally Rooney"),
    spine: spine("normal-people", 34, 304),
  },
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    cover: cover("1984", 311, 500, "1984 by George Orwell"),
    spine: spine("1984", 40, 310),
  },
  {
    id: "butter",
    title: "Butter",
    author: "Asako Yuzuki",
    cover: cover("butter", 328, 500, "Butter by Asako Yuzuki"),
    spine: spine("butter", 38, 296),
  },
  {
    id: "kafka-shore",
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    cover: cover("kafka-shore", 332, 500, "Kafka on the Shore by Haruki Murakami"),
    spine: spine("kafka-shore", 36, 300),
  },
  {
    id: "hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: cover("hail-mary", 265, 400, "Project Hail Mary by Andy Weir"),
    spine: spine("hail-mary", 42, 308),
  },
  {
    id: "orient-express",
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    cover: cover("orient-express", 287, 500, "Murder on the Orient Express by Agatha Christie"),
    spine: spine("orient-express", 34, 294),
  },
  {
    id: "then-none",
    title: "And Then There Were None",
    author: "Agatha Christie",
    cover: cover("then-none", 326, 500, "And Then There Were None by Agatha Christie"),
    spine: spine("then-none", 36, 302),
  },
  {
    id: "ackroyd",
    title: "The Murder of Roger Ackroyd",
    author: "Agatha Christie",
    cover: cover("ackroyd", 314, 500, "The Murder of Roger Ackroyd by Agatha Christie"),
    spine: spine("ackroyd", 34, 298),
  },
  {
    id: "life-of-pi",
    title: "Life of Pi",
    author: "Yann Martel",
    cover: cover("life-of-pi", 185, 278, "Life of Pi by Yann Martel"),
    spine: spine("life-of-pi", 40, 312),
  },
  {
    id: "pyramid",
    title: "Inverting the Pyramid",
    author: "Jonathan Wilson",
    cover: cover("pyramid", 266, 400, "Inverting the Pyramid by Jonathan Wilson"),
    spine: spine("pyramid", 38, 290),
  },
  {
    id: "animal-farm",
    title: "Animal Farm",
    author: "George Orwell",
    cover: cover("animal-farm", 279, 500, "Animal Farm by George Orwell"),
    spine: spine("animal-farm", 36, 306),
  },
  {
    id: "shining",
    title: "The Shining",
    author: "Stephen King",
    cover: cover("shining", 294, 500, "The Shining by Stephen King"),
    spine: spine("shining", 44, 300),
  },
  {
    id: "strange-buildings",
    title: "Strange Buildings",
    author: "Uketsu",
    cover: cover("strange-buildings", 329, 500, "Strange Buildings by Uketsu"),
    spine: spine("strange-buildings", 36, 296),
  },
  {
    id: "thursday",
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover: cover("thursday", 333, 500, "The Thursday Murder Club by Richard Osman"),
    spine: spine("thursday", 34, 308),
  },
  {
    id: "crime",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    cover: cover("crime", 448, 500, "Crime and Punishment by Fyodor Dostoevsky"),
    spine: spine("crime", 38, 292),
  },
  {
    id: "hitchhiker",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    cover: cover("hitchhiker", 332, 500, "The Hitchhiker's Guide to the Galaxy by Douglas Adams"),
    spine: spine("hitchhiker", 40, 304),
  },
  {
    id: "jurassic",
    title: "Jurassic Park",
    author: "Michael Crichton",
    cover: cover("jurassic", 280, 500, "Jurassic Park by Michael Crichton"),
    spine: spine("jurassic", 42, 310),
  },
  {
    id: "morisaki",
    title: "Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    cover: cover("morisaki", 332, 500, "Days at the Morisaki Bookshop by Satoshi Yagisawa"),
    spine: spine("morisaki", 34, 298),
  },
  {
    id: "morisaki-more",
    title: "More Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    cover: cover("morisaki-more", 326, 500, "More Days at the Morisaki Bookshop by Satoshi Yagisawa"),
    spine: spine("morisaki-more", 36, 306),
  },
  {
    id: "metamorphosis",
    title: "The Metamorphosis",
    author: "Franz Kafka",
    cover: cover("metamorphosis", 333, 500, "The Metamorphosis by Franz Kafka"),
    spine: spine("metamorphosis", 38, 294),
  },
];
