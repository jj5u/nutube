import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function RelatedList() {
  const relatedList = useQuery({
    queryKey: ["relatedVideo"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch("data/ListByRelatedVideos.json").then((res) => res.json());
    },
  });

  return (
    <div>
      {/* {relatedList.data.map((item) => (
        <div key={item.id.videoId}>
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <p>{item.snippet.description}</p>
        </div>
      ))} */}
    </div>
  );
}
