'use client'
import { FiExternalLink, FiGithub,FiFigma  } from 'react-icons/fi'
import { dataProjets } from '../../../data/Data'
import Image from 'next/image'
import Carousel from '../../../components/Carousel'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const router = useRouter()
  const t = useTranslations('nowaPolonia')

  const project = dataProjets.find((p) => p.id === 3)!
  const slides = project.capturas?.map((img) => ({ src: img })) ?? []

  return (
    <main className='bg-zinc-50 min-h-screen px-6 py-12 flex flex-col items-start gap-4 lg:px-55'>
      <div className='lg:flex lg:items-center lg:justify-between w-full gap-10 mb-10'>
        <div className='lg:flex lg:flex-col lg:gap-y-7'>
          <h2 className='text-[35px] lg:text-[60px] text-zinc-800 font-normal'>{t('title')}</h2>
          <a href="https://asociacion-nueva-polonia.vercel.app/" target="_blank" className="flex items-center gap-2
           text-zinc-500 hover:text-indigo-500 transition-colors duration-300 text-[22px]">
            <FiExternalLink />
            <span>{t('verSitio')}</span>
          </a>
          <a href="https://github.com/juanpablo1978/asociacion-nueva-polonia" target="_blank" className="flex 
          items-center gap-2 text-zinc-500 hover:text-indigo-500 transition-colors duration-300 text-[22px]">
            <FiGithub />
            <span>{t('verRepo')}</span>
          </a>
             <a href="https://www.figma.com/design/VhVbEYvaVlwS0Qk1C6iamx/Nowa-Polonia?node-id=0-1&p=f&t=53fK0srn0XNDBk4C-0" target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-indigo-500 transition-colors duration-300 text-[22px]">
            <FiFigma />
            <span>{t('verFigma')}</span>
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
              <span key={tech} className="px-3 py-1 rounded-full bg-zinc-800 text-slate-50 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Image
          src="/images/hero-nowa.png"
          alt=""
          width={800}
          height={800}
          className="w-95 md:w-200 lg:w-200 h-auto md:mt-10"
        />
      </div>

      <p className='mb-10 text-20px text-zinc-700 lg:px-90 lg:text-[22px] lg:my-25 whitespace-pre-line'>
        {t('descripcion')}
      </p>

      <div className="w-full md:hidden">
        <Carousel images={project.capturas ?? []} />
      </div>

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