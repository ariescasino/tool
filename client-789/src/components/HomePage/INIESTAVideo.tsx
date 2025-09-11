/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function INIESTAVideo() {
  return (
    <div className="container w-full pt-16  hidden md:flex items-center justify-center flex-col h-auto pb-5 max-w-full md:max-w-[1420px]">
      <div className="w-full bg-[url('/images/home-bg-section.png')] bg-contain bg-no-repeat h-[120px] text-center text-[28px] font-black leading-[81px] text-[#337c9d] text-[900] f-noto">
        ĐẠI SỨ THƯƠNG HIỆU ANDRÉS INIESTA
      </div>
      <div className="w-full grid grid-cols-10 gap-8">
        <iframe
          className="col-span-6 w-full h-[472px] rounded-[30px]"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAndresIniesta%2Fvideos%2F688592966738711%2F%3Fref%3Dembed_video&show_text=0&width=560"
        />
        <div className="grid col-span-4 grid-cols-1 gap-2">
          <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/iniestaimage.png" alt="" className="w-[528px] h-[313px]" />
          <div className="w-full h-auto ">
            <Swiper
              slidesPerView={2}
              pagination={false}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 2000 }}
              modules={[Autoplay, Pagination]}
              className="w-auto h-full"
            >
              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl1.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl2.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl3.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl4.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl5.png"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-none"
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/sl6.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
