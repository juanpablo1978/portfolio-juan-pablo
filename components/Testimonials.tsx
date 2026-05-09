

const Testimonials = () => {
  return (
     <section className="flex flex-col gap-y-9 md:flex-row lg:flex-row lg:gap-x-28 
     lg:justify-center mb-8 text-[20px] md:gap-x-7 md:justify-center">
    <article className="bg-linear-to-b from-zinc-300 to-black/30 md:w-85 lg:w-140 lg:h-60
     text-zinc-800 p-2 rounded-md lg:p-6 lg:text-2xl lg:leading-9 lg:font-medium">
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ipsa voluptatem adipisci ratione aliquam labore harum voluptate."
      </p>
       <p className="text-zinc-950 lg:mt-7">Pedro Zanuttini, Desarrollador Backend</p>
    </article>
    <article className="bg-linear-to-b from-zinc-300 to-black/30 md:w-85 lg:w-140 lg:h-60
     text-zinc-800 p-2 rounded-md lg:p-6 lg:text-2xl lg:leading-9 lg:font-medium">
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ipsa voluptatem adipisci ratione aliquam labore harum voluptate."
      </p>
      <p className="text-zinc-950 lg:mt-7">Cecilia Cistari, Diseñadora</p>
    </article>
    </section>
  )
}

export default Testimonials