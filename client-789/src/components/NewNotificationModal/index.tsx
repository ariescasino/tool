/* eslint-disable @next/next/no-img-element */
import { Checkbox, Modal, Tooltip } from 'antd';
import styles from './NewNotificationModal.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { subText } from '@/utils/check';
import dayjs from 'dayjs';
import CloseIcon from '../IconSvg/CloseIcon';
import ArrowRight from '../IconSvg/ArrowRight';

const tab = [
  {
    id: 10,
    title: 'CẢNH BÁO LINK GIẢ MẠO',
    image: '/images/popups/1.jpg',
    desc: `<div>
      <p>🔔 Hiện tại, xuất hiện nhiều trang web giả mạo giao diện<strong>789BET</strong>, nhằm lợi dụng sự uy tín và tình trạng đường link 789BET bị nhà mạng chặn để chạy quảng cáo thu thập thông tin tài khoản, mật khẩu sau đó đăng nhập và thao tác đặt cược hết tiền của hội viên, làm ảnh hưởng uy tín 789BET. 789BET khuyến nghị quý Hội viên hãy tải APP hoặc truy cập đường link, <a href="789betz.win" target="_blank" rel="noopener noreferrer">789betz.win</a> để tránh bị lộ thông tin.Ngoài ra, khuyến cáo Hội viên hãy thường xuyên thay đổi mật khẩu đăng nhập để tăng độ bảo mật cho tài khoản của mình.</p >
  <p>✅ Nhân viên chính thức của 789BET sẽ không yêu cầu thành viên đăng ký lại tài khoản ở bất kì trang web lạ nào và với bất kì lý do gì.</p>
  <p>✅ Quý Hội viên vui lòng liên hệ qua Email:  để nhận được link truy cập mới nhất. Khuyến nghị quý hội viên tải APP của 789BET về sử dụng. Ngoài ra, nếu gặp vấn đề không thể liên hệ tới kênh hỗ trợ 24/7, quý khách hàng hãy liên hệ qua các kênh như <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a> để được hỗ trợ.</p>
  <p style="text-align: center; ">💝 Cho Đi Chữ Tín - Nhận Lại Chữ Tin 💝</p>
  <p style="text-align: center; ">🌸 CASINO, TÔI CHỈ CHỌN 789BET 🌸</p>
</div >
  `,
  },
  {
    id: 111,
    title: 'THÔNG BÁO QUAN TRỌNG',
    image: '/images/popups/2.jpg',
    desc: '',
  },
  {
    id: 112,
    title: 'ĐÓN LỄ NHẬN QUÀ',
    image: '/images/popups/3.jpg',
    desc: '',
  },
  {
    id: 1,
    title: 'NẠP CÁC NGÀY 2 - 4 - 6  TẶNG 3 - 5 - 7 %',
    image: '/images/popups/4.jpg',
    desc: '',
  },
  {
    id: 113,
    title: 'LINK ĐĂNG NHẬP',
    image: '/images/popups/5.jpg',
    desc: '',
  },
  {
    id: 3,
    title: 'TẶNG CODE 1,888 ĐIỂM',
    image: '/images/popups/6.jpg',
    desc: '',
  },
  {
    id: 1214,
    title: 'THƯỞNG NẠP ĐẦU 100%',
    image: '/images/popups/7.jpg',
    desc: '',
  },

];
export default function NewNotificationModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
}) {
  const [activeItem, setActiveItem] = useState(tab[0]);

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCloseModal = () => {
    const showLocal = {
      showToday: checkboxValue ? false : true,
      time: dayjs().format('DD/MM/YYYY'),
    };
    localStorage.setItem('isShowNews', JSON.stringify(showLocal));
    setVisible(false);
  };

  return (
    <Modal
      className={'NewNotificationModal h-[625px]'}
      open={visible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      width={1000}
      footer={null}
      closeIcon={<CloseIcon />}
    >
      <div className='relative font-roHe'>
        <div className={styles.header}>CASINO, TÔI CHỈ CHỌN 789BET</div>

        <Checkbox
          value={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
          className='absolute top-[-24px] right-0 text-white font-bold'
        >
          Không hiển thị nữa
        </Checkbox>

        <div className='w-full bg-white flex h-[560px]'>
          <div className={styles.listNews}>
            {tab.map((item) => (
              <div
                className={`${styles.itemNews} ${item.id === activeItem.id && styles.active}`}
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
              >
                <div className='flex gap-1 items-center'>
                  <ArrowRight itemId={item.id} activeItemId={activeItem.id} />

                  <Tooltip
                    color='#ffffff'
                    overlayInnerStyle={{
                      color: '#000000',
                      borderRadius: 0,
                      fontSize: 13,
                      border: '1px solid #000000',
                    }}
                    title={item.title}
                    getPopupContainer={(trigger) =>
                      trigger.parentElement || document.body
                    }
                    arrow={false}
                  >
                    <span
                      className={`text-[14px] leading-[49px] ${item.id === activeItem.id ? 'text-white' : 'text-[#ff9000]'}`}
                    >
                      {subText(item.title, 20)}
                    </span>
                  </Tooltip>
                </div>

                <FontAwesomeIcon fontSize={14} icon={faChevronRight} />
              </div>
            ))}
          </div>

          <div className={styles.activeBox}>
            <img className='w-full' src={activeItem.image} alt='' />

            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: activeItem.desc }}
            >
              {/* {activeItem.desc} */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
