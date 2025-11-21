'use client'
import Work from "./Work"
import { worksData } from "../../worksData"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { MoveRight } from 'lucide-react';

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLHRElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  return (
    <section className="flex flex-col gap-36 ml-5 mr-5 md:ml-26 md:mr-24 pb-20">
      <div>
        <h1 className="text-white text-sm flex items-center gap-3">
          <MoveRight size={12}/>
          projects
        </h1>
      </div>
      
      {/* Bento Grid - 1 coluna mobile, 2 colunas desktop com offset alternado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-20 mx-auto max-w-7xl px-5 md:px-16">
        {worksData.map((work, index) => (
          <div 
            key={work.id}
            className={index % 2 === 1 ? 'md:mt-16' : index > 1 ? 'md:-mt-16' : ''}
          >
            <Work
              id={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              href={work.hrefEx}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection