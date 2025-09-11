/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Button,
  Checkbox,
  DatePicker,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ModalMobileBetRecord from "@/components/ModalMobileBetRecord";
import querystring from "querystring";
import apiClient from "@/api/apiClient";
import {
  BetRecordEndPoint,
  ConfigMailBoxEndPoint,
} from "@/api/services/contants";

export default function BetRecord() {
  const firstDayOfCurrentMonth = () => {
    const now = new Date();
    now.setDate(1);
    now.setHours(0, 0, 0, 0);
    return now;
  };
  const [value, setValue] = useState(1);
  const [betRecords, setBetRecords] = useState<any[]>([]);
  const [filterOptions, setFilterOptions] = useState<any>({
    betTimeStart: firstDayOfCurrentMonth().toISOString(),
    betTimeEnd: new Date().toISOString(),
    type: undefined,
  });

  useEffect(() => {
    getBetRecords({});
  }, []);

  const getBetRecords = (options = {}) => {
    setBetRecords([]);
    // TODO: implement paging
    const queryString = querystring.encode({
      page: 1,
      size: 100,
      ...filterOptions,
    });
    apiClient
      .get<any>({
        url: `${BetRecordEndPoint.BET_RECORD}?${queryString}`,
      })
      .then((response) => {
        const betRecords = response.data.data || [];
        setBetRecords(betRecords);
      });
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full">
      <div className="h-[50px] bg-[#2b2b2b] flex justify-center items-center text-[21px] text-white rounded-t-sm">
        Lịch sử đặt cược
      </div>

      <div className="p-2 border-solid border-[1px] border-gray-400 bg-white text-black font-helvetica">
        <Radio.Group
          onChange={onChange}
          value={value}
          style={{
            width: "100%",
            padding: "2px",
          }}
        >
          <div className="border-solid border-[1px] border-gray-400 grid grid-cols-2 w-full p-2 gap-2">
            <div className="col-span-1  flex flex-col gap-2">
              <Radio value={1}>Thời gian đặt cược</Radio>
              <div>
                <DatePicker lang="vi" />{" "}
                <span className="mx-1 text-[16px] text-black">-</span>
                <DatePicker lang="vi" />
              </div>
              <Checkbox>Chỉ tìm kiếm đơn cược chưa thanh toán</Checkbox>
            </div>

            <div className="col-span-1  flex flex-col gap-2">
              <Radio value={2}>Thời gian đặt cược</Radio>
              <div>
                <DatePicker lang="vi" />{" "}
                <span className="mx-1 text-[16px] text-black font-bold">-</span>
                <DatePicker lang="vi" />
              </div>
              <div className="flex justify-between w-3/4">
                <div className="font-bold text-black text-[14px]">
                  Loại trò chơi
                </div>
                <Select style={{ width: "200px" }} defaultValue={"all1"}>
                  <Select.Option value="all1">
                    Không có hồ sơ trò chơi gần dây
                  </Select.Option>
                </Select>
              </div>
            </div>
          </div>
        </Radio.Group>
        <div className="w-full pr-20 flex justify-end py-2">
          <Button>Tìm kiếm</Button>
        </div>

        <div className="w-full grid grid-cols-12 border-t-solid border-b-solid border-t-[1px] border-t-gray-400 font-bold py-2 text-sm">
          <div className="col-span-2">Tên trò chơi</div>
          <div className="col-span-4">Thời gian thanh toán</div>

          <div className="col-span-4">Cược hợp lệ</div>

          <div className="col-span-2">Thanh toán</div>
        </div>

        <div className="w-full grid grid-cols-12 border-t-solid border-b-solid border-t-[1px]  border-b-[1px] border-t-gray-400 font-bold py-2 border-b-gray-400  text-sm">
          <div className="col-span-2">Tổng đơn: 0 đơn</div>
          <div className="col-span-4"></div>

          <div className="col-span-4">0</div>

          <div className="col-span-2">0</div>
        </div>

        <div className="w-full text-center  text-sm pt-2 pb-8">
          Tất cả thông tin đã được hiện ra
        </div>
      </div>
      <ModalMobileBetRecord
        betRecords={betRecords}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      ></ModalMobileBetRecord>
    </div>
  );
}
