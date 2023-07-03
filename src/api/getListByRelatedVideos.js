import axios from "axios";

export function getListByRelatedVideos() {
  const url = "/data/ListByRelatedVideos.json";
  return axios
    .get(url)
    .then((response) => response.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    })
    .finally(console.log("RelatedList"));
}
