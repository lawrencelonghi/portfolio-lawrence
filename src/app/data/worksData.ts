import { useLanguage } from "@/contexts/LanguageContext"
export interface WorkData {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  hrefEx: string;
  hrefIn: string;
  slug: string;
  
  // IDs para buscar traduções no context
  descriptionKey: string;
  technologies: string[];
  year: string;
  client?: string;
  roleKey: string;
  projectLink: string;
  displayedLink: string;
  githubLink?: string;
  images: string[];
  challengesKey?: string;
  solutionKey?: string;
  resultsKey?: string;
}

export const worksData: WorkData[] = 

[
  {
    id: 1,
    title: "ricktadeu.com.br",
    hrefEx: "https://ricktadeu.com.br",
    hrefIn: "/rick",
    slug: "rick",
    description: "rickShortDescription",
    image: "/imgs/rick-horizontal.png",
    hoverImage: "/imgs/rick-img.png",
    descriptionKey: "rickFullDescription",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS","Sqlite3", "Prisma", "Docker"],
    year: "2025",
    client: "Rick Tadeu",
    roleKey: "fullStackDeveloper",
    projectLink: "https://ricktadeu.com.br",
    displayedLink: "ricktadeu.com.br",
    images: [ "/imgs/rick-img.png"],
    challengesKey: "rickChallenges",
    solutionKey: "rickSolution",
    resultsKey: "rickResults"
  },
  {
    id: 2,
    hrefEx: "https://projectbookd.vercel.app",
    hrefIn: "/bookd",
    slug: "bookd",
    title: "projectbookd.vercel.app",
    description: "bookdShortDescription",
    image: "/imgs/booked-horizontal.png",
    hoverImage: "/imgs/bookd-img.png",
    descriptionKey: "bookdFullDescription",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    year: "2025",
    roleKey: "fullStackDeveloper",
    projectLink: "https://projectbookd.vercel.app",
    displayedLink: "projectbookd.vercel.app",
    images: [
      "/imgs/bookd-img.png"
    ],
    challengesKey: "bookdChallenges",
    solutionKey: "bookdSolution",
    resultsKey: "bookdResults"
  },
  {
    id: 3,
    hrefEx: "https://samambaiabar.com.br",
    hrefIn: "/samambaia",
    slug: "samambaia",
    title: "samambaiabar.com.br",
    description: "samambaiaShortDescription",
    image: "/imgs/samambaia-horizontal.png",
    hoverImage: "/imgs/samambaia-nv.png",
    descriptionKey: "samambaiaFullDescription",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQLite", "Docker"],
    year: "2025",
    client: "Samambaia Bar e Lanches",
    roleKey: "fullStackDeveloper",
    projectLink: "https://samambaiabar.com.br",
    displayedLink: "samambaiabar.com.br",
    images: [
      "/imgs/samambaia-nv.png"
    ],
    challengesKey: "samambaiaChallenges",
    solutionKey: "samambaiaSolution",
    resultsKey: "samambaiaResults"
  }
];