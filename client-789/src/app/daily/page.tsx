"use client";
import React from "react";
import styles from "@/styles/daily.module.css";
import "@/styles/daily.css";

export default function DaiLy() {
  return (
    <div className="h-max pt-[28px] rounded-[30px] bg-[#ffffff] pb-[28px] ">
      <div className="w-[1168px] mx-4 mb-[4px] ">
        <p className="  text-black  leading-10 font-medium">
          Kính gửi: Toàn thể Quý Đại Lý
        </p>
        <p className="  text-black  leading-10 font-medium">
          Đầu tiên, 789BET xin gửi lời cảm ơn chân thành tới những khách hàng đã
          dành sự tín nhiệm và ủng hộ với dịch vụ của 789BET trong thời gian
          qua.
        </p>
        <p className="  text-black  leading-10 font-medium">
          Chào đón sự kiện Luis Suárez trở thành Đại Sứ Độc Quyền chính thức tại
          789BET. 789BET trân trọng kính mời Quý Đại Lý hợp tác tham gia vào hệ
          thống kinh doanh cùng phát triển với chế độ ưu đãi Hoa Hồng Siêu Khủng
          lên tới 60% bắt đầu từ 01/07/2023.
        </p>
        <p className="  text-black  leading-10 font-medium">
          Dù Bạn là Ai đều được chào đón trở thành đối tác của Chúng Tôi, với
          phương châm cùng hợp tác phát triển bền vững, Chúng Tôi cam kết hợp
          tác lâu dài và hỗ trợ tối đa tới các Đại Lý trong suốt quá trình hoạt
          động.
        </p>
        <p className=" text-[24px] text-[#FF5C00] leading-10 font-medium">
          I. HOA HỒNG ĐẠI LÝ
        </p>
        <table className="w-full table-fixed border border-slate-300 text-lg center ">
          <thead>
            <tr className="bg-white h-[64px]  border-black-300 ">
              <th className="border border-black text-[#FF5C00] font-medium">
                Lợi nhuận ròng
              </th>
              <th className="border border-black text-[#FF5C00] font-medium">
                Hội viên hợp lệ
              </th>
              <th className="border border-black text-[#FF5C00] font-medium">
                Tỷ lệ hoa hồng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-center h-[52.15px] ">
              <td className="border border-black" rowSpan={2}>
                ≥ 1,000 VND
              </td>
              <td className="border border-black">3 +</td>
              <td className="border border-black">35%</td>
            </tr>
            <tr className="bg-white text-center h-[52.15px]  border-black-300">
              <td className="border border-black"> 5 +</td>
              <td className="border border-black">45%</td>
            </tr>
            <tr className="bg-white text-center h-[52.15px]  border-black-300">
              <td className="border border-black"> ≥ 100,000,000 VND</td>
              <td className="border border-black">10 +</td>
              <td className="border border-black">50%</td>
            </tr>
            <tr className="bg-white text-center h-[52.15px]  border-black-300">
              <td className="border border-black"> ≥ 1,000,000,000 VND</td>
              <td className="border border-black">20 +</td>
              <td className="border border-black">55%</td>
            </tr>
            <tr className="bg-white text-center h-[52.15px]  border-black-300">
              <td className="border border-black">≥ 5,000,000,000 VND</td>
              <td className="border border-black">30 +</td>
              <td className="border border-black">60%</td>
            </tr>
          </tbody>
        </table>
        <p className="  text-black  leading-10 font-medium">
          * Lợi nhuận ròng = Tổng thắng thua - Tổng hoàn trả - Tổng khuyến mãi -
          Chi phí nền tảng.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Chi phí nền tảng: Tổng thắng thua x 10% (nếu Đại Lý trong tháng
          không có lợi nhuận âm thì sẽ không phải tính chi phí nền tảng).
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Hoa hồng = Lợi nhuận ròng x Tỷ lệ hoa hồng.
        </p>
        <p className="  text-black  leading-10 font-medium">
          <span className="text-[#FF3B1A] font-medium">* Ví dụ :</span>
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Đại Lý lợi nhuận ròng là 1 tỷ, có 3 hội viên hợp lệ, tỷ lệ hoa hồng
          là 35%
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Đại Lý lợi nhuận ròng là 1 tỷ, có 20 hội viên hợp lệ, tỷ lệ hoa hồng
          là 55%
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Số hội viên hợp lệ tối thiểu mà Đại Lý cần đạt để nhận hoa hồng là 3
          hội viên.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Hội viên hợp lệ : hội viên trong tháng nạp tiền ≥ 1,000 điểm, cược
          hợp lệ ≥ 3,000 điểm (dựa vào đánh gía tổng hợp Ip, tính hoạt động và
          tính nạp lại phê duyệt).
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Nếu trong tháng Đại Lý không đạt được 2 điều kiện trên thì sẽ không
          được tính hoa hồng tháng đó.
        </p>
        <div
          className="wp-notification"
          style={{
            background: `linear-gradient(0deg, rgb(244, 154, 37) 10.31%, rgb(247, 186, 34) 71.66%), linear-gradient(rgb(255, 128, 0) -0.74%, rgba(255, 128, 0, 0) 111.57%)`,
            padding: "20px",
            borderRadius: "20px",
            marginTop: "10px",
            marginBottom: "10px",
          }}>
          <p className="text-black leading-10 font-medium text-[30px]">
            <span className="text-[#0d4287]" style={{ fontWeight: 700 }}>
              * Chú ý:
            </span>
            <span className="text-[#000]">
              {" "}
              Đại Lý Google SEO / Chạy quảng cáo Google ADS từ khoá nội bộ của
              công ty mức hoa hồng cố định là 25%. Chế độ này Từ ngày 01/02/2024
              hoa hồng sẽ được điều chỉnh cố định
              <span className="text-[#0d4287]" style={{ fontWeight: 700 }}>
                {" "}
                vĩnh viễn nhận mức hoa hồng 15%.{" "}
              </span>
              ( Từ khóa nội bộ ví dụ link mới 789BET, link 789BET , Đăng nhập
              789BET... Ngoài ra nếu phát hiện seo các từ khóa liên quan các web
              trong liên minh OKVIP cũng áp dụng mức hoa hồng 15% )
            </span>
            .
          </p>
        </div>
        <p className="  text-black  leading-10 font-medium">
          * Chế độ này không áp dụng với sản phẩm{" "}
          <span className="text-[#FF3B1A]">Xổ Số</span>.
        </p>
        <p className=" text-[24px] text-[#FF5C00] mt-1.5">
          II. TIỀN THƯỞNG PHÁT TRIỂN HỘI VIÊN MỚI
        </p>
        <p className="  text-black  leading-10 font-medium">
          Tất cả Đại Lý trong tháng chỉ cần có một hội viên mới hợp lệ sẽ được
          nhận thưởng tiền thưởng phát triển hội viên mới, mỗi hội viên mới hợp
          lệ thưởng 200,000 VND, không giới hạn số tiền.
        </p>
        <table className="w-full table-fixed border border-slate-300 text-lg center">
          <thead>
            <tr className="bg-white h-[64px]  border-black-300 ">
              <th className="border border-black text-[#FF5C00] font-medium">
                Đối tượng
              </th>
              <th className="border border-black text-[#FF5C00] font-medium">
                Hội viên mới hợp lệ
              </th>
              <th className="border border-black text-[#FF5C00] font-medium">
                Tiền thưởng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-center h-[52.15px] ">
              <td className="border border-black">Tất cả Đại Lý hợp tác</td>
              <td className="border border-black">1 +</td>
              <td className="border border-black">200,000 VND /01 hội viên</td>
            </tr>
          </tbody>
        </table>
        <p className="  text-black  leading-10 font-medium">
          * Hội viên mới hợp lệ : hội viên mới nạp đầu trong tháng, có tích luỹ
          nạp tiền ≥ 1,000 điểm, cược hợp lệ ≥ 3,000 điểm (dựa vào đánh gía tổng
          hợp Ip, tính hoạt động và tính nạp lại phê duyệt).
        </p>
        <p className="  text-black  leading-10 font-medium">
          <span className="text-[#FF3B1A]">*Chú ý:</span> Đại Lý Google SEO/ ADS
          chạy từ khoá nội bộ của công ty không được tham gia chương trình tiền
          thưởng hội viên mới.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Chế độ này không áp dụng với sản phẩm{" "}
          <span className="text-[#FF3B1A]">Xổ Số</span>.
        </p>
        <p className=" text-[24px] text-[#FF5C00]">
          III. CÁCH THỨC PHÁT HOA HỒNG VÀ TIỀN THƯỞNG
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Công thức tính Hoa Hồng: Lợi nhuận ròng x Tỷ lệ hoa hồng.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Hoa hồng và tiền thưởng hội viên mới sẽ được phát trước ngày 10 mỗi
          tháng.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Toàn bộ tiền hoa hồng và tiền thưởng sẽ được phát trực tiếp vào Ví
          USDT hoặc Ngân hàng mới nhất do đại lý cung cấp.
        </p>
        <p className="  text-black  leading-10 font-medium">
          Lưu ý:
          <br />- Đặc biệt khuyến khích đại lý sử dụng phương thức thanh toán
          bằng USDT.
          <br />- Đối với đại lý sử dụng phương thức thanh toán bằng USDT, vui
          lòng liên hệ Chăm Sóc Đại Lý của chúng tôi để được hỗ trợ thêm thông
          tin ví, chỉ hỗ trợ thêm địa chỉ ví duy nhất 1 lần.
          <br />
        </p>
        <p className="  text-black  leading-10 font-medium">
          * 789BET có quyền chấm dứt chương trình này nếu trong quá trình hợp
          tác Đại Lý vi phạm quy định hay gian lận làm ảnh hưởng đến tính công
          bằng cho những Đại Lý chân chính khác.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Nếu Đại Lý có lợi nhuận dương thì sẽ trừ vào lợi nhuận các tháng sau
          cho tới khi hết lợi nhuận dương.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Chương trình này không áp dụng cho sản phẩm Xổ Số. Thành viên lạm
          dụng, gian lận, nhiều tài khoản, chạy chỉ tiêu, làm giả số liệu sẽ
          không được tính là hợp lệ.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * 789BET có quyền đơn phương chấm dứt hợp tác nếu phát hiện Đại Lý sử
          dụng hành vi lạm dụng để trục lợi hoa hồng không chính đáng.
        </p>
        <p className="  text-black  leading-10 font-medium">
          * Nếu có phát sinh vấn đề không đồng nhất trong cách hiểu về chương
          trình này, 789BET giữ nguyên quyền bảo lưu quyết định trong bất kỳ
          trường hợp nào.
        </p>
        <p className="  text-black  leading-10 font-medium">
          <span className="text-[#FF3B1A] font-medium">
            * Yêu cầu đối với Đại Lý:
          </span>
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Có lịch sử đăng nhập ít nhất 5 ngày.
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Tài khoản game của Đại Lý không nằm dưới link Đại Lý của chính mình.
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Đại Lý không hoạt động trong vòng 2 tháng kể từ thời điểm đăng ký,
          789BET có quyền chấm dứt hợp tác với tài khoản Đại Lý đó. Nếu muốn
          tiếp tục tham gia và hợp tác, yêu cầu tạo tài khoản đăng ký Đại Lý
          mới.
        </p>
        <p className="  text-black  leading-10 font-medium">
          - Mức hoa hồng tối thiểu là bao nhiêu?
          <br />
          Mức hoa hồng tối thiểu để 789BET thanh toán là 1,000,000 VND .Trường
          hợp tiền hoa hồng của Quý khách dưới 1,000,000 VND số tiền này sẽ
          không được bảo lưu và cộng dồn vào tiền hoa hồng tháng kế tiếp.
        </p>
        <p className=" text-3xl text-[#FF5C00] text-[20px]">IV. THƯ NGỎ</p>
        <p className="  text-black  leading-10 font-medium">
          - Chương trình Đại Lý 789BET là một hệ thống thúc đẩy thị trường
          chuyên nghiệp được sử dụng rộng rãi bởi cá nhân cũng như công ty, với
          mục đích quảng bá công ty cá cược hàng đầu đến với khách hàng.
        </p>
        <p className="   text-black  leading-10 font-medium">
          - Chúng Tôi trân trọng gửi đến Quý Đại Lý thư ngỏ này với mong muốn
          Quý khách hàng có thêm sự lựa chọn và Chúng Tôi có thêm khách hàng
          thân thiết mới. 789BET tin tưởng vào sự thành công tốt đẹp trong quá
          trình hợp tác giữa Công ty và Quý đối tác. Mọi hình thức hợp tác, vui
          lòng liên hệ trực tiếp với Chúng Tôi qua telegram:&nbsp;
          <a
            target="_blank"
            className="text-[#FF5C00]"
            href="https://t.me/CSKHBET789_robot">
            @CSKHBET789_robot
          </a>
          .
        </p>
      </div>
    </div>
  );
}
