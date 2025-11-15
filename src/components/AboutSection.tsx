import { useEffect, useRef, useState } from "react"

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const text = "ABOUT ME"

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true)
            }
          })
        },
        { threshold: 0.4 }
      )
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
  
      return () => observer.disconnect()
    }, [isVisible])

  return (
    <section id="about" ref={sectionRef} className="ml-5 mr-5 md:ml-26 md:mr-24 pb-20 ">
        <div>
          <hr className="text-white/20 h-[0.2px]"></hr>
        </div>

        <div className="mt-11 md:mt-40 grid text-center md:items-center gap-8 md:flex justify-center md:justify-between">
          <h1 className="text-3xl md:text-5xl text-white/80 font-light ">
          {text.split('').map((char, i) => (
              <div key={i} className="overflow-hidden inline-block" style={{ height: '1.2em' }}>
                <div 
                  className={isVisible ? "animate-slot-spin" : ""}
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

          <p className="text-white/80 text-sm text-center md:text-left md:pl-8 font-light max-w-lg flex-wrap">Sou músico, pianista e professor de piano, atualmente em transição de carreira para a área de desenvolvimento de software. <br></br><br></br>
          No último ano, além da dedicação ao ensino e à música, tenho estudado programação e já realizei dois projetos como freelancer, o que me proprocionou a oportunidade de por em prática meus conhecimentos como desenvolvedor.<br></br><br></br>
          Minha trajetória na música me trouxe disciplina, foco e criatividade - qualidades que agora aplico no desenvolvimento.</p>
        </div>
     </section>
  )
}

export default AboutSection