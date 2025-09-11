/* eslint-disable react-hooks/exhaustive-deps */
// hooks/useWebSocket.ts
import { useEffect, useState, useCallback } from "react";

const useWebSocket = (url?: string, maxRetries?: number) => {
  url = url ? url : "wss://shbet50.xyz/socket/connect";
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<any>(null);
  const [retryCount, setRetryCount] = useState(0);

  const connectWebSocket = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setRetryCount(0); // Reset lại số lần thử lại khi kết nối thành công
    };

    ws.onmessage = (event) => {
      setMessages(JSON.parse(event.data));
    };

    ws.onclose = () => {

      // Nếu maxRetries là undefined, cho phép thử lại không giới hạn
      // if (maxRetries === undefined || retryCount < maxRetries) {
      //   setTimeout(() => {
      //     setRetryCount((prev) => prev + 1);
      //     connectWebSocket();
      //   }, 60000); // Thời gian chờ giữa các lần thử lại là 20 giây
      // } else {
      //   console.log("Reached max retries. Stopping reconnect attempts.");
      // }
    };

    ws.onerror = (event) => {
      console.error("WebSocket error", event);
    };

    setSocket(ws);
  }, [url, retryCount, maxRetries]);

  useEffect(() => {
    connectWebSocket();

    return () => {
      socket?.close();
    };
  }, [connectWebSocket]);

  const sendMessage = (message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  };

  return { socket, messages, sendMessage };
};

export default useWebSocket;
