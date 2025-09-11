/* eslint-disable @next/next/no-img-element */
"use client";

export default function Prioritize() {
  return (
    <div>
      <div id="sidebar">
        <div className="main-sidebar">
          <div className="image-logo">
            <a href="/" className="">
              <img
                className="w-100"
                src="./assets/images/logo-789bet.png"
                alt="Logo trang hướng dẫn 789bet"
              />
            </a>
          </div>
          <div className="box-form-search menu-search">
            <div className="searchInput">
              <input type="text" placeholder="Tìm kiếm ..." />
              <div className="resultBox"></div>
              <div className="icon">
                <span className="icon-svg-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_279_28)">
                      <path
                        d="M31.9997 28.434V29.1792C31.9822 29.2035 31.9546 29.2259 31.949 29.2526C31.605 30.9322 29.5084 31.6146 28.1171 30.3387C25.8149 28.2262 23.4627 26.1678 21.1311 24.087C20.9244 23.9029 20.7158 23.7212 20.5059 23.5371C20.3794 23.6204 20.2767 23.6901 20.172 23.7567C16.9497 25.8002 13.4705 26.4085 9.76826 25.4698C3.07359 23.7728 -1.04395 17.2741 0.230216 10.4967C1.20494 5.31306 5.42834 1.15829 10.6697 0.245716C11.3544 0.126279 12.0516 0.0802464 12.7432 0C12.9305 0 13.1184 0 13.3057 0C13.4392 0.0174178 13.572 0.0354577 13.7054 0.0510094C14.3043 0.121303 14.9106 0.153028 15.5014 0.266244C24.5752 1.99932 28.9822 12.4494 23.8692 20.0933C23.8085 20.1848 23.7521 20.2787 23.692 20.3739C23.7659 20.4417 23.8191 20.4908 23.873 20.5387C26.1964 22.6127 28.5136 24.6929 30.8477 26.7556C31.3802 27.2266 31.84 27.7223 31.9991 28.434H31.9997ZM13.0163 22.981C18.579 22.981 23.1062 18.5027 23.1156 12.99C23.125 7.42808 18.5928 2.92184 12.99 2.92371C7.42603 2.92495 2.91197 7.42684 2.9151 12.9701C2.91823 18.5108 7.42917 22.981 13.0163 22.9816V22.981Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_279_28">
                        <rect width="32" height="31" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="nav-sidebar">
            <nav className="sidenav">
              <ul className="list-item-nav">
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <a
                      href="/chuong-trinh-hoat-dong"
                      className="item-link active"
                      data-tabs="/chuong-trinh-hoat-dong"
                    >
                      Chương Trình Hoạt Động 789BET
                    </a>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link click_shows"
                      id="lay-link-dang-nhap-moi-nhat"
                      data-tabs="/lay-link-dang-nhap-moi-nhat"
                    ></span>
                    <a
                      href="/lay-link-dang-nhap-moi-nhat"
                      className="item-link"
                      data-tabs="/lay-link-dang-nhap-moi-nhat"
                    >
                      Lấy Link đăng nhập mới nhất
                    </a>

                    <div className="collapse" style={{ display: "block" }}>
                      <div className="link-menu-sub">
                        <a
                          href="/lay-link-dang-nhap-moi-nhat-mb"
                          className="item-link"
                          data-tabs="/lay-link-dang-nhap-moi-nhat-mb"
                        >
                          Lấy Link đăng nhập qua Gmail
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link click_shows"
                      id="dang-ky-tai-khoan-tai-789bet"
                      data-tabs="/dang-ky-tai-khoan-tai-789bet"
                    ></span>
                    <a
                      href="/dang-ky-tai-khoan-tai-789bet"
                      className="item-link"
                      data-tabs="/dang-ky-tai-khoan-tai-789bet"
                    >
                      Đăng ký tài khoản tại 789BET
                    </a>

                    <div className="collapse" style={{ display: "block" }}>
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-dang-ky-tai-khoan"
                          className="item-link"
                          data-tabs="/huong-dan-dang-ky-tai-khoan"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse" style={{ display: "block" }}>
                      <div className="link-menu-sub">
                        <a
                          href="/dang-ky-tai-khoan-tren-may-tinh"
                          className="item-link"
                          data-tabs="/dang-ky-tai-khoan-tren-may-tinh"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="nap-rut-usdt-tu-a-z"
                      data-tabs="/nap-rut-usdt-tu-a-z"
                    ></span>
                    <a
                      href="/nap-rut-usdt-tu-a-z"
                      className="item-link"
                      data-tabs="/nap-rut-usdt-tu-a-z"
                    >
                      Nạp - Rút USDT từ A-Z
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/tao-tai-khoan-san-binance"
                          className="item-link"
                          data-tabs="/tao-tai-khoan-san-binance"
                        >
                          Tạo tài khoản sàn Binance
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/bao-mat-tai-khoan-binance"
                          className="item-link"
                          data-tabs="/bao-mat-tai-khoan-binance"
                        >
                          Mua USDT trên tài khoản Binance
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ban-usdt-ra-tien-viet-tren-binance"
                          className="item-link"
                          data-tabs="/ban-usdt-ra-tien-viet-tren-binance"
                        >
                          Bán USDT ra tiền Việt trên Binance
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/nap-tien-bang-usdt-tu-binance"
                          className="item-link"
                          data-tabs="/nap-tien-bang-usdt-tu-binance"
                        >
                          Nạp tiền bằng USDT từ Binance
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/lien-ket-vi-usdt"
                          className="item-link"
                          data-tabs="/lien-ket-vi-usdt"
                        >
                          Liên kết ví USDT trên 789BET
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/rut-tien-ve-vi-usdt"
                          className="item-link"
                          data-tabs="/rut-tien-ve-vi-usdt"
                        >
                          Rút tiền 789BET qua ví USDT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="dai-ly-789bet"
                      data-tabs="/dai-ly-789bet"
                    ></span>
                    <a
                      href="/dai-ly-789bet"
                      className="item-link"
                      data-tabs="/dai-ly-789bet"
                    >
                      Đại lý 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="huong-dan-dang-ky-dai-ly"
                          data-tabs="/huong-dan-dang-ky-dai-ly"
                        ></span>
                        <a
                          href="/huong-dan-dang-ky-dai-ly"
                          className="item-link"
                          data-tabs="/huong-dan-dang-ky-dai-ly"
                        >
                          1. Hướng dẫn đăng ký đại lý
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/huong-dan-dang-ky-dai-ly-mb"
                              className="item-link"
                              data-tabs="/huong-dan-dang-ky-dai-ly-mb"
                            >
                              Thao tác trên điện thoại
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/dang-ky-dai-ly-may-tinh"
                              className="item-link"
                              data-tabs="/dang-ky-dai-ly-may-tinh"
                            >
                              Theo tác trên máy tính
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="2-huong-dan-lay-link-gioi-thieu"
                          data-tabs="/2-huong-dan-lay-link-gioi-thieu"
                        ></span>
                        <a
                          href="/2-huong-dan-lay-link-gioi-thieu"
                          className="item-link"
                          data-tabs="/2-huong-dan-lay-link-gioi-thieu"
                        >
                          2. Hướng dẫn lấy link giới thiệu
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/thao-tac-tren-dien-thoai"
                              className="item-link"
                              data-tabs="/thao-tac-tren-dien-thoai"
                            >
                              Thao tác trên điện thoại
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/thao-tac-tren-may-tinh"
                              className="item-link"
                              data-tabs="/thao-tac-tren-may-tinh"
                            >
                              Thao tác trên máy tính
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-nap-tien"
                      data-tabs="/huong-dan-nap-tien"
                    ></span>
                    <a
                      href="/huong-dan-nap-tien"
                      className="item-link"
                      data-tabs="/huong-dan-nap-tien"
                    >
                      Nạp tiền tại 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/chuyen-khoan-ngan-hang"
                          className="item-link"
                          data-tabs="/chuyen-khoan-ngan-hang"
                        >
                          1. Chuyển khoản ngân hàng
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/quet-ma-ngan-hang"
                          className="item-link"
                          data-tabs="/quet-ma-ngan-hang"
                        >
                          2. Quét mã ngân hàng
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/the-cao"
                          className="item-link"
                          data-tabs="/the-cao"
                        >
                          3. Thẻ cào
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a href="/momo" className="item-link" data-tabs="/momo">
                          4. Momo
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/5-zalopay"
                          className="item-link"
                          data-tabs="/5-zalopay"
                        >
                          5. Zalopay
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/6-viettelpay"
                          className="item-link"
                          data-tabs="/6-viettelpay"
                        >
                          6. Viettelpay
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/7-usdt"
                          className="item-link"
                          data-tabs="/7-usdt"
                        >
                          7. USDT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="lien-ket-ngan-hang-tai-789bet"
                      data-tabs="/lien-ket-ngan-hang-tai-789bet"
                    ></span>
                    <a
                      href="/lien-ket-ngan-hang-tai-789bet"
                      className="item-link"
                      data-tabs="/lien-ket-ngan-hang-tai-789bet"
                    >
                      Liên kết ngân hàng tại 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-lien-ket-ngan-hang"
                          className="item-link"
                          data-tabs="/huong-dan-lien-ket-ngan-hang"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/lien-ket-ngan-hang-PC"
                          className="item-link"
                          data-tabs="/lien-ket-ngan-hang-PC"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-rut-tien"
                      data-tabs="/huong-dan-rut-tien"
                    ></span>
                    <a
                      href="/huong-dan-rut-tien"
                      className="item-link"
                      data-tabs="/huong-dan-rut-tien"
                    >
                      Hướng dẫn rút tiền
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-rut-tien-mb"
                          className="item-link"
                          data-tabs="/huong-dan-rut-tien-mb"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-rut-tien-PC"
                          className="item-link"
                          data-tabs="/huong-dan-rut-tien-PC"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <a
                      href="/huong-dan-tai-app-1111"
                      className="item-link"
                      data-tabs="/huong-dan-tai-app-1111"
                    >
                      Hướng dẫn khi link bị chặn
                    </a>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-thay-doi-thong-tin"
                      data-tabs="/huong-dan-thay-doi-thong-tin"
                    ></span>
                    <a
                      href="/huong-dan-thay-doi-thong-tin"
                      className="item-link"
                      data-tabs="/huong-dan-thay-doi-thong-tin"
                    >
                      Thay đổi thông tin tại 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thay-doi-thong-tin-ho-va-ten"
                          className="item-link"
                          data-tabs="/thay-doi-thong-tin-ho-va-ten"
                        >
                          Thay đổi họ và tên
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thay-doi-thong-tin-ngan-hang"
                          className="item-link"
                          data-tabs="/thay-doi-thong-tin-ngan-hang"
                        >
                          Thay đổi ngân hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-tai-app"
                      data-tabs="/huong-dan-tai-app"
                    ></span>
                    <a
                      href="/huong-dan-tai-app"
                      className="item-link"
                      data-tabs="/huong-dan-tai-app"
                    >
                      Hướng dẫn tải app 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-tai-app-tren-ios"
                          className="item-link"
                          data-tabs="/huong-dan-tai-app-tren-ios"
                        >
                          Tải app trên IOS
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/3-them-app-789bet-tren-man-hinh-ios"
                          className="item-link"
                          data-tabs="/3-them-app-789bet-tren-man-hinh-ios"
                        >
                          Thêm app vào màn hình IOS
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/2-tai-app-tren-android"
                          className="item-link"
                          data-tabs="/2-tai-app-tren-android"
                        >
                          Tải app trên ANDROID
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-lay-lai-mat-khau"
                      data-tabs="/huong-dan-lay-lai-mat-khau"
                    ></span>
                    <a
                      href="/huong-dan-lay-lai-mat-khau"
                      className="item-link"
                      data-tabs="/huong-dan-lay-lai-mat-khau"
                    >
                      Lấy lại mật khẩu tại 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="mat-khau-dang-nhap"
                          data-tabs="/mat-khau-dang-nhap"
                        ></span>
                        <a
                          href="/mat-khau-dang-nhap"
                          className="item-link"
                          data-tabs="/mat-khau-dang-nhap"
                        >
                          Mật khẩu đăng nhập
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/a-lay-qua-mail"
                              className="item-link"
                              data-tabs="/a-lay-qua-mail"
                            >
                              A. Lấy qua email
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/b-lay-qua-so-ien-thoai-sms"
                              className="item-link"
                              data-tabs="/b-lay-qua-so-ien-thoai-sms"
                            >
                              B. Lấy qua số điện thoại (SMS)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/2-mat-khau-rut-tien"
                          className="item-link"
                          data-tabs="/2-mat-khau-rut-tien"
                        >
                          Mật khẩu rút tiền
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-nhan-hoan-tra"
                      data-tabs="/huong-dan-nhan-hoan-tra"
                    ></span>
                    <a
                      href="/huong-dan-nhan-hoan-tra"
                      className="item-link"
                      data-tabs="/huong-dan-nhan-hoan-tra"
                    >
                      Hướng dẫn nhận hoàn trả
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-hoan-tra"
                          className="item-link"
                          data-tabs="/huong-dan-hoan-tra"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/nhan-hoan-tra-may-tinh"
                          className="item-link"
                          data-tabs="/nhan-hoan-tra-may-tinh"
                        >
                          Thao tác trên máy tình
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-nhan-thuong-vip-thang"
                      data-tabs="/huong-dan-nhan-thuong-vip-thang"
                    ></span>
                    <a
                      href="/huong-dan-nhan-thuong-vip-thang"
                      className="item-link"
                      data-tabs="/huong-dan-nhan-thuong-vip-thang"
                    >
                      Hướng Dẫn Nhận Thưởng VIP
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thao-tac-tren-dien-thoai-cach-1"
                          className="item-link"
                          data-tabs="/thao-tac-tren-dien-thoai-cach-1"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-nhan-thuong-vip-thang-tai-789bet"
                          className="item-link"
                          data-tabs="/huong-dan-nhan-thuong-vip-thang-tai-789bet"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-nhan-hong-bao-may-man"
                      data-tabs="/huong-dan-nhan-hong-bao-may-man"
                    ></span>
                    <a
                      href="/huong-dan-nhan-hong-bao-may-man"
                      className="item-link"
                      data-tabs="/huong-dan-nhan-hong-bao-may-man"
                    >
                      Hướng dẫn nhận hồng bao may mắn
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thao-tac-tren-dien-thoai-2024"
                          className="item-link"
                          data-tabs="/thao-tac-tren-dien-thoai-2024"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thao-tac-tren-may-tinh-2024"
                          className="item-link"
                          data-tabs="/thao-tac-tren-may-tinh-2024"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="dang-ky-khuyen-mai-789bet"
                      data-tabs="/dang-ky-khuyen-mai-789bet"
                    ></span>
                    <a
                      href="/dang-ky-khuyen-mai-789bet"
                      className="item-link"
                      data-tabs="/dang-ky-khuyen-mai-789bet"
                    >
                      Đăng ký khuyến mãi 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/huong-dan-anh-ky-khuyen-mai"
                          className="item-link"
                          data-tabs="/huong-dan-anh-ky-khuyen-mai"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/dang-ky-khuyen-mai-PC"
                          className="item-link"
                          data-tabs="/dang-ky-khuyen-mai-PC"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-lay-hoa-on-ngan-hang"
                      data-tabs="/huong-dan-lay-hoa-on-ngan-hang"
                    ></span>
                    <a
                      href="/huong-dan-lay-hoa-on-ngan-hang"
                      className="item-link"
                      data-tabs="/huong-dan-lay-hoa-on-ngan-hang"
                    >
                      Hướng dẫn lấy hóa đơn ngân hàng
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-techcombank"
                          className="item-link"
                          data-tabs="/ngan-hang-techcombank"
                        >
                          Ngân hàng TECHCOMBANK
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-acb"
                          className="item-link"
                          data-tabs="/ngan-hang-acb"
                        >
                          Ngân hàng ACB
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-bidv"
                          className="item-link"
                          data-tabs="/ngan-hang-bidv"
                        >
                          Ngân hàng BIDV
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-vietcombank"
                          className="item-link"
                          data-tabs="/ngan-hang-vietcombank"
                        >
                          Ngân hàng VIETCOMBANK
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-vietinbank"
                          className="item-link"
                          data-tabs="/ngan-hang-vietinbank"
                        >
                          Ngân hàng VIETINBANK
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-mb-bank"
                          className="item-link"
                          data-tabs="/ngan-hang-mb-bank"
                        >
                          Ngân hàng MB BANK
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-ban-viet-bvbank"
                          className="item-link"
                          data-tabs="/ngan-hang-ban-viet-bvbank"
                        >
                          Ngân hàng Bản Việt (BVBANK)
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-msb"
                          className="item-link"
                          data-tabs="/ngan-hang-msb"
                        >
                          Ngân hàng MSB
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-shb"
                          className="item-link"
                          data-tabs="/ngan-hang-shb"
                        >
                          Ngân hàng SHB
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-quoc-dan-ncb"
                          className="item-link"
                          data-tabs="/ngan-hang-quoc-dan-ncb"
                        >
                          Ngân hàng quốc dân NCB
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-nam-a-bank"
                          className="item-link"
                          data-tabs="/ngan-hang-nam-a-bank"
                        >
                          Ngân hàng NAM A BANK
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/ngan-hang-hdbank"
                          className="item-link"
                          data-tabs="/ngan-hang-hdbank"
                        >
                          Ngân hàng HDBANK
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-cuoc-tai-789bet"
                      data-tabs="/huong-dan-cuoc-tai-789bet"
                    ></span>
                    <a
                      href="/huong-dan-cuoc-tai-789bet"
                      className="item-link"
                      data-tabs="/huong-dan-cuoc-tai-789bet"
                    >
                      Hướng dẫn cược tại 789BET
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="live-casino"
                          data-tabs="/live-casino"
                        ></span>
                        <a
                          href="/live-casino"
                          className="item-link"
                          data-tabs="/live-casino"
                        >
                          LIVE CASINO
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/long-ho-rong-ho"
                              className="item-link"
                              data-tabs="/long-ho-rong-ho"
                            >
                              Rồng Hổ
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/roulette"
                              className="item-link"
                              data-tabs="/roulette"
                            >
                              Roulette
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/xi-ngau-tai-xiu"
                              className="item-link"
                              data-tabs="/xi-ngau-tai-xiu"
                            >
                              Xí Ngầu (Tài Xỉu)
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/xoc-dia"
                              className="item-link"
                              data-tabs="/xoc-dia"
                            >
                              Xóc Đĩa
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/FANTAN"
                              className="item-link"
                              data-tabs="/FANTAN"
                            >
                              FanTan
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/baccarat"
                              className="item-link"
                              data-tabs="/baccarat"
                            >
                              Baccarat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="1-bong-da"
                          data-tabs="/1-bong-da"
                        ></span>
                        <a
                          href="/1-bong-da"
                          className="item-link"
                          data-tabs="/1-bong-da"
                        >
                          BÓNG ĐÁ
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/huong-dan-keo-the-phat-total-bookings"
                              className="item-link"
                              data-tabs="/huong-dan-keo-the-phat-total-bookings"
                            >
                              Hướng dẫn kèo thẻ phạt
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/huong-dan-ca-cuoc-bong-da"
                              className="item-link"
                              data-tabs="/huong-dan-ca-cuoc-bong-da"
                            >
                              Hướng dẫn cược bóng đá
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/kinh-nghiem-nhan-dinh-keo-bong-da"
                              className="item-link"
                              data-tabs="/kinh-nghiem-nhan-dinh-keo-bong-da"
                            >
                              Kinh nghiệm soi kèo
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/1-huong-dan-cuoc-xien"
                              className="item-link"
                              data-tabs="/1-huong-dan-cuoc-xien"
                            >
                              Hướng dẫn cược xiên
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/huong-dan-soi-keo-phat-goc"
                              className="item-link"
                              data-tabs="/huong-dan-soi-keo-phat-goc"
                            >
                              Hướng dẫn kèo phạt góc
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/huong-dan-soi-keo-penalty-phat-den"
                              className="item-link"
                              data-tabs="/huong-dan-soi-keo-penalty-phat-den"
                            >
                              Hướng dẫn kèo phạt đền
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/quan-vot-tennis"
                          className="item-link"
                          data-tabs="/quan-vot-tennis"
                        >
                          QUẦN VỢT (TENNIS)
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <span
                          className="nav-link"
                          id="game-bai-pvp"
                          data-tabs="/game-bai-pvp"
                        ></span>
                        <a
                          href="/game-bai-pvp"
                          className="item-link"
                          data-tabs="/game-bai-pvp"
                        >
                          GAME BÀI 3D
                        </a>

                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/mau-binh"
                              className="item-link"
                              data-tabs="/mau-binh"
                            >
                              Mậu Binh
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/bai-cao"
                              className="item-link"
                              data-tabs="/bai-cao"
                            >
                              Bài Cào
                            </a>
                          </div>
                        </div>
                        <div className="collapse">
                          <div className="link-menu-sub">
                            <a
                              href="/tien-len"
                              className="item-link"
                              data-tabs="/tien-len"
                            >
                              Tiến Lên
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item-link-nav">
                  <div className="link-menu-sub">
                    <span
                      className="nav-link"
                      id="huong-dan-nhan-thuong-sinh-nhat"
                      data-tabs="/huong-dan-nhan-thuong-sinh-nhat"
                    ></span>
                    <a
                      href="/huong-dan-nhan-thuong-sinh-nhat"
                      className="item-link"
                      data-tabs="/huong-dan-nhan-thuong-sinh-nhat"
                    >
                      Nhận Thưởng Sinh Nhật
                    </a>

                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thuong-sinh-nhat-thao-tac-tren-dien-thoai"
                          className="item-link"
                          data-tabs="/thuong-sinh-nhat-thao-tac-tren-dien-thoai"
                        >
                          Thao tác trên điện thoại
                        </a>
                      </div>
                    </div>
                    <div className="collapse">
                      <div className="link-menu-sub">
                        <a
                          href="/thao-tac-tren-may-tinh-sinh-nhat"
                          className="item-link"
                          data-tabs="/thao-tac-tren-may-tinh-sinh-nhat"
                        >
                          Thao tác trên máy tính
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
