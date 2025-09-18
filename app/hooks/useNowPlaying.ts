import { useState, useEffect } from "react";
import { SSEMessage } from "../types/sse";

export const useNowPlaying = (): [
  stationMessage: SSEMessage | null,
  serverTime: number | null
] => {
  const [stationMessage, setStationMessage] = useState<SSEMessage | null>(null);
  const [serverTime, setServerTime] = useState<number | null>(null);

  const sseBaseUri = "https://live.bhsradio.com/api/live/nowplaying/sse";
  const sseUriParams = new URLSearchParams({
    cf_connect: JSON.stringify({
      subs: {
        "station:radio_club_autumn_mix": { recover: true },
      },
    }),
  });

  const nowPlayingSseUri = sseBaseUri + "?" + sseUriParams.toString();

  useEffect(() => {
    const eventSource = new EventSource(nowPlayingSseUri);

    eventSource.onmessage = (event) => {
      if (event.data && event.data !== "{}") {
        const sseMessage: SSEMessage = JSON.parse(event.data);

        if (!sseMessage.pub) return;

        setServerTime(sseMessage.pub.data.current_time);
        setStationMessage(sseMessage);
      }
    };

    eventSource.onerror = () => {
      console.error("Now Playing SSE connection failure");
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  return [stationMessage, stationMessage?.pub.data.current_time || null];
};
