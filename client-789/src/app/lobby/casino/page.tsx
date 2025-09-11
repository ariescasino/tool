/* eslint-disable @next/next/no-img-element */
"use client";
import gameService from "@/api/services/game.service";
import MarqueeDesktop from "@/components/MarqueeDesktop";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import isSafari from "@/utils/isSafari";
import { popup } from "@/utils/popup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./casino.module.css";
import Image from "next/image";
import ProviderID from "@/config/ProviderID";
import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import gameName from "@/constant/gameName";

const defaultListCasino = [
  {
    id: 0,
    link: `/games/CasinoGame/${gameName.WM}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/wm.png",
  },
  {
    id: 1,
    link: `/games/CasinoGame/${gameName.DG}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/dg.png",
  },
  {
    id: 2,
    link: `/games/CasinoGame/${gameName.SE}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/se.png",
  },
  {
    id: 3,
    // link: `/games/CasinoGame/${gameName.MT}`,
    link: `/games/CasinoGame/${gameName.AG}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/mt.png",
  },
  {
    id: 4,
    link: `/games/CasinoGame/${gameName.AG}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/ag.png",
  },
  {
    id: 5,
    link: `/games/CasinoGame/${gameName.EVO}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/evo.png",
  },
  {
    id: 6,
    // link: `/games/CasinoGame/${gameName.SA}`,
    link: `/games/CasinoGame/${gameName.SE}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/sa.png",
  },
  {
    id: 7,
    // link: `/games/CasinoGame/${gameName.DB}`,
    link: `/games/CasinoGame/${gameName.WM}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/db.png",
  },
  {
    id: 8,
    link: `/games/CasinoGame/${gameName.BG}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/bg.png",
  },
  {
    id: 9,
    // link: `/games/CasinoGame/${gameName.TP}`,
    link: `/games/CasinoGame/${gameName.WM}`,

    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/top.png",
  },
  {
    id: 10,
    link: `/games/CasinoGame/${gameName.ON}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/on.png",
  },
  {
    id: 11,
    link: `/games/CasinoGame/${gameName.ON}`,
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/casino/astar.png",
  },
];

export default function CockFighting() {
  const [selectedData, setSelectedData] = useState(0);

  const handlePlay = async (item: any) => {
    if (item.game || item.link) {
      popup(item.link)
    }
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center font-roHe">
      <MarqueeDesktop />

      <div
        className={`bg-[url('/images/casino/back_ground.png')] bg-no-repeat bg-cover bg-center w-full h-[480px]`}>
        <div className="w-full relative">
          <div className="absolute right-[180px] top-[120px] text-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-[340px] h-[176px]"
              src={defaultListCasino[selectedData].icon}
              alt=""
            />
            <p className="text-[22px] leading-[1.64] text-white w-[400px] my-5">
              Nhà cung cấp baccarat thời gian thực, Trực tiếp từ Sòng Bạc
            </p>
            <button
              onClick={() => handlePlay(defaultListCasino[selectedData])}
              className={styles.btn}>
              Cược Ngay
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1200px] grid grid-cols-6 pt-[30px] pb-[50px]">
        {defaultListCasino.map((item, index) => (
          <div
            onClick={() => setSelectedData(item.id)}
            className={`${styles.itemGame} ${selectedData === item.id && styles.active}`}
            key={index}>
            <Image
              width={174}
              height={86}
              className={styles.image}
              src={item.icon}
              alt=""
            />
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
