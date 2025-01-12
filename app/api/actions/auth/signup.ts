'use server';

import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


export async function signup(formData: FormData) {

  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log(username);
  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword)

  try {
    console.log("data reaches", email)
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log("data not stored")

    return { message: 'User created successfully', user };
    
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user', error);
  }
}
