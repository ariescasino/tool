import styles from "./LiusSuarez.module.css";
export default function LiusSuarez() {
  return (
    <>
      <div className={`hidden md:flex ${styles.bgImg} font-roHe`}>
        <div className="w-[1200px] relative">
          <video
            width="653"
            height="auto"
            controls={true}
            autoPlay={true}
            playsInline={true}
            muted={true}
            className="absolute top-[30px] right-0"
          >
            <source
              ng-src="https://cskh14.com/789BET_Media/20241230122041.mp4"
              type="video/mp4"
              src="https://cskh14.com/789BET_Media/20241230122041.mp4"
            />
          </video>
        </div>

        <br />
      </div>
      <div className="hidden md:flex justify-center font-g text-white">
        <div className={styles["box"]}>
          <ul>
            <li>
              <h4 className="text-[#f49a25] text-[13px] font-medium whitespace-normal my-[10px]">THƯƠNG HIỆU UY TÍN</h4>
              <p className="text-[#d4d4d4] font-normal text-sm">
                Thương hiệu uy tín
                <br /> hàng đầu trên thị
                <br /> trường nạp rút tiền tỉ
                <br /> không cần lo lắng
              </p>
            </li>
            <li>
              <h4 className="text-[#f49a25] text-[13px] font-medium whitespace-normal my-[10px]">SẢN PHẨM ĐA DẠNG</h4>
              <p className="text-[#d4d4d4] font-normal text-sm">

                Trò chơi, Casino,
                <br /> Thể Thao, Bắn Cá,
                <br /> Xổ Số. Nhiều
                <br /> sản phẩm đa dạng
                <br /> bạn lựa chọn.
              </p>
            </li>
            <li>
              <h4 className="text-[#f49a25] text-[13px] font-medium whitespace-normal my-[10px]">
                GIAO DỊCH <br />
                NHANH CHÓNG
              </h4>
              <p className="text-[#d4d4d4] font-normal text-sm">

                Gửi tiền xử lý ngay
                <br /> từ khi nhận được.
                <br /> Rút tiền đơn giản
                <br /> nhanh chóng.
              </p>
            </li>
            <li>
              <h4 className="text-[#f49a25] text-[13px] font-medium whitespace-normal my-[10px]">AN NINH BẢO MẬT</h4>
              <p className="text-[#d4d4d4] font-normal text-sm">

                Phương thức thanh
                <br /> toán đa dạng, đảm
                <br /> bảo an ninh và bảo
                <br /> mật thông tin.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
