import Image from 'next/image'
import { dataProjets } from '../data/Data'

const Projects = () => {
  return (
    <>
      {dataProjets.map((project) => (
        <div key={project.id} className="mb-10">
          <article className="relative group w-95 h-95 md:w-85 md:h-85 lg:w-152.5 lg:h-152.5
           bg-zinc-50 rounded-md flex justify-center items-center mb-8 overflow-hidden cursor-pointer">
            
            {/* Gradiente - visible en reposo, invisible en hover */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-300 to-black/35 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-md" />

            {/* Grilla - invisible en reposo, visible en hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #d4d4d8 1px, transparent 1px),
                  linear-gradient(to bottom, #d4d4d8 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Mockup */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-130 lg:h-130
            ">
            <Image
              src={project.image}
              alt={`Mockup ${project.title}`}
              fill
              className="relative z-10 transition-transform duration-300 group-hover:scale-105 object-contain"
            />
            </div>
          </article>

          <article>
            <h3 className="font-medium text-[28px] lg:text-[38px]">{project.title}</h3>
            <p className="text-[18px] lg:text-[23px] mb-4 text-zinc-500">
              {project.roles.join(' · ')}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-indigo-400 text-slate-50 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      ))}
    </>
  )
}

export default Projects