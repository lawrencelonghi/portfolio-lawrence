'use client'
import Work from "./Work"
import { worksData } from "../../worksData"
const WorkSection = () => {
  return (
    <section className="pb-6">
      <div className="flex flex-col justify-center items-center gap-26 mt-11 md:mt-32">
        {worksData.map((work:{id: number, title: string, description: string, image: string, href: string}) => (
          <Work
            href={work.href}
            key={work.id}
            id={work.id}
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkSection