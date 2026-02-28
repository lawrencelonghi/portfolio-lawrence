import Work from "./Work"
import { worksData } from "../app/data/worksData"
import { useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { MoveRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLHRElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

useGSAP(() => {
  const cards = gsap.utils.toArray(worksContainerRef.current!.children);
  
  gsap.fromTo(
    cards,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: worksContainerRef.current,
        start: "top 90%",
      }
    }
  )
})

  return (
    <section id="work" className="flex flex-col gap-36 ml-5 mr-5 md:ml-26 md:mr-24 pb-20">
      <div>
        <h1 className="text-white text-sm flex items-center gap-3">
          <MoveRight size={12}/>
          {t.projects}
        </h1>
      </div>
      
      <div ref={worksContainerRef} className="md:flex gap-10 justify-center">
        {worksData.map((work, index) => (
          <div key={work.id}>
            <Work
              id={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              slug={work.slug}
              technologies={work.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection