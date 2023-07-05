import axios from "axios";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export function getListByKeyword(keyword) {
  let url;
  if (keyword) {
    url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`;
  } else {
    url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="yerinbaek"&key=${API_KEY}`;
  }

  return axios
    .get(url)
    .then((res) => res.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    });
}
