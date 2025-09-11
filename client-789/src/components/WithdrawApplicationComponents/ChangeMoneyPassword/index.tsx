"use client";

import authServicer from "@/api/services/auth.servicer";
import { openNotification } from "@/utils/check";
import {
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Collapse, Form, FormInstance, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import styles from "./ChangeMoneyPassword.module.css";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/context/useUserContext";
import { useRouter } from "next/navigation";
import React from "react";
import { useWindowSize } from "react-use";

export function FormChangePasswordMoney() {
  const [form] = Form.useForm();
  const [typeErrorApi, setTypeErrorApi] = useState<{
    status: boolean;
    msg: string;
  }>({
    status: false,
    msg: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const { logoutUser } = useUser();
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      const res = await authServicer.updateWithdrawPassword({
        oldWithdrawPassword: values.oldPassword,
        newWithdrawPassword: values.newPassword,
      });
      setIsVisible(true);
      setTypeErrorApi({ status: res.status, msg: res?.msg });

      if (res.msg === "NO_ACCESS") {
        logoutUser();
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
      // form.validateFields();
    }
  };

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return authServicer.getWithdrawalCondition();
    },
    queryKey: ["getWithdrawalCondition"],
  });

  const handleConfirm = () => {
    setIsVisible(false);
    if (!typeErrorApi.status) {
      form.resetFields(['oldPassword'])
    } else {
      router.push('/account/deposit')
    }
  };

  useEffect(() => {
    form.setFieldValue("oldPassword", "");
  });
  const { width } = useWindowSize()
  const handleCloseForm = () => {
    if (width > 768) {
      router.push('/')
    } else {
      router.back()
    }
    form.resetFields()
  }
  return (
    <div className="max-md:border max-md:border-solid max-md:border-[#ccc] max-md:h-[95%] max-md:py-[24px] max-md:px-[9px] max-md:rounded">
      {data?.hasWithdrawPassword ? (
        <>
          <Form
            name="basic"
            layout="horizontal"
            form={form}
            onFinish={onFinish}
            className={`${styles.customForm}`}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <Form.Item
              name="oldPassword"
              className="!mb-2"
              label={
                <div className="font-bold text-wrap pt-[7px]">
                  Mật khẩu rút tiền ban đầu
                </div>
              }
              rules={[
                {
                  required: true,
                  message: (
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="mr-1"
                      />
                      Xin nhập mật khẩu cũ
                    </div>
                  ),
                },
              ]}
            >
              <Input.Password
                className="px-[15px]"
                placeholder="Vui lòng nhập mật khẩu rút tiền ban đầu của bạn"
                iconRender={(visible) =>
                  visible ? (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEye}
                      color="rgb(136, 136, 136)"
                    />
                  ) : (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEyeSlash}
                      color="rgb(136, 136, 136)"
                    />
                  )
                }
              />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label={
                <div className="font-bold text-wrap pt-[7px]">Mật khẩu mới</div>
              }
              rules={[
                {
                  required: true,
                  message: (
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="mr-1"
                      />
                      Vui lòng nhập mật khẩu mới của bạn
                    </div>
                  ),
                },
              ]}
            >
              <Input.Password
                className="px-[15px]"
                placeholder="Vui lòng nhập mật khẩu mới của bạn"
                iconRender={(visible) =>
                  visible ? (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEye}
                      color="rgb(136, 136, 136)"
                    />
                  ) : (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEyeSlash}
                      color="rgb(136, 136, 136)"
                    />
                  )
                }
              />
            </Form.Item>
            <Form.Item
              name="rePassword"
              label={
                <div className="font-bold text-wrap pt-[7px]">
                  Xác nhận mật khẩu mới
                </div>
              }
              rules={[
                {
                  required: true,
                  message: (
                    <div className="mt-1">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="mr-1"
                      />
                      Xin nhập lại mật khẩu mới của bạn
                    </div>
                  ),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu rút tiền khác với mật khẩu xác nhận"));
                  },
                }),
              ]}
            >
              <Input.Password
                className="px-[15px]"
                placeholder="Vui lòng xác nhận lại mật khẩu rút tiền của bạn"
                iconRender={(visible) =>
                  visible ? (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEye}
                      color="rgb(136, 136, 136)"
                    />
                  ) : (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEyeSlash}
                      color="rgb(136, 136, 136)"
                    />
                  )
                }
              />
            </Form.Item>
            <Form.Item
              label={<div className="font-bold text-wrap pt-[7px]"></div>}
            >
              <div className="col-start-4 col-span-4 flex gap-2 max-md:justify-center">
                <Button htmlType="submit">gửi đi</Button>
                <Button onClick={handleCloseForm}>huỷ bỏ</Button>
              </div>
            </Form.Item>
          </Form>
          <Modal
            modalRender={(modal: any) => {
              return React.cloneElement(modal, {
                style: {
                  ...modal.props.style,
                  ...{ padding: 0 },
                },
              });
            }}
            open={isVisible}
            width={320}
            className="text-[14px] p-2"
            closeIcon={false}
            footer={null}
            zIndex={10000}
          >
            <div className="flex flex-col rounded-md">

              <div className="w-full h-[1px] bg-slate-200 mt-4" />
              {typeErrorApi.status ? (
                <p className="py-2 px-4">
                  Mật khẩu rút tiền của bạn đã cài đặt thành công
                </p>
              ) : (
                <p className="py-2 px-4">{typeErrorApi.msg}</p>
              )}

              <div className="w-full h-[1px] bg-slate-200" />
              <button
                className="w-fit  text-black py-2 px-3 rounded-md self-end my-4"
                onClick={handleConfirm}
              >
                xác nhận
              </button>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <div className="p-4 mb-4 bg-[#fcf8e3] border-solid border-[1px] border-[#faebcc]">
            <FontAwesomeIcon
              fontSize={17}
              icon={faInfoCircle}
              className="fa fa-info-circle"
              style={{ color: "#8a6d3b", fontSize: "16px" }}
            />{" "}
            mật khẩu rút tiền chưa cài đặt, vui lòng cài đặt mật khẩu rút tiền
            trước
          </div>

          <Form
            name="basic"
            layout="horizontal"
            form={form}
            onFinish={onFinish}
            className="px-6"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            <Form.Item
              className="font-bold"
              label="mật khẩu rút tiền"
              name="newPassword"
            >
              <Input.Password
                className="font-normal"
                placeholder="vui lòng nhập mật khẩu rút tiền của bạn"
                iconRender={(visible) =>
                  visible ? (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEye}
                      color="rgb(136, 136, 136)"
                    />
                  ) : (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEyeSlash}
                      color="rgb(136, 136, 136)"
                    />
                  )
                }
              />
            </Form.Item>
            <Form.Item className="font-bold" label="Xác nhận mật khẩu rút tiền">
              <Input.Password
                className="font-normal"
                placeholder="Vui lòng xác nhận lại mật khẩu rút tiền của bạn"
                iconRender={(visible) =>
                  visible ? (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEye}
                      color="rgb(136, 136, 136)"
                    />
                  ) : (
                    <FontAwesomeIcon
                      fontSize={17}
                      icon={faEyeSlash}
                      color="rgb(136, 136, 136)"
                    />
                  )
                }
              />
            </Form.Item>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-start-4 col-span-4 flex gap-2 max-md:justify-center">
                <Button htmlType="submit">gửi đi</Button>
                <Button onClick={() => router.push("/")}>huỷ bỏ</Button>
              </div>
            </div>
          </Form>
          <Modal
            modalRender={(modal: any) => {
              return React.cloneElement(modal, {
                style: {
                  ...modal.props.style,
                  ...{ padding: 0 },
                },
              });
            }}
            open={isVisible}
            width={298}
            className="text-[14px]"
            closeIcon={false}
            footer={null}
            zIndex={100000}
          >
            <div className="flex flex-col rounded-md">
              <div className="flex flex-col px-4 pt-2">
                <p className="text-[16px] font-semibold">gợi ý</p>
                {typeErrorApi.status ? (
                  <p className="text-[#cfcfcf]">3599A2BDAG1268BFE145F0</p>
                ) : (
                  <p className="text-[#cfcfcf]">3F2D8849AG1268B44296FB</p>
                )}
              </div>
              <div className="w-full h-[1px] bg-slate-200 mt-4" />
              {typeErrorApi.status ? (
                <p className="py-2 px-4">
                  Mật khẩu rút tiền của bạn đã cài đặt thành công
                </p>
              ) : (
                <p className="py-2 px-4">{typeErrorApi.msg}</p>
              )}

              <div className="w-full h-[1px] bg-slate-200" />
              <button
                className="w-fit bg-[#337ab7] hover:bg-[#286090] text-white py-2 px-3 rounded-md self-end my-4"
                onClick={handleConfirm}
              >
                xác nhận
              </button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}

export default function ChangePasswordMoney() {
  return (
    <Collapse activeKey={"1"} className="CollapseDisIcon">
      <Collapse.Panel header="Thay đổi mật khẩu rút tiền" key="1">
        <FormChangePasswordMoney />
      </Collapse.Panel>
    </Collapse>
  );
}
