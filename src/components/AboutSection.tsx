// src/components/AboutSection.tsx
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const { t } = useLanguage()

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setIsVisible(true)
              setHasAnimated(true)
            }
          })
        },
        { threshold: 0.1 }
      )
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
  
      return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
      const handleScroll = () => {
        if (paragraphRef.current) {
          const rect = paragraphRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const threshold = windowHeight * 0.7
          const elementTop = rect.top
          const elementHeight = rect.height
          const pixelsPassed = threshold - elementTop
          const progress = Math.min(Math.max(pixelsPassed, 0), elementHeight)
          
          setScrollProgress(progress)
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()

      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <section id="about" ref={sectionRef} className="ml-5 mr-5 md:ml-26 md:mr-24 pb-200 ">
        <div>
          <hr className="text-white/20 h-[0.2px]"></hr>
        </div>

        <div className="mt-11 md:mt-40 grid text-center md:items-center gap-8 md:flex justify-center md:justify-between">
          <h1 className="text-3xl md:text-5xl text-white/80 font-light" style={{ letterSpacing: '-0.02em' }}>
            {t.about.split('').map((char, i) => (
              <span 
                key={i} 
                className="overflow-hidden inline-block align-bottom" 
                style={{ 
                  height: '1.2em',
                  width: char === ' ' ? '0.3em' : 'auto'
                }}
              >
                <span 
                  className={isVisible ? "animate-slot-spin" : "inline-block"}
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span style={{ height: '1.2em' }} className="flex items-center">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                  <span style={{ height: '1.2em' }} className="flex items-center">A</span>
                  <span style={{ height: '1.2em' }} className="flex items-center">B</span>
                  <span style={{ height: '1.2em' }} className="flex items-center">C</span>
                  <span style={{ height: '1.2em' }} className="flex items-center">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <div className="relative max-w-lg">
            <p 
              ref={paragraphRef}
              className="text-sm text-center md:text-left md:pl-8 font-light flex-wrap text-white/50"
            >
              {t.aboutText1}<br></br><br></br>
              {t.aboutText2}<br></br><br></br>
              {t.aboutText3}
            </p>
            
            <p 
              className="text-sm text-center md:text-left md:pl-8 font-light flex-wrap text-white absolute top-0 left-0 pointer-events-none"
              style={{
                clipPath: `inset(0 0 ${paragraphRef.current ? paragraphRef.current.offsetHeight - scrollProgress : 100}px 0)`
              }}
            >
              {t.aboutText1}<br></br><br></br>
              {t.aboutText2}<br></br><br></br>
              {t.aboutText3}
            </p>
          </div>
        </div>
     </section>
  )
}

export default AboutSection