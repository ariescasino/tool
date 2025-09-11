/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import apiClient from "@/api/apiClient";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useUser } from "@/context/useUserContext";
import { loginDto } from "@/dto/authDto";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons/faSync";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer, Form, Input, Modal, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../styles/mobile-modal-login.module.css";
import Image from "next/image";
import IconUser from "@/components/IconSvg/IconUser";
import IconPw from "@/components/IconSvg/IconPassword";
import IconCheck from "@/components/IconSvg/IconCheck";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";
import { getDomain } from "@/utils";
import { getMessage } from "@/utils/check";
import { API_GATE } from "@/constant/gate";
import ModalConfirmEnoughAge from "@/components/ModalConFirmEnoguAge/ModalConfimEngouAge";
import { capcha, capchaKey } from "@/constant";

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function MobileLogin() {
  const { loginUser, user } = useUser();

  const [form] = Form.useForm();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);
  const [currentDomain, setCurrentDomain] = useState("");
  const [openCheckLink, setOpenCheckLink] = useState(false);
  const [loadingCaptcha, setLoadingCaptcha] = useState<boolean>(false);

  const [formCheckLink] = Form.useForm();
  const [isCheckLink, setIsCheckLink] = useState<boolean>(false);
  const [originLink, setOriginLink] = useState<string>("");
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [textModalError, setTextModalError] = useState<{
    text: string;
    type: "form" | "api";
  }>({ text: "", type: "form" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setVisible(false);
    router.back();
  };

  const handleOnClickCaptcha = () => {
    setLoadingCaptcha(true);
    apiClient
      .post<any>({ url: ConfigCapchaEndPoint.LOG })
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

  const handleFormFailed = (errorInfo: any) => {
    if (isSubmitting) {
      const allFields = form.getFieldsValue();
      const arrayFieldsName = Object.keys(allFields);

      const errorFieldsHandling = (fieldName: string) => {
        const fieldError = errorInfo.errorFields.find(
          (field: any) => field.name[0] === fieldName
        );

        if (fieldError) {
          setOpenModalError(true);
          setTextModalError({ text: fieldError.errors[0], type: "form" });
          return true; // Trả về true nếu tìm thấy lỗi
        }
        return false; // Trả về false nếu không có lỗi
      };

      for (const data of arrayFieldsName) {
        if (errorFieldsHandling(data)) {
          break; // Dừng vòng lặp nếu tìm thấy lỗi
        }
      }
    }

    setIsSubmitting(false);
  };

  const handleConfirmError = () => {
    setOpenModalError(false);
    setCaptcha(undefined);
    form.resetFields(["captchaText"]);
  };

  const onFinish = async (values: any) => {
    const data: loginDto = {
      username: values.username,
      password: values.password,
      captchaText: values.captchaText ?? "789bet",
      captchaKey: captcha?.key ?? "789bet",
      gate: API_GATE,
      referral: currentDomain,
    };

    setLoadingLogin(true);
    await apiClient
      .post<any>(
        {
          url: ConfigAuthEndPoint.LOGIN,
          data,
        },
        { shouldNotify: false }
      )
      .then((response) => {
        if (response.data.data) {
          const { data, access_token } = response.data;
          setTokenToLocalStorage(access_token);
          loginUser(data, access_token);

          setTimeout(() => {
            router.push("/");
          }, 500);
        } else {
          form.setFieldValue("captchaText", undefined);
          setTextModalError({
            text: getMessage(response.data.msg),
            type: "api",
          });
          setOpenModalError(true);
        }
      })
      .catch((error) => {})
      .finally(() => setLoadingLogin(false));
  };

  const handleCheckLink = () => {
    const inputValue = formCheckLink.getFieldValue("inputLink");
    if (inputValue && inputValue.includes("789")) {
      setIsCheckLink(true);
    } else {
      setIsCheckLink(false);
    }
  };

  const handleOpenCheckLink = () => {
    setOpenCheckLink(true);
  };

  const handleCloseModalCheckLink = () => {
    formCheckLink.setFieldsValue({ inputLink: "" });
    setOpenCheckLink(false);
    setIsCheckLink(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
      setOriginLink(window.location.origin);
    }
  }, []);

  if (user) {
    router.push("/");
    return <div>loading</div>;
  }

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
        footer={null}>
        {/* <div className='flex justify-center pt-4'>
          <Image src='/images/login/logo.png' alt='' width={203} height={106} />
        </div>
        <div className='grid col-span-2 grid-cols-2 pt-5'>
          <div className='col-span-2 flex mt-2 justify-between'>
            <div className='flex flex-col text-[#fff] relative'>
              <h2 className='text-base font-bold'>Đại Sứ Thương Hiệu</h2>
              <p className='text-[15px] font-normal leading-4'>
                Luis Suarez (2022 - 2023)
              </p>
            </div>
            <Image
              className='pl-4 w-[94px] h-[57px]'
              src='/images/modal-images/signature.png'
              alt=''
              width={94}
              height={57}
            />
          </div>

          <div className='col-span-2 flex mt-2 justify-between'>
            <div className='flex flex-col text-[#fff] relative pt-4'>
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
        </div>
        <div className='mb-2'>
          <p className={styles.lg1}>Villarreal CF & OKVIP</p>
          <p className={`${styles.lg2}`}>Argentina AFA & OKVIP</p>
        </div> */}
        <div className="flex justify-center pt-2 pb-4">
          <Image
            src="/images/login/register_logo.png"
            alt=""
            width={212}
            height={106}
            className=""
          />
        </div>

        <div className="text-white text-center flex items-center h-[110px] px-4 justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/login/suarez.png"
              alt=""
              width={120}
              height={190}
              className="h-[110px] w-[98px]"
            />
          </div>

          <div className="pt-4">
            <h1 className="text-left font-bold text-[23px]">
              Đại Sứ Thương Hiệu
            </h1>
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
        </div>
        <div className={styles.formLogin}>
          <Form
            name="basic"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={handleFormFailed}
            className="py-4 px-[15px] customFormLoginMobile">
            <div className="grid grid-cols-1 ">
              <div className=" flex flex-col gap-1">
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
                    placeholder="Vui lòng nhập tên tài khoản"
                    prefix={<IconUser />}
                    className={styles.formInput}
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
                        <FontAwesomeIcon icon={faEye} color="#ffffff" />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} color="#ffffff" />
                      )
                    }
                    placeholder="Vui lòng nhập mật khẩu"
                    prefix={<IconPw />}
                    className={styles.formInput}
                  />
                </Form.Item>
              </div>

              {/* <div className=" flex flex-col gap-1 relative">
                <Form.Item
                  name="captchaText"
                  rules={[
                    {
                      required: true,
                      message:
                        " mã xác nhận không được bỏ trống, xin lấy mã xác nhận",
                    },
                  ]}>
                  <Input
                    onClick={() => handleOnClickCaptcha()}
                    onChange={(e) =>
                      form.setFieldsValue({ captchaText: e.target.value })
                    }
                    placeholder="Vui lòng nhập mã xác minh"
                    prefix={<IconCheck />}
                    suffix={
                      <FontAwesomeIcon
                        onClick={handleOnClickCaptcha}
                        icon={faSync}
                        color="#d2d2d2"
                        fontSize={18}
                      />
                    }
                    className={styles.formInput}
                  />
                </Form.Item>
                <div className="absolute right-9 top-[4px] h-[32px] z-50">
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
                        className="h-full"
                      />
                    )
                  )}
                </div>
              </div> */}
            </div>
            <div className="flex h-[39px] rounded-full bg-[#2e2c2b] overflow-hidden text-base uppercase font-medium">
              <Link
                href="/mobile/register"
                className="flex-1 flex items-center justify-center text-white hover:text-white transition-colors uppercase">
                Đăng ký
              </Link>
              <Button
                htmlType="submit"
                className="btn-login border-none hover:!bg-none uppercase"
                disabled={loadingLogin}
                onClick={() => setIsSubmitting(true)}>
                Đăng nhập {loadingLogin && "..."}
              </Button>
            </div>
          </Form>
        </div>
        <div className="relative px-5">
          <Image
            className="w-[100%] h-auto"
            src="/images/account/link.jpg"
            alt=""
            height={40}
            width={400}
          />
          <div className="absolute top-[14%] left-[63.5%]">
            <p className="text-[#ff0000] opacity-90 font-bold text-[15px]">
              {getDomain(originLink)}
            </p>
          </div>
          {/* <div className='absolute bottom-[11%] left-[67%]'>
            <p className='text-white  font-bold text-[12px]'>
              {getDomain(originLink)}
            </p>
          </div> */}
        </div>

        <div className=" mt-4 mb-[70px] flex justify-center items-center w-full gap-16">
          <div className="flex flex-col justify-center items-center">
            <p className="mb-[10px] text-sm text-white">LẤY LẠI MẬT KHẨU</p>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-1 justify-center items-center">
                <Image
                  className=" h-[40px] w-[40px]"
                  src="/images/login/email.png"
                  alt=""
                  height={40}
                  width={40}
                />
                <p className="uppercase text-xs text-white">Email</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <Image
                  className=" h-[40px] w-[40px]"
                  src="/images/login/sms.png"
                  alt=""
                  height={40}
                  width={40}
                />
                <p className="uppercase text-xs text-white">SMS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="mb-[10px] text-sm text-white flex items-center">
              <Image
                className=" h-[10px] w-[10px]"
                src="/images/login/icon_download.png"
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
                  src="/images/login/google.png"
                  alt=""
                  height={40}
                  width={40}
                />
                <p className=" text-xs text-white">Google Play</p>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <Image
                  className=" h-[40px] w-[40px]"
                  src="/images/login/app.png"
                  alt=""
                  height={40}
                  width={40}
                />
                <p className=" text-xs text-white">App Store</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className='text-base text-white text-center'>
          Bạn chưa có tài khoản ?
          <Link
            href={'/mobile/register'}
            className='text-[#fc8f00] underline ml-2'
          >
            Đăng ký ngay
          </Link>
        </p> */}
        <div className={styles["side-btn"]} onClick={handleOpenCheckLink}>
          <div className={styles["btn-close"]}>
            {/* <i className="fal fa-times"></i> */}
            <FontAwesomeIcon icon={faTimes} fontSize={15} color="#fc8f00" />
          </div>
        </div>
        <Drawer
          placement="bottom"
          open={openCheckLink}
          onClose={handleCloseModalCheckLink}
          height="60vh"
          className={styles["drawer-check-link"]}>
          {/* <iframe src='https://domain.cskh16.com/?group=789BET&amp;groupFunc=789BET_CheckLink'></iframe>
           */}

          <div className="bg-[#2e2c2b] form_checkLink pb-[40px] ">
            <div className="py-4 w-">
              <Form className="w-[80%] mx-auto" form={formCheckLink}>
                <Form.Item name="inputLink">
                  <Input
                    className="rounded-full text-center !text-[#052443] !text-base !font-semibold"
                    placeholder="Xác Thực Link 789BET "
                    allowClear
                  />
                </Form.Item>
                <div className="flex justify-center">
                  <Button
                    onClick={handleCheckLink}
                    className="!rounded-full !text-lg !text-white !px-8  !font-tnrm !font-semibold  !bg-gradient-to-b !from-[#FF9A00] !to-[#FF4929] !shadow-[4px_4.953px_23px_3px_#00000040] !border-[2px] !border-white  h-[50px]  ">
                    Kiểm Tra
                  </Button>
                </div>
              </Form>
            </div>
            {isCheckLink ? (
              <div className="text-white pb-[40px]">
                <div className="bg-gradient-to-b from-[#ffffffa6] to-[#def7ff]   w-[80%] mx-auto box_link px-[10px] my-[10px] pt-[10px] pb-[20px]">
                  <div
                    className="flex justify-center hover:cursor-pointer"
                    onClick={() => router.push(originLink)}>
                    <Image
                      src={"/images/CSKH/linkSafe.png"}
                      width={100}
                      height={100}
                      alt="link"
                    />
                  </div>
                  <p className="text-black">
                    Miền đã được xác minh là link chính thức 789BET. Hiện tại
                    xuất hiện nhiều website giả mạo giao diện 789BET nhằm bôi
                    nhọ và làm giảm uy tín của 789BET. Hội viên khi tham gia cần
                    chú ý kiểm tra xác minh đường link để bảo đảm truy cập đúng
                    đường link của hệ thống. Link an toàn : {currentDomain}
                    &lt;HỢP TÁC ĐẠI LÝ HOA HỒNG 60%&gt;
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-white pb-[40px]">
                <div className="bg-gradient-to-b from-[#ffffffa6] to-[#def7ff]   w-[80%] mx-auto box_link px-[10px] my-[10px] pt-[10px] pb-[20px]">
                  <div className="flex justify-center hover:cursor-pointer">
                    <Image
                      src={"/images/CSKH/warning.png"}
                      width={100}
                      height={100}
                      alt="link"
                    />
                  </div>
                  <p className="text-black">
                    Miền đã được xác minh là link chính thức 789BET. Hiện tại
                    xuất hiện nhiều website giả mạo giao diện 789BET nhằm bôi
                    nhọ và làm giảm uy tín của 789BET. Hội viên khi tham gia cần
                    chú ý kiểm tra xác minh đường link để bảo đảm truy cập đúng
                    đường link của hệ thống. Link an toàn : {currentDomain}
                    &lt;HỢP TÁC ĐẠI LÝ HOA HỒNG 60%&gt;
                  </p>
                </div>
              </div>
            )}
          </div>
        </Drawer>
      </Modal>
      <Modal
        open={openModalError}
        onCancel={handleConfirmError}
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
          <button onClick={handleConfirmError} className="h-[52px] my-[8px]">
            xác nhận
          </button>
        </div>
      </Modal>
    </div>
  );
}
