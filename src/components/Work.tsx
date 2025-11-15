import Image from "next/image"
import Link from "next/link"
const Work = (work: {id: number, title: string, description: string, image: string, href: string}) => {
  return (
    // <div className="flex flex-col items-center opacity-35 hover:opacity-100 ease-in-out duration-400 gap-3">
    //   <Link href={work.href}>
    //     <Image
    //       src={work.image}
    //       alt={work.description}
    //       width={500}
    //       height={500}
    //       className="object-contain w-full rounded-xl max-h-96"
    //   />
    //   </Link>
    //    <h1 className="text-md">{work.title}</h1>
    //     <p className="text-xs text-white/50 font-light">{work.description}</p>
    // </div>

        <div className="flex flex-col items-center opacity-35 hover:opacity-100 ease-in-out duration-400 gap-3">
          <Link href={work.href}>
            <Image
              src={work.image}
              alt={work.description}
              width={500}
              height={500}
              className="object-cover rounded-xs border border-amber-50 w-36 h-36"
          />
          </Link>
      </div>
  )
}

export default Work