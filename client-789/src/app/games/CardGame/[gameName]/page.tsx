/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import {
  getValueCardGame,
  useGetGameAvalibleNewV2ByGameName,
} from "@/hooks/useGetGameByGameName";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Spin } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/casino.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HotTheGame from "@/components/HotTheGame";
import { LoadingOutlined } from "@ant-design/icons";
import GameType from "@/config/GameType";
import NavigationGameComponent from "@/components/NavigationGame";
import IntroducingGame from "@/components/IntroducingGame";

interface IGameOption {
  value: string;
  title: string;
  typeRank: number;
  typeGame?: string;
}

export default function CardGame() {
  const [searchValue, setSearchValue] = useState("");
  const [propSearchValue, setPropSearchValue] = useState("");
  const { gameName } = useParams<{ gameName: string }>();
  const { banner, logo, bgInput, bgItem, colorTitle, bgTitle, navigatorBg, pagnigatorBg } =
    useSupplierLogo(gameName);
  const { listGameOption } = getValueCardGame(gameName) as any;
  const [ListGame, setListGame] = useState([]);

  const [activeItem, setActiveItem] = useState<IGameOption>(listGameOption[0]);
  const [queryValue, setQueryValue] = useState({
    typeRank: listGameOption[0]?.typeRank,
    typeGame: listGameOption[0]?.typeGame || "card",
  });

  const tabSearch =
    (listGameOption && listGameOption.find((item: any) => item?.value === "all")) ||
    listGameOption.find((item: any) => item?.value === "card");

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setActiveItem(tabSearch);
      setPropSearchValue(searchValue);
    }
  };

  // get theo bộ lọc
  const {
    data: dataGame,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useGetGameAvalibleNewV2ByGameName({
    querykey: ``,
    gameName,
    rankType: queryValue.typeRank,
    typeGame: queryValue.typeGame || "card",
  });

  useEffect(() => {
    if (dataGame) {
      setListGame(dataGame);
    }
  }, [dataGame]);

  useEffect(() => {
    if (activeItem) {
      refetch();
    }
  }, [activeItem]);

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
                setActiveItem(tabSearch);
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
          }}
        >
          <div className="w-[850px] flex items-center flex-wrap py-[10px] gap-4 font-roHe">
            {listGameOption.length > 0 &&
              listGameOption.map((item: any, index: number) => {
                return (
                  <p
                    onClick={() => {
                      setActiveItem(item);
                      setQueryValue({
                        typeRank: item.typeRank,
                        typeGame: item.typeGame || "card",
                      });
                      setSearchValue("");
                      setPropSearchValue("");
                    }}
                    className={`text-white ${
                      activeItem?.value !== item.value
                        ? `${styles[`${gameName}`]}`
                        : `${styles[`${gameName}Hover`]}`
                    } text-[15px] h-[30px]  px-4 py-2 flex justify-center items-center rounded-full cursor-pointer`}
                    key={index}
                  >
                    {item?.title}
                  </p>
                );
              })}
          </div>
        </div>

        {banner && (
          <img
            className="mb-4"
            src={banner}
            alt=""
          />
        )}

        <div className={`${activeItem?.value === "hot" ? "block" : "hidden"}`}>
          <IntroducingGame
            gamename={gameName}
            type={[GameType.CB]}
            linkRecommend="/games/CardGame/RecommendGame"
            key={"card-intro"}
          />
        </div>

        {ListGame.length && activeItem?.value === "hot" && (
          <div
            className={styles.gameHeadLine}
            style={{
              borderColor: bgTitle,
            }}
          >
            <span
              className="font-roHe"
              style={{
                backgroundColor: `${colorTitle || bgTitle}`,
              }}
            >
              Trò Chơi Hot Nhất
            </span>
          </div>
        )}
        {ListGame.length && (
          <HotTheGame
            listGame={ListGame}
            searchValue={propSearchValue}
            key="hotgame"
            gamename={gameName}
          />
        )}

        {isLoading ||
          (isFetching && (
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
          ))}
      </div>
    </NavigationGameComponent>
  );
}
