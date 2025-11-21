'use client'
import { Github, Linkedin } from 'lucide-react';
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 p-1 px-8 rounded-xl bg-white/15">
      <a 
        href="https://github.com/lawrencelonghi" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={'20px'} className="text-white/70 hover:text-white hover:fill-white transition-colors duration-300 " />
      </a>
      <span className='text-3xl font-thin text-white/30'>|</span>
      <a 
        href='https://www.linkedin.com/in/lawrencelonghi'
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={'20px'} className="text-white/70 hover:text-white hover:fill-white transition-colors duration-300" />
      </a>
    </div>
  )
}