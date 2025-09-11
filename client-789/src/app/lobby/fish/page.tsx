/* eslint-disable @next/next/no-img-element */
"use client";

import GameLobbyFishMobile from "@/components/GameLobbyFishMobile";
import MarqueeDesktop from "@/components/MarqueeDesktop";
import { dataGameFish } from "@/constant/dataGame";
import { useBreakpoint } from "@/utils/check";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./game.module.css";
import { useState } from "react";

export default function Fish() {
  const breakpoint = useBreakpoint();
  const [codeGame, setCodeGame] = useState(dataGameFish[0].link);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{
          ...style,
          top: 1054,
          backgroundImage: "url('/images/games/down.png')",
          width: 190,
          height: 30,
          right: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.prevArrow}`}
        style={{
          ...style,
          top: "-15px",
          left: 0,
          backgroundImage: "url('/images/games/up.png')",
          width: 190,
          height: 30,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="w-full h-auto min-h-screen">
      {breakpoint !== "S" && (
        <div
          className={`hidden w-full h-auto md:flex flex-col items-center justify-center ${styles.bgGame}`}>
          <div className="h-[280px] mb-[-30px] w-full">
            <Image
              loading="lazy"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[280px] bg-cover"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/games/e2f472deb5f6a6f42f6854224b9dfbf5.jpg"
              alt=""
            />
          </div>
          <MarqueeDesktop />

          <div className="w-[1200px] flex">
            <div className="w-[190px] my-[60px]">
              <Slider
                dots={false}
                infinite={false}
                slidesToShow={17}
                slidesToScroll={1}
                verticalSwiping={true}
                vertical={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}>
                {dataGameFish.map((item, index) => (
                  <div
                    className={styles.itemGame}
                    key={item.id}
                    onMouseEnter={() => setCodeGame(item.link)}>
                    <figure
                      className={`${styles.fig} ${codeGame === item.link && styles.active}`}>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.img}
                        src={item.img}
                        alt=""
                      />
                      <figcaption>
                        <h5 className="text-sm my-[10px] text-[#fff]">
                          {item.name}
                        </h5>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </Slider>
            </div>
            <iframe
              src={`${codeGame}/?navigator=no`}
              className={styles.iframe}
              sandbox="allow-scripts allow-popups allow-same-origin allow-forms"
            />

            {/* <div className={styles.iframe}>
              {DynamicComponent ? (
                <DynamicComponent />
              ) : (
                <p>Loading component...</p>
              )}
            </div> */}
          </div>
        </div>
      )}
      {breakpoint === "S" && <GameLobbyFishMobile />}
    </div>
  );
}
