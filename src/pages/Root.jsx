import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Root() {
  const [keyword, setKeyword] = useState("");
  const [targetChannelId, receiveTargetChannel] = useState("");
  const setKey = (key) => {
    console.log(`key:${key}`);
    setKeyword(key);
  };
  const setTargetChannel = (id) => {
    receiveTargetChannel(id);
  };
  return (
    <div>
      <SearchBar getKeyword={setKey} />
      <div className="p-2 lg:p-4">
        <Outlet keyword={keyword} receiveTargetChannel={setTargetChannel} channelId={targetChannelId} />
      </div>
    </div>
  );
}
