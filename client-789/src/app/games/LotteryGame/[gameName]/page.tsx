"use client";

import { useGetIframeGameByGameName } from "@/hooks/useGetGameByGameName";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SportGame() {
  const { gameName } = useParams<{ gameName: string }>();
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const { dataGame, isLoading, isFetching, refetch, isError } = useGetIframeGameByGameName(
    gameName,
    "lottery",
  );

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center bg-black">
      {isFetching ||
        isLoading ||
        (!iframeLoaded && (
          <div className="text-center text-3xl font-sans text-white mt-20">
            Trò chơi đang tải xuống
          </div>
        ))}
      <iframe
        className="w-full h-full min-h-screen"
        src={dataGame?.data}
        onLoad={handleIframeLoad}
      />
      {isError && (
        <div className="text-center text-3xl font-sans text-white mt-20">Trò chơi đang bảo trì</div>
      )}
    </div>
  );
}
