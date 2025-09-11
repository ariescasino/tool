/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable @next/next/no-img-element */
import { Col, Divider, Row, Spin } from "antd";
import styles from "../../../styles/bank.module.css";
import { CopyOutlined, LoadingOutlined } from "@ant-design/icons";
import { useCopyToClipboard, useDebounce, useEffectOnce } from "react-use";
import paymentService from "@/api/services/payment.service";
import { useEffect, useState } from "react";

import { fNumberVND } from "@/utils/format-number";
import { useSearchParams } from "next/navigation";

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

export default function BankTransfer() {
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
    <div className="w-full h-full flex justify-center md:items-center max-md:overflow-auto max-md:justify-start max-md:block max-md:pb-[100px] bg-white">

    <div className={`w-full max-w-[750px]  ${styles.layoutBank}`}>
      <div className={` h-full mt-0 md:mt-[40px] text-black py-5 px-10`}>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className={styles.codeInfo}>Số tiền</div>
            <div className={styles.codeInfo}>
              {amount && dataBank.rate ? fNumberVND(parseInt(amount) / dataBank.rate) : 0} VNĐ
            </div>
          </div>

          <div className="flex flex-col">
            <div className={styles.codeInfo}>Mã ký quỹ</div>
            <div className={styles.codeInfo}>{dataBank.content}</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons-bank/MB.png" className="h-[60px]" alt="" /> */}
          <img
            className="w-[280px] h-[280px] mb-[10px]"
            src={`data:image/png;base64,${dataBank.qrBase64}`}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[400px] w-full grid grid-cols-1 items-center justify-center">
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Ngân hàng
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                <div>{dataBank.bankName}</div>
                <CopyOutlined
                  style={{ fontSize: "24px", color: "#1890ff" }}
                  onClick={() => copyToClipboard(dataBank.bankName)}
                />
              </Col>
            </Row>
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Số Tài Khoản:
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                <div>{dataBank.bankNumber}</div>
                <CopyOutlined
                  onClick={() => copyToClipboard(dataBank.bankNumber)}
                  style={{ fontSize: "24px", color: "#1890ff" }}
                />
              </Col>
            </Row>
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Tên Tài Khoản:
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                {dataBank.bankAccountName}
              </Col>
            </Row>
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Số tiền:
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                <div
                  style={{
                    color: "green",
                  }}
                >
                  {amount && dataBank.rate ? fNumberVND(parseInt(amount) / dataBank.rate) : 0}
                </div>
                <CopyOutlined
                  onClick={() => {
                    amount && dataBank.rate
                      ? copyToClipboard((parseInt(amount) / dataBank.rate || 0).toString())
                      : copyToClipboard("0");
                  }}
                  style={{ fontSize: "24px", color: "#1890ff" }}
                />
              </Col>
            </Row>
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Nội Dung CK:
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {dataBank.content}
                </div>
                <CopyOutlined
                  onClick={() => copyToClipboard(dataBank.content)}
                  style={{ fontSize: "24px", color: "#1890ff" }}
                />
              </Col>
            </Row>
            <Row className={styles.boxInfo}>
              <Col
                className={styles.itemInfo}
                span={7}
              >
                Thời gian còn lại:
              </Col>

              <Col
                className={styles.itemInfo}
                span={17}
              >
                <div
                  style={{
                    color: "red",
                  }}
                >
                  <CountdownTimer initialSeconds={900} />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="my-0 px-0 md:my-5 md:px-[55px] text-[14px] f-bank">
          <p style={{ color: "red" }}>
            Sử dụng ứng dụng ngân hàng của bạn để quét mã QR để hoàn tất chuyển khoản nhanh chóng! !
            !
          </p>
          <div className="pt-5">
            <p>
              Vui lòng nhất định phải điền Nội Dung CK {' '}
              <span style={{ color: "red" }}>
                 
                <span
                  className="cursor-pointer"
                  onClick={() => copyToClipboard(dataBank.content)}
                >
                  {dataBank.content}
                </span> 
              </span>
              {' '}
              phía trên khi chuyển khoản.
            </p>
            <p style={{ color: "red" }}>
              <span>
                (Nếu không điền đủ thông tin nội dung chuyển khoản, giao dịch của bạn sẽ phải chờ để
                được xử lý)
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Divider className="text-[#ff0000] m-0 h-[2px]" />
      </div>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "#fff" }}
                spin
              />
            }
          />
        </div>
      )}
    </div>
    </div>
  );
}
