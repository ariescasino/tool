/* eslint-disable @next/next/no-img-element */
import styles from "./Tutorial.module.css";

export default function Tutorial() {
  return (
    <div
      className={`container w-full pt-16  hidden md:flex items-center justify-center flex-col h-auto pb-5 max-w-full md:max-w-[1420px] text-black`}
    >
      <div className="w-full bg-[url('/images/home-bg-section.png')] bg-contain bg-no-repeat h-[120px] text-center text-[28px] font-black leading-[81px] text-[#337c9d] text-[900] f-noto">
        HƯỚNG DẪN
      </div>

      <div className="w-full grid grid-cols-5 gap-2">
        <div className={styles.boxTutorial}>
          <img className="w-full h-[174px]" src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/tutorial-img1.png" alt="" />
          <div className="w-full">
            <span>Xem chi tiết</span>
          </div>
        </div>

        <div className={styles.boxTutorial}>
          <img className="w-full h-[174px]" src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/tutorial-img2.png" alt="" />
          <div className="w-full">
            <span>Xem chi tiết</span>
          </div>
        </div>
        <div className={styles.boxTutorial}>
          <img className="w-full h-[174px]" src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/tutorial-img3.png" alt="" />
          <div className="w-full">
            <span>Xem chi tiết</span>
          </div>
        </div>
        <div className={styles.boxTutorial}>
          <img className="w-full h-[174px]" src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/tutorial-img4.png" alt="" />
          <div className="w-full">
            <span>Xem chi tiết</span>
          </div>
        </div>
        <div className={styles.boxTutorial}>
          <img className="w-full h-[174px]" src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/tutorial-img5.jpg" alt="" />
          <div className="w-full">
            <span>Xem chi tiết</span>
          </div>
        </div>
      </div>
    </div>
  );
}
