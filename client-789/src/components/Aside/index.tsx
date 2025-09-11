/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./Aside.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
  const pathname = usePathname();

  if (
    pathname.startsWith("/casino") ||
    pathname.startsWith("/games") ||
    pathname.startsWith("/cskh") ||
    pathname.startsWith("/transfer") ||
    pathname.startsWith("/lobby/navigation")
  ) {
    return "";
  } else {
    return (
      <aside className="hidden md:flex fixed right-[5px] top-[35%] z-10 ">
        <div className={styles["mainAside"]}>
          <div className="absolute z-20">
            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/247.png" alt="" />
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/cskh.png" alt="" />
            </Link>
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/fb.png" alt="" />
            </Link>
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/hotline.png" alt="" />
            </Link>
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/daily.png" alt="" />
            </Link>
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/khieunai.png" alt="" />
            </Link>
          </div>
          <div className={styles["cskh"]}>
            <Link href="https://t.me/CSKH789BET_robot">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/aside/tintuc.png" alt="" />
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}
