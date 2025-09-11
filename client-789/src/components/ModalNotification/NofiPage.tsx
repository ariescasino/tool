import { Modal, Checkbox } from "antd";
import React from "react";
// import {   } from "@ant-design/icons";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  item: string;
  title: string;
}

export default function NofiPage({ isOpen, setIsOpen, item, title }: Props) {
  return (
    <Modal
      open={isOpen}
      // onOk={() => setIsOpen(false)}
      // onCancel={() => setIsOpen(false)}
      closable={false}
      footer={null}
      width={"100%"}
      modalRender={(modal: any) => {
        return React.cloneElement(modal, {
          style: {
            ...modal.props.style,
            ...{ margin: 0, height: "100vh", width: "100vw" },
          },
        });
      }}
      style={{
        top: 0,
        maxHeight: "100%",
        overflow: "",
        margin: 0,
        width: "100%",
        background: "rgb(16 130 94 / 1)",
      }}
      className="w-full h-full p-0 modalNotiPage z-30"
    >
      <div
        className="w-[100vw] h-[100vh] overflow-y-scroll text-white"
        style={{ background: "rgb(16 130 94 / 1)" }}
      >
        <section
          className="title break-words px-3 py-4 text-center fixed w-full"
          style={{ background: "rgb(16 130 94 / 1)" }}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute left-2 text-[2rem] w-7 h-7"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span
            _ngcontent-serverapp-c93=""
            className="mx-auto block w-[80%] text-lg"
          >
            {title}
          </span>
        </section>
        <section
          className="mt-[88px]"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      </div>
    </Modal>
  );
}
