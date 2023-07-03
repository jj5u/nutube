import React from "react";
import Profile from "./Profile";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getChannelById } from "../api/getChannelById";
import { getListByKeyword } from "../api/getListByKeyword";

export default function VideoItemcopy({ getVideoId, isVideo }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const isSearchList = pathname.startsWith("/q");
  const handleNavigate = (e) => {
    const videoId = e.currentTarget.getAttribute("value");
    getVideoId(videoId);
    if (isSearchList) {
      navigate(`/id/${videoId}`);
    } else {
      navigate(`/id/${videoId}`);
    }
  };

  const videoQuery = useQuery({
    queryKey: ["video"],
    queryFn: getListByKeyword,
  });
  const videoChannelQuery = useQuery({
    queryKey: ["channel"],
    queryFn: getChannelById,
  });

  // Access the data from the query result
  const videoQueryData = videoQuery.data;

  // Create an array of objects with videoId and channelId
  const videoQueryDataArray = videoQueryData
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
  console.log(videoQueryDataArray);
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
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {videoQueryDataArray.map((item) => (
          <li key={item.etag} value={item.videoId} onClick={handleNavigate} className="w-full max-w-96 hover:cursor-pointer">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="mb-2 object-cover h-48 w-full lg:w-96 rounded-xl transition-[border-radius] duration-150 ease-out hover:ease-in hover:rounded-none"
            />
            <div className="flex">
              <Profile channelId={item.channelId} />
              <div className="text-slate-700 truncate">
                <p>{item.channelId}</p>
                <h2 className="font-medium truncate">{item.title}</h2>
                <p className="text-sm">{item.channelTitle}</p>
                <p className="text-sm">{getDaysAfter(item.publishTime)}</p>
              </div>
              {isVideo && <p>{item.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
