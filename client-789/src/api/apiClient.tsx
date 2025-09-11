/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { setupInterceptors } from './interceptors';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  shouldNotify?: boolean;
}

const axiosInstance = axios.create({
  baseURL: "/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: true,
});

setupInterceptors(axiosInstance);

class ApiClient {
  get<T = any>(
    config: AxiosRequestConfig,
    options?: { shouldNotify: boolean }
  ): Promise<T> {
    return this.request({
      ...config,
      method: "GET",
      withCredentials: false,
      shouldNotify: options?.shouldNotify,
    });
  }

  post<T = any>(
    config: AxiosRequestConfig,
    options?: { shouldNotify: boolean }
  ): Promise<T> {
    return this.request({
      ...config,
      method: "POST",
      withCredentials: false,
      shouldNotify: options?.shouldNotify,
    });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT", withCredentials: false });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: "DELETE",
      withCredentials: false,
    });
  }

  private request<T = any>(config: CustomAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<any>>(config)
        .then((res: AxiosResponse<any>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}
  

export default new ApiClient();
