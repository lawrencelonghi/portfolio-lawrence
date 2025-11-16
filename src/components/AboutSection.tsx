import { useLanguage } from "@/contexts/LanguageContext"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { t } = useLanguage();
  const lineRef = useRef<HTMLHRElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphContainerRef = useRef<HTMLDivElement>(null);
  const lastTitleAnimationTime = useRef<number>(0);
  
  // Array de parágrafos separados
  const paragraphs = [t.aboutText1, t.aboutText2, t.aboutText3];
  
  // Alfabeto para o efeito de embaralhamento
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Animação do título
  useGSAP(() => {
    if (!titleRef.current) return;

    const chars = Array.from(titleRef.current.children);
    const finalText = t.about;

    gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          const now = Date.now();
          const timeSinceLastAnimation = now - lastTitleAnimationTime.current;
          
          if (timeSinceLastAnimation < 10000 && lastTitleAnimationTime.current !== 0) {
            chars.forEach((char, i) => {
              char.textContent = finalText[i];
            });
            return;
          }
          
          lastTitleAnimationTime.current = now;
          
          let frame = 0;
          const maxFrames = 40;
          
          const scrambleInterval = setInterval(() => {
            frame++;
            
            chars.forEach((char, index) => {
              const stopFrame = Math.floor((index / chars.length) * maxFrames);
              
              if (frame <= stopFrame + 20) {
                const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                char.textContent = randomLetter;
              } else {
                char.textContent = finalText[index];
              }
            });
            
            if (frame >= maxFrames + 20) {
              clearInterval(scrambleInterval);
              chars.forEach((char, i) => {
                char.textContent = finalText[i];
              });
            }
          }, 18);
        }
      }
    });
  }, [t.about]);

  // Animação dos parágrafos - revelação de cor por scroll
  useGSAP(() => {
    if (!paragraphContainerRef.current) return;

    // Seleciona todos os spans de todos os parágrafos
    const allChars = paragraphContainerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      allChars,
      {
        color: "rgba(255, 255, 255, 0.3)",
      },
      {
        color: "rgba(255, 255, 255, 1)",
        stagger: {
          each: 0.02,
          from: "start"
        },
        ease: "none",
        scrollTrigger: {
          trigger: paragraphContainerRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        }
      }
    );
  }, [paragraphs]);

  //animacao hr
  useGSAP(() => {
         gsap.fromTo(
      lineRef.current,
      {
        width: "0px",
      },
      {
        width: "100%",
        stagger: {
          each: 0.02,
          from: "start"
        },
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 100%",
          end: "bottom 90%",
          scrub: 1,
        }
      }
    );
  }, [lineRef.current]);
  
 

  return (
    <section id="about" className="ml-5 mr-5 md:ml-26 md:mr-24 pb-20">
      <div>
        <hr ref={lineRef} className="text-white/20 h-[0.2px]" />
      </div>

      <div className="mt-11 md:mt-40 grid text-center md:items-center gap-8 md:flex justify-center md:justify-between">
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl text-white/80 font-light"
          style={{ letterSpacing: '-0.02em' }}
        >
          {t.about.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div ref={paragraphContainerRef} className="relative max-w-lg">
          {paragraphs.map((paragraph, pIndex) => (
            <p 
              key={pIndex}
              className="text-sm text-left md:pl-8 font-extralight mb-4 last:mb-0"
            >
              {paragraph.split(" ").map((word, wIndex) => (
                <span key={wIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                  {word.split("").map((char, cIndex) => (
                    <span key={cIndex} className="char" style={{ display: "inline" }}>
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;