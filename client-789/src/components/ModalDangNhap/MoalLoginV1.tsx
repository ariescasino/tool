/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */

import apiClient from "@/api/apiClient";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useUser } from "@/context/useUserContext";
import { LoadingOutlined } from "@ant-design/icons";
import { faEye, faEyeSlash, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Modal, Spin } from "antd";
import { debounce } from "lodash";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ModalForgotPassword from "../ModalForgotPassword";
import { capcha, capchaKey } from "@/constant";
import { getMessage, openNotification } from "@/utils/check";
import BaseModal from "../BaseModal/BaseModal";
import { getDomain, onKeyPressEnter } from "@/utils";
import styles from "./styles.module.scss";
import ModalError from "../ModalError";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
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

export default function ModalLoginV1({
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
  const [openModalError, setOpenModalError] = useState(false);
  const [textModalError, setTextModalError] = useState("");
  const [currentDomain, setCurrentDomain] = useState("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [originLink, setOriginLink] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
      setOriginLink(window.location.origin);
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
      .post<any>(
        {
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
        },
        { shouldNotify: false }
      )
      .then((response) => {
        if (response.data.status === false) {
          setTextModalError(getMessage(response.data.msg));
          setOpenModalError(true);
          form.setFieldValue("captchaText", undefined);
        }
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
      .catch((error) => {
        console.log(error);
      })
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

  const handleCloseModal = () => {
    setIsSubmitting(false);
    form.setFieldValue("captchaText", undefined);
    setOpenModalError(false);
  };

  const handleFormFailed = (errorInfo: any) => {
    if (isSubmitting) {
      const usernameError = errorInfo.errorFields.find(
        (field: any) => field.name[0] === "username"
      );
      const passwordError = errorInfo.errorFields.find(
        (field: any) => field.name[0] === "password"
      );
      if (usernameError) {
        setOpenModalError(true);
        setTextModalError("Vui lòng nhập tên tài khoản");
      } else if (passwordError) {
        setOpenModalError(true);
        setTextModalError("Vui lòng nhập mật khẩu");
      } else {
        setOpenModalError(true);
        setTextModalError(
          "mã xác nhận không được bỏ trống, xin lấy mã xác nhận"
        );
      }
    }
    setIsSubmitting(false);
  };

  const debouncedOnClickCaptcha = useCallback(
    debounce(handleOnClickCaptcha, 500),
    []
  );

  useEffect(() => {
    if (user) {
      setIsOpen(false);
      router.push(`${pathname}${location.search}`);
    }
  }, [user]);
  const handleResetData = () => {
    form.resetFields();
    setCaptcha(undefined);
    router.push(pathname);
  };

  if (user) {
    return null;
  } else {
    return (
      <>
        <BaseModal
          afterClose={handleResetData}
          isModalOpen={isOpen}
          setIsModalOpen={(isOpen: boolean) => setIsOpen(isOpen)}
          title=""
          width="1200px"
          closeIcon={
            <Image
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/x.png"
              alt=""
              width={32}
              height={32}
            />
          }>
          <div className={styles.boxForm}>
            <div className="  flex gap-8">
              <div className="pt-24 relative ">
                <Image
                  src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/suarezGroup.png"
                  alt=""
                  width={497}
                  height={532}
                />
                <div className=" left-[10%] absolute bottom-[11%]  gap-12">
                  <p className="font-helvetica my-0 text-[22px] font-semibold">
                    Đại Sứ Thương Hiệu
                  </p>
                  <p className="font-helvetica text-lg">
                    <span className="text-[#fc8f00] text-[22px] font-semibold">
                      Luis Suarez{" "}
                    </span>
                    (Năm 2022 - 2023)
                  </p>
                </div>
                <div className="absolute right-[0%]  bottom-[11%]">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/mainSignature.png"
                    alt=""
                    width={112}
                    height={81}
                  />
                </div>
              </div>

              <div className="w-1/2 ">
                <div className="pt-2 flex justify-center">
                  <Image
                    src="/images/login/register_logo.png"
                    alt=""
                    width={259}
                    height={135}
                    className="h-[135px]"
                  />
                </div>
                <div className="form_content">
                  <Form
                    className="bg-black bg-opacity-70 "
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={handleFormFailed}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "",
                          validateTrigger: "onSubmit",
                        },
                      ]}>
                      <Input
                        placeholder="Tài khoản"
                        prefix={
                          <Image
                            className="w-[30px] h-[30px]"
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/user.png"
                            alt=""
                            width={30}
                            height={30}
                          />
                        }
                        className="input_value"
                        onKeyDown={onKeyPressEnter}
                      />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "",
                          validateTrigger: "onSubmit",
                        },
                      ]}>
                      <Input.Password
                        iconRender={(visible) =>
                          visible ? (
                            <FontAwesomeIcon icon={faEye} color="#ffffff" />
                          ) : (
                            <FontAwesomeIcon
                              icon={faEyeSlash}
                              color="#ffffff"
                            />
                          )
                        }
                        placeholder="Mật khẩu"
                        prefix={
                          <Image
                            className="w-[30px] h-[30px] "
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/password.png"
                            alt=""
                            width={30}
                            height={30}
                          />
                        }
                        className="input_value"
                        onKeyDown={onKeyPressEnter}
                      />
                    </Form.Item>
                    {/* <div className="relative">
                      <Form.Item
                        name="captchaText"
                        rules={[
                          {
                            required: true,
                            message: "",
                            validateTrigger: "onSubmit",
                          },
                        ]}
                      >
                        <Input
                          onClick={() => handleOnClickCaptcha()}
                          onChange={(e) =>
                            form.setFieldsValue({ captchaText: e.target.value })
                          }
                          placeholder="Mã xác minh"
                          prefix={
                            <Image
                              className="w-[30px] h-[30px]"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/key.png"
                              alt=""
                              width={30}
                              height={30}
                            />
                          }
                          suffix={
                            <FontAwesomeIcon
                              onClick={handleOnClickCaptcha}
                              icon={faSync}
                              color="#d2d2d2"
                              fontSize={18}
                            />
                          }
                          className="input_value"
                          onKeyDown={onKeyPressEnter}
                        />
                      </Form.Item>
                      <div className="absolute right-[55px] top-[22px] scale-[2] h-full z-50">
                        {loadingCaptcha ? (
                          <Spin
                            indicator={<LoadingOutlined spin />}
                            size="small"
                            className="pl-1 pb-1"
                          />
                        ) : (
                          captcha?.svg && (
                            <img
                              src={`data:image/png;base64,${captcha?.svg}`}
                              alt=""
                            />
                          )
                        )}
                      </div>
                    </div> */}

                    <div className="flex justify-center items-center group_button relative">
                      <button
                        onClick={() => handleDangKi()}
                        className="hover:cursor-pointer text-[#c0bebe] left-[0%] absolute hover:text-white transition-colors uppercase h-[50px] w-[170px] text-lg">
                        Đăng ký
                      </button>

                      <Button
                        htmlType="submit"
                        onClick={() => setIsSubmitting(true)}
                        disabled={loadingLogin}
                        className="uppercase pt-1 btn-login border-none text-center absolute text-lg font-helvetica">
                        Đăng nhập{" "}
                        {loadingLogin && (
                          <span className="text-white">...</span>
                        )}
                      </Button>
                    </div>
                  </Form>
                  <div className="relative pt-4">
                    <Image
                      className="w-[423px] h-[119px] border-none"
                      src="/images/account/link.jpg"
                      alt=""
                      height={119}
                      width={423}
                    />
                    <div className="absolute top-[24.5%] left-[65%] ">
                      <p className="text-[#fe0000]  opacity-90 font-bold text-[14px]">
                        {getDomain(originLink)}
                      </p>
                    </div>
                    {/* <div className='absolute bottom-[11%] left-[67%]'>
                    <p className='text-white  font-bold text-[12px]'>
                      {getDomain(originLink)}
                    </p>
                  </div> */}
                  </div>
                  <div className=" mt-6 flex justify-center items-center w-full gap-16">
                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-[10px] text-base text-white">
                        LẤY LẠI MẬT KHẨU
                      </p>
                      <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-1 justify-center items-center">
                          <Image
                            className=" h-[40px] w-[40px]"
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/email.png"
                            alt=""
                            height={40}
                            width={40}
                          />
                          <p className="uppercase text-xs text-white">Email</p>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                          <Image
                            className=" h-[40px] w-[40px]"
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/sms.png"
                            alt=""
                            height={40}
                            width={40}
                          />
                          <p className="uppercase text-xs text-white">SMS</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <p className="mb-[10px] text-base text-white flex items-center">
                        <Image
                          className=" h-[10px] w-[10px]"
                          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/icon_download.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                        TẢI APP
                      </p>
                      <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-1 justify-center items-center">
                          <Image
                            className=" h-[40px] w-[40px]"
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/google.png"
                            alt=""
                            height={40}
                            width={40}
                          />
                          <p className=" text-xs text-white">Google Play</p>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                          <Image
                            className=" h-[40px] w-[40px]"
                            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/login/app.png"
                            alt=""
                            height={40}
                            width={40}
                          />
                          <p className=" text-xs text-white">App Store</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseModal>
        <ModalError
          setOpenModal={handleCloseModal}
          openModal={openModalError}
          text={textModalError}
        />
      </>
    );
  }
}
