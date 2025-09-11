import paymentService from "@/api/services/payment.service";
import { fNumber } from "@/utils/format-number";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select, Radio } from "antd";
import { useEffect, useState } from "react";
import styles from "../BankPort/BankPort.module.css";
import isSafari from "@/utils/isSafari";
import { IInfo, IItemBankIn } from "@/type";
import { proposePriceUSDT } from "@/constant/proposePrice";
import { useWindowSize } from "react-use";
import { CheckCircleFilled } from "@ant-design/icons";

const configItem: {
  name: string;
  id: number;
  min: number;
  max: number;
}[] = [
    {
      name: `RC USDT - 789BET`,
      id: 1,
      min: 50,
      max: 2000000,
    },
    // {
    //   name: `USDT RC`,
    //   id: 2,
    //   min: 50,
    //   max: 3000000,
    // },
  ];

export default function USDTPort({ info }: { info?: IInfo }) {
  const [form] = Form.useForm();
  const [listBankIn, setListBankIn] = useState<undefined | IItemBankIn[]>(
    undefined
  );
  const [bankSelected, setBankSelected] = useState<undefined | number>(
    configItem[0].id
  );
  const [isError, setIsError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { data: Crypto } = useQuery({
    queryFn: () =>
      paymentService.sendCryptoTrx({ trxId: 1, network: "TRC20/ERC20" }),
    queryKey: ["sendCryptoTrx"],
  });

  const inputValueToVnd = Form.useWatch("price", form) || 0;

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
      window.location.href = `/transfer/usdt?a=${values.price}&n=${values.bank}`;
    } else {
      window.open(
        `/transfer/usdt?a=${values.price}&n=${values.bank}`,
        "_blank"
      );
    }
  };

  const bankValue = Form.useWatch("bank", form);

  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setBankSelected(undefined);
    }
  }, [width]);

  const selectOption =
    bankSelected && configItem.find((item) => item.id === bankSelected);

  const minMoney =
    configItem.find((item) => item.id === bankSelected)?.min || 0;

  const maxMoney =
    configItem.find((item) => item.id === bankSelected)?.max || 0;

  useEffect(() => {
    if (inputValueToVnd === 0) {
      setHasError(true);
      setIsError(true);
    } else if (inputValueToVnd > 0 && inputValueToVnd < Number(minMoney)) {
      setHasError(true);
      setIsError(true);
    } else if (inputValueToVnd > Number(maxMoney)) {
      setHasError(true);
      setIsError(true);
    } else if (selectOption && selectOption.id) {
      if (inputValueToVnd) {
        if (!bankValue) {
          setHasError(true);
          setIsError(true);
        } else {
          setHasError(false);
          setIsError(false);
        }
      }
    } else {
      setHasError(false);
      setIsError(false);
    }
  }, [
    inputValueToVnd,
    isError,
    hasError,
    minMoney,
    maxMoney,
    selectOption,
    bankValue,
  ]);
  const validateError = () => {
    if (hasError && inputValueToVnd === 0) {
      return (
        <></>
        // <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-xs pb-4 ">
        //   <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
        //   Vui lòng điền vào số tiền gửi
        // </div>
      );
    }

    if (hasError && inputValueToVnd > 0 && inputValueToVnd < Number(minMoney)) {
      return (
        <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-sm pb-4 ">
          <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
          Số tiền gửi phải trên {fNumber(minMoney)}
        </div>
      );
    }

    if (hasError && inputValueToVnd > Number(maxMoney)) {
      return (
        <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal md:text-base text-sm pt-">
          <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
          Giới hạn 1 giao dịch không vượt quá {fNumber(maxMoney)}
        </div>
      );
    }
    if (selectOption && selectOption.id) {
      if (hasError && !bankValue) {
        return (
          <div className="md:text-[#a94442] text-[#ff1c4b] !font-normal text-base  text-sm ">
            <FontAwesomeIcon icon={faExclamationTriangle} fontSize={15} />
            Vui lòng chọn ngân hàng
          </div>
        );
      }
    }
  };

  return (
    <div>
      {/* Giao diện màn máy tính */}
      <div className="hidden md:block w-full h-full">
        <div className={styles.container}>
          <div className={styles.listBank}>
            {configItem.map((item) => (
              <div
                className={`${styles.itemBank} ${bankSelected === item.id ? styles.itemActive : ""
                  }`}
                onClick={() => setBankSelected(item.id)}
                key={item.id}>
                <div className={styles.name} style={{ textWrap: "wrap" }}>
                  {item.name}
                </div>
                <div className="text-white">
                  Giới hạn nạp tối thiểu{" "}
                  <span className="">{fNumber(item.min)}</span> ~{" "}
                  <span className="">{fNumber(item.max)}</span>
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
          // onValuesChange={onValuesChange}
          >
            <div className="grid-cols-2 py-5 px-[30px] text-white">
              {/* <>
                <div className="text-sm mb-[5px] font-h">
                  Vui lòng nhập chính xác nhập đúng số serial và mã thẻ, chọn đúng mệnh giá và nhà
                  mạng. Liên hệ CSKH nếu cần hỗ trợ.
                </div>
                <div className=" font-h text-base">Số tiền được đề xuất để thanh toán：</div>
                <div className="flex flex-wrap ">
                  {proposePriceUSDT.map((item) => (
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
                      key={item}
                    >
                      {fNumber(item)}
                    </div>
                  ))}
                </div>
              </> */}
              <>
                <span className="text-base my-[2px] ">
                  Chọn ngân hàng mà bạn sử dụng :
                </span>
                <Form.Item name="bank" initialValue={undefined}>
                  <Select
                    value={undefined}
                    placeholder="Vui lòng chọn ngân hàng"
                    className={styles.plahover}>
                    <Select.Option value={""}>
                      Vui lòng chọn ngân hàng
                    </Select.Option>
                    <Select.Option value={"TRC20"}>USDT-TRC20</Select.Option>
                    <Select.Option value={"ERC20"}>USDT-ERC20</Select.Option>
                  </Select>
                </Form.Item>
              </>
              <div className="text-base  mb-[12px] text-white">
                <span className="text-sm">
                  Cảnh báo : Tuyệt đối không lấy thông tin ngân hàng,nội dung
                  nạp từ người thứ 3 hoặc đại lý ( cẩn thận bị lừa đảo ).789BET
                  chỉ hỗ trợ các thông tin hiển thị trên hệ thống ,ngoài ra tất
                  cả là giả. ✅ Hãy nhớ link truy cập không bị chặn là ok60s.com
                  ✅
                </span>
                <p>Số tiền được đề xuất để thanh toán：</p>
              </div>
              <div className="flex flex-wrap ">
                {proposePriceUSDT.map((item) => (
                  <div
                    onClick={() => form.setFieldValue("price", item)}
                    className={styles.itemPrice}
                    key={item}>
                    {fNumber(item)}
                  </div>
                ))}
              </div>
              <div className="text-[16px] mb-[5px]">Nạp tiền :</div>

              <div className={styles.boxInput}>
                <Form.Item
                  name="price"
                  className="w-full"
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
                  = {fNumber(Form.useWatch("price", form))}{" "}
                </div>
              </div>

              <div className="font-h text-base">Phí thủ tục: {0}</div>
              <div className="font-h text-base">= {0} VNĐ</div>

              <div className="mt-1 font-h text-base">
                Thực tế chuyển khoản： {fNumber(Form.useWatch("price", form))}
              </div>
              <div>= {fNumber(Form.useWatch("price", form) * 1000)} VNĐ</div>

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
                onValuesChange={onValuesChange}>
                <div className="grid-cols-2 text-[#808080]">
                  <div className="mb-1 break-words text-lg font-bold text-black">
                    {configItem.find((data) => data.id === bankSelected)?.name}
                  </div>
                  <div className="border-b border-[#ccc]">
                    <div className="mb-[12px]">
                      Giới hạn tối thiểu : &nbsp;&nbsp;&nbsp;
                      {fNumber(
                        configItem.find((data) => data.id === bankSelected)?.min
                      )}{" "}
                      ~{" "}
                      {fNumber(
                        configItem.find((data) => data.id === bankSelected)?.max
                      )}
                    </div>
                  </div>
                  <>
                    <div className="text-base my-[2px] text-black font-semibold">
                      Chọn ngân hàng bất kì mà bạn muốn chuyển khoản
                    </div>
                    <Form.Item name="bank" initialValue={undefined}>
                      <Radio.Group className={styles.plahover}>
                        <div className="flex flex-col gap-2">
                          <Radio value="TRC20">USDT-TRC20</Radio>
                          <Radio value="ERC20">USDT-ERC20</Radio>
                        </div>
                      </Radio.Group>
                    </Form.Item>
                  </>
                  <div className="text-[12px] mb-[5px]">
                    Vui lòng nhập chính xác nội dung chuyển khoản. Liên hệ CSKH
                    nếu cần hỗ trợ.
                  </div>
                  <div className="py-6">
                    <div className="text-base font-bold mb-[12px] text-black">
                      Số tiền được đề xuất để thanh toán
                    </div>
                    <div className="flex flex-wrap ">
                      {proposePriceUSDT.map((item) => (
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
                        />
                      </Form.Item>
                      <div className={styles.vlMobile} style={{ fontSize: 16 }}>
                        = {fNumber(inputValueToVnd)}
                      </div>
                    </div>
                    {inputValueToVnd ? (
                      ""
                    ) : (
                      <div className="text-[#ff1c4b] flex items-center pt-2 text-sm gap-1">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          color="#ff1c4b"
                          className="mb-1"
                        />
                        Số tiền nạp phải lớn hơn: {fNumber(minMoney)}
                      </div>
                    )}

                    <div className="text-[16px] text-black">
                      Phí thủ tục: {fNumber(0)}
                    </div>
                    <div className="text-[16px] leading-[1] text-black">
                      = {fNumber(0)} VNĐ
                    </div>

                    <div className="mt-4 text-[16px] text-black">
                      Thực tế chuyển khoản：{fNumber(inputValueToVnd)}
                    </div>
                    <div className="text-[16px] leading-[1] text-black">
                      = {fNumber(inputValueToVnd * 1000)} VNĐ
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
              <div>
                <div className="custom-deposit-tip-color text-left text-[16px] font-bold text-black mb-[12px]">
                  Vui lòng nhấp vào bên dưới để chọn tài khoản thanh toán bạn
                  muốn sử dụng：
                </div>
                <div className={styles.listBankMobile}>
                  {configItem.map((item) => (
                    <div
                      className={`${styles.itemBankMobile} ${bankSelected === item.id ? styles.itemActive : ""
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
