'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-none w-full px-2">
              <Image
                src={img}
                alt={`Captura ${index + 1}`}
                width={400}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-2 rounded-full hover:bg-indigo-500 transition-colors duration-300"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-2 rounded-full hover:bg-indigo-500 transition-colors duration-300"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  )
}

export default Carousel