import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Root() {
  const [keyword, setKeyword] = useState("");
  const setKey = (key) => {
    console.log(`key:${key}`);
    setKeyword(key);
  };
  return (
    <div>
      <SearchBar getKeyword={setKey} />
      <div className="p-2  mx-auto lg:p-4 xl:max-w-7xl">
        <Outlet keyword={keyword} />
      </div>
    </div>
  );
}
