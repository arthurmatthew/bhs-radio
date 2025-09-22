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
    <div className="flex flex-col gap-4">
      <div className="flex sm:flex-row sm:gap-0 gap-4 flex-col sm:justify-between sm:items-end">
        <div className="flex flex-col gap-4">
          {serverTime && (
            <h2 className="opacity-50 font-light">Updated {timeLeft}s ago</h2>
          )}

          <div className="flex gap-4">
            <div className="sm:w-48 w-20 h-fit flex items-center justify-center">
              {stationMessage ? (
                <img src={stationMessage?.pub.data.np.now_playing.song.art} />
              ) : (
                <div className="w-full h-full bg-zinc-300 animate-pulse" />
              )}
            </div>
            <div className="flex flex-col justify-between">
              {stationMessage ? (
                <div className=" max-w-96">
                  <div className="sm:hidden flex flex-row gap-3 items-center">
                    <h3 className="font-semibold max-w-96 text-2xl sm:text-3xl">
                      {stationMessage?.pub.data.np.now_playing.song.title}
                    </h3>
                    <div className="bg-zinc-300 rounded-full w-1 h-1" />
                    <h4 className="text-xl opacity-50">
                      {stationMessage?.pub.data.np.now_playing.song.artist}
                    </h4>
                  </div>
                  <h3 className="font-semibold hidden sm:block text-2xl sm:text-3xl">
                    {stationMessage?.pub.data.np.now_playing.song.title}
                  </h3>
                  <h4 className="text-xl hidden sm:block opacity-50">
                    {stationMessage?.pub.data.np.now_playing.song.artist}
                  </h4>
                  <h4 className="text-xl opacity-50">
                    {stationMessage?.pub.data.np.now_playing.song.album}
                  </h4>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-3xl bg-zinc-200 w-32 rounded-md animate-pulse">
                    &nbsp;
                  </h3>
                  <h4 className="text-xl bg-zinc-200 w-28 animate-pulse rounded-md">
                    &nbsp;
                  </h4>
                  <h4 className="text-xl bg-zinc-200 w-28 animate-pulse rounded-md">
                    &nbsp;
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col gap-2 text-center">
          <a target="_blank" className="px-8 py-4 bg-zinc-200 rounded-md">
            View Program
          </a>
          <button
            disabled
            className="px-8 disabled:opacity-50 py-4 bg-zinc-200 rounded-md"
          >
            Other Options
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 opacity-80">
          <h1>UP NEXT:</h1>
          <div className="flex flex-col">
            <h2 className="truncate w-64">
              {stationMessage?.pub.data.np.playing_next.song.title}
            </h2>
            <h2 className="opacity-50">
              {stationMessage?.pub.data.np.playing_next.song.artist}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 opacity-40">
          {stationMessage?.pub.data.np.now_playing.playlist}
        </div>
      </div>
    </div>
  );
};
