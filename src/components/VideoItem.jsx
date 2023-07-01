import React from "react";
import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
import { useNavigate, useLocation } from "react-router-dom";

export default function VideoItem({ getVideoId, isVideo, channelId, keyword }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const isSearchList = pathname.startsWith("/q");
  const {
    isLoading,
    isError,
    error,
    data: video,
  } = useQuery({
    queryKey: ["video"],
    queryFn: async () => {
      console.log("fetching....");
      return fetch("data/ListByKeyword.json").then((res) => res.json());
    },
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleNavigate = (e) => {
    const videoId = e.currentTarget.getAttribute("value");
    getVideoId(videoId);
    if (isSearchList) {
      navigate(`/id/${videoId}`);
    } else {
      navigate(`/id/${videoId}`);
    }
  };

  const today = new Date();
  const getDaysAfter = (publishTime) => {
    const publishDate = new Date(publishTime);
    const timeDiff = Math.abs(today.getTime() - publishDate.getTime());

    if (timeDiff < 86400000) {
      // Less than a day (24 hours)
      const hours = Math.floor(timeDiff / (1000 * 3600)); // Milliseconds in an hour: 1000ms * 60s * 60min
      const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)); // Remaining milliseconds converted to minutes
      return `${hours}h ${minutes}m ago`;
    } else if (timeDiff >= 86400000 && timeDiff < 2592000000) {
      // Between 1 day and 30 days (1 month)
      const daysAfter = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Milliseconds in a day: 1000ms * 60s * 60min * 24hr
      return `${daysAfter} days ago`;
    } else if (timeDiff >= 2592000000 && timeDiff < 31536000000) {
      // Between 30 days (1 month) and 365 days (1 year)
      const monthsAfter = Math.floor(timeDiff / (1000 * 3600 * 24 * 30)); // Approximate months assuming 30 days in a month
      return `${monthsAfter} months ago`;
    } else {
      const yearsAfter = Math.floor(timeDiff / (1000 * 3600 * 24 * 365)); // Approximate years assuming 365 days in a year
      return `${yearsAfter} years ago`;
    }
  };
  return (
    <div>
      {isLoading ? (
        "loading...."
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {video.items.map((item) => (
            <li key={item.id.videoId} value={item.id.videoId} onClick={handleNavigate} className="w-full max-w-96 hover:cursor-pointer">
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                className="mb-2 object-cover h-48 w-full lg:w-96 rounded-xl transition-[border-radius] duration-150 ease-out hover:ease-in hover:rounded-none"
              />
              <div className="flex">
                <Profile {...{ channelId: item.snippet.channelId }} />
                <div className="text-slate-700 truncate ">
                  <p>{item.snippet.channelId}</p>
                  <h2 className="font-medium truncate  ">{item.snippet.title}</h2>
                  <p className="text-sm"> {item.snippet.channelTitle}</p>
                  <p className="text-sm">{getDaysAfter(item.snippet.publishTime)}</p>
                </div>
                {isVideo && <p>{item.snippet.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
