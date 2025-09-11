/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function BoardGameItem({ img, title, slider }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`cursor-pointer pt-[9px] pb-[4px] h-[240px] w-[158px] rounded-lg border-solid border-[1px] border-gray-500 flex flex-col items-center gap-2 ${
        isOpen ? "bg-[#ffd050] border-[#ffd050]" : ""
      }  transition duration-300 relative`}
    >
      {isOpen && (
        <div className="absolute top-1/4 w-[90px] text-center px-4 py-1 text-black bg-[#ffd050] z-50 rounded-md">
          Play
        </div>
      )}
      <img
        loading="lazy"
        className={`${isOpen && "opacity-70 bg-black"} transition duration-300 `}
        height={140}
        width={140}
        src={`https://gwfd.qatgwawm.net/system-requirement/${img}`}
        alt=""
      />
      <div className="w-full grid grid-cols-12 px-2">
        <div className={`col-span-10 text-black ${isOpen && "text-white"} `}>
          {title}
        </div>
        <div className="col-span-2">
          <svg
            className={`w-[20px] h-[20px] ${
              isOpen && "fill-red-500 stroke-red-500"
            } transition duration-300 mt-[4px]`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-[20px] h-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </svg>
        </div>
      </div>
      <div
        className={`flex justify-center text-gray-400 text-xs ${
          isOpen && "text-white"
        } transition duration-300`}
      >
        TP
      </div>
    </div>
  );
}
