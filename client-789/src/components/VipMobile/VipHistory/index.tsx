/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import VipInforLayout from "../VipInforLayout";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function VipHistory({ isOpen, setIsOpen }: Props) {
  const [dataFillter, setDataFillter] = useState<
    "now" | "1days" | "7days" | "30days"
  >("now");
  const [dataFillterType, setDataFillterType] = useState<
    "all" | "upgrade" | "downgrade"
  >("all");
  return (
    <div>
      <VipInforLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Lịch sử nâng cấp">
        <div className="px-[15px]">
          <div
            className="flex p-[3px] mb-[6px] rounded-[10px] w-full"
            style={{
              background:
                "linear-gradient(88deg,#fdffd1 0%,#fefff0 84%,#fff 100%)",
            }}>
            <div className="flex w-full border border-solid rounded-lg border-[#f1da6f]">
              <div
                className={`flex justify-center items-center px-[12px] py-[9px] text-[12px] text-[#555] cursor-pointer rounded-l-lg`}
                onClick={() => setDataFillter("now")}
                style={
                  dataFillter === "now"
                    ? {
                        color: "red",
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                      }
                    : {}
                }>
                Hôm nay
              </div>
              <div
                className={`flex justify-center items-center px-[12px] py-[9px] text-[12px] text-[#555] cursor-pointer`}
                onClick={() => setDataFillter("1days")}
                style={
                  dataFillter === "1days"
                    ? {
                        color: "red",
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                      }
                    : {}
                }>
                Hôm qua
              </div>
              <div
                className={`flex justify-center items-center px-[12px] py-[9px] text-[12px] text-[#555] cursor-pointer`}
                onClick={() => setDataFillter("7days")}
                style={
                  dataFillter === "7days"
                    ? {
                        color: "red",
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                      }
                    : {}
                }>
                Trong vòng 7 ngày
              </div>
              <div
                className={`flex justify-center items-center px-[12px] py-[9px] text-[12px] text-[#555] cursor-pointer rounded-r-lg`}
                onClick={() => setDataFillter("30days")}
                style={
                  dataFillter === "30days"
                    ? {
                        color: "red",
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                      }
                    : {}
                }>
                Trong vòng 30 ngày
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className="min-w-[70px] p-[3px] mr-[6px] mb-[6px] text-[10px] text-center rounded-[5px] text-[#555] cursor-pointer"
              style={
                dataFillterType === "all"
                  ? {}
                  : {
                      background:
                        "linear-gradient(80deg,#fdffd1 4%,#fefff0 84%,#fff 99%)",
                    }
              }
              onClick={() => setDataFillterType("all")}>
              <div
                className="block px-[10px] leading-[24px] border border-solid border-transparent rounded-[3px]"
                style={
                  dataFillterType === "all"
                    ? {
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                        color: "black",
                        borderColor: "#ffcd51",
                      }
                    : {
                        background: "rgba(0,0,0,.2)",
                      }
                }>
                Tất cả
              </div>
            </div>
            <div
              className="min-w-[70px] p-[3px] mr-[6px] mb-[6px] text-[10px] text-center rounded-[5px] text-[#555] cursor-pointer"
              style={
                dataFillterType === "upgrade"
                  ? {}
                  : {
                      background:
                        "linear-gradient(80deg,#fdffd1 4%,#fefff0 84%,#fff 99%)",
                    }
              }
              onClick={() => setDataFillterType("upgrade")}>
              <div
                className="block px-[10px] leading-[24px] border border-solid border-transparent rounded-[3px]"
                style={
                  dataFillterType === "upgrade"
                    ? {
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                        color: "black",
                        borderColor: "#ffcd51",
                      }
                    : {
                        background: "rgba(0,0,0,.2)",
                      }
                }>
                nâng cấp
              </div>
            </div>
            <div
              className="min-w-[70px] p-[3px] mr-[6px] mb-[6px] text-[10px] text-center rounded-[5px] text-[#555] cursor-pointer"
              style={
                dataFillterType === "downgrade"
                  ? {}
                  : {
                      background:
                        "linear-gradient(80deg,#fdffd1 4%,#fefff0 84%,#fff 99%)",
                    }
              }
              onClick={() => setDataFillterType("downgrade")}>
              <div
                className="block px-[10px] leading-[24px] border border-solid border-transparent rounded-[3px]"
                style={
                  dataFillterType === "downgrade"
                    ? {
                        background:
                          "linear-gradient(to bottom,#fefbb3,#ffcd51)",
                        color: "black",
                        borderColor: "#ffcd51",
                      }
                    : {
                        background: "rgba(0,0,0,.2)",
                      }
                }>
                hạ cấp
              </div>
            </div>
          </div>
          <div className="my-[8px]">
            <div className="mb-5 rounded border p-4 text-center text-[#8a6d3b] bg-[#fcf8e3] border-solid border-[#faebcc] text-[14px]">
              <FontAwesomeIcon icon={faExclamationTriangle} /> &nbsp; Không có
              bất kì thông tin nào
            </div>
          </div>
        </div>
      </VipInforLayout>
    </div>
  );
}
