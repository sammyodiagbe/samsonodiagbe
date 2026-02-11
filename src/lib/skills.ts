export type SkillCategory = "frontend" | "backend" | "tools" | "other";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  icon: string; // emoji or icon name
  color: string; // tailwind color class
  yearsUsed?: number;
  description?: string;
};

export const skillCategories: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
  other: "Other",
};

export const skills: Skill[] = [
  // Frontend
  {
    id: "react",
    name: "React",
    category: "frontend",
    proficiency: 5,
    icon: "⚛️",
    color: "from-cyan-500/20 to-cyan-500/5",
    yearsUsed: 4,
    description: "Building complex UIs with hooks and modern patterns",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: 5,
    icon: "▲",
    color: "from-zinc-700/20 to-zinc-700/5",
    yearsUsed: 3,
    description: "Full-stack React framework with SSR and API routes",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: 5,
    icon: "📘",
    color: "from-blue-500/20 to-blue-500/5",
    yearsUsed: 3,
    description: "Type-safe JavaScript for scalable applications",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    proficiency: 5,
    icon: "⚡",
    color: "from-yellow-500/20 to-yellow-500/5",
    yearsUsed: 5,
    description: "ES6+, async/await, DOM manipulation",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 5,
    icon: "🎨",
    color: "from-teal-500/20 to-teal-500/5",
    yearsUsed: 3,
    description: "Utility-first CSS for rapid UI development",
  },
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    proficiency: 5,
    icon: "📄",
    color: "from-orange-500/20 to-orange-500/5",
    yearsUsed: 5,
    description: "Semantic markup and accessibility",
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    proficiency: 5,
    icon: "🎭",
    color: "from-blue-400/20 to-blue-400/5",
    yearsUsed: 5,
    description: "Modern layouts, animations, and responsive design",
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "frontend",
    proficiency: 4,
    icon: "✨",
    color: "from-purple-500/20 to-purple-500/5",
    yearsUsed: 2,
    description: "Production-ready animations for React",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: 4,
    icon: "🟢",
    color: "from-green-600/20 to-green-600/5",
    yearsUsed: 4,
    description: "Server-side JavaScript runtime",
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    proficiency: 3,
    icon: "🐍",
    color: "from-blue-500/20 to-blue-500/5",
    yearsUsed: 2,
    description: "Scripting and automation",
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    proficiency: 4,
    icon: "🚀",
    color: "from-gray-600/20 to-gray-600/5",
    yearsUsed: 3,
    description: "Fast, minimal Node.js web framework",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    proficiency: 3,
    icon: "🍃",
    color: "from-green-500/20 to-green-500/5",
    yearsUsed: 2,
    description: "NoSQL database for modern applications",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    proficiency: 3,
    icon: "🐘",
    color: "from-blue-600/20 to-blue-600/5",
    yearsUsed: 2,
    description: "Relational database with advanced features",
  },
  {
    id: "rest",
    name: "REST APIs",
    category: "backend",
    proficiency: 5,
    icon: "🔗",
    color: "from-indigo-500/20 to-indigo-500/5",
    yearsUsed: 4,
    description: "Designing and consuming RESTful services",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: 5,
    icon: "📦",
    color: "from-orange-600/20 to-orange-600/5",
    yearsUsed: 5,
    description: "Version control and collaboration",
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    proficiency: 5,
    icon: "🐙",
    color: "from-zinc-600/20 to-zinc-600/5",
    yearsUsed: 5,
    description: "Code hosting and project management",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    proficiency: 5,
    icon: "💻",
    color: "from-blue-500/20 to-blue-500/5",
    yearsUsed: 5,
    description: "Primary development environment",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    proficiency: 4,
    icon: "▲",
    color: "from-zinc-700/20 to-zinc-700/5",
    yearsUsed: 3,
    description: "Deployment and hosting platform",
  },
  {
    id: "npm",
    name: "NPM",
    category: "tools",
    proficiency: 5,
    icon: "📦",
    color: "from-red-500/20 to-red-500/5",
    yearsUsed: 4,
    description: "Package management and publishing",
  },
  {
    id: "figma",
    name: "Figma",
    category: "tools",
    proficiency: 3,
    icon: "🎨",
    color: "from-purple-500/20 to-purple-500/5",
    yearsUsed: 2,
    description: "Design collaboration and prototyping",
  },
];

export const getSkillsByCategory = (category: SkillCategory) =>
  skills.filter((skill) => skill.category === category);

export const getTopSkills = (count: number = 8) =>
  skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, count);
