/* eslint-disable @next/next/no-img-element */
"use client";

import gameService from "@/api/services/game.service";
import { useUser } from "@/context/useUserContext";
import useLaunchGameDevice from "@/hooks/useLaunchGameDevice";
import isSafari from "@/utils/isSafari";
import { popup } from "@/utils/popup";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import "./index.css";
import menuItems from "./menuItems";

const Navbar = () => {
  const deviceC = useLaunchGameDevice();
  const [loadingGame, setLoadingGame] = useState(false);
  const [showGameNoteExits, setShowGameNoteExits] = useState(false);

  const DropdownMenu = ({
    href,
    title,
    items,
    classIcon,
    newTabs,
    deviceC,
    classIconActive,
    totalItemInline,
  }: any) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const { user } = useUser();
    const username = user?.username;

    const pathname = usePathname();

    let countItemInline = "grid-cols-4";

    switch (totalItemInline) {
      case 1:
        countItemInline = "grid-cols-1";
        break;

      case 2:
        countItemInline = "grid-cols-2";
        break;

      case 3:
        countItemInline = "grid-cols-3";
        break;

      case 4:
        countItemInline = "grid-cols-4";
        break;

      case 5:
        countItemInline = "grid-cols-5";
        break;

      default:
        break;
    }

    return (
      <div
        className=""
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <button
          className={`flex items-center gap-[5px] justify-center h-[50px]  ${isOpen || pathname === href ? "text-[#fc8f00]" : "text-white"
            } `}
          onClick={() => (newTabs ? popup(href) : router.push(href))}>
          <div
            className={`${isOpen || pathname === href ? classIconActive : classIcon} w-[16px] h-[16px]`}
          />
          <div className={`text-[14px] uppercase`}>{title}</div>
        </button>

        {isOpen && items && (
          <div
            className="absolute bg-black bg-full-100vw text-white left-0 z-10 bg-opacity-85 flex items-center justify-center"
          // onMouseEnter={() => setIsOpen(true)}
          // onMouseLeave={() => setIsOpen(false)}
          >
            {items &&
              items.map(
                (
                  subItemGroup: { items: any[] },
                  index: React.Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className={`grid ${countItemInline} pt-[28px] pb-[12px] relative`}>
                    {subItemGroup.items.map((item, itemIndex) => {
                       const handleClickGame = async () => {
                        if (item.game || item.link) {
                          if (isSafari()) {
                            window.location.href = item.link;
                          } else {
                            setLoadingGame(false);
                  
                            popup(item.link);
                          }
                        }
                      };

                      return (
                        <div
                          onClick={() => !item.updateItem && handleClickGame()}
                          className={`item-game`}
                          key={itemIndex}>
                          <Image
                            loading="lazy"
                            src={item?.icon}
                            alt=""
                            width={80}
                            height={38}
                            unoptimized
                          />
                          <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/playgame.png" alt="" />

                          <div className={item.promotion && "promotionItem"} />
                        </div>
                      );
                    })}
                  </div>
                )
              )}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className=" font-roHe bg-nav">
      <ul className="w-[1200px] flex justify-between text-white gap-1 ">
        <div className={`w-[170px] relative z-10 manNav`}>
          <Image
            className="absolute bottom-0"
            src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-header.png"
            alt="logo-cau-thu"
            width={132}
            height={145}
          />
        </div>
        {menuItems.map((item, index) => (
          <DropdownMenu
            href={item?.href}
            key={index}
            newTabs={item?.newTabs}
            classIconActive={item?.classIconActive}
            title={item.label}
            classIcon={item?.classIcon}
            totalItemInline={item.totalItemInline}
            items={item?.subItems}
            deviceC={deviceC}
          />
        ))}
      </ul>
      {loadingGame && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
            }
          />
        </div>
      )}
      <Modal
        open={showGameNoteExits}
        onCancel={() => setShowGameNoteExits(false)}
        onOk={() => setShowGameNoteExits(false)}
        title="Thông báo"
        footer={null}>
        <div>Game đang bảo trì, vui lòng quay lại sau!</div>
      </Modal>
    </nav>
  );
};

export default Navbar;
