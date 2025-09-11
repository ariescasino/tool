import Image from "next/image";

import styles from "@/styles/rule.module.css";

export default function Deposit() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex w-full flex-col justify-center items-center">
        <Image width={320} height={67} src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/nap1.png" alt="" />
        <Image
          width={823}
          height={382}
          className="mt-8"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/nap2.png"
          alt=""
        />
      </div>

      <div className={styles.rule}>
        <p>
          Nhằm giúp quý khách gửi tiền thuận lợi và đơn giản hơn, chúng tôi luôn
          luôn điều chỉnh và tối ưu hóa quy trình vận hành và cung cấp đa dạng
          các hình thức gửi tiền: Ngân hàng, Mã QR, Momo pay, Zalo pay, Thẻ cào,
          Usdt,… Chúng tôi sẽ tiếp tục nghiên cứu để đáp ứng nhu cầu của quý
          khách. Dưới đây là một số cách để quý khách có thể chuyển tiền vào tài
          khoản của mình.
        </p>
        <h3>1. HÌNH THỨC “CHUYỂN KHOẢN NGÂN HÀNG”</h3>
        <ol>
          <li>
            Quý Khách vào mục “Chuyển khoản ngân hàng”, chọn ATTPAY (SIÊU NHANH
            - OKVIP). Điền số điểm muốn nạp (1 điểm = 1,000 VND), Giới hạn nạp
            tối thiểu từ 10 ~ 1,000,000 điểm. Sau đó, chọn Thanh toán ngay bây
            giờ.
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới bao gồm tất cả các ngân hàng có sẵn,
            quý khách vui lòng lựa chọn và nhấn vào ngân hàng muốn chuyển tiền
            đến.
          </li>
          <li>
            Tại đây sẽ hiển thị thông tin bao gồm số tài khoản ngân hàng, họ tên
            người thụ hưởng, số tiền cần chuyển và nội dung chuyển khoản. Quý
            khách vui lòng sao chép và chuyển khoản chính xác tới ngân hàng của
            hệ thống.
          </li>
          <p>
            Lưu ý: Nhập đúng nội dung chuyển khoản để giao dịch được cập nhật
            nhanh nhất.
          </p>
          <li>
            Sau khi chuyển khoản thành công, quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>2. HÌNH THỨC “QUÉT MÃ NGÂN HÀNG”</h3>
        <ol>
          <li>
            Quý Khách vào mục “Quét mã ngân hàng”, chọn ATTPAY (SIÊU NHANH -
            OKVIP). Điền số điểm muốn nạp (1 điểm = 1,000 VND), Giới hạn nạp tối
            thiểu từ 10 ~ 1,000,000 điểm. Sau đó, chọn Thanh toán ngay bây giờ.
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới bao gồm tất cả các ngân hàng có sẵn,
            quý khách vui lòng lựa chọn và nhấn vào ngân hàng muốn chuyển tiền
            đến.
          </li>
          <li>
            Sau khi lựa chọn, hệ thống nạp sẽ hiển thị mã QR và nội dung nạp cần
            điền, quý khách chụp lại mã QR và lưu lại. Khi đăng nhập banking của
            mình, quý khách chọn quét mã QR và tải hình ảnh mã QR đã lưu.
          </li>
          <li>
            Sau khi chuyển khoản thành công, quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>3. HÌNH THỨC “MOMO PAY”</h3>
        <ol>
          <li>
            Quý Khách vào mục nạp “MOMO PAY”, lựa chọn mục nạp mà bạn muốn
            chuyển tiền đến. Điền số điểm muốn nạp (1 điểm = 1,000 VND), số tiền
            tối thiểu tùy thuộc vào mục nạp bạn lựa chọn. Sau đó, chọn Thanh
            toán ngay bây giờ.
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới gồm mã QR và số MOMO người nhận kèm
            theo dãy số NỘI DUNG quý khách chụp lại mã QR và lưu vào thiết bị.
          </li>
          <li>
            Đăng nhập ví điện tử MOMO cá nhân chọn Quét mã trong MOMO và tải
            hình ảnh QR đã lưu (hoặc có thể copy số MOMO người nhận để chuyển
            tiền). Điền đúng mã số nội dung đã hiển thị trên mã QR.
          </li>
          <li>
            Sau khi chuyển khoản thành công, quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>4. HÌNH THỨC “THẺ CÀO”</h3>
        <ol>
          <li>
            Quý khách vào mục nạp “THẺ CÀO”, lựa chọn mục nạp mà bạn muốn chuyển
            tiền đến. Điền số điểm muốn nạp (1 điểm = 1,000 VND), số tiền tối
            thiểu tùy thuộc vào mục nạp bạn lựa chọn. Sau đó, chọn Thanh toán
            ngay bây giờ
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới, quý khách làm theo hướng dẫn, điền
            thông tin thẻ cào, bao gồm:
            <ul className="list-unstyled">
              <li>+ Lựa chọn mệnh giá thẻ cào</li> <li>+ Nhập dãy số mã thẻ</li>
              <li>+ Nhập dãy số Seri thẻ</li> <li>+ Lựa chọn nhà mạng</li>
              <li>Sau khi kiểm tra chính xác thông tin, bấm “Gửi thông tin”</li>
            </ul>
          </li>
          <li>
            Quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>5. HÌNH THỨC “ZALO PAY”</h3>
        <ol>
          <li>
            Quý Khách vào mục nạp “ZALO PAY”, lựa chọn mục nạp mà bạn muốn
            chuyển tiền đến. Điền số điểm muốn nạp (1 điểm = 1,000 VND), số tiền
            tối thiểu tùy thuộc vào mục nạp bạn lựa chọn. Sau đó, chọn Thanh
            toán ngay bây giờ
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới gồm mã QR và tên người nhận, số điện
            thoại kèm theo dãy số NỘI DUNG, quý khách chụp lại mã QR và lưu vào
            thiết bị.
          </li>
          <li>
            Đăng nhập ví điện tử ZALO PAY cá nhân chọn Quét mã trong ZALO PAY và
            tải hình ảnh QR đã lưu. Điền đúng mã số nội dung đã hiển thị trên mã
            QR.
          </li>
          <li>
            Sau khi chuyển khoản thành công, quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>6. HÌNH THỨC “VT PAY”</h3>
        <ol>
          <li>
            Quý Khách vào mục nạp “VT PAY”, lựa chọn mục nạp mà bạn muốn chuyển
            tiền đến. Điền số điểm muốn nạp (1 điểm = 1,000 VND), số tiền tối
            thiểu tùy thuộc vào mục nạp bạn lựa chọn. Sau đó, chọn Thanh toán
            ngay bây giờ
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới gồm mã QR và tên người nhận, số điện
            thoại kèm theo dãy số NỘI DUNG, quý khách chụp lại mã QR và lưu vào
            thiết bị.
          </li>
          <li>
            Đăng nhập VIETTEL MONEY cá nhân chọn Quét mã trong VIETTEL MONEY và
            tải hình ảnh QR đã lưu. Điền đúng mã số nội dung đã hiển thị trên mã
            QR.
          </li>
          <li>
            Sau khi chuyển khoản thành công, quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
        <h3>7. HÌNH THỨC “USDT”</h3>
        <ol>
          <li>
            Quý Khách vào mục nạp “USDT”, cổng “ RC USDT - OKVIP”
            <br /> Chọn hình thức chuyển tiền: USDT - TRC20 hoặc USDT - ERC20
            <br /> Nhập điền số tiền bạn muốn nạp (1 điểm = 1,000 VND), sau đó
            chọn thanh toán ngay bây giờ.
          </li>
          <li>
            Hệ thống sẽ hiển thị cửa sổ mới: Bao gồm số tiền USDT cần chuyển (đã
            được quy đổi theo giá thị trường hiện tại), mã QR và dãy mã số Ví
            điện tử USDT. Quý khách chụp ảnh mã QR hoặc sao chép mã Ví.
          </li>
          <li>
            Sau khi hoàn tất chuyển khoản, vui lòng chọn Thanh toán nhanh (điền
            vào ID giao dịch), nhập mã ID giao dịch và chọn Gửi đi.
          </li>
          <li>
            Quý khách quay lại trang chủ
            <span
              ng-class="$ctrl.styles.highlight"
              className="SFnFHLCAOsJYnCMwWZpnS"
            >
              789BET
            </span>
            và làm mới số dư. Số tiền sẽ được cập nhật sau vài giây khi hệ thống
            đã nhận được số tiền mà quý khách đã chuyển khoản.
          </li>
        </ol>
      </div>
    </div>
  );
}
