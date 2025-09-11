import { Button, Modal, ModalProps } from "antd";
import React from "react";

interface Props extends ModalProps {
  open: boolean | undefined;
  onOk: () => void;
  isSuccess: boolean;
  successCode: string;
  successTitle: string;
  failCode: string;
  failTitle: string;
  isMobile?: boolean;
}

export default function ModalNoti({
  open,
  onOk,
  isSuccess,
  successTitle,
  successCode,
  failTitle,
  failCode,
  isMobile = false,
}: Props) {
  return (
    <Modal
      modalRender={(modal: any) => {
        return React.cloneElement(modal, {
          style: {
            ...modal.props.style,
            ...{ padding: 0 },
          },
        });
      }}
      open={open}
      width={isMobile ? 298 : 400}
      className="text-[14px]"
      closeIcon={false}
      footer={null}
      zIndex={1000000000}
    >
      <div className="flex flex-col rounded-md">
        <div className="flex flex-col px-4 pt-2">
          <p className="text-[16px] font-semibold">gợi ý</p>
          {isSuccess ? (
            <p className="text-[#cfcfcf]">{successCode}</p>
          ) : (
            <p className="text-[#cfcfcf]">{failCode}</p>
          )}
        </div>
        <div className="w-full h-[1px] bg-slate-200 mt-4" />
        {isSuccess ? (
          <p className="py-2 px-4">{successTitle}</p>
        ) : (
          <p className="py-2 px-4">{failTitle}</p>
        )}

        <div className="w-full h-[1px] bg-slate-200" />
        <button
          className="w-fit bg-[#337ab7] hover:bg-[#286090] text-white py-2 px-3 rounded-md self-end my-4"
          onClick={onOk}
        >
          xác nhận
        </button>
      </div>
    </Modal>
  );
}
