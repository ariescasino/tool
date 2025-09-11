"use client";
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import styles from "./GameHot.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const dataGameHot = [
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ff16f8ad214c5c96e8f3794f97701b5e.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/cec53b538ef688d005cc3d4c884270bd.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/22f56e9e2a948ab936ce62b0ab691660.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/390d14dce0677cb33ab7469c28c48368.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/f137e425c83c23eaef158e3883b15961.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/5379fc0f21c817b77249c11f41ad81f1.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/73d1c372433e8f7f8bd5c66465546076.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/4874ce1b57b42b23e5129257da5f4426.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/4243d022ee67f4424eef0bec5b0a7de0.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/f7019799a63f3f53ec3d2eb22e995c12.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/04f3e6de2adf5b88389af5f4ca36335d.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ab46ff5240a130604471ab4143b8b9aa.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/66ea994c246b1bcdbf48af89ce7d2fec.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/0f4c8f189a472acfad2886aa4e58fb7c.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/024383fb43c1191106eac21ea2a6af37.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/bf10fe3e4837c2f30f1d382964d1f0b1.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/daa0fd572d9ee9779f87b4711d2a237c.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/eaa7062e78043463f98ff3b4e6e51900.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/09da4e7b9ebdfefb8f7d5a5c4eb36da5.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/d8929a1a582f56850cde6c0930ff3ebc.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/2071871b4168055ffe4bae53746ed36a.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/a1e57315626b7688c1c31f57947c7efe.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ae207d89ad41fc1f8e4fc7eede743a23.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ff16f8ad214c5c96e8f3794f97701b5e.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/cec53b538ef688d005cc3d4c884270bd.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/22f56e9e2a948ab936ce62b0ab691660.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/390d14dce0677cb33ab7469c28c48368.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/f137e425c83c23eaef158e3883b15961.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/5379fc0f21c817b77249c11f41ad81f1.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/73d1c372433e8f7f8bd5c66465546076.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/4874ce1b57b42b23e5129257da5f4426.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/4243d022ee67f4424eef0bec5b0a7de0.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/f7019799a63f3f53ec3d2eb22e995c12.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/04f3e6de2adf5b88389af5f4ca36335d.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ab46ff5240a130604471ab4143b8b9aa.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/66ea994c246b1bcdbf48af89ce7d2fec.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/0f4c8f189a472acfad2886aa4e58fb7c.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/024383fb43c1191106eac21ea2a6af37.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/bf10fe3e4837c2f30f1d382964d1f0b1.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/daa0fd572d9ee9779f87b4711d2a237c.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/eaa7062e78043463f98ff3b4e6e51900.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/09da4e7b9ebdfefb8f7d5a5c4eb36da5.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/d8929a1a582f56850cde6c0930ff3ebc.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/2071871b4168055ffe4bae53746ed36a.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/a1e57315626b7688c1c31f57947c7efe.webp",
    link: "",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/gamehot/ae207d89ad41fc1f8e4fc7eede743a23.webp",
    link: "",
  },
];

export default function GameHot() {
  const router = useRouter();
  return (
    <div className={`hidden md:block ${styles.main} font-roHe`}>
      <div
        className={`flex justify-between items-center w-full ${styles["head"]}`}>
        Trò chơi Hot
        <p
          onClick={() => {
            router.push("/lobby/game");
          }}
          className="text-[14px] hover:cursor-pointer text-gray-500">
          Xem thêm
        </p>
      </div>
      <Slider
        className="mt-4"
        dots={true}
        infinite={true}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={3000}
        arrows={false}>
        {dataGameHot.map((item, index) => (
          <Link
            href={"/lobby/game"}
            className="cursor-pointer h-[249px] relative"
            key={index}>
            <img src={item.img} alt="" className="absolute bottom-0 left-0" />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
