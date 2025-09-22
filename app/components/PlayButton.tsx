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
          "https://live.bhsradio.com/listen/kbhs_main/radio.mp3";
        audioRef.current.play();
      }
      setIsPlaying((previouslyPlaying) => !previouslyPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/" />
      <button onClick={togglePlay} className="flex items-center gap-1 h-full">
        {!isPlaying ? (
          <i className="bi bi-play-fill" />
        ) : (
          <i className="bi bi-stop-fill" />
        )}
        <p>LISTEN LIVE</p>
      </button>
    </>
  );
};
