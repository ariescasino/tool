/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import NavigationGameComponent from "@/components/NavigationGame";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CMDGame() {
  const searchParam = useSearchParams();
  const url = searchParam.get("url");
  const [linkGame, setLinkGame] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (url) {
      setLinkGame(url);
    }
  }, [url]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <NavigationGameComponent>
    <div className="w-full h-full flex flex-col justify-center items-center">
      {!iframeLoaded && (
        <div className="text-center text-3xl font-sans text-black mt-8">
          Trò chơi đang tải xuống
        </div>
      )}
      <iframe
        className="w-full h-full min-h-screen"
        onLoad={handleIframeLoad}
        src={linkGame}
      />
    </div>
    </NavigationGameComponent>
  );
}
