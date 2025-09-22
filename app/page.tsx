import Link from "next/link";
import { NowPlaying } from "./components/NowPlaying";

export default function Home() {
  return (
    <>
      <main className="font-(family-name:--font-inter)">
        <section className="sm:mt-20 mt-10 max-w-7xl items-center text-center flex flex-col gap-4 mx-auto px-8">
          <h1 className="flex flex-col text-5xl lg:text-7xl font-(family-name:--font-alike)">
            Listen to Ballard's music.
          </h1>
          <p className="opacity-50">
            KBHS is not officially affiliated with SPS or Ballard High School.
          </p>
          <div className="rounded-full bg-red-700 text-white text-sm border-red-400 border-2 py-2 px-4">
            <p>Site under construction, certain links may not work</p>
          </div>
        </section>
        <div className="w-7/12 h-px bg-black mx-auto my-6 sm:my-12 opacity-10 px-8" />
        <section className="max-w-4xl mx-auto px-8">
          <div className="flex-col flex gap-4">
            <div className="justify-between items-center flex">
              <h1 className="font-(family-name:--font-alike) text-4xl">
                On Air
              </h1>
              <ul className="flex flex-col sm:flex-row sm:items-center items-end text-sm underline sm:gap-4 gap-1 opacity-70">
                <li>
                  <Link
                    href={
                      "https://live.bhsradio.com/listen/kbhs_main/radio.mp3"
                    }
                  >
                    Direct Link
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <div className="bg-zinc-500 rounded-full w-1 h-1" />
                </li>
                <li>Alternate Mount</li>
              </ul>
            </div>

            <NowPlaying />
          </div>
        </section>
        <div className="w-7/12 h-px bg-black mx-auto my-6 sm:my-12 opacity-10 px-8" />
        <section className="max-w-7xl mb-20 px-6 mx-auto">
          <h1 className="font-(family-name:--font-alike) text-4xl">
            A note from us:
          </h1>
          <p className="my-10 text-xl">
            KBHS is a student-run project with the goal of giving students a
            platform to share their music and ideas. We work to build a music
            community for Ballard that connects students and represents our
            school. We play music, talk shows, local news, and more. If you want
            to learn more, check out our Instagram and come to our meetings in
            Ms. Povey’s room after school on Wednesdays.
          </p>
        </section>
      </main>
    </>
  );
}
