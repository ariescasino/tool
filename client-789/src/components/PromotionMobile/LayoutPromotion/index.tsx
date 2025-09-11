/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PromotionMobile.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dataTagPromotion } from "@/config/dataTagPromotion";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import IconDoubleArrowDown from "@/components/IconSvg/IconDoubleArrowDown";
import IconDoubleArrowUp from "@/components/IconSvg/IconDoubleArrowUp";
import { dataGameSlideComponent } from "@/constant/dataGame";
import { SwiperSlide, Swiper } from "swiper/react";
import { useUser } from "@/context/useUserContext";
import gameService from "@/api/services/game.service";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import isSafari from "@/utils/isSafari";
import { popup } from "@/utils/popup";


export default function LayoutPromotionMobile({
    children,
    zIndex = 10000,
    title = "Trung tâm khuyến mãi",
    onClose,
    padding = true,
    background = "white",
    isChangePassLayout = false,
}: {
    children: React.ReactNode;
    zIndex?: number;
    title?: string;
    background?: string;
    padding?: boolean;
    onClose?: () => void;
    isChangePassLayout?: boolean;
}) {
    const [open, setOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [tagPromotion, setTagPromotion] = useState(dataTagPromotion[0].name);
    const { user, setLoadingGame } = useUser();
    const deviceC = useLaunchGameDevice();

    const router = useRouter();
    const handleLaunchGame = async (item: any) => {
        if (user?.username) {
            try {
                setLoadingGame(true);
                const res = await gameService.lauchgameType2({
                    device: deviceC,
                    gameid: item.gameId,
                    gpid: item.providerId,
                    supplier: item.partnerName,
                    type: item.gameTypeId,
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
            router.push('/mobile/login')
        }
    };

    const handleClose = () => {
        if (onClose) {
            setIsExiting(true);
            setTimeout(() => {
                onClose();
            }, 300);
        } else {
            router.back();
        }
    };

    useEffect(() => {
        // Hiển thị popup khi component được mount
        setIsVisible(true);

        // Thêm sự kiện trước khi unmount để thực hiện animation ẩn
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            setIsExiting(true);
            // Chờ thời gian animation hoàn tất trước khi chuyển trang
            return new Promise((resolve) => setTimeout(resolve, 300));
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    return (
        <div className="block md:hidden font-roHe">
            <div
                className={`${styles.popupContainer} ${isVisible && !isExiting ? styles.popupShow : ""
                    } ${isExiting ? styles.popupHide : ""} block md:hidden mt-[45px] z-[1000000000]`}

            >
                <div className="relative w-full h-full">
                    <div className={styles.overlayPromition}></div>
                    <div
                        className="z-[1100] relative"
                        style={{
                            height: "calc(94vh)",
                        }}
                    >
                        <div>
                            <div className={styles.boxTitle}>
                                <div className="text-[20px] font-bold">{title}</div>
                                <button
                                    className={styles.buttonClose}
                                    onClick={() => handleClose()}
                                >
                                    <FontAwesomeIcon icon={faTimesCircle} color="#fff" />
                                </button>
                            </div>
                            <div
                                className={
                                    isChangePassLayout
                                        ? styles.listChangePass
                                        : styles.listPromotion
                                }
                                style={{
                                    background: background,

                                    padding: padding ? "30px 15px 8px" : "30px 0 15px",
                                }}
                            >
                                {children}
                            </div>
                        </div>
                        <div className="absolute bottom-[8%] w-full z-[1000]">
                            <div className="relative">
                                <div className="absolute top-[-25px] right-[40px]">
                                    <div
                                        className={`${styles.buttonCollapse} ${!open && styles["animated-text"]}`}
                                        onClick={() => setOpen((prev) => !prev)}>
                                        {open ? (
                                            <IconDoubleArrowDown />
                                        ) : (
                                            <IconDoubleArrowUp />
                                        )}
                                        <div>{open ? "Thu lại" : "Triển khai"}</div>
                                    </div>
                                </div>
                                {
                                    open && (
                                        <div
                                            className={`${styles.boxCollapse} ${open && styles.boxCollapseOpen}`}>
                                            <Swiper slidesPerView={4.5} className="!pb-[16px]">
                                                {dataGameSlideComponent?.map((data: any, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            className="flex flex-col justify-between items-center pt-[20px] px-[8px] mx-[1%]"
                                                            onClick={() => handleLaunchGame(data)}>
                                                            <img
                                                                src={data.gameIconUrl}
                                                                className="w-[62px] h-[62px] rounded-[50%]"
                                                                alt=""
                                                            />
                                                            <div className="text-white overflow-hidden text-sm w-full text-ellipsis whitespace-nowrap font-g">
                                                                {data.gameName.slice(0, 10)}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
