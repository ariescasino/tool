/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import styles from "./HomePageMobile.module.css";
import gameService from "@/api/services/game.service";
import GameType from "@/config/GameType";
import listGameNavMobile from "@/constant/listGameNavMobile";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { fNumber } from "@/utils/format-number";
import isSafari from "@/utils/isSafari";
import { popup } from "@/utils/popup";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import FooterHomePage from "./FooterHomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faTimes } from "@fortawesome/free-solid-svg-icons";
import Partner from "@/config/Partner";
import ProviderID from "@/config/ProviderID";
import Image from "next/image";
import { linkPromotion } from "@/constant";
import { useGeBalance } from "@/hooks/useAuthService";

const listGameNotKind = [
  {
    label: "SABA Thể Thao",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/2081c043f976415fa82407c3b797592d.png",
    game: {
      gameid: 0,
      gpid: ProviderID.SABA,
      type: GameType.SPORT_BOOK,
      supplier: Partner.FE,
    },
  },
  {
    label: "Xóc đĩa",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/f2d6aecce81c453f88702533f00af2c9.png",
    game: {
      gameid: 0,
      gpid: ProviderID.WMCasino,
      type: GameType.LIVE_CASINO,
      supplier: Partner.FE,
    },
  },
  {
    label: "DG Long Hổ",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/4b7513e62e2d4190aad34bc609b14129.png",
    game: {
      gameid: 63,
      gpid: ProviderID.PGSoft,
      type: GameType.SLOT,
      supplier: Partner.FE,
    },
  },
  {
    label: "SE trực tuyến",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/1f20b2da1dd14e52824069bfbe85e9cd.png",
    game: {
      gameid: "MX-LIVE-001",
      gpid: ProviderID.SexyGaming,
      type: GameType.LIVE_CASINO,
      supplier: Partner.FE,
    },
  },
  {
    label: "IM Thể Thao",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/5732d43e09d54d209d65a41bcca01fa6.png",
    game: {
      gameid: 0,
      gpid: ProviderID.IM,
      type: GameType.ESPORT,
      supplier: Partner.FE,
    },
  },
  // {
  //   label: "",
  //   icon: "",
  //   link: "portfolio=SeamlessGame&gameid=0&gpid=0",
  //   type: "LobbyType2",
  // },
  {
    label: "MT Trực Tuyến",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/e174dd13139642319b23df98ed8b35c8.png",
  },
  {
    label: "Siêu Cấp Ace",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/30e40c3fcd334196b5ec1a1d0cd66e97.png",
    game: {
      type: GameType.SLOT,
      gameid: 49,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Kho Báu Aztec",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/5e85ab060f8e4960b99baa8d4f57c127.png",
    game: {
      type: GameType.SLOT,
      gameid: 87,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/f459bb20cae6413f8b9b1c1bbc2f38b5.png",
    label: "QUYẾT CHIẾN TIỀN THƯỞNG",
    game: {
      type: GameType.SLOT,
      gameid: 135,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "Jackpot Đánh Cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/b5bf01acd8f9495b8d5508816aa78335.png",
    game: {
      type: GameType.FISHING,
      gameid: 32,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Vua đánh cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/0384d0ca36e6461193e90a10dcc541b1.png",
    game: {
      type: GameType.FISHING,
      gameid: 74,
      gpid: ProviderID.Jili,
      supplier: "fe",
    },
  },
  {
    label: "CQ9 bắn cá một lần",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/0ef9d3961ed2419fa9a1ff65693b5b86.png",
    game: {
      type: GameType.FISHING,
      gameid: "AT01",
      gpid: ProviderID.CQ9,
      supplier: Partner.FE,
    },
  },
  {
    label: "Bắn cá Dễ Dàng",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/256099f37b354a3faa1e5c7ed7dd953e.png",
    game: {
      type: GameType.SL,
      gameid: "AT01",
      gpid: ProviderID.R5,
      supplier: Partner.MB,
    },
  },
  {
    label: "Đế quốc hoàng kim",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/49b9b7acaf8441a6b21b928ec90871f3.png",
    game: {
      type: GameType.SLOT,
      gameid: 103,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Chuyên Gia Săn Rồng",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/01c5029bdb5d44d3ab97c5e45b153fbc.png",
    game: {
      type: GameType.FISHING,
      gameid: 42,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Bát châu báu",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/c60af496dd0e459ba2942f9736f0d38f.png",
    game: {
      type: GameType.SLOT,
      gameid: 74,
      gpid: 1085,
      supplier: Partner.FE,
    },
  },
  {
    label: "Quyền Vương",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/1ce5d64e5ec14aeb92f4e4557bdf44a4.png",
    game: {
      type: GameType.SLOT,
      gameid: 77,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Báu vật cổ đại: Zeus",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/4637444ef7754951b56769e941bd78af.png",
    game: {
      type: GameType.SL,
      gameid: "SMG_ancientFortunesZeus",
      gpid: "MP",
      supplier: Partner.MB,
    },
  },
  {
    label: "MT ĐUA BI",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/5d85fba5da784acb8cee29d8dbc8e90c.png",
  },
  {
    label: "Thần tài Phú Quý",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/732d8e8b8cc14aab9f52650923ef2aa0.png",
    game: {
      type: GameType.SLOT,
      gameid: 3,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "Chợ Đêm",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/4471100eb308432d810136ff891d9a7c.png",
    game: {
      type: GameType.SLOT,
      gameid: 22018,
      gpid: ProviderID.Fachai,
      supplier: Partner.FE,
    },
  },
  {
    label: "Múa Lân May Mắn 7",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/f9990c2def634757b470eafdd5bc14bf.png",
    game: {
      type: GameType.SL,
      gameid: "021",
      gpid: ProviderID.R5,
      supplier: Partner.MB,
    },
  },
  {
    label: "Tam Tiên Bắn Cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/7059d6303d6944fcb6e89c4c16d79011.png",
  },
  {
    label: "Tết Nguyên Đán",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/51a7bfa9c8364af2a49fc359be26ba99.png",
    game: {
      type: GameType.SLOT,
      gameid: 22041,
      gpid: ProviderID.Fachai,
      supplier: Partner.FE,
    },
  },
  {
    label: "Dàn sao đánh cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/8c6a8d8cffa44f7d8c715d4f1d855d84.png",
    game: {
      type: GameType.FISHING,
      gameid: 119,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Thỏ May Mắn",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/156bb4b3e9754fd2bd2a03433e4f8777.png",
    game: {
      type: GameType.SLOT,
      gameid: 1543462,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "Nhị Gia bắn cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/d2fb722b41754c9dbff1b9a2fa2c63a7.png",
  },
  {
    label: "Đường Mạt Chược",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/9bd87406d71c41e6b82df16d2e61b6a2.png",
    game: {
      type: GameType.SLOT,
      gameid: 65,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "WM Tài Xỉu",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/0ea6d1824d8d4bc894471285841c111e.png",
    game: {
      gameid: 0,
      gpid: ProviderID.WMCasino,
      type: GameType.LIVE_CASINO,
      supplier: Partner.FE,
    },
  },
  {
    label: "Bắn cá Vũ Trụ",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/a09d8a0663124e79bfd55ef1379ec892.png",
    game: {
      type: GameType.FISHING,
      gameid: 21008,
      gpid: ProviderID.Fachai,
      supplier: Partner.FE,
    },
  },
  {
    label: "Đại Thánh bắn cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/9a3bd8c9ee034594ba41cd5c864a57fa.png",
    game: {
      type: GameType.FISHING,
      gameid: 21003,
      gpid: ProviderID.Fachai,
      supplier: Partner.FE,
    },
  },
  {
    label: "Đoạt bảo truyền kỳ",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/b268e9acfd6e4e178126aab12f170275.png",
    game: {
      type: GameType.FISHING,
      gameid: 71,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Pháo thủ điên cuồng",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/b99f5dfecd0448698591c784a4a9fafa.png",
    game: {
      type: GameType.SLOT,
      gameid: 92,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Bảo thạch Kala",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/990586aee4ce409e88620b5bb5613c55.png",
    game: {
      type: GameType.SLOT,
      gameid: 109,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Ali quán ba quán ba",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/4259e64c49204a61a19fa9d867b926a6.png",
    game: {
      type: GameType.SLOT,
      gameid: "WH01",
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Nhà tư bản khủng long II",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/65652a3757744d19a7e6810fc3e22f57.png",
    game: {
      type: GameType.FISHING,
      gameid: 212,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Nổ Cá Đến Rồi",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/791fae003eac47fbaca7f89f1803c2ab.png",
    game: {
      type: GameType.FISHING,
      gameid: 20,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Bắn cá Ngũ Long",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/7cf1d94c9fba4c98b98ff36d7c522684.png",
    game: {
      type: GameType.FISHING,
      gameid: 7004,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Ông Trùm bắn cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/90dbe1d1b0f74fba9bec7660a5af3dd5.png",
  },
  {
    label: "Tam Tiên bắn cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/d133289ddd1542c09fd9fab1301b154d.png",
  },
  {
    label: "Cổng Olympus",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/5cb6df9599544c4fb9d9e9ceea37c261.png",
    game: {
      type: GameType.SLOT,
      gameid: "vs20olympgate",
      gpid: ProviderID.PragmaticPlay,
      supplier: Partner.FE,
    },
  },
  {
    label: "PHI CÔNG",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/06287d4871f44b4780ee5a75e7194342.png",
    game: {
      type: GameType.SL,
      gameid: "KMQM_Elite_Aviator_Club",
      gpid: ProviderID.R5,
      supplier: Partner.MB,
    },
  },
  {
    label: "Vận mệnh tốt M",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/05ab76e5a3fe4583be3df16a22d08765.png",
    game: {
      type: GameType.SLOT,
      gameid: 133,
      gpid: ProviderID.CQ9,
      supplier: Partner.FE,
    },
  },
  {
    label: "Siêu bò tót B",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/9b470072a5a341459429962d87ba8b85.png",
    game: {
      type: GameType.SLOT,
      gameid: 14036,
      gpid: ProviderID.JDB,
      supplier: Partner.FE,
    },
  },
  {
    label: "Chiến Thắng CaiShen",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/15b4da5e90164bda96341d8fe72a63f8.png",
    game: {
      type: GameType.SLOT,
      gameid: 71,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "Tiền Long Đánh Cá",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/46ce4a7f25214cfb8107ddbbb4079273.png",
    game: {
      type: GameType.FISHING,
      gameid: 1,
      gpid: ProviderID.Jili,
      supplier: Partner.FE,
    },
  },
  {
    label: "Tài Xỉu",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/4c8ea846c6e443b4b92f9fa5f6cd6ad1.png",
  },
  {
    label: "Xì dách",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/552deb889ae94db48826811c2d0257fd.png",
  },
  {
    label: "Huyền thoại về người",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/24a50cdaa22c4f5880c0e5f0ea64da7a.png",
    game: {
      type: GameType.SLOT,
      gameid: 128,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
  {
    label: "Kỳ Lân Mách Nước",
    icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/3764d8022aac4f27ad5a1d1add5e2e55.png",
    game: {
      type: GameType.SLOT,
      gameid: 106,
      gpid: ProviderID.PGSoft,
      supplier: Partner.FE,
    },
  },
];
export default function HomePageMobile() {
  const [openBackground, setOpenBackground] = useState<boolean>(false);
  const { user, refreshBalance } = useUser();
  const [showGameNoteExits, setShowGameNoteExits] = useState(false);
  const username = user?.username;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [isOpenGif, setIsOpenGif] = useState(true);
  const swiperRef = useRef<any>(null);
  const [swiperContainerRef, setSwiperContainerRef] = useState<SwiperClass>();
  const deviceC = useLaunchGameDevice();
  const [loadingGame, setLoadingGame] = useState(false);
  const [kind, setKind] = useState<string | null>(null);
  const { dataBalance, refetch, isFetching } = useGeBalance()
  const changeQuery = (newQuery: string) => {
    router.replace(`/?kind=${newQuery}`);
    const index = listGameNavMobile
      .filter((data) => data.query)
      .findIndex((data) => data.query === newQuery);
    if (newQuery === "Hot") {
      swiperContainerRef?.slideTo(0);
    } else {
      swiperContainerRef?.slideTo(index);
    }
  };
  useEffect(() => {
    setIsOpenGif(true);
    setKind(searchParams.get("kind"));
  }, [pathName, searchParams.get("kind")]);
  useEffect(() => {
    const data = searchParams.get("kind");
    if (data !== null) {
      changeQuery(data);
    }
  }, [swiperContainerRef]);
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    const currentSlideId = listGameNavMobile.filter((data) => data.query)[
      currentIndex
    ]?.query;
    if (currentSlideId) {
      changeQuery(currentSlideId);
      swiperRef.current.slideTo(
        listGameNavMobile.findIndex(
          (data) => data.query && data.query === currentSlideId
        )
      );
    }
  };
  const handleClickSlide = (data: { href: string; query?: string }) => {
    if (data.query) {
      changeQuery(data.query);
    } else {
      router.push(data.href);
    }
  };
  const handleLaunchGame = async (item: any) => {
    if (item.game || item.link) {
      setLoadingGame(true);
      if (item.game) {
        if (username) {
          try {
            const res = await gameService.lauchgameType2({
              device: deviceC,
              gameid: item.game.gameid,
              gpid: item.game.gpid,
              supplier: item.game.supplier,
              type: item.game.type,
              lang: "en",
            });
            if (res?.data?.data) {
              if (isSafari()) {
                window.location.href = res?.data?.data;
                setTimeout(() => {
                  setLoadingGame(false);
                }, 2000);
              } else {
                window.open(res?.data?.data);
              }
            }
          } catch (error) {
          } finally {
            setLoadingGame(false);
          }
        } else {
          setLoadingGame(false);
          router.push("/mobile/login");
        }
      } else {
        if (isSafari()) {
          window.location.href = item.link;
        } else {
          setLoadingGame(false);
          popup(item.link);
        }
      }
    }
  };
  return (
    <div className="md:hidden w-full font-roHe">
      <div className={`${styles.bgNavBarMb} w-full`}>
        {user ? (
          <div className={styles.backgroundInfor}>
            <div className="flex h-[63px] items-center justify-center">
              <div className={styles.inforUser}>
                <div
                  className="text-[20px] font-[400] leading-[20px] text-[#ffc481] flex items-center gap-[2px]"
                >
                  $ {fNumber(dataBalance)}
                  <FontAwesomeIcon
                    className={isFetching ? "animate-spin" : "cursor-pointer"}
                    icon={faSync}
                    onClick={() => refetch()}
                    fontSize={20}
                  />
                </div>
                <div className="text-[12px] leading-[20px] text-[#fff] flex justify-center items-center mt-[6px]">
                  {user.username}
                </div>
              </div>
              <div className={styles.activeBalance}>
                <div className="flex justify-center items-center w-full z-10">
                  <div className="min-w-[23%]">
                    <Link
                      href="/account/discount"
                      className="flex flex-col justify-center gap-[5px] items-center mx-[2%]">
                      <div className={styles.discountIcon}></div>
                      <span className="uppercase text-xs text-white text-nowrap">
                        hoàn trả
                      </span>
                    </Link>
                  </div>
                  <div className="min-w-[23%]">
                    <Link
                      href="/account/vip"
                      className="flex flex-col justify-center gap-[5px] items-center mx-[2%]">
                      <div className={styles.vipIcon}></div>
                      <span className="uppercase text-xs text-white text-nowrap">
                        vip
                      </span>
                    </Link>
                  </div>
                  <div className="min-w-[23%]">
                    <Link
                      href="/Activities/RedEnvelope"
                      className="flex flex-col justify-center gap-[5px] items-center mx-[2%]">
                      <div className={styles.promotionIcon}></div>
                      <span className="uppercase text-xs text-white text-nowrap">
                        Hồng bao
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Link href="/mobile/register" className={styles["button-register"]}>
              <span className="text-base">ĐĂNG KÝ</span>
            </Link>
            <Link href="/mobile/login" className={styles["button-login"]}>
              <span className="text-base">ĐĂNG NHẬP</span>
            </Link>
          </div>
        )}
        <div className={`h-[70px] ${styles["custom-swiper"]}`}>
          <Swiper
            slidesPerView={5}
            className={styles["swiper-button"]}
            onSwiper={(swiper) => {
              return (swiperRef.current = swiper);
            }}
            modules={[Navigation]}
            navigation={true}
            scrollbar={{ draggable: true }}>
            {listGameNavMobile.map((data, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={(e) =>
                    handleClickSlide({ href: data.href, query: data.query })
                  }>
                  <div
                    className={`text-center flex flex-col justify-center items-center h-full`}
                    style={{
                      pointerEvents: "none",
                    }}>
                    <div
                      className={`${data.query === kind ? data.classIconActive : data.classIcon} ${styles.slideSize} bg-cover mb-[6px]`}></div>
                    <div
                      className={`text-xs uppercase ${data.query === kind ? "text-[#ff9000]" : "text-[white]"} w-[95%] min-h-[22px] flex justify-center items-center`}>
                      {data.label}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <button
              className="swiper-button-prev"
              onClick={() =>
                swiperRef.current && swiperRef.current.slidePrev()
              }>
              <Image
                width={15}
                height={70}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/prev.svg"
                alt=""
              />
            </button>
            <button
              className="swiper-button-next"
              onClick={() =>
                swiperRef.current && swiperRef.current.slideNext()
              }>
              <Image
                width={15}
                height={70}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/next.svg"
                alt=""
              />
            </button>
          </Swiper>
        </div>
      </div>
      <div className="relative">
        <button
          className={styles["button-togggle-bg"]}
          onClick={() => setOpenBackground(!openBackground)}>
          {openBackground ? (
            <div className={styles["button-togggle-bg-icon-close"]}></div>
          ) : (
            <div className={styles["button-togggle-bg-icon-open"]}></div>
          )}
        </button>
        {openBackground && (
          <div>
            <Image
              alt=""
              width={514}
              height={219}
              className="!w-full !h-full bg-cover"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home/banner_home.png"
            />
          </div>
        )}
        {/* {kind ? ( */}
        <Swiper
          className={kind ? "!block" : "!hidden"}
          autoHeight
          onSlideChange={handleSlideChange}
          allowTouchMove={false}
          onSwiper={setSwiperContainerRef}>
          {listGameNavMobile
            .filter((data) => data.query)
            .map((data: any, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-2 gap-1 p-[.3rem] pb-[100px]">
                    {data.subItems &&
                      data.subItems[0].items.map(
                        (item: any, indexItem: number) => {
                          return (
                            <div
                              key={indexItem}
                              className="relative"
                              onClick={() => handleLaunchGame(item)}>
                              <Image
                                width={187}
                                height={78.5}
                                className="w-full h-[78.5px] object-cover"
                                // style={{
                                //   width: "100%",
                                //   height: "72px",
                                // }}
                                src={item.icon}
                                loading="lazy"
                                alt=""
                              />
                              <div className={styles["label-item-game"]}>
                                {item.label}
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* ) : ( */}
        <div className={kind === null ? "!block" : "!hidden"}>
          <div className="grid grid-cols-2 gap-1 p-[.3rem]">
            {listGameNotKind.map((item: any, indexItem: number) => {
              return (
                <div
                  key={indexItem}
                  className="relative"
                  onClick={() => handleLaunchGame(item)}>
                  <img className="object-cover" src={item.icon} alt="" />
                  <div className={styles["label-item-game"]}>{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* )} */}
        {loadingGame && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
            <Spin
              indicator={
                <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
              }
            />
          </div>
        )}
        {isOpenGif ? (
          <div className="fixed top-[68%] left-0 z-10 h-[90px] w-[90px] translate-y-1/2">
            <FontAwesomeIcon
              onClick={() => setIsOpenGif(false)}
              icon={faTimes}
              fontSize={18}
              className="bg-black ml-2 p-[2px] rounded-full"
              color="white"
            />
            <Link href={linkPromotion}>
              <Image
                alt=""
                width={100}
                height={100}
                className="max-h-full max-w-full"
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/promotion/cq9.gif"
                // src='https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/promotion/lixi.gif'
                unoptimized
              />
            </Link>
          </div>
        ) : null}
        <Modal
          open={showGameNoteExits}
          onCancel={() => setShowGameNoteExits(false)}
          onOk={() => setShowGameNoteExits(false)}
          title="Thông báo"
          footer={null}>
          <div>Game đang bảo trì, vui lòng quay lại sau!</div>
        </Modal>
        <FooterHomePage />
      </div>
    </div>
  );
}
