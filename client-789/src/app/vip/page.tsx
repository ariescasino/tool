"use client";

import VipMobile from "@/components/VipMobile";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

export default function VipPage() {
  return (
    <div>
      <div className="relative h-6 pr-2 pl-12 text-xs leading-6 w-full">
        <div className="absolute top-0 left-2 w-6">
          <FontAwesomeIcon
            icon={faVolumeHigh}
            className="fa-solid fa-volume-high text-xl"
            color="#103667"
          />
        </div>
        <Marquee
          className="w-screen"
          style={{
            maxWidth: "100vw",
          }}
        >
          <span className="tickers">
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              ✅Hãy trải nghiệm sự khác biệt tại 789BET, nơi cung cấp dịch vụ nạp rút tiền nhanh
              chóng và ổn định nhất thị trường. Bạn gặp khó khăn khi tham gia nạp rút ở các nhà cái
              khác? Đừng lo lắng nữa, 789BET cam kết mang đến trải nghiệm tuyệt vời nhất với tốc độ
              xử lý nhanh chóng và ổn định nhất thị trường. Hãy đến với 789BET ngay hôm nay và đồng
              hành cùng Euro 2024 cùng 789BET!
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              ☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              Truy cập vào 789BET không lo bị chặn:
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              Bước 1: Tải 1.1.1.1: Faster Internet tại App Store hoặc 1.1.1.1 + WARP: Safer Internet
              tại CH Play.
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              Bước 2: Tải ứng dụng về điện thoại được xếp hạng đầu tiên.
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              Bước 3: Cài đặt và khởi động ứng dụng.
            </span>
            <span className="mx-1.5 inline-block whitespace-nowrap align-top leading-6 ng-star-inserted text-[#103667]">
              Bước 4: Bật công tắc để kết nối thành công. Vào lại website 789BET.
            </span>
          </span>
        </Marquee>
      </div>
      <VipMobile />
    </div>
  );
}
