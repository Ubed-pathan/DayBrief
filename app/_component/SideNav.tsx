import Link from "next/link";
import Image from "next/image";
import avtar from "@/public/assets/avtar.png"
import { IoHome } from "react-icons/io5";
import { LuSaveAll } from "react-icons/lu";
import { TbFileLike } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { auth } from "@/auth"
import logo from '@/public/assets/logo03.png';
import { signOut } from "next-auth/react";
import LogoutButton from "./LogoutButtonForSideNav";

export default async function SideNav() {
  const session = await auth();

  return (
    <>
      <div className="fiexed top-0 left-0 w-64 md:h-screen md:border-r-2 border-veryLightBlue text-veryLightPurple p-4">
          <div className="flex justify-between bg-veryLightPurple rounded-lg py-1 mb-4">
          <Image src={logo} alt='avtar' width={40} height={40} className="ml-1" />
          <h1 className="flex justify-center items-center text-veryDarkBlue text-xl font-bold mr-2">
            DayBrief
          </h1>
        </div>

        <div className="flex gap-2 ">
            <div className="flex items-center">
                <Image src={avtar} alt='avtar' width={40} height={40} />
            </div>
            <div className="flex flex-col justify-center">
                <h1>{session?.user.username}</h1>
                <h1>{session?.user.email}</h1>
            </div>
        </div>
        <hr className="my-4 bg-veryLightPurple h-0.5 border-none" />
        <nav className="flex justify-start w-full">
          <ul className="text-veryLightPurple font-bold text-lg flex flex-col gap-4 w-full"> 
            <li className="p-3 group hover:bg-veryLightBlue w-full rounded-lg transform duration-500">
              <Link href="/" className="flex gap-6 group-hover:text-veryDarkBlue transform duration-500"><IoHome size={25} className="flex justify-center items-center"/>Home</Link>
            </li>
            <li className="p-3 group hover:bg-veryLightBlue w-full rounded-lg transform duration-500">
              <Link href="/liked" className="flex gap-6 group-hover:text-veryDarkBlue transform duration-500"><TbFileLike size={25} className="flex justify-center items-center"/>Liked</Link>
            </li>
            <li className="p-3 group hover:bg-veryLightBlue w-full rounded-lg transform duration-500">
              <Link href="/saved" className="flex gap-6 group-hover:text-veryDarkBlue transform duration-500"><LuSaveAll size={25} className="flex justify-center items-center"/>Saved</Link>
            </li>
            <li className="group  p-2 hover:bg-veryLightBlue w-full rounded-lg transform duration-500">
              <Link href="/profile" className="flex gap-4 group-hover:text-veryDarkBlue transform duration-500"><div className="w-9 h-9 border-[1px] border-veryLightPurple group-hover:border-veryDarkBlue transform duration-500  rounded-full flex justify-center items-center"><Image src={avtar} alt='avtar' width={30} height={30} /></div>Profile</Link>
            </li>
            <li className="p-3 group hover:bg-veryLightBlue w-full rounded-lg transform duration-500">
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
