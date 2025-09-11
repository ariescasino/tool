/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "antd";
import { useState } from "react";
import HotTheGameFish from "./HotGameBoard";

interface ListGameOptionsProps {
  codeGame: string;
  bgUrl?: string;
  bgHeadline?: string;
  itemBg?: string;
  itemBgActive?: string;
  playButtonActive?: string;
}

export default function ListGameOptionsBoard({
  codeGame,
}: ListGameOptionsProps) {
  // state
  const [activeItem, setActiveItem] = useState("hot");

  return (
    <div>
      <div
        className={`w-full flex flex-col items-center border-solid border-[1px] pb-[30px] `}>
        <div className="lg:w-[850px] h-[80px] flex justify-between items-center">
          <div className="logo">
            <img
              loading="lazy"
              src={"https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/2a99c7ba321144b388e0fcbb4bc8c07b.png"}
              alt=""
            />
          </div>

          <div className="flex flex-row items-center bg-[#ffd050] p-1 gap-1">
            <Input
              placeholder="Vui lòng nhập tên trò chơi"
              className="active:border-none"
              style={{
                border: "none",
                borderRadius: "none",
              }}
            />
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-black w-full flex justify-center content-center">
          <div className=" w-[850px] flex  items-center flex-wrap py-4 gap-2">
            <p
              onClick={() => setActiveItem("hot")}
              className={` text-[16px] h-[30px] hover:bg-[#ffd050] ${
                activeItem === "hot" ? "bg-[#ffd050] text-black" : "text-white"
              } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
              Trò Chơi Hot Nhất
            </p>
            <p
              onClick={() => setActiveItem("all")}
              className={` text-[16px] h-[30px] hover:bg-[#ffd050] ${
                activeItem === "all" ? "bg-[#ffd050] text-black" : "text-white"
              } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
              Trò chơi cờ
            </p>
            <p
              onClick={() => setActiveItem("new")}
              className={` text-[16px] h-[30px] hover:bg-[#ffd050] ${
                activeItem === "new" ? "bg-[#ffd050] text-black" : "text-white"
              } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
              Trò Chơi Khác
            </p>
          </div>
        </div>
      </div>

      <div>
        <HotTheGameFish check={activeItem} />
      </div>
    </div>
  );
}
