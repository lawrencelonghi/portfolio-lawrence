// src/components/WorkSection.tsx
'use client'
import Work from "./Work"
import { worksData } from "../../worksData"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useLanguage } from "@/contexts/LanguageContext"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkSection = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLHRElement>(null);

  const worksContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

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
      { threshold: 0.7 } 
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    const updateHoverPosition = () => {
      if (worksContainerRef.current && hoveredWork !== null) {
        const rect = worksContainerRef.current.getBoundingClientRect()
        setHoverPosition({
          top: rect.top,
          left: rect.left
        })
      }
    }

    if (hoveredWork !== null) {
      updateHoverPosition()
      window.addEventListener('scroll', updateHoverPosition)
      window.addEventListener('resize', updateHoverPosition)
    }

    return () => {
      window.removeEventListener('scroll', updateHoverPosition)
      window.removeEventListener('resize', updateHoverPosition)
    }
  }, [hoveredWork])

  const handleMouseEnter = (index: number) => {
    setHoveredWork(index)
    setAnimationKey(prev => prev + 1)
    
    if (worksContainerRef.current) {
      const rect = worksContainerRef.current.getBoundingClientRect()
      setHoverPosition({
        top: rect.top ,
        left: rect.left
      })
    }
  }


  return (
    <section id="work" ref={sectionRef} className="pb-11 md:pb-32 md:container-inline">
      <div className="grid md:flex md:ml-24 md:mr-24 gap-18 text-center justify-center md:justify-between items-center mt-12 md:mt-56">
        <div>
          <h1 className="text-3xl md:text-5xl text-white/80 font-light text-drop-shadow-2xl inline-flex">
            {t.projects.split('').map((char, i) => (
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
        
        <div ref={worksContainerRef} className="flex gap-3 md:gap-6">
          {hoveredWork !== null && typeof window !== 'undefined' && createPortal(
            <div 
              className="hidden md:block fixed pointer-events-none z-9999 overflow-hidden"
              style={{
                top: `${hoverPosition.top - 320}px`,
                left: `${hoverPosition.left - 70}px`,
              }}
            >
              <Image 
                src={worksData[hoveredWork].hoverImage} 
                alt={worksData[hoveredWork].description} 
                width={1200} 
                height={600} 
                className="object-fit rounded-lg w-[600px] h-[300px] animate-reveal-left origin-right" 
              />
            </div>,
            document.body
          )}
          
          {worksData.map((work, index) => (
            <div 
              key={work.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setHoveredWork(null)}
              className="flex"
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