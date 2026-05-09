import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-zinc-50 flex items-center justify-between text-zinc-800 w-full lg:px-55
    h-20 px-6">
      <span className="font-extrabold text-[43px] lg:text-[48px]">JP</span>
      <button className="cursor-pointer lg:hidden">
        <IoIosMenu className="text-[32px] text-zinc-800"/>
        </button>
         <ul className="lg:flex sm: hidden md:hidden lg:flex-row lg:gap-x-5
          lg:text-xl lg:text-zinc-600 lg:font-medium lg:cursor-pointer">
        <li className="lg:hover:text-indigo-500">Home</li>
        <li className="lg:hover:text-indigo-500">About</li>
        <li className="lg:hover:text-indigo-500">Curriculum</li>
      </ul>
    </header>
  )
}

export default Header