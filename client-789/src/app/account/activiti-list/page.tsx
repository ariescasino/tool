"use client";

import { WarningFilled } from "@ant-design/icons";

export default function ActivitiList() {
  return (
    <div className="w-full h-full">
      <div className="w-full items-center rounded-lg cursor-pointer flex bg-[#fcf8e3] p-[15px] text-[#8a6d3b]">
        <WarningFilled />
        <div>hiện tại chưa có hoạt động</div>
      </div>
    </div>
  );
}
