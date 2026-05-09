import React from 'react'

const Hero = () => {
  return (
    <section className='mb-14 md:mt-14 lg:px-48'>
      <h2 className='font-extrabold text-[36px] py-4 lg:text-[60px] text-zinc-800'>Hola, soy Juan Pablo.</h2>
      <p className='font-light text-[20px] lg:text-[24px] text-zinc-600 leading-8 lg:leading-10 lg:mb-10
      whitespace-pre-line'>
         {`Frontend Developer · UI Focus.
Del diseño en Figma al componente listo para integrar.
"Uno de nuestros desarrolladores frontend con más tiempo en Aiko"`}
      <a 
  href="https://www.instagram.com/p/C85dYVmx-ky/?img_index=1"
  target="_blank"
  rel="noopener noreferrer"
  className='text-zinc-800 text-[25px] cursor-pointer'
>
  -- Aikodev
</a>
      </p>
    </section>
  )
}

export default Hero