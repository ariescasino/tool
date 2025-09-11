/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VipInforLayout from "../VipInforLayout";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Favorite({ isOpen, setIsOpen }: Props) {
  return (
    <div>
      <VipInforLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Yêu Thích">
        <div className="px-[15px]">
          <div className="my-[8px]">
            <div className="p-2 h-[500px] flex flex-col items-center py-7 bg-black">
              <Image
                loading="lazy"
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/f5fccbdbd67a139265b13e71ccfe3b4c.png"
                alt=""
                width={0}
                height={0}
                className="w-[70px] h-[70px]"
                sizes="100vw"
              />
              <h3 className="text-gray-400 text-xl">
                Hiện không có dữ liệu nào
              </h3>
              <div className="text-gray-400 text-xs">
                Mau chóng đi đăng ký trò chơi yêu thích của bạn nào !
              </div>
            </div>
          </div>
        </div>
      </VipInforLayout>
    </div>
  );
}
