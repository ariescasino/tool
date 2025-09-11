"use client";

import Link from "next/link";
import styles from "./RuleNav.module.css";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { usePathname } from "next/navigation";

const RuleList = [
  {
    id: 1,
    name: "Giới thiệu về 789BET",
    link: "/rule/AboutUs",
  },
  {
    id: 2,
    name: "Điều khoản và điều kiện",
    link: "/rule",
  },
  {
    id: 3,
    name: "Chơi có trách nhiệm",
    link: "/rule/ResponsibleGambling",
  },
  {
    id: 4,
    name: "Miễn trách nhiệm",
    link: "/rule/Disclaimer",
  },
  {
    id: 5,
    name: "Quyền riêng tư",
    link: "/rule/PrivacyPolicy",
  },
  {
    id: 6,
    name: "Hướng dẫn nạp tiền",
    link: "/rule/Deposit",
  },
  {
    id: 7,
    name: "Hướng dẫn rút tiền",
    link: "/rule/Withdrawal",
  },
  {
    id: 8,
    name: "Những câu hỏi thường gặp",
    link: "/rule/FAQ",
  },
  {
    id: 9,
    name: "Đại sứ thương hiệu",
    link: "/rule/BrandAmbassador",
  },
  {
    id: 10,
    name: "Liên hệ",
    link: "/rule/Contact",
  },
  {
    id: 11,
    name: "Đối tác",
    link: "/rule/Partner",
  },
];

export default function RuleNav() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState("");
  const [hoverItem, setHoverItem] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <div
      className={`sticky top-0 flex flex-col transition-all duration-500 bg-[#333333] rounded-[10px] h-[750px] ${styles.box}`}>
      {RuleList.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          onMouseEnter={() => setHoverItem(item.id)}
          onMouseLeave={() => setHoverItem(0)}
          onClick={() => setActive(item.link)}
          className={`${styles.itemNav} ${active === item.link ? styles.active : ""} ${hoverItem === item.id && styles.active} ${toggle ? "w-[298px]" : "w-[107px] flex flex-col items-center justify-center"} `}>
          <i />
          <span className={`${!toggle && "hidden"} text-lg font-roboto`}>
            {item.name}
          </span>
        </Link>
      ))}
      <div className="w-full h-[86px] flex justify-center">
        <Button
          className={`${styles.btn} ${!toggle ? "rotate-0" : "rotate-180"} duration-0`}
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
}
