"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faLock, faMobile, faPhone, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Membercenter() {
  const router = useRouter();
  return (
    <>
      <ul className="md:block hidden font-helvetica">
        <li
          onClick={() => router.push("/account/member-center/change-password")}
          className="w-[26%] rounded-lg cursor-pointer h-[126px] hidden md:inline-block bg-[#cccccc99] hover:bg-[#cccccce6] mx-[3%] my-[10px]"
        >
          <button className="pt-[25px] pb-[15px] w-full text-center">
            <i
              className="fas fa-key mb-[10px]"
              style={{ color: "#fff", fontSize: "50px" }}
            />
            <div className="text-white tracking-[2px] leading-[1]">
              Sửa đổi mật khẩu
            </div>
          </button>
        </li>
        <li
          onClick={() =>
            router.push("/account/member-center/change-money-password")
          }
          className="w-[26%] rounded-lg cursor-pointer h-[126px]  hidden md:inline-block bg-[#cccccc99] hover:bg-[#cccccce6] mx-[3%] my-[10px]"
        >
          <button className="pt-[25px] pb-[15px] w-full text-center">
            <i
              className="fas fa-lock-alt mb-[10px]"
              style={{ color: "#fff", fontSize: "50px" }}
            />
            <div className="text-white tracking-[2px] leading-[1]">
              Đổi Mật Khẩu Rút Tiền
            </div>
          </button>
        </li>
        <li
          onClick={() => router.push("/account/member-center/mobile-number")}
          className="w-[26%] rounded-lg cursor-pointer h-[126px]  hidden md:inline-block bg-[#cccccc99] hover:bg-[#cccccce6] mx-[3%] my-[10px]"
        >
          <button className="pt-[25px] pb-[15px] w-full text-center">
            <i
              className="fas fa-mobile-alt mb-[10px]"
              style={{ color: "#fff", fontSize: "50px" }}
            />
            <div className="text-white tracking-[2px] leading-[1]">
              Số điện thoại
            </div>
          </button>
        </li>{" "}
        <li
          onClick={() => router.push("/account/member-center/name")}
          className="w-[26%] rounded-lg cursor-pointer h-[126px]  hidden md:inline-block bg-[#cccccc99] hover:bg-[#cccccce6] mx-[3%] my-[10px]"
        >
          <button className="pt-[25px] pb-[15px] w-full text-center flex flex-col items-center">
            <i className={styles.icon} />

            <div className="text-white tracking-[2px] leading-[1]">
              Cài đặt tên
            </div>
          </button>
        </li>
        <div className="col-span-3 flex flex-col justify-center items-center md:hidden bg-global">
          <div className="mb-1 text-xl uppercase text-white">
            Trung tâm hội viên
          </div>
          <div className="mb-2 flex md:hidden gap-2 color-[#fff] text-basic bg-white px-4 rounded-xl text-sm">
            Số dư tài khoản : 9999
          </div>
        </div>
      </ul>
      <LayoutPromotionMobile title="Bảo mật">
        <div className={styles.box_member_center_mobile}>
          <Link href={'/account/change-password'} className={styles.mobile_item_member_center}>
            <FontAwesomeIcon icon={faKey} fontSize="22px" className="mr-[11px] ml-8" />
            <span>Sửa đổi mật khẩu</span>
          </Link>

          <Link href={'/mobile/change-money-password'} className={styles.mobile_item_member_center}>
            <FontAwesomeIcon icon={faLock} fontSize="22px" className="mr-[11px] ml-8" />
            <span>Đổi mật khẩu rút tiền</span>
          </Link>

          <Link href={'/mobile/mobile-number'} className={styles.mobile_item_member_center}>
            <FontAwesomeIcon icon={faMobile} fontSize="22px" className="mr-[11px] ml-8" />
            <span>Số điện thoại</span>
          </Link>

          <Link href={"/account/member-center/name"} className={styles.mobile_item_member_center}>
            <FontAwesomeIcon icon={faUserEdit} fontSize="22px" className="mr-[11px] ml-8" />
            <span>Cài đặt tên</span>
          </Link>
        </div>
      </LayoutPromotionMobile>
    </>
  );
}
