import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./_component/SideNav";
import TopNav from "./_component/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "daybrief",
  description: "A blog app to share your daily updates and stories.",
  icons: {
    icon: '/assets/logo03.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:flex">
          <div className="hidden md:block">
          <SideNav/>
          </div>
          <div>
          <TopNav/>
          </div>
          <main>
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
