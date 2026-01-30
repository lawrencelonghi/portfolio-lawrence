// src/contexts/LanguageContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en' | 'fr'

type Translations = {
  [key in Language]: {
    // Navegação
    selectedProjects: string
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
    rickFullDescription: 'Portfolio profissional desenvolvido para o maquiador Rick Tadeu, apresentando seu trabalho de forma elegante, minimalista e funcional, como solicitado pelo cliente. O projeto combina uma interface moderna em React com um backend robusto em Django onde o cliente pode adicionar, remover e editar fotos.',
    rickChallenges: 'O principal desafio foi criar uma galeria de fotos que destacasse o trabalho do maquiador de forma profissional, refletindo seu estilo e personalidade.',
    rickSolution: 'O frontend com React e tailwindCSS cria efeitos e transições delicadas. o bento grid, pedido pelo cliente, foi construido com poucas linhas de CSS, gerando grande economia de recursos. Com Django Admin o cliente pode gerenciar as imagens e vídeos com facilidade.',
    
    // Bookd
    bookdFullDescription: 'Plataforma social para avaliação e descoberta de livros, permitindo que usuários organizem seu processo de leitura e encontrem novos livros.',
    bookdChallenges: 'Neste projeto de estudos criei um sistema de login para usuários onde cada usuário pode salvar os livros que está lendo, os que quer ler e os que já leu. O principal desafio foi lidar com as rotas e as conexões com banco de dados.',
    bookdSolution: 'Consegui desenvolver a aplicação inteira em NextJs, que era meu objeto de estudo no momento. O banco de dados utilizado foi PostgreSQL. Escolhi usar este banco de dados pois nos projetos anteriores eu tinha trabalhado com SQLite e decidi me desafiar e usar um banco de dados mais robusto.',
    
    // Samambaia
    samambaiaFullDescription: 'Cardápio digital mobile interativo para o Samambaia Bar e Lanches, oferecendo uma experiência moderna e intuitiva para visualização de drinks e pratos. Desenvolvido com tecnologias web fundamentais.',
    samambaiaChallenges: 'Desenvolver um cardápio digital que fosse fácil de atualizar pelo cliente e que funcionasse perfeitamente em dispositivos móveis, considerando que a maioria dos acessos seria de smartphones.',
    samambaiaSolution: 'Criei um painel administrativo simples em Django para gerenciamento do cardápio e implementei um design mobile-first com HTML, CSS e JavaScript.',
    
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
    rickFullDescription: 'Professional portfolio developed for makeup artist Rick Tadeu, showcasing his work in an elegant and functional way. The project combines a modern React interface with a robust Django backend.',
    rickChallenges: 'The main challenge was creating a photo gallery that showcased the makeup artist\'s work professionally, with fast loading and smooth transitions between images.',
    rickSolution: 'I implemented an optimized gallery system with lazy loading, image compression and intelligent caching. The Django backend manages image upload and processing.',
    
    // Bookd
    bookdFullDescription: 'Social platform for book review and discovery, allowing users to share their opinions and find new readings based on their preferences.',
    bookdChallenges: 'Create an efficient recommendation system that considered user reviews and reading preferences, maintaining performance even with large data volumes.',
    bookdSolution: 'I developed a recommendation algorithm based on review similarity and implemented strategic caching to optimize database queries.',
    
    // Samambaia
    samambaiaFullDescription: 'Interactive digital mobile menu for Samambaia Bar e Lanches, offering a modern and intuitive experience for viewing drinks and dishes. Developed with fundamental web technologies.',
    samambaiaChallenges: 'Develop a digital menu that was easy for the client to update and worked perfectly on mobile devices, considering that most accesses would be from smartphones.',
    samambaiaSolution: 'I created a simple Django admin panel for menu management and implemented a mobile-first design with smooth animations in vanilla JavaScript.',
    
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
    rickFullDescription: 'Portfolio professionnel développé pour le maquilleur Rick Tadeu, présentant son travail de manière élégante et fonctionnelle. Le projet combine une interface React moderne avec un backend Django robuste.',
    rickChallenges: 'Le principal défi était de créer une galerie de photos présentant le travail du maquilleur de manière professionnelle, avec un chargement rapide et des transitions fluides entre les images.',
    rickSolution: 'J\'ai implémenté un système de galerie optimisé avec chargement différé, compression d\'images et mise en cache intelligente. Le backend Django gère le téléchargement et le traitement des images.',
    
    // Bookd
    bookdFullDescription: 'Plateforme sociale pour l\'évaluation et la découverte de livres, permettant aux utilisateurs de partager leurs opinions et de trouver de nouvelles lectures basées sur leurs préférences.',
    bookdChallenges: 'Créer un système de recommandation efficace prenant en compte les avis des utilisateurs et leurs préférences de lecture, tout en maintenant les performances même avec de gros volumes de données.',
    bookdSolution: 'J\'ai développé un algorithme de recommandation basé sur la similarité des avis et mis en œuvre une mise en cache stratégique pour optimiser les requêtes de base de données.',
    
    // Samambaia
    samambaiaFullDescription: 'Menu numérique interactif mobile pour le Samambaia Bar e Lanches, offrant une expérience moderne et intuitive pour visualiser les boissons et les plats. Développé avec des technologies web fondamentales.',
    samambaiaChallenges: 'Développer un menu numérique facile à mettre à jour par le client et fonctionnant parfaitement sur les appareils mobiles, sachant que la plupart des accès se feraient depuis des smartphones.',
    samambaiaSolution: 'J\'ai créé un panneau d\'administration Django simple pour la gestion du menu et mis en œuvre un design mobile-first avec des animations fluides en JavaScript vanilla.',
    
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