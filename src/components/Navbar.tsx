'use client'
import Link from "next/link"

export const Navbar = () => {
  return (
     <nav className="absolute top-12 left-32 right-32 text-[10px] flex gap-52 justify-end ">
        <div className="flex tracking-wide text-white/50 gap-6">
            <span className=" text-white font-extrabold">I</span>
            <Link href='#' className="nav-link">PT</Link>
            <Link href='#' className="nav-link">EN</Link>
            <Link href='#' className="nav-link">FR</Link>
          </div>  

        <div className="flex tracking-wide text-white/50  gap-8">
            <Link href='#' className="nav-link">WORK.</Link>
            <Link href='#' className="nav-link">ABOUT.</Link>
            <Link href='#' className="nav-link">CONTACT.</Link>
        </div>  
      </nav>
  )
}
