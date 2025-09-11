/* eslint-disable @next/next/no-img-element */
"use client";

import "@/styles/daily.css";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function LayoutDaiLy({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = dayjs().utc().utcOffset(-240).subtract(1, "hour");
      const formattedTime = now
        .format("hh:mm:ss A [GMT]Z")
        .replace(/(:00)$/, "");
      setTime(formattedTime);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const links = [
    { href: "/daily/gioi_thieu", label: "GIỚI THIỆU" },
    { href: "/daily/vechungtoi", label: "VỀ CHÚNG TÔI" },
    { href: "/daily/chinh_sach", label: "HƯỚNG DẪN ĐĂNG KÝ" },
    { href: "/daily/cach_tinh_hh", label: "CHÍNH SÁCH HOA HỒNG" },
    { href: "/daily/thongtin", label: "THÔNG TIN" },
  ];
  const isActive = (pathName: any, href: any) => pathName.includes(href);

  return (
    <div className="main">
      <div className="w-[1200px] mx-auto">
        <div className="w-full h-28 bg-[#171717]">
          <div className="container lg:mx-auto w-[1200px]">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="flex justify-center items-center pr-6">
                  <Link
                    href='/'
                    className='pr-[17px] flex items-center justify-between gap-2 text-base text-[#fc8f00] font-bold'
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes='100vw'
                      alt=''
                      loading='lazy'
                      className='h-full w-full'
                      src='/images/logo.png'
                    />
                  </Link>
                </div>
              </div>
              <div className="pt-3.5">
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center uppercase after:content-['|'] text-white after:pl-6">
                    {time}
                  </div>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center pl-[1.5rem]"
                    href="/"
                  >
                    <span
                      role="img"
                      aria-label="tablet"
                      className="anticon anticon-tablet"
                    >
                      <Image src="/phone.png" alt="" width={14} height={16} />
                    </span>
                    <h3 className="text-xl text-white font-light pl-1.5">
                      Tải App
                    </h3>
                  </Link>
                  <div className="flex pb-4.5 pl-[1.5rem]">
                    <h3 className="text-xl text-white font-light pr-1.5">
                      Tiếng Việt
                    </h3>
                    <div className="flex justify-center items-center w-[26.67px] h-[26.67px] bg-[#333333] rounded-full">
                      <Image
                        alt="Viet Nam"
                        loading="lazy"
                        width="17"
                        height="20"
                        decoding="async"
                        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-cac-nuoc/logo-vn.png"
                      />
                    </div>
                    <select className="text-white bg-neutral-900 rounded-none pl-2.5"></select>
                  </div>
                </div>
                <div className="flex gap-[17px] pt-5 pb-4 justify-center items-center">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[189px] h-[34px] bg-[#FF5F0C] flex justify-center items-center text-xl text-white font-black uppercase rounded-md"
                    href="/?login=true"
                  >
                    Đăng Nhập
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[189px] h-[34px] bg-[#F9A631] flex justify-center items-center text-xl text-white font-black uppercase rounded-md"
                    href="/?register=true"
                  >
                    Đăng Ký
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:mx-auto w-[1200px]">
        <div className="w-full p-0">
          <Image
            alt="baner 789bet"
            loading="lazy"
            width="1200"
            height="421"
            decoding="async"
            style={{ color: "transparent" }}
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/banner.webp"
          />
        </div>
      </div>
      <div className="container lg:mx-auto w-[1200px] mt-1.5">
        <div className="w-full p-0  h-14  flex justify-between items-center mt-0.5 font-bold gap-[3px]">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`items-center bg-[#1A1919] flex justify-center text-white hover:bg-gradient-to-r from-[#F9A631] to-[#FF5F0C] w-[245px] h-[58px] ${isActive(pathName, link.href) &&
                "bg-gradient-to-r from-[#F9A631] to-[#FF5F0C]"
                }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="font-['Roboto']">
        <div className="hoahong container mx-auto w-[1200]">
          <Link href="/">
            <div className="flex justify-center items-center">
              <div className="trangchinhthuc">
                <h1 className="title-real nhapnhay">
                  TRANG CHÍNH THỨC CỦA 789BET
                </h1>
              </div>
            </div>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
