/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
// import "./styles.css"; // Ensure this file exists in the same directory
import "./form.css";
// import "./styles_mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function CSKHPage() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        import("./styles_mobile.css").catch(() => { });
      } else {
        import("./styles.css").catch(() => { });
      }
    };

    handleResize(); // Gọi hàm để import CSS ngay khi component được mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="hidden md:block w-full h-full">
        <div className="wp-site">
          <div className="container">
            <header className="header">
              <div className="header-top mt-2">
                <h1 className="display-4 fw-bold text-center text-white">
                  TRUNG TÂM HỖ TRỢ
                </h1>
              </div>
            </header>

            <main>
              <div className="panner-content gap-3 mt-1">
                <div className="pannel-left w-60 mt-3">
                  <div className="image-center-iframe">
                    <div className="image-home">
                      <img
                        className="w-100 image-content-size mt-5"
                        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/ds-789bet-v3.png"
                        alt=""
                        srcSet=""
                      />

                      <div className="footer-supporter">
                        <h3 className="title text-center pt-3 fw-bold">
                          CẢM ƠN QUÝ KHÁCH ĐÃ QUAN TÂM{" "}
                          <span className="heightline">ĐẾN 789BET</span>
                        </h3>
                      </div>
                    </div>

                    <div
                      id="box-iframe"
                      className="pt-3"
                      style={{ display: "none" }}>
                      <span
                        id="btn-tawk-small"
                        className="close-btn cursor-pointer z-30"
                        style={{ display: "none" }}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="btn-close"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
                        </svg>
                      </span>

                      <span id="btn-reload" className="cursor-pointer z-30">
                        <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-reload.png" />
                      </span>

                      <div id="show-iframe-open">
                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame52-16">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/hotrokhuyenmai"
                            title="chat widget"
                            style={{ display: "none" }}></iframe>
                        </div>
                        <div
                          className="code-iframe pc-btn-tab active"
                          data-content-tab="Ifame52-12">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/hotronaptien"
                            style={{ display: "none" }}></iframe>
                        </div>
                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame52-13">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/hotroruttien"
                            style={{ display: "none" }}></iframe>
                        </div>
                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame52-38">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/hotrodoithongtin"
                            style={{ display: "none" }}></iframe>
                        </div>
                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame67-39">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/homthugopy"
                            style={{ display: "none" }}></iframe>
                        </div>

                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame52-43">
                          <iframe
                            className="chat-dialog"
                            frameBorder="0"
                            id="tawkto-km-sp"
                            scrolling="no"
                            src="https://cskh77.com/cskh/hotronaptien_new_v2"
                            style={{ display: "none" }}></iframe>
                        </div>

                        <div
                          className="code-iframe pc-btn-tab"
                          data-content-tab="Ifame52-44">
                          <iframe
                            className="chat-dialog"
                            id="tawkto-km-sp"
                            src="https://cskh77.com/cskh/hotronaptien_new_v2"
                            title="chat widget"
                            style={{ display: "none" }}></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pannel-right w-40 mt-3">
                  <div className="footer-supporter">
                    <div className="btn-supporter mt-3">
                      <ul className="btn-list">
                        <li className="btn-list_link">
                          <a href="tel:+84868888789">
                            <div className="btn-thumb">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/what-chat-789.png"
                                alt=""
                              />
                            </div>

                            <div className="btn-name fw-bold pt-2">
                              +84 868888789
                            </div>
                          </a>
                        </li>

                        <li className="btn-list_link">
                          <a
                            href="https://cskh77.com/cskh/telegram_cskh24_7"
                            target="_blank">
                            <div className="btn-thumb">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/tele-789.png"
                                alt=""
                              />
                            </div>

                            <div className="btn-name fw-bold pt-2">
                              HỖ TRỢ 24/7
                            </div>
                          </a>
                        </li>

                        <li className="btn-list_link">
                          <a href="mailto:admin@789bet.com" target="_blank">
                            <div className="btn-thumb">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/email-789.png"
                                alt=""
                              />
                            </div>

                            <div className="btn-name fw-bold pt-2">
                              admin@789bet.com
                            </div>
                          </a>
                        </li>

                        <li className="btn-list_link">
                          <a href="https://facebok789.com" target="_blank">
                            <div className="btn-thumb">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/fb-icon-789.png"
                                alt=""
                              />
                            </div>

                            <div className="btn-name fw-bold pt-2">
                              Facebook
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="main box-panel container mt-2">
                    {/* <!-- Btn Option --> */}
                    <div className="list-btn-funcion">
                      <div className="item-btn active" id="tab1-tab">
                        <button className="custom-button button1">
                          <div className="info-btn">
                            <div className="bg-bd-btn">
                              <div className="button2">
                                <span>hỗ trợ</span>
                              </div>
                            </div>
                            <div className="text-btn-1">
                              <h2>24/7</h2>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="item-btn" id="tab2-tab">
                        <button className="custom-button button1">
                          <div className="info-btn">
                            <div className="bg-bd-btn">
                              <div className="button2">
                                <span>hỗ trợ</span>
                              </div>
                            </div>
                            <div className="text-btn-1">
                              <h2>KHIẾU NẠI</h2>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="item-btn" id="tab3-tab">
                        <button className="custom-button button1">
                          <div className="info-btn">
                            <div className="bg-bd-btn">
                              <div className="button2">
                                <span>hỗ trợ</span>
                              </div>
                            </div>
                            <div className="text-btn-1">
                              <h2>KHÁC</h2>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* <!-- End Btn Option --> */}

                    <section className="content">
                      <div className="container-content">
                        <div className="tab-content active">
                          {/* <!-- Support 24/7 --> */}
                          <div
                            className="item-tab custiom active"
                            data-tab="tab1-tab">
                            <div className="bd-btn pc-btn-tab">
                              <div
                                className="btn-content"
                                data-tab-control="Ifame52-16">
                                <div className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/khuyenmai_638358341707518663.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      KHUYẾN MÃI <br />
                                      &amp; SẢN PHẨM
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bd-btn pc-btn-tab">
                              <div
                                className="btn-content"
                                data-tab-control="Ifame52-38">
                                <div className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-dtt.png" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      HƯỚNG DẪN <br />
                                      ĐỔI THÔNG TIN
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bd-btn pc-btn-tab">
                              <div
                                className="btn-content"
                                data-tab-control="Ifame52-12">
                                <div className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-nap.png" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      HỖ TRỢ <br />
                                      NẠP TIỀN
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              <div
                                className="btn-content"
                                data-tab-control="Ifame52-13">
                                <div className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-rut.png" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      HỖ TRỢ <br />
                                      RÚT TIỀN
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bd-btn pc-btn-tab">
                              <div
                                className="btn-content"
                                data-tab-control="Ifame52-43">
                                <div className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-napngaycu.png" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      Nạp Tiền <br />
                                      Ngày Cũ
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bd-btn sp-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://cskh77.com/cskh/camnanghuongdan"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Group1000004075_638484566461320221.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      Cẩm Nang <br />
                                      Hướng Dẫn
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Support 24/7 --> */}

                          {/* <!-- Complain 24/7 --> */}
                          <div className="item-tab custiom" data-tab="tab2-tab">
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://t.me/khieunai789"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/telegram(1)_638359932704059156.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      TELEGRAM <br />
                                      KHIẾU NẠI
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://cskh77.com/cskh/telegram"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/telegram(1)_638359932704059156.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      TELEGRAM <br />
                                      ĐẠI LÝ
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>

                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="tel:+84868888789"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Group1000004069(2)_638484564392619264.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      SDT <br />
                                      +84 868888789
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End complain 24/7 --> */}

                          {/* <!-- Other --> */}
                          <div className="item-tab custiom" data-tab="tab3-tab">
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://www.facebook.com/789betokvip1"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/fb_638359939044194254.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      HỖ TRỢ <br />
                                      FACEBOOK
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789-tele_638360308352713166.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      KÊNH TIN TỨC
                                      <br /> TELEGRAM
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789-tele_638360308352713166.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      KÊNH NỔ HŨ
                                      <br /> TELEGRAM
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              {/* <!-- <div className="btn-content" data-tab-control="Ifame67-39"> --> */}
                              <div className="btn-content">
                                <a
                                  className="btn-content-1"
                                  href="https://cskh77.com/cskh/homthugopy"
                                  target="_blank">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789thu1_638372115766672148.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      GÓP Ý <br />
                                      NHẬN THƯỞNG
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="bd-btn pc-btn-tab">
                              <div className="btn-content">
                                <a
                                  href="https://cskh77.com/cskh/youtube"
                                  target="_blank"
                                  className="btn-content-1">
                                  <div className="icon-btn-main">
                                    <span>
                                      <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/YOUTUBE2_638437756788499531.webp" />
                                    </span>
                                  </div>
                                  <div className="text-btn-main">
                                    <span>
                                      KÊNH YOUTUBE <br />
                                      789BET
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* <!-- End Other --> */}
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="fixed-bottom">
                    <div className="footer">
                      <div className="position-relative">
                        <div className="che-do">
                          <a
                            href="https://cskh77.com/cskh/taiapp"
                            target="_blank"
                            className="">
                            <img
                              className="w-100"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-tai-app.png"
                            />
                          </a>
                        </div>

                        <div className="d-flex download-app-km">
                          <div className="w-bottom-btn">
                            <a
                              href="https://cskh77.com/cskh/chedovip"
                              target="_blank">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/che-do-vip-789.png"
                              />
                            </a>
                          </div>
                          <div className="w-bottom-btn">
                            <a
                              href="https://cskh77.com/cskh/danhsachKM"
                              target="_blank">
                              <img
                                className="w-100"
                                src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-km.svg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="link-redirect">
                        <a
                          href="https://cskh77.com/cskh/linktong"
                          target="_blank"
                          className="pc-btn-tab bottom-truy-cap">
                          <span>LINH TRUY CẬP 1</span>
                        </a>
                        <a
                          href="https://cskh77.com/cskh/linktong"
                          target="_blank"
                          className="pc-btn-tab bottom-truy-cap">
                          <span>LINH TRUY CẬP 2</span>
                        </a>
                        <a
                          href="https://cskh77.com/cskh/linktong"
                          target="_blank"
                          className="pc-btn-tab bottom-truy-cap">
                          <span>LINH TRUY CẬP 3</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="block md:hidden body_mobile w-full h-full">
        {/* <!-- Header --> */}
        <div className="navbar header pt-3">
          <div className="container">
            <div className="d-block m-auto">
              <div className="ttht pt-2">
                <div className="w-100">
                  <h1 className="title-header sp-btn-tab">TRUNG TÂM HỖ TRỢ</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Header --> */}

        <div className="main container mt-2" style={{ maxHeight: "none" }}>
          <div className="list-btn-funcion" style={{ display: "flex" }}>
            {/* <!-- Option Pannel --> */}
            <div className="item-btn active" id="tab1-tab">
              <button className="custom-button button1">
                <div className="info-btn">
                  <div className="bg-bd-btn">
                    <div className="button2">
                      <span>hỗ trợ</span>
                    </div>
                  </div>
                  <div className="text-btn-1">
                    <h2>24/7</h2>
                  </div>
                </div>
              </button>
            </div>

            <div className="item-btn" id="tab2-tab">
              <button className="custom-button button1">
                <div className="info-btn">
                  <div className="bg-bd-btn">
                    <div className="button2">
                      <span>hỗ trợ</span>
                    </div>
                  </div>
                  <div className="text-btn-1">
                    <h2>KHIẾU NẠI</h2>
                  </div>
                </div>
              </button>
            </div>

            <div className="item-btn" id="tab3-tab">
              <button className="custom-button button1">
                <div className="info-btn">
                  <div className="bg-bd-btn">
                    <div className="button2">
                      <span>hỗ trợ</span>
                    </div>
                  </div>
                  <div className="text-btn-1">
                    <h2>KHÁC</h2>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* <!-- End Option Pannel --> */}
          <section className="content">
            <div className="container-content">
              <div className="tab-content active">
                <div className="home item-tab" style={{ opacity: 0 }}>
                  <div className="home-page-popup" style={{ display: "none" }}>
                    <div className="image-bg-home">
                      <img
                        className="w-100 sp-btn-tab"
                        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/bg-content-ds.png"
                      />
                    </div>

                    <div className="footer-supporter">
                      <h3 className="title text-center mt-2 fw-bold">
                        CẢM ƠN QUÝ KHÁCH ĐÃ QUAN TÂM{" "}
                        <span className="heightline">ĐẾN 789BET</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div
                  className="item-tab custiom active"
                  data-tab="tab1-tab"
                  style={{ opacity: 1 }}>
                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame52-16">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/khuyenmai_638358341707518663.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            KHUYẾN MÃI <br />
                            SẢN PHẨM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame52-38">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-dtt.png" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            HƯỚNG DẪN <br />
                            ĐỔI THÔNG TIN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame52-12">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-nap.png" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            HỖ TRỢ <br />
                            NẠP TIỀN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame52-13">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-rut.png" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            HỖ TRỢ <br />
                            RÚT TIỀN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame52-44">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-htr-napngaycu.png" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            NẠP TIỀN <br />
                            NGÀY CŨ
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://cskh99.com/789bethd"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Group1000004075_638484566461320221.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            CẨM NANG <br /> HƯỚNG DẪN
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="item-tab custiom"
                  data-tab="tab2-tab"
                  style={{ opacity: 0 }}>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://t.me/khieunai789"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/telegram(1)_638359932704059156.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            TELEGRAM <br />
                            KHIẾU NẠI
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://cskh77.com/cskh/telegram"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/telegram(1)_638359932704059156.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            TELEGRAM <br />
                            ĐẠI LÝ
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a href="tel:+84868888789" className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Group1000004069(2)_638484564392619264.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>
                            SDT <br />
                            +84 868888789
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="item-tab custiom"
                  data-tab="tab3-tab"
                  style={{ opacity: 0 }}>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://www.facebook.com/789betokvip1"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/fb_638359939044194254.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>HỖ TRỢ FACEBOOK</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789-tele_638360308352713166.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>KÊNH TIN TỨC TELEGRAM</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://t.me/addlist/vj1JF-X3VwVlYjdl"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789-tele_638360308352713166.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>KÊNH NỔ HŨ TELEGRAM</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div
                      className="btn-content"
                      data-tab-control="SpIfame67-39">
                      <div className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/Icon789thu1_638372115766672148.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>GÓP Ý NHẬN THƯỞNG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-btn sp-btn-tab">
                    <div className="btn-content">
                      <a
                        href="https://cskh77.com/cskh/youtube"
                        target="_blank"
                        className="btn-content-1">
                        <div className="icon-btn-main">
                          <span>
                            <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/YOUTUBE2_638437756788499531.webp" />
                          </span>
                        </div>
                        <div className="text-btn-main">
                          <span>KÊNH YOUTUBE 789BET</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-mb-b" style={{ height: "115.942px" }}>
          <div className="fixed-bottom" style={{ height: "115.942px" }}>
            <div className="footer !p-[0px]">
              <div className="layout-elform"></div>
              <div className="container">
                <div className="footer-supporter">
                  <div className="btn-checklink mt-1 pb-2">
                    <span>Kiểm Tra Link An Toàn</span>
                  </div>

                  <div className="form-search form-search-ct">
                    <div className="input-search position-relative">
                      <img
                        className="icon-close-form icon-close-step-1"
                        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-close.png"
                      />
                      <input
                        className="input-text"
                        name="domain-mp"
                        placeholder="Xác minh link chính thức ..."
                      />
                      <button
                        type="button"
                        className="nut-search-form btn-search-show">
                        Kiểm tra
                      </button>
                    </div>
                  </div>

                  <div className="btn-supporter mt-2 pb-3">
                    <ul className="btn-list">
                      <li className="btn-list_link">
                        <a href="tel:+84868888789" target="_blank">
                          <div className="btn-thumb">
                            <img
                              className="w-100"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/what-chat-789.png"
                              alt=""
                            />
                          </div>

                          <div className="btn-name fw-bold pt-2">
                            +84 868888789
                          </div>
                        </a>
                      </li>

                      <li className="btn-list_link">
                        <a
                          href="https://cskh77.com/cskh/telegram_cskh24_7"
                          target="_blank">
                          <div className="btn-thumb">
                            <img
                              className="w-100"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/tele-789.png"
                              alt=""
                            />
                          </div>

                          <div className="btn-name fw-bold pt-2">
                            HỖ TRỢ 24/7
                          </div>
                        </a>
                      </li>

                      <li className="btn-list_link">
                        <a href="mailto:admin@789bet.com" target="_blank">
                          <div className="btn-thumb">
                            <img
                              className="w-100"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/email-789.png"
                              alt=""
                            />
                          </div>

                          <div className="btn-name fw-bold pt-2">
                            admin@789bet.com
                          </div>
                        </a>
                      </li>

                      <li className="btn-list_link">
                        <a href="https://facebok789.com" target="_blank">
                          <div className="btn-thumb">
                            <img
                              className="w-100"
                              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/fb-icon-789.png"
                              alt=""
                            />
                          </div>

                          <div className="btn-name fw-bold pt-2">Facebook</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="che-do">
                    <a
                      href="https://cskh77.com/cskh/taiapp"
                      target="_blank"
                      className="">
                      <img
                        className="w-100"
                        src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-tai-app.png"
                      />
                    </a>
                  </div>

                  <div className="d-flex download-app-km">
                    <div className="w-bottom-btn">
                      <a
                        href="https://cskh77.com/cskh/chedovip"
                        target="_blank">
                        <img
                          className="w-100"
                          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-btn-left.png"
                        />
                        <span className="btn-tt pr-3">CHẾ ĐỘ VIP</span>
                      </a>
                    </div>
                    <div className="w-bottom-btn">
                      <a
                        href="https://cskh77.com/cskh/danhsachKM"
                        target="_blank">
                        <img
                          className="w-100"
                          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-btn-right.png"
                        />
                        <span className="btn-tt pl-3">KHUYẾN MÃI</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="link-redirect">
                  <a
                    href="https://cskh77.com/cskh/linktong"
                    target="_blank"
                    className="bottom-truy-cap sp-btn-tab">
                    <span>LINH TRUY CẬP 1</span>
                  </a>
                  <a
                    href="https://cskh77.com/cskh/linktong"
                    target="_blank"
                    className="bottom-truy-cap sp-btn-tab">
                    <span>LINH TRUY CẬP 2</span>
                  </a>
                  <a
                    href="https://cskh77.com/cskh/linktong"
                    target="_blank"
                    className="bottom-truy-cap sp-btn-tab">
                    <span>LINH TRUY CẬP 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="show-btn-fix">
          <img
            className="img-active"
            src="assets/images/icon-redirect-ft-btn.png"
            alt="789bet"
          />
        </div> */}

        <div
          id="box-iframe"
          className="fixed fixed-custom bottom-[0px] right-[0px] cursor-move z-50 ui-draggable"
          style={{
            position: "fixed",
            width: "350px",
            backgroundColor: " #fff",
            paddingTop: "50px",
            right: "0px",
            bottom: "0px",
            cursor: "move",
            display: "none",
          }}>
          <div id="draggable" className=" cursor-move z-50 relative">
            <span
              id="btn-tawk-small"
              className="close-btn cursor-pointer z-30"
              style={{ display: "none" }}>
              x
            </span>

            <span id="btn-reload" className="cursor-pointer z-30">
              <img src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-reload.png" />
            </span>

            <div id="show-iframe-open">
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame52-16">
                <p>
                  <iframe
                    className="chat-dialog"
                    frameBorder="0"
                    id="tawkto-km-sp"
                    scrolling="no"
                    src="https://cskh77.com/cskh/hotrokhuyenmai"
                    title="chat widget"
                    style={{ display: "none" }}></iframe>
                </p>
              </div>
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame52-12">
                <p>
                  <iframe
                    className="chat-dialog"
                    frameBorder="0"
                    id="tawkto-km-sp"
                    scrolling="no"
                    src="https://cskh77.com/cskh/hotronaptien"
                    style={{ display: "none" }}></iframe>
                </p>
              </div>
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame52-13">
                <p>
                  <iframe
                    className="chat-dialog"
                    frameBorder="0"
                    id="tawkto-km-sp"
                    scrolling="no"
                    src="https://cskh77.com/cskh/hotroruttien"
                    style={{ display: "none" }}></iframe>
                </p>
              </div>
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame52-38">
                <p>
                  <iframe
                    className="chat-dialog"
                    frameBorder="0"
                    id="tawkto-km-sp"
                    scrolling="no"
                    src="https://cskh77.com/cskh/hotrodoithongtin"
                    style={{ display: "none" }}></iframe>
                </p>
              </div>
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame67-39">
                <p>
                  <iframe
                    className="chat-dialog"
                    frameBorder="0"
                    id="tawkto-km-sp"
                    scrolling="no"
                    src="https://cskh77.com/cskh/homthugopy"
                    style={{ display: "none" }}></iframe>
                </p>
              </div>
              <div
                className="code-iframe sp-btn-tab"
                data-content-tab="SpIfame52-44">
                <iframe
                  className="chat-dialog"
                  id="tawkto-km-sp"
                  src="https://cskh77.com/cskh/hotronaptien_new_v2"
                  title="chat widget"
                  style={{ display: "none" }}></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Form Handle Check Link Trust --> */}
        <div className="wp-form-mp">
          <div className="layout-form"></div>
          <div className="form-search">
            <img
              className="icon-close-form-step2 icon-close-step-2"
              src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/CSKH/icon-close.png"
            />

            <div className="message-rp" id="message"></div>
          </div>
        </div>
      </div>
    </>
  );
}
