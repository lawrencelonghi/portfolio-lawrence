import { useLanguage } from "@/contexts/LanguageContext"
import { useGSAP } from "@gsap/react";
import { MoveRight } from "lucide-react";
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
        width: 0,
      },
      {
        duration: 5,
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current ,
          scrub: 1,
          start: "top bottom",
          end: "top center"
        }
      }
    );
  }, [lineRef.current]);
  
 

  return (
    <section id="about" className="ml-5 mr-5 md:ml-26 md:mr-26 pb-20">
      <div>
        <hr ref={lineRef} className="text-white/20 h-[0.2px]" />
      </div>

      <div className="mt-12 md:mt-30 grid text-center gap-12 md:gap-16 md:flex md:flex-col justify-center ">
        <div>
          <h1 className="text-white text-sm flex items-center gap-3">
            <MoveRight size={12}/>
            {t.aboutMe}
          </h1>
        </div>

        <div className="flex justify-between">
        <div ref={paragraphContainerRef} className="relative max-w-lg">
          {paragraphs.map((paragraph, pIndex) => (
            <p 
              key={pIndex}
              className="text-2xl text-left  font-extralight mb-4 last:mb-0"
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
      </div>
    </section>
  );
};

export default AboutSection;