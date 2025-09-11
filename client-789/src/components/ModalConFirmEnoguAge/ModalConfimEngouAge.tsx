import React from "react";
import { Modal, Button, Divider } from "antd";
import { ruleAge } from "@/constant/enum";
import { useWindowSize } from "react-use";

interface IModalProps {
    openEnoughAge: boolean;
    setOpenEnoughAge: (value: boolean) => void; // Hàm để thay đổi trạng thái modal
    title?: string;
    nameBtn?: string;
}

const ModalConfirmEnoughAge: React.FC<IModalProps> = ({
    openEnoughAge,
    setOpenEnoughAge,
    title,
    nameBtn,
}) => {
    const { width } = useWindowSize()
    return (
        <Modal open={openEnoughAge} footer={null} closeIcon={null} width={width < 768 ? 400 : 600}>
            <div className="text-[#333333]">
                <p className="md:text-lg text-base max-md:pb-2 ">{title}</p>
                <Divider className="!my-1" />
                <div className="md:text-sm  max-md:h-[300px] max-md:overflow-y-scroll">
                    {ruleAge.map((item) => (
                        <p key={item.id} className="py-1">{item.content}</p>
                    ))}
                </div>
                <Divider className="!mt-1 !mb-2" />
                <div className="flex justify-center md:justify-end ">
                    <Button type="default" className="hover:!bg-[#e6e6e6] hover:!text-[#333]  hover:!border hover:!border-transparent" onClick={() => setOpenEnoughAge(false)}>
                        {nameBtn}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalConfirmEnoughAge;
