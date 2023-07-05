import axios from "axios";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export function getChannelById(channelId) {
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
  return axios
    .get(url)
    .then((response) => response.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    });
}
