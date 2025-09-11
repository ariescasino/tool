import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Select } from "antd";
import styles from "./VipMobile.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { dataVipLv } from ".";

export default function UpgradeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [path, setPath] = useState("0");

  return (
    <Modal
      open={open}
      onCancel={onClose}
      modalRender={(modal: any) => {
        return React.cloneElement(modal, {
          style: {
            ...modal.props.style,
            ...{ padding: 0 },
          },
        });
      }}
      width={1200}
      style={{ fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif` }}
      footer={null}
      closeIcon={<FontAwesomeIcon icon={faTimesCircle} fontSize={30} />}
    >
      <div className=" h-[460px] pb-[40px] overflow-y-scroll rounded-xl text-center bg-gradient-to-b from-[#fdffd1] to-[#fefff0]">
        <div className="flex my-2 ml-6 items-center">
          <Image
            src={dataVipLv[parseInt(path, 10)].LogoImage}
            className="h-[40px] mr-2"
            alt="Vip"
            height={40}
            width={40}
          />
          <Select
            defaultValue={"Vip 0"}
            className={`bg-gradient-to-b from-[#fdffd1] to-[#fefff0] ${styles.selectVip}`}
            onChange={(value) => setPath(value)}
            dropdownStyle={{ backgroundColor: '#8b5211', color: '#fff' }}
          >
            {dataVipLv.map((i, index) => {
              return (
                <Select.Option key={index} value={index}>
                  Vip {index}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        <div className="flex justify-center mt-2">
          <table className="w-10/12">
            <thead>
              <tr
                className="h-[30px] "
                style={
                  {
                    // background: "linear-gradient(to bottom, #ffe980, #f1da6f)",
                  }
                }
              >
                <th
                  className="text-black bg-gradient-to-b from-[#ffe980] to-[#f1da6f] text-center font-bold text-[14px] border border-solid border-[#f1da6f]"
                  style={{ borderLeft: "1px dotted #8b5211" }}
                >
                  Điều kiện nâng cấp
                </th>
                <td className="h-[30px] text-center border border-solid border-[#f1da6f]">
                  {dataVipLv[parseInt(path, 10)].UpgradeConditionPoint === 0
                    ? "X"
                    : dataVipLv[parseInt(path, 10)].UpgradeConditionPoint}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  className="text-black bg-gradient-to-b from-[#ffe980] to-[#f1da6f] text-center font-bold text-[14px] w-1/2 border border-solid border-[#f1da6f]"
                  style={{ borderLeft: "1px dotted #8b5211" }}
                >
                  TÍch luỹ tiền gửi
                </th>
                <td className="h-[30px] w-1/2 text-center border border-solid border-[#f1da6f]">
                  {dataVipLv[parseInt(path, 10)].TotalDeposit === 0
                    ? "X"
                    : dataVipLv[parseInt(path, 10)].TotalDeposit}
                </td>
              </tr>
              <tr>
                <th
                  className="text-black bg-gradient-to-b from-[#ffe980] to-[#f1da6f] text-center font-bold text-[14px] border border-solid border-[#f1da6f]"
                  style={{ borderLeft: "1px dotted #8b5211" }}
                >
                  Thưởng Thăng Cấp
                </th>
                <td className="h-[30px] text-center border border-solid border-[#f1da6f]">
                  {dataVipLv[parseInt(path, 10)].UpgradeBonus === 0
                    ? "X"
                    : dataVipLv[parseInt(path, 10)].UpgradeBonus}
                </td>
              </tr>
              <tr>
                <th
                  className="text-black bg-gradient-to-b from-[#ffe980] to-[#f1da6f] text-center font-bold text-[14px] border border-solid border-[#f1da6f]"
                  style={{ borderLeft: "1px dotted #8b5211" }}
                >
                  Quà sinh nhật
                </th>
                <td className="h-[30px] text-center border border-solid border-[#f1da6f]">
                  {dataVipLv[parseInt(path, 10)].BirthdayBonus}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
