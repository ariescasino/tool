"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1, // 失败重试次数
          // cacheTime: 60_000, // 缓存有效期 5m
          staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
          refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
          refetchOnReconnect: false, // 禁止重新连接时重新获取数据
          refetchOnMount: false, // 禁止组件挂载时重新获取数据
          // cacheTime: 5,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}

export default Providers;
