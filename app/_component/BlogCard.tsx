'use client';
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { MdOutlineInsertComment } from "react-icons/md";

export default function BlogCard({
  avtar,
  title,
  desc,
  date,
  userName,
  blogImage,
}: {
  avtar: string | StaticImageData;
  title: string;
  desc: string;
  date: string;
  userName: string;
  blogImage: string | StaticImageData
}) {

  const [clickOnThreeDots, setClickOnThreeDots] = React.useState(false);
  return (
    <div className="flex flex-col bg-veryLightBlue border-2 border-veryLightPurple shadow-md rounded-lg p-4 break-inside-avoid" onClick={() => {if(clickOnThreeDots) setClickOnThreeDots(false)}}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="border-2 border-greenPink rounded-full p-1">
            <Image src={avtar} alt="avatar" width={40} height={40} className="rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">{userName}</h3>
            <p className="text-sm text-veryLightPurple">{date}</p>
          </div>
        </div>


        <div className="relative">
          <div
            className="text-veryDarkBlue cursor-pointer"
            onClick={() => setClickOnThreeDots(!clickOnThreeDots)}
          >
            <PiDotsThreeOutlineVertical size={20} />
          </div>

          {clickOnThreeDots && (
            <div className="flex flex-col gap-2 bg-veryLightPurple p-2 rounded-lg text-center absolute z-10 right-0 top-6 shadow-lg">
              <div
                className="text-veryDarkBlue cursor-pointer"
                onClick={() => setClickOnThreeDots(!clickOnThreeDots)}
              >
                Save
              </div>
            </div>
          )}
        </div>

      </div>


      <div className="my-2">
        <Image src={blogImage} alt="BlogImage" className="rounded-full w-full" />
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-veryLightPurple mb-4">{desc}</p>


      <div className="flex justify-between items-center mt-auto">
        <div className="flex justify-evenly items-center gap-5 text-veryDarkBlue cursor-pointer">
          <SlLike size={25} onClick={() => console.log("Clicked")} />
          <SlDislike size={25} onClick={() => console.log("Clicked")} />
          <MdOutlineInsertComment size={25} onClick={() => console.log("Clicked")} />
        </div>
        <div className="text-xl font-semibold text-veryDarkBlue cursor-pointer" onClick={() => console.log("Clicked")} >
          Read More
        </div>
      </div>

    </div>
  );
} 