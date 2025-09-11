/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "@/styles/daily.module.css";
import "@/styles/daily.css";

export default function ThongTin() {
  return (
    <>
      <div className="w-full text-[18px] text-white mb-[36px] leading-10">
        Nếu bạn gặp bất cứ vấn đề gì khi đăng ký Đại Lý hoặc cần giải đáp bất kỳ
        thông tin nào trên website của 789BET. Hãy liên hệ trực tiếp với dịch vụ
        Chăm sóc Đại Lý, chúng tôi sẽ ngay lập tức giải quyết vấn đề giúp bạn.
      </div>
      <div className="flex justify-center items-center gap-[14.25px]">
        <div className="mt-5 bg-gradient-to-t from-[#000000] to-[#666666] w-[390px] h-[252px] rounded-[40px] border-solid-[#243c5a] flex flex-col justify-center items-center border-2 border-[#F9A631]">
          <div className="w-[123px] h-[124px] rounded-full bg-[#ffffff] flex justify-center items-center mb-[11px]">
            <img
              alt="Cham soc khach hang"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              data-nimg="1"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/cskh.webp"
            />
          </div>
          <a
            target="_blank"
            className="text-white text-[28px] uppercase mb-[6px]"
            href="https://t.me/CSKHBET789_robot">
            CHĂM SÓC ĐẠI LÝ
          </a>
          <a
            target="_blank"
            className="btn w-[311px] h-[43px] text-white px-2 text-[24px] bg-gradient-to-t from-[#000000] to-[#666666] rounded-[40px] border-2 border-[#F9A631] mb-[6px] flex items-center"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            href="https://t.me/CSKHBET789_robot">
            Telegram: @CSKHBET789_robot
          </a>
        </div>
        <div className=" mt-5 bg-gradient-to-t from-[#000000] to-[#666666] w-[390px] h-[252px] rounded-[40px] border-solid-[#243c5a] flex flex-col justify-center items-center border-2 border-[#F9A631]">
          <div className="w-[123px] h-[124px] rounded-full bg-[#ffffff] flex justify-center items-center mb-[11px]">
            <img
              alt="Cham soc khach hang"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              data-nimg="1"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/dienthoai.webp"
            />
          </div>
          <p className="text-white text-[28px] uppercase mb-[6px]">
            điện thoại
          </p>
          <button className="btn w-[311px] h-[43px] text-white text-[24px] uppercase  bg-gradient-to-t from-[#000000] to-[#666666] rounded-[40px] border-2 border-[#F9A631] mb-[6px]">
            +84 849710888
          </button>
        </div>
        <div className="mt-5 bg-gradient-to-t from-[#000000] to-[#666666] w-[390px] h-[252px] rounded-[40px] border-solid-[#243c5a] flex flex-col justify-center items-center border-2 border-[#F9A631]">
          <div className="w-[123px] h-[124px] rounded-full bg-[#ffffff] flex justify-center items-center mb-[11px]">
            <img
              alt="Cham soc khach hang"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              data-nimg="1"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/gmail.webp"
            />
          </div>
          <p className="text-white text-[28px] uppercase mb-[6px]">email</p>
          <button className="btn w-[311px] h-[43px] text-white text-[24px] bg-gradient-to-t from-[#000000] to-[#666666] rounded-[40px] border-2 border-[#F9A631] mb-[6px]">
            admin@789bet.com
          </button>
        </div>
      </div>
    </>
  );
}
