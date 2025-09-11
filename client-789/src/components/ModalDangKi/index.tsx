/* eslint-disable react-hooks/exhaustive-deps */
import apiClient from "@/api/apiClient";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useUser } from "@/context/useUserContext";
import { Button, Checkbox, Form, Input, Modal, Spin } from "antd";
import { useEffect, useState } from "react";

import { registerDto } from "@/dto/authDto";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
import { LoadingOutlined } from "@ant-design/icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "react-use";
import styles from "./ModalDangKi.module.css";
import redStart from "../../../public/images/icons/red_star.png";
import { passwordPattern } from "@/utils/regex";
import { API_GATE } from "@/constant/gate";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleDangNhap: () => void;
  setOpenModalNoti: (value: boolean) => void;
}

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function ModalDangKi({
  isOpen,
  setIsOpen,
  handleDangNhap,
  setOpenModalNoti,
}: Props) {
  const [form] = Form.useForm();
  const { user, loginUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // state
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);

  const [username, setUsername] = useState("");
  const [debouncedUsername, setDebouncedUsername] = useState(username);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [statusPass, setStatusPass] = useState({
    icon: "",
    color: "",
  });
  const [currentDomain, setCurrentDomain] = useState("");

  const [autoReload, setAutoReload] = useState(true);

  const [loadingCaptcha, setLoadingCaptcha] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
    }
  }, []);

  useDebounce(
    () => {
      setDebouncedUsername(username);
    },
    500,
    [username]
  );

  useEffect(() => {
    if (!debouncedUsername) return;

    const checkUsernameExists = async () => {
      setCheckingUsername(true);
      try {
        const response = await apiClient.get({
          url: `/auth/checkUsername?username=${debouncedUsername}`,
          data: {
            gate: API_GATE,
          },
        });

        setCheckingUsername(false);

        if (response.data.data.exist) {
          setUsernameError("Tên tài khoản đã tồn tại!");
        } else {
          setUsernameError("");
        }
      } catch (error) {
        setCheckingUsername(false);
        setUsernameError("Đã có lỗi xảy ra, vui lòng thử lại!");
      }
    };

    checkUsernameExists();
  }, [debouncedUsername]);

  const validateNoWhitespace = (_: any, value: string) => {
    if (/\s/.test(value)) {
      return Promise.reject(new Error("Không được chứa kí tự khoảng trắng"));
    }
    return Promise.resolve();
  };

  const onFinish = async (values: any) => {
    const data: registerDto = {
      username: values.username.trim(),
      password: values.password.trim(),
      withdrawPassword: values.withdrawPassword.trim(),
      phone: values.phone.trim(),
      captchaText: API_GATE ?? "789bet",
      captchaKey: API_GATE ?? "789bet",
      email: values.email.trim(),
      gate: API_GATE,
      referral: currentDomain,
    };

    await apiClient
      .post<any>({
        url: ConfigAuthEndPoint.REGISTER,
        data,
      })
      .then((response) => {
        if (response.data.status) {
          const { access_token, user } = response.data;
          setTokenToLocalStorage(access_token);
          loginUser(user, access_token);
          setOpenModalNoti(true);
          setIsOpen(false);
        }
      });
  };

  // call captcha
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
        // Xử lý lỗi nếu có
      })
      .finally(() => setLoadingCaptcha(false));
  };

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
        onOk={() => setIsOpen(false)}
        onCancel={() => {
          setIsOpen(false);
          router.push(pathname);
        }}
        afterClose={() => {
          form.resetFields();
          setCaptcha(undefined);
        }}
        width={850}
        closeIcon={
          <Image
            className="h-10 w-10"
            src="/images/icons/modal-close.svg"
            alt=""
            height={10}
            width={10}
          />
        }
        footer={null}
        className="modalDangKi">
        <div className="w-full p-[30px]">
          <section className="flex flex-col gap-4 items-center">
            <div className="w-full">
              <section className="flex flex-col gap-4 items-center">
                <Image
                  loading="lazy"
                  height={160}
                  width={312}
                  src="/images/login/logoDangki.png"
                  alt=""
                />
              </section>
              <div className="grid col-span-2 grid-cols-2 pt-5">
                <div className="col-span-2 flex mt-2 justify-between">
                  <div className="flex flex-col text-[#fff] relative">
                    <h2 className="text-[19px] font-bold">
                      Đại Sứ Thương Hiệu
                    </h2>
                    <p className="text-[17px] font-normal leading-4">
                      Luis Suarez (2022 - 2023)
                    </p>
                  </div>
                  <Image
                    className="pl-4 w-[94px] h-[57px]"
                    src="/images/modal-images/signature.png"
                    alt=""
                    width={94}
                    height={57}
                  />
                </div>

                <div className="col-span-2 flex mt-2 justify-between pb-2">
                  <div
                    className={`flex flex-col text-[#fff] relative ${styles.leadingNormal}`}>
                    <h2 className="text-[19px] font-bold">
                      Đối Tác Chính Thức
                    </h2>
                    <h2 className="text-[18px] font-bold">Năm 2023 - 2025</h2>

                    <p className={`${styles.p1} text-[17px]`}>
                      Villarreal CF & OKVIP
                    </p>
                    <p className={`${styles.p2} text-[17px]`}>
                      Argentina AFA & OKVIP
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Image
                        className={`${styles.p1} w-[45px]`}
                        src="/images/login/1.png"
                        alt=""
                        width={45}
                        height={45}
                      />
                      <Image
                        className={`${styles.p2} w-[54px]`}
                        src="/images/login/2.png"
                        alt=""
                        width={54}
                        height={54}
                      />
                    </div>
                    <div className="w-[0.6px] h-[60px] bg-[#fff]" />
                    <Image
                      className=" h-[47px] w-[133px]"
                      src="/images/login/okvip.png"
                      alt=""
                      height={47}
                      width={133}
                    />
                  </div>
                </div>
              </div>
              <Form
                name="basic"
                layout="vertical"
                form={form}
                onFinish={onFinish}>
                <div className="grid grid-cols-1 md:grid-cols-3 max-h-[376px]">
                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px]">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className="font-roboto text-base text-[#ff9800] font-medium">
                          Tên đăng nhập
                        </label>
                      </div>
                    </div>
                    <Form.Item
                      name="username"
                      className="formCustom"
                      validateStatus={usernameError ? "error" : ""}
                      help={usernameError}
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên tài khoản!",
                        },
                        { validator: validateNoWhitespace },
                        {
                          validator: () => {
                            if (usernameError) {
                              return Promise.reject(usernameError);
                            }
                            return Promise.resolve();
                          },
                        },
                      ]}>
                      <Input
                        value={username}
                        className={styles.formInput}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Item>
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Lớn hơn 5 ký tự,bằng chữ,không thêm các ký tự đặc biệt.
                    </span>
                  </div>
                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px] relative">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className={styles.label}>
                          Mật khẩu thành viên
                        </label>
                      </div>
                    </div>
                    <Form.Item
                      name="password"
                      className="formCustom"
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
                      ]}>
                      <Input.Password
                        iconRender={(visible) =>
                          visible ? (
                            <FontAwesomeIcon icon={faEye} color="white" />
                          ) : (
                            <FontAwesomeIcon icon={faEyeSlash} color="white" />
                          )
                        }
                        className={styles.formInput}
                      />
                    </Form.Item>

                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Hơn 6 ký tự phải bao gồm chữ cái và số.
                    </span>
                  </div>

                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px]">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className={styles.label}>
                          Xác nhận mật khẩu
                        </label>
                      </div>
                    </div>
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
                            return Promise.reject(
                              new Error("Mật khẩu không khớp!")
                            );
                          },
                        }),
                      ]}>
                      <Input.Password
                        iconRender={(visible) =>
                          visible ? (
                            <FontAwesomeIcon icon={faEye} />
                          ) : (
                            <FontAwesomeIcon icon={faEyeSlash} />
                          )
                        }
                        className={styles.formInput}
                      />
                    </Form.Item>
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Vui lòng xác nhận lại mật khẩu của bạn.
                    </span>
                  </div>

                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px] ">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className={styles.label}>
                          Mật khẩu rút tiền
                        </label>
                      </div>
                    </div>
                    <Form.Item
                      name="withdrawPassword"
                      className="formCustom"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      normalize={(value) => value.toUpperCase()}>
                      <Input.Password
                        iconRender={(visible) =>
                          visible ? (
                            <FontAwesomeIcon icon={faEye} />
                          ) : (
                            <FontAwesomeIcon icon={faEyeSlash} />
                          )
                        }
                        className={styles.formInput}
                      />
                    </Form.Item>
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Vui Lòng Nhập Mật Khẩu Rút Tiền
                    </span>
                  </div>

                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px] ">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className={styles.label}>Số điện thoại</label>
                      </div>
                    </div>
                    <Form.Item
                      name="phone"
                      className="formCustom"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại của bạn!",
                        },
                      ]}>
                      <Input className={styles.formInput} />
                    </Form.Item>
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Số điện thoại nhập bắt đầu bằng 84, Ví dụ: 84868888789
                    </span>
                  </div>

                  <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px] ">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <label className={styles.label}>Địa chỉ email</label>
                      </div>
                    </div>
                    <Form.Item
                      name="email"
                      className="formCustom"
                      rules={[
                        {
                          type: "email",
                          message: "Vui lòng nhập đúng email của bạn",
                        },
                      ]}>
                      <Input className={styles.formInput} />
                    </Form.Item>
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      Điền chính xác để lấy lại mật khẩu khi quên (Bắt Buộc).
                    </span>
                  </div>

                  {/* <div className="px-4 flex flex-col gap-1 pb-2 pt-[10px] relative">
                    <div className="flex items-center w-auto">
                      <div className="flex items-center w-auto">
                        <Image src={redStart} alt="" width={18} height={16} />

                        <label className={styles.label}>Mã xác minh</label>
                      </div>
                    </div>
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
                        onClick={() => handleOnClickCaptcha()}
                        onChange={(e) =>
                          form.setFieldsValue({ captchaText: e.target.value })
                        }
                      />
                    </Form.Item>
                    <div className="absolute right-[44px] top-[82px] scale-[1.8] h-full z-50">
                      {loadingCaptcha ? (
                        <Spin
                          indicator={
                            <LoadingOutlined style={{ fontSize: 16 }} />
                          }
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
                    <span className="text-[14px] text-[#8a8383] capitalize font-normal italic font-helvetica">
                      xin vui lòng nhập mã xác minh
                    </span>
                  </div> */}
                </div>

                <Form.Item
                  name="check"
                  valuePropName="checked"
                  className="formCustom"
                  initialValue={true}>
                  <div className="px-4 pt-[10px] flex w-full text-center justify-center">
                    <Checkbox checked>
                      <span className="font-bold text-base text-[#ff9800] font-roboto">
                        Đã đủ 18 tuổi và đồng ý với trang web này
                      </span>
                      <span className="cursor-pointer ml-3 text-[18px] font-bold text-[#fff]">
                        Thoả thuận đăng ký người dùng
                      </span>
                    </Checkbox>
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="w-full flex gap-12 items-center justify-center mt-4">
                    <Button htmlType="submit" className={styles.submitButton}>
                      Đăng ký ngay
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </section>
        </div>
      </Modal>
    );
  }
}
