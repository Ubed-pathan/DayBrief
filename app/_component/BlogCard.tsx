import Image from "next/image";
import { StaticImageData } from "next/image";

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
  return (
    <div className="flex flex-col bg-veryLightPurple shadow-md rounded-lg p-4 break-inside-avoid">
      <div className="flex items-center gap-4 mb-4">
        <div className="border-2 border-veryDarkBlue rounded-full p-1">
          <Image src={avtar} alt="avatar" width={40} height={40} className="rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold">{userName}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div>
      <Image src={blogImage} alt="BlogImage" className="rounded-full w-full" />
      </div>  
      <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
} 