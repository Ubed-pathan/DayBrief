'use client';

import Image from "next/image";
import logo from '@/public/assets/logo03.png';
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
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
          }`}
      >
        <div className="flex flex-col items-center text-veryLightBlue">
          <ul className="flex flex-col gap-5 mt-4">
            <li className="font-bold text-xl cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li className="font-bold text-xl cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <Link href="/profile">Profile</Link>
            </li>
            <li className="font-bold text-xl cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <Link href="/liked">Liked</Link>
            </li>
            <li className="font-bold text-xl cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <Link href="/check">check</Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}