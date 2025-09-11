/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import LayoutPromotionMobile from "@/components/PromotionMobile/LayoutPromotion";
import { useUser } from "@/context/useUserContext";

export default function MobileNumber() {
  const { user } = useUser();
  return (
    <LayoutPromotionMobile title={"Số điện thoại"} padding={false} background="black">
      <div className="mx-4 mt-4">
        <section className="wrapper mb-5 rounded-[4px] border  bg-white p-3.5">
          <section className="rounded-[4px] bg-yellow-100 p-3.5 text-yellow-700 ng-star-inserted">
            {user && user?.phone}
          </section>
        </section>
      </div>
    </LayoutPromotionMobile>
  );
}