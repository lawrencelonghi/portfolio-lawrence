import { useEffect, useRef, useState } from "react"

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const text = "SOBRE MIM"

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
          
          // Altura de referência (ponto onde o texto fica branco)
          const threshold = windowHeight * 0.7// 50% da altura da tela
          
          // Posição do topo do parágrafo
          const elementTop = rect.top
          const elementHeight = rect.height
          
          // Calcula quantos pixels já passaram pelo threshold
          const pixelsPassed = threshold - elementTop
          
          // Progresso de 0 até o height total do elemento
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
            {text.split('').map((char, i) => (
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
              Sou músico, pianista e professor de piano, atualmente em transição de carreira para a área de desenvolvimento de software. <br></br><br></br>
              No último ano, além da dedicação ao ensino e à música, tenho estudado programação e já realizei dois projetos como freelancer, o que me proprocionou a oportunidade de por em prática meus conhecimentos como desenvolvedor.<br></br><br></br>
              Minha trajetória na música me trouxe disciplina, foco e criatividade - qualidades que agora aplico no desenvolvimento.
            </p>
            
            <p 
              className="text-sm text-center md:text-left md:pl-8 font-light flex-wrap text-white absolute top-0 left-0 pointer-events-none"
              style={{
                clipPath: `inset(0 0 ${paragraphRef.current ? paragraphRef.current.offsetHeight - scrollProgress : 100}px 0)`
              }}
            >
              Sou músico, pianista e professor de piano, atualmente em transição de carreira para a área de desenvolvimento de software. <br></br><br></br>
              No último ano, além da dedicação ao ensino e à música, tenho estudado programação e já realizei dois projetos como freelancer, o que me proprocionou a oportunidade de por em prática meus conhecimentos como desenvolvedor.<br></br><br></br>
              Minha trajetória na música me trouxe disciplina, foco e criatividade - qualidades que agora aplico no desenvolvimento.
            </p>
          </div>
        </div>
     </section>
  )
}

export default AboutSection