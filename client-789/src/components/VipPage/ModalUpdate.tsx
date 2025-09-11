import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";

import styles from "./VIpPage.module.css";
import { dataVipLv } from "../VipMobile";
import Image from "next/image";
import { formatNumber } from "@/utils/format-number";

export default function ModalUpdate({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      width={1200}
      style={{ fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif` }}
      footer={<></>}
      closeIcon={<FontAwesomeIcon icon={faTimesCircle} fontSize={30} color="#ffff" />}
      className={styles.customModal}>
      <div className="h-[760px] px-[40px] pb-[40px] overflow-y-scroll text-center">
        <h1 className="text-[#8b5211] text-[30px] font-roboto font-bold mt-[20px] mb-[10px]">
          Điều kiện nâng cấp
        </h1>
        <table className="w-full">
          <thead>
            <tr
              className="h-[50px] border border-solid border-[#f1da6f]"
              style={{
                background: "linear-gradient(to bottom, #ffe980, #f1da6f)",
              }}>
              <th className="text-[#8b5211] text-center font-bold text-[14px]">
                Cấp độ VIP
              </th>
              <th
                className="text-[#8b5211] text-center font-bold text-[14px]"
                style={{ borderLeft: "1px dotted #8b5211" }}>
                Điều kiện nâng cấp
              </th>
              <th
                className="text-[#8b5211] text-center font-bold text-[14px]"
                style={{ borderLeft: "1px dotted #8b5211" }}>
                TÍch luỹ tiền gửi
              </th>
              <th
                className="text-[#8b5211] text-center font-bold text-[14px]"
                style={{ borderLeft: "1px dotted #8b5211" }}>
                Thưởng Thăng Cấp
              </th>
              <th
                className="text-[#8b5211] text-center font-bold text-[14px]"
                style={{ borderLeft: "1px dotted #8b5211" }}>
                Quà sinh nhật
              </th>
            </tr>
          </thead>
          <tbody>
            {dataVipLv.map((data, index) => (
              <tr key={index}>
                <td className="h-[50px] text-center border border-solid border-[#f1da6f]">
                  <Image
                    src={data.LogoImage}
                    className="h-[40px] mx-auto"
                    alt="Vip"
                    height={40}
                    width={40}
                  />
                </td>
                <td className="h-[50px] text-center border border-solid border-[#f1da6f]">
                  {data.UpgradeConditionPoint === 0
                    ? "X"
                    : formatNumber(data.UpgradeConditionPoint)}
                </td>
                <td className="h-[50px] text-center border border-solid border-[#f1da6f]">
                  {data.TotalDeposit === 0 ? "X" : formatNumber(data.TotalDeposit)}
                </td>
                <td className="h-[50px] text-center border border-solid border-[#f1da6f]">
                  {data.UpgradeBonus === 0 ? "X" : formatNumber(data.UpgradeBonus)}
                </td>
                <td className="h-[50px] text-center border border-solid border-[#f1da6f]">
                  {formatNumber(data.BirthdayBonus)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
