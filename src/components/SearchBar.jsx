import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default function SearchBar({ getKeyword }) {
  const logoUrl = "https://developers.google.com/static/site-assets/logo-youtube.svg";
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const client = useQueryClient();
  const location = useLocation();

  const getText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getKeyword(text);
    setText("");
    if (location.pathname === "/q") {
      // Update the URL without reloading the page
      navigate(`/q/${text}`, { replace: true });
    } else {
      // Navigate to the search results page
      navigate(`/q/${text}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      client.invalidateQueries(["video"]);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="bg-white sticky top-0 " style={{ zIndex: 999 }}>
      <nav className="flex items-center border p-2 lg:p-4">
        <div className="flex items-center gap-x-2 cursor-pointer" onClick={handleLogoClick}>
          <img src={logoUrl} alt="logo-img" style={{ width: "36px", height: "36px" }} />
          <span className="font-bold hidden sm:flex">nuTube</span>
        </div>
        <form action="submit" onSubmit={handleSubmit} className=" flex ml-auto">
          <div className="relative flex items-center gap-x-1 border border-slate-200 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl shadow-inner  ">
            <input
              type="text"
              placeholder="검색"
              onChange={getText}
              value={text}
              className="outline-0 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-slate-400  rounded-tl-2xl rounded-bl-2xl pl-2 placeholder:text-slate-400 "
            />
            <button
              onClick={() => {
                client.invalidateQueries(["video"]);
              }}
              className="flex items-center justify-center py-2 px-4  bg-slate-50 rounded-tr-2xl rounded-br-2xl border-l border-slate-200"
            >
              <GoSearch />
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
}
