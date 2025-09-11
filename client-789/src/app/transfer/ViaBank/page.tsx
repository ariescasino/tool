/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import paymentService from "@/api/services/payment.service";
/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/ViaBank.module.css";
import { fNumberBank } from "@/utils/format-number";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCopyToClipboard, useDebounce, useEffectOnce } from "react-use";

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

  function formatTimeHours(seconds: number): string {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [
      minutes.toString().padStart(2, "0"),
      remainingSeconds.toString().padStart(2, "0"),
    ].join(":");
  }

  return (
    <div>
      <span className="block md:hidden">{formatTime(seconds)}</span>
      <span className="hidden md:block">{formatTimeHours(seconds)}</span>
    </div>
  );
};

export default function ViaBank() {
  const searchParams = useSearchParams();
  const [state, copyToClipboard] = useCopyToClipboard();
  const [messageApi, contextHolder] = message.useMessage();
  const [dataBank, setDataBank] = useState<BankValue>(DEFAULT_BANK_VALUE);

  const bankCode = searchParams.get("c");
  const amount = searchParams.get("a");

  const [loading, setLoading] = useState(true);

  const handleCopy = (value: string) => {
    copyToClipboard(value);
    messageApi.open({
      type: "info",
      icon: <></>,
      content: "Copy thành công",
      className: styles.message,
      style: {
        animation: "none",
        marginTop: "45vh",
      },
    });
  };

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
      className="min-h-screen bg-cover bg-center w-full flex justify-center font-inter"
      style={{
        backgroundImage: "url(/images/Bank/bg-pc.jpg)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen max-w-full md:max-w-[1170px] w-full gap-[20px]">
        {/* Left Section */}
        <div className="rounded-lg shadow-lg p-0 md:p-6 w-[540px] bg-none md:bg-black md:bg-opacity-40">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2 text-white h-[52px] flex justify-center items-center gap-4">
              <div className="w-[36px] h-[36px] md:w-[52px] md:h-[52px] bg-white rounded-[10px] flex justify-center items-center">
                <img
                  className={styles.iconTime}
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/Bank/icontime.png"
                  alt=""
                />
              </div>
              <p className="text-[18px] text-black md:text-white md:text-[32px]">
                <CountdownTimer initialSeconds={900} />
              </p>
            </div>

            <div className="w-[231px] h-[230px] md:w-[420px] md:h-[420px] relative flex flex-col justify-center items-center mt-0 md:mt-8">
              <div className={styles.topCenter}>Scan here</div>

              <div className={`${styles.corner} ${styles.topLeft}`} />
              <div className={`${styles.corner} ${styles.topRight}`} />
              <div className={`${styles.corner} ${styles.botLeft}`} />
              <div className={`${styles.corner} ${styles.botRight}`} />

              <img
                src={`data:image/png;base64,${dataBank.qrBase64}`} // Placeholder for QR Code
                alt="QR Code"
                className="rounded-md mb-4 w-[191px] h-[191px]  md:w-[366px] md:h-[366px]"
              />
            </div>
            <div className="text-[17px] md:text-[32px] font-bold text-black md:text-white ">
              VND{" "}
              {amount && dataBank.rate
                ? fNumberBank(parseInt(amount) / dataBank.rate)
                : 0}{" "}
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="rounded-lg shadow-lg w-full md:w-[610px] ">
          <div className={styles.blueBox}>
            <div className={`mb-4 ${styles.info}`}>
              <div className={styles.infoWrap}>
                <div className="text-[#F2C94C] text-sm">Ngân hàng</div>
                <div className="text-[13px] md:text-xl font-semibold">{dataBank.bankName}</div>
              </div>
            </div>
            <div
              className={`mb-4 flex items-center justify-between ${styles.info}`}
            >
              <div className={styles.infoWrap}>
                <div className="text-[#F2C94C] text-sm">Chủ tài khoản</div>
                <div className="text-[13px] md:text-lg font-medium text-white">
                  {dataBank.bankAccountName}
                </div>
              </div>
              <button
                onClick={() => handleCopy(dataBank.bankAccountName)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 text-sm rounded"
              >
                Copy
              </button>
            </div>
            <div
              className={`mb-4 flex items-center justify-between ${styles.info}`}
            >
              <div className={styles.infoWrap}>
                <div className="text-[#F2C94C] text-sm">Số tài khoản</div>
                <div className="text-[13px] md:text-lg font-medium text-white">{dataBank.bankNumber}</div>
              </div>
              <button
                onClick={() => handleCopy(dataBank.bankNumber)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 text-sm rounded"
              >
                Copy
              </button>
            </div>
            <div className={`flex items-center justify-between ${styles.info}`}>
              <div>
                <div className="text-[#F2C94C] text-sm">Nội dung</div>
                <div className="text-[13px] md:text-lg font-medium text-white">{dataBank.content}</div>
              </div>
              <button
                onClick={() => handleCopy(dataBank.content)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 text-sm rounded"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-black text-white rounded-lg p-4 m-8 md:mt-6 shadow-lg w-fit md:w-full">
            <ul className="list-disc text-[11px] md:text-base pl-5 space-y-2">
              <li>Vui lòng chọn hình thức chuyển khoản nhanh 24/7</li>
              <li>
                Vui lòng điền chính xác SỐ TÀI KHOẢN, SỐ TIỀN và NỘI DUNG CHUYỂN
                KHOẢN
              </li>
              <li>Lưu lại biên lai giao dịch để đối chiếu khi cần thiết</li>
            </ul>
          </div>
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
  );
}
