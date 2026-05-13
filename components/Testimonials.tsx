'use client'
import { FiExternalLink } from 'react-icons/fi'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
  const t = useTranslations('testimonials')

  return (
    <section className="flex flex-col gap-y-9 md:flex-row lg:flex-row lg:gap-x-28 
    lg:justify-center mb-8 text-[20px] md:gap-x-7 md:justify-center lg:my-20">
      <article className="bg-zinc-50 lg:w-140 lg:h-60 border border-zinc-400 md:w-85 md:h-60
      text-zinc-600 p-2 rounded-md lg:p-6 lg:text-2xl lg:leading-9 lg:font-medium">
        <p>{t('quote1')}</p>
        <a 
          href="https://www.instagram.com/p/C85dYVmx-ky/?img_index=1"
          target="_blank"
          rel="noopener noreferrer"
          className='text-zinc-800 text-[25px] cursor-pointer hover:text-indigo-500'
        >
          <span className='flex items-center gap-x-3 mt-5'>{t('author1')} <FiExternalLink/></span>
        </a>
      </article>
      <article className="bg-zinc-50 lg:w-140 lg:h-60 border border-zinc-400 md:w-85 md:h-60
      text-zinc-600 p-2 rounded-md lg:p-6 lg:text-2xl lg:leading-9 lg:font-medium">
        <p>{t('quote2')}</p>
        <p className="text-zinc-800 lg:mt-7">{t('author2')}</p>
      </article>
    </section>
  )
}

export default Testimonials