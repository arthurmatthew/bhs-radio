"use client";
import { useEffect, useState } from "react";
import { SSEMessage } from "@/app/types/sse";
import { useNowPlaying } from "../hooks/useNowPlaying";

export const NowPlaying = () => {
  const [stationMessage, serverTime] = useNowPlaying();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      if (!serverTime) return;

      const now = Math.floor(Date.now() / 1000);
      const diff = now - serverTime;

      setTimeLeft(diff);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [serverTime]);

  return (
    <div className="flex gap-4">
      <div className="w-48 aspect-square flex items-center justify-center bg-gray-100 shadow-2xl">
        {stationMessage ? (
          <img
            className="h-11/12"
            src={stationMessage?.pub.data.np.now_playing.song.art}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 animate-pulse" />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div>
          {serverTime && (
            <h2 className="opacity-50 font-light">Updated {timeLeft}s ago</h2>
          )}
        </div>
        {stationMessage ? (
          <div>
            <h3 className="font-semibold text-3xl">
              {stationMessage?.pub.data.np.now_playing.song.title}
            </h3>
            <h4 className="text-xl opacity-50">
              {stationMessage?.pub.data.np.now_playing.song.artist}
            </h4>
            <h4 className="text-xl opacity-50">
              {stationMessage?.pub.data.np.now_playing.song.album}
            </h4>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-3xl bg-gray-200 w-32 rounded-md animate-pulse">
              &nbsp;
            </h3>
            <h4 className="text-xl bg-gray-200 w-28 animate-pulse rounded-md">
              &nbsp;
            </h4>
            <h4 className="text-xl bg-gray-200 w-28 animate-pulse rounded-md">
              &nbsp;
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
