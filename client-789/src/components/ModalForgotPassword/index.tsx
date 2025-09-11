/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useUser } from "@/context/useUserContext";
import { Form, Input, Modal } from "antd";

import { useState, useEffect } from "react";

import styles from "./ModalForgotPassword.module.css";

import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "antd/es/form/Form";
interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface Pcaptcha {
  key: string;
  svg: string;
}

export default function ModalForgotPassword({ isOpen, setIsOpen }: Props) {
  const { user } = useUser();
  const [form] = useForm();

  const router = useRouter();
  const pathname = usePathname();
  // state
  const [captcha, setCaptcha] = useState<Pcaptcha | undefined>(undefined);

  // useEffect
  useEffect(() => {
    setCaptcha(undefined);
  }, [isOpen]);

  const { loginUser } = useUser();

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
        }}
        width={579}
        closeIcon={<></>}
        footer={null}
        className={styles.customModalForgot}
        title={<div className="text-[14px] font-normal">Quên</div>}>
        <div className="p-[15px]">
          <div className="text-[#31708f] bg-[#d9edf7] border-[#bce8f1] p-[15px] mb-[20px] border border-solid rounded">
            <FontAwesomeIcon icon={faInfoCircle} className="pr-1" />
            <span>
              Nếu số điện thoại bạn điền không chính xác vui lòng liên hệ hỗ trợ
              24/7 để được tư vấn và hỗ trợ.
            </span>
          </div>
          <Form labelCol={{ span: 4 }} form={form}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: (
                    <div>
                      <FontAwesomeIcon icon={faExclamationTriangle} /> 
                      <span>Tài khoản sai định dạng</span>
                    </div>
                  ),
                },
              ]}
              label={
                <div className="px-[15px] pt-[7px] text-wrap font-b">
                  Tên tài khoản
                </div>
              }>
              <Input placeholder="Vui lòng nhập tài khoản thành viên của bạn" />
            </Form.Item>
          </Form>
          <div className="flex justify-center items-center">
            <button className="px-[12px] py-[6px] border border-solid border-[#ccc] rounded leading-[1.42857143] text-[14px] mr-1" type="submit">
              xác nhận
            </button>
            <button className="px-[12px] py-[6px] border border-solid border-[#ccc] rounded leading-[1.42857143] text-[14px]" onClick={()=> setIsOpen(false)}>
              huỷ bỏ
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
 