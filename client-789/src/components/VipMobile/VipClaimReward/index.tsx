/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VipInforLayout from "../VipInforLayout";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function VipClaimReward({ isOpen, setIsOpen }: Props) {
  return (
    <div>
      <VipInforLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Yêu cầu nhận thưởng">
        <div className="px-[15px]">
          <div className="my-[8px]">
            <div className="mb-5 rounded border p-4 text-center text-[#8a6d3b] bg-[#fcf8e3] border-solid border-[#faebcc] text-[14px]">
              <FontAwesomeIcon icon={faExclamationTriangle} /> &nbsp; Không có
              bất kì thông tin nào
            </div>
          </div>
        </div>
      </VipInforLayout>
    </div>
  );
}
