// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// interface CloudinaryUploadResult {
//   public_id: string;
//   [key: string]: unknown;
// }

// export async function POST(req: Request) {
//   const prisma = new PrismaClient();

//   try {
//     const formData = await req.formData();
//     const file = formData.get('file') as File;

//     if (!file) {
//       return NextResponse.json({ message: 'File not found' }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
//       cloudinary.uploader.upload_stream(
//         { folder: 'daybrief-blog-images' },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result as CloudinaryUploadResult);
//         }
//       ).end(buffer);
//     });

//     const blog = await prisma.blog.create({
//       data: {
//         title: formData.get('title') as string,
//         description: formData.get('description') as string,
//         imagePublicId: result.public_id,
//         userId: '7c188006-d06c-42c2-9337-2967807c9f79',
//       },
//     });

//     return NextResponse.json(blog, { status: 200 });
//   } catch (error) {
//     console.error('Error handling POST request:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
