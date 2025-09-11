/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import paymentService from "@/api/services/payment.service";
import { message, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCopyToClipboard, useDebounce } from "react-use";
import styles from "@/styles/ViaBank.module.css";
import { fNumberBank } from "@/utils/format-number";
import { LoadingOutlined } from "@ant-design/icons";

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

  return <span className="block">{formatTime(seconds)}</span>;
};

export default function TPBank() {
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
    <div className="max-w-5xl mx-auto p-4 min-h-screen h-full">
      <div className="bg-white shadow-md rounded-lg p-2 md:p-6">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-500">Mã đơn hàng</h2>
            <p className="text-gray-500">Số dư thanh toán</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700">{dataBank.content}</p>
            <p className="text-gray-700">
              {amount && dataBank.rate
                ? fNumberBank(parseInt(amount) / dataBank.rate)
                : 0}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="w-full md:w-1/2 p-4 border rounded-lg">
            <p className="text-center mb-2 block md:hidden">
              Quét mã chuyển tiền trong vòng{" "}
              <CountdownTimer initialSeconds={900} />
            </p>
            <div className="flex justify-center mb-2">
              <img
                src={`data:image/png;base64,${dataBank.qrBase64}`}
                alt="QR code"
              />
            </div>
            <p className="text-center text-red-500 hidden md:block ">
              còn <CountdownTimer initialSeconds={900} />
              mã này sẽ không hợp lệ
            </p>
            <p className="text-center text-gray-500">
              Quét hoặc chụp lưu mã QR để quét
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="mb-4">
              <p className="text-gray-500">NỘI DUNG CHUYỂN KHOẢN</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-gray-700 w-[calc(100%-150px)]">{dataBank.content}</p>
                <button
                  onClick={() => handleCopy(dataBank.content)}
                  className="bg-blue-500 text-white px-0 md:px-4 py-2 rounded max-h-[52px] w-[150px] md:w-auto"
                >
                  Nhấn để sao chép
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-500">Thông tin người thụ hưởng</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-gray-700 w-[calc(100%-150px)]">{dataBank.bankAccountName}</p>
                <button
                  onClick={() => handleCopy(dataBank.bankAccountName)}
                  className="bg-blue-500 text-white px-0 md:px-4 py-2 rounded max-h-[52px] w-[150px] md:w-auto"
                >
                  Nhấn để sao chép
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-500">Số tài khoản ngân hàng thụ hưởng</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 w-[calc(100%-150px)]">{dataBank.bankNumber}</p>
                <button
                  onClick={() => handleCopy(dataBank.bankNumber)}
                  className="bg-blue-500 text-white px-0 md:px-4 py-2 rounded max-h-[52px] w-[150px] md:w-auto"
                >
                  Nhấn để sao chép
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg mb-4">
          <p className="text-red-500 font-semibold">Danh mục chú ý</p>
          <p className="text-red-500">
            Các bạn nhớ nhập nội dung ghi chú chuyển khoản, nếu không sẽ không
            thể nạp tiền thành công
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 font-semibold">Lời nhắc nhở ấm áp</p>
          <p className="text-gray-700">
            Vui lòng xác nhận lại thông tin tài khoản ngân hàng của bạn, điền và
            thanh toán trong thời gian còn hiệu lực. Nếu hết thời gian hiệu lực,
            vui lòng tạo mới lại đơn hàng
          </p>
        </div>
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
