/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";

import styles from "./LayoutDeposit.module.css";
import { faDonate, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
type IBankUser = {
  id: number;
  uid: number;
  bankProvider: string;
  bankAccountNumber: string;
  bankAccountName: string;
  bankBranch: string;
};

type IBankOfUser = {
  balance: number;
  bankUsers: IBankUser[];
  name: string;
};
export default function LayoutDeposit({
  children,
  bankOfUser,
  pageIndex,
  setPageIndex,
}: {
  children: React.ReactNode;
  bankOfUser: IBankOfUser;
  pageIndex: "addBank" | "transaction";
  setPageIndex: (value: "addBank" | "transaction") => void;
}) {
  useEffect(() => {
    if (bankOfUser?.bankUsers?.length === 0) {
      setPageIndex("addBank");
    }
    if (bankOfUser?.bankUsers?.length > 0) {
      setPageIndex("transaction");
    }
  }, []);

  return (
    <div>
      <div className={`${styles.navbarDeposit} md:!hidden`}>
        <div className={styles.itemNavBarDeposit}>
          <Link href="/account/deposit">
            <FontAwesomeIcon
              icon={faDonate}
              className="text-[24px]"
              width={24}
            />
            <div className="truncate capitalize block ">Chuyển tiền nhanh</div>
          </Link>
        </div>
        <div className={`${styles.itemNavBarDeposit} ${styles.lineItem}`}>
          <Link href="/account/withdraw-application">
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              className="text-[27px]"
              width={27}
              color="#ffff00"
            />
            <div className="truncate capitalize block text-[#ffff00">
              Rút tiền
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 max-md:p-4 max-md:pb-2 bg-[#e9ecef] md:bg-transparent">
        <div className="grid grid-cols-3 gap-2">
          {/* Button ngân hàng */}
          {bankOfUser?.bankUsers?.length > 0 && (
            <>
              <div className="hidden md:block">
                <div
                  onClick={() => {
                    setPageIndex("transaction");
                  }}
                  className={`w-full h-[72px] flex pl-4 bg-[#ffffff85] cursor-pointer items-center justify-start rounded-lg border-[4px] border-[#ffffff85] hover:border-[#ff9800] gap-2 text-white ${pageIndex === "transaction" && "!border-[#ff9800]"}`}>
                  <i className={styles.addBankIcon} /> Ngân hàng
                </div>
              </div>
              <div className="block md:hidden">
                <div
                  onClick={() => {
                    setPageIndex("transaction");
                  }}
                  className={`${
                    pageIndex === "transaction"
                      ? "!border-[#ff9000]"
                      : "!border-[#ffb627]"
                  } flex flex-col  items-center text-center bg-[#ffffff85] border-[2px] border-solid  rounded-[5px] min-h-[76px] px-[0.25rem] mb-[6px] ml-[5px]`}
                  style={{ height: "calc(100% - 6px)" }}>
                  <i className={`${styles.iconBank}`} />
                  <span className="text-[14px] text-black md:text-white">
                    Ngân hàng
                  </span>
                </div>
              </div>
            </>
          )}
          {/* Button thêm ngân hàng */}
          <>
            <div className="hidden md:block">
              <div
                onClick={() => {
                  setPageIndex("addBank");
                }}
                className={`w-full h-[72px] flex pl-4 bg-[#ffffff85] cursor-pointer items-center justify-start rounded-lg border-[4px] border-[#ffffff85] hover:border-[#ff9800] gap-2 text-white ${pageIndex === "addBank" && "!border-[#ff9800]"}`}>
                <i className={styles.bankIcon} /> Thêm ngân hàng
              </div>
            </div>
            <div className="block md:hidden">
              <div
                onClick={() => {
                  setPageIndex("addBank");
                }}
                className={`${
                  pageIndex === "addBank"
                    ? "!border-[#ff9000]"
                    : "!border-[#ffb627]"
                } flex flex-col justify-center items-center text-center border-[2px] border-solid rounded-[5px] min-h-[76px] px-[0.25rem] mb-[6px] ml-[5px]`}>
                <div className={styles.iconAddBank}></div>
                <span className="text-[14px] text-black md:text-white">
                  Thêm ngân hàng
                </span>
              </div>
            </div>
          </>
        </div>

        {children}
      </div>
    </div>
  );
}
