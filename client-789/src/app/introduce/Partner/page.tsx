"use client";

import DangKy from "@/components/RulePartner/DangKi";
import DKDK from "@/components/RulePartner/DKDK";
import PartnerTab from "@/components/RulePartner/Partner";
import styles from "@/components/RulePartner/RulePartner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Partner() {
  const router = useRouter();
  const [tab, setTab] = useState(1);

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex w-full flex-col justify-center items-center">
        <Image
          width={298}
          height={67}
          sizes="100vw"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/doitac1.png"
          alt=""
        />
        <Image
          width={581}
          height={254}
          className="mt-8"
          sizes="100vw"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/doitac2.png"
          alt=""
        />
      </div>
      <div className="w-full h-full mt-4">
        <div className="grid gap-[14px] grid-cols-2">
          <div
            onClick={() => setTab(1)}
            className={`${tab === 1 && styles.active} ${styles.item2}`}
          >
            Đại lý
          </div>
          <div onClick={() => router.push("/")} className={`${styles.item1}`}>
            ĐĂNG NHẬP
          </div>
          <div
            onClick={() => setTab(2)}
            className={`${tab === 2 && styles.active} ${styles.item2}`}
          >
            Điều khoản & điều kiện
          </div>

          <div
            onClick={() => router.push("/")}
            className={`${tab === 3 && styles.active} ${styles.item1}`}
          >
            ĐĂNG KÝ
          </div>
        </div>

        {tab === 1 && <PartnerTab />}
        {tab === 2 && <DKDK />}
        {/* {tab === 3 && <DangKy />} */}
      </div>
    </div>
  );
}
