/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Divider, Form, Input, Select } from "antd";
import styles from "../../../styles/card.module.css";
import { fNumberVND } from "@/utils/format-number";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons/faShieldHalved";
import paymentService from "@/api/services/payment.service";
import { useQuery } from "@tanstack/react-query";
import { openNotification } from "@/utils/check";
import { useSearchParams } from "next/navigation";

type IItemCard = {
  name: string;
  code: string;
};

const defaultOptions = [20000, 50000, 100000, 200000, 300000, 500000, 1000000];

export default function CardTransfer() {

  const searchParams = useSearchParams()

  const amount = searchParams.get("a");

  const [form] = Form.useForm();

  const [listCardType, setListCardType] = useState<IItemCard[]>([]);

  const [width, setWidth] = useState(0);

  const getListCardTypeF = async () => {
    try {
      const res = await paymentService.getListCardType();
      if (res.data) {
        setListCardType(res.data);
      }
    } catch (error) { }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getListCardTypeF();
  }, []);

  const amountValue = Form.useWatch("amount", form) || 0;

  useEffect(() => {
    if (amount) {
      form.setFieldValue("amount", parseInt(amount) * 1000 || 0);
    }
  }, [amount, form]);

  const onFinish = async (values: any) => {
    try {
      const res = await paymentService.getCardRequest({
        cardNumber: values.maThe,
        cardValue: values.amount,
        serialNumber: values.seri,
        telco: values.nhaMang,
      });

      if (res.data.status) {
        openNotification({ type: "success", message: res?.data?.msg });
      }
    } catch (error) { }
  };

  return (
    <div className="w-full h-full min-h-screen bg-[#bebebe] text-black flex justify-center">
      <div className="w-[600px] h-[650px] bg-white rounded-b-[10px] mt-5 mb-4">
        <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/kenhthecao_789BET.jpg" alt="" />
        <div className="flex flex-col px-[15px] pb-[10px]">
          <Divider className="h-6 mt-[16px] mb-0" />
          <Form
            name="basic"
            layout="horizontal"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 6, flex: "auto" }}
            wrapperCol={{ span: width < 768 ? 9 : 18 }}
            className={styles.formInputCard}>
            <Form.Item
              label="Mệnh giá:"
              name="amount"
              className="amount"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}>
              <Select className="h-[38px]">
                <Select.Option value={undefined}>
                  ===Chọn mệnh giá===
                </Select.Option>
                {defaultOptions.map((item) => (
                  <Select.Option key={item} value={item}>
                    {fNumberVND(item)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {amountValue && amountValue > 0 ? (
              <div className={styles.textRed}>
                Nếu mệnh giá thẻ cào cao hơn lệnh {fNumberVND(amountValue || 0)}{" "}
                phần chênh lệch khách hàng tự chịu tổn thất
              </div>
            ) : (
              <div className="w-full h-2 md:block hidden" />
            )}

            <Form.Item label="Mã thẻ:" name="maThe" className="amount">
              <Input className="h-[38px]" placeholder="Mã thẻ" />
            </Form.Item>

            <div className="w-full h-2 md:block hidden" />

            <Form.Item label="Số seri thẻ:" name="seri" className="amount">
              <Input className="h-[38px]" placeholder="Số seri thẻ" />
            </Form.Item>

            <div className="w-full h-2 md:block hidden" />

            <Form.Item
              label="Nhà mạng:"
              name="nhaMang"
              className="amount"
              initialValue={undefined}>
              <Select
                className="h-[38px]"
                defaultValue={undefined}
                placeholder="=== Chọn nhà mạng ===">
                <Select.Option value={undefined}>
                  === Chọn nhà mạng ===
                </Select.Option>
                {listCardType &&
                  listCardType.map((item) => (
                    <Select.Option key={item.code} value={item.code}>
                      <div className="flex gap-1 items-center">
                        {item.name}{" "}
                      </div>
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Divider className="h-6 mt-[16px] mb-0" />

            <Button htmlType="submit" className={styles.btnSubmit}>
              Nạp thẻ cào
            </Button>

            <div className="flex flex-col mt-2 text-[#dc3545] text-base">
              <div>*Chú ý:</div>

              {/* <div>
                - Vui lòng chọn đúng mệnh giá nếu không sẽ không được cộng tiền
              </div> */}

              <div>
                - Với Thẻ ZING bạn chọn "Nhà mạng" trước để nhập "Mã thẻ" và "Số
                seri".
              </div>
            </div>

            <div className="text-right mt-0 md:mt-2 text-[16px] text-green-800">
              <FontAwesomeIcon icon={faShieldHalved} color="green" />
              Thanh Toán Thẻ Cào An Toàn
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
