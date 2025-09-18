"use client";

import { useRef, useState, useEffect } from "react";

export const PlayButton = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.src =
          "https://live.bhsradio.com/listen/radio_club_autumn_mix/radio.mp3";
        audioRef.current.play();
      }
      setIsPlaying((previouslyPlaying) => !previouslyPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/" />
      <button
        onClick={togglePlay}
        className="px-12 rounded-md w-38 py-4 bg-red-700 text-white"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
};
