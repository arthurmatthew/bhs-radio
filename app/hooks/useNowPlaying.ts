import { useState, useEffect, useRef } from "react";
import { SSEData, SSEMessage } from "../types/sse";

export const useNowPlaying = (
  initialData: SSEMessage | null
): [
  stationMessage: SSEMessage | null,
  serverTime: number | null,
  isLive: boolean
] => {
  const [stationMessage, setStationMessage] = useState<SSEMessage | null>(
    initialData ?? null
  );
  const [serverTime, setServerTime] = useState<number | null>(
    initialData ? Math.floor(Date.now() / 1000) : null
  );
  const [isLive, setIsLive] = useState(false);

  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const sseBaseUri = "https://live.bhsradio.com/api/live/nowplaying/sse";
  const sseUriParams = new URLSearchParams({
    cf_connect: JSON.stringify({
      subs: {
        "station:kbhs_main": { recover: true },
      },
    }),
  });

  const nowPlayingSseUri = sseBaseUri + "?" + sseUriParams.toString();
  const staticJsonUri =
    "https://live.bhsradio.com/api/nowplaying_static/kbhs_main.json";

  const fetchStaticJson = async () => {
    try {
      const res = await fetch(staticJsonUri, { cache: "no-cache" });
      if (!res.ok) {
        return;
      }

      const data = (await res.json()) as SSEData;

      setStationMessage({
        pub: {
          data: { np: data, current_time: null, triggers: null },
          offset: 0,
        },
        channel: "",
      });
      setServerTime(Math.floor(Date.now() / 1000));
    } catch (err) {
      console.error("[Fallback] Error fetching static JSON", err);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(nowPlayingSseUri);

    eventSource.onmessage = (event) => {
      try {
        if (event.data && event.data !== "{}") {
          const sseMessage: SSEMessage = JSON.parse(event.data);
          if (!sseMessage.pub) return;

          setIsLive(true);
          setServerTime(sseMessage.pub.data.current_time);
          setStationMessage(sseMessage);

          if (pollingRef.current) {
            clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("[SSE] Connection error:", err);
      eventSource.close();
      setIsLive(false);

      if (!pollingRef.current) {
        fetchStaticJson();
        pollingRef.current = setInterval(fetchStaticJson, 30000);
      }
    };

    return () => {
      eventSource.close();
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, []);

  return [stationMessage, serverTime, isLive];
};
