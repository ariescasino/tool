/* eslint-disable import/no-anonymous-default-export */
import apiClient from "../apiClient";
import { CurrentVipInfo } from "./contants";

const getCurrentVipInfo = async () => {
  const response = await apiClient.get({
    url: CurrentVipInfo.CURRENT_VIP_INFO,
  });
  return response?.data?.data;
};

const getUpgradeHistory = async () => {
    const response = await apiClient.get({
      url: CurrentVipInfo.UPGRADE_HISTORY,
    });
    return response?.data?.data;
  };

export default {
  getCurrentVipInfo,
  getUpgradeHistory
};
