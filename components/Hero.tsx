
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('hero')

  return (
    <section className='mb-14 md:mt-14 lg:px-48'>
      <h2 className='font-extrabold text-[36px] py-4 lg:text-[60px] text-zinc-800'>{t('greeting')}</h2>
      <p className='font-light text-[20px] lg:text-[24px] text-zinc-600 leading-8 lg:leading-10 lg:mb-10 whitespace-pre-line'>
        {`${t('role')}\n${t('description')}\n${t('quote')}`}
      
      </p>
    </section>
  )
}

export default Hero