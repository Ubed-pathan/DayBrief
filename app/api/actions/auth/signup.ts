'use server';

import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


export async function signup(formData: FormData) {

  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return { message: 'User created successfully', user };
    
  } catch (error) {
    throw new Error('Error creating user', error);
  }
}
