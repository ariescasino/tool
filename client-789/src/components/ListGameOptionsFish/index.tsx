/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "antd";
import { useEffect, useState } from "react";
import HotTheGameFish from "./HotGameFish";
import gameService from "@/api/services/game.service";
import { useDebounce } from "react-use";
import Image from "next/image";
import GameType from "@/config/GameType";
import ProviderID from "@/config/ProviderID";

interface ListGameOptionsProps {
  codeGame: string;
  bgUrl?: string;
  bgHeadline?: string;
  itemBg?: string;
  itemBgActive?: string;
  playButtonActive?: string;
}

export default function ListGameOptionsFish() {
  const [activeItem, setActiveItem] = useState("hot");
  const [searchValue, setSearchValue] = useState("");
  const [listGame, setListGame] = useState([]);
  const [propSearchValue, setPropSearchValue] = useState("");

  const getData = async () => {
    try {
      const res = await gameService.GameAvalibleV2({
        gpIds: [
          `${ProviderID.CQ9}`,
          `${ProviderID.JDB}`,
          `${ProviderID.Jili}`,
          `${ProviderID.BigGame}`,
          `${ProviderID.Fachai}`,
        ],
        gameTypes: [`${GameType.FISHING}`],
      });

      if (res.data.status === true) {
        const result = res?.data?.data;
        setListGame(result);
      }
    } catch (error) {}
  };

  const [debouncedGetGame] = useDebounce(() => {
    getData();
  }, 500);

  useEffect(() => {
    debouncedGetGame();
  }, []);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setPropSearchValue(searchValue);
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center border-solid border-[1px] pb-[30px] `}
      style={{
        backgroundImage: `url('/images/fishing/banner.jpg')`,
      }}
    >
      <div className="w-[850px] h-[80px] flex justify-between items-center">
        <div className="logo">
          <Image
            loading="lazy"
            src={"https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/fishing.png"}
            width={320}
            height={54}
            alt=""
          />
        </div>

        <div>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Vui lòng nhập tên trò chơi"
            suffix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
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
      <div className="bg-[#048db8] w-full flex justify-center content-center font-helvetica">
        <div className=" w-[850px] flex justify-start items-center flex-wrap py-4 gap-2">
          <p
            onClick={() => setActiveItem("hot")}
            className={` text-[16px] h-[30px] hover:bg-[#31b5e9] ${
              activeItem === "hot" ? "bg-[#31b5e9] text-[#ff0]" : "text-white"
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Trò Chơi Hot Nhất
          </p>
          <p
            onClick={() => setActiveItem("all")}
            className={` text-[16px] h-[30px] hover:bg-[#31b5e9] ${
              activeItem === "all" ? "bg-[#31b5e9] text-[#ff0]" : "text-white"
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Tất Cả Các Trò Chơi
          </p>
          <p
            onClick={() => setActiveItem("new")}
            className={`hover:text-[#ff0] text-[16px] h-[30px] hover:bg-[#31b5e9] ${
              activeItem === "new" ? "bg-[#31b5e9] text-[#ff0]" : "text-white"
            }  px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Trò Chơi Mới Nhất
          </p>
          <p
            onClick={() => setActiveItem("vip")}
            className={` text-[16px] h-[30px] hover:bg-[#31b5e9] ${
              activeItem === "vip" ? "bg-[#31b5e9] text-[#ff0]" : "text-white"
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Chuyên Gia Bắn Cá
          </p>

          <p
            onClick={() => setActiveItem("play")}
            className={` text-[16px] h-[30px] hover:bg-[#31b5e9] ${
              activeItem === "other" ? "bg-[#31b5e9] text-[#ff0]" : "text-white"
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Trò Chơi Khác
          </p>
        </div>
      </div>

      <div>
        <HotTheGameFish listGame={listGame} searchValue={propSearchValue} />
      </div>
    </div>
  );
}
