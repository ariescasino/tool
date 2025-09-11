/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import FishGameItem from "./FishGameItem";
import { IItemGame } from "@/interface/game.interface";
import { useEffect, useState } from "react";

const totalItem = 10;

export default function HotTheGameFish({
  listGame,
  searchValue,
}: {
  listGame: IItemGame[];
  searchValue: string | null;
}) {
  const [page, setPage] = useState(1);
  const [gameSlider, setGameSlider] = useState<IItemGame[]>([]);
  const [quotient, setQuotient] = useState(0);

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
        game?.gameName?.toLowerCase()?.includes(searchValue?.toLowerCase()),
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
      const temp = listGame ? listGame.slice((pageNow - 2) * totalItem, (pageNow - 1) * 10) : [];
      setGameSlider(temp);
    }
    if (type === "next" && pageNow < quotient) {
      setPage(pageNow + 1);
      const temp = listGame ? listGame.slice(pageNow * totalItem, (pageNow + 1) * 10) : [];
      setGameSlider(temp);
    }
  };

  return (
    <div className="py-[20px] flex justify-center flex-col items-center w-full lg:w-[850px]">
      <div className="container py-[20px] w-[850px] flex flex-wrap gap-[14px]">
        <div className="container py-[20px] w-[850px] flex flex-wrap gap-[14px]">
          {gameSlider &&
            gameSlider.map((item, index) => (
              <FishGameItem
                dataGame={item}
                key={index}
              />
            ))}
        </div>
      </div>

      {listGame && listGame.length ? (
        <div className="flex justify-center items-center gap-[3px]">
          <div
            onClick={() => handleChangePage(2, "prev")}
            className="bg-[#555] h-[25px] text-[16px] text-[#fff] px-[10px] hover:bg-[#f3b720]"
          >
            {"<<"}
          </div>

          <div
            onClick={() => handleChangePage(page, "prev")}
            className="bg-[#555] h-[25px] text-[16px] text-[#fff] px-[10px] hover:bg-[#f3b720]"
          >
            {"<"}
          </div>

          <div className="bg-[#555] h-[25px] text-[16px] text-[#fff] px-[10px] hover:bg-[#f3b720]">
            {quotient !== 1 ? `${page} / ${quotient}` : `1`}
          </div>

          <div
            onClick={() => handleChangePage(page, "next")}
            className="bg-[#555] h-[25px] text-[16px] text-[#fff] px-[10px] hover:bg-[#f3b720]"
          >
            {">"}
          </div>

          <div
            onClick={() => handleChangePage(quotient - 1, "next")}
            className="bg-[#555] h-[25px] text-[16px] text-[#fff] px-[10px] hover:bg-[#f3b720]"
          >
            {">>"}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
