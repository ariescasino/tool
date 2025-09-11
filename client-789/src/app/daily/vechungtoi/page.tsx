/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "@/styles/daily.module.css";
import "@/styles/daily.css";
import { Collapse } from "antd";

export default function VeChungToi() {
  return (
    <>
      <Collapse bordered={false}>
        <Collapse.Panel
          showArrow={false}
          header={
            <>
              <div
                style={{
                  display: "flex",
                  height: "90px",
                  background: "rgb(54, 54, 54)",
                  borderRadius: "50px",
                  maxWidth: "1200px",
                  width: "100%",
                  padding: "unset",
                  position: "relative", // Thêm thuộc tính này để sử dụng cho phần tử con có position: absolute
                }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "15px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/icon_tttk.png" alt="icon" />
                </div>
                <div>
                  <p className="title_tttk">CHƯƠNG TRÌNH ĐẠI LÝ</p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    marginTop: "20px", // Sử dụng marginTop theo yêu cầu của bạn
                    borderRadius: "50px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/plus-circle.png" alt="plus icon" />
                </div>
              </div>
            </>
          }
          key="1">
          <p className="text_ctdl" style={{ marginTop: "20px" }}>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              {" "}
              Chương trình Đại Lý của 789BET là gì?
            </span>
            <br />
            <p>
              Là Quý khách trở thành đối tác của 789BET bằng cách giới thiệu,
              thu hút thành viên đăng ký tài khoản và chơi trên 789BET dưới mã
              Đại Lý của Quý khách. Quý khách sẽ được nhận tiền hoa hồng dựa
              trên tổng tiền thua cược hàng tháng của các thành viên dưới mã Đại
              Lý của Quý khách
            </p>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Cách đăng ký trở thành Đại Lý của 789BET ? Tôi có cần vốn hay lệ
              phí không?
            </span>
            <p>
              Trở thành Đại Lý của 789BET là hoàn toàn miễn phí. Quý khách chỉ
              cần vào phần Đăng ký &gt;&gt; Điền đầy đủ và chính xác các thông
              tin theo yêu cầu. Sau đấy liên hệ qua kênh Telegram để được tư vấn
              và hỗ trợ chi tiết và kích hoạt tài khoản.
            </p>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              {" "}
              Nếu không có trang web riêng, tôi có thể tham gia không?
            </span>
            <p>
              789BET khuyến khích Đại Lý nên có website riêng để phục vụ công
              việc tìm kiếm thành viên tuyến dưới một cách hiệu quả. Tuy nhiên
              Quý khách vẫn hoàn toàn có thể trở thành Đại Lý của 789BET mà
              không cần có website riêng. 789BET không giới hạn cách thức tìm
              kiếm thành viên của Đại Lý. Đại Lý hoạt động càng hiệu quả thì
              tiền hoa hồng nhận về càng cao.
            </p>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              {" "}
              Tại sao đơn đăng ký Đại Lý của tôi bị từ chối?
            </span>{" "}
            <br />
            Sau khi Quý khách đăng ký xong, trong vòng 24h ngày, bạn cần liên hệ
            tới chuyên viên Đại Lý để được hỗ trợ kích hoạt. Đơn đăng ký của Quý
            khách bị từ chối có thể là do Quý khách đăng ký sai họ tên, sai
            email, sai số điện thoại hoặc không liên hệ.
          </p>
        </Collapse.Panel>
      </Collapse>{" "}
      <br />
      <Collapse bordered={false}>
        <Collapse.Panel
          showArrow={false}
          header={
            <>
              <div
                style={{
                  display: "flex",
                  height: "90px",
                  background: "rgb(54, 54, 54)",
                  borderRadius: "50px",
                  maxWidth: "1200px",
                  width: "100%",
                  padding: "unset",
                  position: "relative", // Thêm thuộc tính này để sử dụng cho phần tử con có position: absolute
                }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "15px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/icon_ctdl.png" alt="icon" />
                </div>
                <div>
                  <p className="title_tttk">THÔNG TIN TÀI KHOẢN</p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    marginTop: "20px", // Sử dụng marginTop theo yêu cầu của bạn
                    borderRadius: "50px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/plus-circle.png" alt="plus icon" />
                </div>
              </div>
            </>
          }
          key="1">
          <p className="text_ctdl" style={{ marginTop: "20px" }}>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Tôi có thể thay đổi thông tin cá nhân (họ tên, số điện thoại,
              email…) không?
            </span>
            <br />
            Quý khách không thể thay đổi thông tin cá nhân. Nên Quý khách lưu ý
            đăng ký đầy đủ và đúng thông tin ngay từ đầu. Nếu đăng ký sai, Quý
            khách có thể yêu cầu 789BET hủy đơn đăng ký đó và đăng ký lại 1 tài
            khoản Đại Lý mới.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Tôi phải làm sao nếu quên mật khẩu?
            </span>
            <br />
            Quý khách có thể liện tới chuyên viên hỗ trợ Đại Lý cung cấp 1 số
            thông tin liên quan để xác minh và mật khẩu sẽ được cung cấp về
            email của Đại Lý của bạn. <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Các thông tin của Đại Lý có được bảo mật không?
            </span>
            <br />
            Tại 789BET, toàn bộ thông tin của cả thành viên lẫn Đại Lý hoàn toàn
            được bảo mật và mã hóa một cách tuyệt đối. Chúng tôi luôn đặt sự an
            toàn của khách hàng lên hàng đầu. <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Chính sách bảo mật{" "}
            </span>
            <br />
            Chúng tôi cam kết việc bảo mật thông tin của Quý khách lên hàng đầu.
            Chúng tôi bảo mật các dữ liệu cá nhân của Quý khách và không tiết lộ
            thông tin này cho bất kỳ bên thứ ba nào, ngoại trừ theo yêu cầu của
            cơ quan luật pháp hoặc cần cung cấp thông tin hỗ trợ dịch vụ thanh
            toán để hoàn thành các giao dịch cần thiết thông qua trang web của
            chúng tôi. Tất cả thông tin cá nhân của Quý khách cung cấp được
            truyền qua Secure Socket (SSL 128 bit mã hóa tiêu chuẩn) và được lưu
            trữ với chế độ bảo mật tối cao. Tất cả các dữ liệu truy cập trong
            nội bộ sẽ bị hạn chế và giám sát chặt chẽ.
          </p>
        </Collapse.Panel>
      </Collapse>{" "}
      <br />
      <Collapse bordered={false}>
        <Collapse.Panel
          showArrow={false}
          header={
            <>
              <div
                style={{
                  display: "flex",
                  height: "90px",
                  background: "rgb(54, 54, 54)",
                  borderRadius: "50px",
                  maxWidth: "1200px",
                  width: "100%",
                  padding: "unset",
                  position: "relative", // Thêm thuộc tính này để sử dụng cho phần tử con có position: absolute
                }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "15px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/icon_thunhap.png" alt="icon" />
                </div>
                <div>
                  <p className="title_tttk">
                    THU NHẬP VÀ PHƯƠNG THỨC THANH TOÁN
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    marginTop: "20px", // Sử dụng marginTop theo yêu cầu của bạn
                    borderRadius: "50px",
                  }}>
                  <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/daily/plus-circle.png" alt="plus icon" />
                </div>
              </div>
            </>
          }
          key="1">
          <p className="text_ctdl" style={{ marginTop: "20px" }}>
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Tôi nhận tiền hoa hồng bằng cách nào?
            </span>
            <br />
            Tiền hoa hồng của Đại Lý sẽ được hệ thống tự động chuyển vào tài
            khoản ngân hàng do Đại Lý đăng ký trước ngày 10 mỗi tháng.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Mức hoa hồng tối thiểu là bao nhiêu?
            </span>
            <br />
            Mức hoa hồng tối thiểu để 789BET thanh toán là 1,000,000 VND. Trường
            hợp tiền hoa hồng của Quý khách dưới 1,000,000 VND số tiền này sẽ
            không được bảo lưu và cộng dồn vào tiền hoa hồng tháng kế tiếp.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Tại sao có doanh thu dương ?
            </span>
            <br />
            Là khi thành viên tuyến dưới của Quý khách chơi thắng. Nghĩa là công
            ty không có lợi nhuận và Quý khách sẽ bị dương tiền hoa hồng. Lợi
            nhuận dương cũng sẽ được trừ vào tiền hoa hồng của tháng kế tiếp.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Hoa hồng được tính như thế nào?
            </span>
            <br />
            Tiền Hoa hồng = ((Tổng tiền thắng thua - hoàn trả - khuyến mãi - các
            hoạt động sự kiện) - (Tổng tiền thắng thua x 10% phí quản lý)) x %
            hoa hồng lợi nhuận ở bảng trên.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Tôi cần bao nhiêu thành viên để bắt đầu được nhận hoa hồng?
            </span>
            <br />
            Đại Lý cần có tối thiểu 03 thành viên hoạt động mỗi tháng để có thể
            bắt đầu được nhận hoa hồng. Thành viên hoạt động được tính là thành
            viên có ít nhất 01 (một) vé cược trong tháng
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Làm thế nào để biết khách hàng đó do mình giới thiệu?
            </span>
            <br />
            Sau khi đăng ký tài khoản Đại Lý thành công, Quý khách sẽ có link
            riêng và mã Đại Lý. Những thành viên đăng ký dưới mã Đại Lý của Quý
            khách sẽ được tính là thành viên tuyến dưới của Quý khách.
            <br />
            <span
              className="leading-[70px] text-[20px]"
              style={{ fontWeight: "bold" }}>
              Lấy link riêng và mã Đại Lý như thế nào?
            </span>
            <br />
            Đại lý vui lòng đăng nhập vào tài khoản hậu đài của mình, lướt xuống
            dưới cùng của trang hậu đài, tại đây Quý Đại Lý sẽ thấy link Đại Lý
            của mình dành cho cả phiên bản trên máy tính và trên điện thoại.
          </p>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}
