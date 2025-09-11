"use client";

import paymentService from "@/api/services/payment.service";
import { fNumberVND } from "@/utils/format-number";

import { useEffect, useState } from "react";
import { useCopyToClipboard } from "react-use";
import styles from "../../../styles/momo.module.css";
import { Button, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";

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

export default function MomoTransfer() {
  const searchParams = useSearchParams();
  const [state, copyToClipboard] = useCopyToClipboard();

  const [dataBank, setDataBank] = useState<BankValue>(DEFAULT_BANK_VALUE);

  const amount = searchParams.get("a");

  const [loading, setLoading] = useState(true);

  const getMomoRequesF = async (amount: string) => {
    try {
      setLoading(true);
      const res = await paymentService.getMomoRequest(amount);
      if (res.data) {
        setDataBank(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (amount) {
      getMomoRequesF(amount);
    }
  }, [amount]);

  return (
    <div className="w-full h-full flex justify-center md:items-center max-md:overflow-auto max-md:justify-start max-md:block max-md:pb-[100px] bg-white">
      <div className="flex flex-col max-md:px-[8px] max-md:pt-[15px]">
        <div className={styles.container}>
          <div className="flex flex-col justify-center items-center px-[61px] max-md:px-0">
            <Image
              className="w-[136px] h-auto"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/pcmomo.png"
              alt=""
              width={136}
              height={51}
            />
            <Image
              className="w-[212px] h-[212px] mb-[10px]"
              src={`data:image/png;base64,${dataBank.qrBase64}`}
              alt=""
              width={212}
              height={212}
            />

            <div className="text-[24px]">
              <span className="text-[#ff0000]">
                {amount ? fNumberVND(parseInt(amount) / dataBank.rate) : 0}
              </span>
              <span>VNĐ</span>
            </div>

            <div
              className={`w-[432px] h-[54px] flex items-center ${styles.boxItem} max-md:w-full`}
            >
              <div className="w-[150px] max-md:w-[140px]">
                Thời gian hết hạn：
              </div>
              <div className="w-[282px] max-md:w-[2rem]">
                <CountdownTimer initialSeconds={900} />
              </div>
            </div>

            <div
              className={`w-[432px] h-[54px] flex items-center ${styles.boxItem} max-md:w-full`}
            >
              <div className="w-[150px] max-md:w-[140px]">STK người nhận：</div>
              <div className="w-[190px] max-md:w-[100px]">
                {dataBank.bankNumber}
              </div>
              <div className="w-[91px] max-md:w-[81.33px]">
                <Button
                  onClick={() => copyToClipboard(dataBank.bankNumber)}
                  className={styles.btncp}
                >
                  Sao chép
                </Button>
              </div>
            </div>

            <div
              className={`w-[432px] h-[54px] flex items-center ${styles.boxItem} max-md:w-full`}
            >
              <div className="w-[150px] max-md:w-[140px]">Nội dung điền：</div>
              <div className="w-[190px] max-md:w-[100px]">
                {dataBank.content}
              </div>
              <div className="w-[91px] max-md:w-[81.33px]">
                <Button
                  onClick={() => copyToClipboard(dataBank.content)}
                  className={styles.btncp}
                >
                  Sao chép
                </Button>
              </div>
            </div>

            <div className={styles.chu}>
              <div className={styles.chuLeft}>CHÚ Ý</div>
              <div className={styles.chuRight}>
                Vui lòng điền nội dung chuyển khoản, nếu không sẽ không cộng
                điểm
              </div>
            </div>
          </div>
          <Image
            className="w-[187px] h-[377px] hidden md:block"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/mp01.png"
            alt=""
            width={187}
            height={377}
          />
        </div>
        <div className={styles.tabbar}>
          <div className={styles.tabItem}>
            <Image
              className="w-[126px h-[126px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/qr01.png"
              alt=""
              width={126}
              height={126}
            />
            <span
              className={`${styles.textRed} max-md:text-center max-md:text-[13px]`}
            >
              Không lặp lại mã quét
            </span>
          </div>
          <div className={styles.tabItem}>
            <Image
              className="w-[126px h-[126px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/qr02.png"
              alt=""
              width={126}
              height={126}
            />
            <span className="text-black max-md:text-center max-md:text-[13px]">
              Mở QR trên Momo
            </span>
          </div>
          <div className={styles.tabItem}>
            <Image
              className="w-[126px h-[126px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/qr03.png"
              alt=""
              width={126}
              height={126}
            />
            <span className="text-black max-md:text-center max-md:text-[13px]">
              Quét mã QR
            </span>
          </div>
          <div className={styles.tabItem}>
            <Image
              className="w-[126px h-[126px]"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/qr04.png"
              alt=""
              width={126}
              height={126}
            />
            <span className="text-black max-md:text-center max-md:text-[13px]">
              Xác nhận số tiền, hoàn tất thanh toán
            </span>
          </div>
        </div>

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
            <Spin
              indicator={
                <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
