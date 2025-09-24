"use client";
import { useEffect, useState } from "react";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { SSEMessage } from "../types/sse";
import Image from "next/image";

export const NowPlaying = ({
  initialData,
}: {
  initialData: SSEMessage | null;
}) => {
  const [stationMessage, serverTime, isLive] = useNowPlaying(initialData);
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      if (!serverTime) return;

      const now = Math.floor(Date.now() / 1000);
      const diff = now - serverTime;

      setTimeSinceUpdate(diff);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [serverTime]);

  return stationMessage?.pub.data.np.is_online ? (
    <div className="flex flex-col gap-4">
      <div className="flex sm:flex-row sm:gap-0 gap-4 flex-col sm:justify-between sm:items-end">
        <div className="flex flex-col gap-4">
          {serverTime && (
            <div className="flex items-center">
              <i
                className={`bi bi-dot text-3xl ${
                  isLive
                    ? "text-green-600 drop-shadow-green-300 drop-shadow-sm animate-pulse"
                    : "text-zinc-500"
                }`}
              />
              <h2 className="opacity-50 font-light">
                Updated {timeSinceUpdate}s ago
              </h2>
            </div>
          )}

          <div className="flex gap-4 sm:items-start items-end">
            <div className="sm:w-48 w-20 h-20 sm:h-48 relative flex items-center justify-center">
              {stationMessage ? (
                <Image
                  fill
                  alt={stationMessage?.pub.data.np.now_playing.song.album}
                  src={stationMessage?.pub.data.np.now_playing.song.art}
                />
              ) : (
                <div className="h-full w-full bg-zinc-300 animate-pulse" />
              )}
            </div>
            <div className="flex flex-col justify-between">
              {stationMessage ? (
                <div className="max-w-96">
                  <h3 className="font-semibold text-2xl sm:text-3xl">
                    {stationMessage?.pub.data.np.now_playing.song.title}
                  </h3>
                  <h4 className="opacity-50 truncate max-w-64 sm:max-w-none">
                    {stationMessage?.pub.data.np.now_playing.song.artist}
                  </h4>
                  <h4 className="opacity-50 truncate max-w-64 sm:max-w-none">
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
        <div className="flex text-sm sm:text-base sm:flex-col gap-2 text-center">
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
      {stationMessage ? (
        <div className="flex justify-between">
          <div className="flex gap-2 opacity-80">
            <h1 className="whitespace-nowrap">UP NEXT:</h1>
            <div className="flex flex-col">
              <h2 className="truncate w-24 sm:w-64">
                {stationMessage?.pub.data.np.playing_next.song.title ??
                  "nothing queued"}
              </h2>
              <h2 className="opacity-50">
                {stationMessage?.pub.data.np.playing_next.song.artist ?? ""}
              </h2>
            </div>
          </div>
          <div className="flex gap-2 opacity-40">
            {stationMessage?.pub.data.np.now_playing.playlist}
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex gap-2 opacity-80">
            <h1 className="bg-zinc-200 w-28 animate-pulse rounded-md">
              &nbsp;
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="bg-zinc-200 w-28 animate-pulse rounded-md">
                &nbsp;
              </h2>
              <h2 className="bg-zinc-200 w-28 animate-pulse rounded-md">
                &nbsp;
              </h2>
            </div>
          </div>
          <div className="bg-zinc-200 inline-block w-28 animate-pulse rounded-md">
            &nbsp;
          </div>
        </div>
      )}
    </div>
  ) : (
    <h1>The main station is currently offline.</h1>
  );
};
