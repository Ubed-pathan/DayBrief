'use server';

import { v2 as cloudinary } from 'cloudinary';
import { PrismaClient } from '@prisma/client';
import { auth } from "@/auth";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function imageUpload(formData: FormData) {
  const session = await auth();
  const prisma = new PrismaClient();

  if (!session?.user.id) {
    throw new Error("Unauthorized");
  }

  const file = formData.get("file") as File | null;
  if (!file) {
    throw new Error("File not found");
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "daybrief-blog-images" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });


    const blog = await prisma.blog.create({
      data: {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        imagePublicId: result.public_id as string,
        imageUrl: result.url as string,
        secureUrl: result.secure_url as string,
        format: result.format as string,
        userId: session.user.id,
      },
    });

    if(blog){
      return { success: true };
    }
  } catch (error) {
    throw new Error("Upload image or database storage failed");
  } finally {
    await prisma.$disconnect();
  }
}
