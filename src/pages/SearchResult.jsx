import React from "react";
import VideoList from "../components/VideoList";
import { useParams } from "react-router-dom";

export default function SearchList() {
  const { query } = useParams();

  return (
    <div>
      search results:{query}
      <VideoList keyword={query} />
    </div>
  );
}
