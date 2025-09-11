/* eslint-disable import/no-anonymous-default-export */
import { API_GATE } from "@/constant/gate";
import apiClient from "../apiClient";
import { SignInReq } from "../types/auth.interface";
import { ConfigAuthEndPoint, ConfigMailBoxEndPoint } from "./contants";
import querystring from "querystring";


const signin = (data: SignInReq) =>
  apiClient.post<any>({
    url: ConfigAuthEndPoint.LOGIN,
    data: { ...data, gate: API_GATE },
  });

const me = () => apiClient.get<any>({ url: ConfigAuthEndPoint.ME });

const changePassword = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  const res = await apiClient.post<any>({
    url: ConfigAuthEndPoint.CHANGE_PASSSWORD,
    data,
  },{shouldNotify: false}
);
  return res?.data;
};

const getWithdrawalCondition = async () => {
  const res = await apiClient.get<any>({
    url: ConfigAuthEndPoint.WITH_DRAWAL_CONDITION,
  });
  return res?.data?.data;
};

const updateUserInfo = async (data: { name: string }) => {
  const res = await apiClient.post<any>({
    url: ConfigAuthEndPoint.UPDATE_USER_INFO,
    data,
  });
  return res?.data;
};

const updateWithdrawPassword = async (data: {
  oldWithdrawPassword: string;
  newWithdrawPassword: string;
}) => {
  const res = await apiClient.post<any>({
    url: ConfigAuthEndPoint.UPDATE_WITHDRAWAL_PASSWORD,
    data,
  },
  { shouldNotify: false }

);
  return res?.data;
};

const getMailBoxes = async (data: {
  page: number;
  size: number;
  mailTypes: string[];
}) => {
  const queryString = querystring.encode(data);
  const res = await apiClient.get<any>({
    url: `${ConfigMailBoxEndPoint.MY_MAIL}?${queryString}`,
  });
  return res?.data;
};


export const getBalance = async () => {
  const res = await apiClient.get<any>({ url: ConfigAuthEndPoint.GET_BALANCE });
  return res?.data?.data;
};

export default {
  signin,
  me,
  changePassword,
  getWithdrawalCondition,
  updateWithdrawPassword,
  updateUserInfo,
  getMailBoxes,
};
