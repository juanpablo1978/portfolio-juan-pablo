'use client'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'pt' : 'es'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <>
      <header className="bg-zinc-50 flex items-center justify-between text-zinc-800 w-full lg:px-55 h-20 px-6">
        <span className="font-extrabold text-[43px] lg:text-[48px] hover:text-indigo-500 transition-colors duration-300">
          <Link href={`/${locale}`}>JP.</Link>
        </span>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleLocale}
            className="cursor-pointer text-[20px]  hover:text-indigo-500 transition-colors duration-300"
          >
            {locale === 'es' ? 'PT' : 'ES'}
          </button>
          <button className="cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen 
              ? <IoIosClose className="text-[38px] text-zinc-800"/> 
              : <IoIosMenu className="text-[32px] text-zinc-800"/>
            }
          </button>
        </div>

        <ul className="hidden lg:flex lg:flex-row lg:gap-x-5 lg:text-xl lg:text-zinc-600 lg:font-medium lg:cursor-pointer lg:items-center">
          <li className="lg:hover:text-indigo-500 transition-colors duration-300">
            <Link href={`/${locale}`}>Home</Link>
          </li>
          <li className="lg:hover:text-indigo-500 transition-colors duration-300">
            <Link href={`/${locale}/about`}>About</Link>
          </li>
          <li
            onClick={toggleLocale}
            className="lg:hover:text-indigo-500 transition-colors duration-300 cursor-pointer
             lg:text-[27px] text-zinc-800"
          >
            {locale === 'es' ? 'PT' : 'ES'}
          </li>
        </ul>
      </header>

      {/* Menu mobile/tablet */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-zinc-50/80 flex flex-col items-center justify-start pt-40 gap-10 lg:hidden">
          <ul className="flex flex-col items-center gap-10 text-[32px] font-medium text-zinc-800">
            <li className="hover:text-indigo-500 transition-colors duration-300">
              <Link href={`/${locale}`} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-indigo-500 transition-colors duration-300">
              <Link href={`/${locale}/about`} onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-indigo-500 transition-colors duration-300 cursor-pointer">
              Curriculum
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header