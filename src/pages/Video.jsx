import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import RelatedList from "../components/RelatedList";
import Profile from "../components/Profile";

export default function Video({ keyword }) {
  let { videoId, channelId } = useParams();
  const isVideo = true;
  return (
    <>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 ">
          <VideoPlayer videoId={videoId} />
          <Profile isVideo={isVideo} channelId={channelId} />
        </div>
        <div className="lg:col-span-2">
          <RelatedList />
        </div>
      </div>
    </>
  );
}
