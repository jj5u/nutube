import React, { useState } from "react";
import VideoItem from "./VideoItem";
import { useQuery } from "@tanstack/react-query";
import { getListByRelatedVideos } from "../api/getListByRelatedVideos";

export default function RelatedList({ keyword }) {
  const [video, setVideo] = useState("");
  const relatedvideoQuery = useQuery({
    queryKey: ["video", keyword],
    queryFn: () => getListByRelatedVideos(),
  });

  // Access the data from the query result
  const relatedvideoQueryData = relatedvideoQuery.data;

  let relatedvideoQueryDataArray = [];
  // Create an array of objects with videoId and channelId

  relatedvideoQueryDataArray = relatedvideoQueryData
    ? relatedvideoQueryData.map((item) => ({
        videoId: item.id,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        publishTime: item.snippet.publishTime,
        etag: item.etag,
      }))
    : [];
  let isRelatedList = true;
  return (
    <div>
      <ul className="grid grid-cols-1 ">
        {relatedvideoQueryDataArray.length > 0 ? (
          <VideoItem getVideoId={setVideo} videoQueryDataArray={relatedvideoQueryDataArray} isRelatedList={isRelatedList} />
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
