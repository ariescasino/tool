import { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { message as Message } from "antd";
import { openNotification } from "@/utils/check";
import { SecurityProvider } from '@/lib/security/SecurityProvider';
import { protectionLayer } from '@/lib/security/protectionLayer';
import { clearToken, getTokenFromLocalStorage } from '@/lib/storage/tokenStorage';
import { API_GATE } from '@/constant/gate';
import { hashMd5 } from '@/utils';

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = await getTokenFromLocalStorage();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Thêm security headers
      if (config.url) {
        const urlPath = config.url.toLowerCase();
        const gate = (API_GATE).toLowerCase();
        const timeStamp = Date.now();
 
        const securityProvider = SecurityProvider.getInstance();
        const rawKey = securityProvider.getSecurityKey();
        const protectedKey = protectionLayer.verify(rawKey);
        const finalKey = protectionLayer.clean(protectedKey);
        const hash = hashMd5(urlPath + gate + timeStamp + finalKey)
        config.headers['x-requested-gate'] = API_GATE
        config.headers['x-requested-timestamp'] = timeStamp
        config.headers['x-requested-requested-id'] = hash
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      const config = res.config as InternalAxiosRequestConfig & {
        shouldNotify?: boolean;
      };
      const shouldNotify = config.shouldNotify ?? true;

      if (!res.data) {
        throw new Error("Yêu cầu thất bại, vui lòng thử lại sau");
      }

      if (res?.data?.status === false && shouldNotify && res?.data?.msg !== "SUCCESS") {
        openNotification({
          type: "error",
          message: res?.data?.msg,
        });
      }

      const { data, message, error, user, status, msg } = res.data;
      if (data || user || status || msg) return res;
      if (error) throw new Error(message || "Yêu cầu thất bại");
      throw new Error(message || "Yêu cầu thất bại");
    },
    (error: AxiosError) => {
      const { response, message } = error || {};

      if (response?.status === 401) {
        window.location.href = "/logout";
        clearToken();
      } else if (error.code === "ECONNABORTED" && message.includes("timeout")) {
        Message.error("Thao tác thất bại, lỗi hệ thống!");
      }

      return Promise.reject(error);
    }
  );
};
