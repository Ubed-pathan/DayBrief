
import { auth } from "@/auth";
import { PrismaClient } from '@prisma/client';

export async function getUserBlogs(){

    const session = await auth();
    const prisma = new PrismaClient();

    if(!session?.user.id) throw new Error("Unauthorize");

    const userBlogs = await prisma.blog.findMany({
        where: {
            userId: session.user.id,
        },
    })

    if(!userBlogs){
            return null;
    }

    console.log(userBlogs);
    return userBlogs;

}