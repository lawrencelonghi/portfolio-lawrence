'use client'
import { Github, Linkedin } from 'lucide-react';
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 p-1 px-8 rounded-xl bg-white/15">
      <Link 
        href="https://github.com/lawrencelonghi" 
        className="nav-link"
      >
        <Github size={'20px'} className="text-white/70 hover:text-white hover:fill-white transition-colors duration-300 " />
      </Link>
      <span className='text-3xl font-thin text-white/30'>|</span>
      <Link 
        href='https://www.linkedin.com/in/lawrencelonghi'
        className="nav-link"
      >
        <Linkedin size={'20px'} className="text-white/70 hover:text-white hover:fill-white transition-colors duration-300" />
      </Link>
    </div>
  )
}