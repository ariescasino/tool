import paymentService from "@/api/services/payment.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import styles from "../BankPort/BankPort.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { fNumber } from "@/utils/format-number";
import { Button, Form, Input, Select } from "antd";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { IInfo } from "@/type";
import { proposePriceMomo, configItem } from "@/constant/proposePrice";
import { useWindowSize } from "react-use";

export default function MomoPort({ info }: { info: undefined | IInfo }) {
  const section = document.getElementById("boxInput");
  const procedureFee = 1 - (info?.rate || 1);
  const [form] = Form.useForm();

  const [bankSelected, setBankSelected] = useState<undefined | number>(
    undefined
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
      setBankSelected(1);
      if (width < 768) {
        setBankSelected(undefined);
      }
    }
  }, [dataBankIn, width]);

  const inputValue = Form.useWatch("price", form) || 0;

  const valueFeePoint =
    inputValue - inputValue * (1 * 1000 - procedureFee * 1000) || 0;
  const valuePointToVnd = valueFeePoint * 1000 || 0;

  const inputValueToVnd = Form.useWatch("price", form) * 1000 || 0;
  const realPoint = inputValueToVnd - valuePointToVnd || 0;
  const realVND = inputValueToVnd - valuePointToVnd || 0;

  const onValuesChange = (_: any, values: any) => {
    if (values.price === "" || values.bank === null) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const optionSelected = useMemo(() => {
    if (bankSelected) {
      return configItem.find((item) => item.id === bankSelected);
    }
  }, [bankSelected]);

  const onFinish = (values: any) => {
    window.open(`/transfer/momo?a=${values.price}`, "_blank");
  };

  const maxMoney = useMemo(() => {
    if (optionSelected) {
      return optionSelected.max;
    }
    return 0;
  }, [optionSelected]);

  const minMoney = useMemo(() => {
    if (optionSelected) {
      return optionSelected.min;
    }
    return 0;
  }, [optionSelected]);

  const [textError, setTextError] = useState("");

  useEffect(() => {
    if (inputValueToVnd === 0) {
      setHasError(true);
      setIsError(true);
      setTextError("Vui lòng điền vào số tiền nạp");
    } else if (inputValue > 0 && inputValue < minMoney) {
      setHasError(true);
      setIsError(true);
      setTextError("Số tiền nạp phải trên " + fNumber(minMoney * 1000));
    } else if (inputValue > maxMoney) {
      setHasError(true);
      setIsError(true);
      setTextError(
        "Giới hạn 1 giao dịch không vượt quá " + fNumber(maxMoney * 1000)
      );
    } else {
      setTextError("");
      setHasError(false);
      setIsError(false);
    }
  }, [
    inputValueToVnd,
    optionSelected,
    inputValue,
    bankSelected,
    minMoney,
    maxMoney,
  ]);

  const validateError = () => {
    return textError ? (
      <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal text-base">
        <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
        {textError}
      </div>
    ) : (
      ""
    );
  };

  return (
    <>
      {/* Giao diện màn máy tính */}
      <div className="hidden md:block">
        <div className={styles.container}>
          <div className={styles.listBank}>
            {configItem.map((item) => (
              <div
                className={`${styles.itemBank} ${
                  bankSelected === item.id ? styles.itemActive : ""
                }`}
                onClick={() => {
                  setBankSelected(item.id);
                  section && section.scrollIntoView({ behavior: "smooth" });
                }}
                key={item.id}>
                <div className={styles.name}>{item.name}</div>
                <div className="text-white text-[15px]">
                  Giới hạn nạp tối thiểu <span>{fNumber(item.min)}</span> ~
                  <span>{fNumber(item.max)}</span>
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
            onValuesChange={onValuesChange}>
            <div
              className="grid-cols-2 py-5 px-[30px] text-white"
              id="boxInput">
              <div className="text-base font-normal">
                <p className="text-sm">
                  Cảnh báo : Tuyệt đối không lấy thông tin ngân hàng,nội dung
                  nạp từ người thứ 3 hoặc đại lý ( cẩn thận bị lừa đảo ).789BET
                  chỉ hỗ trợ các thông tin hiển thị trên hệ thống ,ngoài ra tất
                  cả là giả.
                </p>
                Số tiền được đề xuất để thanh toán：
              </div>
              <div className="flex flex-wrap ">
                {proposePriceMomo.map((item) => (
                  <div
                    onClick={() => form.setFieldValue("price", item)}
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
                  className="w-full"
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
        <div className="px-4 pt-4 pb-6">
          {bankSelected ? (
            <>
              <Form
                name="basic"
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onValuesChange={onValuesChange}>
                <div className="grid-cols-2 text-[#808080]">
                  <div className="mb-1 break-words text-lg font-bold text-black">
                    {configItem.find((data) => data.id === bankSelected)?.name}
                  </div>
                  <div className="border-b border-[#ccc]">
                    <div className="mb-[12px]">
                      Giới hạn tối thiểu : &nbsp;&nbsp;&nbsp;
                      {
                        configItem.find((data) => data.id === bankSelected)?.min
                      }{" "}
                      ~
                      {configItem.find((data) => data.id === bankSelected)?.max}
                    </div>
                  </div>

                  <div className="text-[12px] mb-[5px]">
                    Vui lòng nhập chính xác nội dung chuyển khoản. Liên hệ CSKH
                    nếu cần hỗ trợ.
                  </div>
                  <div className="py-6">
                    <div className="text-base font-bold mb-[12px] text-black">
                      Số tiền được đề xuất để thanh toán
                    </div>
                    <div className="flex flex-wrap ">
                      {proposePriceMomo.map((item) => (
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
                        help={validateError()}>
                        <Input
                          addonBefore={<div className="bg-gray-500" />}
                          type="number"
                          placeholder="Vui lòng nhập số tiền"
                          className={
                            isError ? styles.input : styles.inputNotErr
                          }
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <div className={styles.vlMobile} style={{ fontSize: 16 }}>
                        = {fNumber(inputValueToVnd)} VNĐ
                      </div>
                    </div>
                    {inputValueToVnd ? (
                      ""
                    ) : (
                      <div className="text-[#ff1c4b] flex items-center pt-2 text-sm mb-[12px]">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          color="#ff1c4b"
                        />
                        Số tiền nạp phải lớn hơn: {fNumber(optionSelected?.min)}
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
                          : hasError
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
                Vui lòng nhấp vào bên dưới để chọn tài khoản thanh toán bạn muốn
                sử dụng：
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
                      <span className="">{item.min}</span> ~{" "}
                      <span className="">{item.max}</span>
                    </div>
                    <i className="fas fa-check-circle custom-deposit-color-r absolute top-[15px] right-2 text-xl normal text-[#ccc]" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
