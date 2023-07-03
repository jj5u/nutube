import React, { useState } from "react";
import VideoItem from "./VideoItem";
import { useQuery } from "@tanstack/react-query";
import { getChannelById } from "../api/getChannelById";

export default function VideoListcopy({ keyword }) {
  const [video, setVideo] = useState("");

  const ChannelIdQuery = useQuery({
    queryKey: ["channelId"],
    queryFn: getChannelById,
  });

  return (
    <div>
      <VideoItem getVideoId={setVideo} />
    </div>
  );
}
