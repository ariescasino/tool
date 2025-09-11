"use client";

import { Pagination as Pa } from "antd";
import BoardGameItem from "./BoardGameItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useRef } from "react";
import { CaretRightFilled } from "@ant-design/icons";
import IconSlideNext from "./iconSlideNext";
import IconSlidePrev from "./iconSlidePrev";

interface Props {
  check: string;
}
export default function HotTheGameFish({ check }: Props) {
  const swiperRef = useRef() as any;

  // data

  const dataItemFlag = [
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish5a5cf68bfe6945688e2f9e507b554d81.png",
      DisplayName: "Phỏm Tá Lả",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5a5cf68bfe6945688e2f9e507b554d81.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3aaea21f2d0740e6b5a0a0ee521706bb.png",
      DisplayName: "Vũ Hội trong Rừng",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3aaea21f2d0740e6b5a0a0ee521706bb.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/d3a6a4ae639a4df3a310967b23e1a9ff.png",
      DisplayName: "Tài Xỉu",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/d3a6a4ae639a4df3a310967b23e1a9ff.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/2451f54ce0354ad69db9dba8de74fcf3.png",
      DisplayName: "Mậu Binh",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/2451f54ce0354ad69db9dba8de74fcf3.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/198c71a39c95442caa2806bbf2f709a0.png",
      DisplayName: "Bài Tấn",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/198c71a39c95442caa2806bbf2f709a0.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/8eef432b37ee4d74b8bb8e9c84391f4d.png",
      DisplayName: "Ngầu Hầm trăm người",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/8eef432b37ee4d74b8bb8e9c84391f4d.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/0873640e421e470e9fbfa98c61622024.png",
      DisplayName: "Ngầu Hầm xem bài ",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/0873640e421e470e9fbfa98c61622024.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/950fd112c4c4484fad829ce31ecfec93.png",
      DisplayName: "Đại Chiến Đỏ Đen",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/950fd112c4c4484fad829ce31ecfec93.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/f63d7fa2086a4ef6a4b8fac4fc303210.png",
      DisplayName: "Xì tố",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/f63d7fa2086a4ef6a4b8fac4fc303210.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3689d89c47ec4e5686404da43b659697.png",
      DisplayName: "Giành Chủ Bull Bull",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3689d89c47ec4e5686404da43b659697.png",
    },
    {
      AdIsEnabled: false,
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/53fa0c3fd12849cdb8a6bc6adcefcad9.png",
      DisplayName: "Nổ Kim Hoa",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/53fa0c3fd12849cdb8a6bc6adcefcad9.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/cd02a6535ef244cb91a498bd8fa10e81.png",
      DisplayName: "Xì dách",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/cd02a6535ef244cb91a498bd8fa10e81.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e2783f8213e94cda88ffa388ce986cc0.png",
      DisplayName: "Cát Tê",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e2783f8213e94cda88ffa388ce986cc0.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/41c48ec579f34e71b04da484c85b25bc.png",
      DisplayName: "Bài Cào",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/41c48ec579f34e71b04da484c85b25bc.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5bd8972e65dc424f8eff9f64579e53c3.png",
      DisplayName: "Trăm Knorr",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5bd8972e65dc424f8eff9f64579e53c3.png",
    },
  ];

  const dataItemHot = [
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5a5cf68bfe6945688e2f9e507b554d81.png",
      DisplayName: "Phỏm Tá Lả",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5a5cf68bfe6945688e2f9e507b554d81.png",
    },
    {
      AdIsEnabled: false,
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/d3a6a4ae639a4df3a310967b23e1a9ff.png",
      DisplayName: "Tài Xỉu",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/d3a6a4ae639a4df3a310967b23e1a9ff.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/2451f54ce0354ad69db9dba8de74fcf3.png",
      DisplayName: "Mậu Binh",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/2451f54ce0354ad69db9dba8de74fcf3.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/198c71a39c95442caa2806bbf2f709a0.png",
      DisplayName: "Bài Tấn",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/198c71a39c95442caa2806bbf2f709a0.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/8eef432b37ee4d74b8bb8e9c84391f4d.png",
      DisplayName: "Ngầu Hầm trăm người",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/8eef432b37ee4d74b8bb8e9c84391f4d.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/0873640e421e470e9fbfa98c61622024.png",
      DisplayName: "Ngầu Hầm xem bài ",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/0873640e421e470e9fbfa98c61622024.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/950fd112c4c4484fad829ce31ecfec93.png",
      DisplayName: "Đại Chiến Đỏ Đen",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/950fd112c4c4484fad829ce31ecfec93.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/f63d7fa2086a4ef6a4b8fac4fc303210.png",
      DisplayName: "Xì tố",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/f63d7fa2086a4ef6a4b8fac4fc303210.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3689d89c47ec4e5686404da43b659697.png",
      DisplayName: "Giành Chủ Bull Bull",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/3689d89c47ec4e5686404da43b659697.png",
    },
  ];

  const dataItem = [
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/53fa0c3fd12849cdb8a6bc6adcefcad9.png",
      DisplayName: "Nổ Kim Hoa",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/53fa0c3fd12849cdb8a6bc6adcefcad9.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/cd02a6535ef244cb91a498bd8fa10e81.png",
      DisplayName: "Xì dách",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/cd02a6535ef244cb91a498bd8fa10e81.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e2783f8213e94cda88ffa388ce986cc0.png",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e2783f8213e94cda88ffa388ce986cc0.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/41c48ec579f34e71b04da484c85b25bc.png",
      DisplayName: "Bài Cào",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/41c48ec579f34e71b04da484c85b25bc.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5bd8972e65dc424f8eff9f64579e53c3.png",
      DisplayName: "Trăm Knorr",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/5bd8972e65dc424f8eff9f64579e53c3.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/524a2c37f6964156a19d429d2451efe9.png",
      DisplayName: "4 Lá Giành Chủ Bull Bull",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/524a2c37f6964156a19d429d2451efe9.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/491bfa37595b48f2be792e88565281cc.png",
      DisplayName: "Sicbo Trăm Ngườ",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/491bfa37595b48f2be792e88565281cc.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/a06ab29ef0f54e6ea53049d8705822bd.png",
      DisplayName: "Xóc Đĩa",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/a06ab29ef0f54e6ea53049d8705822bd.png",
    },
    {
      ButtonImagePath:
        "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e4e1801418b140cc9c7529736c1406bc.png",
      DisplayName: "Bầu Cua",
      ImagePath: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hot-game-fish/e4e1801418b140cc9c7529736c1406bc.png",
    },
  ];
  return (
    <>
      {check === "hot" && (
        <div className=" py-[20px] w-full self-center flex justify-center items-center">
          <div className="lg:w-[850px] w-full relative ">
            <p className="mb-2 border-b-2 border-solid border-black">
              <span className="inline-block align-top px-4 py-0 text-white text-base leading-10 bg-black rounded-t-lg">
                Giới Thiệu Trò Chơi
              </span>
              <button
                type="button"
                className="btn btn-link float-right text-black text-base leading-10 no-underline px-4">
                <CaretRightFilled />
                <span className="ng-scope">Nhiều Trò Chơi Hơn</span>
              </button>
            </p>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#ededed] hover:bg-[#000] w-[45px] h-[45px] text-black hover:text-white absolute left-[-50px] top-[46%] flex items-center justify-center rounded-full">
              <IconSlidePrev />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#ededed] hover:bg-[#000] w-[45px] h-[45px] text-black hover:text-white absolute right-[-50px] top-[46%] flex items-center justify-center rounded-full">
              <IconSlideNext />
            </button>
            <Swiper
              spaceBetween={10}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                1028: {
                  slidesPerView: 5,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
              }}>
              {dataItem.map((item, index) => (
                <SwiperSlide key={index}>
                  <BoardGameItem
                    img={item?.ButtonImagePath}
                    title={item?.DisplayName}
                    slider={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <div className="py-[20px] flex justify-center flex-col items-center w-full lg:w-[850px]">
        <div className="lg:container w-full py-[20px] lg:w-[850px] flex flex-wrap gap-[14px]">
          {check === "new" &&
            dataItem.map((item, index) => (
              <React.Fragment key={index}>
                <BoardGameItem
                  img={item?.ButtonImagePath}
                  title={item?.DisplayName}
                />
              </React.Fragment>
            ))}
          {check === "all" &&
            dataItemFlag.map((item, index) => (
              <React.Fragment key={index}>
                <BoardGameItem
                  img={item?.ButtonImagePath}
                  title={item?.DisplayName}
                />
              </React.Fragment>
            ))}
          {check === "hot" &&
            dataItemHot.map((item, index) => (
              <React.Fragment key={index}>
                <BoardGameItem
                  img={item?.ButtonImagePath}
                  title={item?.DisplayName}
                />
              </React.Fragment>
            ))}
        </div>
        <Pa />
      </div>
    </>
  );
}
