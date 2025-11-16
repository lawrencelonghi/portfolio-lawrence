// src/components/Navbar.tsx
'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleLanguageChange = (lang: 'pt' | 'en' | 'fr') => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 px-32 py-12 text-[10px]
          flex gap-52 justify-end 
          max-lg:px-8 max-lg:gap-0 max-lg:justify-between max-lg:items-center
          transition-transform duration-300
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex tracking-wide text-white/50 gap-6 max-lg:hidden">
          <span className="text-white font-extrabold">I</span>
          <button 
            onClick={() => handleLanguageChange('pt')} 
            className={`nav-link ${language === 'pt' ? 'text-white' : ''}`}
          >
            PT
          </button>
          <button 
            onClick={() => handleLanguageChange('en')} 
            className={`nav-link ${language === 'en' ? 'text-white' : ''}`}
          >
            EN
          </button>
          <button 
            onClick={() => handleLanguageChange('fr')} 
            className={`nav-link ${language === 'fr' ? 'text-white' : ''}`}
          >
            FR
          </button>
        </div>  

        <div className="flex tracking-wide text-white/50 gap-8 max-lg:hidden">
          <Link href='#work' className="nav-link">{t.projects}.</Link>
          <Link href='#about' className="nav-link">{t.about}.</Link>
          <Link href='#contact' className="nav-link">{t.contact}.</Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-lg:flex flex-col gap-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-px bg-white/50 transition-all duration-400 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
          <span className={`w-7 h-px bg-white/50 transition-all duration-400 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
        </button>
      </nav>

      <div className={`hidden max-lg:block fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-in ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12">
          <div className={`flex tracking-wide text-white/50 gap-6 text-base transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
               style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}>
            <span className="text-white font-extrabold">I</span>
            <button 
              onClick={() => handleLanguageChange('pt')} 
              className={`nav-link ${language === 'pt' ? 'text-white' : ''}`}
            >
              PT
            </button>
            <button 
              onClick={() => handleLanguageChange('en')} 
              className={`nav-link ${language === 'en' ? 'text-white' : ''}`}
            >
              EN
            </button>
            <button 
              onClick={() => handleLanguageChange('fr')} 
              className={`nav-link ${language === 'fr' ? 'text-white' : ''}`}
            >
              FR
            </button>
          </div>

          <div className="flex flex-col tracking-wide text-white/50 gap-8 text-2xl text-center">
            <Link href='#work' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              {t.projects}
            </Link>
            <Link href='#about' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              {t.about}
            </Link>
            <Link href='#contact' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '750ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              {t.contact}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}