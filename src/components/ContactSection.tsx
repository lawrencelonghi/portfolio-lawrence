import { useLanguage } from "@/contexts/LanguageContext"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);
  
  const lastAnimationTime = useRef<number>(0);
  

  

  //animacao da linha hr
useGSAP(() => {
  gsap.fromTo(
    lineRef.current,
    {
      scaleX: 0,
      transformOrigin: "right center",
    },
    {
      duration: 5,
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: lineRef.current,
        scrub: 1,
        start: "top bottom",
        end: "top 80%"
      }
    }
  );
}, []);


  return (
    <section id="contact" className="ml-5 mr-5 md:ml-26 md:mr-26  pb-12">
      <div>
        <hr ref={lineRef} className="text-white/20 h-[0.2px] " />
      </div>

      <div className=" mt-18 md:mt-40 grid text-center md:items-center gap-12 md:flex  md:justify-between">
      <div>
        <h1 className="text-white text-sm flex items-center gap-3">
          <MoveRight size={12}/>
          {t.contact}
        </h1>
      </div>

        <div className=" flex flex-col gap-8 md:mr-50 mb-5 text-left">
          <a className="text-sm  cursor-pointer hover:text-white hover:scale-105 ease-in-out duration-200 font-light text-white/50">
            lawrencelonghi@proton.me
          </a>
          <a className="text-sm  cursor-pointer hover:text-white hover:scale-105 ease-in-out duration-200 font-light text-white/50"
             href='https://www.linkedin.com/in/lawrencelonghi'
             target="_blank"
             rel="noopener noreferrer">
            linkedin.com/in/lawrencelonghi       
          </a>
          <a className="text-sm  cursor-pointer hover:text-white hover:scale-105 ease-in-out duration-200 font-light text-white/50"
             href='https://github.com/lawrencelonghi'
             target="_blank"
             rel="noopener noreferrer">
          github.com/lawrencelonghi
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;