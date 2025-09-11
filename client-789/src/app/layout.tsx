/* eslint-disable @next/next/no-page-custom-font */
import Header from "@/components/Header";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Providers from "@/utils/provider";
import { ConfigProvider } from "antd";
import { HydrationProvider, Client } from "react-hydration-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { UserProvider } from "@/context/useUserContext";
import ProvidersServices from "@/api/QueryProvider";
import { ScrollProvider } from "@/context/useScrollContext";
import HistoryList from "@/components/HistoryList";
import Aside from "@/components/Aside";
import FakerLoading from "@/components/FakeLoading";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CheckPathname from "@/components/CheckPathname";
import { FavoriteGameProvider } from "@/context/useFavoriteContext";
import SwiperSlideComponent from "@/components/SwiperSlideComponent";
import { Roboto } from "next/font/google";
import { MenuProvider } from "@/context/useMenuContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

config.autoAddCss = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "789BET Link Mới 789b.com | 789b1.com không chặn",
    template: "%s | 789BET ",
  },
  description: "",
  referrer: "no-referrer",
  robots: "index, follow",
  openGraph: {
    type: "website",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://metatags.io/",
    description: "",
  },
  icons: {
    shortcut: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:description": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.error = () => {};

  return (
    <html lang="en" translate="no">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      </head>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: `${roboto.style.fontFamily}, "Helvetica Neue", sans-serif`,
          },
        }}>
        <ScrollProvider>
          <body
            className={`flex flex-col min-h-screen h-full items-center max-md:h-screen max-md:overflow-hidden`}
            suppressHydrationWarning={true}>
            <GoogleAnalytics />
            <ProvidersServices>
              <HydrationProvider>
                <Client>
                  <FakerLoading>
                    <UserProvider>
                      <FavoriteGameProvider>
                        <MenuProvider>
                          <Header />
                          <Aside />
                          <CheckPathname>{children}</CheckPathname>
                          <SwiperSlideComponent />
                          <Footer />
                          <HistoryList />
                        </MenuProvider>
                      </FavoriteGameProvider>
                    </UserProvider>
                  </FakerLoading>
                </Client>
              </HydrationProvider>
            </ProvidersServices>
          </body>
        </ScrollProvider>
      </ConfigProvider>
    </html>
  );
}
