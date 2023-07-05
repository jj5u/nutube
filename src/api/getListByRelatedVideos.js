import axios from "axios";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export function getListByRelatedVideos() {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`;
  return axios
    .get(url)
    .then((response) => response.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    });
}
