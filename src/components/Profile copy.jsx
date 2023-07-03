import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Profile({ isVideo, channelId }) {
  const {
    isLoading,
    isError,
    error,
    data: channelById,
  } = useQuery({
    queryKey: ["channelById"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch("data/ChannelById.json").then((res) => res.json());
    },
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  function getSubscriber(item) {
    let subscribers = item.statistics.subscriberCount;

    if (subscribers > 10000) {
      const mNumber = subscribers / 1000000;
      const Msubscribers = mNumber.toFixed(1) + "m";
      return Msubscribers;
    } else if (subscribers > 1000) {
      const kNumber = subscribers / 1000;
      const Ksubscribers = kNumber.toFixed(1) + "k";
      return Ksubscribers;
    }
    return subscribers;
  }
  return (
    <div>
      {isLoading
        ? "loading...."
        : channelById.items.map((item) => (
            <div key={item.id} className="text-slate-600">
              <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} className="w-9 min-w-[2.25rem] mr-4 rounded-full object-cover" />
              {isVideo && <h2>{item.snippet.title}</h2>}
              {isVideo && <p>{getSubscriber(item)} </p>}
            </div>
          ))}
    </div>
  );
}
