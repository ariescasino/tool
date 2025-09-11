"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import AccountInfoNav from "@/components/AccountInfoNav";
import CheckUserInAccPage from "@/components/CheckUserInAccPage";

import MarqueeDesktop from "@/components/MarqueeDesktop";
import { useMenu } from "@/context/useMenuContext";

import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMenuOpen } = useMenu();

  return (
    <CheckUserInAccPage>
      <div className="w-full flex-col items-center justify-center hidden md:flex">
        <div className="hidden md:block w-full h-auto ">
          <div className="h-[247px]">
            <img
              loading="lazy"
              style={{
                height: "300px",
                objectFit: "none",
                width: "100%",
              }}
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/banner.png"
              alt=""
            />
          </div>
        </div>
        <MarqueeDesktop />

        <div className="w-full flex-col items-center justify-center hidden md:flex layoutAccount">
          <div className="container flex gap-[30px] p-0  mt-[45px] max-w-[1202px]">
            <div className={`w-[327px] ${isMenuOpen ? "block" : "hidden"}`}>
              <AccountInfoNav />
            </div>
            <div className={isMenuOpen ? "w-[calc(100%-330px)] " : "w-full"}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full mb:min-h-screen max-mb:h-[90vh] max-mb:overflow-y-auto">
        <div className="relative h-6 pr-2 pl-12 text-xs leading-6 w-full hidden md:block">
          <div className="absolute top-0 left-2 w-6">
            <FontAwesomeIcon
              icon={faVolumeHigh}
              className="fa-solid fa-volume-high text-xl"
              color="#fff"
            />
          </div>
          <Marquee
            className="w-screen"
            style={{
              maxWidth: "100vw",
            }}>
            <span className="tickers">
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                ✅Hãy trải nghiệm sự khác biệt tại 789BET, nơi cung cấp dịch vụ
                nạp rút tiền nhanh chóng và ổn định nhất thị trường. Bạn gặp khó
                khăn khi tham gia nạp rút ở các nhà cái khác? Đừng lo lắng nữa,
                789BET cam kết mang đến trải nghiệm tuyệt vời nhất với tốc độ xử
                lý nhanh chóng và ổn định nhất thị trường. Hãy đến với 789BET
                ngay hôm nay và đồng hành cùng Euro 2024 cùng 789BET!
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                Truy cập vào 789BET không lo bị chặn:
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                Bước 1: Tải 1.1.1.1: Faster Internet tại App Store hoặc 1.1.1.1
                + WARP: Safer Internet tại CH Play.
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                Bước 2: Tải ứng dụng về điện thoại được xếp hạng đầu tiên.
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                Bước 3: Cài đặt và khởi động ứng dụng.
              </span>
              <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-white">
                Bước 4: Bật công tắc để kết nối thành công. Vào lại website
                789BET.
              </span>
            </span>
          </Marquee>
        </div>
        <div className="relative w-screen h-auto min-h-screen">{children}</div>
      </div>
    </CheckUserInAccPage>
  );
}
