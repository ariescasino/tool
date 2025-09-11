import { dayNames, TRANSACTION_TYPE_ENUM } from "@/constant";
import renderTypePayment from "@/constant/renderTypePayment";
import { useUser } from "@/context/useUserContext";
import { fNumber } from "@/utils/format-number";
import { Button, Modal } from "antd";
import dayjs from "dayjs";

export default function ModalDetailPayment({
  isOpen,
  onClose,
  detailPayment,
}: {
  isOpen: boolean;
  onClose: () => void;
  detailPayment: any;
}) {
  const { user, balance } = useUser();

  function getShortDayName(date: dayjs.Dayjs): string {
    return dayNames[date.day()];
  }

  const typeKey: keyof typeof TRANSACTION_TYPE_ENUM =
    detailPayment && (detailPayment.type as keyof typeof TRANSACTION_TYPE_ENUM);

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title="Chi tiết lịch sử giao dịch"
      footer={<Button onClick={onClose}>Đóng</Button>}>
      {detailPayment && (
        <div className="p-[15px]">
          <div className="flex">
            <div className="w-1/3 px-[15px] text-right">Số tiền giao dịch</div>
            <div
              className={`w-2/3 px-[15px] ${detailPayment.amount > 0 ? "text-[#3c763d]" : "text-[#a94442]"}`}>
              <span className="">
                {detailPayment.amount > 0 ? "Nạp tiền" : "Chi phí"}
              </span>{" "}
              <span className="ng-binding">
                {detailPayment.amount > 0
                  ? detailPayment.amount
                  : detailPayment.amount * -1}{" "}
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 px-[15px] text-right text-nowrap">
              số dư sau giao dịch
            </div>
            <div className="w-2/3 px-[15px] ng-binding">{fNumber(balance)}</div>
          </div>
          <div className="flex">
            <div className="w-1/3 px-[15px] text-right">
              thời gian giao dịch
            </div>
            <div className="w-2/3 px-[15px]">
              {dayjs(detailPayment.createdAt).format("YYYY/MM/DD")} (
              {getShortDayName(dayjs(detailPayment.createdAt))}){" "}
              {dayjs(detailPayment.createdAt).format("HH:mm:ss")} -{" "}
              <span className="text-[#777777]">
                {dayjs().diff(dayjs(detailPayment.createdAt), "day") < 30
                  ? `${dayjs().diff(dayjs(detailPayment.createdAt), "day")} ngày trước`
                  : `1 tháng trước`}
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 px-[15px] text-right">Phân loại</div>
            <div className="w-2/3 px-[15px] ng-binding">
              {renderTypePayment(TRANSACTION_TYPE_ENUM[typeKey])}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 px-[15px] text-right">ghi chú</div>
            <div className="w-2/3 px-[15px] ng-binding">
              {detailPayment.description}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
