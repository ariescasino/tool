/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LiveClock from "../LiveClock";
import Navbar from "../Navbar";
import ModalDangKi from "../ModalDangKi";
import { useCallback, useEffect, useState } from "react";
import ModalDangNhap from "../ModalDangNhap";
import { SyncOutlined } from "@ant-design/icons";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronUp,
  faSignOutAlt,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@/context/useUserContext";
import NavBarMobile from "../NavBarMobile";
import { fNumber } from "@/utils/format-number";
import styles from "./header.module.css";
import ModalTrail from "../ModalTrail";
import Marquee from "react-fast-marquee";
import { subText } from "@/utils/check";
import NewNotificationModal from "../NewNotificationModal";
import { useEffectOnce, useWindowSize } from "react-use";
import dayjs from "dayjs";
import ModalNotification from "../ModalNotification";
import ModalDesktopWelcome from "../ModalDesktopWelcome";
import ModalRegisterSuccess from "../ModalRegisterSuccess";
import Image from "next/image";
import ModalLoginV1 from "../ModalDangNhap/MoalLoginV1";
import ModalRegisterV1 from "../ModalDangKi/ModalRegisterV1";
import { getTokenFromLocalStorage } from "@/lib/storage/tokenStorage";
import { useGeBalance } from "@/hooks/useAuthService";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    user,
    logoutUser,
    refreshBalance,
  } = useUser();

  const searchParams = useSearchParams();
  const isLogin = searchParams.get("login");
  const isRegister = searchParams.get("register");
  const isTrail = searchParams.get("trail");

  // state
  const [isOpen, setIsOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [isOpenDangKi, setIsOpenDangKi] = useState(false);
  const [isOpenDangNhap, setIsOpenDangNhap] = useState(false);
  const [isOpenTrail, setIsOpenTrail] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpenNofi, setIsOpenNofi] = useState(true);
  const [visibleWelcome, setVisibleWelcome] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [openModalNoti, setOpenModalNoti] = useState(false);
  const { dataBalance, refetch, isFetching: fetchingBalance } = useGeBalance()

  const { width } = useWindowSize();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (isLogin) {
      setIsOpenDangNhap(true);
    }
    if (isRegister) {
      setIsOpenDangKi(true);
    }
    if (isTrail) {
      setIsOpenTrail(true);
    }
  }, [isLogin, isRegister, isTrail]);
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "token") {
        // Reload trang nếu `isLoggedIn` được set thành true ở tab khác
        window.location.reload();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Dọn dẹp event listener khi component bị unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleDangNhap = () => {
    setIsOpenDangKi(false);
    setIsOpenDangNhap(true);
  };

  const handleDangKi = () => {
    setIsOpenDangKi(true);
    setIsOpenDangNhap(false);
  };

  const isShowNews =
    typeof window !== undefined
      ? localStorage.getItem("isShowNews")
      : undefined;

  useEffectOnce(() => {
    if (isShowNews === null) {
      const showLocal = {
        showToday: true,
        time: dayjs().format("DD/MM/YYYY"),
      };
      localStorage.setItem("isShowNews", JSON.stringify(showLocal));
      setVisible(true);
    }

    if (isShowNews) {
      const today = dayjs();
      const dataShow = JSON.parse(isShowNews);
      const dateToCompare = dayjs(dataShow?.time, "DD/MM/YYYY");
      const isBefore = dateToCompare.isBefore(today);
      const isAfter = dateToCompare.isAfter(today);

      if (dataShow?.showToday) {
        const showLocal = {
          showToday: false,
          time: dayjs().format("DD/MM/YYYY"),
        };
        localStorage.setItem("isShowNews", JSON.stringify(showLocal));
        setVisible(true);
      } else if ((dataShow?.showToday === false && isBefore) || isAfter) {
        const showLocal = {
          showToday: true,
          time: dayjs().format("DD/MM/YYYY"),
        };
        localStorage.setItem("isShowNews", JSON.stringify(showLocal));
        setVisible(true);
      }
    }
  });

  // useEffect(() => {
  //   const handleRefreshBalance = async () => {
  //     const token = await getTokenFromLocalStorage();
  //     if (user && token) {
  //       setTimeout(() => {
  //         refreshBalance();
  //       }, 10000);
  //     }
  //   };

  //   handleRefreshBalance();
  // }, [user]);

  const EmtyUser = () => {
    if (user) {
      return (
        <div className="flex flex-col gap-1  font-roHe">
          <div className="flex gap-2 items-center justify-end">
            <div className="flex flex-col items-start mr-2">
              <div className="flex gap-2 justify-center items-center pb-[2px]">
                <div className="w-auto whitespace-nowrap font-sansif text-[15px] text-white">
                  Tài khoản : {subText(user?.username, 8)}
                </div>
                <Link href={"/account/site-mail"}>
                  <img
                    loading="lazy"
                    className="w-[24px] h-[24px] mt-[2px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/43dd02a4824c6ceb7fec4f6ff418c054.png"
                    alt=""
                  />
                </Link>
              </div>

              <div className="flex gap-1 justify-center items-center text-[15px] text-white pb-[2px]">
                Ví tài khoản :
                <span className="text-[#ff9800]">{fNumber(dataBalance)}</span>
                <FontAwesomeIcon
                  onClick={() => refetch()}
                  className={fetchingBalance ? "animate-spin" : "cursor-pointer"}
                  icon={faSync}
                  color="#ff9800"
                  fontSize={12}
                />
              </div>
            </div>
            <div
              className={styles.swicthPanel}
              onClick={() => setIsOpen(!isOpen)}>
              THÔNG TIN
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`fas fa-chevron-up transition transform  duration-500  ${isOpen ? "rotate-180" : ""
                  }`}
                style={{ color: "white", fontSize: "10px" }}
              />
              {isOpen && (
                <div className={styles.listOptions}>
                  <div className={styles.option}>
                    <Link
                      href="/account/bet-record"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Lịch sử đặt cược
                    </Link>
                  </div>
                  <div className={styles.option}>
                    <Link
                      href="/account/deposit"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Nạp tiền
                    </Link>
                  </div>
                  <div className={styles.option}>
                    <Link
                      href="/account/withdraw-application"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Rút tiền
                    </Link>
                  </div>
                  <div className={styles.option}>
                    <Link
                      href="/account/transaction"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Chi tiết giao dịch
                    </Link>
                  </div>
                  <div className={styles.option}>
                    <Link
                      href="/account/member-center/change-money-password"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Đổi mật khẩu rút tiền
                    </Link>
                  </div>
                  <div className={styles.option}>
                    <Link
                      href="/account/member-center"
                      className="px-3 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal">
                      <span className="absolute left-0 top-1/2 transform bg-black -translate-y-1/2 w-1 h-1 rounded-full" />
                      Trung tâm hội viên
                    </Link>
                  </div>

                  <div className=" w-56 py-2 pl-4">
                    <Link
                      href="/logout"
                      className="px-0 py-[2px] text-[#2a225b] hover:text-[#ff5d08] flex gap-2 items-center relative text-xs font-normal cursor-pointer">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="fas fa-sign-out-alt"
                        style={{ fontSize: "16px" }}
                      />
                      Đăng xuất
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="flex justify-center items-center gap-[4px] cursor-pointer relative"
              onClick={() => setOpenLang(!openLang)}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/images/logo-cac-nuoc/logo-vn.png"
                alt=""
                className="w-[41px] h-[41px]"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="w-[11px] h-[6px]"
                src="/images/logo-cac-nuoc/iconDown.png"
                alt=""
              />

              <div
                className={`${openLang ? "block" : "hidden"} absolute top-[100%] left-[-13px] mt-2 border border-solid border-[#fc8f00] rounded-[10px] overflow-hidden p-2 bg-[#1b1b1b]`}>
                <div className="w-[230px] mb-6">
                  <Link href="/" className="flex justify-start">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[41px] h-[41px]"
                      src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-cac-nuoc/logo-th.png"
                      alt=""
                    />
                    <div className="h-[41px] w-[1px] bg-[#fd8f00] mx-2" />
                    <span className="text-sm text-[#fd8f00]">
                      ประเทศไทย
                      <br />
                      THAILAND
                    </span>
                  </Link>
                </div>
                <div className="w-[230px] ">
                  <Link href="/" className="flex justify-start">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[41px] h-[41px]"
                      src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-cac-nuoc/logo-korean.png"
                      alt=""
                    />
                    <div className="h-[41px] w-[1px] bg-[#fd8f00] mx-2" />
                    <span className="text-sm text-[#fd8f00]">
                      한국
                      <br />
                      KOREA
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 justify-end items-center">
            <Link
              className=" px-[5px] text-[15px] leading-[18px] text-[#c8c8c8] border-r border-solid border-[#c8c8c8] hover:text-[#fd8f00]"
              href="/account/deposit">
              Nạp Tiền
            </Link>
            <Link
              className=" px-[5px] text-[15px] leading-[18px] text-[#c8c8c8] border-r border-solid border-[#c8c8c8]  hover:text-[#fd8f00]"
              href="/account/withdraw-application">
              Rút Tiền
            </Link>
            <Link
              className=" px-[5px] text-[15px] leading-[18px] text-[#c8c8c8] border-r border-solid border-[#c8c8c8]  hover:text-[#fd8f00]"
              href="/account/bet-record">
              Lịch Sử Đặt Cược
            </Link>
            <Link
              className={` px-[5px] text-[15px] leading-[18px] text-[#c8c8c8] ${pathname.startsWith("/vip-details") ? "!text-[#fd8f00]" : "#c8c8c8"} hover:text-[#fd8f00]`}
              href="/account/vip">
              Chế Độ VIP
            </Link>
            <LiveClock color="white" />
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-1 items-end">
        <div className="flex gap-[6px]">
          <div
            onClick={() => {
              setIsOpenDangNhap(true);
              router.push(pathname + "?" + createQueryString("login", "true"));
            }}
            className={`${styles.btnLogin} font-helvetica`}>
            Đăng nhập
          </div>
          <div
            onClick={() => {
              setIsOpenDangKi(true);
              router.push(
                pathname + "?" + createQueryString("register", "true")
              );
            }}
            className={`${styles.btnRegister} font-helvetica`}>
            Đăng ký
          </div>

          <div
            className="flex justify-center items-center gap-[4px] cursor-pointer relative"
            onClick={() => setOpenLang(!openLang)}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/logo-cac-nuoc/logo-vn.png"
              alt=""
              className="w-[41px] h-[41px]"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-[11px] h-[6px]"
              src="/images/logo-cac-nuoc/iconDown.png"
              alt=""
            />

            <div
              className={`${openLang ? "block" : "hidden"} absolute top-[100%] left-[-13px] mt-2 border border-solid border-[#fc8f00] rounded-[10px] overflow-hidden p-2 bg-[#1b1b1b]`}>
              <div className="w-[230px] mb-6">
                <Link href="/" className="flex justify-start">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[41px] h-[41px]"
                    src="/images/logo-cac-nuoc/logo-th.png"
                    alt=""
                  />
                  <div className="h-[41px] w-[1px] bg-[#fd8f00] mx-2" />
                  <span className="text-sm text-[#fd8f00]">
                    ประเทศไทย
                    <br />
                    THAILAND
                  </span>
                </Link>
              </div>
              <div className="w-[230px] ">
                <Link href="/" className="flex justify-start">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[41px] h-[41px]"
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-cac-nuoc/logo-korean.png"
                    alt=""
                  />
                  <div className="h-[41px] w-[1px] bg-[#fd8f00] mx-2" />
                  <span className="text-sm text-[#fd8f00]">
                    한국
                    <br />
                    KOREA
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-[5px] font-roHe items-center">
            <Link
              className={`${styles.li} text-[#c8c8c8] hover:text-[#fd8f00]`}
              href="/?login=true">
              Nạp Tiền
            </Link>
            <Link
              className={`${styles.li} border-l-[1px] border-solid border-[#c8c8c8] text-[#c8c8c8] hover:text-[#fd8f00]`}
              href="/?login=true">
              Rút Tiền
            </Link>
            <Link
              className={`${styles.li} border-l-[1px] border-solid border-[#c8c8c8] text-[#c8c8c8] hover:text-[#fd8f00]`}
              href="/?login=true">
              Chơi Thử Miễn Phí
            </Link>
            <Link
              className={`${styles.li} border-l-[1px] border-solid border-[#c8c8c8] text-[#c8c8c8] ${pathname.startsWith("/vip-details") ? "text-[#fd8f00]" : ""} hover:text-[#fd8f00]`}
              href="/vip-details">
              Chế Độ VIP
            </Link>
          </div>
          <LiveClock color="white" />
        </div>
      </div>
    );
  };

  if (
    pathname.startsWith("/dang-nhap") ||
    pathname.startsWith("/dang-ky") ||
    pathname.startsWith("/casino") ||
    pathname.startsWith("/daily") ||
    pathname.startsWith("/lobby/navigation") ||
    pathname.startsWith("/cam-nang") ||
    pathname.startsWith("/games") ||
    pathname.startsWith("/cskh") ||
    pathname.startsWith("/transfer")
  ) {
    return null;
  }

  return (
    <header className="w-full flex flex-col items-center relative">
      <div className="h-14 w-full block md:hidden ">
        <div className="fixed z-[100] h-14 w-full">
          <div
            className={`${styles.bgHeaderLg} w-full relative h-14 md:h-[94px] overflow-hidden`}>
            {/* <Image
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/video-header.gif"
              width={468}
              height={76}
              alt=""
              className="videoTag absolute z-[1] w-full h-14 object-cover"
            /> */}

            <div className="top w-full h-14 flex items-center justify-between text-gray-600 body-font pl-5 pr-5 absolute z-10">
              <div onClick={() => setShowNavBar(true)}>
                <FontAwesomeIcon icon={faBars} color="#ff9000" fontSize={26} />
                {/* <div>
              <i className="fas fa-bars text-2xl"></i>
            </div> */}
              </div>
              <div
                className="w-[130px] h-[54px] flex justify-center"
                onClick={() => router.push("/")}>
                <img
                  loading="lazy"
                  className="h-[54px]"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/logo.png"
                  alt=""
                />
              </div>
              <div className="max-h-[34px]">
                <img
                  loading="lazy"
                  className="h-[34px]"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/vi.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-[94px] w-full hidden md:block z-10 pr-3 relative ${styles["bg-header-top"]}`}>
        <div className="flex justify-between w-full items-center max-w-[1200px] mx-auto">
          <div className="flex gap-4 pl-[170px] h-full">
            <Link
              href="/"
              className="flex items-center justify-between gap-2 text-base text-[#fc8f00] font-bold">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                loading="lazy"
                className="h-full w-full"
                src="/images/logo.png"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2 font-roHe h-full justify-end mb-[8px] relative">
            <EmtyUser />
          </div>
        </div>
        {width > 768 && (
          <div className="absolute w-full h-full top-0 left-0 z-[-1]">
            {/* <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline
              className="h-full w-full object-cover">
              <source
                type="video/mp4"
                className={styles.isMp4}
                src="https://cskh14.com/789BET_Media/20241215211517.mp4"
              />
            </video> */}
          </div>
        )}
      </div>

      <div className="w-full bg-navbar flex items-center min-h-[44px] justify-center max-md:hidden bg-nav relative">
        <div className="lg:max-w-[1200px] w-full min-h-[44px] flex justify-center">
          <Navbar />
        </div>
      </div>

      <ModalRegisterV1
        isOpen={isOpenDangKi}
        setIsOpen={setIsOpenDangKi}
        handleDangNhap={handleDangNhap}
        setOpenModalNoti={setOpenModalNoti}
      />

      <ModalLoginV1
        isOpen={isOpenDangNhap}
        setIsOpen={setIsOpenDangNhap}
        handleDangKi={handleDangKi}
      />

      <ModalRegisterSuccess
        openModalNoti={openModalNoti}
        setOpenModalNoti={setOpenModalNoti}
      />

      <ModalTrail
        isOpen={isOpenTrail}
        setIsOpen={setIsOpenTrail}
        key="modal-trail"
      />
      <NavBarMobile isOpen={showNavBar} setIsOpen={setShowNavBar} />
      {window.innerWidth < 768 && (
        <ModalNotification isOpen={isOpenNofi} setIsOpen={setIsOpenNofi} />
      )}

      <ModalDesktopWelcome
        visible={visibleWelcome}
        setVisible={setVisibleWelcome}
        key="ModalDesktopWelcome"
      />

      {window.innerWidth > 768 && (
        <NewNotificationModal
          visible={visible}
          setVisible={setVisible}
          key="NewNotificationModal"
        />
      )}
    </header>
  );
}
