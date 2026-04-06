"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const STORAGE_KEY = "sunny-hill-banner-dismissed";

export function SunnyHillBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className="bg-cyan-700 text-white py-6 px-4 relative">
      <button
        onClick={handleClose}
        aria-label="Close Sunny Hill Pizza banner"
        className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="mx-auto max-w-4xl">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 sm:gap-20">
          <div className="bg-cyan-800 rounded-full flex items-center justify-center aspect-square p-4">
            <Image
              src="/sunny-hill.png"
              alt="Sunny Hill Pizza"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="uppercase sm:text-left text-center font-bold text-2xl">
              Huge Thanks to{" "}
              <a
                href="https://www.sunnyhillseattle.com/"
                target="_blank"
                className="underline"
              >
                Sunny Hill Pizza
              </a>
            </h1>
            <p className="text-xl sm:text-left text-center">
              Sunny Hill Pizza is now an official sponsor of Ballard High
              School's KBHS radio station.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
