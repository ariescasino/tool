/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { Button, Divider, Form, Input, Modal, Radio, RadioChangeEvent } from "antd";
import { fNumberVND } from "@/utils/format-number";
import paymentService from "@/api/services/payment.service";
import { openNotification } from "@/utils/check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useGetInfoUserBank } from "@/hooks/usePaymentService";
import { useWindowSize } from "react-use";

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

type IItemBank = {
  id: number;
  name: string;
  code: string;
  bin: string;
  shortName: string;
  logo: string;
  transferSupported: number;
  lookupSupported: number;
  short_name: string;
  support: number;
  isTransfer: number;
  swift_code: string;
};

export default function WithdrawMoney({
  listBank,
  bankOfUser,
}: {
  listBank: IItemBank[];
  bankOfUser: IBankOfUser;
}) {
  const router = useRouter();
  const [bankUsing, setBankUsing] = useState<IBankUser>();
  const [form] = Form.useForm();
  const amountValue = Form.useWatch("amount", form) || 0;
  const { dataInfoUserBank, isLoading, isFetching } = useGetInfoUserBank();
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      const res = await paymentService.bankOutRequest({
        ...values,
        bankUserId: bankUsing?.id,
      });
      if (res.status) {
        openNotification({ type: "success", message: res?.msg });
      }
    } catch (error) { }
  };

  useEffect(() => {
    if (bankOfUser.bankUsers && bankOfUser.bankUsers.length > 0) {
      setBankUsing(bankOfUser.bankUsers[0]);
    } else {
      router.push("/account/withdraw-application?addBank=true");
    }
  }, [bankOfUser]);

  const nameBank =
    listBank &&
    bankUsing &&
    listBank.find((item) => item.bin === bankUsing.bankProvider);

  const onChange = (e: RadioChangeEvent) => {
    setBankUsing(e.target.value);
  };
  const { width } = useWindowSize()

  return (
    <div className="w-full bg-[#2b2b2b] p-5 rounded-[10px] max-md:p-0 max-md:bg-transparent max-md:mb-2 max-md:h-full max-md:overflow-y-hidden">
      <Form
        className="!font-helvetica"
        name="basic"
        layout="vertical"
        form={form}
        onFinish={onFinish}>
        <div className="w-full max-w-[450px] flex flex-col !text-white  max-md:!text-black">
          <div className="bg-[#ffffff85] rounded-[6px] w-[166px] flex p-2 gap-2 items-center max-md:bg-[#ff900080] max-md:text-[20px] max-md:w-fit max-md:font-[600] max-md:py-0 max-md:mb-[16px]">
            Thông tin ngân hàng
          </div>

          <div className={`grid grid-cols-12 ${styles.itemInfo}`}>
            <div className="px-[15px] col-span-5 max-md:col-span-6">
              Họ và tên
            </div>
            <div className="px-[15px] col-span-7 text-right  max-md:col-span-6 max-h-[34px]">
              {dataInfoUserBank?.name ? (
                <div>{dataInfoUserBank?.name}</div>
              ) : (
                <Form.Item
                  name="bankAccountName"
                  rules={[
                    {
                      required: true,
                      message: "Vui lý nhập họ và tên",
                    },
                  ]}>
                  <Input className="h-[34px]" />
                </Form.Item>
              )}
            </div>
          </div>

          <div className={`grid grid-cols-12 ${styles.itemInfo}`}>
            <div className="px-[15px] col-span-5 max-md:col-span-6">
              Ngân hàng
            </div>
            <div className="px-[15px] col-span-7 text-right max-md:col-span-6">
              {nameBank?.shortName}
            </div>
          </div>

          <div className={`grid grid-cols-12 ${styles.itemInfo}`}>
            <div className="px-[15px] col-span-5 max-md:col-span-6">
              Chi nhánh ngân hàng
            </div>
            <div className="px-[15px] col-span-7 text-right max-md:col-span-6">
              {bankUsing?.bankBranch}
            </div>
          </div>

          <div className={`grid grid-cols-12 ${styles.itemInfo}`}>
            <div className="px-[15px] col-span-5  max-md:col-span-6">
              Số tài khoản
            </div>
            <div className="px-[15px] col-span-7 text-right max-md:col-span-6">
              {bankUsing?.bankAccountNumber}
            </div>
          </div>

          <div className="px-[15px] mt-5 max-md:px-0 max-md:mt-[7px]">
            <div className="py-[10px] hover:underline cursor-pointer font-normal max-md:text-[#ff417b] max-md:py-0" onClick={() => setOpenDetail(true)}>
              Click vào đây để xem chi tiết yêu cầu
            </div>

            <div className="py-[15px] font-bold text-[16px] max-md:text-[14px]">
              Phương thức rút tiền
            </div>

            <Radio.Group
              onChange={onChange}
              value={bankUsing}
              className="flex flex-col gap-2 pb-[10px]">
              {bankOfUser.bankUsers.map((item) => {
                const nameBankRadio =
                  listBank &&
                  bankUsing &&
                  listBank.find((itemS) => itemS.bin === item.bankProvider);
                return (
                  <Radio
                    key={item.id}
                    value={item}
                    className="text-[16px] text-white max-md:text-[#808080] max-md:text-[14px]">
                    {nameBankRadio ? nameBankRadio.shortName : ""}
                  </Radio>
                );
              })}
            </Radio.Group>

            <div className="grid grid-cols-2 pb-[10px]">
              <div className="flex flex-col">
                <div className="font-bold text-[16px] max-md:text-[#ff417b] max-md:text-[14px]">
                  Số dư tài khoản
                </div>
                <div className="max-md:text-[#ff417b]">
                  {fNumberVND(bankOfUser.balance) === "0" ? (
                    <div className="flex flex-col">
                      <p>0</p>
                      <p className="font-thin">Số dư tài khoản không đủ</p>
                    </div>
                  ) : (
                    fNumberVND(bankOfUser.balance)
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="font-bold text-[16px] max-md:text-[14px]">
                  Giới hạn rút tiền
                </div>

                <div>200 ~ 250,000</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-[16px] max-md:text-[14px]">
                Số tiền rút
              </div>
              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Vui lý nhập số tiền",
                  },
                ]}>
                <Input className="h-[34px] w-1/2" type="number" />
              </Form.Item>
              <p className="-mt-[23px]">
                = {amountValue ? fNumberVND(amountValue * 1000) : 0} VND
              </p>
            </div>

            <div className="text-[16px] max-md:text-[14px] mt-2 font-bold">
              Số dư tài khoản sau khi rút tiền
            </div>

            <div className="py-[8px]">--</div>

            <div>
              <div className="font-bold text-[16px] max-md:text-[14px]">
                Mật khẩu rút tiền
              </div>

              <Form.Item
                name="withdrawPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu rút tiền",
                  },
                ]}>
                <Input.Password
                  iconRender={(visible) =>
                    visible ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        color="#888888"
                        width={22}
                        cursor="pointer"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color="black"
                        width={22}
                        cursor="pointer"
                      />
                    )
                  }
                  className="h-[34px]"
                  placeholder="Vui lòng nhập mật khẩu rút tiền của bạn"
                />
              </Form.Item>
            </div>

            <Button
              htmlType="submit"
              className="h-[44px] w-full text-[16px] border-none bg-[#ff9800] hover:!bg-[#ff9800] text-white hover:!text-white max-md:h-fit max-md:py-2 max-md:bg-[#ffb627] max-md:text-white max-md:text-[14px] mb-[80px]">
              Rút tiền
            </Button>
          </div>
        </div>
      </Form>
      <Modal width={width < 768 ? 400 : 700} open={openDetail} footer={null} onClose={() => setOpenDetail(false)} className={styles.modalDetail} closeIcon={<span className="text-[#337ab7] hover:underline" onClick={() => setOpenDetail(false)}>x</span>}>
        <div>
          <div className="px-4 pt-3">
            <h4 className="text-[#333333] text-base  md:text-xl"> Click vào đây để xem chi tiết yêu cầu</h4>
          </div>
          <Divider className="mb-2 mt-3" />
          <div className="alert mx-3">
            không có bất kỳ thông tin kiểm toán chi tiết nào
          </div>
          <Divider className="mt-2 mb-4" />
        </div>
        <div className="flex justify-end pr-4 pb-4">
          <Button className="btn_default" onClick={() => setOpenDetail(false)}>Đóng</Button>
        </div>
      </Modal>
    </div>
  );
}
