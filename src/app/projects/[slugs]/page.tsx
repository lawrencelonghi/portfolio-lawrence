'use client';
import { useParams } from 'next/navigation';
import { worksData } from "@/app/data/worksData"
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const params = useParams();
  const { t } = useLanguage();
  const slug = params.slugs as string;
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const project = worksData.find(work => work.slug === slug);

  useEffect(() => {
    if (!headerRef.current || !contentRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.3
      }
    );
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">{t.projectNotFound}</h1>
          <Link 
            href="/#work" 
            className="text-white/50 hover:text-white transition-colors flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={20} />
            {t.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div ref={headerRef} className="ml-5 mr-5 md:ml-26 md:mr-24 px-5 md:px-26 pt-32 pb-16">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors mb-12 justify-center md:justify-start"
        >
          <ArrowLeft size={13} />
          {t.back}
        </Link>

        <div className="flex flex-col  md:gap-0 items-center md:items-start text-center md:text-left">
          <div className="w-full max-w-2xl"> {/* Reduzido de max-w-4xl para max-w-2xl */}
            <h1 className="text-white text-md md:text-3xl font-extralight mb-6">
              {project.title}
            </h1>
          </div>

          {/* Galeria de imagens */}
{/* Galeria de imagens */}
<section className='w-full flex flex-col gap-3 mb-10'>
  {/* Container principal - imagem e descrição lado a lado */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
    {/* Imagem */}
    <div className="w-full lg:flex-1 ">
      <div className="flex justify-center w-full">
        {project.images.slice(0, 1).map((image, index) => (
          <div
            key={index}
            className="w-full h-[250px]  relative overflow-hidden"
          >
            <Image
              src={image}
              alt={`${project.title} - imagem ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
    
    {/* Descrição */}
    <div className="w-full lg:flex-1 max-w-2xl">
      <p className="text-white/50 text-xs md:text-sm font-extralight leading-relaxed max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
        {t[project.descriptionKey as keyof typeof t]}
      </p>
    </div>
  </div>

  {/* Botões centralizados */}
  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
    <a
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 hover:bg-white/90 rounded-4xl border transition-colors text-white/50 hover:text-black text-xs font-light"
    >
      <ArrowRight size={10} />
      {t.viewProject}
    </a>
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 hover:bg-white/90 rounded-4xl border transition-colors text-white/50 hover:text-black text-xs font-light"
      >
        <Github size={10} />
        {t.code}
      </a>
    )}
  </div>
</section>


          {/* tecnologias */}
          <div className="flex flex-col gap-8 w-full max-w-2xl items-center md:items-start text-center md:text-left"> {/* Reduzido para max-w-2xl */}
            <div className='flex flex-col gap-2 w-full'>
              <h3 className="text-sm text-white/50 uppercase font-extralight tracking-wider mb-2">
                {t.technologies}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="gap-2 px-3 py-2 rounded-4xl border text-white/50 text-xs md:text-xs font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 font-light w-full items-center md:items-start">
              <div className="text-center md:text-left">
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  {t.year}
                </h3>
                <p className="text-md md:text-lg font-extralight">{project.year}</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  {t.role}
                </h3>
                <p className="text-md md:text-lg font-extralight">{t[project.roleKey as keyof typeof t]}</p>
              </div>
              {project.client && (
                <div className="text-center md:text-left">
                  <h3 className="text-xs text-white/50 uppercase tracking-wider mb-2">
                    {t.client}
                  </h3>
                  <p className="text-md md:text-lg font-extralight">{project.client}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="ml-5 mr-5 md:ml-26 md:mr-24 px-5 md:px-26 pb-32 space-y-24">
        {/* Desafios */}
        {project.challengesKey && (
          <section className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full max-w-2xl"> {/* Reduzido para max-w-2xl */}
              <h2 className="text-white text-md md:text-3xl font-extralight mb-6">{t.challenges}</h2>
              <p className="text-white/50 text-xs md:text-sm font-extralight leading-relaxed max-w-prose mx-auto md:mx-0"> {/* Adicionado max-w-prose */}
                {t[project.challengesKey as keyof typeof t]}
              </p>
            </div>
          </section>
        )}

        {/* Solução */}
        {project.solutionKey && (
          <section className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full max-w-2xl"> {/* Reduzido para max-w-2xl */}
              <h2 className="text-white text-md md:text-3xl font-extralight mb-6">{t.solution}</h2>
              <p className="text-white/50 text-xs md:text-sm font-extralight leading-relaxed max-w-prose mx-auto md:mx-0"> {/* Adicionado max-w-prose */}
                {t[project.solutionKey as keyof typeof t]}
              </p>
            </div>
          </section>
        )}


        {/* Navegação para próximo projeto */}
        <section className="pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left  mx-auto md:mx-0">
            <Link
              href="/#work"
              className="text-white/50 hover:text-white text-xs transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={13} />
              {t.backToProjects}
            </Link>
            
            {worksData.findIndex(w => w.slug === slug) < worksData.length - 1 && (
              <Link
                href={`/projects/${worksData[worksData.findIndex(w => w.slug === slug) + 1].slug}`}
                className="text-white/50 text-xs hover:text-white transition-colors flex items-center gap-2"
              >
                {t.nextProject}
                <ArrowRight size={13}/>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;