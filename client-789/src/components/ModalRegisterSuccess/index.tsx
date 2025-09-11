import { Modal } from "antd";
import styles from "../ModalDangKi/ModalDangKi.module.css";
import { useRouter } from "next/navigation";

export default function ModalRegisterSuccess({
  openModalNoti,
  setOpenModalNoti,
}: {
  openModalNoti: boolean;
  setOpenModalNoti: (value: boolean) => void;
}) {
  const router = useRouter();

  const handleCloseModalNotifi = (type: string) => {
    setOpenModalNoti(false);
    if (type === "deposit") {
      window.location.href = "/account/deposit";
    }
    if (type === "play") {
      // router.push("/games/SlotCasino/RecommendGame");
      window.location.href = "/lobby/game";
    }
  };

  return (
    <Modal
      open={openModalNoti}
      title={<></>}
      closeIcon={<button className={styles.buttonCloseNoti}></button>}
      className={styles.customModalNoti}
      footer={<></>}
      onCancel={() => setOpenModalNoti(false)}>
      <div className={`pt-[18px] ${styles.imgModalNoti}`}>
        <p className={`text-black text-[13px] text-center`}>
          chúc mừng bạn đã đăng ký thành công !!
        </p>
        <section className="text-center">
          <button
            className="text-[#ff6000] bg-white rounded-s-[15px]"
            onClick={() => handleCloseModalNotifi("play")}>
            bắt đầu trò chơi
          </button>
          <button
            className="text-white bg-[#ff6000] rounded-e-[15px]"
            onClick={() => handleCloseModalNotifi("deposit")}>
            lập tức nạp tiền
          </button>
        </section>
      </div>
    </Modal>
  );
}

function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
