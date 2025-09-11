"use client";

import authServicer from "@/api/services/auth.servicer";
import { openNotification, useBreakpoint } from "@/utils/check";
import { Button, Collapse, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import styles from "../styles.module.css";
import { useGetInfoUserBank } from "@/hooks/usePaymentService";
import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import SettingNameMobile from "@/components/SettingNameMobile";
import { useEffect } from "react";
export default function ChangePaassword() {
  const breakpoint = useBreakpoint();
  const [form] = Form.useForm();
  const { dataInfoUserBank, isLoading, isFetching, refetch } = useGetInfoUserBank();

  const router = useRouter();

  const name = Form.useWatch("name", form);

  const onFinish = async (values: any) => {
    try {
      const res = await authServicer.updateUserInfo({
        name: values.name,
      });
      if (res.status) {
        alert("Liên kết thành công");
        refetch();
        router.push("/account/member-center");
      }
    } catch (error) {}
  };

  return (
    <>
      <Collapse activeKey={"1"} className="CollapseDisIcon">
        <Collapse.Panel header="Cài đặt tên" key="1">
          {dataInfoUserBank && dataInfoUserBank?.name ? (
            <div>
              <p className="bg-[#fcf8e3] border-[1px] mb-2 border-[#faebcc] text-[#8a6d3b] w-full p-[15px]">
                {dataInfoUserBank?.name}
              </p>
              <Button
                onClick={() => {
                  router.push("/account/member-center");
                }}
              >
                hủy bỏ{" "}
              </Button>
            </div>
          ) : (
            <Form
              name="basic"
              layout="horizontal"
              form={form}
              onFinish={onFinish}
              className={`px-6 ${styles.customForm} styleLabel`}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Form.Item
                name={"name"}
                label="Họ và tên"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên ",
                  },
                  {
                    pattern: /^[A-Z]+(?:\s[A-Z]+)*$/,
                    message:
                      "  Họ tên phải được điền bằng chữ in hoa, không được có khoảng trống hoặc dấu ở đầu và cuối.",
                  },
                ]}
                help={
                  <p className="text-sm text-black">
                    Họ tên phải được điền bằng chữ in hoa, không được có khoảng
                    trống hoặc dấu ở đầu và cuối.
                  </p>
                }
                normalize={(value) => value.toUpperCase()}
              >
                <Input
                  placeholder="Họ tên cần trùng khớp với họ tên trong ngân hàng, cung cấp sai sẽ không thể rút tiền."
                  className={styles.customFormInput}
                />
              </Form.Item>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-start-3 col-span-4 flex gap-2  mt-4">
                  <Button
                    htmlType="submit"
                    disabled={!name ? true : false}
                  >
                    Thêm
                  </Button>
                  <Button onClick={() => router.back()}>Huỷ bỏ</Button>
                </div>
              </div>
            </Form>
          )}
        </Collapse.Panel>
      </Collapse>
      {breakpoint === "S" && (
        <LayoutPromotionMobile title="Cài đặt tên" background="black" zIndex={1000}>
          <SettingNameMobile
            dataInfoUserBank={dataInfoUserBank}
            refetch={refetch}
            key={dataInfoUserBank?.name}
          />
        </LayoutPromotionMobile>
      )}
    </>
  );
}
