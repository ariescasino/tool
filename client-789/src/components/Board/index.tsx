/* eslint-disable @next/next/no-img-element */
"use client";

import { useId, useState } from "react";
import ListGameOptionsBoard from "./ListGameOptionsBoard";
import listGameBoard from "@/config/listGameBoard";
import styles from "./BoardPage.module.css";

export default function BoardPage() {
  const [gameCode, setGameCode] = useState(listGameBoard[0].link);
  const id = useId();

  return (
    <div className="w-[1200px] text-white">
      <div className={styles.listGame}>
        {listGameBoard.map((item) => (
          <div
            onClick={() => setGameCode(item.link)}
            className={`${styles.itemGame} ${gameCode === item.link && styles.active}`}
            key={id}>
            <figure className={styles.fig}>
              <img className="" src={item.img} alt="" />
              <figcaption>
                <span className="text-sm"> {item.name}</span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <iframe
        src={`${gameCode}/?navigator=no`}
        className={styles.iframe}
      />
    </div>
  );
}
