"use client";

import { FormChangePasswordMoney } from "@/components/FormChangePasswordMoney";
import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";

export default function ChangeMoneyPasswordMobile() {
  return (
    <LayoutPromotionMobile title="Thay đổi mật khẩu rút tiền" padding={false}>
      <FormChangePasswordMoney />
    </LayoutPromotionMobile>
  );
}
