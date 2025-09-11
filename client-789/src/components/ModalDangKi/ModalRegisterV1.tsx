/* eslint-disable react-hooks/exhaustive-deps */
import apiClient from "@/api/apiClient";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useUser } from "@/context/useUserContext";
import { Button, Checkbox, Form, Input, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
import { registerDto } from "@/dto/authDto";
import { LoadingOutlined } from "@ant-design/icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "react-use";
import styles from "./styles.module.scss";
import BaseModal from "../BaseModal/BaseModal";
import { onKeyPressEnter } from "@/utils";
import ModalError from "../ModalError";
import { getMessage } from "@/utils/check";
import { passwordPattern, patternAccount } from "@/utils/regex";
import { API_GATE } from "@/constant/gate";
import ModalConfirmEnoughAge from "../ModalConFirmEnoguAge/ModalConfimEngouAge";
import { capcha, capchaKey } from "@/constant";
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

export default function ModalRegisterV1({
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
  const [openModalError, setOpenModalError] = useState(false);
  const [textModalError, setTextModalError] = useState("dang ky");
  const [currentDomain, setCurrentDomain] = useState("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openEnoughAge, setOpenEnoughAge] = useState<boolean>(false);

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
      captchaKey: API_GATE,
      email: values.email ? values.email.trim() : "",
      gate: API_GATE,
      referral: currentDomain,
    };

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
        if (response.data.status) {
          const { access_token, user } = response.data;
          setTokenToLocalStorage(access_token);
          loginUser(user, access_token);
          setOpenModalNoti(true);
          setIsOpen(false);
          setTimeout(() => {
            form.resetFields();
            setOpenModalNoti(false);
          }, 5000);
        } else {
          setTextModalError(getMessage(response.data.msg));
          setOpenModalError(true);
          form.setFieldValue("captchaText", undefined);
        }
      })
      .finally(() => setLoadingRegister(false));
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
        setCaptcha({
          svg: capcha,
          key: capchaKey,
        });
      })
      .finally(() => setLoadingCaptcha(false));
  };

  const handleCloseModal = () => {
    setIsSubmitting(false);
    form.setFieldValue("captchaText", undefined);
    setOpenModalError(false);
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
          setTextModalError(fieldError.errors[0]);
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
            <Image src="/images/icons/x.png" alt="" width={32} height={32} />
          }>
          <div className={styles.boxForm}>
            <div className="flex w-full">
              <div className="pt-24 relative h-fit w-[55.5%] flex justify-center">
                <Image
                  src="/images/login/suarezGroup.png"
                  alt=""
                  width={497}
                  height={532}
                />
                <div className={styles.sign}>
                  <div>
                    <p>Đại Sứ Thương Hiệu</p>{" "}
                    <p>
                      <span>Luis Suarez </span>(Năm 2022 - 2023)
                    </p>
                  </div>
                  <Image
                    width={112}
                    height={81}
                    src="/images/modal-images/signature-register.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[45.5%]">
                <div className="flex justify-center">
                  <Image
                    loading="lazy"
                    height={125}
                    width={244}
                    src="/images/login/logoDangki.png"
                    alt=""
                  />
                </div>
                <div className="form_content !p-[15px]">
                  <Form
                    name="basic"
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={handleFormFailed}>
                    <div className="">
                      <div className="">
                        <Form.Item
                          name="username"
                          className="formInput"
                          validateStatus={usernameError ? "error" : ""}
                          help={usernameError}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập tên tài khoản!",
                            },
                            {
                              pattern: patternAccount,
                              message: "Tài khoản sai định dạng",
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
                            onKeyDown={onKeyPressEnter}
                            value={username}
                            className="input_value"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Tên đăng nhập"
                          />
                        </Form.Item>
                        <p className="pb-2 text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Lớn hơn 5 ký tự,bằng chữ,không thêm các ký tự đặc
                          biệt.
                        </p>
                      </div>
                      <div>
                        <Form.Item
                          name="password"
                          className="formInput"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập mật khẩu!",
                            },
                            { validator: validateNoWhitespace },
                            {
                              pattern: passwordPattern,
                              message:
                                "Hơn 6 ký tự phải bao gồm chữ cái và số.",
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
                            className="input_value"
                            placeholder="Nhập mật khẩu"
                            onKeyDown={onKeyPressEnter}
                          />
                        </Form.Item>

                        <span className="pb-2 text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Hơn 6 ký tự phải bao gồm chữ cái và số.
                        </span>
                      </div>
                      <div>
                        <Form.Item
                          name="CheckPassword"
                          dependencies={["password"]}
                          className="formInput"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng xác nhận lại mật khẩu của bạn",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(
                                    "Mật khẩu và mật khẩu xác nhận không chính xác"
                                  )
                                );
                              },
                            }),
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
                            className="input_value"
                            placeholder="Xác nhận mật khẩu"
                            onKeyDown={onKeyPressEnter}
                          />
                        </Form.Item>
                        <span className="pb-2  text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Vui lòng xác nhận lại mật khẩu của bạn.
                        </span>
                      </div>
                      <div>
                        <Form.Item
                          name="withdrawPassword"
                          className="formInput"
                          rules={[
                            {
                              required: true,
                              message: "Vui lÒng nhập mật khẩu rút tiền",
                            },
                          ]}
                          validateTrigger="onSubmit"
                          normalize={(value) => value.toUpperCase()}>
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
                            className="input_value"
                            placeholder="Mật khẩu rút tiền"
                            onKeyDown={onKeyPressEnter}
                          />
                        </Form.Item>
                        <span className="pb-2 text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Vui Lòng Nhập Mật Khẩu Rút Tiền
                        </span>
                      </div>
                      <div>
                        <Form.Item
                          name="phone"
                          className="formInput"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập số điện thoại của bạn!",
                            },
                            {
                              max: 20,
                              message: "Số điện thoạiĐộ dài tối đa là 20",
                            },
                            {
                              validator: (_, value) => {
                                if (!value || /^[0-9]+$/.test(value)) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error("Chỉ số"));
                              },
                            },
                          ]}>
                          <Input
                            className="input_value"
                            placeholder="Số điện thoại"
                            onKeyDown={onKeyPressEnter}
                          />
                        </Form.Item>
                        <span className="pb-2  text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Số điện thoại nhập bắt đầu bằng 84, Ví dụ: 84868888789
                        </span>
                      </div>
                      <div>
                        <Form.Item
                          name="email"
                          className="formInput"
                          rules={[
                            {
                              type: "email",
                              message: "Định dạng email sai",
                            },
                          ]}>
                          <Input
                            className="input_value"
                            placeholder="Địa chỉ email"
                            onKeyDown={onKeyPressEnter}
                          />
                        </Form.Item>
                        <span className="pb-2 text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          Điền chính xác để lấy lại mật khẩu khi quên (Bắt
                          Buộc).
                        </span>
                      </div>
                      {/* <div>
                        <label className="text-white">Mã xác minh</label>
                        <div className="relative">
                          <Form.Item
                            name="captchaText"
                            className="formInput"
                            validateTrigger="onSubmit"
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập mã xác minh!",
                              },
                            ]}>
                            <Input
                              className="input_value"
                              onClick={() => handleOnClickCaptcha()}
                              onChange={(e) =>
                                form.setFieldsValue({
                                  captchaText: e.target.value,
                                })
                              }
                              placeholder="Mã xác minh"
                              onKeyDown={onKeyPressEnter}
                            />
                          </Form.Item>
                          <div className="absolute right-[4%] top-[0] h-[34px] z-50">
                            {loadingCaptcha ? (
                              <Spin
                                indicator={
                                  <LoadingOutlined style={{ fontSize: 22 }} />
                                }
                                className="h-full flex items-center"
                              />
                            ) : (
                              captcha?.svg && (
                                <Image
                                  src={`data:image/png;base64,${captcha?.svg}`}
                                  alt=""
                                  width={75.55}
                                  height={34}
                                  // layout="fill"
                                  className="h-full"
                                />
                              )
                            )}
                          </div>
                        </div>
                        <span className="text-[14px] text-[#d2d2d2] capitalize font-normal italic font-helvetica">
                          xin vui lòng nhập mã xác minh
                        </span>
                      </div> */}
                    </div>

                    <Form.Item
                      name="check"
                      valuePropName="checked"
                      className="formCustom"
                      initialValue={true}>
                      <div className="pt-[10px] w-full  checked_login_pc">
                        <Checkbox>
                          <span className="text-sm text-white font-helvetica font-semibold">
                            Đã đủ 18 tuổi và đồng ý với trang web này
                          </span>
                        </Checkbox>
                        <div
                          className="pt-2 pb-2"
                          onClick={() => setOpenEnoughAge(true)}>
                          <span className="cursor-pointer ml-3 text-[14px]  text-[#fc8f00]">
                            Thoả thuận đăng ký người dùng
                          </span>
                        </div>
                      </div>
                    </Form.Item>

                    <div className="flex justify-center items-center group_button hover:cursor-pointer ">
                      <button
                        onClick={handleDangNhap}
                        className="hover:cursor-pointer text-[#c0bebe] left-[0%] absolute hover:text-white transition-colors uppercase h-[50px] w-[170px] text-lg">
                        Đăng nhập
                      </button>

                      <Button
                        htmlType="submit"
                        onClick={() => setIsSubmitting(true)}
                        disabled={loadingRegister}
                        className="uppercase pt-1 btn-login border-none text-center absolute text-lg font-helvetica">
                        Đăng kí ngay
                        {loadingRegister && "..."}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </BaseModal>
        <ModalConfirmEnoughAge
          openEnoughAge={openEnoughAge}
          setOpenEnoughAge={setOpenEnoughAge}
          nameBtn="Tôi đã hiểu"
          title="Thỏa thuận đăng ký người dùng"
        />
        <ModalError
          setOpenModal={handleCloseModal}
          openModal={openModalError}
          text={textModalError}
        />
      </>
    );
  }
}
