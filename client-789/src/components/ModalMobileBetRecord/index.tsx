/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Modal,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Tabs,
} from "antd";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import BetRecordComponent from "@/components/ModalMobileBetRecord/BetRecordComponent";
import SumBetRecordComponent from "@/components/ModalMobileBetRecord/SumBetRecordComponent";

export default function ModalMobileBetRecord({
  betRecords = [],
  filterOptions,
  setFilterOptions,
}: {
  betRecords: any;
  filterOptions: {
    betTimeStart: Date;
    betTimeEnd: Date;
    type: undefined;
  };
  setFilterOptions: any;
}) {
  // constant

  // state
  const router = useRouter();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

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

  useEffect(() => {}, []);

  const formatTime = (time: Date) => {
    const yyyy = time.getFullYear();
    const mm = time.getMonth();
    const dd = time.getDay();
    const hh = time.getHours();
    const MM = time.getMinutes();
    const ss = time.getSeconds();
    const tzOffsetMinutes = time.getTimezoneOffset() / 60;

    const tz = tzOffsetMinutes >= 0 ? "+" + tzOffsetMinutes : tzOffsetMinutes;

    return `${yyyy}/${mm}/${dd} ${hh}:${MM}:${ss} GMT${tz}`;
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
      className={`top-[70px] modal-mobile-bet-record`}
    >
      <div className="w-full mt-[-15px]">
        <div className="px-2">
          <div className="w-full h-[50px] bg-[#fc8f00] flex justify-center items-center text-[21px] text-white rounded-md relative font-bold">
            <p>Chi Tiết Đặt Cược</p>
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
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{
              width: "100%",
              padding: "2px",
            }}
          >
            <div className="flex py-2">
              <div className="col-span-5  flex flex-col ">
                <Radio value={1}>Thời gian đặt cược</Radio>
              </div>
              <div className="col-span-6  flex flex-col">
                <Radio value={2}>Thời gian thanh toán</Radio>
              </div>
            </div>
          </Radio.Group>
          <div>
            <div className="col-span-2  flex flex-col">
              <DatePicker
                className="w-full"
                format="YYYY/MM/DD HH:mm:ss"
                onChange={(v) => {
                  // TODO:
                  setFilterOptions((prev: any) => ({ ...prev, betTimeEnd: v[0]?.toISOString() }));
                }}
                value={[dayjs(filterOptions.betTimeStart)]}
              />
              <div className="mx-auto p-0 my-0">-</div>
              <DatePicker
                className="w-full"
                format="YYYY/MM/DD HH:mm:ss"
                onChange={(v) =>
                  // TODO:
                  setFilterOptions((prev: any) => ({ ...prev, betTimeEnd: v[0]?.toISOString() }))
                }
                value={[dayjs(filterOptions.betTimeEnd)]}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className=" col-span-2 gap-2">
                <div className="text-lg font-bold">Loại trò chơi</div>
                <Select
                  defaultValue={"all1"}
                  className="w-full mb-2"
                >
                  <Select.Option value="all1">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                  <Select.Option value="all">Tất cả</Select.Option>
                </Select>
                <Checkbox className="w-full">Chỉ tìm kiếm đơn cược chưa thanh toán</Checkbox>
              </div>
            </div>
          </div>
          <div className="mx-auto w-24 my-3">
            <Button className="text-white bg-[#ffb627]">Tìm kiếm</Button>
          </div>
          <SumBetRecordComponent betRecords={betRecords} />
          <BetRecordComponent betRecords={betRecords} />

          <div className="w-full text-center">Không có dữ liệu</div>
        </div>
      </div>
    </Modal>
  );
}
