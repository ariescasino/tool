"use client";

import { Button, Collapse, Form, Input } from "antd";
import { useUser } from "@/context/useUserContext";
import { useRouter } from "next/navigation";
export default function ChangePaassword() {
  const [form] = Form.useForm();

  const { user } = useUser();
  const router = useRouter();

  return (
    <Collapse activeKey={"1"} className="CollapseDisIcon">
      <Collapse.Panel header="Số điện thoại" key="1">
        <div className="p-4 mb-4 bg-[#fcf8e3] border-solid border-[1px] text-[#8a6d3b] border-[#faebcc]">
          {user && user?.phone}
        </div>
        <Button onClick={() => router.back()}>Huỷ bỏ</Button>
      </Collapse.Panel>
    </Collapse>
  );
}
