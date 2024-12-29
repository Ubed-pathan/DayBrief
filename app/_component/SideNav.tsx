import Link from "next/link";
import Image from "next/image";
import avtar from "@/public/assets/avtar.png"

export default function SideNav() {


  return (
    <>
      <div className="fiexed top-0 left-0 w-64 md:h-screen md:border-r-2 border-veryLightBlue text-veryLightPurple p-4">
        <div className="flex gap-2 ">
            <div>
                <Image src={avtar} alt='avtar' width={40} height={40} />
            </div>
            <div>
                <h2>UserName</h2>
                <h4>Email</h4>
            </div>
        </div>
        <hr className="my-4 bg-veryLightPurple h-0.5 border-none" />
        <nav className="flex justify-center">
          <ul className="text-veryLightPurple font-bold text-lg flex flex-col gap-4"> 
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/liked">Liked</Link>
            </li>
            <li>
              <Link href="/saved">saved</Link>
            </li>
            <li>
              <Link href="/check">check</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
