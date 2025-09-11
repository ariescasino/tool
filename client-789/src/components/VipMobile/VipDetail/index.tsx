/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./VipDetail.module.css";
import he from "he";

import { Swiper, SwiperSlide } from "swiper/react";
import { dataVipLv } from "..";
import { Parallax } from "swiper/modules";
import VipInforLayout from "../VipInforLayout";
import Image from "next/image";
import { rawHTML1, rawHTML2, rawHTML3 } from "@/constant/vipDetail";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function VipDetail({ isOpen, setIsOpen }: Props) {
  return (
    <div>
      <VipInforLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Chi tiết VIP">
        <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/vip_banner.jpg"></img>
        <Swiper
          className={`relative h-[400px] mt-[10px] ${styles.swiperVipDetail}`}
          loop={true}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={20}
          modules={[Parallax]}>
          {dataVipLv.map((data, index) => (
            <SwiperSlide
              key={index}
              className="relative"
              style={{ width: "243.333px" }}>
              <img src={data.LevelCardImage} className="max-h-[150px] h-auto" />
              <div
                className="absolute top-[10%] left-[10px] font-bold text-[50px] mb-[10px] text-white leading-[32px]"
                style={{ WebkitTextStroke: "1px black" }}>
                {data.Grade}
              </div>
              <div
                className={`flex absolute top-[305px] w-full text-center px-[18%] bonusTextSwiper`}>
                <div className="ml-[-14px] w-full px-[10px] text-[12px] leading-[13px] text-red-600 font-bold mb-[12px]">
                  {data.UpgradeBonus}
                </div>
                <div className="mr-[-14px] w-full px-[10px] text-[12px] leading-[13px] text-red-600 font-bold mb-[12px]">
                  {data.BirthdayBonus}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="relative mt-[-230px] h-[36px]"
          style={{
            background:
              "linear-gradient(88deg,#fdffd1 0%,#fefff0 84%,#fff 100%)",
          }}>
          <div className="relative text-black top-[3px] h-[30px] leading-[30px] text-center font-bold border-solid border-t border-b border-[#f1da6f] text-[14px]">
            Đặc quyền riêng tư
          </div>
        </div>
        <div className="flex justify-center w-3/4 mx-auto mt-[50px] mb-[45px]">
          <div className={styles.bonusLevel}>
            <Image
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="relative z-[1] mx-auto mt-[-30px] mb-[10px] w-[60px] h-[60px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/levelUp.png"
            />
            <p>Thưởng Thăng Cấp</p>
          </div>
          <div className={styles.bonusLevel} style={{ marginLeft: "5%" }}>
            <Image
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="relative z-[1] mx-auto mt-[-30px] mb-[10px] w-[60px] h-[60px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/birthday.png"
            />
            <p>Quà Sinh Nhật</p>
          </div>
        </div>
        <div className="px-[12px] overflow-y-auto text-center mb-10">
          {/* convert to tsx */}

          <p>
            <div
              className="flex justify-center mt-2 w-full"
              dangerouslySetInnerHTML={{
                __html: he.decode(rawHTML1),
              }}
            />

            <Image
              width={283}
              height={62}
              alt=""
              className="relative z-[1] mx-auto my-1"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/dkvip.png"
            />
            <div
              className="flex justify-center mt-2 w-full"
              dangerouslySetInnerHTML={{
                __html: he.decode(rawHTML2),
              }}
            />

            <Image
              width={283}
              height={62}
              alt=""
              className="relative z-[1] mx-auto my-1"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/dtvip.png"
            />
            <div
              className="flex justify-center mt-2 w-full"
              dangerouslySetInnerHTML={{
                __html: he.decode(rawHTML3),
              }}
            />
          </p>
        </div>
      </VipInforLayout>
    </div>
  );
}
