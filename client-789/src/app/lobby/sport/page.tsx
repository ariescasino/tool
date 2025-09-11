/* eslint-disable @next/next/no-img-element */
"use client";
import gameService from "@/api/services/game.service";
import MarqueeDesktop from "@/components/MarqueeDesktop";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import isSafari from "@/utils/isSafari";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./sport.module.css";
import ProviderID from "@/config/ProviderID";
import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import { popup } from "@/utils/popup";
import gameName from "@/constant/gameName";

const defaultGameSport = [
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport1.png",
    link: `/games/SportGame/${gameName.SABA}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport2.png",
    link: `/games/SportGame/${gameName.IM}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport3.png",
    link: `/games/SportGame/${gameName.CMD}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport4.png",
    link: `/games/SportGame/${gameName.SBO}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport5.png",
    link: `/games/SportGame/${gameName.UG}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/sport6.png",
    link: `/games/SportGame/${gameName.CR}`,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/load.png",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/load.png",
  },
];

export default function Sport() {
  const deviceC = useLaunchGameDevice();
  const router = useRouter();

  const { user, setLoadingGame } = useUser();
  const username = user?.username;

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <div className="h-[280px] mb-[-30px] w-full">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
          loading="lazy"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/sport/banner.jpg"
          alt=""
        />
      </div>
      <MarqueeDesktop />

      <div className={styles.bg}>
        <div
          className={` max-w-[1200px] h-auto pt-[30px] px-5 pb-10 grid grid-cols-1 md:grid-cols-4 gap-3`}>
          {defaultGameSport.map((item) => {
            const handleClick = async () => {
              if (item.link) {
                popup(item.link)
              }
            };
            return (
              <div
                className={styles.itemGame}
                key={item.icon}
                onClick={handleClick}>
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-full h-full"
                  src={item.icon}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
