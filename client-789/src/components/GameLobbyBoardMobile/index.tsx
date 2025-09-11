/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

import styles from "./GameLobbyBoardMobile.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import NavbarGameMobile from "../NavbarGameMobile";
import { Input, Select, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { dataBacaratMobile, GameMobileData } from "@/constant/dataGameMobile";
import gameService from "@/api/services/game.service";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffectOnce } from "react-use";
import { useUser } from "@/context/useUserContext";
import apiClient from "@/api/apiClient";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import { LoadingOutlined } from "@ant-design/icons";
import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import ButtonScroll from "../IconSvg/ButtonScroll";
import ItemGameMobile from "../ItemGameMobile";
import { useFavoriteContext } from "@/context/useFavoriteContext";

function GameLobbyBoardMobile() {
  const router = useRouter();
  const deviceC = useLaunchGameDevice();
  const { user } = useUser();
  // const { scrollPosition } = useScroll();
  const { favoriteGames } = useFavoriteContext();

  const [searchValue, setSearchValue] = useState("");
  const [listGame, setListGame] = useState<any[]>([]);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [showItem, setShowItem] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingGame, setLoadingGame] = useState(false);

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
          gameTypes: [`${GameType.CB}`],
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
    getData(dataBacaratMobile[0]);
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
      // Thêm logic bạn muốn thực hiện dựa trên scroll position ở đây
    }
  };
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

  const handleClick = async (dataGame: any) => {
    if (user?.username) {
      try {
        setLoadingGame(true);
        const res = await gameService.lauchgameType2({
          device: deviceC,
          gameid: dataGame.gameId,
          gpid: dataGame.providerId,
          supplier: dataGame.partnerName,
          type: dataGame.gameTypeId,
          lang: "en",
        });

        if (res.data) {
          router.push(res?.data?.data);
        }
      } catch (error) {
      } finally {
        setLoadingGame(false);
      }
    } else {
      router.push(`/mobile/login`);
    }
  };

  return (
    <div className="block md:hidden">
      <NavbarGameMobile />
      <div>
        <div>
          <div className="px-[2%] py-[3%] bg-[#111111]">
            <div className="flex h-[28px] mb-2">
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
          </div>
          <div className="flex">
            <div className="w-1/4 relative">
              <div
                className={
                  scrollTop > 90 ? styles.listGameScroll : styles.listGame
                }>
                <div className={styles.buttonScrollTop}>
                  <ButtonScroll />
                </div>
                <div className="relative overflow-scroll h-full pt-[16px] pb-[20px]">
                  {dataBacaratMobile.map(
                    (item, index) =>
                      index < 8 && (
                        <div
                          key={index}
                          className={styles.itemListCategoryGame}
                          onClick={() => getData(item)}>
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
                      )
                  )}
                </div>
                <div className={styles.buttonScrollBot}>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.293 6.293a1 1 0 0 1 1.414 0L12 11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414zm0 6a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                      fill="#0D0D0D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="min-h-[600px] w-fit"
              style={{ width: "calc(100vw - 25vw)" }}>
              <InfiniteScroll
                dataLength={showItem.length}
                next={fetchMoreData}
                hasMore={hasMore}
                initialScrollY={0}
                loader={
                  hasMore && showItem.length > 0 ? (
                    <div className="col-span-3 w-full flex justify-center items-center">
                      <Spin size="large" />
                    </div>
                  ) : null
                }
                className=" grid grid-cols-3 gap-2 pb-14"
                scrollableTarget="mainID">
                {showItem && showItem.length ? (
                  showItem.map((item: any, index: number) => {
                    const isFavorite = favoriteGames?.some(
                      (game) => game.game_id === String(item.gameId)
                    );
                    item.isFavorite = isFavorite;
                    return <ItemGameMobile item={item} key={index} />;
                  })
                ) : (
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
        <div className="fixed top-[10%] left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999] ">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "#fff" }}
                spin={true}
              />
            }
            tip="Đang chuyển hướng đến game!"
          />
        </div>
      )}
    </div>
  );
}
export default GameLobbyBoardMobile;
