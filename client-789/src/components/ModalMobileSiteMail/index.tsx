/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { Modal, Tabs } from "antd";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faStar,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import querystring from "querystring";
const TabPane = Tabs.TabPane;
import Image from "next/image";
import { useGetMailBoxes } from "@/hooks/useAuthService";

export default function ModalMobileSiteMail() {
  // constant
  enum MailTypeEnum {
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    PROMOTION = "PROMOTION",
  }

  // state
  const router = useRouter();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [mailBoxes, setMailBoxes] = useState<any[]>([]);
  const [countMailReceived, setCountMailReceived] = useState<string>("...");
  const [query, setQuery] = useState({
    page: 1,
    size: 100,
    mailTypes: [MailTypeEnum.PROMOTION],
  });
  const { refetch } = useGetMailBoxes(query);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const isMobile = width <= 768;

  // hook
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);


  const getMailByType = (mailTypes = Object.values(MailTypeEnum)) => {
    setMailBoxes([]);
    setQuery({
      page: 1,
      size: 100,
      mailTypes,
    });
    refetch();
  };

  const MailList = ({ mails }: any) => {
    return (
      <div className="">
        {mails.map((mail: any) => (
          <div key={mail.id} className="w-full flex relative p-2">
            <div>
              <div className="text-[#7bbfd4]">{mail.title}</div>
              <div className="text-[#777777]">{mail.content}</div>
            </div>
            <div className="absolute right-3">
              {mail.createdAt
                .slice(0, "yyyy/mm/dd".length)
                .replaceAll("-", "/")}
            </div>
          </div>
        ))}
        <div className="w-full text-center bg-[#f5f5f5] py-2">
          {mails.length > 0 ? "Toàn bộ đã được tải" : "Không có dữ liệu"}
        </div>
      </div>
    );
  };
  return (
    <Modal
      open={isMobile && modalIsOpen}
      onOk={() => setModalIsOpen(false)}
      width=""
      closeIcon={false}
      footer={null}
      mask={false}
      style={{
        margin: "0px",
        maxWidth: "100%",
        padding: 0,
        borderRadius: 0,
        // animationDuration: "0s",
      }}
      styles={{ body: { padding: 0 } }}
      className={`top-[70px] modal-mobile-site-mail`}
    >
      <div className="w-full mt-[-15px]">
        <div className="px-2">
          <div className="w-full h-[50px] bg-[#FF9000] flex justify-center items-center text-[21px] text-white rounded-md relative">
            <p className="font-bold">Hộp thư đi</p>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className="ms-10 absolute right-3"
              onClick={() => {
                setModalIsOpen(false);
                router.back();
              }}
              style={{ color: "white", fontSize: "16px" }}
            />
          </div>
        </div>

        <div className=" mt-4 w-full min-h-[calc(100vh-150px)] border-[1px] border-gray-400 border-solid p-2 rounded-md relative bg-white">
          <div className="absolute cursor-pointer flex bg-[#FFB627] z-50 text-white top-[10px] right-[10px] p-2 rounded">
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons/comment-regular.svg"
              width={16}
              height={16}
              style={{ marginRight: "6px" }}
            />
            Gửi thư
          </div>
          <Tabs type="card">
            <TabPane
              key={1}
              closable={false}
              tab={
                <div onClick={() => getMailByType([MailTypeEnum.PROMOTION])}>
                  <FontAwesomeIcon className="text-[#ffca00]" icon={faStar} />
                </div>
              }
            >
              <MailList mails={mailBoxes} />
            </TabPane>
            <TabPane
              key={2}
              closable={false}
              tab={
                <div
                  className="text-[#FF9000FF]"
                  onClick={() => getMailByType([MailTypeEnum.RECEIVED])}
                >
                  Hộp thư đến({countMailReceived})
                </div>
              }
            >
              <MailList mails={mailBoxes} />
            </TabPane>
            <TabPane
              key={3}
              closable={false}
              tab={
                <div
                  className="text-[#FF9000FF]"
                  onClick={() => getMailByType([MailTypeEnum.SENT])}
                >
                  Hộp thư đi
                </div>
              }
            >
              <MailList mails={mailBoxes} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Modal>
  );
}
