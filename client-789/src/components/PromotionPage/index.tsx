/* eslint-disable @next/next/no-img-element */
"use client";
import { Key, useState } from "react";
import styles from "./PromotionPage.module.css";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import { dataTagPromotion } from "@/config/dataTagPromotion";
import Image from "next/image";
import BanCa from "./ItemPromotion/baohiem/banca";

export default function PromotionPage() {
  // State variables
  const [tagPromotion, setTagPromotion] = useState(dataTagPromotion[0].name);
  const [linkDynamic, setLinkDynamic] = useState(
    dataTagPromotion[0].items[0].link
  );
  const [value, setValue] = useState(dataTagPromotion[0].value);
  const [openModal, setOpenModal] = useState(false);

  // Function to handle opening the modal and setting the dynamic link
  const handleOpenModal = (link: string) => {
    if (link) {
      setLinkDynamic(link);
      setOpenModal(true);
    } else {
      console.error("Invalid link provided for dynamic import");
    }
  };

  // const DynamicContent = dynamic(async () => {
  //   try {
  //     return import(
  //       `./ItemPromotion/${value}/${linkDynamic ? linkDynamic : "DangCapNhat"}`
  //     );
  //   } catch (error) {
  //     console.error("Failed to load dynamic content:", error);
  //   }
  // });

  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        backgroundImage: "url(/images/promotion/bgKhuyenMai.jpg)",
        backgroundSize: "cover",
      }}>
      <div
        className="w-[1200px] py-[30px]"
        style={{
          justifyItems: "center",
        }}>
        {/* Tag promotion section */}
        <div className="grid grid-cols-8 gap-[5px]">
          {dataTagPromotion.map((data, index) => (
            <div
              key={index}
              className={`${styles.listProm} ${tagPromotion === data.name && styles.listPromActive
                } font-roHe`}
              onClick={() => {
                setTagPromotion(data.name);
                setValue(data.value);
              }}>
              {data.name}
            </div>
          ))}
        </div>

        {/* Promotion items section */}
        <div className="flex flex-wrap gap-5">
          {dataTagPromotion
            .find((data) => data.name === tagPromotion)
            ?.items.map((data, index: Key | null | undefined) => (
              <div
                className="w-[580px]"
                key={index}
                onClick={() => {
                  data.link
                    ? handleOpenModal(data.link)
                    : window.open(data.RedirectUrl, "_blank");
                }}>
                <img
                  src={data.PromotionBanner}
                  alt="Promotion Banner"
                  className="w-[590px] h-[193px]"
                />
              </div>
            ))}
        </div>

        {/* Modal to show dynamic content */}
        <Modal
          closeIcon=""
          footer=""
          open={openModal}
          width={1200}
          onCancel={() => setOpenModal(false)}
          className="w-[1200px] mt-[3vh] top-0 p-[20px]"
          styles={{
            content: {
              borderRadius: 0,
            },
          }}>
          {openModal ? <BanCa /> : <div>Loading content...</div>}
        </Modal>
      </div>
    </div>
  );
}
