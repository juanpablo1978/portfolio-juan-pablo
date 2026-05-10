import Image from 'next/image'
import { dataEducacion } from '../../data/Data'

const Page = () => {
  return (
    <main className="bg-zinc-50 min-h-screen px-6 flex flex-col justify-center lg:px-55 py-12 gap-10">
        <section className='flex flex-col lg:flex-row gap-y-12 my-19 lg:gap-x-10 lg:items-center'>
            <p className='text-[20px] text-zinc-700 lg:px-10'>
                Desde que escribí mis primeras líneas de HTML y CSS tuve claro que lo visual era lo mío — los detalles, el espacio, los colores, el contraste. Sin embargo, como muchos developers, seguí el camino natural hacia el código hasta que en algún momento me detuve y me pregunté por qué no dedicarme de lleno a lo que realmente me apasiona.
Hoy me defino como Frontend Developer con foco en UI — diseño interfaces en Figma y las llevo a código con atención obsesiva al detalle y fidelidad al pixel perfect. Me importa que lo que se ve en pantalla sea exactamente lo que fue pensado. Ni más, ni menos.
            </p>
             <Image
                      src="/images/amsterdam.jpg"
                      alt=""
                      width={800}
                      height={800}
                      className="w-95 md:w-200 lg:w-150 h-auto md:mt-10"
                    />
        </section>
        <section className='lg:flex lg:justify-between'>
            <article>
  <h3 className='text-zinc-800 text-[35px] lg:text-[50px] mb-6'>Educación</h3>
  {dataEducacion.map((item) => (
    <div key={item.year + item.curso} className='flex items-center gap-4'>
      <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
        {item.year}
      </span>
      <p className='text-[20px] text-zinc-500'>{item.curso} - {item.institucion}</p>
    </div>
  ))}
</article>
        <article>
  <h3 className='text-zinc-800 text-[35px] lg:text-[50px] my-6'>Experiencia</h3>
  
    <div className='flex items-center gap-4 mb-10'>
      <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
        2022
      </span> -
        <span className="text-zinc-700 h-8 w-20 bg-white/15 background-blur-sm rounded-lg font-bold flex justify-center items-center lg:h-8.75 lg:w-20 text-[22px] lg:text-[25px]">
        2026
      </span>
      <p className='text-[20px] text-zinc-500'>Aikodev - Desarrolador Frontend - Diseñador UX/UI </p>
    </div>
  
</article>
        </section>
    </main>
  )
}

export default Page