/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React, { useState } from "react";
import styles from "./SwiperSlideComponent.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePathname, useRouter } from "next/navigation";
import IconDoubleArrowDown from "../IconSvg/IconDoubleArrowDown";
import IconDoubleArrowUp from "../IconSvg/IconDoubleArrowUp";
import gameService from "@/api/services/game.service";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { dataGameSlideComponent } from "@/constant/dataGame";

export default function SwiperSlideComponent() {
  // state
  const router = useRouter();
  const deviceC = useLaunchGameDevice();
  const [openSwiperSlide, setOpenSwiperSlide] = useState(true);

  const { user, setLoadingGame, loadingGame } = useUser();
  const pathname = usePathname();

  const handleClick = async (item: any) => {
    if (user?.username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: item.gameId,
          gpid: item.providerId,
          supplier: item.partnerName,
          type: item.gameTypeId,
          lang: "en",
        });

        if (res.data) {
          router.push(res?.data?.data);
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push(
        `/lobby/navigation/LoginToSupplier?d=${deviceC}&gameid=${item.gameId}&gpid=${item.providerId}&supplier=${item.partnerName}&type=${item.gameTypeId}&lang=en`
      );
    }
  };

  if (
    pathname.startsWith("/mobile/ChangeMoneyPassword") ||
    pathname.startsWith("/account/deposit")
  ) {
    return (
      <div className="fixed bottom-[60px] w-full md:hidden">
        <div className="relative">
          <div className="absolute top-[-25px] right-[40px]">
            <div
              className={`${styles.buttonCollapse} ${!openSwiperSlide && styles["animated-text"]}`}
              onClick={() => setOpenSwiperSlide((prev) => !prev)}>
              {openSwiperSlide ? (
                <IconDoubleArrowDown />
              ) : (
                <IconDoubleArrowUp />
              )}
              <div>{openSwiperSlide ? "Thu lại" : "Triển khai"}</div>
            </div>
          </div>
          <div
            className={`${styles.boxCollapse} ${openSwiperSlide && styles.boxCollapseOpen}`}>
            <Swiper slidesPerView={4.5} className="!pb-[16px]">
              {dataGameSlideComponent?.map((data: any, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col justify-between items-center pt-[20px] px-[8px] mx-[1%]"
                    onClick={() => handleClick(data)}>
                    <img
                      src={data.gameIconUrl}
                      className="w-[62px] h-[62px] rounded-[50%]"
                      alt=""
                    />
                    <div className="text-white overflow-hidden text-sm w-full text-ellipsis whitespace-nowrap font-g">
                      {data.gameName.slice(0, 10)}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
  return null;
}
