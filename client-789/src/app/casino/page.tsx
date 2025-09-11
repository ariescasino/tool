/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import gameService from "@/api/services/game.service";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/casino.module.css";
import { LoadingOutlined } from "@ant-design/icons";

export default function ListGameOptions({}: {}) {
  const searchParams = useSearchParams();
  const sP = searchParams.get("p");
  const sC = searchParams.get("c");
  const sG = searchParams.get("g");

  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState("all");
  const [listGame, setListGame] = useState([]);
  const [propSearchValue, setPropSearchValue] = useState("");
  const [loadingGame, setLoadingGame] = useState(false);

  const { bgTitle, logo, bgInput } = useSupplierLogo(sP || null);

  const getDataAvalible = async (category: string, game: string) => {
    if (game) {
      setLoadingGame(true);
      try {
        const res = await gameService.GameAvalibleV2({
          gameTypes: [category],
          gpIds: [game],
        });

        if (res?.data?.data) {
          const sortItem =
            res?.data?.data.sort(
              (a: { rank: number }, b: { rank: number }) => a.rank - b.rank
            ) || [];
          const uniqueArr =
            sortItem.filter(
              (item: { gpId: any; gameName: any }, index: any, self: any[]) =>
                index ===
                self.findIndex(
                  (t: { gpId: any; gameName: any }) =>
                    t.gpId === item.gpId && t.gameName === item.gameName
                )
            ) || [];

          setListGame(uniqueArr);
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    }
  };

  useEffect(() => {
    if (sC && sG) {
      getDataAvalible(sC, sG);
    }
  }, [sC, sG]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setPropSearchValue(searchValue);
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center border-solid border-[1px] pb-[30px]  bg-white min-h-screen`}
      style={
        {
          // backgroundImage: bgUrl && `url(${bgUrl})`,
        }
      }
    >
      <div className="w-[850px] h-[80px] flex justify-between items-center">
        <div className="logo">
          <img loading="lazy" src={logo} alt="" />
        </div>

        <div
          className="flex rounded p-1 items-center gap-1"
          style={{
            background: bgInput,
          }}
        >
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="rounded-none !py-[4px] !px-[6px] !text-[12px] !bg-white"
            placeholder="Vui lòng nhập tên trò chơi"
          />
          <FontAwesomeIcon
            icon={faSearch}
            fontSize={20}
            color="#fff"
            className="mx-2 text-white"
          />
        </div>
      </div>
      <div
        className=" w-full flex justify-center content-center"
        style={{
          background: bgTitle,
        }}
      >
        <div className=" w-[850px] flex justify-between items-center flex-wrap py-[10px] gap-4">
          <p
            onClick={() => setActiveItem("all")}
            className={`text-white text-[15px] h-[30px]  ${
              activeItem === "all"
                ? `${styles[`${sP}`]}`
                : `${styles[`${sP}Hover`]}`
            } px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Tất Cả Trò Chơi
          </p>
          <p
            onClick={() => setActiveItem("hot")}
            className={`text-white ${
              activeItem === "hot"
                ? `${styles[`${sP}`]}`
                : `${styles[`${sP}Hover`]}`
            } text-[15px] h-[30px]  px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Trò Chơi Mới Nhất
          </p>
          <p
            onClick={() => setActiveItem("new")}
            className={`text-white ${
              activeItem === "new"
                ? `${styles[`${sP}`]}`
                : `${styles[`${sP}Hover`]}`
            } text-[15px] h-[30px] px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Game Điện Tử
          </p>
          <p
            onClick={() => setActiveItem("play")}
            className={`text-white ${
              activeItem === "play"
                ? `${styles[`${sP}`]}`
                : `${styles[`${sP}Hover`]}`
            } text-[15px] h-[30px] px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
          >
            Trò Chơi Khác
          </p>
        </div>
      </div>

      {loadingGame && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
            }
          />
        </div>
      )}
    </div>
  );
}
