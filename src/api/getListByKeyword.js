import axios from "axios";

export function getListByKeyword(keyword) {
  let url;
  if (keyword) {
    url = "/data/ListByRelatedVideos.json";
  } else {
    url = "/data/ListByKeyword.json";
  }
  return axios
    .get(url)
    .then((res) => res.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    });
}
