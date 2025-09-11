/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable @next/next/no-img-element */
import { Col, Divider, Row, Spin } from "antd";
import styles from "../../../styles/bank.module.css";
import { CopyOutlined, LoadingOutlined } from "@ant-design/icons";
import { useCopyToClipboard, useDebounce, useEffectOnce } from "react-use";
import paymentService from "@/api/services/payment.service";
import { useEffect, useState } from "react";

import { fNumber, fNumberVND } from "@/utils/format-number";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { openNotification } from "@/utils/check";

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

export default function USDTTransfer() {
  const searchParams = useSearchParams();
  const [state, copyToClipboard] = useCopyToClipboard();

  const bankCode = searchParams.get("c");
  const amount = searchParams.get("a");
  const networkCode = searchParams.get("n") ?? "TRC20";
  const handelCopy = (data: string) => {
    copyToClipboard(data);
    openNotification({
      type: "success",
      message: "Copy thành công",
    });
  };
  const { data: sendCryptoTrx } = useQuery({
    queryFn: () => {
      return paymentService.sendCryptoTrx({ trxId: 1, network: networkCode });
    },
    queryKey: ["sendCryptoTrx"],
  });

  const { data: getUsdtPrice } = useQuery({
    queryFn: () => {
      return paymentService.getUsdtPrice();
    },
    queryKey: ["getUsdtPrice"],
  });

  const { data: getCryptoInfo } = useQuery({
    queryFn: () => {
      return paymentService.getCryptoInfo({ network: networkCode });
    },
    queryKey: ["getCryptoInfo"],
  });

  return (
    <div className="w-full h-full bg-[#f5f5f5] text-[#000]">
      <div className="max-w-[768px] mx-auto">
        <div className="p-5 flex flex-col gap-2 md:bg-inherit bg-[#f5f5f5]">
          <section className="bg-[#fff] text-card-text rounded p-3 flex flex-col items-center gap-2 min-h-[400px]">
            <div className="text-neutral-text">Quét thanh toán QR</div>

            <div className="text-[#0076d0] flex gap-2 items-center">
              <div className="text-3xl font-semibold">
                {getUsdtPrice &&
                  ((Number(amount) * 1000) / Number(getUsdtPrice ?? 1)).toFixed(
                    3
                  )}
              </div>
              <div
                className="bg-[#e1efff] text-sm flex items-center justify-center p-1 rounded h-fit clipboard-btn cursor-pointer"
                onClick={() =>
                  handelCopy(
                    (
                      (Number(amount) * 1000) /
                      Number(getUsdtPrice ?? 1)
                    ).toFixed(3)
                  )
                }>
                <svg
                  className="h-5 w-5 text-neutral-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                </svg>
              </div>
            </div>

            <div className="flex gap-2 text-sm items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 339.43 295.27">
                  <path
                    d="M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z"
                    style={{ fill: "#26a17b", fillRule: "evenodd" }}></path>
                  <path
                    d="M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z"
                    style={{ fill: "#fff", fillRule: "evenodd" }}></path>
                </svg>
                <div>USDT-TRC20</div>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64">
                  <defs></defs>
                  <g id="tron">
                    <path
                      className="cls-1"
                      d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"
                      style={{ fill: "#ff060a" }}></path>
                  </g>
                </svg>
              </div>
            </div>

            <div
              id="qrcodeSection"
              className="flex flex-col items-center justify-center gap-3">
              <div
                id="qrcode"
                className="rounded-lg bg-white p-3 relative w-[200px] h-[200px] flex justify-center items-center"
                title="TVhFKkdPGh4TSDsFXXqKpP29nXAaBdBU5q">
                <div
                  id="qrcodeSkeleton"
                  className="absolute animate-pulse flex items-center justify-center w-[180px] h-[180px] rounded bg-gray-300 dark:bg-gray-700 hidden">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path>
                  </svg>
                </div>
                <img
                  src={`data:image/png;base64,${getCryptoInfo?.qrCode}`}
                  alt=""
                />
              </div>

              <div className="flex flex-row flex-wrap justify-center items-center gap-2 break-all">
                <div className="text-sm">{getCryptoInfo?.address}</div>
                <div
                  className="bg-[#e1efff] text-[#0076d0] text-sm flex items-center justify-center p-1 rounded w-fit clipboard-btn cursor-pointer"
                  onClick={() => handelCopy(getCryptoInfo?.address)}>
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                  </svg>
                </div>
              </div>

              <div className="text-neutral-text text-sm">
                Bạn có thể chuyển từ bất kỳ ví nào hoặc trao đổi sang địa chỉ
                trên
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-2 p-3 text-base text-secondary-text">
            <div className="flex justify-between items-center">
              <span className="text-neutral-text">
                Thời gian thanh toán còn lại
              </span>
              <span id="remainTimes">
                <CountdownTimer initialSeconds={3000} />
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-neutral-text">Tỷ giá hối đoái</span>
              <div className="flex flex-col items-end">
                <span>
                  1 USDT ≈ {getUsdtPrice && fNumber(getUsdtPrice)} VND
                </span>
                <small className="text-neutral-text">
                  nguồn
                  <a
                    href="https://p2p.binance.com/zh-CN/trade/buy/USDT"
                    className="text-[#f59d09] underline decoration-link-text decoration-solid decoration-1 underline-offset-2"
                    target="_blank">
                    {" "}
                    Binance{" "}
                  </a>
                  cung cấp
                </small>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-text">Giá đặt hàng</span>
              <span>
                {" "}
                {getUsdtPrice &&
                  ((Number(amount) * 1000) / Number(getUsdtPrice ?? 1)).toFixed(
                    3
                  )}
              </span>
            </div>
          </section>

          <section className="bg-[#fff] rounded p-3 flex flex-col gap-2 text-sm">
            <form
              x-data="{
                        txId: null,
                        onSubmit(e) {
                            if (!this.txId) return
                            e.target.classList.add('hidden')
                            $el.submit()
                        }
                    }"
              id="updateTransactionForm"
              className="flex flex-col gap-2"
              action="https://api.genai168.com/api/v1/third-party/update-deposit-transaction-hash"
              method="POST">
              <div className="flex justify-between items-center text-secondary-text">
                <span>
                  Chưa nhận được à? Điền ID giao dịch để tăng tốc độ thanh toán
                </span>
                <span className="text-[#0076d0]">
                  <svg
                    className="h-5 w-5 text-[#0076d0]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </span>
              </div>
              <p className="text-sm text-neutral-text">
                ID giao dịch có thể được truy vấn tại{" "}
                <a
                  className="text-[#f59d09] underline decoration-link-text decoration-solid decoration-1 underline-offset-2"
                  target="_blank"
                  href="https://tronscan.org">
                  Tronscan
                </a>{" "}
                Hỏi thăm
              </p>
              <input
                className="bg-[#f5f5f5] text-input-text placeholder-input-placeholder border-none rounded w-full px-3 py-1 outline-none text-sm"
                placeholder="Hash giao dịch hoặc TxID"
                name="transaction_hash"
                type="text"
                x-model="txId"
              />
              <button
                className="bg-[#e1efff] text-[#0076d0] rounded min-w-[50px] p-1 self-end h-fit disabled:opacity-50"
                type="button"
                disabled={true}>
                Gửi đi
              </button>
            </form>
          </section>

          <section className="bg-[#fff] text-card-text rounded p-3">
            <p className="mb-2 flex items-center justify-center text-card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Các biện pháp phòng ngừa
            </p>
            <ul className="ml-4 list-disc text-sm">
              <li>
                Địa chỉ này chỉ chấp nhận nạp tiền USDT-TRC20 không thể lấy lại
                các lần nạp tài sản khác!
              </li>
              <li>
                Vui lòng thanh toán theo đúng số tiền, nếu không nó sẽ không thể
                đến nơi!
              </li>
              <li>
                Một số nền tảng có thể khấu trừ phí xử lý từ số tiền chuyển, dẫn
                đến số tiền nhận được có lỗi. Hãy chú ý!
              </li>
            </ul>
          </section>
        </div>
        <footer className="p-2 border-t border-[#313131] text-card-text">
          <div className="flex justify-center">
            Nhà cung cấp Blockchain được đề xuất
          </div>
          <section
            className="grid xs:grid-cols-auto grid-cols-1 gap-y-4"
            style={{ gridTemplateColumns: "auto auto auto" }}>
            <a
              className="flex justify-center py-3 border-b-4 border-[#F0B90A] w-[134px] mt-auto mx-auto"
              href="https://www.binance.com/"
              target="_blank"
              rel="noreferrer">
              <svg
                style={{
                  height: "24px",
                  transform: "translateY(5px)",
                  fill: "#F0B90B",
                }}
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5120 1024">
                <path
                  d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                  p-id="2935"></path>
              </svg>{" "}
            </a>
            <a
              className="flex justify-center py-3 border-b-4 border-[#205fec] w-[134px] mt-auto mx-auto"
              href="https://www.okx.com/"
              target="_blank"
              rel="noreferrer">
              <svg
                className="text-secondary-text"
                height="30px"
                viewBox="0 0 1130.99 400.67"
                xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-.01 -.01)">
                  <path
                    d="m636.92 200.78a110.45 110.45 0 0 1 -6.36 37.73 92.2 92.2 0 0 1 -18.38 30.95 86.22 86.22 0 0 1 -29.67 21 108.28 108.28 0 0 1 -80.63 0 87.59 87.59 0 0 1 -29.82-21.07 89.09 89.09 0 0 1 -18.38-30.94 117.22 117.22 0 0 1 0-75.34 88.86 88.86 0 0 1 18.38-31.11 87.72 87.72 0 0 1 29.82-21 108.14 108.14 0 0 1 80.54 0 86.24 86.24 0 0 1 29.68 21.06 91.87 91.87 0 0 1 18.46 31.14 111.1 111.1 0 0 1 6.36 37.58zm-94.68 66.43a54 54 0 0 0 24.16-5 49.12 49.12 0 0 0 17.24-14 60 60 0 0 0 10.36-21.08 103.38 103.38 0 0 0 0-52.57 60.12 60.12 0 0 0 -10.32-21.07 49.12 49.12 0 0 0 -17.24-14 59.9 59.9 0 0 0 -48.34 0 49.12 49.12 0 0 0 -17.24 14 60.12 60.12 0 0 0 -10.32 21.07 103.38 103.38 0 0 0 0 52.57 60 60 0 0 0 10.33 20.92 48.85 48.85 0 0 0 17.25 14 53.92 53.92 0 0 0 24.16 5.14zm119.55 27.69v-188.22h39.57v90.44l65.29-90.44h45.79l-69.25 93 74.06 95.25h-48.9l-67-92.42v92.42zm171-188.22h113.11v31.37h-73.53v45.5h70.1v31.37h-70.1v48.62h74.34v31.36h-113.91zm254 0h43l-61.86 93.55 63.07 94.67h-43.24l-40.64-64.16-40.65 64.16h-43.36l63-94.68-61.81-93.56h43l39.85 63.62z"
                    fill="currentColor"></path>
                  <path
                    d="m178.78 178.78a90.69 90.69 0 0 0 43.14 0 90.81 90.81 0 0 1 66.52-66.52 90.69 90.69 0 1 0 -176.19 0 90.81 90.81 0 0 1 66.53 66.52z"
                    fill="#7abdf7"></path>
                  <path
                    d="m221.92 221.9a90.69 90.69 0 0 0 -43.14 0 90.84 90.84 0 0 1 -66.52 66.52 90.69 90.69 0 1 0 176.19 0 90.81 90.81 0 0 1 -66.53-66.52z"
                    fill="#0d74f5"></path>
                  <path
                    d="m310 109.65a90.59 90.59 0 0 0 -21.56 2.6 90.79 90.79 0 0 1 -66.51 66.51 90.69 90.69 0 0 0 0 43.14 90.81 90.81 0 0 1 66.51 66.52 90.69 90.69 0 1 0 21.56-178.79z"
                    fill="#4494f7"></path>
                  <path
                    d="m178.78 221.9a90.69 90.69 0 0 0 0-43.14 90.81 90.81 0 0 1 -66.52-66.51 90.69 90.69 0 1 0 0 176.19 90.82 90.82 0 0 1 66.52-66.54z"
                    fill="#005cf4"></path>
                  <path
                    d="m221.92 178.78a90.84 90.84 0 0 0 66.52-66.52 90.81 90.81 0 0 0 -66.52 66.52z"
                    fill="#186ef9"></path>
                  <path
                    d="m221.92 221.9a90.81 90.81 0 0 0 66.52 66.52 90.84 90.84 0 0 0 -66.52-66.52z"
                    fill="#0246f2"></path>
                  <path
                    d="m178.78 178.78a90.84 90.84 0 0 0 -66.52-66.52 90.84 90.84 0 0 0 66.52 66.52z"
                    fill="#0046f8"></path>
                  <path
                    d="m178.78 221.9a90.84 90.84 0 0 0 -66.52 66.52 90.84 90.84 0 0 0 66.52-66.52z"
                    fill="#0729f1"></path>
                  <path
                    d="m636.92 200.78a110.45 110.45 0 0 1 -6.36 37.73 92.2 92.2 0 0 1 -18.38 30.95 86.22 86.22 0 0 1 -29.67 21 108.28 108.28 0 0 1 -80.63 0 87.59 87.59 0 0 1 -29.82-21.07 89.09 89.09 0 0 1 -18.38-30.94 117.22 117.22 0 0 1 0-75.34 88.86 88.86 0 0 1 18.38-31.11 87.72 87.72 0 0 1 29.82-21 108.14 108.14 0 0 1 80.54 0 86.24 86.24 0 0 1 29.68 21.06 91.87 91.87 0 0 1 18.46 31.14 111.1 111.1 0 0 1 6.36 37.58zm-94.68 66.43a54 54 0 0 0 24.16-5 49.12 49.12 0 0 0 17.24-14 60 60 0 0 0 10.36-21.08 103.38 103.38 0 0 0 0-52.57 60.12 60.12 0 0 0 -10.32-21.07 49.12 49.12 0 0 0 -17.24-14 59.9 59.9 0 0 0 -48.34 0 49.12 49.12 0 0 0 -17.24 14 60.12 60.12 0 0 0 -10.32 21.07 103.38 103.38 0 0 0 0 52.57 60 60 0 0 0 10.33 20.92 48.85 48.85 0 0 0 17.25 14 53.92 53.92 0 0 0 24.16 5.14zm119.55 27.69v-188.22h39.57v90.44l65.29-90.44h45.79l-69.25 93 74.06 95.25h-48.9l-67-92.42v92.42zm171-188.22h113.11v31.37h-73.53v45.5h70.1v31.37h-70.1v48.62h74.34v31.36h-113.91zm254 0h43l-61.86 93.55 63.07 94.67h-43.24l-40.64-64.16-40.65 64.16h-43.36l63-94.68-61.81-93.56h43l39.85 63.62z"
                    fill="currentColor"></path>
                  <path
                    d="m178.78 178.78a90.69 90.69 0 0 0 43.14 0 90.81 90.81 0 0 1 66.52-66.52 90.69 90.69 0 1 0 -176.19 0 90.81 90.81 0 0 1 66.53 66.52z"
                    fill="#7abdf7"></path>
                  <path
                    d="m221.92 221.9a90.69 90.69 0 0 0 -43.14 0 90.84 90.84 0 0 1 -66.52 66.52 90.69 90.69 0 1 0 176.19 0 90.81 90.81 0 0 1 -66.53-66.52z"
                    fill="#0d74f5"></path>
                  <path
                    d="m310 109.65a90.59 90.59 0 0 0 -21.56 2.6 90.79 90.79 0 0 1 -66.51 66.51 90.69 90.69 0 0 0 0 43.14 90.81 90.81 0 0 1 66.51 66.52 90.69 90.69 0 1 0 21.56-178.79z"
                    fill="#4494f7"></path>
                  <path
                    d="m178.78 221.9a90.69 90.69 0 0 0 0-43.14 90.81 90.81 0 0 1 -66.52-66.51 90.69 90.69 0 1 0 0 176.19 90.82 90.82 0 0 1 66.52-66.54z"
                    fill="#005cf4"></path>
                  <path
                    d="m221.92 178.78a90.84 90.84 0 0 0 66.52-66.52 90.81 90.81 0 0 0 -66.52 66.52z"
                    fill="#186ef9"></path>
                  <path
                    d="m221.92 221.9a90.81 90.81 0 0 0 66.52 66.52 90.84 90.84 0 0 0 -66.52-66.52z"
                    fill="#0246f2"></path>
                  <path
                    d="m178.78 178.78a90.84 90.84 0 0 0 -66.52-66.52 90.84 90.84 0 0 0 66.52 66.52z"
                    fill="#0046f8"></path>
                  <path
                    d="m178.78 221.9a90.84 90.84 0 0 0 -66.52 66.52 90.84 90.84 0 0 0 66.52-66.52z"
                    fill="#0729f1"></path>
                </g>
              </svg>{" "}
            </a>
            <a
              className="flex justify-center py-3 border-b-4 border-[#0ca28b] w-[134px] mt-auto mx-auto"
              href="https://www.huobi.com/"
              target="_blank"
              rel="noreferrer">
              <svg
                className="text-secondary-text"
                width="146"
                height="22"
                viewBox="0 0 146 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.81397 7.13113C9.5437 10.1838 6.49467 12.9458 5.46395 14.6902C4.44818 16.4092 4.11269 18.0314 4.91683 21.2547C4.9312 21.3123 4.8754 21.364 4.82107 21.3401C3.76831 20.8779 1.26686e-06 19.16 0 14.6206C-1.68633e-06 8.57819 6.75312 8.42269 6.29261 0.0783011C6.28942 0.0203818 6.35279 -0.0207611 6.40126 0.0111051C8.68992 1.51574 10.0797 4.12935 9.81397 7.13113Z"
                  fill="#0CA28B"></path>
                <path
                  d="M5.41557 21.4489C5.38806 21.44 5.36867 21.4146 5.36711 21.3857C5.25704 19.3529 6.33799 18.0328 7.55217 17.057C10.3294 14.8251 11.9935 11.7756 11.0962 8.24596C11.0785 8.17596 11.1618 8.12561 11.2117 8.17782C11.9271 8.92642 12.726 10.1589 13.1373 11.0183C14.8366 14.6687 13.9297 18.852 9.86355 20.9631C8.5684 21.606 7.02633 21.9704 5.41557 21.4489Z"
                  fill="#3BBEAA"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.1993 5.53906V11.8425H21.1481V6.35009C21.1481 5.9021 20.7948 5.53906 20.3587 5.53906H18.3164V20.5605C18.3164 21.0082 18.67 21.3715 19.1058 21.3715H21.1481V14.385H27.1993V20.5605C27.1993 21.0082 27.5526 21.3715 27.9887 21.3715H30.031V6.35009C30.031 5.9021 29.6774 5.53906 29.2414 5.53906H27.1993Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.3187 9.26584V16.777C39.3187 17.4595 38.9732 18.1065 38.3873 18.4478C36.751 19.4009 35.0581 18.2105 35.0581 16.6407V10.0776C35.0581 9.62908 34.6976 9.26562 34.2527 9.26562H32.1604H32.1602V16.9087C32.1602 19.3676 34.1561 21.3795 36.5952 21.3795H37.7812C40.2206 21.3795 42.2163 19.3676 42.2163 16.9085V10.0776C42.2163 9.62908 41.8558 9.26562 41.4111 9.26562H39.3187V9.26584Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M71.4674 21.3723H73.5157V10.7194C73.5157 10.2703 73.1611 9.90625 72.724 9.90625H70.6758V20.5589C70.6758 21.0081 71.0301 21.3723 71.4674 21.3723Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M72.115 8.69845C72.9873 8.69845 73.6945 7.99125 73.6945 7.11876C73.6945 6.24626 72.9873 5.53906 72.115 5.53906C71.2424 5.53906 70.5352 6.24626 70.5352 7.11876C70.5352 7.99125 71.2424 8.69845 72.115 8.69845Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.3884 16.3479C52.3884 17.791 51.225 18.7518 49.8028 18.7518C48.3807 18.7518 47.2173 17.791 47.2173 16.3479V14.2884C47.2173 12.8453 48.3807 11.8845 49.8028 11.8845C51.225 11.8845 52.3884 12.8453 52.3884 14.2884V16.3479ZM49.8028 9.26562C46.7963 9.26562 44.3359 11.4483 44.3359 14.4994V16.1497C44.3359 19.201 46.7963 21.3707 49.8028 21.3707C52.8096 21.3707 55.2695 19.201 55.2695 16.1497V14.4994C55.2695 11.4483 52.8096 9.26562 49.8028 9.26562Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.5071 16.3521C65.5071 17.7942 64.3359 18.7544 62.9048 18.7544C61.4734 18.7544 60.3024 17.7942 60.3024 16.3521V14.294C60.3024 12.8518 61.4734 11.8917 62.9048 11.8917C64.3359 11.8917 65.5071 12.8518 65.5071 14.294V16.3521ZM62.9048 9.27459C61.9588 9.27459 61.067 9.48755 60.2874 9.87367V6.34918C60.2874 5.90179 59.9272 5.53906 59.4832 5.53906H57.4023V16.154C57.4023 19.2032 59.8784 21.3715 62.9048 21.3715C65.9309 21.3715 68.407 19.2032 68.407 16.154V14.5048C68.407 11.4558 65.9309 9.27459 62.9048 9.27459Z"
                  fill="currentColor"></path>
                <path
                  d="M145.992 21.3172V19.4905C145.992 19.3878 145.972 19.2861 145.933 19.1912C145.894 19.0964 145.837 19.0103 145.765 18.9379C145.693 18.8655 145.607 18.8082 145.513 18.7693C145.419 18.7304 145.319 18.7108 145.217 18.7114H143.796C142.628 18.7114 142.682 18.1193 142.682 16.5898V6.344C142.682 6.13715 142.601 5.93874 142.457 5.79225C142.313 5.64575 142.117 5.56313 141.912 5.5625H139.809V16.9446C139.809 19.6991 140.519 21.3196 143.45 21.3196C144.585 21.3196 145.409 21.286 146.001 21.3196L145.992 21.3172Z"
                  fill="currentColor"></path>
                <path
                  d="M90.825 11.9203H85.2975V13.4538C85.2975 13.5633 85.3187 13.6717 85.3598 13.7729C85.4009 13.8741 85.4612 13.966 85.5371 14.0434C85.6131 14.1209 85.7033 14.1823 85.8026 14.2242C85.9019 14.2661 86.0082 14.2877 86.1157 14.2877H88.7349V15.6415C88.7349 16.6407 88.4997 17.3787 87.9848 17.8986C87.3412 18.5146 86.4988 18.8695 85.6162 18.8964C84.7337 18.9233 83.8719 18.6204 83.1932 18.0448C82.4456 17.2972 82.2833 16.4849 82.2833 13.4754C82.2833 10.4658 82.4456 9.6751 83.1932 8.92271C83.7458 8.37399 84.8202 7.96425 85.7137 7.96425C88.7302 7.96425 89.7411 9.05449 90.4982 10.0489H90.5969V7.82767C90.5951 7.66541 90.5577 7.50563 90.4873 7.36008C90.4169 7.21453 90.3154 7.08691 90.1902 6.98662C88.9276 5.95629 87.6674 5.58009 85.4879 5.58009C83.8479 5.53912 82.2546 6.13925 81.0349 7.25739C79.375 8.78373 79.375 10.509 79.375 13.3628V13.6024C79.375 16.4562 79.375 18.1814 81.0349 19.7077C82.3072 20.8065 83.9269 21.3986 85.5945 21.3743C87.262 21.3501 88.8645 20.7113 90.1056 19.5759C91.1824 18.5216 91.622 16.5041 91.622 14.4051V12.7589C91.6234 12.5406 91.5406 12.3305 91.3916 12.1737C91.2425 12.0169 91.0391 11.9259 90.825 11.9203Z"
                  fill="currentColor"></path>
                <path
                  d="M99.9724 21.3172V19.4905C99.9724 19.3878 99.9523 19.2861 99.9133 19.1912C99.8744 19.0964 99.8172 19.0103 99.7452 18.9379C99.6732 18.8655 99.5878 18.8082 99.4938 18.7693C99.3999 18.7304 99.2992 18.7108 99.1977 18.7114H97.7763C96.6084 18.7114 96.6629 18.1193 96.6629 16.5898V6.344C96.6629 6.13674 96.5815 5.93796 96.4366 5.7914C96.2918 5.64484 96.0954 5.5625 95.8905 5.5625H93.7773V16.9446C93.7773 19.6991 94.4881 21.3196 97.4209 21.3196C98.5557 21.3196 99.3801 21.286 99.9724 21.3196V21.3172Z"
                  fill="currentColor"></path>
                <path
                  d="M107.455 9.27344C104.467 9.27344 102.023 11.4545 102.023 14.5081V16.1584C102.023 19.2095 104.467 21.3785 107.455 21.3785C110.442 21.3785 112.886 19.2095 112.886 16.1584V14.5081C112.886 11.4569 110.444 9.27344 107.455 9.27344ZM110.022 16.3668C110.022 17.8209 108.867 18.7709 107.452 18.7709C106.038 18.7709 104.885 17.8015 104.885 16.3668V14.3069C104.885 12.8529 106.041 11.9029 107.452 11.9029C108.864 11.9029 110.022 12.8722 110.022 14.3069V16.3668Z"
                  fill="currentColor"></path>
                <path
                  d="M136.425 10.3484C135.574 9.6542 134.328 9.30469 132.721 9.30469C132.097 9.30631 131.474 9.34979 130.856 9.43485C130.342 9.50475 129.615 9.60599 129.11 9.72411C128.904 9.77231 128.873 9.93382 128.873 10.1315V11.6934C128.873 11.9706 128.873 12.2238 129.164 12.1514C129.705 12.0189 130.752 11.7826 131.039 11.7344C131.52 11.6571 132.007 11.6192 132.494 11.6211C133.299 11.6211 133.916 11.7682 134.318 12.055C134.721 12.3419 134.892 12.8432 134.892 13.5881V13.6797C134.75 13.6652 134.591 13.6532 134.418 13.6411C134.096 13.6194 133.686 13.6074 133.186 13.6074C132.521 13.6065 131.859 13.6874 131.214 13.8484C130.616 13.9913 130.045 14.2358 129.527 14.5715C129.042 14.8895 128.636 15.3177 128.342 15.8226C128.043 16.355 127.892 16.9597 127.904 17.5726C127.888 18.1714 128.017 18.765 128.28 19.3009C128.532 19.7889 128.901 20.2036 129.354 20.5061C129.859 20.8355 130.423 21.0623 131.013 21.1738C131.706 21.3131 132.412 21.3801 133.119 21.3739C133.683 21.3739 137.735 21.316 137.735 19.3539V13.67C137.728 12.1659 137.29 11.045 136.425 10.3484ZM134.887 15.9142V18.9369C134.664 18.9803 134.42 19.014 134.155 19.0381C133.519 19.1049 132.879 19.1089 132.243 19.0502C131.99 19.0283 131.743 18.9597 131.515 18.8477C131.304 18.7406 131.124 18.5804 130.991 18.3825C130.837 18.1267 130.765 17.8285 130.785 17.5292C130.768 17.2801 130.816 17.0307 130.926 16.8072C131.035 16.5837 131.202 16.3943 131.408 16.2589C131.854 15.9672 132.527 15.8177 133.413 15.8177C133.65 15.8177 133.942 15.8322 134.288 15.8611C134.513 15.8732 134.712 15.8925 134.887 15.9093V15.9142Z"
                  fill="currentColor"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M123.085 16.3521C123.085 17.7942 121.914 18.7544 120.483 18.7544C119.052 18.7544 117.881 17.7942 117.881 16.3521V14.294C117.881 12.8518 119.052 11.8917 120.483 11.8917C121.914 11.8917 123.085 12.8518 123.085 14.294V16.3521ZM120.483 9.27459C119.537 9.27459 118.645 9.48755 117.866 9.87367V6.34918C117.866 5.90179 117.505 5.53906 117.061 5.53906H114.98V16.154C114.98 19.2032 117.457 21.3715 120.483 21.3715C123.509 21.3715 125.985 19.2032 125.985 16.154V14.5048C125.985 11.4558 123.509 9.27459 120.483 9.27459Z"
                  fill="currentColor"></path>
              </svg>{" "}
            </a>
          </section>
        </footer>
      </div>
    </div>
  );
}
