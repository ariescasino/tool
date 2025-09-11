/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import style from "./Productions.module.css";
import { useRouter } from "next/navigation";

export default function Productions() {
  const router = useRouter();
  const [activeDiv, setActiveDiv] = useState(1);
  const sport = [
    {
      name: "Saba Thể thao",
      link: "/",
    },
    {
      name: "cmd Thể thao",
      link: "/",
    },
    {
      name: "ug Thể thao",
      link: "/",
    },
    {
      name: "sbo Thể thao",
      link: "/",
    },
    {
      name: "cr Thể thao",
      link: "/",
    },
    {
      name: "im Thể thao",
      link: "/",
    },
  ];

  const casino = [
    {
      name: "dg trực tuyến",
      link: "/",
    },
    {
      name: "se trực tuyến",
      link: "/",
    },
    {
      name: "evo trực tuyến",
      link: "/",
    },
    {
      name: "wm trực tuyến",
      link: "/",
    },
    {
      name: "mt trực tuyến",
      link: "/",
    },
    {
      name: "ag trực tuyến",
      link: "/",
    },
    {
      name: "sa trực tuyến",
      link: "/",
    },
  ];

  const nohu = [
    {
      name: "pg điện tử",
      link: "/",
    },
    {
      name: "jili điện tử",
      link: "/",
    },
    {
      name: "tp điện tử",
      link: "/",
    },
    {
      name: "fc điện tử",
      link: "/",
    },
    {
      name: "pp điện tử",
      link: "/",
    },
    {
      name: "mg điện tử",
      link: "/",
    },
    {
      name: "cq9 điện tử",
      link: "/",
    },
  ];

  const banca = [
    {
      name: "jili bắn cá",
      link: "/",
    },
    {
      name: "tp bắn cá",
      link: "/",
    },
    {
      name: "jdb bắn cá",
      link: "/",
    },
    {
      name: "bg bắn cá",
      link: "/",
    },
    {
      name: "ka bắn cá",
      link: "/",
    },
    {
      name: "ftg bắn cá",
      link: "/",
    },
    {
      name: "r88 bắn cá",
      link: "/",
    },
  ];

  const gamebai = [
    {
      name: "km game bài 3d",
      link: "/",
    },
    {
      name: "r88 game bài 3d",
      link: "/",
    },
    {
      name: "v8 game bài 3d",
      link: "/",
    },
    {
      name: "jili game bài 3d",
      link: "/",
    },
    {
      name: "tp game bài 3d",
      link: "/",
    },
    {
      name: "mg game bài 3d",
      link: "/",
    },
    {
      name: "ftg game bài 3d",
      link: "/",
    },
  ];

  const xoso = [
    {
      name: "tp xổ số",
      link: "/",
    },
    {
      name: "vr xổ số",
      link: "/",
    },
    {
      name: "gw xổ số",
      link: "/",
    },
    {
      name: "sw xổ số",
      link: "/",
    },
  ];

  const daga = [{ name: "WS168 ĐÁ GÀ", link: "/" }];
  return (
    <div className="container w-full pt-16  hidden md:flex items-center justify-center flex-col h-auto pb-5 max-w-full md:max-w-[1420px] text-black">
      <div className="w-full bg-[url('/images/home-bg-section.png')] bg-contain bg-no-repeat h-[120px] text-center text-[28px] font-black leading-[81px] text-[#337c9d] text-[900] f-noto">
        SẢN PHẨM
      </div>

      <div className="flex gap-2">
        <div
          className={`${activeDiv === 1 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(1)}
        >
          <div className={style.title}>
            <div>Thể thao</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>
          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {sport.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>
          <img
            className="bottom-[33px] right-0 scale-[1.3]"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img1.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 2 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(2)}
        >
          <div className={style.title}>
            <div>Casino</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>
          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {casino.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="bottom-0 right-0 scale-[1.3]"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img2.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 3 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(3)}
        >
          <div className={style.title}>
            <div>Nổ hũ</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>

          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {nohu.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="bottom-[24px] right-0 scale-[1.3]"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img3.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 4 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(4)}
        >
          <div className={style.title}>
            <div>Bắn cá</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>

          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {banca.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="bottom-[30px] right-0 scale-[1.3]"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img4.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 5 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(5)}
        >
          <div className={style.title}>
            <div> Game bài</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>

          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {gamebai.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="bottom-[30px] right-0 scale-[1.3]"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img5.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 6 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(6)}
        >
          <div className={style.title}>
            <div> Xổ số</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>

          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {xoso.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="scale-[1.5] bottom-[44px] right-0"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img6.png"
            alt=""
          />
        </div>

        <div
          className={`${activeDiv === 7 ? style.activeDiv : style.imActiveDiv} `}
          onMouseEnter={() => setActiveDiv(7)}
        >
          <div className={style.title}>
            <div>Đá gà</div>
            <img
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/extra-icon.png"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </div>
          <div className={style.content}>
            <div className={style.hot}>sảnh hot</div>
            {daga.map((item, index) => (
              <div className={style.ToGame} key={index} onClick={() => router.push(item.link)}>
                {item.name}
              </div>
            ))}
          </div>

          <img
            className="scale-[1.3] bottom-[44px] right-0"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/product/img7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
