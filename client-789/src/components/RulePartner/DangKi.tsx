"use client";

/* eslint-disable @next/next/no-img-element */
import paymentService from "@/api/services/payment.service";
import styles from "@/styles/rule.module.css";
import { faEye, faEyeSlash, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Button, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";

type IItemBankIn = {
  bin: string;
  name: string;
  shortName: string;
};

export default function DangKy() {
  const [listBankIn, setListBankIn] = useState<undefined | IItemBankIn[]>(
    undefined
  );

  const [errorModal, setErrorModal] = useState(false);

  const { data: dataBankIn } = useQuery({
    queryFn: () => paymentService.getListBankIn(),
    queryKey: ["getListBankIn"],
  });

  useEffect(() => {
    if (dataBankIn) {
      setListBankIn(dataBankIn);
    }
  }, [dataBankIn]);

  return (
    <div className={`${styles.rule} mt-4`}>
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">
            Tên Đăng Nhập Đại Lý
          </span>
        </div>

        <div className="col-span-7 pt-2">
          <Input placeholder="Từ 5 -15 kí tự, Phải bắt đầu bằng chữ cái, có thể gồm cả chữ cái và số." />
        </div>

        <div className="col-span-3  px-[15px]">
          <span className="font-roboto">
            Từ 5 -15 kí tự, Phải bắt đầu bằng chữ cái, có thể gồm cả chữ cái và
            số.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Mật Khẩu Đăng Nhập</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input.Password
            placeholder="Vui lòng nhập mật khẩu"
            iconRender={(visible) =>
              visible ? (
                <FontAwesomeIcon color="#888888" icon={faEye} />
              ) : (
                <FontAwesomeIcon color="#888888" icon={faEyeSlash} />
              )
            }
          />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">Vui lòng nhập mật khẩu</span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Xác nhận mật khẩu</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input.Password
            placeholder="Vui lòng xác nhận lại mật khẩu"
            iconRender={(visible) =>
              visible ? (
                <FontAwesomeIcon color="#888888" icon={faEye} />
              ) : (
                <FontAwesomeIcon color="#888888" icon={faEyeSlash} />
              )
            }
          />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">Vui lòng xác nhận lại mật khẩu</span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Họ tên</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input placeholder="Cần giống tên tài khoản ngân hàng, nếu không thì không thể rút tiền" />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">
            Cần giống tên tài khoản ngân hàng, nếu không thì không thể rút tiền
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Số điện thoại</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input placeholder="Vui lòng nhập số điện thoại" />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">Vui lòng nhập số điện thoại </span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold"> Địa chỉ email</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input placeholder="Vui lòng nhập địa chỉ email của bạn" />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">
            Vui lòng nhập địa chỉ email của bạn 
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Telegram</span>
        </div>

        <div className="col-span-7 pt-2">
          <Input placeholder="ví dụ： A123456789" />
        </div>

        <div className="col-span-3 px-[15px]">
          <span className="font-roboto">ví dụ： A123456789</span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold"> Ngân hàng</span>
        </div>

        <div className="col-span-7 pt-2">
          <Select
            style={{
              width: "100%",
            }}
            defaultValue={undefined}
          >
            <Select.Option value={undefined}>
              Vui lòng chọn ngân hàng
            </Select.Option>
            {listBankIn &&
              listBankIn.map((item) => (
                <Select.Option key={item.bin} value={item.bin}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-span-2 pt-[7px] px-[15px] text-right">
          <FontAwesomeIcon icon={faStar} color="#a94442" /> 
          <span className="font-roboto font-semibold">Mã xác minh </span>
        </div>

        <div className="col-span-7 pt-2">
          <Input
            style={{
              width: "172px",
            }}
            placeholder="Mã xác minh"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 py-2">
        <div className="col-start-3">
          <Button onClick={() => setErrorModal(true)}>Đăng ký ngay</Button>
        </div>
      </div>

      <Modal
        open={errorModal}
        onCancel={() => setErrorModal(false)}
        onOk={() => setErrorModal(false)}
        title="Thông báo"
        footer={null}
      >
        <div>Chức năng đang bảo trì, vui lòng quay lại sau!</div>
      </Modal>
    </div>
  );
}
