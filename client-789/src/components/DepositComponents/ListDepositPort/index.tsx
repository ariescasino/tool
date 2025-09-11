"use client";

import { useEffect, useState } from "react";
import styles from "./ListDepositPort.module.css";
import BankPort from "../BankPort";
import MomoPort from "../MomoPort";
import TransferPort from "../TransferPort";
import USDTPort from "../USDTPort";
import LoadingPort from "../LoadingPort";
import CardPort from "../CardPort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useWindowSize } from "react-use";
import Image from "next/image";
import { useListPaymentService } from "@/hooks/usePaymentService";

/* eslint-disable @next/next/no-img-element */
export default function ListDepositPort() {
  const [bankPort, setBankPort] = useState({
    "id": "2",
    "code": "BANK",
    "rate": 0.001,
    "cashoutRate": 0.001,
    "status": "active",
    "allowCashout": true
});
  const [momoPort, setMomoPort] = useState({
    "id": "4",
    "code": "MOMO",
    "rate": 0.001,
    "cashoutRate": 0.001,
    "status": "active",
    "allowCashout": true
});
  const [cardPort, setCardPort] = useState({
    "id": "3",
    "createdAt": "2024-07-01T10:10:28.217Z",
    "updatedAt": "2024-07-01T10:10:28.217Z",
    "code": "CARD",
    "rate": 0.0008,
    "cashoutRate": 0.001,
    "status": "active",
    "allowCashout": true
});
  const [type, setType] = useState<
    null | "BANK" | "CARD" | "MOMO" | "TRANSFER" | "USDT" | "ZALO" | "VT"
  >("TRANSFER");

  const { dataListPaymentType, isFetching, isLoading } =
    useListPaymentService();

  useEffect(() => {
    if (dataListPaymentType) {
      const bankObject = dataListPaymentType.find(
        (item: any) => item.code === "BANK"
      );
      const cardObject = dataListPaymentType.find(
        (item: any) => item.code === "CARD"
      );
      const momoObject = dataListPaymentType.find(
        (item: any) => item.code === "MOMO"
      );

      setBankPort(bankObject);
      setMomoPort(momoObject);
      setCardPort(cardObject);
    }
  }, [dataListPaymentType]);

  const { width } = useWindowSize();

  const cssPc =
    "md:w-full md:h-[72px] md:flex md:pl-4 md:bg-[#828385] md:cursor-pointer md:items-center md:justify-start md:rounded-lg md:border-[4px] md:border-[#ffffff85] md:hover:border-[#ff9800] md:gap-2 md:text-white ";
  const textMobile =
    "max-md:text-[12px] max-md:ml-[5px] max-md:text-black max-md:break-all";
  return (
    <div
      className={`${styles.pg60} max-md:w-screen max-md:bg-gray-200 max-md:min-h-screen h-auto max-md:font-roHe`}>
      <div className={`${styles.navbarDeposit} md:!hidden`}>
        <div className={styles.itemNavBarDeposit}>
          <FontAwesomeIcon icon={faDonate} fontSize={24} color="#ff9000" />
          <div className="truncate capitalize block text-[#ff9000]">
            Chuyển tiền nhanh
          </div>
        </div>
        <div className={`${styles.itemNavBarDeposit} ${styles.lineItem}`}>
          <Link href="/account/withdraw-application">
            <FontAwesomeIcon icon={faHandHoldingUsd} fontSize={24} />
            <div className="truncate capitalize block ">Rút tiền</div>
          </Link>
        </div>
      </div>
      <div className="max-md:flex max-md:mx-5 max-md:my-4">
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div
            onClick={() => setType("TRANSFER")}
            className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc}  ${
              type === "TRANSFER"
                ? "md:!border-[#ff9800] !border-[#ff0303]"
                : "max-md:!border-[#ffb627]"
            }`}>
            <div className="flex items-center justify-center gap-2">
              <i className={`${styles.OnlineIcon} max-md:hidden`} />
              <i className={`${styles.OnlineIconMobi} md:hidden`} />
              <div className={`${textMobile} !ml-0`}>Chuyển khoản ngân hàng</div>
            </div>
          </div>
          <div
            onClick={() => setType("BANK")}
            className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} max-md:!h-[46px]  ${
              type === "BANK"
                ? "md:!border-[#ff9800] !border-[#ff0303]"
                : "max-md:!border-[#ffb627]"
            }`}>
            <div className="flex items-center justify-center gap-2">
              <i
                className={
                  width < 768 ? styles.BankIconMobile : styles.BankIcon
                }
              />
              <div className={`${textMobile}`}>Quét mã ngân hàng</div>
            </div>
          </div>

          <div
            onClick={() => setType("CARD")}
            className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} ${
              type === "CARD"
                ? "md:!border-[#ff9800] !border-[#ff0303]"
                : "max-md:!border-[#ffb627]"
            }`}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/card.png"
                width={20}
                height={20}
                loading="lazy"
                className="md:!h-10 md:!w-10 !h-5 !w-5"
                alt=""
              />
              <div className={`${textMobile}`}> Thẻ cào</div>
            </div>
          </div>

          <div
            onClick={() => setType("MOMO")}
            className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} max-md:!h-[46px] ${
              type === "MOMO"
                ? "md:!border-[#ff9800] !border-[#ff0303]"
                : "max-md:!border-[#ffb627]"
            }`}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/momo.png"
                width={20}
                height={20}
                loading="lazy"
                className="md:!h-10 md:!w-10 !h-5 !w-5"
                alt=""
              />
              <div className={`${textMobile}`}> Momo pay</div>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setType("ZALO")}
              className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} ${
                type === "ZALO"
                  ? "md:!border-[#ff9800] !border-[#ff0303]"
                  : "max-md:!border-[#ffb627]"
              }`}>
              <div className="flex items-center justify-center gap-2">
                <i
                  className={
                    width < 768 ? styles.ZaloIconMobile : styles.ZaloIcon
                  }
                />
                <div className={`${textMobile}`}> ZaloPay</div>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full h-full">
            <div className="bg-black opacity-60 text-center w-full h-full rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-white ">
              Bảo trì
            </div>
          </div> */}
          </div>
          <div className="relative">
            <div
              onClick={() => setType("VT")}
              className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} ${
                type === "VT"
                  ? "md:!border-[#ff9800] !border-[#ff0303]"
                  : "max-md:!border-[#ffb627]"
              }`}>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/vt.png"
                  width={20}
                  height={20}
                  loading="lazy"
                  className="md:!h-10 md:!w-10 !h-5 !w-5"
                  alt=""
                />
                <div className={`${textMobile}`}>VTPay</div>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full h-full">
            <div className="bg-black opacity-60 text-center w-full h-full rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-white ">
              Bảo trì
            </div>
          </div> */}
          </div>
          <div
            onClick={() => setType("USDT")}
            className={`${width < 768 ? styles.itemTypeDeposit : ""} ${cssPc} ${
              type === "USDT"
                ? "md:!border-[#ff9800] !border-[#ff0303]"
                : "max-md:!border-[#ffb627]"
            }`}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/usdt.png"
                width={20}
                height={20}
                loading="lazy"
                className="md:!h-10 md:!w-10 !h-5 !w-5"
                alt=""
              />
              <div className={`${textMobile}`}>USDT</div>
            </div>
          </div>
        </div>
      </div>

      {type === "TRANSFER" && <TransferPort info={bankPort} />}
      {type === "BANK" && <BankPort info={bankPort} />}
      {type === "CARD" && <CardPort info={cardPort} />}
      {type === "MOMO" && <MomoPort info={momoPort} />}
      {type === "USDT" && <USDTPort />}

      {type === "ZALO" && <LoadingPort />}
      {type === "VT" && <LoadingPort />}
    </div>
  );
}
