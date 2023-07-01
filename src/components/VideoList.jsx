import React, { useState } from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ keyword }) {
  const [video, setVideo] = useState("");

  return (
    <div>
      <VideoItem getVideoId={setVideo} />
    </div>
  );
}
