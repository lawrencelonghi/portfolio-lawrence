// export const worksData = [
//   {
//     "id": 1,
//     "title": "ricktadeu.com.br",
//     "hrefEx": "https://ricktadeu.com.br",
//     "hrefIn": "/rick",
//     "description": "Portfolio para um maquiador desenvolvido com React e Django",
//     "image": "/imgs/rick1.jpeg",
//     "hoverImage": "/imgs/rick-img.png"
//   },
//   {
//     "id": 2,
//     "hrefEx": "https://projectbookd.vercel.app",
//     "hrefIn": "/bookd",
//     "title": "projectbookd.vercel.app",
//     "description": "Um projeto de avaliação de livros desenvolvido com Next.js",
//     "image": "/imgs/kubrikCover.jpg",
//     "hoverImage": "/imgs/bookd-img.png"
//   },
//   {
//     "id": 3,
//     "hrefEx": "https://samambaiabar.com.br",
//     "hrefIn": "/samambaia",
//     "title": "samambaiabar.com.br",
//     "description": "Um cardápio online desenvolvido apenas com HTML, CSS, JavaScript e Django",
//     "image": "/imgs/drink-sour.jpg",
//     "hoverImage": "/imgs/samambaia-nv.png"
//   },
// ]

// worksData.ts
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
  githubLink?: string;
  images: string[];
  challengesKey?: string;
  solutionKey?: string;
  resultsKey?: string;
}

export const worksData: WorkData[] = [
  {
    id: 1,
    title: "ricktadeu.com.br",
    hrefEx: "https://ricktadeu.com.br",
    hrefIn: "/rick",
    slug: "rick",
    description: "Portfolio para um maquiador desenvolvido com React e Django",
    image: "/imgs/rick1.jpeg",
    hoverImage: "/imgs/rick-img.png",
    descriptionKey: "rickFullDescription",
    technologies: ["React", "Django", "Tailwind CSS","sqlite3"],
    year: "2025",
    client: "Rick Tadeu",
    roleKey: "fullStackDeveloper",
    projectLink: "https://ricktadeu.com.br",
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
    description: "Um projeto de avaliação de livros desenvolvido com Next.js",
    image: "/imgs/kubrikCover.jpg",
    hoverImage: "/imgs/bookd-img.png",
    descriptionKey: "bookdFullDescription",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    year: "2025",
    roleKey: "fullStackDeveloper",
    projectLink: "https://projectbookd.vercel.app",
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
    description: "Um cardápio online mobile desenvolvido apenas com HTML, CSS, JavaScript e Django",
    image: "/imgs/drink-sour.jpg",
    hoverImage: "/imgs/samambaia-nv.png",
    descriptionKey: "samambaiaFullDescription",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
    year: "2025",
    client: "Samambaia Bar e Lanches",
    roleKey: "fullStackDeveloper",
    projectLink: "https://samambaiabar.com.br",
    images: [
      "/imgs/samambaia-nv.png"
    ],
    challengesKey: "samambaiaChallenges",
    solutionKey: "samambaiaSolution",
    resultsKey: "samambaiaResults"
  }
];