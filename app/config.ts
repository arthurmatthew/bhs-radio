// ! not in use swap to ENV

const DIRECT_LINK = "https://live.bhsradio.com/listen/kbhs_main/radio.mp3";

const SSE_LINK = "https://live.bhsradio.com/api/live/nowplaying/sse";
const SSE_CONFIG = {
  subs: {
    "station:kbhs_main": { recover: true },
  },
};

// ! hopefully edit station ID to global channel URL
