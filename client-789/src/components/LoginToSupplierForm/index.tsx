/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Form, Input, Spin } from "antd";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import apiClient from "@/api/apiClient";
import {
  ConfigAuthEndPoint,
  ConfigCapchaEndPoint,
} from "@/api/services/contants";
import { useEffect, useState } from "react";
import { useUser } from "@/context/useUserContext";
import { useRouter, useSearchParams } from "next/navigation";
import { getMessage, openNotification } from "@/utils/check";
import { LoadingOutlined } from "@ant-design/icons";
import { loginDto } from "@/dto/authDto";
import gameService from "@/api/services/game.service";
import ModalError from "../ModalError";
import { API_GATE } from "@/constant/gate";

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function LoginToSupplier() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const ridrect = searchParams.get("url");
  const d = searchParams.get("d");
  const gameid = searchParams.get("gameid");
  const gpid = searchParams.get("gpid");
  const supplier = searchParams.get("supplier");
  const type = searchParams.get("type");
  const lang = searchParams.get("lang");

  const { loginUser } = useUser();
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);
  const [hoverLogin, setHoverLogin] = useState(false);
  const [form] = Form.useForm();
  const [currentDomain, setCurrentDomain] = useState("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);

  const [openModalError, setOpenModalError] = useState(false);
  const [textModalError, setTextModalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname);
    }
  }, []);

  const handleOnClickCaptcha = async () => {
    setLoadingCaptcha(true);
    apiClient
      .post<any>({ url: ConfigCapchaEndPoint.LOG })
      .then((response) => {
        const { data } = response.data;
        setCaptcha({
          key: data.key,
          svg: data.svg,
        });
      })
      .catch((error) => {})
      .finally(() => setLoadingCaptcha(false));
  };

  const onFinish = async (values: any) => {
    const data: loginDto = {
      username: values.username,
      password: values.password,
      captchaText: values.captchaText ?? "789bet",
      captchaKey: captcha?.key || "",
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
      .then(async (response) => {
        // Xử lý dữ liệu trả về từ response

        if (response.data.data) {
          const { data, access_token } = response.data;
          loginUser(data, access_token);
          if (ridrect) {
            router.push(ridrect);
          } else if (d && gameid && gpid && supplier && type) {
            const res = await gameService.lauchgameType2({
              device: d,
              gameid: gameid,
              gpid: gpid,
              supplier: supplier,
              type: type,
              lang: "en",
            });
            if (res.data) {
              const encodedParams = encodeURIComponent(res?.data?.data);
              const width = window.innerWidth;
              const height = window.innerHeight;

              if (window.opener) {
                router.push(`/games/playing?url=${encodedParams}`);
              } else {
                window.open(
                  `/games/playing?url=${encodedParams}`, // URL bạn muốn mở
                  "popupWindow", // Tên cửa sổ popup
                  `width=${width},height=${height},top=0,left=0,scrollbars=yes,resizable=yes`
                );
              }
            }
          }
        } else {
          setOpenModalError(true);
          setTextModalError(getMessage(response.data.msg));
        }
      })
      .catch((error) => {
        setOpenModalError(true);
        setTextModalError("Tài khoản, mật khẩu hoặc mã xác minh không đúng!");
      });
  };

  const handleCloseModal = () => {
    setIsSubmitting(false);
    form.setFieldValue("captchaText", undefined);
    setOpenModalError(false);
    setLoadingLogin(false);
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

  return (
    <div className={styles.formContent}>
      <Form
        name="basic"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={handleFormFailed}>
        <Form.Item
          name="username"
          className={styles.boxInput}
          noStyle={true}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}>
          <Input
            placeholder="Tài khoản"
            className={styles.inputForm}
            style={{
              backgroundImage: "url('/images/form/stl_icon_username.png')",
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          className={styles.boxInput}
          noStyle={true}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}>
          <Input.Password
            placeholder="Mật khẩu"
            className={styles.inputForm}
            style={{
              backgroundImage: "url('/images/form/stl_icon_password.png')",
              display: "flex",
            }}
            iconRender={(visible) =>
              visible ? (
                <FontAwesomeIcon icon={faEye} color="#ffffff" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} color="#ffffff" />
              )
            }
          />
        </Form.Item>

        {/* <div className="relative">
          <Form.Item
            name="captchaText"
            className={styles.boxInput}
            noStyle={true}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập captcha!",
              },
            ]}>
            <Input
              onClick={() => handleOnClickCaptcha()}
              placeholder="Mã xác minh"
              className={styles.captcha}
            />
          </Form.Item>
          <div className="absolute right-[calc(100%-167px)] top-0 h-full z-50">
            {loadingCaptcha ? (
              <Spin
                indicator={
                  <LoadingOutlined style={{ fontSize: 12, color: "white" }} />
                }
              />
            ) : (
              captcha?.svg && (
                <img
                  src={`data:image/png;base64,${captcha?.svg}`}
                  alt=""
                  className="w-[101px] h-full"
                />
              )
            )}
          </div>
        </div> */}

        <div className="flex ">
          <Button
            htmlType="submit"
            onMouseEnter={() => setHoverLogin(true)}
            onMouseLeave={() => setHoverLogin(false)}
            onClick={() => setIsSubmitting(true)}
            disabled={loadingLogin}
            className={styles.btnSubmit}>
            {loadingLogin ? "Đăng nhập..." : "Đăng nhập"}
          </Button>
          <div className={`${styles.popup} ${hoverLogin ? "flex" : "hidden"}`}>
            <div>Nhấp vào Đăng nhập để đồng ý</div>
            <div>Thỏa thuận người dùng</div>
          </div>

          <button type="button" className={styles.fpw}>
            Quên mật khẩu
          </button>
        </div>
      </Form>
      <ModalError
        setOpenModal={handleCloseModal}
        openModal={openModalError}
        text={textModalError}
      />
    </div>
  );
}
