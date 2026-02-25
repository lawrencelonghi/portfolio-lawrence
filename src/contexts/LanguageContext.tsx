// src/contexts/LanguageContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en' | 'fr'

type Translations = {
  [key in Language]: {
    // Navegação
    selectedProjects: string
    resume: string
    developer: string
    projects: string
    aboutMe: string
    about: string
    contact: string
    
    // Sobre
    aboutText1: string
    aboutText2: string
    aboutText3: string

    // Short project descriptions
    rickShortDescription: string
    bookdShortDescription: string
    samambaiaShortDescription: string
    
    // Roles
    fullStackDeveloper: string
    frontendDeveloper: string
    backendDeveloper: string
    
    // Projetos - Rick
    rickFullDescription: string
    rickChallenges: string
    rickSolution: string
  
    // Projetos - Bookd
    bookdFullDescription: string
    bookdChallenges: string
    bookdSolution: string
    
    // Projetos - Samambaia
    samambaiaFullDescription: string
    samambaiaChallenges: string
    samambaiaSolution: string
   
    
    // Labels da página de projeto
    viewProject: string
    code: string
    technologies: string
    year: string
    role: string
    client: string
    challenges: string
    solution: string
    backToProjects: string
    nextProject: string
    projectNotFound: string
    back: string
  }
}

const translations: Translations = {
  pt: {
    // Navegação
    developer: 'Desenvolvedor Full Stack',
    resume: 'Baixar currículo',
    projects: 'projetos',
    selectedProjects: 'projetos selecionados',
    about: 'sobre',
    aboutMe: 'sobre mim',
    contact: 'contato',
    
    // Sobre
    aboutText1: 'Sou músico, pianista e professor de piano, atualmente em transição de carreira para a área de desenvolvimento de software.',
    aboutText2: 'No último ano, além da dedicação ao ensino e à música, tenho estudado programação e já realizei dois projetos como freelancer, o que me proporcionou a oportunidade de colocar em prática meus conhecimentos como desenvolvedor.',
    aboutText3: 'Minha trajetória na música me trouxe disciplina, foco e criatividade - qualidades que agora aplico no desenvolvimento de software.',
    
    // Roles
    fullStackDeveloper: 'Desenvolvedor Full Stack',
    frontendDeveloper: 'Desenvolvedor Frontend',
    backendDeveloper: 'Desenvolvedor Backend',

    // Short project descriptions
    rickShortDescription: "Portfolio para um maquiador desenvolvido com React, TypeScript, Node.js e Express.",
    bookdShortDescription: "Um projeto de avaliação de livros desenvolvido com Next.js, Tailwind CSS e TypeScript.",
    samambaiaShortDescription:  "Um cardápio digital mobile desenvolvido com JavaScript, TypeScript e Express",    

    // Rick
    rickFullDescription: 'Portfolio profissional desenvolvido para o maquiador Rick Tadeu, apresentando seu trabalho de forma elegante, minimalista e funcional, como solicitado pelo cliente. O projeto combina uma interface moderna em React com um backend robusto em Node.js e Express. O cliente tem acesso a uma  página admin onde o cliente pode adicionar, remover e editar fotos e vídeos.',
    rickChallenges: 'O principal desafio foi integrar a home page, a página admin com o backend e o banco de dados. Seria preciso criar uma galeria de fotos e vídeos que destacasse o trabalho do maquiador de forma profissional, refletindo seu estilo e personalidade e um admin que fosse intuitivo e fácil de utilizar.',
    rickSolution: 'O frontend com React e tailwindCSS garante boa performance e usabilidade tanto para os usuários quanto para meu cliente. O layout bento grid, pedido pelo cliente, foi construido com poucas linhas de CSS, gerando grande economia de recursos. Usando Node.js e Express, consegui criar um backend robusto e personalizado para o projeto',
    
    // Bookd
    bookdFullDescription: 'Plataforma, ainda em desenvolvimento, para avaliação e descoberta de livros, permitindo que usuários organizem seu processo de leitura e encontrem novos livros.',
    bookdChallenges: 'Neste projeto de estudos criei um sistema de login para usuários, onde cada usuário pode salvar os livros que está lendo, os que quer ler e os que já leu. O principal desafio foi lidar com as rotas e as conexões com banco de dados. Ainda pretendo transformar este projeto em uma plataforma social, onde usuários possam seguir uns aos outros e compartilhar suas opiniões sobre livros.',
    bookdSolution: 'Desenvolvi a aplicação inteira em NextJs, que era meu objeto de estudo no momento. O banco de dados utilizado foi PostgreSQL. Escolhi usar este banco de dados pois em outros projetos eu havia trabalhado apenas com SQLite e decidi me desafiar e usar um banco de dados mais robusto.',
    
    // Samambaia
    samambaiaFullDescription: 'Cardápio digital mobile interativo para o Samambaia Bar e Lanches, oferecendo uma experiência moderna e intuitiva para visualização de drinks e pratos. Desenvolvido com tecnologias web fundamentais.',
    samambaiaChallenges: 'Desenvolver um cardápio digital que fosse fácil de atualizar pelo cliente e que funcionasse perfeitamente em dispositivos móveis, considerando que a maioria dos acessos seria de smartphones. Eu precisaria criar um painel admin amigável para o cliente gerenciar os itens do cardápio.',
    samambaiaSolution: 'Criei um painel administrativo minimalista para gerenciamento do cardápio e implementei um design mobile-first com HTML, CSS e JavaScript. O backend em Node.js e Express gerencia o armazenamento e a atualização dos itens do cardápio.',
    
    // Labels
    viewProject: 'Ver projeto',
    code: 'Código',
    technologies: 'Tecnologias',
    year: 'Ano',
    role: 'Função',
    client: 'Cliente',
    challenges: 'Desafios',
    solution: 'Solução',
    backToProjects: 'Ver todos os projetos',
    nextProject: 'Próximo projeto',
    projectNotFound: 'Projeto não encontrado',
    back: 'Voltar',
  },
  en: {
    // Navegação
    developer: 'Full Stack Developer',
    resume: 'Download resume',
    projects: 'projects',
    selectedProjects: 'selected projects',
    aboutMe: 'about me',
    about: 'about',
    contact: 'contact',
    
    // Sobre
    aboutText1: 'I am a musician, pianist and piano teacher, currently transitioning my career into software development.',
    aboutText2: 'Over the past year, in addition to dedication to teaching and music, I have been studying programming and have already completed two freelance projects, which gave me the opportunity to put my developer skills into practice.',
    aboutText3: 'My journey in music has brought me discipline, focus and creativity - qualities that I now apply to software development.',
    
    // Roles
    fullStackDeveloper: 'Full Stack Developer',
    frontendDeveloper: 'Frontend Developer',
    backendDeveloper: 'Backend Developer',

    // Short project descriptions
    rickShortDescription: "A professional portfolio for a makeup artist developed with React, TypeScript, Node.js and Express.",
    bookdShortDescription: "A book review project developed with Next.js, Tailwind CSS, and TypeScript.",
    samambaiaShortDescription: "A mobile digital menu developed with JavaScript, TypeScript, and Express.",
  
    // Rick
    rickFullDescription: 'Professional portfolio developed for makeup artist Rick Tadeu, showcasing his work in an elegant, minimalist and functional way, as required by the client. The project combines a modern React interface with a robust Node.js and Express backend.',
    rickChallenges: 'The main challenge was to integrate the home page, the admin page with the backend and the database. It would be necessary to create a photo and video gallery that highlighted the makeup artist\'s work in a professional way, reflecting his style and personality, and also an admin page that was intuitive and easy to use.',
    rickSolution: 'The frontend with React and TailwindCSS ensures good performance and usability for both users and my client. The bento grid layout, requested by the client, was built with few lines of CSS, providing great resource savings. Using Node.js and Express, I was able to create a robust and customized backend for the project.',
    
    // Bookd
    bookdFullDescription: 'Bookd is a platform, still under development, for book review and discovery, allowing users to organize their reading processes and making easier to find new books to read.',
    bookdChallenges: 'In this personal project I built a login system for users, where each user can store the books that are being read, the ones they want to read, and those already readed. The main challenge was to handle the routes and the database connections. I still intend to transform this project into a social platform, where users can follow each other and share their opinions about books.',
    bookdSolution: 'I develped the application using Next.js fullstack, as I was studing Next at the time. The database used was PostgreSQL. I chose to use this database because in other projects I had worked only with SQLite and I decided to challenge myself and use a more robust database.',

    // Samambaia
    samambaiaFullDescription: 'Interactive digital mobile menu for Samambaia Bar e Lanches, offering a modern and intuitive experience for the restaurant clients. Developed with fundamental web technologies.',
    samambaiaChallenges: 'Develop a digital menu that was easy for the client to update and worked perfectly on mobile devices, considering that most accesses would be from smartphones. I needed to create an user-friendly admin panel for the client to manage the menu items.',
    samambaiaSolution: 'I created a minimalist admin panel for menu management and implemented a mobile-first design with smooth animations in vanilla JavaScript. The Node.js and Express backend manages the storage and updating of menu items.',
    
    // Labels
    viewProject: 'View project',
    code: 'Code',
    technologies: 'Technologies',
    year: 'Year',
    role: 'Role',
    client: 'Client',
    challenges: 'Challenges',
    solution: 'Solution',
    backToProjects: 'View all projects',
    nextProject: 'Next project',
    projectNotFound: 'Project not found',
    back: 'Back',
  },
  fr: {
    // Navegação
    developer: 'Développeur Full Stack',
    resume: 'Télécharger mon CV',
    projects: 'projets',
    selectedProjects: 'projets sélectionnées',
    about: 'à propos',
    aboutMe: 'à propos de moi',
    contact: 'contact',
    
    // Sobre
    aboutText1: 'Je suis musicien, pianiste et professeur de piano, actuellement en reconversion professionnelle vers le développement logiciel.',
    aboutText2: "Au cours de l'année dernière, en plus de mon dévouement à l'enseignement et à la musique, j'ai étudié la programmation et j'ai déjà réalisé deux projets en tant que freelance, ce qui m'a donné l'occasion de mettre en pratique mes compétences de développeur.",
    aboutText3: 'Mon parcours dans la musique m\'a apporté discipline, concentration et créativité - des qualités que j\'applique maintenant au développement.',
    
    // Roles
    fullStackDeveloper: 'Développeur Full Stack',
    frontendDeveloper: 'Développeur Frontend',
    backendDeveloper: 'Développeur Backend',

    // Short project descriptions
    rickShortDescription: "Portfolio pour un maquilleur développé avec React, TypeScript, Node.js et Express.",
    bookdShortDescription: "Un projet d’évaluation de livres développé avec Next.js, Tailwind CSS et TypeScript.",
    samambaiaShortDescription: "Un menu mobile développé avec JavaScript, TypeScript et Express.",

    
  // Rick
rickFullDescription: "Portfolio professionnel développé pour le maquilleur Rick Tadeu, mettant en valeur son travail de manière élégante, minimaliste et fonctionnelle, conformément aux exigences du client. Le projet combine une interface React moderne avec un backend robuste en Node.js et Express.",
rickChallenges: "Le principal défi a été d’intégrer la page d’accueil, la page d’administration avec le backend et la base de données. Il était nécessaire de créer une galerie de photos et de vidéos mettant en valeur le travail du maquilleur de manière professionnelle, en reflétant son style et sa personnalité, ainsi qu’une page d’administration intuitive et facile à utiliser.",
rickSolution: "Le frontend en React et TailwindCSS garantit de bonnes performances et une excellente ergonomie pour les utilisateurs comme pour le client. Le layoyt bento grid, demandée par le client, a été réalisée avec peu de lignes de CSS, offrant une économie significative de ressources. En utilisant Node.js et Express, j’ai pu créer un backend robuste et personnalisé pour le projet.",

// Bookd
bookdFullDescription: "Bookd est une plateforme, encore en cours de développement, dédiée à la critique et à la découverte de livres, permettant aux utilisateurs d’organiser leurs lectures et de faciliter la recherche de nouveaux livres à lire.",
bookdChallenges: "Dans ce projet personnel, j’ai développé un système de connexion permettant à chaque utilisateur de stocker les livres en cours de lecture, ceux qu’il souhaite lire et ceux déjà lus. Le principal défi a été la gestion des routes et des connexions à la base de données. J’ai également pour objectif de transformer ce projet en une plateforme sociale où les utilisateurs pourront se suivre et partager leurs opinions sur les livres.",
bookdSolution: "J’ai développé l’application en fullstack avec Next.js, que j’étudiais à ce moment-là. La base de données utilisée était PostgreSQL. J’ai choisi cette base de données car, dans mes projets précédents, je n’avais travaillé qu’avec SQLite et j’ai décidé de me challenger en utilisant une base de données plus robuste.",

// Samambaia
samambaiaFullDescription: "Menu mobile interactif pour le Samambaia Bar e Lanches, offrant une expérience moderne et intuitive aux clients du restaurant. Développé avec des technologies web fondamentales.",
samambaiaChallenges: "Développer un menu facile à mettre à jour pour le client et parfaitement fonctionnel sur les appareils mobiles, étant donné que la majorité des accès se ferait via des smartphones. Il a été nécessaire de créer un panneau d’administration convivial pour permettre au client de gérer les éléments du menu.",
samambaiaSolution: "J’ai créé un panneau d’administration minimaliste pour la gestion du menu et mis en place un design mobile-first avec des animations fluides en JavaScript vanilla. Le backend en Node.js et Express gère le stockage et la mise à jour des éléments du menu.",

    
    // Labels
    viewProject: 'Voir le projet',
    code: 'Code',
    technologies: 'Technologies',
    year: 'Année',
    role: 'Rôle',
    client: 'Client',
    challenges: 'Défis',
    solution: 'Solution',
    backToProjects: 'Voir tous les projets',
    nextProject: 'Projet suivant',
    projectNotFound: 'Projet non trouvé',
    back: 'Retour',
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t: translations[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}