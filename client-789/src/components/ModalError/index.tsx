import { Button, Modal } from "antd";
import styles from "./index.module.css";
import { useState } from "react";
export default function ModalError({
  text,
  openModal,
  setOpenModal,
}: {
  text?: string;
  openModal: boolean;
  setOpenModal: () => void;
}) {
  return (
    <Modal
      open={openModal}
      closeIcon={<></>}
      footer={<></>}
      width={300}
      zIndex={20000}
      onCancel={setOpenModal}
      title={
        <div className="p-[15px]">
          <div className="text-black font-normal text-[16px]">gợi ý</div>
          <div className="text-[#cfcfcf] font-normal text-[12px] leading-[22px]">
            64DFF76FG1268C6522E5F
          </div>
        </div>
      }
      className={styles.customModal}>
      <div className="p-[15px] border border-solid border-[#e5e5e5]">
        {text ? text : "Tài khoản mật khẩu sai"}
      </div>{" "}
      <div className="py-[15px] text-right">
        <Button
          className="bg-[#337ab7] text-white py-[6px] px-[12px] h-auto hover:!bg-[#286090] hover:!text-white hover:!border-[#204d74]"
          onClick={setOpenModal}>
          xác nhận
        </Button>
      </div>
    </Modal>
  );
}
