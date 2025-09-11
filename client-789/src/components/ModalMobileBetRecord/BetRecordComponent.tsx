/* eslint-disable @next/next/no-img-element */
"use client";

import { Col, Row } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

export default function BetRecordComponent({ betRecords }: any) {
  // constant
  const initialItems = [
    {
      label: (
        <FontAwesomeIcon
          className="text-[#ffca00]"
          icon={faStar}
        />
      ),
      children: "Hộp khuyến mãi",
      key: "1",
      closable: false,
    },

    {
      label: "Hộp thư đến",
      children: "Hộp thư đến",
      key: "2",
      closable: false,
    },
    {
      label: "Hộp thư đi",
      children: "Hộp thư đi",
      key: "3",
      closable: false,
    },
  ];

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

  const Record = ({ label, value }: any) => (
    <Row className="">
      <Col
        span={9}
        className="border p-1.5"
      >
        <b>{label}</b>
      </Col>
      <Col
        span={15}
        className="border p-1.5"
      >
        {value}
      </Col>
    </Row>
  );

  return (
    <div>
      {betRecords.map((betRecord: any, index: number) => {
        const nowDayjs = dayjs();

        const getDayLeft = (time: any) =>
          [
            [nowDayjs.diff(time, "days"), "ngày trước"],
            [nowDayjs.diff(time, "hours"), "giờ trước"],
            [nowDayjs.diff(time, "minutes"), "phút trước"],
            [nowDayjs.diff(time, "seconds"), "giây trước"],
          ]
            .find((v) => (v[0] as number) > 0)
            ?.join(" ");

        const createdAt = dayjs(betRecord.createdAt).format("YYYY/MM/DD HH:mm:ss");
        const updatedAt = dayjs(betRecord.updatedAt).format("YYYY/MM/DD HH:mm:ss");

        const createdAtDayAgo = getDayLeft(createdAt);
        const updatedAtDayAgo = getDayLeft(createdAt);

        return (
          <div
            key={betRecord.id}
            className="border mb-8"
          >
            <Record
              label="Thứ tự"
              value={index + 1}
            />
            <Record
              label="Loại trò chơi"
              value={betRecord.gameType}
            />
            <Record
              label="Tên trò chơi"
              value={betRecord.gameName}
            />
            <Record
              label={
                <>
                  Thời gian đặt <br /> cược
                </>
              }
              value={
                <div>
                  <p>{createdAt} - </p>
                  <p className="text-gray-500">{createdAtDayAgo}</p>
                </div>
              }
            />
            <Record
              label="Thời gian thanh toán"
              value={
                <div>
                  <p>{updatedAt} - </p>
                  <p className="text-gray-500">{updatedAtDayAgo}</p>
                </div>
              }
            />
            <Record
              label="Số tiền đặt cược"
              value={betRecord.stake}
            />
            <Record
              label="Đặt cược có hiệu lực"
              value={betRecord.stake}
            />
            <Record
              label="Thanh toán"
              value={betRecord.winLoss}
            />
          </div>
        );
      })}
    </div>
  );
}
