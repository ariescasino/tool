import { Button, Checkbox, Form, Input, Modal } from "antd";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function ModalRefund({ isOpen, setIsOpen }: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
  };

  return (
    <Modal
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={670}
      footer={null}
      className="refundModal"
    >
      <div className="relative">
        <div className="position  flex justify-center absolute top-[-28px] left-[-34px] w-[670px] h-[489px] bg-[url('/images/modal-images/modalBg.png')] bg-no-repeat"></div>

        <div className="flex flex-col gap-1 position absolute top-[80px] left-[40px] w-[530px] h-[389px]">
          <div className="w-full -mt-[90px] h-fit items-end flex justify-center font-bold text-5xl  text-[#fad654]">
            <p
              style={{
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "black",
              }}
            >
              Hoàn trả ngay
            </p>
          </div>
          <div className="mt-12" />
          <div className="col-span-3 text-[18px]">
            2024/05/03 02:49:03 ~ Bây Giờ
          </div>
          <div className="grid grid-cols-3 items-center text-[18px] gap-[2px]">
            <div className="bg-[#ffdd54] w-full text-center">Tên trò chơi</div>
            <div className="bg-[#ffdd54] w-full text-center">
              Tổng cược hợp lệ
            </div>
            <div className="bg-[#ffdd54] w-full text-center">Hoàn trả</div>
          </div>
          <div className="h-2/5 overflow-y-scroll" />
          <div className="flex items-center text-[18px] w-full text-red-500">
            <div className="bg-[#ffff] w-2/3 text-center">Tổng</div>
            <div className="w-[1.5px] h-fit" />
            <div className="bg-[#ffff] w-1/3 text-center">0</div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-[78px] justify-center cursor-pointer mt-1 items-center flex rounded-md bg-[url('/images/bg.png')] h-[40px]">
              Làm mới
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
