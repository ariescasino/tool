import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./VipRewardList.module.css";
import { faUndo, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import vipService from "@/api/services/vip.service";
import dayjs from "dayjs";
import Link from "next/link";
import { useGetUpgradeHistory } from "@/hooks/useVipService";

type UpgradeHistory = {
  id: string;
  eventName: "VIP_UPGRADE_BONUS" | "VIP_MONTHLY_BONUS";
  eventDescription: string;
  referenceId: string;
  reward: number;
  status: "PENDING" | "SUCCESS";
  timeInt: number;
  expiredAt: string;
  createdAt: string;
  updatedAt: string;
};

export default function VipRewardList() {
  const { dataUpgradeHistory, isLoading, isFetching, refetch } =
    useGetUpgradeHistory();

  return (
    <>
      <div className={styles.panel}>
        <div className={styles["panel-heading"]}>
          <Link className={styles["panel-undo"]} href="/account/vip">
            <FontAwesomeIcon icon={faUndo} />
          </Link>
          <span className="ng-scope">Yêu cầu nhận thưởng</span>
        </div>
        <div className={styles["panel-body"]}>
          <section>
            {dataUpgradeHistory && dataUpgradeHistory.length === 0 && (
              <div className={styles["alert"]}>
                <span className="ng-scope text-[14px]">
                  Không có bất kì thông tin nào
                </span>
              </div>
            )}
            {/* <table className="w-full mb-5">
              <thead className={styles.thead}>
                <tr>
                  <th>Loại tiền thưởng</th> <th>Cấp độ VIP</th> <th>số tiền</th>{" "}
                  <th>Thời hạn nhận thưởng</th> <th>nhận lấy</th>{" "}
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {upgradeHistory.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.eventName === "VIP_UPGRADE_BONUS"
                        ? "Thưởng Thăng Cấp"
                        : "Thưởng tháng"}
                    </td>
                    <td>{item.referenceId}</td>
                    <td>{item.reward}</td>
                    <td className="text-[#f00]">
                      {dayjs(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                    </td>
                    <td>
                      <span className={styles.status}>
                        {item.status === "PENDING"
                          ? "Chưa nhận"
                          : "Đã nhận thưởng"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </section>
        </div>
      </div>
    </>
  );
}
