'use client'
import { Github, Linkedin, Download } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 p-1 px-8 rounded-xl bg-white/15">
      <a 
        href="https://github.com/lawrencelonghi" 
        target="_blank"
        rel="noopener noreferrer"
        className='group p-5 -m-5'
      >
        <Github 
          size={'20px'} 
          className="text-white/70 group-hover:text-white group-hover:fill-white transition-colors duration-300"
        />
      </a>
      
      <span className='text-3xl font-thin text-white/30'>|</span>
       
      <a 
        href='https://www.linkedin.com/in/lawrence-longhi'
        target="_blank"
        rel="noopener noreferrer"
        className='group p-5 -m-5'
      >
        <Linkedin 
          size={'20px'} 
          className="text-white/70 group-hover:text-white group-hover:fill-white transition-colors duration-300"
        />
      </a>

    </div>
  )
}