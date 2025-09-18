import { NowPlaying } from "./components/NowPlaying";
import { PlayButton } from "./components/PlayButton";

export default function Home() {
  return (
    <>
      <main className="font-(family-name:--font-inter)">
        <section className="mt-20 max-w-7xl items-center text-center flex flex-col gap-4 mx-auto px-8">
          <h1 className="flex flex-col text-5xl lg:text-7xl font-(family-name:--font-alike)">
            Listen to Ballard's music.
          </h1>
          <h2 className="md:text-2xl text-lg">
            KBHS is ran by students out of Ballard High School's Radio Club.
            This web-hosted radio station isn't directly affiliated with Ballard
            High School or the Seattle Public Schools district.
          </h2>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 text-xl sm:mt-10">
            <PlayButton />
            <a href="#about-us" className="bg-gray-200 px-12 rounded-md py-4">
              Learn More
            </a>
          </div>
        </section>
        <div className="w-7/12 h-px bg-black mx-auto my-10 sm:my-20 opacity-10 px-8" />
        <section className="max-w-4xl mx-auto px-8">
          <div className="flex-col flex gap-4">
            <h1 className="font-(family-name:--font-alike) text-4xl">On Air</h1>
            <div className="flex sm:flex-row sm:gap-0 gap-4 flex-col sm:justify-between sm:items-end">
              <NowPlaying />
              <div className="flex sm:flex-col gap-2 text-center">
                <a
                  href={
                    "https://live.bhsradio.com/listen/radio_club_autumn_mix/radio.mp3"
                  }
                  target="_blank"
                  className="px-8 py-4 bg-gray-200 rounded-md"
                >
                  Direct Link
                </a>
                <button
                  disabled
                  className="px-8 disabled:opacity-50 py-4 bg-gray-200 rounded-md"
                >
                  Other Options
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 bg-red-800 text-white py-16">
          <div className="flex px-8 flex-col gap-8 max-w-7xl mx-auto">
            <h1
              id="about-us"
              className="font-(family-name:--font-alike) text-4xl sm:text-6xl"
            >
              About Us
            </h1>
            <p className="text-2xl">
              I'm trying to make the deadline; you can read more in a few days.
              Sorry
            </p>
          </div>
        </section>
      </main>
      <footer className="font-(family-name:--font-inter) my-10">
        <h6 className="text-center opacity-20">Thanks from BHS Radio Club</h6>
      </footer>
    </>
  );
}
