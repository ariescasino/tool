/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Col, Modal, Row } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

import { useState } from "react";
import { dayNamesType2, TRANSACTION_TYPE_ENUM } from "@/constant";
import renderTypePayment from "@/constant/renderTypePayment";
import { DataExport } from "@/type";

export default function TransactionHistoryRecordComponent({
  transactionRecords,
}: any) {
  // constant
  const [openModal, setOpenModal] = useState(false);
  const [dataSelected, setDataSelected] = useState<any>();

  const handleSelected = (data: any) => {
    setOpenModal(true);
    setDataSelected(data);
  };

  const handleClose = () => {
    setOpenModal(false);
    setDataSelected(undefined);
  };

  const nowDayjs = dayjs();

  const getDayLeft = (time: any) =>
    [
      [nowDayjs.diff(time, "days"), "ngày trước"],
      [nowDayjs.diff(time, "hours"), "giờ trước"],
      [nowDayjs.diff(time, "minutes"), "phút trước"],
      [nowDayjs.diff(time, "seconds"), "giây trước"],
    ]
      .find((v) => (v[0] as number) > 0)
      ?.join(" ") ?? "vài giây trước";

  const typeKey: keyof typeof TRANSACTION_TYPE_ENUM =
    dataSelected && (dataSelected.type as keyof typeof TRANSACTION_TYPE_ENUM);

  const createdAtSelected =
    dataSelected && dayjs(dataSelected.createdAt).locale("vi");

  const createdAtSelectedText =
    dataSelected &&
    `${createdAtSelected.format(`YYYY/MM/DD`)}(${dayNamesType2[dayjs(dataSelected.createdAt).day()]}) ${createdAtSelected.format(`HH:mm:ss`)}`;

  const Record = ({ label, value, spanLabel = 4 }: any) => (
    <Row className="">
      <Col span={spanLabel} className="border p-1.5">
        <b>{label}</b>
      </Col>
      <Col span={24 - spanLabel} className="border p-1.5">
        {value}
      </Col>
    </Row>
  );

  return (
    <div>
      {transactionRecords && transactionRecords?.dataExport.length > 0 ? (
        transactionRecords?.dataExport.map(
          (transaction: DataExport, index: number) => {
            const createdAt = dayjs(transaction.createdAt).locale("vi");

            const createdAtText = `${createdAt.format(`YYYY/MM/DD`)}(${dayNamesType2[dayjs(transaction.createdAt).day()]}) ${createdAt.format(`HH:mm:ss`)}`;
            const createdAtDayAgo = getDayLeft(createdAt);

            return (
              <div key={transaction.id} className="border mb-8">
                <Record
                  label="ngày"
                  spanLabel={5}
                  value={
                    <p>
                      {createdAtText} -{" "}
                      <span className="text-gray-500">{createdAtDayAgo}</span>
                    </p>
                  }
                />
                <Record
                  label="số tiền"
                  spanLabel={5}
                  value={
                    <div
                      className={
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }>
                      {transaction.amount}{" "}
                      <span
                        className="ps-3 text-sky-500"
                        onClick={() => handleSelected(transaction)}>
                        chi tiết
                      </span>
                    </div>
                  }
                />
                <Record
                  label="loại"
                  spanLabel={5}
                  value={
                    renderTypePayment(
                      TRANSACTION_TYPE_ENUM[transaction.type]
                    ) || "Thanh toán trực tuyến"
                  }
                />
              </div>
            );
          }
        )
      ) : (
        <div className="mb-5 rounded border p-4 text-center warning">
          <FontAwesomeIcon className="mr-1" icon={faExclamationTriangle} />
          <span>Không có bất kì thông tin nào</span>
        </div>
      )}
      {dataSelected && (
        <Modal
          open={openModal}
          zIndex={10000}
          onCancel={handleClose}
          footer={<></>}
          closeIcon={<></>}>
          <div className="mb-[15px]">Chi tiết lịch sử giao dịch</div>
          <Record
            label="Số tiền giao dịch"
            spanLabel={8}
            value={
              <div
                className={
                  dataSelected.amount > 0 ? "text-green-600" : "text-red-600"
                }>
                {dataSelected.amount}{" "}
              </div>
            }
          />{" "}
          <Record
            label="thời gian giao dịch"
            spanLabel={8}
            value={
              <div>
                {createdAtSelectedText} -{" "}
                <span className="text-gray-500">
                  {" "}
                  {getDayLeft(createdAtSelected)}
                </span>
              </div>
            }
          />{" "}
          <Record
            label="loại"
            spanLabel={8}
            value={
              <div> {renderTypePayment(TRANSACTION_TYPE_ENUM[typeKey])}</div>
            }
          />
          <div className="flex justify-end mt-[30px]">
            <Button onClick={handleClose}>đóng</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
