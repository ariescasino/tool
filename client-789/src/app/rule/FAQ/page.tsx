import Image from "next/image";

import styles from "@/styles/rule.module.css";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex w-full flex-col justify-center items-center">
        <Image width={411} height={67} src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/hoi1.png" alt="" />
        <Image
          width={696}
          height={305}
          className="mt-8"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/hoi2.png"
          alt=""
        />
      </div>

      <div className={styles.rule}>
        <h3>1.&nbsp;Điểm mạnh của&nbsp;789BET&nbsp;là gì?</h3>
        <p>
          =&gt; Xin chào quý khách, vui lòng tham khảo trang chủ
          “Về&nbsp;789BET”
        </p>
        <h3>2. Công ty&nbsp;789BET&nbsp;có an toàn để tham gia chơi không?</h3>
        <p>
          =&gt; Xin chào, hệ thống công ty chúng tôi là hoàn toàn an toàn. Chúng
          tôi sẽ không bao giờ tiết lộ thông tin cá nhân của quý khách hàng cho
          bất kỳ doanh nghiệp nào. Ngoài ra, đối với các giao dịch, chúng tôi
          cũng yêu cầu với ngân hàng,&nbsp;đại lý chuyển khoản, thẻ tín dụng và
          các đối tác công ty luôn bí mật thông tin của khách hàng. Tất cả các
          khoản tiền gửi sẽ được coi là tài khoản thương mại và sẽ không thực
          hiện chuyển cho người khác.
        </p>
        <h3>3. Cá cược trực tuyến có hợp pháp hay không?</h3>
        <p>
          =&gt; Xin chào, có một số quốc gia hoặc khu vực mà pháp luật địa
          phương nghiêm cấm cờ bạc. Trong trường hợp này, hãy đảm bảo tuân thủ
          pháp luật địa phương. Nếu quý khách có bất cứ yêu cầu nào, vui lòng
          tìm cố vấn pháp luật tại địa phương để hiểu rỏ hơn. Công ty không thể
          và không chịu bất cứ trách nhiệm pháp lý nào phát sinh từ bất cứ quý
          khách hàng nào vi phạm pháp luật địa phương.
        </p>
        <h3>
          4. Có bất cứ quy định nào về tuổi tác khi tham gia chơi
          tại&nbsp;789BET?
        </h3>
        <p>=&gt; Vâng, độ tuổi cá cược hợp pháp phải từ 18 tuổi trở lên.</p>
        <h3>5. Có bắt buộc phải điền tên thật trong tài khoản không?</h3>
        <p>
          =&gt; Xin chào quý khách, vì lý do an ninh nên Bộ Tài Chính sẽ xem xét
          tên đã đăng ký trong tài khoản ngân hàng và tên của chủ thẻ ngân hàng
          phải giống với tên đăng ký. Vì vậy, xin quý khách vui lòng điền tên
          tài khoản có cùng tên với các lệnh rút tiền tại&nbsp;789BET.
        </p>
        <h3>6. Tôi phải làm thế nào nếu quên mật khẩu truy cập?</h3>
        <p>
          =&gt; Xin vui lòng bấm vào đăng nhập thành viên - quên mật khẩu, điền
          vào các thông tin ban đầu của email, mật khẩu mới và xác nhận mật
          khẩu. Nhấn OK, và vào email, nhấp vào link để đặt lại mật khẩu liên
          kết. Sau đó, quý khách có thể sử dụng mật khẩu mới để đăng nhập.
        </p>
      </div>
    </div>
  );
}
