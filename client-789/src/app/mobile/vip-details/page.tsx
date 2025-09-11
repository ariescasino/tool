"use client";

import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import VipDetailsMobile from "@/components/VipDetailsMobile";

export default function VipDetails() {
  return (
    <LayoutPromotionMobile title="Chi tiết VIP" padding={false} background="#b0d2ef">
      <VipDetailsMobile />
    </LayoutPromotionMobile>
  );
}
