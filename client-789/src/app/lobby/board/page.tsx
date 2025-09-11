/* eslint-disable @next/next/no-img-element */
"use client";
import BoardPage from "@/components/Board";
import GameLobbyBoardMobile from "@/components/GameLobbyBoardMobile";
import MarqueeDesktop from "@/components/MarqueeDesktop";
import styles from "./board.module.css";
import { useBreakpoint } from "@/utils/check";
import Image from "next/image";

export default function Board() {
  const breakpoint = useBreakpoint();
  return (
    <div className="w-full h-auto min-h-screen">
      <div
        className={`hidden w-full h-auto md:flex flex-col items-center justify-center ${styles.bgGame}`}
      >
        <div className="h-[280px] mb-[-30px] w-full">
          <Image
            loading="lazy"
            height={280}
            width={0}
            sizes="100vw"
            className="w-full bg-cover"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/board-game/banner.png"
            alt=""
          />
        </div>
        <MarqueeDesktop />
        {breakpoint !== "S" && <BoardPage />}
      </div>
      {breakpoint === "S" && <GameLobbyBoardMobile />}
    </div>
  );
}
