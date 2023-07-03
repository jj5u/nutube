import React from "react";
import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
export default function RelatedListcopy() {
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
  const isRelatedList = true;
  return (
    <div>
      {isLoading
        ? "loading...."
        : relatedVideo.items.map((item) => (
            <div key={item.id.videoId} className="flex gap-x-2 mb-2 cursor-pointer">
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                className="mb-2 object-cover w-1/3 rounded-xl transition-[border-radius] duration-150 ease-out hover:ease-in hover:rounded-none"
              />
              <div className="flex flex-col text-slate-700 truncate">
                <h2 className="font-medium truncate">{item.snippet.title}</h2>
                <Profile isRelatedList={isRelatedList} />
              </div>
            </div>
          ))}
    </div>
  );
}
