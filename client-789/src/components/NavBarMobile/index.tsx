/* eslint-disable @next/next/no-img-element */
"use client";

import { linkPromotion, linkTeleGram } from "@/constant";
import { useUser } from "@/context/useUserContext";
import convertTimeToTimezone from "@/utils/convertTimeToTimezone";
import {
  faAngleRight,
  faAward,
  faCalendarPlus,
  faCloudArrowDown,
  faDesktop,
  faEnvelopeOpenText,
  faHandshake,
  faHistory,
  faKey,
  faLocationArrow,
  faRobot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavBarMobile = ({ isOpen, setIsOpen }: Props) => {
  // state
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDangKi, setIsOpenDangKi] = useState(false);
  const [key, setKey] = useState(0);
  const [dateNow, setDateNow] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const gmtMinus4 = convertTimeToTimezone(currentTime, -4);
  const gmtPlus7 = convertTimeToTimezone(currentTime, 7);

  // connext
  const { user, logoutUser } = useUser();

  const handleDangKi = () => {
    setIsOpenDangKi(true);
  };

  const formatTime = (time: Date, offset: number): string => {
    const yyyy = time.getFullYear();
    const mm = (time.getMonth() + 1).toString().padStart(2, "0");
    const dd = time.getDate().toString().padStart(2, "0");
    const hh = time.getHours().toString().padStart(2, "0");
    const MM = time.getMinutes().toString().padStart(2, "0");
    const ss = time.getSeconds().toString().padStart(2, "0");

    // Tạo chuỗi múi giờ
    const tz = `GMT${offset >= 0 ? "+" : ""}${offset}`;

    return `${dd}/${mm}/${yyyy} ${hh}:${MM}:${ss} (${tz})`;
  };

  const menuButtons = [
    {
      label: "Đăng ký",
      href: "/mobile/register",
    },
    {
      label: "Đăng nhập",
      href: "/mobile/login",
    },
  ];

  const menuItems = [
    {
      href: "/",
      label: "Nhanh tay tải app",
      icon: (
        <FontAwesomeIcon
          icon={faCloudArrowDown}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkPromotion}`,
      label: "nhận thưởng code ",
      icon: (
        <FontAwesomeIcon
          icon={faCalendarPlus}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkTeleGram}`,
      label: "Hướng dẫn sử dụng",
      icon: (
        <FontAwesomeIcon
          icon={faRobot}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkPromotion}`,
      label: "Góp ý nhận thưởng",
      icon: (
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkTeleGram}`,
      label: "Kênh telegram",
      icon: (
        <FontAwesomeIcon
          icon={faLocationArrow}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkTeleGram}`,
      label: "Chính sách đại lý",
      icon: (
        <FontAwesomeIcon
          icon={faHandshake}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    // {
    //   href: "/",
    //   label: "Kho phim 18+",
    //   icon: (
    //     <FontAwesomeIcon
    //       icon={faJar}
    //       className="text-xl"
    //       style={{
    //         color: "#f87d02",
    //       }}
    //     />
    //   ),
    // },
    {
      href: "/introduce",
      label: "Giới thiệu 789bet",
      icon: (
        <FontAwesomeIcon
          icon={faAward}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: "/",
      label: "Giao diện máy tính",
      icon: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
  ];

  // user logiN
  const menuItemsLogined = [
    {
      href: "/",
      label: "Nhanh tay tải app",
      icon: (
        <FontAwesomeIcon
          icon={faCloudArrowDown}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkTeleGram}`,
      label: "Hướng dẫn sử dụng",
      icon: (
        <FontAwesomeIcon
          icon={faRobot}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    // {
    //   href: "/",
    //   label: "Hòm thư",
    //   icon: (
    //     <FontAwesomeIcon
    //       icon={faEnvelope}
    //       className="text-xl"
    //       style={{
    //         color: "#f87d02",
    //       }}
    //     />
    //   ),
    // },

    {
      href: `${linkPromotion}`,
      label: "nhận thưởng code ",
      icon: (
        <FontAwesomeIcon
          icon={faCalendarPlus}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkPromotion}`,
      label: "Góp ý nhận thưởng",
      icon: (
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: `${linkTeleGram}`,
      label: "Chính sách đại lý",
      icon: (
        <FontAwesomeIcon
          icon={faHandshake}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: "/account/bet-record",
      label: "Lịch sử đặt cược",
      icon: (
        <FontAwesomeIcon
          icon={faHistory}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: "/account/change-password",
      label: "Đổi mật khẩu",
      icon: (
        <FontAwesomeIcon
          icon={faKey}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    {
      href: "/",
      label: "Giao diện máy tính",
      icon: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    // {
    //   href: "/",
    //   label: "Kho phim 18+",
    //   icon: (
    //     <FontAwesomeIcon
    //       icon={faJar}
    //       className="text-xl"
    //       style={{
    //         color: "#f87d02",
    //       }}
    //     />
    //   ),
    // },
    {
      href: "/introduce",
      label: "Giới thiệu 789bet",
      icon: (
        <FontAwesomeIcon
          icon={faAward}
          className="text-xl"
          style={{
            color: "#f87d02",
          }}
        />
      ),
    },
    // {
    //   href: "/",
    //   label: "Đăng xuất",
    //   icon: (
    //     <FontAwesomeIcon
    //       icon={faAward}
    //       className="text-xl"
    //       style={{
    //         color: "#f87d02",
    //       }}
    //     />
    //   ),
    // },
  ];

  return (
    <div
      className={`${isOpen ? "z-[1000000] fixed" : "hidden"}  top-0 left-0 h-full w-full font-roHe`}>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed top-0 left-0 z-20 block h-screen w-screen bg-black/50 transition-all"
      />
      <div className="fixed top-0 z-30 h-screen w-full mx-auto bg-[#000000e6] transition-all left-0 overflow-y-scroll">
        <div className="relative flex items-center justify-center">
          <span
            onClick={() => setIsOpen(false)}
            className="absolute right-[15px] top-[15px]">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl font-normal"
              style={{
                color: "#f87d02",
              }}
            />
          </span>
          {/* {user && (
            <div className="w-auto font-medium mb-3 text-white whitespace-nowrap">
              Xin Chào : {user?.username}
            </div>
          )} */}
          {/**/}
        </div>
        <div className="pl-[18px] flex flex-col justify-evenly h-16">
          <p className="text-white text-xs">{formatTime(gmtMinus4, -4)}</p>
          <p className="text-white text-xs">{formatTime(gmtPlus7, 7)}</p>
        </div>
        <Image
          className="min-h-[214px] w-full ml-[5px]"
          src="/images/mobile_logo_game/menu_logo.png"
          width={548}
          height={214}
          alt=""
        />
        <div
          className={`block pb-10 mobile-nav-custom w-[90%] mx-auto mb-[20px] 
          overflow-y-auto rounded-2xl`}>
          <div
            className="flex items-center justify-evenly gap-4 mt-4
            ">
            {!user &&
              menuButtons.map((item, index) => (
                <Link
                  href={item.href}
                  className="border border-[#fc8f00] px-4 py-1 rounded-[28px] h-10 text-[#fc8f00] text-[17px]
               leading-8 w-[40%] text-center uppercase cursor-pointer
               "
                  onClick={() => setIsOpen(false)}
                  key={index}>
                  {item.label}
                </Link>
              ))}
          </div>
          <ul
            className="mt-2 mx-auto"
            style={{
              color: "rgb(123 191 212",
            }}>
            {!user ? (
              menuItems.map((item, index) => (
                <li
                  className="h-10 text-base  flex items-center justify-start mx-4
                  first:bg-[#404040] first:border-b-[1px] border-[#ff9800] rounded-md py-1
                  "
                  key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="h-10 text-base  flex items-center justify-between w-full mr-4 px-1">
                    <div className="flex justify-center">
                      <div className="w-9 flex justify-center">
                        {item?.icon}
                      </div>
                      <p className=" text-white uppercase">{item?.label}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-sm font-semibold"
                        style={{
                          color: "#ffffff",
                        }}
                      />
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <>
                {menuItemsLogined.map((item, index) => (
                  <li
                    className="h-10 text-base  flex items-center justify-start
                    mx-4
                  first:bg-[#404040] first:border-b-[1px] border-[#ff9800] rounded-md py-1
                    "
                    key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="h-10  flex items-center justify-between w-full mr-4
                      px-1
                      ">
                      <div className="flex justify-center">
                        <div className="w-9 flex justify-center">
                          {item?.icon}
                        </div>
                        <p className=" text-white uppercase">{item?.label}</p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-sm font-semibold"
                          style={{
                            color: "#ffffff",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
                {user && (
                  <li
                    className="h-10 text-base  flex items-center justify-start
                  mx-4
                  first:bg-[#404040] first:border-b-[1px] border-[#ff9800] rounded-md py-1
                  ">
                    <div
                      onClick={() => {
                        router.push("/logout");
                        setIsOpen(false);
                      }}
                      className=" h-10  flex items-center justify-between w-full mr-4 px-1">
                      <div className="flex justify-center">
                        <div className="w-9 flex justify-center">
                          <svg
                            className="w-[18px]"
                            fill="#f87d02"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#f87d02">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                            </g>
                          </svg>
                        </div>
                        <p className="text-white uppercase">Đăng xuất</p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-base"
                          style={{
                            color: "#ffffff",
                          }}
                        />
                      </div>
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
