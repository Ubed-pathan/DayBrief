'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import image from "@/public/assets/avtar.png"
import Link from "next/link"
import { startTransition, useState } from "react"
import {signup} from "@/app/api/actions/auth/signup";

interface signUpFormDataType{
  username : string,
  email : string,
  password : string,
}


export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const[signUpFormData, setSignUpFormData] = useState<signUpFormDataType>({
    username : '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSignUpFormData((prevData) => ({
      ...prevData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    }));

  }
  
  async function handleSignUpFormSubmit (e: React.FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      const formData = new FormData();
      formData.append('username', signUpFormData.username);
      formData.append('email', signUpFormData.email);
      formData.append('password', signUpFormData.password); 

      try {
        await signup(formData);
      } catch (error) {
        console.error('Signup failed:', error);
      }
    });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden bg-veryLightPurple">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSignUpFormSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-veryDarkBlue">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-veryDarkBlue">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Enter Username"
                  value={signUpFormData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-veryDarkBlue">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={signUpFormData.email}
                  onChange={handleChange}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password"  className="text-veryDarkBlue">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 text-veryDarkBlue hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                id="password" 
                type="password" 
                name="password"
                value={signUpFormData.password}
                onChange={handleChange}
                required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-veryDarkBlue px-2 text-veryLightPurple">
                  Or continue with
                </span>
              </div>
              <div className="flex flex-col">
                <Button variant='default' className="w-full bg-veryLightBlue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href='/login' className="underline underline-offset-4">Sign in</Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image src={image}
              alt="Welcome Image"
              className="absolute inset-0 h-full w-full object-center  dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
