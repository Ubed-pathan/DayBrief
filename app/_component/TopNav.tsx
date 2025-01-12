'use client';

import Image from "next/image";
import avtar from "@/public/assets/avtar.png"
import logo from '@/public/assets/logo03.png';
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { LuSaveAll } from "react-icons/lu";
import { TbFileLike } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

export default function TopNav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className='md:hidden flex justify-between items-center py-2 w-full bg-veryLightPurple text-darkBlue'>
        <div className='flex gap-2 ml-2'>
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-veryDarkBlue font-bold mt-2 text-xl">DayBrief</span>
        </div>

        <IoMenu size={35} className="ml-auto mr-2 cursor-pointer" onClick={() =>
          setIsMenuOpen(!isMenuOpen)
        } />
      </div>
      <div
        className={`md:hidden fixed w-[70%] h-full top-14 mt-0.5 right-0 bg-veryLightPurple border-l-2 border-veryLightBlue shadow-lg transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-20`}
      >
        <div className="flex flex-col items-center text-veryLightBlue px-2">
          <ul className="flex flex-col gap-5 mt-4 w-full">
            <li className="p-3 font-bold text-xl cursor-pointer bg-veryDarkBlue text-veryLightPurple rounded-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className="flex gap-5"> <IoHome size={25} className="flex justify-center items-center"/>Home</Link>
            </li>
            <li className="p-3 font-bold text-xl cursor-pointer bg-veryDarkBlue text-veryLightPurple rounded-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className="flex gap-5"> <TbFileLike size={25} className="flex justify-center items-center"/>Liked</Link>
            </li>
            <li className="p-3 font-bold text-xl cursor-pointer bg-veryDarkBlue text-veryLightPurple rounded-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className="flex gap-5"> <LuSaveAll size={25} className="flex justify-center items-center"/>Saved</Link>
            </li>
            <li className="p-2 font-bold text-xl cursor-pointer bg-veryDarkBlue text-veryLightPurple rounded-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/profile" className="flex gap-3"><div className="w-9 h-9 border-[1px] border-veryLightPurple group-hover:border-veryDarkBlue transform duration-500  rounded-full flex justify-center items-center"><Image src={avtar} alt='avtar' width={30} height={30} /></div>Profile</Link>
            </li>
            <li className="p-3 font-bold text-xl cursor-pointer bg-veryDarkBlue text-veryLightPurple rounded-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/logout" className="flex gap-5"><FiLogOut size={25} className="flex justify-center items-center" />LogOut</Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}