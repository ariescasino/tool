/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { img } from "@/constant/images";
import { useUser } from "@/context/useUserContext";
import { fNumber } from "@/utils/format-number";
import { Modal, Button } from "antd";
import {
  faArrowRightFromBracket,
  faBullhorn,
  faClipboardList,
  faDonate,
  faEnvelope,
  faHandHoldingUsd,
  faHeart,
  faHistory,
  faSync,
  faTrophy,
  faUsd,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "./ModalMobileTaiKhoan.module.css";
import VipEvent from "../VipMobile/VipEvent";
import Favorite from "../VipMobile/Favorite";
import { useGeBalance } from "@/hooks/useAuthService";

const taiKhoanButtonItems = [
  {
    id: 3,
    title: "Hộp thư đi",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-[36px]" />,
    href: "/account/site-mail",
  },
  {
    id: 4,
    title: "Chi tiết đặt cược",
    icon: <FontAwesomeIcon icon={faHistory} className="mb-1 text-[36px]" />,
    href: "/account/bet-record",
  },
  {
    id: 5,
    title: "Chi Tiết Giao Dịch",
    icon: (
      <FontAwesomeIcon icon={faClipboardList} className="mb-1 text-[36px]" />
    ),
    href: "/account/transaction",
  },
  {
    id: 6,
    title: "Khu sự kiện",
    icon: <FontAwesomeIcon icon={faTrophy} className="mb-1 text-[36px]" />,
    href: "/",
  },
  {
    id: 7,
    title: "Yêu Thích",
    icon: <FontAwesomeIcon icon={faHeart} className="mb-1 text-[36px]" />,
    href: "/",
  },
  {
    id: 8,
    title: "Bảo Mật",
    icon: <FontAwesomeIcon icon={faUserShield} className="mb-1 text-[36px]" />,
    href: "/account/member-center",
  },
  {
    id: 9,
    title: "Thông Báo",
    icon: <FontAwesomeIcon icon={faBullhorn} className="mb-1 text-[36px]" />,
    href: "/",
    offset: 3,
  },
  {
    id: 10,
    title: "Hoàn Trả",
    icon: (
      <div className="rounded-full w-[38px] h-[34px] bg-[#999999] flex justify-center items-center">
        <FontAwesomeIcon icon={faUsd} className="mb-1 text-[28px] text-white" />
      </div>
    ),
    href: "/account/discount",
  },
  {
    id: 11,
    title: "VIP",
    icon: (
      <i
        className={`${styles.MobileTaiKhoanVipIcon} m-auto flex mb-1 h-[40px] w-[40px] bg-[#999999]`}
      />
    ),
    href: "/account/vip",
  },
];

export default function ModalMobileTaiKhoan() {
  // state
  const [open, setOpen] = useState(false);
  const [dateNow, setDateNow] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showVipEvent, setShowVipEvent] = useState<boolean>(false);
  const [showFavorite, setShowFavorite] = useState<boolean>(false);

  const handleClick = (id: number) => {
    if (id === 9) {
      setIsModalVisible(true);
    } else if (id === 6) {
      setShowVipEvent(true);
    } else if (id === 7) {
      setShowFavorite(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // login
  const { user, logoutUser } = useUser();
  const { dataBalance, refetch, isFetching } = useGeBalance()
  useEffect(() => {
    const interval = setInterval(() => setDateNow(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="font-roHe">
        <div className="w-full h-[31px] flex items-center relative bg-[#222222] px-1">
          <div className="">
            <Image
              src={img.speaker}
              width={16}
              height={18}
              alt=""
              className="!w-[18px] !h-[16px]"
            />
          </div>
          <Marquee className="w-full text-white leading-6 text-[12px] mx-2">
            <span>
              🔔 Gần đây, tình trạng nhà mạng thường xuyên chặn link làm quý Hội
              viên gặp khó khăn khi truy cập vào 789BET. Một số thành phần đã
              lợi dụng gửi những link giả mạo để quý Hội viên truy cập và lấy
              cắp thông tin đăng nhập, sau đó liên hệ quý Khách hàng để lôi kéo
              qua một trang giải trí khác.
            </span>
            <span>
              1️⃣Nhân viên chính thức của 789BET sẽ không yêu cầu thành viên đăng
              ký lại tài khoản ở bất kỳ trang web lạ nào và với bất kỳ lý do
              nào.
            </span>

            <span>
              2️⃣Quý Hội viên vui lòng liên hệ qua Email: admin@789bet.com để
              nhận được link truy cập mới nhất. Khuyến nghị quý hội viên tải APP
              của 789BET về sử dụng, thường xuyên thay đổi mật khẩu định kỳ để
              tăng cường bảo mật thông tin. Ngoài ra, nếu gặp vấn đề không thể
              liên hệ tới kênh hỗ trợ 24/7 được quý khách hàng hãy liên hệ qua
              các kênh như Facebook, Telegram để được hỗ trợ.
            </span>

            <span>
              3️⃣Để đảm bảo an toàn khi tham gia tại 789BET, vui lòng vào mục nạp
              tiền lấy thông tin ngân hàng trên hệ thống, tuyệt đối không lấy
              thông tin, nội dung từ người thứ 3 hoặc đại lý tránh bị lừa đảo
            </span>
            <span>
              4️⃣789BET luôn nghiêm cấm hành vi lôi kéo ăn chia % lợi nhuận, nếu
              thành viên nào nhận được thông tin lôi kéo ăn chia từ các đại lý,
              hãy liên hệ ngay với chúng tôi qua kênh khiếu nại 789BET để được
              hỗ trợ xử lý. 789BET xin chân thành cảm ơn toàn thể thành viên
              luôn tin tưởng và ủng hộ, 789BET sẽ nỗ lực nâng cao chất lượng
              phục vụ, luôn xem khách hàng là thượng đế.
            </span>
            <span>🧧Tặng 18,789 Phong Bì Đỏ mỗi ngày</span>
            <span>🧧Nạp 200k tặng ngay 50k</span>
            <span>🧧Nạp Đầu Nhận 28,789 Điểm</span>
            <span>🧧Nạp 2 - 4 - 6 nhận 3 - 5 - 7</span>
            <span>🧧Nạp 188k+ Thưởng 188k</span>
            <span>🧧Nạp Chủ Nhật Thưởng 5%</span>
            <span>🧧Siêu Hoàn Trả Lập Tức Lên Đến 2%</span>
            <span>🧧Lì Xì Nghìn Tỷ 06 - 16 - 26</span>
            <span>💝Cho Đi Chữ Tín - Nhận Lại Chữ Tin 💝</span>
            <span>🌸 CASINO, TÔI CHỈ CHỌN 789BET🌸</span>
          </Marquee>
        </div>
        <div
          className={`${styles.wrapper} wrapper flex flex-col items-center justify-center`}>
          <div className="w-[80%] flex items-center justify-between mb-3">
            <span className="text-sm">Xin chào, {user?.username}</span>
            <div
              className="cursor-pointer text-sm flex items-center gap-1"
              onClick={() => logoutUser()}>
              <span>Đăng xuất</span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
            </div>
          </div>
          <div
            className={`${styles.balance} mx-auto w-[90%] rounded-[16px] px-5 py-3 text-center text-sm`}>
            <div className="w-[100%] flex items-center justify-between">
              <span>{fNumber(dataBalance)}</span>
              <div className={styles.currency}>
                <span>VND(k)</span> <FontAwesomeIcon onClick={() => refetch()} icon={faSync} className={isFetching ? "animate-spin" : "cursor-pointer"} />
              </div>
            </div>

            <ul
              className={`${styles.financial} flex items-center justify-center mt-5`}>
              <li className="mr-3">
                <Link href="/account/deposit">
                  <FontAwesomeIcon
                    icon={faDonate}
                    className="mr-3"
                    fontSize={24}
                  />
                  <span className="text-sm">Nạp tiền</span>
                </Link>
              </li>
              <li>
                <Link href="/account/withdraw-application">
                  <FontAwesomeIcon
                    icon={faHandHoldingUsd}
                    className="mr-3"
                    fontSize={24}
                  />
                  <span className="text-sm">Rút tiền</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap justify-center px-4 py-4">
        <div className="grid grid-cols-3 gap-2">
          {taiKhoanButtonItems.map(({ id, icon, title, href }, index) => (
            <>
              {id === 6 || id === 7 || id === 9 ? (
                <div
                  key={id}
                  className={`${styles.itemPage} ${(index + 1) % 3 !== 0 ? "mr-[7px]" : "mr-[0px]"}`}
                  onClick={() => handleClick(id)}>
                  <div className={`${index === 0 && "h-fit"}`}>
                    <div className="w-full flex justify-center">{icon}</div>
                    <p>{title}</p>
                  </div>
                </div>
              ) : (
                <Link
                  href={href}
                  key={id}
                  className={`${styles.itemPage} ${(index + 1) % 3 !== 0 ? "mr-[7px]" : "mr-[0px]"}`}>
                  <div className={`${index === 0 && "h-fit"}`}>
                    <div className="w-full flex justify-center">{icon}</div>
                    <p>{title}</p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        footer={[
          <Button
            key="submit"
            onClick={handleOk}
            style={{ border: "none", boxShadow: "none" }}>
            xác nhận
          </Button>,
        ]}
        closable={false}
        centered>
        <p>hiện chưa có thông báo mới nhất</p>
      </Modal>
      <VipEvent isOpen={showVipEvent} setIsOpen={setShowVipEvent} />
      <Favorite isOpen={showFavorite} setIsOpen={setShowFavorite} />
    </>
  );
}
