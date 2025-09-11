/* eslint-disable @next/next/no-img-element */
"use client";
import gameService from "@/api/services/game.service";
import MarqueeDesktop from "@/components/MarqueeDesktop";
import GameType from "@/config/GameType";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./cook-fighting.module.css";
import Image from "next/image";
import ProviderID from "@/config/ProviderID";

export default function CockFighting() {
  const deviceC = useLaunchGameDevice();
  const router = useRouter();
  const [loadingGame, setLoadingGame] = useState(false);

  const { user } = useUser();
  const handleClick = async (dataGame: any) => {
    if (user?.username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: dataGame.gameid,
          gpid: dataGame.gpid,
          supplier: dataGame.supplier,
          type: dataGame.type,
          lang: "en",
        });
        if (res?.data && res?.data?.data) {
          router.push(res?.data?.data);
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push(
        `/lobby/navigation/LoginToSupplier?d=${deviceC}&gameid=${dataGame.gameid}&gpid=${dataGame.gpid}&supplier=${dataGame.supplier}&type=${dataGame.type}&lang=en`
      );
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <div className="h-[280px] mb-[-30px] w-full">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className="bg-cover w-full h-full"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daga/banner.png"
          alt=""
        />
      </div>
      <MarqueeDesktop />

      <div className={`${styles.bg} w-full flex justify-center items-center`}>
        <div className="w-[1200px] relative py-[50px] flex justify-evenly">
          <div
            className={`w-[544px] cursor-pointer relative ${styles.itemGame}`}>
            <Image
              width={544}
              height={359}
              sizes="100vw"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daga/aog.png"
              alt=""
            />
            <div
              onClick={() =>
                handleClick({
                  gameid: 0,
                  gpid: ProviderID.WS168,
                  type: GameType.OTHERS,
                  supplier: "fe",
                })
              }
              className={styles.btn}>
              Cược ngay
            </div>
          </div>
          <div
            className={`w-[544px] cursor-pointer relative ${styles.itemGame}`}>
            <Image
              width={544}
              height={359}
              sizes="100vw"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daga/ws.png"
              alt=""
            />
            <div
              onClick={() =>
                handleClick({
                  gameid: 0,
                  gpid: ProviderID.WS168,
                  type: GameType.OTHERS,
                  supplier: "fe",
                })
              }
              className={styles.btn}>
              Cược ngay
            </div>
          </div>
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
