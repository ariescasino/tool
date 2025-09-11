"use client";

import paymentService from "@/api/services/payment.service";
import { PaymentHistoryReq } from "@/api/types/payment.interface";
import ModalDetailPayment from "@/components/ModalDetailPayment";
import ModalMobileTransactionHistory from "@/components/ModalMobileTransactionHistory";
import { dayNames } from "@/constant";
import { MailTypeEnum } from "@/constant/enum";
import { useGetPaymentHistory } from "@/hooks/usePaymentService";
import { Button, Select } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const options = [
  { value: undefined, label: "Tất cả" },
  { value: MailTypeEnum.COMPANY_IN, label: "Công ty gửi tiền" },
  { value: MailTypeEnum.ONLINE_IN, label: "Thanh toán trực tuyến" },
  { value: MailTypeEnum.ONLINE_OUT, label: "Rút tiền trực tuyến" },
  { value: MailTypeEnum.MANUAL, label: "Nạp rút thủ công" },
  { value: MailTypeEnum.PREFERENTIAL, label: "Hoạt động ưu đãi" },
  { value: MailTypeEnum.PREFERENTIAL_DAY, label: "Hoàn trả ngày" },
  { value: MailTypeEnum.VIP_BONUS, label: "VIP bonus" },
  { value: MailTypeEnum.ORTHER, label: "Khác" },
];

export default function Transaction() {
  const [rangeDate, setRangeDate] = useState({
    dateFrom: dayjs().startOf("day").toISOString(),
    dateTo: dayjs().toISOString(),
    selected: "now",
  });
  const [params, setParams] = useState<PaymentHistoryReq>({
    page: 0,
    limit: 50,
    dateFrom: rangeDate.dateFrom,
    dateTo: rangeDate.dateTo,
  });
  const { dataPaymentHistory, refetch } = useGetPaymentHistory(params);

  function getShortDayName(date: dayjs.Dayjs): string {
    return dayNames[date.day()];
  }

  const [dataListPaymentType, setDataListPaymentType] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataPayment, setDataPayment] = useState<any>();
  const [transactionType, setTransactionType] = useState<
    MailTypeEnum | undefined
  >(undefined);

  const getPaymentHistoryRequest = async (
    transactionType: MailTypeEnum | undefined
  ) => {
    try {
      const params: PaymentHistoryReq = {
        page: 0,
        limit: 50,
        dateFrom: rangeDate.dateFrom,
        dateTo: rangeDate.dateTo,
      };
      if (transactionType) {
        params.type = transactionType;
      }

      setParams(params);
    } catch (error) { }
  };

  useEffect(() => {
    if (dataPaymentHistory) {
      setDataListPaymentType(dataPaymentHistory.data);
    }
  }, [dataPaymentHistory]);

  const handleOpenDetail = (data: any) => {
    setDataPayment(data);
    setIsOpen(true);
  };

  const handleChangeRange = (type: string) => {
    switch (type) {
      case "now":
        setRangeDate({
          dateFrom: dayjs().startOf("day").toISOString(),
          dateTo: dayjs().toISOString(),
          selected: type,
        });

        break;
      case "yesterday":
        setRangeDate({
          dateFrom: dayjs().subtract(1, "day").startOf("day").toISOString(),
          dateTo: dayjs().toISOString(),
          selected: type,
        });

        break;
      case "7days":
        setRangeDate({
          dateFrom: dayjs().subtract(7, "day").startOf("day").toISOString(),
          dateTo: dayjs().toISOString(),
          selected: type,
        });

        break;
      case "30days":
        setRangeDate({
          dateFrom: dayjs().subtract(30, "day").startOf("day").toISOString(),
          dateTo: dayjs().toISOString(),
          selected: type,
        });

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getPaymentHistoryRequest(transactionType);
  }, [transactionType, rangeDate]);

  useEffect(() => {
    if (params) {
      refetch();
    }
  }, [params, refetch]);

  return (
    <>
      <div className="w-full bg-[#fff] border-[#ddd] border-solid border-[1px] rounded font-helvetica">
        <div className="h-[50px] bg-[#2b2b2b] flex justify-center items-center text-[21px] text-white rounded-t">
          Lịch sử giao dịch
        </div>
        <div className="p-[15px]">
          <div className="w-full border-[1px] border-gray-400 rounded-b grid grid-cols-2 gap-2 text-black mb-[20px]">
            <div className="flex flex-wrap items-center">
              <div className="font-bold text-sm">Thời gian</div>
              <Button
                onClick={() => handleChangeRange("now")}
                className={`p-1 text-xs rounded hover:!text-black hover:!border-[#adadad] hover:!bg-[#e6e6e6] ${rangeDate.selected === "now" ? "!text-[#a94442]" : ""}`}>
                Hôm nay
              </Button>
              <Button
                onClick={() => handleChangeRange("yesterday")}
                className={`p-1 text-xs rounded hover:!text-black hover:!border-[#adadad] hover:!bg-[#e6e6e6] ${rangeDate.selected === "yesterday" ? "!text-[#a94442]" : ""}`}>
                Hôm qua
              </Button>
              <Button
                onClick={() => handleChangeRange("7days")}
                className={`p-1 text-xs rounded hover:!text-black hover:!border-[#adadad] hover:!bg-[#e6e6e6] ${rangeDate.selected === "7days" ? "!text-[#a94442]" : ""}`}>
                Trong vòng 7 ngày
              </Button>
              <Button
                onClick={() => handleChangeRange("30days")}
                className={`p-1 text-xs rounded hover:!text-black hover:!border-[#adadad] hover:!bg-[#e6e6e6] ${rangeDate.selected === "30days" ? "!text-[#a94442]" : ""}`}>
                Trong vòng 30 ngày
              </Button>
            </div>
            <div className="flex flex-col items-end">
              {/* <div className="font-bold">Phân loại Số tiền</div> */}
              <div className="flex font-bold">
                <div className="flex flex-col text-sm justify-center mr-2">
                  <p>Số</p>
                  <p>tiền</p>
                </div>
                <div className="text-sm">
                  <div>Phân loại</div>
                  <Select
                    style={{ width: "200px" }}
                    defaultValue={undefined}
                    placeholder="Tất cả"
                    onChange={(value) => setTransactionType(value)}>
                    {options.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {dataListPaymentType &&
            dataListPaymentType.dataExport &&
            dataListPaymentType.dataExport.length > 0 ? (
            <table className="w-full">
              <tbody>
                {dataListPaymentType.dataExport.map(
                  (data: any, index: number) => (
                    <tr
                      key={data.id}
                      className={`${index % 2 === 0 && "bg-[#f9f9f9]"}`}
                      style={{
                        borderTop: "1px solid #ddd",
                      }}>
                      <td className="col-span-3 p-[8px] leading-[34px] text-black">
                        {dayjs(data.createdAt).format("YYYY/MM/DD")} (
                        {getShortDayName(dayjs(data.createdAt))}){" "}
                        {dayjs(data.createdAt).format("HH:mm:ss")}{" "}
                        <span className="text-[#777777]">
                          {dayjs().diff(dayjs(data.createdAt), "day") < 30
                            ? `${dayjs().diff(dayjs(data.createdAt), "day")} ngày trước`
                            : `1 tháng trước`}
                        </span>
                      </td>
                      <td
                        className={`text-right p-[8px] leading-[34px] ${data.amount > 0 ? "text-[#3c763d]" : "text-[#a94442]"}`}>
                        {data.amount}
                      </td>
                      <td className="p-[8px] leading-[34px] text-black">
                        {data.description}
                      </td>
                      <td
                        className="text-center p-[8px] leading-[34px] text-[#337ab7] cursor-pointer"
                        onClick={() => handleOpenDetail(data)}>
                        Chi tiết
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <div className="col-span-2">
              <div className="p-4 mb-4 bg-[#fcf8e3] border-solid border-[1px] border-t-0 border-[#faebcc] text-sm text-[#8a6d3b]">
                Không có bất kì thông tin nào
              </div>
            </div>
          )}
        </div>
      </div>
      <ModalMobileTransactionHistory
        handleChangeRange={handleChangeRange}
        rangeDate={rangeDate}
        setTransactionType={setTransactionType}
        transactionType={transactionType}
        dataListPaymentType={dataListPaymentType}
      />
      <ModalDetailPayment
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detailPayment={dataPayment}
      />
    </>
  );
}
