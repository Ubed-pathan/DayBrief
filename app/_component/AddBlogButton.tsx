'use client'

import { useRouter } from 'next/navigation';
import { IoMdAddCircleOutline } from "react-icons/io";

function AddBlogButton() {
    const router = useRouter(); 

    const handleRedirect = () => {
        router.push('/addNewBlog')
    }

  return (
    <div className="flex flex-col justify-center items-center mt-2">
              <IoMdAddCircleOutline size={40} className="text-veryLightPurple cursor-pointer" onClick={handleRedirect}/>
              <h1 className="text-veryLightPurple">Add Blog</h1>
    </div>
  )
}

export default AddBlogButton