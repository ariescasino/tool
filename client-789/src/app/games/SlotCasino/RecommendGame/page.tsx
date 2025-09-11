/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import HotTheGame from "@/components/HotTheGame";
import NavigationGameComponent from "@/components/NavigationGame";
import GameType from "@/config/GameType";
import gameName from "@/constant/gameName";
import {
  useGetDataRecommend,
} from "@/hooks/useGetGameByGameName";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { IItemGame } from "@/interface/game.interface";
import styles from "@/styles/casino.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Spin } from "antd";
import { useEffect, useState } from "react";

export default function ListGameOptions({}: {}) {
  const [dataRawSlot, setDataRawSlot] = useState<IItemGame[]>([]);
  const [dataFishingGame, setDataFishingGame] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState("hot");
  const [listGame, setListGame] = useState<IItemGame[]>([]);
  const [propSearchValue, setPropSearchValue] = useState("");
  const [loadingGame, setLoadingGame] = useState(false);

  const { banner, logo, bgInput, bgItem, colorTitle, bgTitle, navigatorBg, pagnigatorBg } =
    useSupplierLogo(gameName.Recommend);

  const {
    data: dataGame,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useGetDataRecommend({
    gameTypes: [`${GameType.SLOT}`, `${GameType.SL}`],
  });

  useEffect(() => {
    switch (activeItem) {
      case "all":
        setListGame(dataRawSlot || []);
        break;

      case "new":
        const data = dataRawSlot.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );

        setListGame(data || []);
        break;

      case "banca":
        setListGame(dataFishingGame || []);
        break;

      default:
        const sortItem =
          dataRawSlot.sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank) || [];
        setListGame(sortItem || []);
        break;
    }
  }, [activeItem, dataRawSlot, dataFishingGame]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setActiveItem("all");
      setPropSearchValue(searchValue);
    }
  };

  const onClickFilter = (value: string) => {
    setSearchValue("");
    setActiveItem(value);
  };

  return (
    <NavigationGameComponent>
      <div
        className={`w-full flex flex-col items-center border-solid border-[1px] pb-[30px]  bg-white min-h-screen`}
        style={
          {
            // backgroundImage: bgUrl && `url(${bgUrl})`,
          }
        }
      >
        <div className="w-[850px] h-[80px] flex justify-between items-center">
          <div className="logo ">
            <img
              loading="lazy"
              src={logo}
              alt=""
            />
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
              className={styles.customeInputSearch}
              placeholder="Vui lòng nhập tên trò chơi."
            />
            <FontAwesomeIcon
              icon={faSearch}
              fontSize={20}
              color="#fff"
              onClick={() => {
                setActiveItem("all");
                setPropSearchValue(searchValue);
              }}
              className="mx-2 text-white cursor-pointer"
            />
          </div>
        </div>
        <div
          className="mb-[20px] w-full flex justify-center content-center"
          style={{
            background: bgTitle,
            lineHeight: "50px",
            fontSize: "18px",
          }}
        >
          Gather the hottest and most playable games on all platforms!
        </div>

        {banner && (
          <img
            className="mb-4"
            src={banner}
            alt=""
          />
        )}

        {dataGame && dataGame.length && (
          <HotTheGame
            listGame={dataGame}
            searchValue={propSearchValue}
            key="hotgame"
            gamename={gameName.Recommend}
          />
        )}

        {loadingGame && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 48, color: "#fff" }}
                  spin
                />
              }
            />
          </div>
        )}
      </div>
    </NavigationGameComponent>
  );
}
