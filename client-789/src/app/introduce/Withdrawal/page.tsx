import Image from "next/image";
import styles from "@/styles/rule.module.css";

export default function Withdrawal() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex w-full flex-col justify-center items-center">
        <Image width={315} height={67} src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/rut1.png" alt="" />
        <Image
          width={801}
          height={390}
          className="mt-8"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/rut2.png"
          alt=""
        />
      </div>

      <div className={styles.rule}>
        <h3>Hướng dẫn rút tiền</h3>
        <ol>
          <li>
            Khi các thành viên bấm vào nút “Rút tiền”, hệ thống sẽ xuất hiện cửa
            sổ yêu cầu xác nhận xem toàn bộ số dư đã chuyển vào tài khoản chính.
            Sau đó hãy nhấn “Tiếp tục” để tiếp tục thực hiện.
          </li>
          <li>
            Nhập số tiền: Hãy đảm bảo rằng số tiền bạn nhập vào là một số hợp
            lệ.
          </li>
          <li>
            Chọn một ngân hàng và số tài khoản ngân hàng mà bạn muốn nhận tiền,
            đảm bảo tên của người nhận khớp với chủ tài khoản ngân hàng. Sau đó
            nhập mã rút tiền.
          </li>
          <li>
            Nếu bạn có thắc mắc, vui lòng liên hệ với bộ phận chăm sóc khách
            hàng trực tuyến 24/7, chúng tôi sẽ giúp bạn giải đáp vấn đề nhanh
            nhất.
          </li>
          <li>
            Lưu ý: Trong vòng 24h khách hàng chỉ được rút tối đa là 3 lần. Và
            khách hàng sẽ nhận được tiền trong khoảng 10 phút, trong trường hợp
            ngân hàng bảo trì thì thời gian rút tiền sẽ tùy thuộc vào tiến độ
            bảo trì của ngân hàng.
          </li>
        </ol>
        <h3>Các điều cần biết khi rút tiền</h3>
        <ol>
          <li>
            Số tiền rút tối thiểu là 50,000 VND và không giới hạn số tiền tối
            đa. Một ngày chỉ được rút tối đa là 3 lần. Các thành viên VIP có thể
            được hưởng số lần rút tiền cao hơn, mức VIP tương ứng sẽ cao hơn.
            Nếu quý khách không tham gia bất cứ chương trình khuyến mãi nào thì
            có thể rút tiền bất cứ lúc nào.
          </li>
          <li>
            <span className="text-[#fc8f06] font-medium">789BET</span> có quyền
            được xem xét tài khoản thành viên.
          </li>
          <li>
            Các điều khoản miễn trừ được quy định trong các hoạt động ưu đãi
            khác với những điều đã nêu ở trên.
          </li>
          <li>
            Nếu quý khách có thắc mắc, vui lòng liên hệ bộ phận chăm sóc khách
            hàng trực tuyến 24/7 để được giải đáp nhanh nhất.
          </li>
          <li>
            Đảm bảo mọi thông tin về số tài khoản ngân hàng và bất kỳ thông tin
            nào của thành viên không được thay đổi trước lần rút tiền đầu tiên.
            Nếu thông tin thay đổi, tất cả tiền thưởng sẽ bị khấu trừ.
          </li>
          <li>
            Trong bất kỳ trường hợp nào,
            <span className="text-[#fc8f06] font-medium">789BET</span> đều có sở
            hữu quyền quyết định cuối cùng.
          </li>
        </ol>
      </div>
    </div>
  );
}
