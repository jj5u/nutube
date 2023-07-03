import React, { useState } from "react";
import VideoItem from "./VideoItem";
import { useQuery } from "@tanstack/react-query";
import { getListByKeyword } from "../api/getListByKeyword";

export default function VideoList({ keyword, sendTargetChannel }) {
  const [video, setVideo] = useState("");
  const [targetChannel, setTargetChannel] = useState("");
  const sendChannel = (targetChannel) => {
    setTargetChannel(targetChannel);
  };
  if (targetChannel) sendTargetChannel(targetChannel);
  const videoQuery = useQuery({
    queryKey: ["video", keyword],
    queryFn: () => getListByKeyword(keyword),
  });

  // Access the data from the query result
  const videoQueryData = videoQuery.data;

  let videoQueryDataArray = [];
  // Create an array of objects with videoId and channelId
  if (keyword) {
    videoQueryDataArray = videoQueryData
      ? videoQueryData.map((item) => ({
          videoId: item.id,
          channelId: item.snippet.channelId,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.high.url,
          title: item.snippet.title,
          publishTime: item.snippet.publishTime,
          etag: item.etag,
        }))
      : [];
  } else {
    videoQueryDataArray = videoQueryData
      ? videoQueryData.map((item) => ({
          videoId: item.id.videoId,
          channelId: item.snippet.channelId,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.high.url,
          title: item.snippet.title,
          publishTime: item.snippet.publishTime,
          etag: item.etag,
        }))
      : [];
  }
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {videoQueryDataArray.length > 0 ? <VideoItem getVideoId={setVideo} getVideoChannel={sendChannel} videoQueryDataArray={videoQueryDataArray} /> : <p>Loading...</p>}
      </ul>
    </div>
  );
}
