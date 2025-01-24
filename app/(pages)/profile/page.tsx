import avtar from "@/public/assets/avtar.png";
import Image from "next/image";
import { auth } from "@/auth";
import ProfileBlogCard from "@/app/_component/ProfileBlogCard";
import AddBlogButton from "@/app/_component/AddBlogButton";
import { getUserBlogs } from "@/app/api/actions/getBlogs";

export default async function Profile() {
  // Fetch the session and blogs data on the server
  const session = await auth();
  const blogs = await getUserBlogs();

  return (
    <div className="flex flex-col mt-3 md:mt-5 justify-center items-center w-full min-h-screen">
      <div className="flex flex-col w-full md:w-1/2 px-2 md:px-0">
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="border-[2px] border-veryLightPurple rounded-full">
              <Image
                src={avtar}
                alt="user Profile image"
                width={42}
                height={42}
                className="p-[1px]"
              />
            </div>
            <div className="text-veryLightPurple text-center">
              <h1 className="text-xl font-semibold">{session?.user?.username}</h1>
              <h1 className="text-sm">{session?.user?.email}</h1>
            </div>
          </div>
          <div className="text-veryLightPurple text-center flex flex-col justify-center items-center">
            <h1 className="font-semibold">Blogs</h1>
            <h1>{blogs.length}</h1>
          </div>
          <AddBlogButton />
        </div>
      </div>
      <hr className="h-[0.5px] w-full border-0 bg-veryLightBlue mt-1" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] auto-rows-auto gap-4 p-4 w-full md:w-full">
        {blogs.map((blog) => (
          <ProfileBlogCard
            key={blog.id}
            id={blog.id}
            userId={blog.userId}
            title={blog.title}
            desc={blog.description}
            date={new Date(blog.createdAt).toLocaleDateString()}
            blogImage={blog.secureUrl}
          />
        ))}
      </div>
    </div>
  );
}
