/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import gameService from "@/api/services/game.service";
import VipInforLayout from "@/components/VipMobile/VipInforLayout";
import { useFavoriteContext } from "@/context/useFavoriteContext";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { IItemGameFavorite } from "@/interface/game.interface";
import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { popup } from "@/utils/popup";
import { useMenu } from "@/context/useMenuContext";

export default function FavoriteGame() {
  const router = useRouter();
  const deviceC = useLaunchGameDevice();
  const { user, setLoadingGame } = useUser();

  const { isMenuOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const { favoriteGames, fetchFavoriteGames, changeListGameFavorite } =
    useFavoriteContext();
  const handleClick = async (item: IItemGameFavorite) => {
    if (user?.username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: item.game_id,
          gpid: item.provider_id,
          supplier: item.partner_name,
          type: item.game_type_id,
          lang: "en",
        });

        if (res.data) {
          if (isMobile) {
            router.push(
              `/games/playing?url=${encodeURIComponent(res?.data?.data)}`
            );
          } else {
            popup(`/games/playing?url=${encodeURIComponent(res?.data?.data)}`);
          }
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push("/mobile/login");
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile nếu chiều rộng <= 768px
    };

    // Gọi hàm khi component mount và khi thay đổi kích thước
    handleResize();
    window.addEventListener("resize", handleResize);
    fetchFavoriteGames();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="w-full hidden md:block">
        <div className="relative py-[10px] px-[15px] bg-[#2b2b2b] text-white h-[50px] text-[21px]">
          {isMenuOpen ? (
            <i
              className="fal fa-arrow-alt-to-left relative z-10"
              onClick={toggleMenu}
            ></i>
          ) : (
            <i
              className="fal fa-arrow-alt-to-right relative z-10"
              onClick={toggleMenu}
            ></i>
          )}
          <div className="absolute w-full top-0 left-0 text-center h-full leading-[50px]">
            Yêu thích nhất
          </div>
        </div>

        <div>
          {favoriteGames && favoriteGames.length > 0 ? (
            <div className="p-2 border-solid border-[1px] border-gray-400 py-7 bg-white">
              <div className="flex flex-wrap">
                {favoriteGames.map((data, index) => (
                  <div
                    className={`relative w-[160px] min-h-[180px] m-[5px] bg-white border border-solid border-[#c5cee0] rounded-[10px] ${styles["game-wrapper"]}`}
                    key={index}
                  >
                    <figure
                      className={styles["game-logo"]}
                      onClick={() => handleClick(data)}
                      ng-click="$ctrl.toGame(game)"
                    >
                      {" "}
                      <div className="w-[158px] h-[158px] flex items-center">
                        <img
                          alt=""
                          src={data.game_icon_url}
                          className="w-[140px] h-[158px]"
                          loading="lazy"
                        />{" "}
                      </div>
                      <div className={styles["title-game"]}>
                        {data.game_name}
                        <i
                          className="fa-heart fas"
                          title="Hủy bỏ yêu thích của tôi"
                          onClick={(e) => {
                            e.stopPropagation();
                            changeListGameFavorite(
                              data.game_id,
                              data.partner_name
                            );
                          }}
                        />{" "}
                      </div>{" "}
                      <div className={styles["supplierDisplayName"]}>
                        {data.provider_name}
                      </div>{" "}
                      <div className={styles["entrance"]}>Cược Ngay</div>{" "}
                    </figure>{" "}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-2 border-solid border-[1px] h-[500px] border-gray-400 flex justify-center flex-col items-center py-7 bg-white overflow-auto">
              <div>
                <Image
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/f5fccbdbd67a139265b13e71ccfe3b4c.png"
                  alt=""
                  width={0}
                  height={0}
                  className="w-[70px] h-[70px] mx-auto"
                  sizes="100vw"
                />
                <h3 className="text-gray-400 text-[24px]">
                  Không có dữ liệu nào được lưu
                </h3>
                <div className="text-gray-400">
                  Mau chóng đi đăng ký trò chơi yêu thích của bạn nào !
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <VipInforLayout
        isOpen={isMobile}
        setIsOpen={() => router.back()}
        title={pathname.includes("favorite") ? "Yêu thích" : "Đã xem gần đây"}
      >
        {favoriteGames && favoriteGames.length > 0 ? (
          <div className="flex flex-wrap">
            {favoriteGames?.map((data, index) => (
              <div
                key={index}
                className="w-1/3 text-center relative"
                onClick={() => handleClick(data)}
              >
                <img
                  src={data.game_icon_url}
                  alt=""
                  className="mx-auto w-[92px] h-[92px]"
                />
                <div className="break-words leading-[1.2] text-[14px]">
                  {data.game_name}
                </div>
                <div
                  onClick={() =>
                    changeListGameFavorite(data.game_id, data.partner_name)
                  }
                  className="absolute rounded-full w-[22px] h-[22px] bg-red-600 flex items-center justify-center bottom-[17px] right-[11px] "
                >
                  <HeartFilled style={{ fontSize: 14, color: "white" }} />
                </div>
              </div>
            ))}
          </div>
        ) : pathname.includes("favorite") ? (
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
        ) : (
          ""
        )}
      </VipInforLayout>
    </div>
  );
}
