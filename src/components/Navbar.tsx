'use client'
import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-12 left-32 right-32 text-[10px] flex gap-52 justify-end max-lg:left-8 max-lg:right-8 max-lg:gap-0 max-lg:justify-between max-lg:items-center">
        {/* Desktop Menu - Language */}
        <div className="flex tracking-wide text-white/50 gap-6 max-lg:hidden">
          <span className="text-white font-extrabold">I</span>
          <Link href='#' className="nav-link">PT</Link>
          <Link href='#' className="nav-link">EN</Link>
          <Link href='#' className="nav-link">FR</Link>
        </div>  

        {/* Desktop Menu - Navigation */}
        <div className="flex tracking-wide text-white/50 gap-8 max-lg:hidden">
          <Link href='#' className="nav-link">WORK.</Link>
          <Link href='#' className="nav-link">ABOUT.</Link>
          <Link href='#' className="nav-link">CONTACT.</Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-lg:flex flex-col gap-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-px bg-white/50 transition-all duration-400 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
          <span className={`w-7 h-px bg-white/50 transition-all duration-400 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`hidden max-lg:block fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-in ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {/* Language Selection */}
          <div className={`flex tracking-wide text-white/50 gap-6 text-base transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
               style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}>
            <span className="text-white font-extrabold">I</span>
            <Link href='#' className="nav-link" onClick={() => setIsOpen(false)}>PT</Link>
            <Link href='#' className="nav-link" onClick={() => setIsOpen(false)}>EN</Link>
            <Link href='#' className="nav-link" onClick={() => setIsOpen(false)}>FR</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col tracking-wide text-white/50 gap-8 text-2xl text-center">
            <Link href='#' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              WORK.
            </Link>
            <Link href='#' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              ABOUT.
            </Link>
            <Link href='#' 
                  className={`nav-link transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: isOpen ? '750ms' : '0ms' }}
                  onClick={() => setIsOpen(false)}>
              CONTACT.
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}