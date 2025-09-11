"use client";
import { useState } from "react";
import styles from "./HistoryList.module.css";
import { usePathname } from "next/navigation";
export default function HistoryList() {
  const [openList, setOpenList] = useState(false);
  const pathname = usePathname();

  if (
    pathname.startsWith("/dang-nhap") ||
    pathname.startsWith("/dang-ky") ||
    pathname.startsWith("/casino") ||
    pathname.startsWith("/agent") ||
    pathname.startsWith("/legate") ||
    pathname.startsWith("/download") ||
    pathname.startsWith("/lobby/navigation") ||
    pathname.startsWith("/transfer") ||
    pathname.startsWith("/cskh") ||
    pathname.startsWith("/games")
  ) {
    return null;
  }
  return (
    <>
      <div
        className={`${styles.HistoryListContainer} ${openList && styles.open} hidden md:block`}>
        <div className={styles.HistoryBg}>
          <span
            className={styles.buttonShowList}
            onClick={() => setOpenList(!openList)}>
            {openList ? "Thu lại" : " Duyệt qua lịch sử"}
          </span>

          <div className="h-full">
            <ul className="h-full flex items-center">
              <li className="mx-[8px]">No data</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
