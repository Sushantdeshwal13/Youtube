const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = 
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const LIVE_CHAT_COUNT = 10;

// You can enable this when you need it
// export const LIVE_CHAT_API = (videoId) =>
//   `https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${videoId}&part=snippet,authorDetails&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = (query) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + query
  )}`;
