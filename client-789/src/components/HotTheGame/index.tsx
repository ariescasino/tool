/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IItemGame } from "@/interface/game.interface";
import { useEffect, useState } from "react";
import IntroItem from "../IntroducingTheGameSlotCasino/IntroItem";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { useUser } from "@/context/useUserContext";
import { useFavoriteContext } from "@/context/useFavoriteContext";

const totalItem = 10;

export default function HotTheGame({
  listGame,
  searchValue,
  titleSu,
  gamename,
}: {
  listGame: IItemGame[];
  searchValue: string | null;
  titleSu?: string | null;
  gamename: string;
}) {
  const { favoriteGames } = useFavoriteContext();
  const {
    banner,
    logo,
    bgInput,
    bgItem,
    bgTitle,
    navigatorBg,
    pagnigatorBg,
    colorTitle,
  } = useSupplierLogo(gamename);

  const [page, setPage] = useState(1);
  const [gameSlider, setGameSlider] = useState<IItemGame[]>([]);
  const [quotient, setQuotient] = useState(0);
  const [hovered, setHovered] = useState({
    start: false,
    prev: false,
    number: false,
    next: false,
    end: false,
  });

  useEffect(() => {
    if (listGame && listGame.length) {
      setPage(1);
      const quotients = Math.ceil(listGame.length / totalItem);
      setQuotient(quotients);
      const temp = listGame ? listGame.slice(0, 10) : [];
      setGameSlider(temp);
    }
  }, [listGame]);

  useEffect(() => {
    if (searchValue) {
      setPage(1);
      const filtered = listGame.filter((game) =>
        game?.gameName?.toLowerCase()?.includes(searchValue?.toLowerCase())
      );

      const quotients = Math.ceil(filtered ? filtered.length / totalItem : 0);

      setQuotient(quotients);
      const temp = filtered ? filtered.slice(0, 10) : [];
      setGameSlider(temp);
    } else {
      setPage(1);
      const quotients = Math.ceil(listGame.length / totalItem);
      setQuotient(quotients);
      const temp = listGame ? listGame.slice(0, 10) : [];
      setGameSlider(temp);
    }
  }, [searchValue]);

  const handleChangePage = (pageNow: number, type: "prev" | "next") => {
    if (type === "prev" && pageNow > 1) {
      setPage(pageNow - 1);
      const temp = listGame
        ? listGame.slice((pageNow - 2) * totalItem, (pageNow - 1) * 10)
        : [];
      setGameSlider(temp);
    }
    if (type === "next" && pageNow < quotient) {
      setPage(pageNow + 1);
      const temp = listGame
        ? listGame.slice(pageNow * totalItem, (pageNow + 1) * 10)
        : [];
      setGameSlider(temp);
    }
  };

  return (
    <div className="pb-[20px] flex justify-center flex-col items-center w-full lg:w-[850px]">
      {/* <div className="headline flex justify-between w-[850px] border-b-2 border-black">
        <span className="bg-[#000] text-white p-1 rounded-t-md">
          Tất Cả Trò Chơi
        </span>
        <div className="flex items-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-[18px] h-[18px]"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Nhiều Trò Chơi Hơn
        </div>
      </div> */}

      <div className=" pb-[20px] w-[850px] grid grid-cols-5 gap-[14px]">
        {gameSlider &&
          gameSlider.map((item, index) => {
            const isFavorite = favoriteGames?.some(
              (game) => game.game_id === String(item.gameId)
            );
            item.isFavorite = isFavorite;
            return (
              <IntroItem
                dataGame={item}
                titleSu={titleSu}
                key={index}
                gamename={gamename}
              />
            );
          })}
      </div>

      {listGame && listGame.length ? (
        <div className="flex justify-center items-center gap-[3px]">
          <div
            onClick={() => handleChangePage(2, "prev")}
            onMouseEnter={() =>
              setHovered({
                ...hovered,
                start: true,
              })
            }
            onMouseLeave={() =>
              setHovered({
                ...hovered,
                start: false,
              })
            }
            className=" h-[25px] text-[16px] text-[#fff] px-[10px] "
            style={{
              backgroundColor: hovered.start ? pagnigatorBg : "#555",
            }}>
            {"<<"}
          </div>

          <div
            onClick={() => handleChangePage(page, "prev")}
            onMouseEnter={() =>
              setHovered({
                ...hovered,
                prev: true,
              })
            }
            onMouseLeave={() =>
              setHovered({
                ...hovered,
                prev: false,
              })
            }
            className=" h-[25px] text-[16px] text-[#fff] px-[10px] "
            style={{
              backgroundColor: hovered.prev ? pagnigatorBg : "#555",
            }}>
            {"<"}
          </div>

          <div
            onMouseEnter={() =>
              setHovered({
                ...hovered,
                number: true,
              })
            }
            onMouseLeave={() =>
              setHovered({
                ...hovered,
                number: false,
              })
            }
            className=" h-[25px] text-[16px] text-[#fff] px-[10px] "
            style={{
              backgroundColor: hovered.number ? pagnigatorBg : "#555",
            }}>
            {quotient !== 1 ? `${page} / ${quotient}` : `1`}
          </div>

          <div
            onClick={() => handleChangePage(page, "next")}
            onMouseEnter={() =>
              setHovered({
                ...hovered,
                next: true,
              })
            }
            onMouseLeave={() =>
              setHovered({
                ...hovered,
                next: false,
              })
            }
            className=" h-[25px] text-[16px] text-[#fff] px-[10px] "
            style={{
              backgroundColor: hovered.next ? pagnigatorBg : "#555",
            }}>
            {">"}
          </div>

          <div
            onClick={() => handleChangePage(quotient - 1, "next")}
            onMouseEnter={() =>
              setHovered({
                ...hovered,
                end: true,
              })
            }
            onMouseLeave={() =>
              setHovered({
                ...hovered,
                end: false,
              })
            }
            className=" h-[25px] text-[16px] text-[#fff] px-[10px] "
            style={{
              backgroundColor: hovered.end ? pagnigatorBg : "#555",
            }}>
            {">>"}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
