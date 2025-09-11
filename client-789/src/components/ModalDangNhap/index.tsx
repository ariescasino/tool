/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */

import apiClient from "@/api/apiClient";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useUser } from "@/context/useUserContext";
import { LoadingOutlined } from "@ant-design/icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Modal, Spin } from "antd";
import { debounce } from "lodash";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ModalForgotPassword from "../ModalForgotPassword";
import styles from "./ModalDangNhap.module.css";
import { capcha, capchaKey } from "@/constant";
import { openNotification } from "@/utils/check";
import { API_GATE } from "@/constant/gate";
interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleDangKi: () => void;
}

interface Pcaptcha {
  key: string;
  svg: string | undefined;
}

export default function ModalDangNhap({
  isOpen,
  setIsOpen,
  handleDangKi,
}: Props) {
  const { user } = useUser();

  const [form] = Form.useForm();
  const router = useRouter();
  const pathname = usePathname();
  // state
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);
  const [openModalForgot, setOpenModalForgot] = useState(false);
  const [currentDomain, setCurrentDomain] = useState("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
    }
  }, []);

  // useEffect
  useEffect(() => {
    setCaptcha(undefined);
  }, [isOpen]);

  const { loginUser } = useUser();

  const onFinish = async (values: any) => {
    setLoadingLogin(true);
    await apiClient
      .post<any>({
        url: ConfigAuthEndPoint.LOGIN,
        data: {
          // Dữ liệu cần gửi trong yêu cầu POST
          username: values.username,
          password: values.password,
          captchaText: values.captchaText ?? "789bet",
          captchaKey: captcha?.key ?? "789bet",
          gate: API_GATE,
          referral: currentDomain,
        },
      })
      .then((response) => {
        if (response.data.data) {
          const { data, access_token } = response.data;
          setTokenToLocalStorage(access_token);
          loginUser(data, access_token);
          setIsOpen(false);

          form.resetFields();

          // openNotification({
          //   type: "success",
          //   message: "Đăng nhập thành công!",
          // });
        }
      })
      .catch((error) => {})
      .finally(() => setLoadingLogin(false));
  };

  const handleOnClickCaptcha = async () => {
    setLoadingCaptcha(true);
    await apiClient
      .post({
        url: ConfigCapchaEndPoint.LOG,
      })
      .then((response) => {
        const { data } = response.data;
        setCaptcha({
          key: data.key,
          svg: data.svg,
        });
      })
      .catch((error) => {
        setCaptcha({
          svg: capcha,
          key: capchaKey,
        });
      })
      .finally(() => {
        setLoadingCaptcha(false);
      });
  };

  const debouncedOnClickCaptcha = useCallback(
    debounce(handleOnClickCaptcha, 500),
    []
  );
  const onClickCapcha = useCallback(() => {
    debouncedOnClickCaptcha();
  }, []);
  useEffect(() => {
    if (user) {
      setIsOpen(false);
      router.push(`${pathname}${location.search}`);
    }
  }, [user]);

  if (user) {
    return null;
  } else {
    return (
      <Modal
        open={isOpen}
        onOk={() => {
          setIsOpen(false);
          form.resetFields();
        }}
        onCancel={() => {
          setIsOpen(false);
          router.push(pathname);
          form.resetFields();
        }}
        afterClose={() => form.resetFields()}
        closeIcon={
          <Image src="/images/icons/x.png" alt="" width={32} height={32} />
        }
        width={509}
        footer={null}
        className="modalDangNhap !top-[50px]">
        <div>
          <div className="w-full flex justify-center">
            <Image
              src="/images/login/logoDangki.png"
              alt=""
              width={203}
              height={106}
            />
          </div>
          <div className="grid col-span-2 grid-cols-2 ">
            <div className="col-span-2 flex mt-2 justify-between">
              <div className="flex flex-col text-[#fff] relative pt-4">
                <p className="text-[16px] font-bold font-inherits">
                  Đại Sứ Thương Hiệu
                </p>
                <p className="text-[15x] font-normal leading-3 font-inherits">
                  Luis Suarez (2022 - 2023)
                </p>
              </div>
              <div className="pb-4">
                <Image
                  src="/images/login/signature.png"
                  alt=""
                  width={58}
                  height={57}
                />
              </div>
            </div>

            {/* <div className='col-span-2 flex  justify-between pb-2'>
              <div className='flex flex-col text-[#fff] relative'>
                <p className='text-[16px] font-bold leading-5 font-inherits'>
                  Đối Tác Chính Thức
                </p>
                <p className='text-[15px] font-bold leading-3 font-inherits'>
                  Năm 2023 - 2025
                </p>

                <p className={`${styles.p1} text-[14px]`}>
                  Villarreal CF & OKVIP
                </p>
                <p className={`${styles.p2} text-[14px]`}>
                  Argentina AFA & OKVIP
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <div className='relative'>
                  <Image
                    className={`${styles.p1} w-[45px]`}
                    src='/images/login/1.png'
                    alt=''
                    width={45}
                    height={45}
                  />
                  <Image
                    className={`${styles.p2} w-[54px]`}
                    src='/images/login/2.png'
                    alt=''
                    width={54}
                    height={54}
                  />
                </div>
                <div className='w-[0.6px] h-[60px] bg-[#fff]' />
                <Image
                  className=' h-[47px] w-[133px]'
                  src='/images/login/okvip.png'
                  alt=''
                  width={133}
                  height={47}
                />
              </div>
            </div> */}
          </div>

          <Form name="basic" layout="vertical" form={form} onFinish={onFinish}>
            <div className="grid grid-cols-1 ">
              <div className=" flex flex-col gap-1 pt-2">
                <Form.Item
                  name="username"
                  className={styles.boxInput}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tài khoản!",
                    },
                  ]}>
                  <Input
                    placeholder="Tài khoản"
                    prefix={
                      <Image
                        className="w-[30px] h-[30px] ml-4 mr-[2px]"
                        src="/images/login/user.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                    }
                    className={styles.inputForm}
                  />
                </Form.Item>
              </div>
              <div className=" flex flex-col gap-1  ">
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                  ]}>
                  <Input.Password
                    iconRender={(visible) =>
                      visible ? (
                        <FontAwesomeIcon icon={faEye} color="#888888" />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} color="#888888" />
                      )
                    }
                    placeholder="Mật khẩu"
                    prefix={
                      <Image
                        className="w-[30px] h-[30px] ml-4"
                        src="/images/login/password.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                    }
                    className={styles.inputForm}
                  />
                </Form.Item>
              </div>

              {/* <div className=" flex flex-col gap-1">
                <Form.Item
                  name="captchaText"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mã xác nhận!",
                    },
                  ]}>
                  <Input
                    onClick={onClickCapcha}
                    onChange={(e) =>
                      form.setFieldsValue({ captchaText: e.target.value })
                    }
                    placeholder="Mã xác minh"
                    prefix={
                      <Image
                        className="w-[30px] h-[30px] ml-4"
                        src="/images/login/key.png"
                        alt=""
                        width={30}
                        height={30}
                      />
                    }
                    className={styles.inputForm}
                  />
                  <div className="absolute right-[40px] bottom-[-28px] scale-[2] h-full z-50">
                    {loadingCaptcha ? (
                      <Spin
                        indicator={<LoadingOutlined style={{ fontSize: 16 }} />}
                      />
                    ) : (
                      captcha?.svg && (
                        <Image
                          src={`data:image/png;base64,${captcha?.svg}`}
                          alt=""
                          width={44}
                          height={18}
                        />
                      )
                    )}
                  </div>
                </Form.Item>
              </div> */}
            </div>

            <div className={`${styles.note}`}>
              <p>Không cung cấp thông tin tài khoản cho người khác.</p>
              <p>
                <strong>789BET</strong> không yêu cầu hội viên xác thực thông
                tin khi đăng nhập, hãy lập tức thay đổi mật khẩu nếu gặp web giả
                mạo. Vui lòng tải APP để truy cập an toàn.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Form.Item className="mb-0">
                <div className="w-full flex gap-12 items-center justify-center">
                  <Button
                    htmlType="submit"
                    // htmlType="submit"
                    // onSubmit={onFinish}
                    loading={loadingLogin}
                    className={styles.inputSubmit}>
                    Đăng nhập
                  </Button>
                </div>
              </Form.Item>
              <div className={styles.registerBox}>
                <button
                  onClick={() => handleDangKi()}
                  className={styles.btnRegister}>
                  Đăng Ký
                </button>
              </div>
            </div>

            <div className="flex justify-between gap-4 pb-2">
              <div
                className={styles.boxBottom}
                onClick={() => setOpenModalForgot(true)}>
                Lấy Lại Mật Khẩu <br /> Qua Số Điện Thoại
              </div>
              <div className={styles.boxBottom}>
                Lấy Lại Mật Khẩu
                <br />
                Qua Địa Chỉ Email
              </div>
            </div>
          </Form>
        </div>
        <ModalForgotPassword
          isOpen={openModalForgot}
          setIsOpen={setOpenModalForgot}
        />
      </Modal>
    );
  }
}
