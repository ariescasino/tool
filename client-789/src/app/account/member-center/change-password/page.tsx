"use client";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Collapse, Form, Input } from "antd";

import authServicer from "@/api/services/auth.servicer";
import { useUser } from "@/context/useUserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalNoti from "../change-money-password/modalNoti";
import styles from "../styles.module.css";
import { passwordPattern } from "@/utils/regex";
export default function ChangePaassword() {
  const [form] = Form.useForm();
  const router = useRouter();

  const { logoutUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");

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
  const validateNoWhitespace = (_: any, value: string) => {
    if (/\s/.test(value)) {
      return Promise.reject(new Error("Không được chứa kí tự khoảng trắng"));
    }
    return Promise.resolve();
  };
  const handleFormFail = () => {
    setIsOpen(false)
    form.resetFields(['oldPassword'])
  }
  const handleFormSuccess = () => {
    setIsOpen(false);
    setTimeout(() => {
      logoutUser()
    }, 1000)
  }


  return (
    <Collapse activeKey={"1"} className="CollapseDisIcon">
      <Collapse.Panel header="Thay đổi mật khẩu" key="1">
        <div className="p-4 mb-4 bg-[#d9edf7] border-solid border-[1px] border-[#bce8f1]">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="fa fa-info-circle"
            style={{ color: "#31708f", fontSize: "16px" }}
          />
          Xin lưu ý rằng để bảo mật cho tài khoản của bạn, vui lòng không sử
          dụng mật khẩu mới giống mật khẩu cũ, sau khi thay đổi mật khẩu, bạn sẽ
          cần đăng nhập lại với mật khẩu mới ngay lập tức
        </div>

        <Form
          name="basic"
          layout="horizontal"
          form={form}
          onFinish={onFinish}
          className={`px-6 ${styles.customForm} styleLabel`}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}>
          <Form.Item
            name={"oldPassword"}
            label="Mật khẩu ban đầu"
            rules={[{ required: true, message: "Vui lòng điền mật khẩu!" }]}>
            <Input.Password
              placeholder="Xin nhập mật khẩu cũ"
              className={styles.customFormInput}
              iconRender={(visible) => {
                return null;
              }}
            />
          </Form.Item>
          <Form.Item
            name={"newPassword"}
            label="Mật khẩu mới"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              { validator: validateNoWhitespace },
              {
                pattern: passwordPattern,
                message: "Hơn 6 ký tự phải bao gồm chữ cái và số.",
              },
              // { validator: validatePassword },
            ]}>
            <Input.Password
              placeholder="Hơn 6 ký tự phải bao gồm chữ cái và số"
              className={styles.customFormInput}
              iconRender={(visible) => {
                return null;
              }}
            />
          </Form.Item>
          <Form.Item
            name={"confirmPassword"}
            label="Xác nhận mật khẩu mới"
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
            ]}>
            <Input.Password
              placeholder="Xin nhập lại mật khẩu mới của bạn"
              className={styles.customFormInput}
              iconRender={(visible) => {
                return null;
              }}
            />
          </Form.Item>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-start-4 col-span-4 flex gap-2">
              <Button htmlType="submit">Gửi đi</Button>
              <Button onClick={() => router.back()}>Huỷ bỏ</Button>
            </div>
          </div>
        </Form>
        <ModalNoti
          isSuccess={isSuccess}
          open={isOpen}
          onOk={isSuccess ? handleFormSuccess : handleFormFail}
          successCode="333FDE01AG1268C11283CC"
          failCode="333FDE01AG1268C112824B"
          successTitle="mật khẩu bạn đã thay đổi thành công, xin vui lòng đăng nhập lại bằng mật khẩu mới"
          failTitle={
            msg == "Mật khẩu mới nhập giống với mật khẩu cũ"
              ? "Mật khẩu mới nhập giống với mật khẩu cũ"
              : "Mật khẩu cũ đã được nhập không chính xác"
          }
        />
      </Collapse.Panel>
    </Collapse>
  );
}
