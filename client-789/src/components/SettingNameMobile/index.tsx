"use client";

import { Form, Input, Button } from "antd";
import styles from "./styles.module.css";
import { openNotification } from "@/utils/check";
import authServicer from "@/api/services/auth.servicer";
import { useRouter } from "next/navigation";
export default function SettingNameMobile({
  dataInfoUserBank,
  refetch,
}: {
  dataInfoUserBank: any;
  refetch: () => void;
}) {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      const res = await authServicer.updateUserInfo({
        name: values.fullName,
      });
      if (res.status) {
        alert("Liên kết thành công");
        refetch();
        router.push("/account/member-center");
      }
    } catch (error) {}
  };

  const fullName = Form.useWatch("fullName", form);

  return (
    <div className="mt-4 bg-white p-3 rounded">
      {dataInfoUserBank && dataInfoUserBank?.name ? (
        <p className="bg-[#fef9c3] border-[1px] border-[#faebcc] text-[#a16207] w-full p-[15px] text-[14px]">
          {dataInfoUserBank?.name}
        </p>
      ) : (
        <Form
          name="basic"
          layout="horizontal"
          form={form}
          onFinish={onFinish}
          className={`${styles.customForm} styleLabel`}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}>
          <Form.Item
            name={"fullName"}
            label="Họ và tên"
            normalize={(value) => value.toUpperCase()}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên ",
              },
              {
                pattern: /^\S.*\S$/,
                message: "Tên không được có khoảng trống ở đầu hoặc cuối",
              },
            ]}
            help={
              <p className="text-sm text-black">
                Họ tên phải được điền bằng chữ in hoa, không được có khoảng
                trống hoặc dấu ở đầu và cuối.
              </p>
            }>
            <Input
              placeholder="Họ tên cần trùng khớp với họ tên trong ngân hàng, cung cấp sai sẽ không thể rút tiền."
              className={styles.customFormInput}
            />
          </Form.Item>
          <div className="flex justify-center gap-2 py-4">
            <Button
              htmlType="submit"
              className={
                fullName
                  ? styles.mobile_btn_submit
                  : styles.mobile_btn_submit_disabled
              }
              disabled={fullName ? false : true}>
              Gửi đi
            </Button>
            <Button onClick={() => router.back()}>Huỷ bỏ</Button>
          </div>
        </Form>
      )}
    </div>
  );
}
