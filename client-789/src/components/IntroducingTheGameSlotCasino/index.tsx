/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import IntroItem from "./IntroItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./IntroducingTheGame.module.css";
import gameService from "@/api/services/game.service";
import { IItemGame } from "@/interface/game.interface";
import Link from "next/link";
import useSupplierLogo from "@/hooks/useSupplierLogo";
import { useDebounce } from "react-use";
import ProviderID from "@/config/ProviderID";
import GameType from "@/config/GameType";

function IntroducingTheGameSlotCasino({ gamename }: { gamename: string }) {
  const [listGameIntro, setListGameIntro] = useState<IItemGame[]>([]);
  const {
    banner,
    logo,
    bgInput,
    bgItem,
    bgTitle,
    navigatorBg,
    pagnigatorBg,
    colorTitle,
  } = useSupplierLogo(gamename);

  const getDataAvalible = async () => {
    try {
      const res = await gameService.GameAvalibleV2({
        gameTypes: [`${GameType.SLOT}`],
        gpIds: [
          `${ProviderID.AsiaGaming}`,
          `${ProviderID.PragmaticPlay}`,
          `${ProviderID.CQ9}`,
          `${ProviderID.PlayTech}`,
          `${ProviderID.JDB}`,
          `${ProviderID.Jili}`,
        ],
        // maxRank: 0,
      });

      if (res?.data?.data) {
        const sortItem =
          res?.data?.data.sort(
            (a: { rank: number }, b: { rank: number }) => a.rank - b.rank
          ) || [];
        const uniqueArr =
          sortItem.filter(
            (item: { gpId: any; gameName: any }, index: any, self: any[]) =>
              index ===
              self.findIndex(
                (t: { gpId: any; gameName: any }) =>
                  t.gpId === item.gpId && t.gameName === item.gameName
              )
          ) || [];

        setListGameIntro(uniqueArr);
      }
    } catch (error) {
    } finally {
      // setLoadingGame(false);
    }
  };

  const [debouncedGetDataAvalible] = useDebounce(() => {
    getDataAvalible();
  }, 500);

  useEffect(() => {
    debouncedGetDataAvalible();
  }, []);

  function SampleNextArrow(props: any) {
    const [hovered, setHovered] = useState(false);
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${styles.hoverEffectNext} cursor-pointer`}
      >
        <div
          className={`${styles.nextButton} ${hovered ? `bg-[${navigatorBg}]` : ""}`}
          style={{
            ...style,
            display: "block",
            backgroundColor: hovered ? `${navigatorBg}` : "",
          }}
        ></div>
        <FontAwesomeIcon
          className={`${styles.iconNext} `}
          icon={faChevronRight}
          fontSize={12}
        />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const [hovered, setHovered] = useState(false);
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${styles.hoverEffectPrev} cursor-pointer`}
      >
        <div
          className={`${styles.prevButton} ${hovered ? `bg-[${navigatorBg}]` : ""}`}
          style={{
            ...style,
            display: "block",
            backgroundColor: hovered ? `${navigatorBg}` : "",
          }}
          onClick={onClick}
        ></div>
        <FontAwesomeIcon
          className={styles.iconPrev}
          icon={faChevronLeft}
          fontSize={12}
        />
      </div>
    );
  }

  return (
    <div
      className={`py-[20px] flex justify-center flex-col items-center w-full lg:w-[850px] ${
        listGameIntro.length ? "flex" : "hidden"
      }`}
    >
      <div
        className={`headline flex justify-between w-[850px] border-b-2`}
        style={{
          borderColor: `${colorTitle || bgTitle}`,
        }}
      >
        <span
          className={` text-white p-1 rounded-t-md`}
          style={{
            backgroundColor: `${colorTitle || bgTitle}`,
          }}
        >
          Giới Thiệu Trò Chơi
        </span>
        <Link
          href={"/games/SlotCasino/RecommendGame"}
          className="flex items-center  cursor-pointer"
          style={{ color: `${colorTitle || bgTitle}` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[18px] h-[18px]"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-roHe">Nhiều Trò Chơi Hơn</span>
        </Link>
      </div>

      <div className=" py-[20px] relative">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={5}
          slidesToScroll={5}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          autoplay={true}
          autoplaySpeed={2000}
          className="w-[850px]"
        >
          {listGameIntro.slice(0, 15).map((item, index) => (
            <IntroItem
              dataGame={item}
              key={`${index}ds`}
              titleSu={item?.providerName || ""}
              gamename={gamename}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default IntroducingTheGameSlotCasino;
