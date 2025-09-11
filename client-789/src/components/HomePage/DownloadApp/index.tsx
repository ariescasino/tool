/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./DownloadApp.module.css";
import Link from "next/link";

export default function DownloadApp() {
  const [itemActive, setItemActive] = useState(1);
  const images = [
    {
      activeSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu1detail.png",
      inactiveSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu1.png",
    },
    {
      activeSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu2detail.png",
      inactiveSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu2.png",
    },
    {
      activeSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu3detail.png",
      inactiveSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu3.png",
    },
    {
      activeSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu4detail.png",
      inactiveSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu4.png",
    },
    {
      activeSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu5detail.png",
      inactiveSrc: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/daisu5.png",
    },
  ];

  return (
    <div className={`hidden md:block ${styles.main}`}>
      <div className="relative">
        <div className={styles["download"]} />
        <ul className="absolute top-[378px] left-[31px] flex">
          <li className="w-[165px] h-[38px] mr-[106px] cursor-pointer">
            <Link
              className="block w-[165px] h-[38px]"
              target="_blank"
              rel="nofollow noopener"
              href="/"
            ></Link>
          </li>

          <li className="w-[165px] h-[38px] cursor-pointer">
            <Link
              className="block w-[165px] h-[38px]"
              target="_blank"
              rel="nofollow noopener"
              href="/"
            ></Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex gap-2 mt-[-145px] cursor-pointer relative z-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={itemActive === index + 1 ? image.activeSrc : image.inactiveSrc}
            alt=""
            onClick={() => setItemActive(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
