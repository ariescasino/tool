"use client";

import authServicer from "@/api/services/auth.servicer";
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Button, Collapse, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import ModalNoti from "./modalNoti";
import { useUser } from "@/context/useUserContext";

export default function RutTien() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusWithDraw, setStatusWithDraw] = useState({
    hasBankUserInfo: false,
    hasWithdrawPassword: false,
  });

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return authServicer.getWithdrawalCondition();
    },
    queryKey: ["getWithdrawalCondition"],
  });
  useEffect(() => {
    if (data) {
      setStatusWithDraw(data);
    }
  }, [data]);

  const onFinish = async (values: any) => {
    const res = await authServicer.updateWithdrawPassword({
      newWithdrawPassword: values.newPassword,
      oldWithdrawPassword: values.oldPassword,
    });
    try {
      if (res.status === true) {
        setIsOpen(true);
        setIsSuccess(true);
      } else {
        setIsOpen(true);
        setIsSuccess(false);
      }
    } catch (error) {
      setIsOpen(true);
      setIsSuccess(false);
    }
  };
  const handleCloseForm = () => {
    setIsOpen(false);
    form.resetFields(['oldPassword'])
  }
  return (
    <Collapse activeKey={"1"} className="CollapseDisIcon">
      <Collapse.Panel header="Thay đổi mật khẩu rút tiền" key="1">
        {!statusWithDraw.hasWithdrawPassword && (
          <div className="p-4 mb-4 bg-[#fcf8e3] border-solid border-[1px] border-[#faebcc]">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="fa fa-info-circle"
              style={{ color: "#8a6d3b", fontSize: "16px" }}
            />
            mật khẩu rút tiền chưa cài đặt, vui lòng cài đặt mật khẩu rút tiền
            trước
          </div>
        )}

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
            name={"oldPassword"}
            label="Mật khẩu rút tiền ban đầu"
            rules={[
              {
                required: true,
                message: "Vui lòng mật khẩu rút tiền ban đầu!",
              },
            ]}
          >
            <Input.Password
              placeholder="Vui lòng nhập mật khẩu rút tiền ban đầu của bạn"
              className={styles.customFormInput}
              iconRender={(visible) =>
                visible ? (
                  <FontAwesomeIcon icon={faEye} fontSize={17} color="#888888" />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    fontSize={17}
                    color="#888888"
                  />
                )
              }
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
              // {
              //   pattern: /^(?=.*[a-zA-Z])(?=.*\d).{7,}$/,
              //   message: "Hơn 6 ký tự phải bao gồm chữ cái và số.",
              // },
              // { validator: validatePassword },
            ]}
          >
            <Input.Password
              placeholder="Hơn 6 ký tự phải bao gồm chữ cái và số"
              className={styles.customFormInput}
              iconRender={(visible) =>
                visible ? (
                  <FontAwesomeIcon icon={faEye} fontSize={17} color="#888888" />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    fontSize={17}
                    color="#888888"
                  />
                )
              }
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
            ]}
          >
            <Input.Password
              placeholder="Xin nhập lại mật khẩu mới của bạn"
              className={styles.customFormInput}
              iconRender={(visible) =>
                visible ? (
                  <FontAwesomeIcon icon={faEye} fontSize={17} color="#888888" />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    fontSize={17}
                    color="#888888"
                  />
                )
              }
            />
          </Form.Item>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-start-3 col-span-4 flex gap-2">
              <Button htmlType="submit">Gửi đi</Button>
              <Button onClick={() => router.back()}>Huỷ bỏ</Button>
            </div>
          </div>
        </Form>
        <ModalNoti
          isSuccess={isSuccess}
          open={isOpen}
          onOk={handleCloseForm}
          successTitle="Mật khẩu rút tiền của bạn đã cài đặt thành công"
          failTitle="Mật khẩu rút tiền cũ đã được nhập không chính xác"
          successCode="31394255AG1268C0E32FD1"
          failCode="31394255AG1268C0E34DD3"
        />
      </Collapse.Panel>
    </Collapse>
  );
}
