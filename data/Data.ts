interface Proyecto {
  id: number
  title: string
  image: string
  tecnologias: string[]
  roles: string[]
  link: string
  capturas?: string[]
}


export const dataProjets: Proyecto[] = [
  {
    id: 1,
    title: "Aikodev Web (Aikodev)",
    image: "/images/aiko-front.png",
    tecnologias: ["Next.js", "Tailwind", "Typescript", "Figma"],
    roles:  ["Frontend Developer"],
        link: "/aikodev",
          capturas: [
    '/images/about-aiko.png',
    '/images/cursos-aiko.png',
     '/images/login-aiko.png',
    '/images/preguntas-aiko.png',
    '/images/testimonios-aiko.png',
  ]
  },
  {
    id: 2,
    title: "Ghibli Api (Aikodev)",
    tecnologias: ["React", "Storybook", "Tailwind", "Figma"],
    image: "/images/mi-vecino.png",
    roles:  ["Frontend Developer", "UI Designer"],
      link: "/ghibli",
               capturas: [
    '/images/ghibli-about.png',
    '/images/ghibli-about2.png',
     '/images/ghibli-doc.png',
    '/images/ghibli-support.png',
    '/images/ghibli-try.png',
    '/images/ghibli-print.png'
  ]
  },
   {
    id: 3,
    title: "Nova Polonia",
    tecnologias: ["Next.js", "Tailwind", "Typescript", "Figma"],
    image: "/images/nowa-ok.png",
    roles:  ["Frontend Developer", "UI Designer"],
        link: "/novapolonia"
  },
   {
    id: 4,
    title: "Components Library",
    tecnologias: ["Next.js", "Tailwind", "Storybook", "Figma"],
    image: "/images/components-front.png",
    roles:  ["Frontend Developer", "UI Designer"],
     link: "/components"
  }
];

export const dataEducacion = [
  { year: '2021', curso: 'Desarrollo Web', institucion: 'CoderHouse' },
  { year: '2022', curso: 'JavaScript', institucion: 'CoderHouse' },
  { year: '2022', curso: 'React.js', institucion: 'CoderHouse' },
  { year: '2023', curso: 'Figma', institucion: 'Jon Mircha' },
  { year: '2025', curso: 'UI/UX Design', institucion: 'Jon Mircha' },
]