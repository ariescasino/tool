/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use-client";

import { useSearchParams } from "next/navigation";
import styles from "./FooterHomePage.module.css";
import stylesFooter from "@/components/Footer/Footer.module.css";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "react-use";

const listJiliCCgame = [
  {
    name: "JILI Đánh cá vui vẻ",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jl-dcvv.png",
    link: "",
  },
  {
    name: "JILI Đoạt bảo truyền kỳ",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dbtk.png",
    link: "",
  },
  {
    name: "JILI Phi Long Tàng Bảo",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/pltb.png",
    link: "",
  },
  {
    name: "JILI Nổ Cá Đến Rồi",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ncdr.png",
    link: "",
  },
  {
    name: "JILI Tiền Long Đánh Cá",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tldc.png",
    link: "",
  },
  {
    name: "JILI Jackpot Đánh Cá",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jdc.png",
    link: "",
  },
  {
    name: "JILI Chuyên Gia Săn Rồng",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/cgsr.png",
    link: "",
  },
  {
    name: "JILI Vua đánh cá",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/vdc.png",
    link: "",
  },
  {
    name: "JILI Dàn sao đánh cá",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dsdc.png",
    link: "",
  },
  {
    name: "JILI Nhà tư bản khủng",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ntbk.png",
    link: "",
  },
  {
    name: "JILI Jackpot Vua Đại Dương",
    logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jvdd.png",
    link: "",
  },
];

export default function FooterHomePage() {
  const searchParams = useSearchParams();
  const kind = searchParams.get("kind");
  const { width } = useWindowSize();
  return (
    <div className={`block md:hidden relative`}>
      {!kind && (
        <div className={styles["app-bg"]}>
          <Image
            alt=""
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/taiApp_m.png"
            width={599}
            height={880}
            className="h-auto max-w-[100%]"
          />

          <div className={styles["app"]}>
            <Link
              target="_blank"
              rel="nofollow noopener"
              className={`${styles["app-content"]} ${styles["relative"]} ${styles["flex"]} ${styles["flex-col"]} ${styles["items-start"]} ${styles["justify-center"]}`}
              href="https://ios-app.789b35.com/"
            ></Link>
          </div>
          {/* <div className={styles["info"]}>
            <section className={styles["sign"]}>
              <div>
                <h2>Đại Sứ Thương Hiệu</h2>
                <p>Luis Suarez</p>
                <p>Năm 2022 - 2023</p>
              </div>
              <div>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/signature_m.png" />
                </figure>
              </div>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://9.789b40.com/"
              ></Link>
            </section>
            <section className={styles["sign-title"]}>
              <h2>
                Đối Tác Chính Thức <br /> Năm 2023 - 2025
              </h2>
            </section>
            <section className={styles["sponsor"]}>
              <div>
                <p>Argentina AFA &amp; OKVIP</p>
              </div>
              <div className={`inline-flex items-center`}>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/clb1_m.png" />
                </figure>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/okvip.png" />
                </figure>
              </div>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://678302.com/okvip1"
                className="ng-star-inserted"
              ></Link>
            </section>
            <section className={styles["sponsor"]}>
              <div>
                <p>Villarreal CF &amp; OKVIP</p>
              </div>
              <div className={`inline-flex items-center`}>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/clb2_m.png" />
                </figure>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/okvip.png" />
                </figure>
              </div>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://678302.com/okvip1"
                className="ng-star-inserted"
              ></Link>
            </section>
            <section className={styles["payment"]}>
              <div>
                <p>GIẤY PHÉP</p>
                <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/giayphep_m.png" />
              </div>
              <div>
                <p>BẢO VỆ</p>
                <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/baove_m.png" />
              </div>
            </section>
            <section className={styles["site"]}>
              <div>
                <p>THEO DÕI CHÚNG TÔI</p>
                <Link
                  target="_blank"
                  rel="nofollow noopener"
                  href="https://www.facebook.com/789betokvip1/"
                >
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/fb_m.png" />
                </Link>
                <Link
                  target="_blank"
                  rel="nofollow noopener"
                  href="https://m.youtube.com/@789betgiaitrivip"
                >
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/ytb_m.png" />
                </Link>
                <Link
                  target="_blank"
                  rel="nofollow noopener"
                  href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
                >
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/tele_m.png" />
                </Link>
              </div>
              <div>
                <p>CHƠI CÓ TRÁCH NHIỆM</p>
                <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/choitrachnhiem_m.png" />
              </div>
            </section>
          </div> */}
          <div className={`${styles["info"]} relative`}>
            <div className="absolute w-full h-full top-0 left-0   flex items-end bottom-0">
              {width > 768 ? <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline
                className="w-full h-full relative translate-x-[-50%] left-1/2 object-cover"
              >
                <source type="video/mp4" src="/images/footer/video-mb.mp4" />
              </video> :
                <img
                  className="w-full h-full relative translate-x-[-50%] left-1/2 object-cover"
                  src="/images/footer/video-gif.gif"
                />}
            </div>
            <section className={styles["sign"]}>
              <div>
                <h2>Đại Sứ Thương Hiệu</h2>
                <p>Luis Suarez</p>
                <p>Năm 2022 - 2023</p>
              </div>
              <div>
                <figure>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/footer/footer_luis.png" />
                </figure>
              </div>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://9.789b47.com/"
              />
            </section>
            <section>
              <Link
                target="_blank"
                rel="nofollow noopener"
                className={styles["about"]}
                href="https://cskh99.com/hd-site-tong-789"
              >
                <ul>
                  <li>Giới thiệu về 789BET</li>
                  <li>Chơi Có Trách nhiệm</li>
                  <li>Điều khoản và điều kiện</li>
                </ul>
                <ul>
                  <li>Miễn trách Nhiệm</li>
                  <li>Quyền riêng tư tại 789BET</li>
                  <li>những Câu Hỏi Thường Gặp</li>
                </ul>
              </Link>
            </section>
            <section className={styles["payment"]}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </section>
            <section className={styles["social"]}>
              <i />
              <i />
              <Link href="https://t.me/CSKH789BET_robot">
                <Image
                  src="/images/footer/icon09.d190b117a0c9c2dc.png"
                  width={32}
                  height={33}
                  alt=""
                />
              </Link>
              <Link href="https://t.me/CSKH789BET_robot">
                <Image
                  src="/images/footer/icon10.893bca8836a99907.png"
                  width={32}
                  height={33}
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://www.facebook.com/789bettrangchuchinh/"
              >
                <Image
                  src="/images/footer/fb-mb.png"
                  width={32}
                  height={33}
                  alt=""
                />
              </Link>
              <i />
            </section>
            <section className={styles["site"]}>
              <i className={styles["icon07"]} />
              <i className={styles["icon08"]} />
              <i className={styles["icon09"]} />
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
              >
                <i className={styles["icon10"]} />
              </Link>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://www.facebook.com/789bettrangchuchinh/"
              >
                <i className={styles["icon11"]} />
              </Link>
              <Link
                target="_blank"
                rel="nofollow noopener"
                href="https://m.youtube.com/@789betgiaitrivip"
              >
                <i className={styles["icon12"]} />
              </Link>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
