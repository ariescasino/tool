/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";
import styles from "./Jackpot.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import Slider from "react-slick";
import Link from "next/link";

const listUserJackpot = [
  {
    name: "rc7***4",
    point: 7901,
  },
  {
    name: "l0g***8",
    point: 874606,
  },
  {
    name: "aai***3",
    point: 869692,
  },
  {
    name: "z4w***8",
    point: 857056,
  },
  {
    name: "qfg***2",
    point: 843474,
  },
  {
    name: "b4d***8",
    point: 807088,
  },
  {
    name: "w0o***7",
    point: 795109,
  },
  {
    name: "eu7***7",
    point: 789163,
  },
  {
    name: "ms3***3",
    point: 745804,
  },
  {
    name: "pw4***7",
    point: 715475,
  },
  {
    name: "io4***0",
    point: 693688,
  },
  {
    name: "81q***3",
    point: 675423,
  },
  {
    name: "51a***7",
    point: 651609,
  },
  {
    name: "zvs***6",
    point: 650609,
  },
  {
    name: "5gp***8",
    point: 564244,
  },
  {
    name: "oha***3",
    point: 553988,
  },
  {
    name: "3d8***0",
    point: 452461,
  },
  {
    name: "wsa***1",
    point: 423883,
  },
  {
    name: "35k***5",
    point: 420550,
  },
  {
    name: "swo***8",
    point: 414965,
  },
  {
    name: "7jc***3",
    point: 349474,
  },
  {
    name: "98k***1",
    point: 322949,
  },
  {
    name: "lhe***0",
    point: 267990,
  },
  {
    name: "tcd***7",
    point: 231135,
  },
  {
    name: "qql***5",
    point: 191343,
  },
  {
    name: "jyo***4",
    point: 189014,
  },
  {
    name: "3gd***2",
    point: 106698,
  },
  {
    name: "etg***6",
    point: 52749,
  },
  {
    name: "o2i***5",
    point: 27020,
  },
  {
    name: "pxm***7",
    point: 13679,
  },
];

const LinkGame = [
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/a7027cf2c812f90aa0883e94f8939171.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/afce421ef0e66cf1ba76263c3ace2609.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/0b67ce9a36d1901986182c4e5605c902.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/77bf8c4a9d16b3db29189714b07a079f.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/0866d64d590c33877e804e620e320835.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/bd87f8b4e278c2686b120ac0701fb1b0.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/e4ca28fbaa48677a8a84c4404d600948.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/eb011b26b8c013ed99b6592a2c46f4eb.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/d437eced86b8c9197f0a7ea3d16ed29e.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/a56789f90a142d69aaaaf75e39ac1da2.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/2d8f98c3db4c16d04f7ebe7643f4f87e.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/8cd460f142b7a6a981f0a50d84d390b8.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/4b8f227266b27e8d448b73523f1eb3d9.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/7b9fde1772604181609e80a0530c6bda.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/a7027cf2c812f90aa0883e94f8939171.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/afce421ef0e66cf1ba76263c3ace2609.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/0b67ce9a36d1901986182c4e5605c902.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/77bf8c4a9d16b3db29189714b07a079f.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/0866d64d590c33877e804e620e320835.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/bd87f8b4e278c2686b120ac0701fb1b0.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/e4ca28fbaa48677a8a84c4404d600948.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/eb011b26b8c013ed99b6592a2c46f4eb.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/d437eced86b8c9197f0a7ea3d16ed29e.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/a56789f90a142d69aaaaf75e39ac1da2.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/2d8f98c3db4c16d04f7ebe7643f4f87e.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/8cd460f142b7a6a981f0a50d84d390b8.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/4b8f227266b27e8d448b73523f1eb3d9.png",
    href: "/casino?p=pg&c=201&g=13",
  },
  {
    link_img:
      "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-game-home/7b9fde1772604181609e80a0530c6bda.png",
    href: "/casino?p=pg&c=201&g=13",
  },
];

export default function JackportComponent() {
  const scrollRef = useRef(null) as any;
  const requestRef = useRef(null) as any;
  let startScrollPos = 0;

  const [numberJackpot, setNumberJackpot] = useState(88907222);

  const formatNumber = (num: number) => {
    const numStr = num.toString();
    const numArray = numStr.split("");
    const result = [];

    let counter = 0;
    for (let i = numArray.length - 1; i >= 0; i--) {
      result.unshift(numArray[i]);
      counter++;
      if (counter === 3 && i !== 0) {
        result.unshift(",");
        counter = 0;
      }
    }

    return result;
  };

  const smoothScroll = () => {
    startScrollPos += 1;
    if (scrollRef.current) {
      if (startScrollPos >= scrollRef.current.scrollHeight - 230) {
        startScrollPos = 0;
      }
      scrollRef.current.style.transform = `translateY(-${startScrollPos}px)`;
    }
    requestRef.current = requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 51) + 50; // Số ngẫu nhiên từ 50 đến 100
      setNumberJackpot((prevNumber) => prevNumber + randomIncrement);
    }, 1000); // Mỗi 1 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);

  const formattedNumber = formatNumber(numberJackpot);

  const handleMouseEnter = () => {
    cancelAnimationFrame(requestRef.current);
  };

  const handleMouseLeave = () => {
    requestRef.current = requestAnimationFrame(smoothScroll);
  };

  return (
    <div className={`hidden md:flex ${styles.bgImg}`}>
      <div className="absolute top-[95px]">
        <div className="w-[1200px] relative">
          <div className="absolute w-[227px] left-0">
            <h2 className={styles["hsn"]}>Hũ sắp nổ</h2>
            <ul>
              <li className="relative flex cursor-pointer">
                <figure className="w-[84px] h-[84px] mr-2">
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/08a4fcfb3e9d4d55a089569ace391e06.png" />
                </figure>
                <div>
                  <p>Kho Báu Aztec</p>
                  <span className="text-[#fbef52]">2.000.000.000</span>
                </div>
              </li>
              <li className="relative flex cursor-pointer mt-[18px]">
                <figure className="w-[84px] h-[84px] mr-2">
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/43904a57ccd348f6ad22e1954b449411.png" />
                </figure>
                <div>
                  <p>Đường Mạt Chược</p>
                  <span className="text-[#fbef52]">2.000.000.000</span>
                </div>
              </li>
              <li className="relative flex cursor-pointer mt-[18px]">
                <figure className="w-[84px] h-[84px] mr-2">
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/7f7d9caf30184eea83276c8e3d466aab.png" />
                </figure>
                <div>
                  <p className="ng-binding">Đường Mạt Chược 2</p>
                  <span className="text-[#fbef52]">2.000.000.000</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="absolute top-[135px] left-[25%] right-[25%] text-center flex flex-col items-center">
            <div className={styles["boxJackpotNumber"]}>
              {formattedNumber.map((item: string, index: number) => {
                switch (item) {
                  case "0":
                    return <div className={styles["0"]} key={index} />;
                  case "1":
                    return <div className={styles["digit-1"]} key={index} />;
                  case "2":
                    return <div className={styles["digit-2"]} key={index} />;
                  case "3":
                    return <div className={styles["digit-3"]} key={index} />;
                  case "4":
                    return <div className={styles["digit-4"]} key={index} />;
                  case "5":
                    return <div className={styles["digit-5"]} key={index} />;
                  case "6":
                    return <div className={styles["digit-6"]} key={index} />;
                  case "7":
                    return <div className={styles["digit-7"]} key={index} />;
                  case "8":
                    return <div className={styles["digit-8"]} key={index} />;
                  case "9":
                    return <div className={styles["digit-9"]} key={index} />;
                  case ",":
                    return <span className={styles["digit-P"]} key={index} />;

                  default:
                    break;
                }
              })}
            </div>
            <Slider
              className="w-[600px]"
              // dots={true}
              infinite={true}
              // speed={500}
              slidesToShow={4}
              slidesToScroll={1}>
              {LinkGame.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  rel="nofollow noopener"
                  href={item.href}
                  className={styles["itemSlide"]}>
                  <img src={item.link_img} alt="" />
                </Link>
              ))}
            </Slider>
          </div>

          <div className="absolute w-[227px] right-0">
            <div className="flex justify-end">
              <h2 className={styles["hsn"]}>Top Phá Hũ</h2>
            </div>

            <div className={styles["boxSc"]}>
              <div
                ref={scrollRef}
                className="pt-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {listUserJackpot.map((item) => (
                  <div className={styles["item"]} key={`${item.name}1`}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="fa-solid fa-volume-high mr-[5px]"
                      fontSize={50}
                    />
                    <div className="flex flex-col ml-[30px] text-base">
                      <span>{item.name}</span>
                      <span className="text-[#fbef52]">{item.point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
