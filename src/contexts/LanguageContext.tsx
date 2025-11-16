// src/contexts/LanguageContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en' | 'fr'

type Translations = {
  [key in Language]: {
    developer: string
    projects: string
    about: string
    contact: string
    aboutText1: string
    aboutText2: string
    aboutText3: string
  }
}

const translations: Translations = {
  pt: {
    developer: 'Desenvolvedor Full Stack',
    projects: 'PROJETOS',
    about: 'SOBRE',
    contact: 'CONTATO',
    aboutText1: 'Sou músico, pianista e professor de piano, atualmente em transição de carreira para a área de desenvolvimento de software.',
    aboutText2: 'No último ano, além da dedicação ao ensino e à música, tenho estudado programação e já realizei dois projetos como freelancer, o que me proporcionou a oportunidade de pôr em prática meus conhecimentos como desenvolvedor.',
    aboutText3: 'Minha trajetória na música me trouxe disciplina, foco e criatividade - qualidades que agora aplico no desenvolvimento.'
  },
  en: {
    developer: 'Full Stack Developer',
    projects: 'PROJECTS',
    about: 'ABOUT ME',
    contact: 'CONTACT',
    aboutText1: 'I am a musician, pianist and piano teacher, currently transitioning my career to software development.',
    aboutText2: 'In the past year, in addition to dedication to teaching and music, I have been studying programming and have already completed two freelance projects, which gave me the opportunity to put my developer skills into practice.',
    aboutText3: 'My journey in music has brought me discipline, focus and creativity - qualities that I now apply to development.'
  },
  fr: {
    developer: 'Développeur Full Stack',
    projects: 'PROJETS',
    about: 'À PROPOS',
    contact: 'CONTACT',
    aboutText1: 'Je suis musicien, pianiste et professeur de piano, actuellement en reconversion professionnelle vers le développement logiciel.',
    aboutText2: "Au cours de l'année dernière, en plus de mon dévouement à l'enseignement et à la musique, j'ai étudié la programmation et j'ai déjà réalisé deux projets en freelance, ce qui m'a donné l'occasion de mettre en pratique mes compétences de développeur.",
    aboutText3: 'Mon parcours dans la musique m\'a apporté discipline, concentration et créativité - des qualités que j\'applique maintenant au développement.'
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