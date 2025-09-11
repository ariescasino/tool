import paymentService from "@/api/services/payment.service";
import { openNotification } from "@/utils/check";
import { Button, Form, Input, Modal, Select } from "antd";

import styles from "./AddBank.module.css";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */

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
export default function AddBank({
  listBank,
  refetch,
  setPageIndex,
}: {
  listBank: IItemBank[];
  refetch: () => void;
  setPageIndex: (value: "addBank" | "transaction") => void;
}) {
  const [errorModal, setErrorModal] = useState(false);
  const [form] = Form.useForm();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleDropdownVisibleChange = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredBanks =
    listBank &&
    listBank.filter((bank) =>
      bank?.short_name.toLowerCase().includes(searchText.toLowerCase())
    );

  const onFinish = async (values: any) => {
    try {
      const res = await paymentService.addBankUserInfo(values);
      if (res.status) {
        setTimeout(() => {
          refetch();
          setPageIndex("transaction");
        }, 500);
        openNotification({ type: "success", message: res?.msg });
      }
    } catch (error) { }
  };

  const bankCodeValue = Form.useWatch("bankCode", form) || 0;
  const bankBranchValue = Form.useWatch("bankBranch", form) || 0;
  const bankAccountNumberValue = Form.useWatch("bankAccountNumber", form) || 0;

  return (
    <div className="w-full bg-[#2b2b2b] p-5 rounded-[10px] flex flex-col max-md:bg-transparent max-md:text-[#808080] max-md:p-0 max-md:pb-[50px]">
      <div className="flex gap-2">
        <div className="bg-[#ff9800] rounded-[10px] flex w-[146px] p-2 gap-2 items-center max-md:p-0 max-md:h-9 max-md:w-[120px] max-md:justify-center max-md:text-[14px]">
          <i className={`${styles.iconBankdk} block`} />
          <span className="text-white">Ngân hàng</span>
        </div>
        <div
          onClick={() => setErrorModal(true)}
          className="bg-[#ff9800] rounded-[10px] flex w-[146px] p-2 gap-2 items-center max-md:p-0 max-md:h-9 max-md:w-[120px] max-md:justify-center justify-center max-md:text-[14px]">
          <i className={styles.iconUSDT} />
          <span className="text-white">USDT</span>
        </div>
      </div>
      <div className="w-full max-w-[450px] mt-8 max-md:mt-1">
        <Form name="basic" layout="vertical" form={form} onFinish={onFinish}>
          <div className="font-bold text-white mb-[5px] text-[16px] max-md:text-[#808080] max-md:text-[14px]">
            Ngân hàng
          </div>
          <Form.Item
            name="bankCode"
            rules={[
              {
                required: true,
              },
            ]}>
            <Select
              showSearch
              open={isDropdownOpen}
              onClick={handleDropdownVisibleChange}
              placeholder={
                <div className={styles.optionsBankPlaceholder}>
                  Vui lòng chọn ngân hàng
                </div>
              }
              filterOption={(input: any, option: any) =>
                option?.label?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0
              }
              dropdownStyle={{ padding: 0, borderRadius: 4 }}
              // options={
              //   listBank &&
              //   listBank.map((item) => ({
              //     label: item?.short_name,
              //     value: item?.bin,
              //   }))
              // }
              dropdownRender={(menu) => (
                <div>
                  <div
                    className={styles.search}
                    onClick={(event) => event.stopPropagation()}>
                    <Input
                      type="search"
                      placeholder="Vui lòng chọn ngân hàng"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      suffix={<i className="fas fa-search" />}
                    />
                  </div>
                  {menu}
                </div>
              )}>
              {filteredBanks &&
                filteredBanks.map((item, index) => (
                  <Select.Option value={item?.bin} key={index}>
                    {item?.short_name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>

          <div className="font-bold text-white mb-[5px] text-[16px] max-md:text-[#808080] max-md:text-[14px]">
            Chi nhánh ngân hàng
          </div>
          <Form.Item
            name="bankBranch"
            className={styles.styledInput}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder="ví dụ : thành phố hồ chí minh" />
          </Form.Item>

          <div className="font-bold text-white mb-[5px] text-[16px] max-md:text-[#808080] max-md:text-[14px]">
            Số tài khoản
          </div>
          <Form.Item
            name="bankAccountNumber"
            className={styles.styledInput}
            rules={[
              {
                required: true,
              },
            ]}>
            <Input placeholder="ví dụ : 043423423423423475575" />
          </Form.Item>

          <Button
            disabled={
              bankCodeValue && bankBranchValue && bankAccountNumberValue
                ? false
                : true
            }
            className="h-[44px] w-full text-[16px] border-none disabled:!bg-[#ff9800] disabled:!text-white bg-[#ff9800] hover:!bg-[#ff9800] text-white hover:!text-white max-md:h-fit max-md:py-2 max-md:bg-[#7bbfd4] max-md:text-white max-md:text-[14px]"
            htmlType="submit">
            gửi đi
          </Button>
        </Form>
      </div>

      <Modal
        open={errorModal}
        onCancel={() => setErrorModal(false)}
        onOk={() => setErrorModal(false)}
        title="Thông báo"
        footer={null}>
        <div>Chức năng đang bảo trì, vui lòng quay lại sau!</div>
      </Modal>
    </div>
  );
}
