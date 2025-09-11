/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "antd";
import { useState } from "react";
import HotTheGame from "../ItemGame";
import IntroducingTheGameSlotCasino from "../IntroducingTheGameSlotCasino";

interface ListGameOptionsProps {
  codeGame: string;
  bgUrl?: string;
  bgHeadline?: string;
  itemBg?: string;
  itemBgActive?: string;
  playButtonActive?: string;
}

export default function ListGameOptions({
  codeGame,
  bgUrl,
  bgHeadline,
  itemBg,
  itemBgActive,
  playButtonActive,
}: ListGameOptionsProps) {
  const [activeItem, setActiveItem] = useState("all");

  return (
    <div
      className={`w-full flex flex-col items-center border-solid border-[1px] pb-[30px] `}
      style={{
        backgroundImage: bgUrl && `url(${bgUrl})`,
      }}>
      <div className="w-[850px] h-[80px] flex justify-between items-center">
        <div className="logo">
          <img
            loading="lazy"
            src={"https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/cdaa048de3fc4639865ba5bb2e16716d.png"}
            alt=""
          />
        </div>

        <div>
          <Input
            placeholder="Vui lòng nhập tên trò chơi"
            suffix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="bg-black w-full flex justify-center content-center">
        <div className=" w-[850px] flex justify-between items-center flex-wrap py-4 gap-8">
          <p
            onClick={() => setActiveItem("all")}
            className={`text-white text-[16px] h-[30px] hover:bg-red-500 ${
              activeItem === "all" ? "bg-red-500" : ""
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
            Trò Chơi Hot Nhất
          </p>
          <p
            onClick={() => setActiveItem("hot")}
            className={`text-white ${
              activeItem === "hot" ? "bg-red-500" : ""
            } text-[16px] h-[30px] hover:bg-red-500 px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
            Trò Chơi Hot Nhất
          </p>
          <p
            onClick={() => setActiveItem("new")}
            className={`text-white ${
              activeItem === "new" ? "bg-red-500" : ""
            } text-[16px] h-[30px] hover:bg-red-500 px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
            Trò Chơi Mới Nhất
          </p>
          <p
            onClick={() => setActiveItem("play")}
            className={`text-white ${
              activeItem === "play" ? "bg-red-500" : ""
            } text-[16px] h-[30px] hover:bg-red-500 px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}>
            Trò Chơi Điện Tử
          </p>
        </div>
      </div>

      <div>
        {/* {activeItem === "all" && <IntroducingTheGameSlotCasino />} */}

        {/* <HotTheGame /> */}
      </div>
    </div>
  );
}
