/* eslint-disable @next/next/no-img-element */
import gameService from "@/api/services/game.service";
import { useFavoriteContext } from "@/context/useFavoriteContext";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { HeartFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";

function ItemGameMobile({ item }: any) {
  const deviceC = useLaunchGameDevice();
  const router = useRouter();
  const { changeListGameFavorite } = useFavoriteContext();
  const { user, setLoadingGame } = useUser();

  const handleClick = async () => {
    if (user?.username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: item.gameId,
          gpid: item.providerId,
          supplier: item.partnerName,
          type: item.gameTypeId,
          lang: "en",
        });

        if (res.data.data) {
          router.push(res?.data?.data);
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push("/mobile/login");
    }
  };

  const handleAddFavorite = async () => {
    changeListGameFavorite(item.gameId, item.partnerName);
  };
  return (
    <div
      key={`${item?.gameName}`}
      className="flex flex-col relative items-center">
      <img
        className="w-[74px] h-[74px] object-cover"
        src={item?.gameIconUrl ? item.gameIconUrl : 'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dg-bcr.png'}
        alt=""
        onClick={handleClick}
      />

      <div
        onClick={handleClick}
        className="text-[#808080] text-[14px] break-words w-webkit-fill-avaiable">
        {item?.gameName}
      </div>

      <div
        onClick={handleAddFavorite}
        className="absolute rounded-full w-[22px] h-[22px] bg-red-600 flex items-center justify-center top-[56px] right-[2px] ">
        {!item?.isFavorite ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            width={16}
            height={16}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>{" "}
            </g>
          </svg>
        ) : (
          <HeartFilled style={{ fontSize: 14, color: "white" }} />
        )}
      </div>
    </div>
  );
}
export default memo(ItemGameMobile);
