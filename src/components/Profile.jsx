import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getChannelById } from "../api/getChannelById";

export default function Profile({ isVideo, isRelatedList, channelId }) {
  const channelIdQuery = useQuery({
    queryKey: ["channel", channelId],
    queryFn: () => getChannelById(channelId),
  });
  const channelQueryData = channelIdQuery.data;
  // Create an array of objects with videoId and channelId
  const channelQueryDataArray = channelQueryData
    ? channelQueryData.map((item) => ({
        channelId: item.id,
        channelTitle: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        subscriberCount: item.statistics.subscriberCount,
        etag: item.etag,
      }))
    : [];
  function getSubscriber(item) {
    let subscribers = item;

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
    <div className="mt-4">
      {channelQueryDataArray.map((item) => (
        <div key={item.channelId} className="text-slate-600 flex">
          {!isRelatedList && <img src={item.thumbnail} alt={item.title} className="w-9 h-9 min-w-[2.25rem] mr-4 rounded-full object-cover" />}
          <div className="flex flex-col">
            {isVideo && <h2>{item.channelTitle}</h2>}
            {isRelatedList && <h2 className="text-sm">{item.channelTitle}</h2>}
            {isVideo && <p>{getSubscriber(item.subscriberCount)} subscribers</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
