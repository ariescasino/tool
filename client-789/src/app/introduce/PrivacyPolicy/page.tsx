import Image from "next/image";
import styles from "@/styles/rule.module.css";
export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col justify-center items-start bottom-10 overflow-y-auto">
      <div className="flex w-full flex-col justify-center items-center">
        <Image width={414} height={67} src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/quyen1.png" alt="" />
        <Image
          width={771}
          height={338}
          className="mt-8"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/quyen2.png"
          alt=""
        />
      </div>

      <div className={styles.rule}>
        <p>
          Chúng tôi tôn trọng quyền riêng tư của khách hàng và bảo mật an toàn
          dữ liệu luôn là ưu tiên hàng đầu của chúng tôi.&nbsp;
          <span className="text-[#fc8f06] font-medium">789BET</span>
          &nbsp;sẽ không bao giờ tiết lộ thông tin cá nhân của khách hàng cho
          bên thứ ba trừ khi nhận được thông tin yêu cầu phán quyết của tòa án.
        </p>
        <p>
          Chúng tôi có quyền cung cấp thông tin cá nhân cần thiết cho nhà cung
          cấp dịch vụ thanh toán cơ bản và các tổ chức tài chính, bảo hiểm thông
          qua trang web để hoàn thành yêu cầu thanh toán.
        </p>
        <p>
          Tất cả thông tin cá nhân do khách hàng cung cấp sẽ được gửi qua cổng
          an toàn (chuẩn mã hóa 128 bit) và được lưu trữ trong môi trường tuyệt
          mật chống lại sự xâm nhập từ bên ngoài. Tất cả dữ liệu trong và ngoài
          đều bị hạn chế nghiêm ngặt và theo dõi chặt chẽ.
        </p>
        <p>
          <span className="text-[#fc8f06] font-medium">789BET</span>
          &nbsp;và các đối tác của chúng tôi sẽ gửi cho khách hàng thông báo về
          khuyến mãi mà khách hàng có thể quan tâm qua thư.&nbsp;
          <span className="text-[#fc8f06] font-medium">789BET</span>
          &nbsp;không tiết lộ bất kỹ thông tin cá nhân cho bất cứ bên thứ ba nào
          vì đó là mục đích của chính sách bảo mật của chúng tôi. Nếu không có
          sự cho phép bằng văn bản rõ ràng của&nbsp;
          <span className="text-[#fc8f06] font-medium">789BET</span>, không ai
          được phân phối, thay đổi, sao chép, tái bản, sử dụng nội dung
          của&nbsp;
          <span className="text-[#fc8f06] font-medium">789BET</span>
          &nbsp;hoặc nhân bản máy chủ không phải là&nbsp;
          <span className="text-[#fc8f06] font-medium">789BET</span>
          .&nbsp;
        </p>
      </div>
    </div>
  );
}
