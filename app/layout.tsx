import type { Metadata } from "next";
import { Alike_Angular, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";
import { PlayButton } from "./components/PlayButton";

const inter = JetBrains_Mono({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alike = Alike_Angular({
  weight: ["400"],
  variable: "--font-alike",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHS Radio Club",
  description: "KBHS, live from the BHS Radio Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alike.variable} ${inter.variable} antialiased`}>
        <header className="font-(family-name:--font-inter) bg-black text-white relative">
          <div className="flex justify-between overflow-x-scroll scrollbar-hidden items-center text-lg">
            <div className="flex gap-4 h-full items-center">
              <Link
                href="/"
                className="px-4 relative flex items-center justify-center bg-red-700"
              >
                <div className="w-18 h-18 relative">
                  <Image src="/kbhs.png" alt="KBHS" fill />
                </div>
              </Link>
              <ul className="flex items-center gap-6 whitespace-nowrap">
                <li>
                  <PlayButton />
                </li>
                <li>SCHEDULE</li>
                <li>ARTICLES</li>
                <li>VIDEOS</li>
              </ul>
            </div>
            <ul className="flex items-center gap-6 px-4 whitespace-nowrap">
              <li>JOIN US</li>
              <li>DONATE</li>
            </ul>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent md:hidden"></div>
        </header>
        {children}
        <footer className="bg-black text-white font-(family-name:--font-inter)">
          <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-rows-2 grid-rows-3 px-6 lg:px-36 py-12">
            <Image src="/kbhs.png" width={100} height={100} alt="KBHS" />
            <ul>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>JOIN US</li>
            </ul>
            <ul>
              <li>FAQ</li>
              <li>SUPPORT US</li>
              <li>EVENTS</li>
            </ul>
            <ul>
              <li>BECOME A SPONSOR</li>
              <li>TERMS OF SERVICE</li>
              <li>PRIVACY POLICY</li>
            </ul>
            <ul>
              <li>CLUB INFO</li>
              <li>STAFF CONTACTS</li>
              <li>BHS CLUB PAGE</li>
            </ul>
            <div className="flex gap-4">
              <i className="bi bi-youtube text-4xl" />
              <i className="bi bi-instagram text-4xl" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
