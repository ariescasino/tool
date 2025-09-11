/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useUser } from "@/context/useUserContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import depositIcon from "@/../public/images/footer/deposits.svg";
import withdrawIcon from "@/../public/images/footer/withdraws.svg";
import { useWindowSize } from "react-use";
import { linkPromotion } from "@/constant";
import './footer.css'

export default function Footer() {
  // state
  const { user } = useUser();

  const [showNapRut, setShowNapRut] = useState(false);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(1)
  const checkPathname = !showNapRut ? pathname : false;

  const [showCSKH, setShowCSKH] = useState(false);

  const router = useRouter();

  const { width } = useWindowSize();

  const handleMenuClick = (id: any) => {
    if (id === 5) {
      setShowCSKH((prev) => !prev);
    } else {
      setShowCSKH(false);
    }
    setActiveIndex(id === activeIndex ? null : id);
  };
  const handleMenuLoginClick = (id: any) => {
    if (id === 3) {
      setShowNapRut((prev) => !prev);
    } else {
      setShowNapRut(false);
    }
    if (id === 5) {
      setShowCSKH((prev) => !prev);
    } else {
      setShowCSKH(false);
    }
    setActiveIndex(id === activeIndex ? null : id);
  };

  const menuFooter = [
    {
      id: 1,
      title: "Trang chủ",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/home.svg",
      href: "/",
      icon: 'home',
    },
    {
      id: 2,
      title: 'Cẩm nang',
      imageURL: 'https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/guide.svg',
      href: '/cam-nang',
      icon: 'guide',
    },
    {
      id: 3,
      title: "Ưu đãi",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/promotion.svg",
      href: "/promotion",
      icon: 'promotion',
    },
    {
      id: 4,
      title: "Tải App",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/download.png",
      href: "https://uuw7gzaenahhio0iyjjas5d9r3e8atlsvzbog9zqjyh6fagvvxpfmhh.789b35.com/",
      icon: 'app',
    },
    {
      id: 5,
      title: "CSKH",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/cskh.svg",
      icon: 'cskh',
    },
  ];
  const menuFooterLogin = [
    {
      id: 1,
      title: "Trang chủ",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/home.svg",
      href: "/",
      icon: 'home',
    },
    {
      id: 2,
      title: "Ưu đãi",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/promotion.svg",
      href: "/promotion",
      icon: 'promotion',
    },
    {
      id: 3,
      title: "Nạp-RÚT",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/TabBar_financial.svg",
      icon: 'naprut',
    },
    {
      id: 4,
      title: "Tài khoản",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/TabBar_financial.svg",
      href: "/mobile/member-center",
      icon: 'account',
    },
    {
      id: 5,
      title: "CSKH",
      imageURL: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/cskh.svg",
      icon: 'cskh',
    },
  ];
  const handleChangePage = (link: string) => {
    router.push(link);

    setShowNapRut(false);
  };

  if (
    pathname.startsWith("/dang-nhap") ||
    pathname.startsWith("/dang-ky") ||
    pathname.startsWith("/casino") ||
    pathname.startsWith("/lobby/navigation") ||
    pathname.startsWith("/games") ||
    pathname.startsWith("/cskh") ||
    pathname.startsWith("/cam-nang") ||
    pathname.startsWith("/transfer")
  ) {
    return null;
  }

  return (
    <footer className="font-roHe w-full text-white max-md:min-h-[60px]">
      <div className={`hidden md:flex ${styles.main} relative `}>
        <div className={`${styles["content"]} !bg-transparent`}>
          <div className={styles["footer-top"]}>
            <a
              target="_blank"
              className={styles.sign}
              href="https://9.789b47.com/"
            >
              <h2>Đại Sứ Thương Hiệu</h2>
              <div>
                <Image
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/2162e64cba49fd3336927757e6ebc07d.png"
                  width={62}
                  height={55}
                  alt=""
                />
                <p>
                  Luis Suarez
                  <br /> Năm 2022 - 2023
                </p>
              </div>
              <figure>
                <Image
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/c1fa14cc90b7f41191941bec1091f770.png"
                  width={120}
                  height={150}
                  alt=""
                />
              </figure>
            </a>
            <Link target="_blank" className={styles.info} href={""}>
              <Image
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/63efbc8fbfccc9d3becb8e9d407081c8.png"
                alt=""
                width={334}
                height={112}
                className="h-auto w-auto"
              />
            </Link>
            <ul className={styles.link1}>
              <li>
                <Link className="ng-scope" href="/rule/AboutUs">
                  Giới thiệu về 789BET
                </Link>
              </li>
              <li>
                <Link className="ng-scope" href="/rule/ResponsibleGambling">
                  Chơi có trách nhiệm
                </Link>
              </li>
              <li>
                <Link className="ng-scope" href="/rule">
                  Điều khoản và điều kiện
                </Link>
              </li>
            </ul>
            <ul className={styles.link2}>
              <li>
                <Link className="ng-scope" href="/rule/Disclaimer">
                  Miễn trách nhiệm
                </Link>
              </li>
              <li>
                <Link className="ng-scope" href="/rule/PrivacyPolicy">
                  Quyền riêng tư tại 789BET
                </Link>
              </li>
              <li>
                <Link className="ng-scope" href="/rule/FAQ">
                  Những câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <section className={styles["icons"]}>
            <i></i> <i></i> <i></i> <i></i> <i></i> <i></i> <i></i>
            <i></i> <i></i>
            <Link
              className={styles["tg"]}
              href={"https://t.me/CSKH789BET_robot"}
            ></Link>
            <Link className={styles["fb"]} href="/"></Link>
            <Link className={styles["yt"]} href="/"></Link>
          </section>

          <div className="flex justify-center mb-5">
            <Link href="/">
              Copyright © Link Mới {window.location.host}{" "}
              {window.location.host} {window.location.host}{" "}
              {window.location.host} | Trang chủ nhà cái uy tín 789BET, uy tín
              tạo thương hiệu Reserved
            </Link>
          </div>
        </div>

        <div className="absolute w-full h-full top-0 left-0 z-[-1] flex items-end bottom-0">
          {width > 768 ? (
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline
              className="w-full h-auto relative translate-x-[-50%] left-1/2 object-cover md:block hidden"
            >
              <source type="video/mp4" src="/images/footer/video.mp4" />
            </video>
          ) : (
            <img
              className="w-full h-auto relative translate-x-[-50%] left-1/2 object-cover md:hidden block"
              src="/images/footer/video-gif.gif"
            />
          )}
        </div>
      </div>
      <div
        className={`md:hidden bottom-0 left-0 z-[10000] box-border w-screen fixed ${styles.footerMobile}`}
      >
        <div className={styles.floatLink}>
          <Link href="/">
            <Image
              className="max-w-full h-auto"
              src="/images/footer/floatLink.gif"
              alt=""
              width={195}
              height={33}
              unoptimized
            />
          </Link>
        </div>
        <ul
          className={`flex  justify-between m-0 p-0 h-full ${styles.backgroundFooter}`}
          style={{
            height: "calc(4rem) / 3)",
          }}
        >
          {user ? (menuFooterLogin.map((item, index) => {
            const isActive = activeIndex === item.id;
            return (
              <li
                key={index}
                className={`relative flex flex-1 items-center justify-center bg-gradient-to-b uppercase ${isActive ? 'isActive' : ""
                  }`}
                onClick={() => handleMenuLoginClick(item.id)}

              >
                <a
                  className="relative text-center text-sm"
                  href={item?.href}
                >
                  <i className={`${item.icon} relative mx-auto icon`} />
                  <span className="text-[11px]">{item.title}</span>
                </a>
              </li>
            )

          })) : (
            menuFooter.map((item, index) => {
              const isActive = activeIndex === item.id;
              return (
                <li
                  key={index}
                  className={`relative flex flex-1 items-center justify-center bg-gradient-to-b uppercase ${isActive ? 'isActive' : ""
                    }`}
                  onClick={() => handleMenuClick(item.id)}

                >
                  <a
                    className="relative text-center text-sm"
                    href={item?.href}
                  >
                    <i className={`${item.icon} relative mx-auto icon`} />
                    <span className="text-[11px]">{item.title}</span>
                  </a>
                </li>
              )

            })
          )}


          {showCSKH && (
            <ul
              className={`${styles.subLink} ${!showCSKH ? styles.hide : styles.subOpen}`}
            >
              <li>
                <Link href={"https://t.me/CSKH789BET_robot"}>
                  <Image
                    className="w-[66px] h-[66px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/gopy.png"
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://t.me/CSKH789BET_robot"}>
                  <Image
                    className="w-[66px] h-[66px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daili.png"
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://t.me/CSKH789BET_robot"}>
                  <Image
                    className="w-[66px] h-[66px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/tintuc.png"
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://t.me/CSKH789BET_robot"}>
                  <Image
                    className="w-[66px] h-[66px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hotro.png"
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://t.me/CSKH789BET_robot"}>
                  <Image
                    className="w-[66px] h-[66px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/phone.png"
                    sizes="100vw"
                    alt=""
                    width={0}
                    height={0}
                    unoptimized
                  />
                </Link>
              </li>
            </ul>
          )}


          {showNapRut && (
            <div className={styles.suvFinancial}>
              <Link
                href={"/account/deposit"}
                className="w-[60px] h-full flex flex-col justify-center items-center gap-1"
                onClick={() => setShowNapRut(false)}
              >
                <Image
                  className="w-[30px] h-[16px]"
                  src={depositIcon}
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
                <div className="text-[14px]">Nạp tiền</div>
              </Link>

              <Link
                href={"/account/withdraw-application"}
                className="w-[60px] h-full flex flex-col justify-center items-center gap-1"
                onClick={() => setShowNapRut(false)}

              >
                <Image
                  className="w-[30px] h-[22px]"
                  src={withdrawIcon}
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                />
                <div className="text-[14px]">Rút tiền</div>
              </Link>
            </div>
          )}

        </ul>


      </div>
      <div className="fixed top-[57%] left-0 z-10 translate-y-1/2 md:block hidden">
        <Link href={linkPromotion}>
          <Image
            alt=""
            width={150}
            height={150}
            className="max-h-full max-w-full"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/promotion/lixi.gif"
            unoptimized
          />
        </Link>
      </div>
    </footer>
  );
}
