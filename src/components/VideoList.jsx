import React, { useState } from "react";
import VideoItem from "./VideoItem";
import { useQuery } from "@tanstack/react-query";

export default function VideoList({ keyword }) {
  const [video, setVideo] = useState("");
  const {
    isLoading,
    isError,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch("/data/ListByKeyword.json").then((res) => res.json());
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <VideoItem getVideoId={setVideo} isLoading={isLoading} videos={videos} />
    </div>
  );
}
