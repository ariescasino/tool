import LoadingComponent from "@/components/LoadingComponent";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function LoadingPort() {
  return (
    <div className="w-full min-h-[600px] h-full flex items-center justify-center bg-white md:bg-[#2b2b2b] rounded-[10px] text-[#02a9dd] md:text-[#fff]">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
    </div>
  );
}
