import React from "react";

export default function VideoPlayer({ videoId }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
        className="absolute w-full h-full top-0 left-0"
      ></iframe>
    </div>
  );
}
