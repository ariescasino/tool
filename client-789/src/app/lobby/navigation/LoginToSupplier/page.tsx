/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import styles from "./LoginToSupplier.module.css";
import LoginToSupplier from "@/components/LoginToSupplierForm";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function page() {
  const router = useRouter();

  {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.form}>
            <div className={styles.info}>
              <div className="text-[36px] leading-[1.1] font-medium mt-2 mb-[10px]">
                Đăng nhập nhanh
              </div>
              <p className="mt-2 mb-[10px]">
                Xin vui lòng nhập tài khoản và mật khẩu
              </p>
            </div>

            <div className={styles.boxForm}>
              <LoginToSupplier />
            </div>
          </div>

          <div className="w-[342px] flex flex-col justify-center items-center">
            <div className="quick-logo">
              <Image
                src={"/images/login/logo.png"}
                alt=""
                width={170}
                height={70}
                objectFit="contain"
              />
            </div>
            <div className="mt-[15px] mb-[30px]">
              Bạn chưa có tài khoản ? Tham gia ngay với chúng tôi
            </div>

            <div
              onClick={() => router.push("/?register=true")}
              className={styles.btnRegister}
            >
              Đăng kí
            </div>
          </div>
        </div>
      </div>
    );
  }
}
