/* eslint-disable @next/next/no-img-element */
"use client";
import { Form, Input, Modal, Tabs } from "antd";
import { LockFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Trial({ isOpen, setIsOpen }: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {};

  var data = [
    {
      id: 1,
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_fish.3c32ae8fcd9330b8.png",
      title: "Bắn cá",
    },
    {
      id: 2,
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_game.677a2011635f49c6.png",
      title: "Điện tử",
    },
    {
      id: "3",
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_board.396e6e758ee5e6b9.png",
      title: "Game bài",
    },
    {
      id: 4,
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_live.98b4a94ecf164b03.png",
      title: "Casio",
    },
    {
      id: 5,
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_sport.98794a4ec662110f.png",
      title: "Thể thao",
    },
    {
      id: 6,
      img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/i_lottery.297f2424b6dc514c.png",
      title: "Xổ số",
    },
  ];

  return (
    <Modal
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={1120}
      footer={null}
      style={{ margin: "0px", maxWidth: "100%" }}
      className="modalDangNhap max-w-full max-h-full top-0 m-0">
      <div className="h-[100vh]">
        <div className="bg-[#148763]">
          <section className="flex flex-col gap-4 item-center">
            <p className="text-2xl text-white">Đăng Ký Tài Khoản Chơi Thử</p>
            <img
              loading="lazy"
              style={{
                width: "290px",
                height: "120px",
              }}
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/account/c1ad2bd68645c45fb79fa2b311ee8295.png"
              alt=""
            />
          </section>
          <Form
            name="basic"
            className="py-6"
            layout="vertical"
            form={form}
            onFinish={onFinish}>
            <div className="grid grid-cols-1 ">
              <div className="px-4 flex flex-col gap-1">
                <Form.Item
                  name="account"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mã xác minh",
                    },
                  ]}>
                  <Input
                    placeholder="Mã xác minh"
                    prefix={
                      <LockFilled style={{ color: "rgb(22 128 101 / 1)" }} />
                    }
                  />
                </Form.Item>
              </div>
            </div>

            <div className="w-full flex gap-12 items-center justify-center px-4">
              <button
                onClick={onFinish}
                className="cursor-pointer w-full py-1  text-[#fff] bg-yellow-500 font-medium hover:text-black hover:bg-[#ff0] rounded-md flex items-center justify-center text-[.875rem]">
                Lập tức chơi thử
              </button>
            </div>
          </Form>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          scrollbar={{ draggable: true }}>
          {data.map((item) => (
            <SwiperSlide key={item?.id}>
              <div
                className="hover:text-white text-[#ff0] cursor-pointer flex items-center flex-col"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                <div
                  className={`h-[80px] w-[80px] rounded-full bg-white ${
                    isOpen && "bg-[center_100%]"
                  } flex items-center justify-center`}>
                  <img
                    loading="lazy"
                    height={50}
                    width={50}
                    src={item?.img}
                    alt=""
                  />
                </div>
                <div className="text-[12px]">{item?.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
}
