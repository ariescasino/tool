"use client";

import { useState } from "react";
import styles from "./RulePartner.module.css";
import { useRouter } from "next/navigation";
import DKDK from "./DKDK";
import PartnerTab from "./Partner";
import DangKy from "./DangKi";

export default function RulePartner() {
  const router = useRouter();
  const [tab, setTab] = useState(3);

  return (
    <div className="w-full h-full mt-4">
      <div className="flex gap-[14px]">
        <div
          onClick={() => setTab(1)}
          className={`${tab === 1 && styles.active} ${styles.item}`}
        >
          Đại lý
        </div>
        <div
          onClick={() => setTab(2)}
          className={`${tab === 2 && styles.active} ${styles.item}`}
        >
          Điều khoản & điều kiện
        </div>

        <div onClick={() => router.push("/")} className={`${styles.item}`}>
          ĐĂNG NHẬP
        </div>

        <div
          onClick={() => setTab(3)}
          className={`${tab === 3 && styles.active} ${styles.item}`}
        >
          ĐĂNG KÝ
        </div>
      </div>

      {tab === 1 && <PartnerTab />}
      {tab === 2 && <DKDK />}
      {tab === 3 && <DangKy />}
    </div>
  );
}
