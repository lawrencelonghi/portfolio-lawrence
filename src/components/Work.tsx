import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { div, span } from "framer-motion/client"

const Work = (work: {
  id: number, 
  title: string, 
  description: string, 
  image: string, 
  slug: string
  technologies: string[]
}) => {

  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col w-full border border-white/20 rounded-2xl">
      <div>

        <Link href={`/projects/${work.slug}`}>
          <Image
            src={work.image}
            alt={work.description}
            width={400}
            height={300}
            className="object-cover w-full h-auto rounded-t-2xl"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-3 p-6">

        <h1 className="text-white text-lg">{work.title}</h1>

        <p className="text-white/50 text-xs">{t[work.description as keyof typeof t]}</p>

<div className="flex gap-2">
  {work.technologies.slice(0,3).map((tec, i) => (
    <div key={i} className="flex rounded-sm px-1 py-1 h-full items-center bg-neutral-800">
      <span className="text-[11px]">{tec}</span>
    </div>
  ))}
  {work.technologies.length > 3 && (
    <div className="flex rounded-sm px-1 py-1 h-full items-center bg-neutral-800">
      <span className="text-[11px]">+{work.technologies.length - 3}</span>
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default Work