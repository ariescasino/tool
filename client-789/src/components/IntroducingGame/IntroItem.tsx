/* eslint-disable @next/next/no-img-element */
"use client";

import gameService from "@/api/services/game.service";
import { useFavoriteContext } from "@/context/useFavoriteContext";

import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { IItemGame } from "@/interface/game.interface";
import { HeartFilled, HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function IntroItem({
  dataGame,
  titleSu,
  gamename,
}: {
  dataGame: IItemGame;
  titleSu?: string | null;
  gamename: string;
}) {
  const { user, setLoadingGame } = useUser();
  const { favoriteGames, fetchFavoriteGames } = useFavoriteContext();
  const router = useRouter();
  const deviceC = useLaunchGameDevice();
  const username = user?.username;
  // const [isFavorite, setIsFavorite] = useState(dataGame.isFavorite ?? false);
  const {
    banner,
    logo,
    bgInput,
    bgItem,
    bgTitle,
    navigatorBg,
    pagnigatorBg,
    bgBtn,
    colorTitleBtn,
  } = useSupplierLogo(gamename);

  const handleClick = async () => {
    if (username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: dataGame.gameId,
          gpid: dataGame.providerId,
          supplier: dataGame.partnerName,
          type: dataGame.gameTypeId,
          lang: "en",
        });

        if (res.data) {
          const encodedParams = encodeURIComponent(res?.data?.data);
          const width = window.innerWidth;
          const height = window.innerHeight;
          window.open(
            `/games/playing?url=${encodedParams}`, // URL bạn muốn mở
            "popupWindow", // Tên cửa sổ popup
            `width=${width},height=${height},top=0,left=0,scrollbars=yes,resizable=yes`,
          );
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push(
        `/lobby/navigation/LoginToSupplier?d=${deviceC}&gameid=${dataGame.gameId}&gpid=${dataGame.providerId}&supplier=${dataGame.partnerName}&type=${dataGame.gameTypeId}&lang=en`,
      );
    }
  };

  const handleAddFavorite = async () => {
    if (dataGame.isFavorite) {
      await gameService.DeleteGameFavorite(dataGame.gameId, dataGame.partnerName).catch(() => { });
    } else {
      await gameService.AddGameFavorite(dataGame.gameId, dataGame.partnerName).catch(() => { });
    }
    fetchFavoriteGames();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      // onClick={() => handleClick()}
      className={`cursor-pointer pt-[9px] pb-[4px] ${titleSu ? "h-[180px]" : ""} min-h-[230px] w-[158px] m-[5px] rounded-lg border-solid border-[1px] border-black hover:border-transparent flex flex-col justify-between items-center gap-2 ${isOpen && "bg-[#df3434] border-[#ff1c4f]"
        }  transition duration-300 relative`}
      style={{
        background: isOpen ? bgItem : "",
      }}
    >
      {isOpen && (
        <div
          onClick={() => handleClick()}
          className="absolute top-1/4 w-[90px] text-center px-4 py-1  bg-[#fc3f49] z-50 rounded-md"
          style={{
            background: isOpen ? bgBtn : "",
            color: colorTitleBtn ? colorTitleBtn : "white",
          }}
        >
          Play
        </div>
      )}
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          className={`${isOpen && "opacity-70 bg-black"
            } transition duration-300 object-cover w-[140px] h-[140px]`}
          src={dataGame.gameIconUrl}
          alt=""
        />
        <div className="w-full grid grid-cols-12 pl-2 gap-1">
          <div className={`col-span-10 text-black ${isOpen && "text-white"} `}>
            {dataGame.gameName}
          </div>
          <div
            className="col-span-2"
            onClick={handleAddFavorite}
          >
            {dataGame.isFavorite ? (
              <HeartFilled style={{ fontSize: 16, color: "red" }} />
            ) : (
              <HeartOutlined style={{ fontSize: 16, color: isOpen ? "white" : "gray" }} />
            )}
          </div>
        </div>
      </div>

      {titleSu && (
        <div
          onClick={() => handleClick()}
          className={`flex justify-center text-gray-400 text-xs ${isOpen && "text-white"
            } transition duration-300`}
        >
          {titleSu}
        </div>
      )}
    </div>
  );
}
