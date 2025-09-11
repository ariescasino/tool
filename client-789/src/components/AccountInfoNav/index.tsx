/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@/context/useUserContext";
import { SyncOutlined } from "@ant-design/icons";
import {
  faBullhorn,
  faClipboardList,
  faDonate,
  faEnvelope,
  faHandHoldingUsd,
  faHeart,
  faHistory,
  faTrophy,
  faUsd,
  faUserCircle,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ModalRefund from "../ModalRefund";
import { Modal } from "antd";
import NewNotificationModal from "../NewNotificationModal";
import { useGeBalance } from "@/hooks/useAuthService";
import { fNumber } from "@/utils/format-number";

export default function AccountInfoNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const { dataBalance, refetch, isFetching } = useGeBalance()
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentPathname = pathname;

  const showModal = () => {
    setIsModalOpen(true);
    router.push("#");
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full grid grid-cols-2 pb-2 gap-[2px] font-roHe ">
      <div className=" col-span-2 px-8 py-12 flex flex-col justify-center items-center bg-[#ffffff85] rounded-t-lg">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="fas fa-user-circle"
          style={{ color: "white", fontSize: "60px" }}
        />

        <div className="text-white text-[15px] font-medium">
          Tài Khoản {user?.username}
        </div>

        <div className="text-white text-[16px] font-medium flex gap-2 items-center">
          Số dư: <span className="text-[22px]">{fNumber(dataBalance)}</span>
          <SyncOutlined
            onClick={() => refetch()}
            className={`cursor-pointer ${isFetching && "animate-spin"}`}
            style={{ color: "#ff9800" }}
          />
        </div>
      </div>
      <div
        onClick={() => router.push("/account/deposit")}
        className={
          currentPathname === "/account/deposit"
            ? "col-span-1 bg-[#ff9800] min-h-[100px] flex justify-center items-center cursor-pointer "
            : "col-span-1 bg-[#2b2b2b] min-h-[100px] flex justify-center items-center cursor-pointer hover:bg-[#ff9800]"
        }>
        <div
          className={`flex flex-col items-center justify-center text-[18px] text-white`}>
          <FontAwesomeIcon
            icon={faDonate}
            className="fas fa-donate"
            style={{
              color: "white",
              fontSize: "30px",
            }}
          />
          Nạp tiền
        </div>
      </div>
      <div
        onClick={() => router.push("/account/withdraw-application")}
        className={
          currentPathname === "/account/withdraw-application"
            ? "col-span-1 bg-[#ff9800] min-h-[100px] flex justify-center items-center cursor-pointer "
            : "col-span-1 bg-[#2b2b2b] min-h-[100px] flex justify-center items-center cursor-pointer hover:bg-[#ff9800]"
        }>
        <div className="flex flex-col items-center justify-center text-[18px] text-white">
          <FontAwesomeIcon
            icon={faHandHoldingUsd}
            className="fas fa-hand-holding-usd"
            style={{ color: "white", fontSize: "30px" }}
          />
          Rút tiền
        </div>
      </div>
      <div className="col-span-2 flex flex-col rounded-b-lg mb-6">
        <div
          onClick={() => router.push("/account/member-center")}
          className={
            currentPathname === "/account/member-center"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faUserShield}
            className="fas fa-user-shield fa-fw"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Cài đặt bảo mật
          </span>
        </div>

        <div
          onClick={() => router.push("/account/vip")}
          className={
            currentPathname === "/account/vip"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <Image
            className="w-[22px] h-5"
            src="/images/vip/crow.png"
            alt=""
            width={22}
            height={5}
            unoptimized
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Khu vực VIP
          </span>
        </div>
        <div
          onClick={showModal}
          className={
            currentPathname === "/account/new-notice"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faBullhorn}
            className="fas fa-bullhorn"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Thông báo mới nhất
          </span>
        </div>
        <div
          onClick={() => router.push("/account/site-mail")}
          className={
            currentPathname === "/account/site-mail"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fas fa-envelope"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Thư nội bộ
          </span>
        </div>
        <div
          onClick={() => router.push("/account/activiti-list")}
          className={
            currentPathname === "/account/activiti-list"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faTrophy}
            className="fas fa-trophy"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Khu sự kiện
          </span>
        </div>
        <div
          onClick={() => router.push("/account/transaction")}
          className={
            currentPathname === "/account/transaction"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faClipboardList}
            className="fas fa-clipboard-list fa-fw"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Chi Tiết Giao Dịch
          </span>
        </div>
        <div
          onClick={() => router.push("/account/bet-record")}
          className={
            currentPathname === "/account/bet-record"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faHistory}
            className="fas fa-history fa-fw"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Lịch Sử Đặt Cược
          </span>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className={
            currentPathname === "/account/refund"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer"
          }>
          <FontAwesomeIcon
            icon={faUsd}
            className="bg-white rounded-full p-[2px]"
            style={{ color: "#5f5a5a85", width: "12px", height: "12px" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Hoàn trả
          </span>
        </div>
        <div
          onClick={() => router.push("/account/favorite-game")}
          className={
            currentPathname === "/account/favorite-game"
              ? "w-full h-[56px] bg-[#ff9800] text-white flex items-center pl-8 gap-2 cursor-pointer"
              : "w-full h-[56px] bg-[#ffffff85] text-white rounded-b-md flex items-center pl-8 gap-2 hover:bg-[#ff9800] cursor-pointer "
          }>
          <FontAwesomeIcon
            icon={faHeart}
            className="fas fa-heart fa-fw"
            style={{ color: "white" }}
          />
          <span
            className="text-base leading-[56px] font-medium"
            style={{
              letterSpacing: "3px",
            }}>
            Yêu thích nhất
          </span>
        </div>
      </div>
      {/* <Modal
        cancelButtonProps={{ hidden: true }}
        okText="xác nhận"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={300}>
        <div className="h-[185px] flex flex-col justify-between">
          <div>
            <p className="text-[16px]">gợi ý</p>
            <p className="text-[12px] text-gray-400">40E74639AG1268C059DD1F</p>
          </div>

          <div className="w-full h-[1px] bg-gray-300" />
          <p className="text-[16px]">hiện chưa có thông báo mới nhất</p>
          <div className="w-full h-[1px] bg-gray-300" />
        </div>
      </Modal> */}
      <ModalRefund isOpen={isOpen} setIsOpen={setIsOpen} />
      <NewNotificationModal visible={isModalOpen} setVisible={setIsModalOpen} />
    </div>
  );
}
