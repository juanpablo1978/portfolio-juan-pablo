'use client'
import Image from 'next/image'
import { dataEducacion } from '../../../data/Data'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('about')

  return (
    <main className="bg-zinc-50 min-h-screen px-6 flex flex-col justify-center lg:px-55 py-12 gap-10">
      <section className='flex flex-col lg:flex-row gap-y-12 my-19 lg:gap-x-10 lg:items-center'>
        <div className='flex flex-col gap-y-10'>
          <h2 className='text-zinc-800 lg:text-[60px] font-medium text-center'>{t('title')}</h2>
          <p className='text-[20px] text-zinc-700 lg:px-10 whitespace-pre-line'>
            {t('bio')}
          </p>
        </div>
        <Image
          src="/images/amsterdam.jpg"
          alt=""
          width={800}
          height={800}
          className="w-95 md:w-200 lg:w-150 h-auto md:mt-10"
        />
      </section>

      <section className='lg:flex lg:flex-col lg:justify-between'>
        <article>
          <h3 className='text-zinc-800 text-[35px] lg:text-[45px] mb-6'>{t('education')}</h3>
          {dataEducacion.map((item) => (
            <div key={item.year + item.curso} className='flex items-center gap-4 leading-14'>
              <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
                {item.year}
              </span>
              <p className='text-[20px] text-zinc-500'>{item.curso} - <span className='text-zinc-700'>{item.institucion}</span></p>
            </div>
          ))}
        </article>

        <article>
          <h3 className='text-zinc-800 text-[35px] lg:text-[45px] my-6'>{t('experience')}</h3>
          <div className='flex items-center gap-4 mb-10'>
            <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
              2022
            </span> -
            <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
              2026
            </span>
            <p className='text-[20px] text-zinc-500'>Aikodev - <span className='text-zinc-700'>{t('experienceRole')}</span></p>
          </div>
        </article>

        <div
          className="flex gap-4 p-6 rounded-md w-fit mb-5 mt-14"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a1a1aa 1px, transparent 1px),
              linear-gradient(to bottom, #a1a1aa 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          
         <a   href="/cv-es.pdf"
            download
            className="px-6 py-3 bg-zinc-800 text-zinc-50 rounded-full text-sm hover:bg-indigo-500 transition-colors duration-300"
          >
            CV Español
          </a>
          
          <a  href="/cv-pt.pdf"
            download
            className="px-6 py-3 bg-zinc-800 text-zinc-50 rounded-full text-sm hover:bg-indigo-500 transition-colors duration-300"
          >
            CV Português
          </a>
        </div>
      </section>
    </main>
  )
}

export default Page