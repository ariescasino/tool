/* eslint-disable @next/next/no-img-element */
"use client";

import { Col, Row } from "antd";

export default function SumBetRecordComponent({ betRecords = [] }: any) {
  const Record = ({ label, value }: any) => (
    <Row className="">
      <Col
        span={15}
        className="border p-1.5"
      >
        <b>{label}</b>
      </Col>
      <Col
        span={9}
        className="border p-1.5"
      >
        {value}
      </Col>
    </Row>
  );

  const countStakeTotal = betRecords.reduce(
    (acc: number, curr: any) => +(curr.stake ?? 0) + acc,
    0,
  );
  const countWinLossTotal = betRecords.reduce(
    (acc: number, curr: any) => +(curr.winLoss ?? 0) + acc,
    0,
  );
  const countTotalRecords = betRecords.length;

  return (
    <div className="border mb-8">
      <Record
        label="Số tiền cược"
        value={countStakeTotal}
      />
      <Record
        label="Đặt cược có hiệu lực"
        value={countStakeTotal}
      />
      <Record
        label="Thanh toán"
        value={countWinLossTotal}
      />
      <Record
        label="Tổng số đơn"
        value={`Tổng ${countTotalRecords} Hđơn`}
      />
    </div>
  );
}
