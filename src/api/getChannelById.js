import axios from "axios";

export function getChannelById(channelId) {
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key={{key}}`;
  return axios
    .get(url)
    .then((response) => response.data.items)
    .catch((error) => {
      throw new Error("Failed to fetch data");
    })
    .finally(console.log(channelId));
}
