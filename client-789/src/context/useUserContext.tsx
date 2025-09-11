/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import apiClient from "@/api/apiClient";
import { ConfigAuthEndPoint } from "@/api/services/contants";
import { useRouter } from "next/navigation";
import useWebSocket from "@/hooks/useWebSocket";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { QueryClient } from "@tanstack/react-query";
import { clearToken, getTokenFromLocalStorage, setTokenToLocalStorage } from "@/lib/storage/tokenStorage";
const queryClient = new QueryClient();

type UserContextType = {
  user: null | Record<string, any>;
  loginUser: (userInfo: any, token: string) => void;
  logoutUser: () => void;
  checkTokenInSession: () => Promise<void>;
  isFetching: boolean;
  loadingGame: boolean;
  setLoadingGame: (value: boolean) => void;
  balance: number;
  refreshBalance: () => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: any) {
  const router = useRouter();
  const [user, setUser] = useState<null | Record<string, any>>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isFetching, setIsFetching] = useState(false);
  const [token, setToken] = useState(() => {
    const storedUser = localStorage.getItem("token");
    return storedUser ? JSON.parse(storedUser).token : null;
  });
  const [firstTime, setFirstTime] = useState(true);
  const [loadingGame, setLoadingGame] = useState(false);
  const [balance, setBalance] = useState(0);

  const { messages, sendMessage } = useWebSocket();

  const loginUser = (userInfo: any, token: string) => {
    setUser(userInfo);
    setTokenToLocalStorage(token);
    setBalance(userInfo?.balance || 0);
    sendMessage(JSON.stringify({ authentication: { token: token } }));
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // Xóa khỏi localStorage nếu user là null
    }
  }, [user]);

  const logoutUser = () => {
    clearToken();
    setUser(null);
    router.push("/");
    queryClient.clear();
  };

  const refreshBalance = async () => {
    const token = await getTokenFromLocalStorage();

    if (token) {
      setIsFetching(true);
      await apiClient
        .get<any>({
          url: ConfigAuthEndPoint.GET_BALANCE,
        })
        .then((response) => {
          setBalance(response?.data?.data);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  };

  const checkTokenInSession = async () => {
    // const token = user?.token;
    const token = localStorage.getItem("token");
    setIsFetching(true);
    if (token) {
      await apiClient
        .get<any>({
          url: ConfigAuthEndPoint.ME,
        })
        .then((response) => {
          const { user } = response.data;

          setUser(user);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    } else {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (token && firstTime) {
      sendMessage(JSON.stringify({ authentication: { token: token } }));
      setFirstTime(false);
    }
  }, [token]);

  useEffect(() => {
    //Nhận dữ liệu từ socket
    if (messages && messages.user) {
      setUser({ ...user, ...messages.user });
    }

    if (messages?.method === "updateBalance") {
      setUser({ ...user, balance: messages?.data || 0 });
    }
  }, [messages]);

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        isFetching,
        checkTokenInSession,
        setLoadingGame,
        loadingGame,
        refreshBalance,
        balance,
      }}
    >
      {children}
      {loadingGame && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
            }
          />
        </div>
      )}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
