/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import "./index.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FakerLoading({ children }: any) {
  const [renderLoading, setRenderLoading] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (
      pathname.startsWith("/mobile/change-password") ||
      pathname.startsWith("/mobile/user-security")
    ) {
      setRenderLoading(false);
    } else {
      const timer = setTimeout(() => {
        setRenderLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Error registering Service Worker:", error);
        });
    }
  }, []);


  if (
    pathname.startsWith("/mobile/change-password") ||
    pathname.startsWith("/mobile/user-security")
  ) {
    return children;
  }
  if (renderLoading) {
    return (
      <div>
        <div
          id="spinner"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
            zIndex: 99999,
          }}
          className="hidden md:block">
          <div style={{ color: "#000" }} className="la-ball-atom la-3x">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="block md:hidden w-screen h-screen">
          <div className="absolute top-4 flex h-[13%] w-full items-center justify-center">
            <Image
              className="max-h-full max-w-full"
              width="960"
              height="600"
              src="/images/fake-loading/logo.png"
              sizes="100vw"
              alt="Logo"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <Image
            src="/images/fake-loading/splash-new.jpg"
            alt="loading"
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
      </div>
    );
  } else {
    return children;
  }
}
