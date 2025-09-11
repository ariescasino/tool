/* eslint-disable react-hooks/exhaustive-deps */
import paymentService from "@/api/services/payment.service";
import { fNumber } from "@/utils/format-number";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { use, useEffect, useMemo, useState } from "react";
import styles from "../BankPort/BankPort.module.css";
import { IInfo, IItemBankIn } from "@/type";
import { proposePriceCard } from "@/constant/proposePrice";
import isSafari from "@/utils/isSafari";
import { useWindowSize } from "react-use";
import { CheckCircleFilled } from "@ant-design/icons";

const configItem = [
  {
    name: "CTEK  - 789BET",
    id: 1,
    min: 50,
    max: 1000,
  },
  {
    name: "BTCPAY - 789BET",
    id: 2,
    min: 50,
    max: 1000,
  },
  {
    name: "VIPPay thẻ cào",
    id: 2,
    min: 50,
    max: 1000,
  },
];

export default function CardPort({ info }: { info: undefined | IInfo }) {
  const [form] = Form.useForm();
  const [listBankIn, setListBankIn] = useState<undefined | IItemBankIn[]>(
    undefined
  );
  const [bankSelected, setBankSelected] = useState<undefined | number>(
    configItem[0].id
  );
  const [isError, setIsError] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { data: dataBankIn } = useQuery({
    queryFn: () => paymentService.getListBankIn(),
    queryKey: ["getListBankIn"],
  });

  const { width } = useWindowSize();

  useEffect(() => {
    if (dataBankIn) {
      setListBankIn(dataBankIn);
      setBankSelected(1);
      if (width < 768) {
        setBankSelected(undefined);
      }
    }
  }, [dataBankIn, width]);

  const rate = info?.rate ?? 0;
  const cashoutRate = info?.cashoutRate ?? 0;
  const valueFeePoint = Form.useWatch("price", form) / 10;
  const valuePointToVnd =
    (cashoutRate - rate === 0 ? 0 : valueFeePoint) / cashoutRate || 0; //điểm phí quy đổi ra tiền

  const inputValueToVnd = Form.useWatch("price", form) / cashoutRate || 0; //điểm quy đổi ra tiền
  const realPoint = (inputValueToVnd - valuePointToVnd) * cashoutRate || 0; //số điểm thực tế khách phải chuyển khoản
  const realVND = inputValueToVnd - valuePointToVnd || 0; //số điểm thực tế khách phải chuyển khoản quy đổi ra tiền

  const minMoney =
    configItem.find((data) => data.id === bankSelected)?.min || 20;

  const maxMoney =
    configItem.find((data) => data.id === bankSelected)?.max || 350000;

  const onValuesChange = (_: any, values: any) => {
    if (values.price === "" || values.bank === null) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const onFinish = (values: any) => {
    if (isSafari()) {
      // Chuyển hướng nếu là Safari
      window.location.href = `/transfer/card?a=${values.price}`;
    } else {
      window.location.href = `/transfer/card?a=${values.price}`;
    }
  };

  const optionSelected = useMemo(() => {
    if (bankSelected) {
      return configItem.find((item) => item.id === bankSelected);
    }
  }, [bankSelected]);

  useEffect(() => {
    if (inputValueToVnd === 0) {
      setHasError(true);
      setIsError(true);
    } else if (inputValueToVnd > 0 && inputValueToVnd < minMoney * 1000) {
      setHasError(true);
      setIsError(true);
    } else if (inputValueToVnd > maxMoney * 1000) {
      setHasError(true);
      setIsError(true);
    } else {
      setHasError(false);
      setIsError(false);
    }
  }, [inputValueToVnd, optionSelected, inputValueToVnd, bankSelected]);

  const validateError = () => {
    if (hasError && inputValueToVnd === 0) {
      return (
        <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-xs pb-4 ">
          <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
          Vui lòng điền vào số tiền gửi
        </div>
      );
    } else if (
      hasError &&
      inputValueToVnd > 0 &&
      inputValueToVnd < (minMoney * 1000 || 20 * 1000)
    ) {
      return (
        <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-xs pb-4 ">
          <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
          Số tiền gửi phải trên {fNumber(minMoney)}
        </div>
      );
    } else if (hasError && inputValueToVnd > maxMoney * 1000) {
      return (
        <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-xs  ">
          <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
          Giới hạn 1 giao dịch không vượt quá {fNumber(maxMoney)}
        </div>
      );
    }
  };

  return (
    <div
      style={{ fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif` }}>
      {/* Giao diện màn máy tính */}
      <div className="hidden md:block">
        <div className={styles.container}>
          <div className={styles.listBank}>
            {configItem.map((item) => (
              <div
                className={`${styles.itemBank} ${
                  bankSelected === item.id ? styles.itemActive : ""
                }`}
                onClick={() => setBankSelected(item.id)}
                key={item.id}>
                <div className={styles.name}>{item.name}</div>
                <div className="text-white text-[15px]">
                  Giới hạn nạp tối thiểu <span>{item.min}</span> ~
                  <span>{item.max}</span>
                </div>
                <div
                  className={`absolute bottom-4 right-4 rounded-full w-5 h-5 bg-white flex items-center justify-center`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    fontSize={14}
                    className={styles.icon}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bb} />
          <Form
            name="basic"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{
              fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
            }}
            onValuesChange={onValuesChange}>
            <div className="grid-cols-2 py-5 px-[30px] text-white">
              <div className="text-sm mb-[5px]">
                Cảnh báo : Tuyệt đối không lấy thông tin ngân hàng,nội dung nạp
                từ người thứ 3 hoặc đại lý ( cẩn thận bị lừa đảo ).789BET chỉ hỗ
                trợ các thông tin hiển thị trên hệ thống ,ngoài ra tất cả là
                giả.
              </div>
              <div className="text-base">
                Số tiền được đề xuất để thanh toán：
              </div>
              <div className="flex flex-wrap ">
                {proposePriceCard.map((item) => (
                  <div
                    onClick={() => {
                      form.setFields([
                        {
                          name: "price",
                          value: item,
                          errors: [],
                        },
                      ]);
                    }}
                    className={styles.itemPrice}
                    key={item}>
                    {fNumber(item)}
                  </div>
                ))}
              </div>
              <div>Nạp tiền :</div>

              <div className={styles.boxInput}>
                <Form.Item
                  name="price"
                  validateStatus={hasError ? "error" : ""}
                  help={validateError()}>
                  <Input
                    addonBefore={<div className="bg-gray-500" />}
                    type="number"
                    placeholder="Vui lòng nhập số tiền"
                    className={isError ? styles.input : styles.inputNotErr}
                  />
                </Form.Item>
                <div className={styles.vl}>
                  = {fNumber(inputValueToVnd)} VNĐ
                </div>
              </div>

              <div className="mt-4">
                Phí thủ tục: {fNumber(valueFeePoint) || 0}
              </div>
              <div>= {fNumber(valuePointToVnd) || 0} VNĐ</div>

              <div className="mt-4">
                Thực tế chuyển khoản： {fNumber(realPoint)}
              </div>
              <div>= {fNumber(realVND)} VNĐ</div>

              <Button
                htmlType="submit"
                disabled={isError}
                className={styles.btnSubmit}>
                Thanh toán ngay bây giờ
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* Giao diện màn mobile*/}
      <div className="md:hidden block">
        <div className="p-4 pb-8">
          {bankSelected ? (
            <>
              <Form
                name="basic"
                layout="vertical"
                form={form}
                onFinish={onFinish}
                style={{
                  fontFamily: `Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                }}
                onValuesChange={onValuesChange}>
                <div className="grid-cols-2 text-[#808080]">
                  <div className="mb-1 break-words text-lg font-bold text-black">
                    {configItem.find((data) => data.id === bankSelected)?.name}
                  </div>
                  <div className="border-b border-[#ccc]">
                    <div className="mb-[12px] text-[13px] text-[#999]">
                      Giới hạn tối thiểu : &nbsp;&nbsp;&nbsp;
                      {configItem.find((data) => data.id === bankSelected)?.min}
                      ~
                      {configItem.find((data) => data.id === bankSelected)?.max}
                    </div>
                  </div>

                  <div className="text-[12px] mb-[5px] text-black">
                    Cảnh báo : Tuyệt đối không lấy thông tin ngân hàng,nội dung
                    nạp từ người thứ 3 hoặc đại lý ( cẩn thận bị lừa đảo
                    ).789BET chỉ hỗ trợ các thông tin hiển thị trên hệ thống
                    ,ngoài ra tất cả là giả.
                  </div>
                  <div className="py-6">
                    <div className="text-base font-bold mb-[12px] text-black">
                      Số tiền được đề xuất để thanh toán
                    </div>
                    <div className="flex flex-wrap ">
                      {proposePriceCard.map((item) => (
                        <div
                          onClick={() => form.setFieldValue("price", item)}
                          className={styles.itemPriceMobile}
                          key={item}>
                          {fNumber(item)}
                        </div>
                      ))}
                    </div>
                    <div className="text-base font-bold mb-[12px] text-black">
                      Nạp tiền :
                    </div>

                    <div className={styles.boxInput} style={{ width: "100%" }}>
                      <Form.Item
                        name="price"
                        className="w-full"
                        validateStatus={hasError ? "error" : ""}
                        help={validateError()}>
                        <Input
                          addonBefore={<div className="bg-gray-500" />}
                          type="number"
                          placeholder="Vui lòng nhập số tiền"
                          className={
                            isError ? styles.input : styles.inputNotErr
                          }
                          style={{ width: "100%" }}
                          min={0}
                        />
                      </Form.Item>
                      <div className={styles.vlMobile} style={{ fontSize: 16 }}>
                        = {fNumber(inputValueToVnd)} VNĐ
                      </div>
                    </div>
                    {inputValueToVnd ? (
                      ""
                    ) : (
                      <div className="md:text-[#a94442] text-[#ff1c4b] flex items-center  text-sm mb-[12px]">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          color="#ff1c4b"
                          fontSize={15}
                        />
                        Số tiền nạp phải lớn hơn: {fNumber(minMoney)}
                      </div>
                    )}

                    <div className="mt-4 text-[16px] text-black">
                      Phí thủ tục: {fNumber(valueFeePoint || 0)}
                    </div>
                    <div className="text-[16px] leading-[1] text-black">
                      = {fNumber(valuePointToVnd || 0)} VNĐ
                    </div>

                    <div className="mt-4 text-[16px] text-black">
                      Thực tế chuyển khoản： {fNumber(realPoint)}
                    </div>
                    <div className="text-[16px] leading-[1] text-black">
                      = {fNumber(realVND)} VNĐ
                    </div>

                    <Button
                      htmlType="submit"
                      disabled={isError}
                      className={
                        !inputValueToVnd
                          ? styles.btnSubmitMobile
                          : isError
                            ? styles.btnSubmitMobile
                            : styles.btnSubmitMobileSuccess
                      }>
                      Xác nhận nạp tiền
                    </Button>
                    <Button
                      onClick={() => setBankSelected(undefined)}
                      className={styles.buttonNextMethod}>
                      Lựa chọn kênh nạp tiền khác
                    </Button>
                  </div>
                </div>
              </Form>
            </>
          ) : (
            <>
              <div className="custom-deposit-tip-color text-left text-[16px] font-bold text-black mb-[12px]">
                Cảnh báo : Tuyệt đối không lấy thông tin ngân hàng,nội dung nạp
                từ người thứ 3 hoặc đại lý ( cẩn thận bị lừa đảo ).789BET chỉ hỗ
                trợ các thông tin hiển thị trên hệ thống ,ngoài ra tất cả là
                giả.：
              </div>
              <div className={styles.listBankMobile}>
                {configItem.map((item) => (
                  <div
                    className={`${styles.itemBankMobile} ${
                      bankSelected === item.id ? styles.itemActive : ""
                    }`}
                    onClick={() => setBankSelected(item.id)}
                    key={item.id}>
                    <div className={styles.itemNameMobile}>{item.name}</div>
                    <div className="text-[13px] text-[#999]">
                      Giới hạn nạp tối thiểu:&nbsp;&nbsp;&nbsp;
                      <span>{item.min}</span> ~<span>{item.max}</span>
                    </div>
                    <i className="fas fa-check-circle custom-deposit-color-r absolute top-[15px] right-2 text-xl normal text-[#ccc]" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
