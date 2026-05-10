import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-zinc-50  text-zinc-600 px-14 py-9 w-full h-60 font-regular text-[18px]
    border border-t-zinc-400 lg:px-55">
      <div className="flex items-center justify-between ">
         <ul className="cursor-pointer lg:flex lg:gap-x-5 font-medium">
        <li className="hover:text-indigo-500 transition-colors duration-300">
           <Link href="/">Home</Link>
        </li>
        <li className="hover:text-indigo-500 transition-colors duration-300">
           <Link href="/about">About</Link>
        </li>
        <li className="hover:text-indigo-500 transition-colors duration-300">
           <Link href="/curriculum">Curriculum</Link>
        </li>
       
      </ul>
      <div className="flex gap-x-6 cursor-pointer">
       <FaGithub className="text-[32px] text-zinc-800 hover:text-indigo-500 transition-colors duration-300"/>
        <FaLinkedin className="text-[32px] text-zinc-800 hover:text-indigo-500 transition-colors duration-300"/>
      </div>
      </div>
      <div className="flex justify-center pt-3 mt-9">
        <span className="text-[18px]">jpandrujovich@gmail.com</span>
      </div>
         
    </footer>
  )
}

export default Footer