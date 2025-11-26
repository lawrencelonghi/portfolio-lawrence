import Image from "next/image"
import Link from "next/link"

const Work = (work: {
  id: number, 
  title: string, 
  description: string, 
  image: string, 
  slug: string
}) => {
  return (
    <div className="flex flex-col opacity-50 hover:opacity-100 duration-300 gap-3">
      <Link href={`/projects/${work.slug}`} className="block w-full">
        <div className="relative w-full aspect-square overflow-hidden rounded-xs">
          <Image
            src={work.image}
            alt={work.description}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <h1 className="text-white text-md">{work.title}</h1>
      <p className="text-white/50 text-xs">{work.description}</p>
    </div>
  )
}

export default Work