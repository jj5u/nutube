import React from "react";
import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
export default function RelatedList() {
  const {
    isLoading,
    isError,
    error,
    data: relatedVideo,
  } = useQuery({
    queryKey: ["relatedVideo"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch("/data/ListByRelatedVideos.json").then((res) => res.json());
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
      {isLoading
        ? "loading...."
        : relatedVideo.items.map((item) => (
            <div key={item.id.videoId}>
              <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
              <h2>{item.snippet.title}</h2>
              <Profile />
            </div>
          ))}
    </div>
  );
}
