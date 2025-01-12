import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "../_component/SideNav";
import TopNav from "../_component/TopNav";
import SideNavWrapper from "../_component/SideNav";

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
        <div>
          <div className="hidden md:block fixed top-0 left-0 h-screen w-64">
          <SideNavWrapper />
          </div>
          <div className="ml-0 md:ml-64 flex-1">
          <TopNav/>
          </div>
          <main className="md:ml-64">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
