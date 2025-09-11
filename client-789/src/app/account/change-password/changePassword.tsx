/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import authServicer from "@/api/services/auth.servicer";
import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import { useUser } from "@/context/useUserContext";
import { InfoCircleFilled } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalNoti from "../member-center/change-money-password/modalNoti";
import { noWhitespacePattern, passwordPattern } from "@/utils/regex";

export default function ChangePasswordMobile() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { logoutUser } = useUser();
  const [msg, setMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onFinish = async (values: any) => {
    const res = await authServicer.changePassword({
      newPassword: values.newPassword,
      oldPassword: values.oldPassword,
    });
    try {
      if (res.status === true) {
        setIsOpen(true);
        setIsSuccess(true);
      } else {
        setIsOpen(true);
        setIsSuccess(false);
        setMsg(res.msg);
      }
    } catch (error) { }
  };

  const handleChangeFail = () => {
    setIsOpen(false);
    form.resetFields(['oldPassword'])
  }
  const handleChangeSuccess = () => {
    setIsOpen(false);
    setTimeout(() => {
      logoutUser()
    }, 1000)
  }
  return (
    <LayoutPromotionMobile
      isChangePassLayout
      title="Thay đổi mật khẩu"
      zIndex={100}
    >
      <div
        className="relative  mt-2"
      >
        <div className="mb-5 rounded border p-4 text-center info  bg-[#d9edf7] text-[#31708f]">
          <InfoCircleFilled size={12} className="mr-[1px]" />
          <span className="text-sm">Xin lưu ý rằng để
            bảo mật cho tài khoản của bạn, vui lòng không sử dụng mật khẩu mới
            giống mật khẩu cũ, sau khi thay đổi mật khẩu, bạn sẽ cần đăng nhập lại
            với mật khẩu mới ngay lập tức</span>
        </div>
        <Form onFinish={onFinish} form={form}>
          <p className="font-bold text-[14px] mb-1">Mật khẩu ban đầu</p>
          <Form.Item
            className="!mb-2"
            name={"oldPassword"}
            rules={[{ required: true, message: "Vui lòng điền mật khẩu!" }]}
          >
            <Input.Password
              iconRender={(visible) => {
                return null;
              }}
              placeholder="Xin nhập mật khẩu cũ"
            />
          </Form.Item>
          <p className="font-bold text-[14px] mb-1">Mật khẩu mới</p>

          <Form.Item
            className="!mb-2"
            name={"newPassword"}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                pattern: passwordPattern,
                message: "Hơn 6 ký tự phải bao gồm chữ cái và số.",
              },
            ]}
          >
            <Input.Password
              iconRender={(visible) => {
                return null;
              }}
              placeholder="Hơn 6 ký tự phải bao gồm chữ cái và số"
            />
          </Form.Item>
          <p className="font-bold text-[14px] mb-1">Xác nhận khẩu mới</p>

          <Form.Item
            name={"confirmPassword"}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password
              iconRender={(visible) => {
                return null;
              }}
              placeholder="Xin nhập mật khẩu mới của bạn"
            />
          </Form.Item>
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="mr-2 border border-1 border-[#ccc] p-1 rounded-md w-[80px] h-[34px] text-[#333]"
            >
              Thay đổi
            </button>

            <button
              onClick={() => router.back()}
              className="ml-2 border border-1 border-[#ccc] p-1 rounded-md w-[80px] h-[34px] text-[#333]"
            >
              Hủy bỏ
            </button>
          </div>
        </Form>
        <ModalNoti
          isMobile
          isSuccess={isSuccess}
          open={isOpen}
          onOk={isSuccess ? handleChangeSuccess : handleChangeFail}
          successCode="333FDE01AG1268C11283CC"
          failCode="333FDE01AG1268C112824B"
          successTitle="mật khẩu bạn đã thay đổi thành công, xin vui lòng đăng nhập lại bằng mật khẩu mới"
          //   failTitle="Mật khẩu cũ đã được nhập không chính xác"
          failTitle={
            msg == "Mật khẩu mới nhập giống với mật khẩu cũ"
              ? "Mật khẩu mới nhập giống với mật khẩu cũ"
              : "Mật khẩu cũ đã được nhập không chính xác"
          }
        />
      </div>
    </LayoutPromotionMobile>
  );
}
