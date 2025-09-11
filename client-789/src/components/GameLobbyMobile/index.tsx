/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./GameLobbyMobile.module.css";
import { useRouter } from "next/navigation";

import NavbarGameMobile from "../NavbarGameMobile";
import { Button, Input, Select, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faFire,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { dataGameNoHu, GameMobileData } from "@/constant/dataGameMobile";
import gameService from "@/api/services/game.service";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce, useEffectOnce } from "react-use";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { LoadingOutlined } from "@ant-design/icons";
import isSafari from "@/utils/isSafari";
import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import ButtonScroll from "../IconSvg/ButtonScroll";
import ItemGameMobile from "../ItemGameMobile";
import { useFavoriteContext } from "@/context/useFavoriteContext";
import Link from "next/link";

function SlotPageMobile() {
  const router = useRouter();
  const deviceC = useLaunchGameDevice();
  const { user } = useUser();
  const { favoriteGames } = useFavoriteContext();
  const [searchValue, setSearchValue] = useState("");
  const [listGame, setListGame] = useState<any[]>([]);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [showItem, setShowItem] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [itemActive, setItemActive] = useState(0);
  const [loadingGame, setLoadingGame] = useState(false);

  const [showDiv, setShowDiv] = useState(false);
  const scrollDivRef = useRef(null) as any;

  const scrollListgameRef = useRef(null) as any;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollDivRef.current.scrollTop;
      if (scrollTop > 0) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleScrollListGame = () => {
  //     if (scrollListgameRef.current.scrollTop > 0) {
  //       setShowDiv(true);
  //     } else {
  //       setShowDiv(false);
  //     }
  //   };
  //   const scrollDiv = scrollDivRef.current;
  //   scrollDiv.addEventListener("scroll", handleScrollListGame);
  //   return () => {
  //     scrollDiv.removeEventListener("scroll", handleScrollListGame);
  //   };
  // }, []);

  useEffectOnce(() => {
    setItemActive(0);
  });

  const handleSubmitSearch = () => {
    const filtered = listGame.filter((game) =>
      game?.gameName?.toLowerCase()?.includes(searchValue?.toLowerCase())
    );

    setShowItem(filtered);
  };

  const getData = async (item: GameMobileData) => {
    try {
      setLoadingGame(true);
      if (item.gpIds.length) {
        const res = await gameService.GameAvalibleV2({
          gpIds: item.gpIds,
          gameTypes: [`${GameType.SLOT}`, `${GameType.SL}`],
          partner: item.partner ? item.partner : Partner.FE,
        });

        if (res.data.status === true) {
          setListGame(res?.data?.data);
          res?.data?.data
            ? setShowItem(res?.data?.data.slice(0, 15))
            : setShowItem([]);
        }
      } else {
        setListGame([]);
        setShowItem([]);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingGame(false);
    }
  };

  useEffectOnce(() => {
    getData(dataGameNoHu[0]);
  });

  const fetchMoreData = () => {
    if (showItem.length >= listGame.length) {
      setHasMore(false);
      return;
    }
    // Giả lập việc tải thêm dữ liệu
    setTimeout(() => {
      setShowItem(
        showItem.concat(listGame.slice(showItem.length, showItem.length + 9))
      );
    }, 500);
  };

  const handleScrollToTop = () => {
    const container = document.getElementById("mainID");
    if (container) {
      setScrollTop(container.scrollTop);
    }
  };

  // Tính toán isFavorite cho mỗi item
  const getIsFavorite = useCallback(
    (gameId: number) => {
      if (!Array.isArray(favoriteGames)) {
        return false; // Trả về `false` nếu `favoriteGames` không phải là một mảng
      }
      return favoriteGames.some((game) => game.game_id === String(gameId));
    },
    [favoriteGames]
  );


  useEffect(() => {
    const container = document.getElementById("mainID");
    if (container) {
      container.addEventListener("scroll", handleScrollToTop);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollToTop);
      }
    };
  }, []);

  return (
    <div className="block md:hidden">
      <NavbarGameMobile />
      <div>
        <div>
          <div className="px-[2%] py-[3%] bg-[#111111] fixed w-full z-[1000]  ">
            {user ? (
              <div className="flex h-[55px] mb-[2%] w-full">
                <div className="flex flex-col gap-2 w-full ">
                  {itemActive === 0 ? (
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <Link href={'/account/favorite-game'} className={styles.buttonC}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          color="white"
                          className="mr-[2px]"
                        />Yêu thích
                      </Link>
                      <Link href={'/account/review-game'} className={styles.buttonC}>
                        <FontAwesomeIcon
                          icon={faFileInvoice}
                          color="white"
                          className="mr-[2px]"
                        />
                        Gần Đây
                      </Link>
                      <Link href={'/lobby/game'} className={`${styles.buttonC} opacity-70`}>
                        <FontAwesomeIcon
                          icon={faFire}
                          color="white"
                          className="mr-[2px]"
                        />
                        Tất cả
                      </Link>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Link href={'/account/favorite-game'} className={styles.buttonC}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          color="white"
                          className="mr-[2px]"
                        />Yêu thích
                      </Link>
                      <Link href={'/account/review-game'} className={styles.buttonC}>
                        <FontAwesomeIcon
                          icon={faFileInvoice}
                          color="white"
                          className="mr-[2px]"
                        />
                        Gần Đây
                      </Link>
                      <Link href={'/lobby/game'} className={`${styles.buttonC} opacity-70`}>
                        <FontAwesomeIcon
                          icon={faFire}
                          color="white"
                          className="mr-[2px]"
                        />
                        Tất cả
                      </Link>
                      <Link href={'/lobby/game'} className={`${styles.buttonC}`}>
                        <FontAwesomeIcon
                          icon={faFire}
                          color="white"
                          className="mr-[2px]"
                        />
                        Hot
                      </Link>
                      <Link href={'/lobby/game'} className={`${styles.buttonC} opacity-70`}>
                        <FontAwesomeIcon
                          icon={faFire}
                          color="white"
                          className="mr-[2px]"
                        />
                        Mới
                      </Link>
                    </div>
                  )}
                  <div className="flex w-full flex-nowrap gap-2">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex w-full h-7">
                        <Input
                          placeholder="Vui lòng nhập tên trò chơi"
                          className="flex-auto"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button
                          onClick={() => handleSubmitSearch()}
                          className={`h-full w-1/5 rounded text-xs ${styles.buttonSearch}`}>
                          <FontAwesomeIcon
                            color="black"
                            icon={faMagnifyingGlass}
                            fontWeight={900}
                          />
                        </button>
                      </div>
                    </div>

                    <Select defaultValue="2" className="w-[2/5] h-7">
                      <Select.Option value="1">Tùy chọn</Select.Option>
                      <Select.Option value="2">
                        Giới thiệu trò chơi
                      </Select.Option>
                    </Select>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex h-[28px] mb-[2%]">
                  <div className="flex w-full items-stretch">
                    <Input
                      placeholder="Vui lòng nhập tên trò chơi"
                      className="flex-auto"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                      onClick={() => handleSubmitSearch()}
                      className={`h-full w-1/5 rounded text-xs ${styles.buttonSearch}`}>
                      <FontAwesomeIcon
                        color="black"
                        icon={faMagnifyingGlass}
                        fontWeight={900}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <Select defaultValue="2" className="w-full">
                    <Select.Option value="1">Tùy chọn</Select.Option>
                    <Select.Option value="2">Giới thiệu trò chơi</Select.Option>
                  </Select>
                </div>
              </>
            )}
          </div>
          <div className="grid grid-cols-4 pt-[90px]">
            <div className=" relative">
              <div
                className={
                  scrollTop > 90 ? styles.listGameScroll : styles.listGame
                }>
                {showDiv && (
                  <div className={styles.buttonScrollTop}>
                    <ButtonScroll />
                  </div>
                )}

                <div
                  ref={scrollDivRef}
                  className="relative overflow-scroll h-full pb-[20px] pt-4 ">
                  {dataGameNoHu.map((item: GameMobileData, index: number) => (
                    <div
                      key={index}
                      className={`${styles.itemListCategoryGame} relative ${item.id === itemActive ? "bg-[#ff9000]" : "bg-[#353535]"}`}
                      onClick={() => {
                        getData(item);
                        setItemActive(item.id);
                      }}>
                      {item.id === itemActive && <div className={styles.cac} />}
                      {item.hot && (
                        <img
                          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/hot.png"
                          alt="hot"
                          className="absolute top-[-4px] w-5 h-5 left-0"
                        />
                      )}
                      {item.event && (
                        <img
                          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/event.png"
                          alt="hot"
                          className="absolute top-[-4px] w-5 h-5 right-0"
                        />
                      )}
                      <img
                        loading="lazy"
                        src={item.img}
                        alt=""
                        className={styles.itemListCategoryGameImg}
                      />
                      <h2
                        className={`font-bold text-[14px] text-white ${styles.itemListCategoryGameText}`}>
                        {item.name}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className={styles.buttonScrollBot} ref={scrollListgameRef}>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.293 6.293a1 1 0 0 1 1.414 0L12 11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414zm0 6a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-3 min-h-[600px] pt-5 ">
              <InfiniteScroll
                dataLength={showItem.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                  hasMore && showItem.length > 0 ? (
                    <div className="col-span-3 w-full flex justify-center items-center">
                      <Spin size="large" />
                    </div>
                  ) : null
                }
                className=" grid grid-cols-3 gap-2 pb-14"
                scrollableTarget="mainID">
                {showItem && showItem.length ?
                  showItem.map((item: any, index: number) => {
                    const isFavorite = getIsFavorite(item?.gameId);
                    return (
                      <ItemGameMobile
                        item={{ ...item, isFavorite }}
                        key={index}
                      />
                    );
                  }) : (
                    <div className="col-span-3 w-full font-bold text-sm flex justify-center items-center text-white mt-40">
                      Game đang bảo trì. Vui lòng chơi game khác !
                    </div>

                  )}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
      {loadingGame && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
            }
          />
        </div>
      )}
    </div>
  );
}
export default SlotPageMobile;
