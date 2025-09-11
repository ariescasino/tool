/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import paymentService from "@/api/services/payment.service";
import styles from "@/styles/Bank/VietcomBank.module.css";
import { fNumberVND } from "@/utils/format-number";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useCopyToClipboard, useDebounce } from "react-use";

interface BankValue {
  bankAccountName: string;
  bankCode: string;
  bankName: string;
  bankNumber: string;
  content: string;
  qrBase64: string;
  rate: number;
}

const DEFAULT_BANK_VALUE: BankValue = {
  bankAccountName: "",
  bankCode: "",
  bankName: "",
  bankNumber: "",
  content: "",
  qrBase64: "",
  rate: 0.001,
};

const CountdownTimer = ({ initialSeconds }: any) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default function VietcomBank() {
  const searchParams = useSearchParams();
  const [state, copyToClipboard] = useCopyToClipboard();

  const [dataBank, setDataBank] = useState<BankValue>(DEFAULT_BANK_VALUE);

  const bankCode = searchParams.get("c");
  const amount = searchParams.get("a");

  const [loading, setLoading] = useState(true);

  const getBankRequestF = async (bankCode: string, amount: string) => {
    try {
      setLoading(true);
      const res = await paymentService.getBankRequest(bankCode, amount);
      if (res.data) {
        setDataBank(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [debouncedGetBankRequest] = useDebounce(() => {
    if (bankCode && amount) {
      getBankRequestF(bankCode, amount);
    }
  }, 1000);

  useEffect(() => {
    if (bankCode && amount) {
      debouncedGetBankRequest();
    }
  }, [bankCode, amount]);
  return (
    <div
      className="grid grid-cols-2 min-h-screen bg-[rgb(243,244,253)] w-full gap-4"
      style={{
        fontFamily: "DINAlternate-Bold",
      }}
    >
      <div
        className={`${styles.boxLogo} col-span-2 text-2xl font-bold w-full h-11 justify-center items-center flex`}
      >
        <img
          className="w-[120px] md:w-[8%] h-auto object-contain"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/Bank/bidv.png"
          alt=""
        />
      </div>
      <div className="col-span-2 grid md:grid-cols-2 gap-4  grid-cols-1 text-[#1B1C21]">
        <div className={styles.boxContent}>
          <div className="flex flex-col h-fit gap-2">
            <div className="flex justify-between text-[14px]">
              <span className="text-[#ACACB5]">Mã đơn hàng</span>
              <span>{dataBank.content}</span>
            </div>
            <div
              className={`${styles.borderBot} flex justify-between text-[14px]`}
            >
              <span className="text-[#ACACB5]">Số dư thanh toán</span>
              <span>{amount && dataBank.rate ? fNumberVND(parseInt(amount) / dataBank.rate) : 0} VNĐ</span>
            </div>
            <div className="w-full justify-center items-center flex flex-col gap-2">
              <span className="text-[14px]">
                Mã QR thanh toán đã hết hạn, vui lòng kéo lại đơn hàng
              </span>
              <img
                className={styles.qrCode}
                src={`data:image/png;base64,${dataBank.qrBase64}`}
                alt=""
              />
              <div className={styles.qrInfoText}>
                Mã QR còn <CountdownTimer initialSeconds={900} />
              </div>
              <div className="text-[14px]">Vui lòng kéo lại đơn hàng</div>
            </div>
          </div>
        </div>

        <div className={styles.boxContent}>
          <div className="flex flex-col gap-2 mt-4">
            <span className={styles.title}>NỘI DUNG CHUYỂN KHOẢN</span>
            <div className="flex justify-between">
              <span className={styles.seno}>{dataBank.content}</span>
              <span className={styles.btnCoppy} onClick={() => copyToClipboard(dataBank.content)}>Nhấn để sao chép</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className={styles.title}>Thông tin người thụ hưởng</span>
            <div className="flex justify-between">
              <span className={styles.seno}>{dataBank.bankAccountName}</span>
              <span className={styles.btnCoppy} onClick={() => copyToClipboard(dataBank.bankAccountName)}>Nhấn để sao chép</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className={styles.title}>
              Số tài khoản ngân hàng thụ hưởng
            </span>
            <div className="flex justify-between">
              <span className={styles.seno}>{dataBank.bankNumber}</span>
              <span className={styles.btnCoppy} onClick={() => copyToClipboard(dataBank.bankNumber)}>Nhấn để sao chép</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.attention} col-span-2 flex flex-col gap-2`}>
        <span className={styles.title}>Danh mục chú ý</span>
        <span
          className={`${styles.attentionInfo} text-[#ff0000]`}
          style={{
            color: "red",
          }}
        >
          Các bạn nhớ nhập nội dung ghi chú chuyển khoản, nếu không sẽ không thể
          nạp tiền thành công
        </span>
        <span className={styles.title}>Lời nhắc nhở ấm áp</span>
        <span className={`${styles.attentionInfo} text-[#ff0000]`}>
          Vui lòng xác nhận lại thông tin tài khoản ngân hàng của bạn, điền và
          thanh toán trong thời gian còn hiệu lực. Nếu hết thời gian hiệu lực,
          vui lòng tạo mới lại đơn hàng
        </span>
      </div>
      {loading && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]'>
            <Spin
              indicator={
                <LoadingOutlined style={{ fontSize: 48, color: '#fff' }} spin />
              }
            />
          </div>
        )}
    </div>
  );
}
