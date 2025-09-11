/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import styles from "./VipInforLayout.module.css";

interface Props {
  children: any;
  title: string;
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function VipInforLayout({
  children,
  title,
  isOpen,
  setIsOpen,
}: Props) {
  const pathName = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Đánh dấu component đã load xong
    setIsLoaded(true);
  }, []);
  return (
    <div>
      <div
        className={`${styles.popupContainer} ${isOpen && isLoaded && styles.popupShow} z-[10000000000000000000000]`}>
        <div className="relative w-full h-full">
          <div
            className={`${styles.overlayPromition} ${!isOpen && "!opacity-0 !z-[-1] !invisible"}`}></div>
          <div className="z-[1100] relative">
            <div className="flex flex-col">
              <div className={styles.boxTitle}>
                <div className="font-bold">{title}</div>
                <button
                  className={styles.buttonClose}
                  onClick={() => {
                    setIsOpen(false);
                  }}>
                  <FontAwesomeIcon icon={faCircleXmark} color="#fff" />
                </button>
              </div>
              <div
                className={`${styles.listPromotion} ${!Array.isArray(children) && children?._owner?.type?.name !== "VipHistory" ? "bg-black" : "bg-[#b0d2ef]"}`}>
                <div className="mt-[36px] min-h-[110vh] overflow-y-auto ">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
