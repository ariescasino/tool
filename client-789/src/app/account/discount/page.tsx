"use client";

import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import { Button, Select } from "antd";
import { useState } from "react";

export default function Discount() {
  const [selected, setSelected] = useState(1);
  return (
    <LayoutPromotionMobile title="Hoàn trả nhanh" background="#7e7e7e">
      <div className="mt-5 mb-4 border border-[#ddd] bg-white p-4 text-[14px]">
        <div className="ng-star-inserted">
          <div className="mb-5 rounded border p-4 text-center info ng-star-inserted">
            <i className="fas mr-1 fa-info-circle" />
            <span className="ng-star-inserted">
              Bạn hiện không có hoàn trả nào có thể nhận, hãy vào chơi ngay!
            </span>
          </div>
        </div>
      </div>
    </LayoutPromotionMobile>
  );
}
