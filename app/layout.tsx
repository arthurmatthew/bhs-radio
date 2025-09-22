import type { Metadata } from "next";
import { Alike_Angular, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Image from "next/image";
import { PlayButton } from "./components/PlayButton";
import Head from "next/head";

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
  title: "KBHS",
  description: "Live from Ballard High School's Radio Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
              <li>
                <Link href={"/info/club"}>JOIN US</Link>
              </li>
              <li>DONATE</li>
            </ul>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent md:hidden"></div>
        </header>
        {children}
        <footer className="bg-black text-white font-(family-name:--font-inter)">
          <div className="grid md:grid-cols-6 grid-cols-2 lg:grid-rows-2 grid-rows-3 px-6 lg:px-36 py-12">
            <div>
              <Image src="/kbhs.png" width={100} height={100} alt="KBHS" />
              <p className="text-xs opacity-75">
                Updated Sep. 2025. Designed by Matthew Arthur.
              </p>
            </div>

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
              <li>
                <Link href="/info/club">CLUB INFO</Link>
              </li>
              <li>
                <Link href="/info/staff">STAFF CONTACTS</Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://ballardhs.seattleschools.org/student-life/clubs-and-organizations/"
                >
                  BHS CLUB PAGE
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                target="_blank"
                href={"https://www.instagram.com/bhs_radio_club/"}
              >
                <i className="bi bi-instagram text-4xl" />
              </a>
              <i className="bi bi-youtube text-4xl" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
