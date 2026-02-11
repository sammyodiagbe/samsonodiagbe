export type ProjectCategory = "web-app" | "cli-tool" | "landing-page" | "game" | "component";

export type Project = {
  id: string;
  name: string;
  img: string;
  description: string;
  url: string;
  github?: string;
  category: ProjectCategory;
  techStack: string[];
  featured: boolean;
  year: number;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "web-app": "Web Apps",
  "cli-tool": "CLI Tools",
  "landing-page": "Landing Pages",
  "game": "Games",
  "component": "Components",
};

export const portfolioData: Project[] = [
  {
    id: "scannad",
    name: "ScannaD",
    img: "scannad.png",
    description:
      "A CLI tool that scans git diffs for API keys and secrets before commits. Protect your codebase by automatically detecting and preventing commits containing sensitive information like API keys, passwords, tokens, and other secrets. Published on NPM with zero dependencies.",
    url: "https://www.npmjs.com/package/scannad",
    github: "https://github.com/sammyodiagbe/scannad",
    category: "cli-tool",
    techStack: ["Node.js", "JavaScript", "NPM", "Git"],
    featured: true,
    year: 2024,
  },
  {
    id: "github-search",
    name: "GitHub User Search",
    img: "github.svg",
    description:
      "A GitHub user search application that uses the GitHub API to pull profile data and display it beautifully. Features dark/light theme toggle and responsive design.",
    url: "https://devfinder-two.vercel.app/",
    category: "web-app",
    techStack: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
    featured: true,
    year: 2024,
  },
  {
    id: "connect-four",
    name: "Connect Four Game",
    img: "connect_four.svg",
    description:
      "A two-player Connect Four game with win condition detection. Built to challenge JavaScript skills with game logic implementation and state management.",
    url: "https://connect-four-41z45w5yw-sammyodiagbe.vercel.app/",
    category: "game",
    techStack: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    featured: true,
    year: 2023,
  },
  {
    id: "dictionary",
    name: "Dictionary App",
    img: "dictionary.svg",
    description:
      "A real-world dictionary web app integrating the Dictionary API. Features color themes, font selection, and audio pronunciation for words.",
    url: "https://brainbook.vercel.app/",
    category: "web-app",
    techStack: ["React", "Dictionary API", "Audio API", "CSS"],
    featured: false,
    year: 2023,
  },
  {
    id: "feedback-app",
    name: "Feature Feedback App",
    img: "feedback_app.svg",
    description:
      "A product feedback application for managing feature requests. Includes upvoting, commenting, and status tracking for suggestions.",
    url: "https://feedbakiie.vercel.app/",
    category: "web-app",
    techStack: ["React", "State Management", "JSON", "CSS"],
    featured: false,
    year: 2023,
  },
  {
    id: "entertainment",
    name: "Entertainment Web App",
    img: "movie_app.svg",
    description:
      "A multi-page entertainment platform for browsing movies and TV shows. Features search functionality and responsive grid layouts.",
    url: "https://entertainment-web-app-rho.vercel.app/",
    category: "web-app",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    year: 2023,
  },
  {
    id: "bookmark",
    name: "Bookmark Landing Page",
    img: "bookmark.svg",
    description:
      "A responsive landing page with interactive elements. Challenged understanding of CSS layouts, responsive design, and element positioning.",
    url: "https://sammyodiagbe.github.io/responsive-bookmark/",
    category: "landing-page",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: false,
    year: 2022,
  },
  {
    id: "loopstudio",
    name: "Loop Studio Landing Page",
    img: "business_landing.svg",
    description:
      "A VR company landing page showcasing CSS Grid mastery and element positioning. Features smooth animations and mobile-first design.",
    url: "https://sammyodiagbe.github.io/Loopstudios-landing-page/",
    category: "landing-page",
    techStack: ["HTML5", "CSS Grid", "JavaScript", "Flexbox"],
    featured: false,
    year: 2022,
  },
  {
    id: "pricing-component",
    name: "Interactive Pricing",
    img: "pricing_component.svg",
    description:
      "An interactive pricing component with custom range slider and toggle. A great JavaScript challenge for DOM manipulation.",
    url: "https://sammyodiagbe.github.io/interactive-pricing-component/",
    category: "component",
    techStack: ["JavaScript", "CSS", "HTML5", "Range Input"],
    featured: false,
    year: 2022,
  },
  {
    id: "single-page",
    name: "Design Portfolio Landing",
    img: "single_landing.svg",
    description:
      "A single-page design portfolio with complex grid layouts. Perfect for practicing CSS Grid and responsive design techniques.",
    url: "https://single-page-design-portfolio-one.vercel.app/",
    category: "landing-page",
    techStack: ["HTML5", "CSS Grid", "Responsive Design"],
    featured: false,
    year: 2022,
  },
  {
    id: "todo",
    name: "Todo App",
    img: "todo_app.svg",
    description:
      "A feature-rich todo app with dark/light theme toggle and drag & drop reordering. Built with React and local storage persistence.",
    url: "https://next-todo-app-rouge.vercel.app/",
    category: "web-app",
    techStack: ["React", "Next.js", "Drag & Drop", "Local Storage"],
    featured: false,
    year: 2023,
  },
  {
    id: "news-homepage",
    name: "News Homepage",
    img: "web3.svg",
    description:
      "A responsive news homepage with complex CSS Grid layouts. Great for practicing advanced layout techniques and responsiveness.",
    url: "https://news-homepage-teal-tau.vercel.app/",
    category: "landing-page",
    techStack: ["HTML5", "CSS Grid", "JavaScript", "Responsive"],
    featured: false,
    year: 2022,
  },
];

export const getFeaturedProjects = () =>
  portfolioData.filter((project) => project.featured);

export const getProjectsByCategory = (category: ProjectCategory) =>
  portfolioData.filter((project) => project.category === category);

export const getAllCategories = (): ProjectCategory[] => {
  const categories = new Set(portfolioData.map((p) => p.category));
  return Array.from(categories);
};
