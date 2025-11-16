import { useLanguage } from "@/contexts/LanguageContext"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);
  
  const lastAnimationTime = useRef<number>(0);
  
  // Alfabeto para o efeito de embaralhamento
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // animação do titulo
  useGSAP(() => {
    if (!titleRef.current) return;

    const chars = Array.from(titleRef.current.children);
    const finalText = t.contact;

    gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          const now = Date.now();
          const timeSinceLastAnimation = now - lastAnimationTime.current;
          
          if (timeSinceLastAnimation < 10000 && lastAnimationTime.current !== 0) {
            chars.forEach((char, i) => {
              char.textContent = finalText[i];
            });
            return;
          }
          
          lastAnimationTime.current = now;
          
          // Embaralha TODAS as letras simultaneamente
          let frame = 0;
          const maxFrames = 40; // Total de frames de embaralhamento
          
          const scrambleInterval = setInterval(() => {
            frame++;
            
            chars.forEach((char, index) => {
              // Cada letra para de embaralhar progressivamente
              const stopFrame = Math.floor((index / chars.length) * maxFrames);
              
              if (frame <= stopFrame + 20) {
                // Ainda embaralhando
                const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                char.textContent = randomLetter;
              } else {
                // Mostra letra final
                char.textContent = finalText[index];
              }
            });
            
            // Para quando todas as letras estiverem finalizadas
            if (frame >= maxFrames + 20) {
              clearInterval(scrambleInterval);
              // Garante que todas as letras estão corretas
              chars.forEach((char, i) => {
                char.textContent = finalText[i];
              });
            }
          }, 18); // 30ms entre cada frame
        }
      }
    });
  }, [t.contact]);

  //animacao da linha hr
useGSAP(() => {
  if (!lineRef.current) return;

  gsap.fromTo(
    lineRef.current,
    {
      scaleX: 0,
      transformOrigin: "right center"
    },
    {
      scaleX: 1,
      transformOrigin: "right center",
      ease: "none",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
      }
    }
  );
}, []);

  return (
    <section id="contact" className="ml-5 mr-5 md:ml-26 md:mr-24  pb-36">
      <div>
        <hr ref={lineRef} className="text-white/20 h-[0.2px] " />
      </div>

      <div className=" mt-18 md:mt-40 grid text-center md:items-center gap-12 md:flex justify-center md:justify-between">
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl text-white/80 font-light"
        >
          {t.contact.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className=" flex gap-8 md:mr-50 mb-5 justify-center text-center">
          <span className="text-sm text-center justify-baseline font-light text-white/50">
            lawrencelonghi@proton.me
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;