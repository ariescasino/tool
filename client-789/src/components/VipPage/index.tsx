/* eslint-disable @next/next/no-img-element */

import { dataVipLv } from "../VipMobile";
import styles from "./VIpPage.module.css";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ModalUpdate from "./ModalUpdate";
import { fNumber } from "@/utils/format-number";
import vipService from "@/api/services/vip.service";
import Image from "next/image";
import { useGetInfoUserBank } from "@/hooks/useVipService";
export default function VipPagePC() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [vipInfo, setVipInfo] = useState({
    level: 0, // cấp vip hiện tại
    hasPendingBonus: true, // bỏ qua
    currentTotalBet: 0, // điểm hiện tại
    currentCashIn: 0, // tích luỹ hiện tại
    upgradeTotalBet: 0, // điểm cần để nâng cấp
    upgradeCashIn: 0, // tích luỹ cần để nâng cấp
  });
  const { dataVipInfo } = useGetInfoUserBank();

  useEffect(() => {
    if (dataVipInfo) {
      setVipInfo(dataVipInfo);
    }
  }, [dataVipInfo]);

  return (
    <div className="hidden md:block">
      <div className="bg-[rgba(255,255,255,0.52)] rounded-[10px] p-[20px] text-[16px] font-[500]">
        <div className="max-w-[410px] w-[410px] mb-[25px] relative mx-auto">
          <img
            src={dataVipLv[vipInfo.level].LevelCardImage}
            className="h-[213px] max-w-[410px] w-[410px] mx-auto"
            alt=""
          />
          <div
            className="absolute top-[60px] left-[20px] text-white w-3/5 font-[700]"
            style={{
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            <div className="text-[18px] my-[10px] leading-[1]">
              Cấp độ hiện tại
            </div>
            <div className="text-[36px] mt-[20px] my-[10px] leading-[1]">
              {dataVipLv[vipInfo.level].Grade}
            </div>
            <div
              className="text-[18px] my-[10px] leading-[24px] pl-[3px]"
              style={{ WebkitLineClamp: 2 }}
            >
              OKVIP HƠN CẢ VIP
            </div>
          </div>
        </div>
        <div
          className="w-[450px] mx-auto mb-[15px] p-[3px] text-black text-[12px] rounded-[10px]"
          style={{
            boxShadow: "0 0 3px #0003",
            backgroundImage:
              "linear-gradient(78deg,#fdffd1 5%,#fefff0 84%,#fff 99%)",
          }}
        >
          <div className={styles.headerCondition}>
            <div className="text-[20px] font-bold text-[#8b5211]">
              VIP {vipInfo.level + 1} Điều kiện nâng cấp
            </div>
            <button
              className={styles.buttonCondition}
              onClick={() => setOpenModal(true)}
            >
              Ngưỡng nâng cấp
            </button>
          </div>
          <div className="relative pt-[5px] pr-[13px] pl-[11px]  border border-solid border-[#f1da6f]">
            <div className="text-[14px] font-bold">Điểm</div>
            <div className="flex justify-between">
              <div>
                <span className="text-[#ff5757]">
                  {fNumber(vipInfo.currentTotalBet)}
                </span>{" "}
                /{fNumber(vipInfo.upgradeTotalBet)}
              </div>
              <div>
                Thiếu:
                {fNumber(
                  vipInfo.upgradeTotalBet - vipInfo.currentTotalBet > 0
                    ? vipInfo.upgradeTotalBet - vipInfo.currentTotalBet
                    : 0
                )}
              </div>
            </div>
            <Progress
              percent={
                (vipInfo.currentTotalBet / vipInfo.upgradeTotalBet) * 100 > 100
                  ? 100
                  : (vipInfo.currentTotalBet / vipInfo.upgradeTotalBet) * 100
              }
              showInfo={false}
              className={styles.progressBar}
              strokeColor="#ff5757"
            />
            <div className="relative top-[-10px] text-right">
              Ngưỡng nâng cấp : {fNumber(vipInfo.upgradeTotalBet)}
            </div>
          </div>
          <div className="relative h-[70px] pt-[5px] pr-[13px] pl-[11px] border border-solid border-[#f1da6f] rounded-b-[8px]">
            <div className="text-[14px] font-bold">Tích lũy tiền gửi</div>
            <div className="flex justify-between">
              <div>
                <span className="text-[#ff5757">
                  {fNumber(vipInfo.currentCashIn)}
                </span>{" "}
                /{fNumber(vipInfo.upgradeCashIn)}
              </div>
              <div>
                Thiếu:
                {fNumber(
                  vipInfo.upgradeCashIn - vipInfo.currentCashIn > 0
                    ? vipInfo.upgradeCashIn - vipInfo.currentCashIn
                    : 0
                )}
              </div>
            </div>
            <Progress
              percent={
                (vipInfo.currentCashIn / vipInfo.upgradeCashIn) * 100 > 100
                  ? 100
                  : (vipInfo.currentCashIn / vipInfo.upgradeCashIn) * 100
              }
              showInfo={false}
              className={styles.progressBar}
              strokeColor="#ff913d"
            />
          </div>
        </div>
        <div>
          <div
            className={styles.itemListInforVip}
            onClick={() => router.push("/vip-details")}
          >
            <div className="flex items-center justify-between h-[75px] text-[#8b5211] text-[26px] pr-[20px] pl-[10px]">
              <Image
                width={90}
                height={60}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip_details.png"
                alt=""
                className="w-[90px] h-[60px] mr-[30px] ml-[20px]"
              />
              <div className="font-medium  leading-[1] flex-auto">
                Chi tiết VIP
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div
            className={styles.itemListInforVip}
            onClick={() => router.push("/account/vip-reward-list")}
          >
            <div className="flex items-center justify-between h-[75px] text-[#8b5211] text-[26px] pr-[20px] pl-[10px]">
              <Image
                width={90}
                height={60}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/claim.png"
                alt=""
                className="w-[90px] h-[60px] mr-[30px] ml-[20px]"
              />
              <div className="font-medium leading-[1] flex-auto">
                Yêu cầu nhận thưởng
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div
            className={styles.itemListInforVip}
            onClick={() => router.push("/account/vip-grade-record")}
          >
            <div className="flex items-center justify-between h-[75px] text-[#8b5211] text-[26px] pr-[20px] pl-[10px]">
              <Image
                width={90}
                height={60}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/upgrade_records.png"
                alt=""
                className="w-[90px] h-[60px] mr-[30px] ml-[20px]"
              />
              <div className="font-medium leading-[1] flex-auto">
                Lịch sử nâng cấp
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
      <ModalUpdate open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
