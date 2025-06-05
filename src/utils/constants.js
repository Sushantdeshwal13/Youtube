const GOOGLE_API_KEY = "AIzaSyBSok_cf0UQcXsAaZWRPC_UGVhC0RwEkXs";

export const YOUTUBE_VIDEO_API = 
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
