'use client'
import { FiExternalLink } from 'react-icons/fi'
import { dataProjets } from '../../data/Data'
import Image from 'next/image'
import Carousel from '../../components/Carousel'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/navigation'


const Page = () => {
  const [open, setOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const router = useRouter()

  const project = dataProjets.find((p) => p.id === 1)!
  

  const slides = project.capturas?.map((img) => ({ src: img })) ?? []

  return (
    <main className='bg-zinc-50 min-h-screen px-6 py-12 flex flex-col items-start gap-4 lg:px-55'>
      <nav className="fixed top-0 left-0 p-4 z-50">
  <button onClick={() => router.back()}>
    <IoArrowBack className='text-[40px] text-zinc-800 hover:text-indigo-500
    cursor-pointer transition-colors duration-300' />
  </button>
</nav>

      <div className='lg:flex lg:items-center lg:justify-between w-full gap-10 mb-10'>
        <div className='lg:flex lg:flex-col lg:gap-y-7'>
          <h2 className='text-[35px] lg:text-[60px] text-zinc-800 font-normal'>Aikodev</h2>

          <a href="https://aikodev.com" target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-indigo-500 transition-colors duration-300 text-[22px]">
            <FiExternalLink />
            <span>Ver sitio</span>
          </a>

          <div
            className="flex gap-2 flex-wrap p-4 rounded-md mb-7"
            style={{
              backgroundImage: `
                linear-gradient(to right, #a1a1aa 1px, transparent 1px),
                linear-gradient(to bottom, #a1a1aa 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px'
            }}
          >
            {project.tecnologias.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-zinc-800 text-slate-50 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Image
          src="/images/hero-aiko.png"
          alt=""
          width={800}
          height={800}
          className="w-95 md:w-200 lg:w-200 h-auto md:mt-10"
        />
      </div>

      <p className='mt-10 mb-4 text-20px text-zinc-700 lg:px-90 lg:text-[22px]'>
        Aiko es una academia digital de programación que forma desarrolladores desde cero con un enfoque práctico y comunitario. La plataforma permite codear en tiempo real junto a profesores y compañeros, con clases grabadas y comisiones reducidas para un acompañamiento personalizado.
      </p>
      <p className='mb-10 text-20px text-zinc-700 lg:px-90 lg:text-[22px] lg:mb-25'>
        Formé parte del equipo de desarrollo frontend, colaborando en el desarrollo de la interfaz y trabajando junto a diseñadores para mantener la coherencia visual de la plataforma.
      </p>

      {/* Mobile - carrusel */}
      <div className="w-full md:hidden">
        <Carousel images={project.capturas ?? []} />
      </div>

      {/* Tablet y desktop - grilla con lightbox */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:mb-20">
        {project.capturas?.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Captura ${index + 1}`}
            width={400}
            height={300}
            className="w-full h-50 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => { setLightboxIndex(index); setOpen(true) }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
   

    </main>
  )
}

export default Page