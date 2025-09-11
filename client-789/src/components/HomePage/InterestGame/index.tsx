"use client";

import { useState } from "react";
import styles from "./InterestGame.module.css";
import ListGame from "./ListGame";

export default function InterestGame() {
  const [interestGame, setInterestGame] = useState(1);
  const optionsGame = [
    {
      name: "HOT GAME",
      value: 1,
    },
    {
      name: "PG Điện Tử",
      value: 2,
    },
    {
      name: "JILI Điện Tử",
      value: 3,
    },
    {
      name: "TP Điện Tử",
      value: 4,
    },
    {
      name: "JILI BẮN CÁ",
      value: 5,
    },
  ];

  return (
    <div className="container w-full pt-16  hidden md:flex items-center justify-center flex-col h-auto pb-5 max-w-full md:max-w-[1420px] text-black">
      <div className="w-full bg-[url('/images/home-bg-section.png')] bg-contain bg-no-repeat h-[120px] text-center text-[28px] font-black leading-[81px] text-[#337c9d] text-[900] f-noto">
        TRÒ CHƠI YÊU THÍCH
      </div>

      <div className="w-full flex gap-4 justify-center">
        {optionsGame.map((item, index) => (
          <div
            className={interestGame === item.value ? styles.optionGameActive : styles.optionGame}
            onClick={() => setInterestGame(item.value)}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="w-full py-10">
        <ListGame itemActive={interestGame} />
      </div>
    </div>
  );
}
