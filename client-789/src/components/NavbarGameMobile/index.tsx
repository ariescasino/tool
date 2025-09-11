/* eslint-disable @next/next/no-img-element */
import {
  faCaretLeft,
  faCaretRight,
  faFish,
  faGamepad,
  faTicket,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import styles from "./NavbarGameMobile.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";
import listGameNavMobile from "@/constant/listGameNavMobile";

function NavbarGameMobile() {
  const [kind, setKind] = useState();
  const router = useRouter();
  const pathname = usePathname();

  const swiperRef = useRef<any>(null);
  const searchParams = useSearchParams();

  const changeQuery = (newQuery: string) => {
    router.replace(`${pathname}?kind=${newQuery}`, undefined);
  };

  const handleClickSlide = (data?: { href: string; query?: string }) => {
    data?.href && router.push(data?.href);
  };

  return (
    <div className="pb-[52px] md:pb-[100px]">
      <div className="block md:hidden fixed w-full z-[40] h-[47px]">
        <div>
          <div className={styles["custom-swiper"]}>
            <Swiper
              slidesPerView={5}
              className={styles["swiper-button"]}
              navigation={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation]}
            >
              {listGameNavMobile.map((data, index) => {

                return (
                  <SwiperSlide
                    key={index}
                    onClick={(e) =>
                      data?.href &&
                      handleClickSlide({ href: data?.href, query: data.query })
                    }
                  >
                    <div
                      className={`text-center flex flex-col justify-center items-center h-[52px] `}
                      style={{
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        className={`${data.href === pathname ? data.classIconActive : data.classIcon} ${styles.slideSize} bg-cover`}
                      ></div>
                      <div
                        className={`font-roHe pt-[1px] text-[14px] uppercase ${data.href === pathname ? "text-[#ff9000]" : "text-[white]"} w-[95%] min-h-[22px] flex justify-center items-center`}
                      >
                        {data.label}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <button
                className="swiper-button-prev"
                onClick={() =>
                  swiperRef.current && swiperRef.current.slidePrev()
                }
              >
                <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/prev.svg" alt="" />
              </button>
              <button
                className="swiper-button-next"
                onClick={() =>
                  swiperRef.current && swiperRef.current.slideNext()
                }
              >
                <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/next.svg" alt="" />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavbarGameMobile;
