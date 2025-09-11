/* eslint-disable @next/next/no-img-element */
import { Button, Form, Input, Modal } from "antd";
import styles from "./ModalTrail.module.css";
import { useCallback, useEffect, useState } from "react";
import apiClient from "@/api/apiClient";
import { ConfigCapchaEndPoint } from "@/api/services/contants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function ModalTrail({ isOpen, setIsOpen }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [form] = Form.useForm();

  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);

  useEffect(() => {
    setCaptcha(undefined);
  }, [isOpen]);

  const handleOnClickCaptcha = () => {
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
        // Xử lý lỗi nếu có
      });
  };

  const onFinish = (values: any) => {};

  return (
    <Modal
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => {
        setIsOpen(false);
        router.push(pathname);
      }}
      width={900}
      footer={null}
      className="modalTrail">
      <div>
        <div className={styles.formTrail}>
          <img
            loading="lazy"
            style={{
              width: "400px",
              height: "310px",
            }}
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/modal-images/bg-modal-trail.png"
            alt=""
          />

          <div className={styles.title}>Đăng Ký Tài Khoản Chơi Thử</div>
          <div className={styles.logo}>
            <img
              className="w-[203px] h-auto"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/modal-images/logo.png"
              alt=""
            />
          </div>
          <div className={styles.form}>
            <Form
              name="basic"
              layout="vertical"
              form={form}
              onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mã xác minh!",
                  },
                ]}>
                <Input
                  onClick={() => handleOnClickCaptcha()}
                  prefix={
                    <img
                      className="w-[19px] h-[22px] "
                      src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/form/lock.png"
                      alt=""
                    />
                  }
                  className={styles.input}
                  placeholder="Vui lòng nhập mã xác minh"
                />
              </Form.Item>
              <div className="absolute right-[20px] bottom-[-58px] scale-[2] h-full z-50">
                <img src={`data:image/png;base64,${captcha?.svg}`} alt="" />
              </div>
              <button type="submit" className={styles.buttonSubmit}>
                Lập Tức Chơi Game
              </button>
            </Form>
          </div>
        </div>
        <div className="flex gap-[35px] pt-5 place-items-center justify-center">
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/ban-ca.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Bắn cá</div>
          </div>
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/dien-tu.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Điện tử</div>
          </div>
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/game-bai.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Game bài</div>
          </div>
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/casino.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Casino</div>
          </div>
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/the-thao.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Thể thao</div>
          </div>
          <div className={styles.icGame}>
            <div className={styles.hc}>
              <img
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/xo-so.png"
                alt=""
              />
            </div>
            <div className={styles.hcTitle}>Xổ số</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
