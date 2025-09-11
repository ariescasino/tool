import { useUser } from "@/context/useUserContext";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UpgradeModal from "./UpgradeModal";
import VipClaimReward from "./VipClaimReward";
import VipDetail from "./VipDetail";
import VipHistory from "./VipHistory";
import styles from "./VipMobile.module.css";

export const dataVipLv = [
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP0",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip0.webp",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card0.png",
    DowngradeConditionPoint: 0,
    TotalDeposit: 0,
    UpgradeConditionPoint: 0,
    BirthdayBonus: "X",
    MonthBonus: 0,
    UpgradeBonus: 0,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP1",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip1.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card1.png",
    DowngradeConditionPoint: 500,
    TotalDeposit: 1,
    UpgradeConditionPoint: 30000,
    BirthdayBonus: 0,
    MonthBonus: 0,
    UpgradeBonus: 10,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP2",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip2.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card2.png",
    DowngradeConditionPoint: 1000,
    TotalDeposit: 100,
    UpgradeConditionPoint: 100000,
    BirthdayBonus: 0,
    MonthBonus: 0,
    UpgradeBonus: 28,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP3",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip3.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card3.png",
    DowngradeConditionPoint: 2000,
    TotalDeposit: 1000,
    UpgradeConditionPoint: 200000,
    BirthdayBonus: 18,
    MonthBonus: 0,
    UpgradeBonus: 38,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP4",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip4.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card4.png",
    DowngradeConditionPoint: 5000,
    TotalDeposit: 3000,
    UpgradeConditionPoint: 400000,
    BirthdayBonus: 28,
    MonthBonus: 0,
    UpgradeBonus: 68,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP5",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip5.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card5.png",
    DowngradeConditionPoint: 10000,
    TotalDeposit: 10000,
    UpgradeConditionPoint: 700000,
    BirthdayBonus: 38,
    MonthBonus: 0,
    UpgradeBonus: 98,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP6",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip6.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card6.png",
    DowngradeConditionPoint: 20000,
    TotalDeposit: 20000,
    UpgradeConditionPoint: 1000000,
    BirthdayBonus: 48,
    MonthBonus: 0,
    UpgradeBonus: 118,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP7",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip7.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card7.png",
    DowngradeConditionPoint: 30000,
    TotalDeposit: 30000,
    UpgradeConditionPoint: 1500000,
    BirthdayBonus: 58,
    MonthBonus: 0,
    UpgradeBonus: 168,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP8",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip8.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card8.png",
    DowngradeConditionPoint: 40000,
    TotalDeposit: 40000,
    UpgradeConditionPoint: 2000000,
    BirthdayBonus: 68,
    MonthBonus: 0,
    UpgradeBonus: 188,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP9",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip9.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card9.png",
    DowngradeConditionPoint: 60000,
    TotalDeposit: 60000,
    UpgradeConditionPoint: 2800000,
    BirthdayBonus: 88,
    MonthBonus: 0,
    UpgradeBonus: 268,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP10",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip10.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card10.png",
    DowngradeConditionPoint: 70000,
    TotalDeposit: 70000,
    UpgradeConditionPoint: 3800000,
    BirthdayBonus: 108,
    MonthBonus: 0,
    UpgradeBonus: 338,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP11",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip11.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card11.png",
    DowngradeConditionPoint: 80000,
    TotalDeposit: 80000,
    UpgradeConditionPoint: 5000000,
    BirthdayBonus: 158,
    MonthBonus: 0,
    UpgradeBonus: 388,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP12",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip12.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card12.png",
    DowngradeConditionPoint: 100000,
    TotalDeposit: 100000,
    UpgradeConditionPoint: 6500000,
    BirthdayBonus: 218,
    MonthBonus: 0,
    UpgradeBonus: 518,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP13",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip13.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card13.png",
    DowngradeConditionPoint: 120000,
    TotalDeposit: 120000,
    UpgradeConditionPoint: 8500000,
    BirthdayBonus: 288,
    MonthBonus: 0,
    UpgradeBonus: 628,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP14",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip14.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card14.png",
    DowngradeConditionPoint: 150000,
    TotalDeposit: 150000,
    UpgradeConditionPoint: 11000000,
    BirthdayBonus: 388,
    MonthBonus: 0,
    UpgradeBonus: 758,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP15",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip15.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card15.png",
    DowngradeConditionPoint: 200000,
    TotalDeposit: 200000,
    UpgradeConditionPoint: 13800000,
    BirthdayBonus: 488,
    MonthBonus: 0,
    UpgradeBonus: 828,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP16",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip16.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card16.png",
    DowngradeConditionPoint: 250000,
    TotalDeposit: 250000,
    UpgradeConditionPoint: 16800000,
    BirthdayBonus: 588,
    MonthBonus: 0,
    UpgradeBonus: 988,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP17",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip17.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card17.png",
    DowngradeConditionPoint: 300000,
    TotalDeposit: 300000,
    UpgradeConditionPoint: 20000000,
    BirthdayBonus: 688,
    MonthBonus: 0,
    UpgradeBonus: 1088,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP18",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip18.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card18.png",
    DowngradeConditionPoint: 350000,
    TotalDeposit: 350000,
    UpgradeConditionPoint: 23800000,
    BirthdayBonus: 788,
    MonthBonus: 0,
    UpgradeBonus: 1228,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP19",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip19.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card19.png",
    DowngradeConditionPoint: 400000,
    TotalDeposit: 400000,
    UpgradeConditionPoint: 27800000,
    BirthdayBonus: 888,
    MonthBonus: 0,
    UpgradeBonus: 1368,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP20",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip20.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card20.png",
    DowngradeConditionPoint: 500000,
    TotalDeposit: 500000,
    UpgradeConditionPoint: 32000000,
    BirthdayBonus: 1088,
    MonthBonus: 0,
    UpgradeBonus: 1528,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP21",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip21.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card21.png",
    DowngradeConditionPoint: 600000,
    TotalDeposit: 600000,
    UpgradeConditionPoint: 36800000,
    BirthdayBonus: 1588,
    MonthBonus: 0,
    UpgradeBonus: 1688,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP22",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip22.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card22.png",
    DowngradeConditionPoint: 700000,
    TotalDeposit: 700000,
    UpgradeConditionPoint: 42000000,
    BirthdayBonus: 2888,
    MonthBonus: 0,
    UpgradeBonus: 1888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP23",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip23.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card23.png",
    DowngradeConditionPoint: 800000,
    TotalDeposit: 800000,
    UpgradeConditionPoint: 47800000,
    BirthdayBonus: 3888,
    MonthBonus: 0,
    UpgradeBonus: 2088,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP24",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip24.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card24.png",
    DowngradeConditionPoint: 900000,
    TotalDeposit: 900000,
    UpgradeConditionPoint: 54000000,
    BirthdayBonus: 4888,
    MonthBonus: 0,
    UpgradeBonus: 2228,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP25",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip25.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card25.png",
    DowngradeConditionPoint: 1000000,
    TotalDeposit: 1000000,
    UpgradeConditionPoint: 60800000,
    BirthdayBonus: 5888,
    MonthBonus: 0,
    UpgradeBonus: 2458,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP26",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip26.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card26.png",
    DowngradeConditionPoint: 1100000,
    TotalDeposit: 1100000,
    UpgradeConditionPoint: 68800000,
    BirthdayBonus: 6888,
    MonthBonus: 0,
    UpgradeBonus: 2688,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP27",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip27.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card27.png",
    DowngradeConditionPoint: 1200000,
    TotalDeposit: 1200000,
    UpgradeConditionPoint: 77300000,
    BirthdayBonus: 7888,
    MonthBonus: 0,
    UpgradeBonus: 2888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP28",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip28.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card28.png",
    DowngradeConditionPoint: 1300000,
    TotalDeposit: 1300000,
    UpgradeConditionPoint: 86800000,
    BirthdayBonus: 8888,
    MonthBonus: 0,
    UpgradeBonus: 3188,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP29",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip29.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card29.png",
    DowngradeConditionPoint: 1400000,
    TotalDeposit: 1400000,
    UpgradeConditionPoint: 98800000,
    BirthdayBonus: 9888,
    MonthBonus: 0,
    UpgradeBonus: 3888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP30",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip30.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card30.png",
    DowngradeConditionPoint: 1500000,
    TotalDeposit: 1500000,
    UpgradeConditionPoint: 112800000,
    BirthdayBonus: 10888,
    MonthBonus: 0,
    UpgradeBonus: 4588,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP31",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip31.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card31.png",
    DowngradeConditionPoint: 1600000,
    TotalDeposit: 1600000,
    UpgradeConditionPoint: 128800000,
    BirthdayBonus: 11888,
    MonthBonus: 0,
    UpgradeBonus: 5288,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP32",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip32.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card32.png",
    DowngradeConditionPoint: 1700000,
    TotalDeposit: 1700000,
    UpgradeConditionPoint: 148800000,
    BirthdayBonus: 12888,
    MonthBonus: 0,
    UpgradeBonus: 6688,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP33",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip33.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card33.png",
    DowngradeConditionPoint: 1800000,
    TotalDeposit: 1800000,
    UpgradeConditionPoint: 178800000,
    BirthdayBonus: 13888,
    MonthBonus: 0,
    UpgradeBonus: 8188,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP34",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip34.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card34.png",
    DowngradeConditionPoint: 1900000,
    TotalDeposit: 1900000,
    UpgradeConditionPoint: 218800000,
    BirthdayBonus: 14888,
    MonthBonus: 0,
    UpgradeBonus: 9888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP35",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip35.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card35.png",
    DowngradeConditionPoint: 2000000,
    TotalDeposit: 2000000,
    UpgradeConditionPoint: 268800000,
    BirthdayBonus: 15888,
    MonthBonus: 0,
    UpgradeBonus: 11888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP36",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip36.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card36.png",
    DowngradeConditionPoint: 2200000,
    TotalDeposit: 2200000,
    UpgradeConditionPoint: 328800000,
    BirthdayBonus: 16888,
    MonthBonus: 0,
    UpgradeBonus: 13888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP37",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip37.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card37.png",
    DowngradeConditionPoint: 2400000,
    TotalDeposit: 2400000,
    UpgradeConditionPoint: 398800000,
    BirthdayBonus: 17888,
    MonthBonus: 0,
    UpgradeBonus: 15888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP38",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip38.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card38.png",
    DowngradeConditionPoint: 2600000,
    TotalDeposit: 2600000,
    UpgradeConditionPoint: 478800000,
    BirthdayBonus: 18888,
    MonthBonus: 0,
    UpgradeBonus: 18888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP39",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip39.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card39.png",
    DowngradeConditionPoint: 2800000,
    TotalDeposit: 2800000,
    UpgradeConditionPoint: 568800000,
    BirthdayBonus: 19888,
    MonthBonus: 0,
    UpgradeBonus: 21888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP40",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip40.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card40.png",
    DowngradeConditionPoint: 3000000,
    TotalDeposit: 3000000,
    UpgradeConditionPoint: 678800000,
    BirthdayBonus: 20888,
    MonthBonus: 0,
    UpgradeBonus: 25888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP41",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip41.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card41.png",
    DowngradeConditionPoint: 3200000,
    TotalDeposit: 3200000,
    UpgradeConditionPoint: 798800000,
    BirthdayBonus: 21888,
    MonthBonus: 0,
    UpgradeBonus: 28888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP42",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip42.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card42.png",
    DowngradeConditionPoint: 3400000,
    TotalDeposit: 3400000,
    UpgradeConditionPoint: 968800000,
    BirthdayBonus: 22888,
    MonthBonus: 0,
    UpgradeBonus: 35888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP43",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip43.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card43.png",
    DowngradeConditionPoint: 3600000,
    TotalDeposit: 3600000,
    UpgradeConditionPoint: 1158800000,
    BirthdayBonus: 23888,
    MonthBonus: 0,
    UpgradeBonus: 42888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP44",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip44.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card44.png",
    DowngradeConditionPoint: 3800000,
    TotalDeposit: 3800000,
    UpgradeConditionPoint: 1388800000,
    BirthdayBonus: 24888,
    MonthBonus: 0,
    UpgradeBonus: 48888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP45",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip45.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card45.png",
    DowngradeConditionPoint: 4000000,
    TotalDeposit: 4000000,
    UpgradeConditionPoint: 1628800000,
    BirthdayBonus: 25888,
    MonthBonus: 0,
    UpgradeBonus: 56888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP46",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip46.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card46.png",
    DowngradeConditionPoint: 4200000,
    TotalDeposit: 4200000,
    UpgradeConditionPoint: 1888800000,
    BirthdayBonus: 26888,
    MonthBonus: 0,
    UpgradeBonus: 66888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP47",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip47.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card47.png",
    DowngradeConditionPoint: 4400000,
    TotalDeposit: 4400000,
    UpgradeConditionPoint: 2228800000,
    BirthdayBonus: 27888,
    MonthBonus: 0,
    UpgradeBonus: 77888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP48",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip48.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card48.png",
    DowngradeConditionPoint: 4600000,
    TotalDeposit: 4600000,
    UpgradeConditionPoint: 2588800000,
    BirthdayBonus: 28888,
    MonthBonus: 0,
    UpgradeBonus: 88888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP49",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip49.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card49.png",
    DowngradeConditionPoint: 4800000,
    TotalDeposit: 4800000,
    UpgradeConditionPoint: 2988800000,
    BirthdayBonus: 29888,
    MonthBonus: 0,
    UpgradeBonus: 98888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP50",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip50.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card50.png",
    DowngradeConditionPoint: 5000000,
    TotalDeposit: 5000000,
    UpgradeConditionPoint: 3418800000,
    BirthdayBonus: 30888,
    MonthBonus: 0,
    UpgradeBonus: 108888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP51",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip51.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card51.png",
    DowngradeConditionPoint: 5200000,
    TotalDeposit: 5200000,
    UpgradeConditionPoint: 3888800000,
    BirthdayBonus: 31888,
    MonthBonus: 0,
    UpgradeBonus: 118888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP52",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip52.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card52.png",
    DowngradeConditionPoint: 5400000,
    TotalDeposit: 5400000,
    UpgradeConditionPoint: 4388800000,
    BirthdayBonus: 32888,
    MonthBonus: "X",
    UpgradeBonus: 128888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP53",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip53.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card53.png",
    DowngradeConditionPoint: 5600000,
    TotalDeposit: 5600000,
    UpgradeConditionPoint: 4928800000,
    BirthdayBonus: 33888,
    MonthBonus: 0,
    UpgradeBonus: 138888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP54",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip54.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card54.png",
    DowngradeConditionPoint: 5800000,
    TotalDeposit: 5800000,
    UpgradeConditionPoint: 5488800000,
    BirthdayBonus: 34888,
    MonthBonus: 0,
    UpgradeBonus: 158888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP55",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip55.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card55.png",
    DowngradeConditionPoint: 6000000,
    TotalDeposit: 6000000,
    UpgradeConditionPoint: 6088800000,
    BirthdayBonus: 35888,
    MonthBonus: 0,
    UpgradeBonus: 168888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP56",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip56.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card56.png",
    DowngradeConditionPoint: 6500000,
    TotalDeposit: 6500000,
    UpgradeConditionPoint: 6738800000,
    BirthdayBonus: 38888,
    MonthBonus: 0,
    UpgradeBonus: 178888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP57",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip57.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card57.png",
    DowngradeConditionPoint: 7000000,
    TotalDeposit: 7000000,
    UpgradeConditionPoint: 7428800000,
    BirthdayBonus: 43888,
    MonthBonus: 0,
    UpgradeBonus: 188888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP58",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip58.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card58.png",
    DowngradeConditionPoint: 8000000,
    TotalDeposit: 8000000,
    UpgradeConditionPoint: 8188800000,
    BirthdayBonus: 48888,
    MonthBonus: 0,
    UpgradeBonus: 228888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP59",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip59.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card59.png",
    DowngradeConditionPoint: 9000000,
    TotalDeposit: 9000000,
    UpgradeConditionPoint: 8988800000,
    BirthdayBonus: 53888,
    MonthBonus: 0,
    UpgradeBonus: 288888,
  },
  {
    Name: "OKVIP HƠN CẢ VIP",
    Grade: "VIP60",
    LogoImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip60.png",
    LevelCardImage: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card60.png",
    DowngradeConditionPoint: 10000000,
    TotalDeposit: 10000000,
    UpgradeConditionPoint: 9888800000,
    BirthdayBonus: 58888,
    MonthBonus: 0,
    UpgradeBonus: 388888,
  },
];

export default function VipMobile() {
  const { user } = useUser();
  const router = useRouter();
  const [showVipDetail, setShowVipDetail] = useState<boolean>(false);
  const [showVipClaimReward, setShowVipClaimReward] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="block md:hidden bg-[#f0f8ff] h-screen">
      <div className="relative bg-[#FF9000] text-white">
        <div
          className="absolute left-[2rem] top-[0.5rem] text-2xl"
          onClick={() => router.back()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="leading-[50px] text-center text-[20px] font-medium">
          VIP
        </div>
      </div>
      <div className={styles.icon}>
        <div className="w-[300px] min-h-[142px] my-[15px] mx-auto relative">
          <Image src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/card0.png" alt="" width={450} height={213} />
          <div
            className="absolute top-[30px] left-[15px] w-3/5 text-white"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            <div>Cấp độ hiện tại</div>
            <div className="font-bold mb-[10px] text-[50px] leading-[1]">
              {dataVipLv[0].Grade}
            </div>
            {/* <p className="uppercase">ok vip hơn cả vip</p> */}
          </div>
        </div>
        <div
          className="w-[300px] mx-auto mb-[15px] p-[3px] text-black text-[12px] rounded-[10px]"
          style={{
            boxShadow: "0 0 3px #0003",
            backgroundImage:
              "linear-gradient(78deg,#fdffd1 5%,#fefff0 84%,#fff 99%)",
          }}
        >
          <div className={styles.headerCondition}>
            <div className="text-[14px] font-bold text-[#8b5211]">
              VIP 0 Điều kiện nâng cấp
            </div>
            <button
              className={styles.buttonCondition}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Ngưỡng nâng cấp
            </button>
          </div>
          <div className="relative h-[70px] pt-[5px] pr-[13px] pl-[11px]  border border-solid border-[#f1da6f]">
            <div className="text-[12px] font-bold">Điểm</div>
            <div className="flex justify-between">
              <div>
                <span className="text-[#ff5757]">15,000</span> / 30,000
              </div>
              <div>Thiếu: 30,000</div>
            </div>
            <Progress
              percent={50}
              showInfo={false}
              className={styles.progressBar}
            />
            <div className="relative top-[-10px] text-right">
              Ngưỡng nâng cấp : 30,000
            </div>
          </div>
          <div className="relative h-[70px] pt-[5px] pr-[13px] pl-[11px] border border-solid border-[#f1da6f] rounded-b-[8px]">
            <div className="text-[12px] font-bold">Tích lũy tiền gửi</div>
            <div className="flex justify-between">
              <div>
                <span className="text-[#ff5757]">0</span> / 1
              </div>
              <div>Thiếu: 1</div>
            </div>
            <Progress
              percent={0}
              showInfo={false}
              className={styles.progressBar}
            />
          </div>
        </div>
        <div>
          <div
            className={styles.itemListInforVip}
            onClick={() => setShowVipDetail(true)}
          >
            <div className="flex items-center justify-between h-[50px] text-[#8b5211] text-[14px] pr-[20px] pl-[10px]">
              <Image
                width={60}
                height={40}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/vip_details.png"
                alt=""
              />
              <div className="font-bold">Chi tiết VIP</div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div
            className={styles.itemListInforVip}
            onClick={() => setShowVipClaimReward(true)}
          >
            <div className="flex items-center justify-between h-[50px] text-[#8b5211] text-[14px] pr-[20px] pl-[10px]">
              <Image
                width={60}
                height={40}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/claim.png"
                alt=""
              />
              <div className="font-bold">Yêu cầu nhận thưởng</div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div
            className={styles.itemListInforVip}
            onClick={() => setShowHistory(true)}
          >
            <div className="flex items-center justify-between h-[50px] text-[#8b5211] text-[14px] pr-[20px] pl-[10px]">
              <Image
                width={60}
                height={40}
                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/vip/upgrade_records.png"
                alt=""
              />
              <div className="font-bold">Lịch sử nâng cấp</div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
      <VipDetail isOpen={showVipDetail} setIsOpen={setShowVipDetail} />
      <VipClaimReward
        isOpen={showVipClaimReward}
        setIsOpen={setShowVipClaimReward}
      />
      <VipHistory isOpen={showHistory} setIsOpen={setShowHistory} />
      <UpgradeModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
