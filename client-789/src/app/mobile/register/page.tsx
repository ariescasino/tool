/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser } from "@/context/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Form, Input, Modal, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  faEye,
  faEyeSlash,
  faSync,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import apiClient from "@/api/apiClient";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import styles from "../../../styles/mobile-modal-register.module.css";
import { getMessage } from "@/utils/check";
import Link from "next/link";
import { registerDto } from "@/dto/authDto";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import { getDomain } from "@/utils";
import "../login/style.css";
import { passwordPattern, patternAccount } from "@/utils/regex";
import ModalRegisterSuccess from "@/components/ModalRegisterSuccess";
import { API_GATE } from "@/constant/gate";
import ModalConfirmEnoughAge from "@/components/ModalConFirmEnoguAge/ModalConfimEngouAge";
import { useDebounce } from "react-use";
import { capcha, capchaKey } from "@/constant";

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function MobileRegister() {
  const { loginUser, user, setLoadingGame } = useUser();

  const [form] = Form.useForm();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);
  const [currentDomain, setCurrentDomain] = useState("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);
  const [originLink, setOriginLink] = useState<string>("");
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const [openModalNoti, setOpenModalNoti] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [openEnoughAge, setOpenEnoughAge] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [debouncedUsername, setDebouncedUsername] = useState(username);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [textModalError, setTextModalError] = useState<{
    text: string;
    type: "form" | "api";
  }>({ text: "", type: "form" });
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
      setOriginLink(window.location.origin);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    router.push("/");
  };

  const handleOnClickCaptcha = async () => {
    setLoadingCaptcha(true);
    await apiClient
      .post<any>({ url: ConfigCapchaEndPoint.REG })
      .then((response) => {
        // Xử lý dữ liệu trả về từ response
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
      .finally(() => setLoadingCaptcha(false));
  };

  const onFinish = async (values: any) => {
    const data: registerDto = {
      username: values.username.trim(),
      password: values.password.trim(),
      phone: values.phone.trim(),
      captchaText: values.captchaText ?? "789bet",
      captchaKey: captcha?.key ?? "789bet",
      email: values.email ? values.email.trim() : "",
      gate: API_GATE,
      referral: currentDomain,
      withdrawPassword: values.withdrawPassword.trim(),
    };
    setLoadingGame(true);
    setLoadingRegister(true);
    await apiClient
      .post<any>(
        {
          url: ConfigAuthEndPoint.REGISTER,
          data,
        },
        { shouldNotify: false }
      )
      .then((response) => {
        if (response.data.user && response.data.access_token) {
          const { access_token, user } = response.data;
          setTokenToLocalStorage(access_token);
          loginUser(user, access_token);
          setOpenModalNoti(true);
          setTimeout(() => {
            router.push("/");
            setOpenModalNoti(false);
            form.resetFields();
          }, 5000);
        } else {
          form.setFieldValue("captchaText", undefined);
          setTextModalError({
            text: getMessage(response.data.msg),
            type: "api",
          });
          setOpenModalError(true);
        }
      })
      .finally(() => {
        setLoadingGame(false);
        setLoadingRegister(false);
      });
  };

  useDebounce(
    () => {
      setDebouncedUsername(username);
    },
    500,
    [username]
  );

  useEffect(() => {
    if (!debouncedUsername) return;

    if (!patternAccount.test(debouncedUsername)) {
      setUsernameError("Tài khoản sai định dạng");
      return;
    }
    const checkUsernameExists = async () => {
      try {
        const response = await apiClient.get({
          url: `/auth/checkUsername?username=${debouncedUsername}`,
          data: {
            gate: API_GATE,
          },
        });

        setCheckingUsername(false);

        if (response.data.data.exist) {
          setUsernameError("tên tài khoản này đã tồn tại");
          return;
        }

        setUsernameError("");
      } catch (error) {
        setCheckingUsername(false);
        setUsernameError("Đã có lỗi xảy ra, vui lòng thử lại!");
      }
    };

    checkUsernameExists();
  }, [debouncedUsername]);
  const validateNoWhitespace = (_: any, value: string) => {
    if (!value) {
      setUsernameError("Vui lòng điền tên tài khoản!");
    } else if (/\s/.test(value)) {
      return Promise.reject(new Error("Không được chứa kí tự khoảng trắng"));
    }
    return Promise.resolve();
  };

  return (
    <div>
      <Modal
        className={
          "mobile-modal-login bg-white !m-0 !max-w-full min-h-full !top-0 !pb-0"
        }
        open={visible}
        onOk={() => handleClose()}
        onCancel={() => handleClose()}
        closeIcon={
          <FontAwesomeIcon icon={faTimes} fontSize={30} color="#fc8f00" />
        }
        width={1000}
        footer={null}
        styles={{
          content: {
            borderRadius: 0,
          },
        }}>
        <div className="flex justify-center pt-2 w-[70.5%] mb-[10px] mx-auto">
          <Image
            src="/images/login/register_logo.png"
            alt=""
            width={212}
            height={106}
            className="w-full"
          />
        </div>

        <div className=" text-white text-center flex items-center h-[110px] px-4 pb-4">
          <div className="flex flex-col items-center">
            <Image
              src="/images/login/suarez.png"
              alt=""
              width={120}
              height={190}
              className="h-[110px] w-[98px] "
            />
          </div>

          <div className="pt-4">
            <h1 className=" font-bold  text-[23px] ">Đại Sứ Thương Hiệu</h1>
            <div className="pt-1 flex gap-4">
              <div className="text-left">
                <h2 className="text-[26px] leading-[24px] text-[#f37124] ">
                  Luis Suarez
                </h2>
                <p className="text-white text-lg opacity-97 font-light">
                  Năm 2022 - 2023
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/login/img_sign.png"
                  alt=""
                  width={80}
                  height={100}
                  className="w-[71px] h-[83px] pb-6"
                />
              </div>
            </div>
          </div>

          {/* Chữ ký */}
          {/* <div className='mt-6'>
            <p className='italic text-white text-lg'>Luis Suarez</p>
          </div> */}
        </div>

        {/* 
        <div className='grid col-span-2 grid-cols-2 pt-5'>
          <div className='col-span-2 flex mt-2 justify-between'>
            <div className='flex flex-col text-[#fff] relative'>
              <h2 className='text-base font-bold'>Đại Sứ Thương Hiệu</h2>
              <p className='text-[15px] font-normal leading-4'>
                Luis Suarez (2022 - 2023)
              </p>
            </div>
            <img
              className='pl-4 w-[94px] h-[57px]'
              src='/images/modal-images/signature.png'
              alt=''
            />
          </div>

          <div className='col-span-2 flex mt-2 justify-between pb-2'>
            <div className='flex flex-col text-[#fff] relative pt-6'>
              <h2 className='text-base font-bold'>Đối Tác Chính Thức</h2>
              <h2 className='text-[15px] font-bold'>Năm 2023 - 2025</h2>
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
                height={47}
                width={133}
              />
            </div>
          </div>

          <div className='mb-2'>
            <p className={styles.lg1}>Villarreal CF & OKVIP</p>
            <p className={`${styles.lg2}`}>Argentina AFA & OKVIP</p>
          </div>
        </div> */}

        <Form
          name="basic"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="bg-[#000] form-register">
          <div className={styles.formLogin}>
            <div className="flex flex-col gap-1 pb-0 pt-[21px]">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Tên đăng nhập
              </div> */}
              <Form.Item
                name="username"
                className="formCustom"
                validateStatus={usernameError && "error"}
                help={usernameError}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên tài khoản!",
                  },
                  {
                    validator: () => {
                      if (usernameError) {
                        return Promise.reject(usernameError);
                      }
                      return Promise.resolve();
                    },
                  },
                  { validator: validateNoWhitespace },

                  // ({ getFieldValue }) => ({
                  //   validator(_, value) {

                  //   },
                  // }),
                  //   {
                  //     pattern: /^[a-zA-Z][a-zA-Z0-9_]{1,14}$/,
                  //     message: "Tài khoản sai định dạng",
                  //   },
                ]}>
                <Input
                  className={styles.formInput}
                  placeholder="Tên đăng nhập"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
              <span className={styles.helptext}>
                Lớn hơn 5 ký tự, bằng chữ, không thêm các ký tự đặc biệt.
              </span>
            </div>
            <div className="flex flex-col gap-1 pb-0 pt-[6px] ">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Mật khẩu
              </div> */}
              <Form.Item
                name="password"
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                  {
                    pattern: passwordPattern,
                    message:
                      "Mật khẩu sai định dạng,ít nhất có 6 ký tự và phải chứ chữ và số",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (getFieldValue("username") !== value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu không trùng với tên đăng nhập!")
                      );
                    },
                  }),
                ]}>
                <Input.Password
                  iconRender={(visible) =>
                    visible ? (
                      <FontAwesomeIcon icon={faEye} color="#ffffff" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} color="#ffffff" />
                    )
                  }
                  className={styles.formInput}
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Hơn 6 Ký Tự Phải Bao Gồm Chữ Cái Và Số
              </span>
            </div>

            <div className="flex flex-col gap-1 pb-0 pt-[6px]">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Xác nhận mật khẩu
              </div> */}
              <Form.Item
                name="CheckPassword"
                dependencies={["password"]}
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp!"));
                    },
                  }),
                ]}>
                <Input.Password
                  iconRender={(visible) =>
                    visible ? (
                      <FontAwesomeIcon icon={faEye} color="#ffffff" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} color="#ffffff" />
                    )
                  }
                  className={styles.formInput}
                  placeholder="Vui lòng nhập lại mật khẩu"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Vui Lòng Xác Nhận Lại Mật Khẩu Của Bạn
              </span>
            </div>

            <div className="flex flex-col gap-1 pb-0 pt-[6px]">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Mật khẩu rút tiền
              </div> */}
              <Form.Item
                name="withdrawPassword"
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu rút tiền!",
                  },
                ]}>
                <Input.Password
                  iconRender={(visible) =>
                    visible ? (
                      <FontAwesomeIcon icon={faEye} color="#ffffff" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} color="#ffffff" />
                    )
                  }
                  className={styles.formInput}
                  placeholder="Mật khẩu rút tiền"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Vui Lòng Nhập Mật Khẩu Rút Tiền
              </span>
            </div>

            {/* <div className="flex flex-col gap-1 pb-0 pt-[6px] ">
              <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Họ tên thật
              </div>
              <Form.Item
                name="name"
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên thật của bạn!",
                  },
                  // {
                  //   pattern: /^[A-Z][A-Z]+$/,
                  //   message: "Cần viết in hoa không dấu",
                  // },
                ]}
                normalize={(value) => value.toUpperCase()}>
                <Input
                  className={styles.formInput}
                  placeholder="Ví dụ: NGUYEN VAN A"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Cần Giống Với Họ Tên Thẻ Ngân Hàng, Viết Hoa Không Dấu.
              </span>
            </div> */}

            <div className="flex flex-col gap-1 pb-0 pt-[6px] ">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Số điện thoại
              </div> */}
              <Form.Item
                name="phone"
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại của bạn!",
                  },
                ]}>
                <Input
                  className={`${styles.formInput} inputHolderWhite`}
                  placeholder="Số điện thoại"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Số điện thoại nhập bắt đầu bằng 84, VD: 8468686789.
              </span>
            </div>

            <div className="flex flex-col gap-1 pb-0 pt-[6px] ">
              {/* <div className={styles.labelFormInput}>
                <FontAwesomeIcon
                  icon={faStar}
                  color="#fc8f00"
                  className="mr-[0.25rem]"
                />
                Địa chỉ email
              </div> */}
              <Form.Item
                name="email"
                className="formCustom"
                rules={[
                  // {
                  //   required: true,
                  //   message: "Vui lòng nhập địa chỉ email của bạn!",
                  // },
                  {
                    type: "email",
                    message: "Vui lòng nhập đúng email của bạn",
                  },
                ]}>
                <Input
                  className={styles.formInput}
                  placeholder="Địa chỉ Email"
                />
              </Form.Item>
              <span className={styles.helptext}>
                Điền chính xác để lấy lại mật khẩu khi quên (Bắt Buộc).
              </span>
            </div>

            {/* <div className="flex flex-col gap-1 pb-0  relative "> 
              <Form.Item
                name="captchaText"
                className="formCustom"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mã xác minh!",
                  },
                ]}>
                <Input
                  className={styles.formInput}
                  placeholder="Mã xác minh"
                  onClick={() => handleOnClickCaptcha()}
                  onChange={(e) =>
                    form.setFieldsValue({ captchaText: e.target.value })
                  }
                  suffix={
                    <FontAwesomeIcon
                      onClick={handleOnClickCaptcha}
                      icon={faSync}
                      color="#d2d2d2"
                      fontSize={14}
                    />
                  }
                />
              </Form.Item>
              <div className="absolute right-[42px] top-[28px] scale-[1.8] h-full z-50">
                {loadingCaptcha ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ fontSize: 16 }} />}
                  />
                ) : (
                  captcha?.svg && (
                    <img src={`data:image/png;base64,${captcha?.svg}`} alt="" />
                  )
                )}
              </div>
              <span className={styles.helptext}></span>
            </div> */}
          </div>
          <Form.Item
            name="check"
            valuePropName="checked"
            className="formCustom">
            <div className=" flex w-full mb-2">
              <Checkbox
                checked
                className=" flex w-full text-center  justify-center items-center">
                <span className="text-white text-sm">Tôi đã hiểu</span>
                <span
                  className="cursor-pointer underline text-[#fc8f00]"
                  onClick={() => setOpenEnoughAge(true)}>
                  "Thoả thuận đăng kí người dùng"
                </span>
              </Checkbox>
            </div>
          </Form.Item>
          <Form.Item className="!mb-4">
            <div className="flex h-[40px] rounded-full bg-[#2e2c2b] overflow-hidden text-base uppercase font-medium">
              <Link
                href="/mobile/login"
                className="flex-1 flex items-center justify-center text-white hover:text-white transition-colors">
                Đăng nhập
              </Link>
              <Button
                htmlType="submit"
                className="btn-register border-none uppercase"
                disabled={loadingRegister}>
                Đăng ký ngay {loadingRegister && "..."}
              </Button>
            </div>
          </Form.Item>

          {/* <p className='text-base text-white text-center'>
            Bạn đã có tài khoản ?
            <Link
              href={'/mobile/login'}
              className='text-[#fc8f00] underline ml-2'
            >
              Đăng nhập ngay
            </Link>
          </p> */}
        </Form>
        <div className="relative mb-[70px] px-3  ">
          <Image
            className="w-[100%] h-auto"
            src="/images/account/link.jpg"
            alt=""
            height={40}
            width={400}
          />
          <div className="absolute top-[14%] left-[64%]">
            <p className="text-[#ff0000] opacity-90 font-bold text-[15px]">
              {getDomain(originLink)}
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        open={openModalError}
        onCancel={() => setOpenModalError(false)}
        footer={<></>}
        closeIcon={<></>}
        zIndex={10000}
        className="customModalLoginMobile">
        {textModalError.type === "api" && (
          <h2 className="flex justify-between mb-[16px] font-[500] text-[20px] leading-[32px]">
            <span>gợi ý</span>
          </h2>
        )}
        <div>
          {textModalError.type === "api" && <>3 - </>}
          {textModalError.text}
        </div>
        <div className="text-right">
          <button
            onClick={() => setOpenModalError(false)}
            className="h-[52px] my-[8px]">
            xác nhận
          </button>
        </div>
      </Modal>
      <ModalRegisterSuccess
        openModalNoti={openModalNoti}
        setOpenModalNoti={setOpenModalNoti}
      />
      <ModalConfirmEnoughAge
        openEnoughAge={openEnoughAge}
        setOpenEnoughAge={setOpenEnoughAge}
        nameBtn="tôi đã hiểu"
        title="“Thỏa thuận đăng ký người dùng”"
      />
    </div>
  );
}
