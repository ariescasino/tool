import { Modal } from 'antd';
import styles from './ModalDesktopWelcome.module.css';
import { useWindowSize } from 'react-use';
import { dataLink } from './linkData';

export default function ModalDesktopWelcome({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
}) {
  const { width } = useWindowSize();
  return (
    <Modal
      className='modalWelcome !mt-[5vh] top-0'
      open={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={800}
      footer={null}
      styles={{
        body: {
          borderRadius: 8,
        },
        content: {
          minHeight: '50vh',
        },
      }}
    >
      <div className={styles.header}>Tin tức mới nhất</div>
      <div className={styles.content}>
        <ul className={styles.listContent}>
          <>
            <li>
            HÃY CẨN THẬN CÁC ĐƯỜNG LINK GIẢ MẠO ĐÁNH CẮP THÔNG TIN DƯỚI ĐÂY :
            </li>
            {dataLink.map((item: any, index: number) => (
              <li key={index}>
                {item?.url}
                <span>
                  {width < 768
                    ? 'LINK GIẢ MẠO'
                    : '( GIẢ MẠO ĐÁNH CẮP THÔNG TIN)'}
                </span>
              </li>
            ))}
          </>
        </ul>
      </div>
      <div className={styles.footer}>
        <button
          onClick={() => setVisible(false)}
          className={styles.buttonClose}
        >
          Đóng
        </button>
      </div>
    </Modal>
  );
}
