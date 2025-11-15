'use client'
import Work from "./Work"
import { worksData } from "../../worksData"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const WorkSection = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const text = "PROJECTS"

  // Anima quando a seção entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setAnimationKey(1)
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.3 } // Ativa quando 30% da seção está visível
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const handleMouseEnter = (index: number) => {
    setHoveredWork(index)
    setAnimationKey(prev => prev + 1)
  }

  return (
    <section ref={sectionRef} className="pb-11 md:pb-32 md:container-inline">
      {hoveredWork !== null && typeof window !== 'undefined' && createPortal(
        <div 
          className="hidden md:block fixed pointer-events-none z-9999 top-12 -right-52 -translate-x-1/2 overflow-hidden"
        >
          <Image 
            src={worksData[hoveredWork].hoverImage} 
            alt={worksData[hoveredWork].description} 
            width={1200} 
            height={600} 
            className="object-fit rounded-xs border border-amber-50 w-[600px] h-[300px] animate-reveal-left origin-right" 
          />
        </div>,
        document.body
      )}

      <div className="grid md:flex md:ml-24 md:mr-24 gap-6 text-center justify-center md:justify-between items-center mt-11 md:mt-56">
        <div>
          <h1 className="text-3xl md:text-5xl text-white/80 font-light text-drop-shadow-2xl inline-flex">
            {text.split('').map((char, i) => (
              <div key={`${i}-${animationKey}`} className="overflow-hidden inline-block" style={{ height: '1.2em' }}>
                <div 
                  className="animate-slot-spin"
                  style={{ 
                    animationDelay: `${i * 0.05}s`
                  }}
                >
                  <div style={{ height: '1.2em' }} className="flex items-center">{char}</div>
                  <div style={{ height: '1.2em' }} className="flex items-center">A</div>
                  <div style={{ height: '1.2em' }} className="flex items-center">B</div>
                  <div style={{ height: '1.2em' }} className="flex items-center">C</div>
                  <div style={{ height: '1.2em' }} className="flex items-center">{char}</div>
                </div>
              </div>
            ))}
          </h1>
        </div>
        <div className="flex gap-3 md:gap-6">
          {worksData.map((work, index) => (
            <div 
              key={work.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <Work
                href='/rick'
                id={work.id}
                title={work.title}
                description={work.description}
                image={work.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection