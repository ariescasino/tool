/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { Modal, Tabs } from "antd";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import TransactionHistoryRecordComponent from "@/components/ModalMobileTransactionHistory/TransactionHistoryRecordComponent";

import styles from "./ModalMobileTransactionHistory.module.css";
import { MailTypeEnum } from "@/constant/enum";

export default function ModalMobileTransactionHistory({
  handleChangeRange,
  rangeDate,
  setTransactionType,
  transactionType,
  dataListPaymentType,
}: {
  handleChangeRange: (type: string) => void;
  rangeDate: { dateFrom: string; dateTo: string; selected: string };
  setTransactionType: (transactionType: MailTypeEnum | undefined) => void;
  transactionType: MailTypeEnum | undefined;
  dataListPaymentType: any;
}) {
  // constant

  // state
  const router = useRouter();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [mailBoxes, setMailBoxes] = useState<any[]>([]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const isMobile = width <= 768;
  // hook
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    modalIsOpen && (
      <Modal
        open={isMobile && modalIsOpen}
        wrapClassName={styles.modalWarp}
        onOk={() => setModalIsOpen(false)}
        width=""
        closeIcon={false}
        footer={null}
        mask={false}
        style={{
          margin: "0px",
          maxWidth: "100%",
          padding: 0,
          borderRadius: 0,
          // animationDuration: "0s",
        }}
        styles={{ body: { padding: 0 } }}
        className={`top-[70px] modal-mobile-site-mail`}>
        <div className="w-full mt-[-15px]">
          <div className="px-2">
            <div className="w-full h-[50px] bg-[#fc8f00] flex justify-center items-center text-[21px] text-white rounded-md relative">
              <b>Chi tiết giao dịch</b>
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="ms-10 absolute right-3"
                onClick={() => {
                  setModalIsOpen(false);
                  router.back();
                }}
                style={{ color: "white", fontSize: "16px" }}
              />{" "}
            </div>
          </div>

          <div className=" mt-4 w-full min-h-[calc(100vh-150px)] h-[calc(100vh-120px)] border-[1px] border-gray-400 border-solid p-2 rounded-md relative overflow-auto bg-white">
            <div className="grid grid-cols-12 mb-2 border">
              <div
                className={`border text-[12px] px-2 py-1 col-span-2 ${rangeDate.selected === "now" && "text-red-600"}`}
                onClick={() => handleChangeRange("now")}>
                Hôm nay
              </div>
              <div
                className={`border text-[12px] px-2 py-1 col-span-2 ${rangeDate.selected === "yesterday" && "text-red-600"}`}
                onClick={() => handleChangeRange("yesterday")}>
                Hôm qua
              </div>
              <div
                className={`border text-[12px] px-2 py-1 col-span-4 ${rangeDate.selected === "7days" && "text-red-600"}`}
                onClick={() => handleChangeRange("7days")}>
                Trong vòng 7 ngày
              </div>
              <div
                className={`border text-[12px] px-2 py-1 col-span-4 ${rangeDate.selected === "30days" && "text-red-600"}`}
                onClick={() => handleChangeRange("30days")}>
                Trong vòng 30 ngày
              </div>
            </div>
            <div className="grid grid-cols-12 mb-2">
              <div
                onClick={() => setTransactionType(undefined)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-2 ${transactionType === undefined && "text-red-600"}`}>
                Tất cả
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.COMPANY_IN)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-4 ${transactionType === MailTypeEnum.COMPANY_IN && "text-red-600"}`}>
                Công ty gửi tiền
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.ONLINE_IN)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-5 ${transactionType === MailTypeEnum.ONLINE_IN && "text-red-600"}`}>
                Thanh toán trực tuyến
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.ONLINE_OUT)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-4 ${transactionType === MailTypeEnum.ONLINE_OUT && "text-red-600"}`}>
                Rút tiền trực tuyến
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.MANUAL)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-4 ${transactionType === MailTypeEnum.MANUAL && "text-red-600"}`}>
                Nạp rút thủ công
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.PREFERENTIAL)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-4 ${transactionType === MailTypeEnum.PREFERENTIAL && "text-red-600"}`}>
                Hoạt động ưu đãi
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.PREFERENTIAL)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-3 ${transactionType === MailTypeEnum.PREFERENTIAL && "text-red-600"}`}>
                Hoàn trả
              </div>
              <div
                onClick={() =>
                  setTransactionType(MailTypeEnum.PREFERENTIAL_DAY)
                }
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-3 ${transactionType === MailTypeEnum.PREFERENTIAL_DAY && "text-red-600"}`}>
                Hoàn trả ngày
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.VIP_BONUS)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-3 ${transactionType === MailTypeEnum.VIP_BONUS && "text-red-600"}`}>
                VIP bonus
              </div>
              <div
                onClick={() => setTransactionType(MailTypeEnum.ORTHER)}
                className={`border border-[#ccc] text-[12px] text-center py-1 col-span-2 ${transactionType === MailTypeEnum.ORTHER && "text-red-600"}`}>
                Khác
              </div>
            </div>

            {/* <TransactionHistoryRecordComponent transactionRecords={mailBoxes} /> */}
            <TransactionHistoryRecordComponent
              transactionRecords={dataListPaymentType}
            />
          </div>
        </div>
      </Modal>
    )
  );
}
