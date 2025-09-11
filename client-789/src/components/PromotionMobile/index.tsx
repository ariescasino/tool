/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import styles from "./PromotionMobile.module.css";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PromotionMobile.module.css";
import {
  faCircleXmark,
  faReply,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { dataItemPromotions } from "./dataItemPromotions";
import PromotionDetailsMobile from "../PromotionDetailsMobile";
import { useUser } from "@/context/useUserContext";
import gameService from "@/api/services/game.service";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import isSafari from "@/utils/isSafari";
import { popup } from "@/utils/popup";
import { dataGameSlideComponent } from "@/constant/dataGame";
import { dataTagPromotion } from "@/config/dataTagPromotion";
import Link from "next/link";
import { linkPromotion } from "@/constant";

export default function PromotionMobile() {
  const [open, setOpen] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const { user, setLoadingGame } = useUser();
  const deviceC = useLaunchGameDevice();
  const [openSwiperSlide, setOpenSwiperSlide] = useState(true);
  const [isShowDetails, setIsShowDetails] = useState({
    bool: false,
    index: -1,
  });
  const router = useRouter();
  useEffect(() => {
    // Hiển thị popup khi component được mount
    setIsVisible(true);
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      setIsExiting(true);
      return new Promise((resolve) => setTimeout(resolve, 300));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
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
      router.push('/mobile/login');
    }
  };

  return (
    <div className="block md:hidden">
      <div
        className={`${styles.popupContainer} ${isVisible && !isExiting ? styles.popupShow : ""
          } ${isExiting ? styles.popupHide : ""} block md:hidden`}
      >
        <div className="relative w-full h-full pt-[6vh]">
          <div className={styles.overlayPromition}></div>
          <div
            className="z-[1100] relative"
            style={{
              height: "calc(94vh)",
            }}
          >
            <div>
              <div className={styles.boxTitle}>
                <button
                  onClick={() => {
                    setIsShowDetails({
                      bool: false,
                      index: -1,
                    });
                  }}
                  className={`${isShowDetails.bool ? "visible" : "opacity-0"}`}
                >
                  <FontAwesomeIcon icon={faReply} color="#fff" />
                </button>
                <p className=" text-[#fff]">TRUNG TÂM KHUYẾN MÃI</p>
                <button
                  className={styles.buttonClose}
                  onClick={() => {
                    router.back();
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} color="#fff" />
                </button>
              </div>
              <div className={styles.listPromotion}>
                <div className="mt-[36px] overflow-y-auto w-full px-4 h-[calc(94vh-150px)]">
                  <div
                    className="relative pb-[60px] flex-1 "
                  >
                    {isShowDetails.bool === true && (
                      <PromotionDetailsMobile />


                    )}
                    {isShowDetails.bool === false && (
                      <div className="flex flex-wrap mb-3">
                        {dataTagPromotion.map((data, index) => (
                          <div
                            onClick={() => setSelectedTabIndex(index)}
                            key={index}
                            className={
                              selectedTabIndex === index
                                ? styles.tagItemPromotionHover
                                : styles.tagItemPromotion
                            }
                          >
                            {data.name}
                          </div>
                        ))}
                      </div>
                    )}
                    {isShowDetails.bool === false && (
                      <div className="flex flex-col gap-2">
                        {dataItemPromotions[selectedTabIndex].map(
                          (data, index) => (
                            <div
                              key={index}
                              onClick={() =>
                                setIsShowDetails({
                                  bool: true,
                                  index: index,
                                })
                              }
                            >
                              <Image
                                src={data.img}
                                alt={"image" + index}
                                width={1000}
                                height={1000}
                                className="w-full"
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Link href={linkPromotion} className="fixed top-1/2 left-0 z-10 h-[90px] w-[90px] translate-y-1/2">
              <Image width={90} height={90} alt="" src={'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet//images/promotion/hop-qua-vip789bet.gif?w=256&q=75'} />

            </Link>
            <div className="absolute bottom-[9%] w-full">
              <div className="relative">
                <div className="absolute top-[-25px] right-[40px]">
                  <div
                    className={styles.buttonCollapse}
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="12"
                      height="12"
                      viewBox="0 0 1080 1080"
                      className={!open ? styles.svgS : "rotate-180"}
                    >
                      <g
                        transform="matrix(1 0 0 1 540 540)"
                        id="291ebfa0-a126-4100-b21e-6192ff7baa05"
                      >
                        <rect
                          style={{
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeDashoffset: 0,
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            fill: "#fff",
                            fillRule: "nonzero",
                            opacity: 1,
                            visibility: "hidden",
                          }}
                          vector-effect="non-scaling-stroke"
                          x="-540"
                          y="-540"
                          rx="0"
                          ry="0"
                          width="1080"
                          height="1080"
                        />
                      </g>
                      <g
                        transform="matrix(1 0 0 1 540 540)"
                        id="98dad8fe-100b-440c-8c7b-12ee752b0943"
                      ></g>
                      <g transform="matrix(70.4 0 0 70.26 539.38 538.96)">
                        <path
                          style={{
                            stroke: "none",
                            strokeWidth: 1,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeDashoffset: 0,
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 4,
                            fill: "#ffffff",
                            fillRule: "nonzero",
                            opacity: 1,
                          }}
                          transform=" translate(-12, -10.99)"
                          d="M 11.293 4.293 C 11.683499851485813 3.9026180616671375 12.316500148514184 3.9026180616671375 12.706999999999999 4.293 L 18.707 10.293 C 19.085972209508114 10.685378886964308 19.080552373897117 11.309084777021123 18.69481857545912 11.694818575459118 C 18.309084777021123 12.080552373897115 17.68537888696431 12.085972209508112 17.293 11.706999999999999 L 12 6.414 L 6.707 11.707 C 6.314621113035688 12.085972209508089 5.690915222978893 12.080552373897081 5.305181424540907 11.694818575459095 C 4.9194476261029205 11.309084777021107 4.914027790491912 10.685378886964314 5.293 10.293000000000001 L 11.293 4.293000000000001 z M 12 12.414 L 6.707 17.707 C 6.314621113035692 18.085972209508114 5.690915222978876 18.080552373897117 5.305181424540879 17.69481857545912 C 4.919447626102882 17.309084777021123 4.914027790491886 16.68537888696431 5.293 16.293 L 11.293 10.293 C 11.683499851485813 9.902618061667138 12.316500148514184 9.902618061667136 12.706999999999999 10.293 L 18.707 16.293 C 19.08597220950814 16.685378886964305 19.080552373897152 17.309084777021138 18.694818575459145 17.694818575459145 C 18.30908477702114 18.080552373897152 17.6853788869643 18.08597220950814 17.293 17.707 L 12 12.414 z"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                    <div className="font-normal">
                      {open ? "Thu lại" : "Triển khai"}
                    </div>
                  </div>
                </div>
                <div className={`${styles.boxCollapse} ${open && styles.boxCollapseOpen}`}>

                  {open && (
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
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
