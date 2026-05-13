'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCheck, FiCopy } from "react-icons/fi";
import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from 'next-intl'

const Footer = () => {
  const [copied, setCopied] = useState(false)
  const locale = useLocale()

  const handleCopy = () => {
    navigator.clipboard.writeText('jpandrujovich@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-zinc-50 text-zinc-600 px-14 py-9 w-full h-60 font-regular text-[18px]
    border border-t-zinc-400 lg:px-55">
      <div className="flex items-center justify-between">
        <ul className="cursor-pointer lg:flex lg:gap-x-5 font-medium">
          <li className="hover:text-indigo-500 transition-colors duration-300">
            <Link href={`/${locale}`}>Home</Link>
          </li>
          <li className="hover:text-indigo-500 transition-colors duration-300">
            <Link href={`/${locale}/about`}>About</Link>
          </li>
        </ul>
        <div className="flex gap-x-6 cursor-pointer">
          <a href="https://github.com/juanpablo1978" target="_blank">
            <FaGithub className="text-[32px] text-zinc-700 hover:text-indigo-500 transition-colors duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-andrujovich-921386189/" target="_blank">
            <FaLinkedin className="text-[32px] text-zinc-700 hover:text-indigo-500 transition-colors duration-300"/>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-2 pt-3 mt-9">
        <span
          onClick={handleCopy}
          className="text-[19px] cursor-pointer hover:text-indigo-500 transition-colors duration-300"
        >
          jpandrujovich@gmail.com
        </span>
        {copied 
          ? <FiCheck className="text-indigo-500" />
          : <FiCopy className="text-zinc-400 cursor-pointer hover:text-indigo-500 transition-colors duration-300" onClick={handleCopy} />
        }
      </div>
    </footer>
  )
}

export default Footer