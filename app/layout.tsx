import type { Metadata } from "next";
import { Inter_Tight, Alike_Angular } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter_Tight({
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
        <header className="font-(family-name:--font-inter) px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-(family-name:--font-alike) text-red-700 text-4xl">
              <Link href="/">KBHS</Link>
            </h1>
            <ul className="flex gap-4">
              <li>
                <Link href="/info/club">Club Info</Link>
              </li>
              -
              <li>
                <a href="https://live.bhsradio.com/">Login</a>
              </li>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
