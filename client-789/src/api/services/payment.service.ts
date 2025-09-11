import { config } from "@fortawesome/fontawesome-svg-core";
/* eslint-disable import/no-anonymous-default-export */
import apiClient from "../apiClient";
import { ConfigPaymentEndPoint } from "../services/contants";
import { PaymentHistoryReq } from "../types/payment.interface";

const getListPaymentType = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.LIST_PAYMENT_TYPE,
  });
  return response?.data?.data;
};

const getListBankIn = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.LIST_BANK_IN,
  });
  return response?.data?.data;
};

const getListBankOut = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.LIST_BANK_OUT,
  });
  return response?.data?.data;
};

const getBankRequest = async (bankCode: string, amount: string) => {
  const response = await apiClient.get({
    url: `${ConfigPaymentEndPoint.BANK_REQUEST}?bankCode=${bankCode}&amount=${amount}`,
  });
  return response?.data;
};

const getMomoRequest = async (amount: string) => {
  const response = await apiClient.get({
    url: `${ConfigPaymentEndPoint.MOMO_REQUEST}?amount=${amount}`,
  });
  return response?.data;
};

const getCardRequest = ({
  cardNumber,
  serialNumber,
  cardValue,
  telco,
}: {
  cardNumber: number;
  serialNumber: number;
  cardValue: number;
  telco: number;
}) =>
  apiClient.get({
    url: `${ConfigPaymentEndPoint.CARD_REQUEST}?cardNumber=${cardNumber}&serialNumber=${serialNumber}&cardValue=${cardValue}&telco=${telco}`,
  });

const getListCardType = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.LIST_CARD_TYPE,
  });
  return response?.data;
};

const getAllVNBanks = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.LIST_ALL_BANK_VN,
  });
  return response?.data?.data;
};

const getAllBankUser = async () => {
  const response = await apiClient.get({
    url: ConfigPaymentEndPoint.GET_ALL_BANK_USER,
  });
  return response?.data?.data;
};

const addBankUserInfo = async (data: {
  bankCode: string;
  bankBranch: string;
  bankAccountName: string;
}) => {
  const response = await apiClient.post({
    url: ConfigPaymentEndPoint.ADD_BANK_USER_INFO,
    data,
  });
  return response?.data;
};

const bankOutRequest = async (data: {
  amount: number;
  bankUserId: string;
  withdrawPassword: string;
}) => {
  const response = await apiClient.post({
    url: ConfigPaymentEndPoint.BANK_OUT_REQUEST,
    data,
  });
  return response?.data;
};

const sendCryptoTrx = async (data: { trxId: number; network: string }) => {
  const response = await apiClient.post({
    url: ConfigPaymentEndPoint.SEND_CRYPTO_TRX,
    data,
  });
  return response?.data;
};

const getUsdtPrice = async () => {
  const response = await apiClient.get(
    {
      url: ConfigPaymentEndPoint.GET_USDT_PRICE,
    },
    { shouldNotify: false }
  );
  return response?.data?.data;
};

const getCryptoInfo = async (data: { network: string }) => {
  const response = await apiClient.get({
    url: `${ConfigPaymentEndPoint.GET_CRYTO_TO_INFO}?network=${data.network}`,
  },
  { shouldNotify: false }
);
  return response?.data.data;
};

const getPaymentHistory = async (data: PaymentHistoryReq) => {
  const res = await apiClient.get<any>({
    url: ConfigPaymentEndPoint.PAYMENT_HISTORY,
    params: data,
  });
  return res?.data;
};

export default {
  getListPaymentType,
  getListBankIn,
  getListBankOut,
  getBankRequest,
  getMomoRequest,
  getCardRequest,
  getListCardType,
  getAllVNBanks,
  addBankUserInfo,
  getAllBankUser,
  bankOutRequest,
  sendCryptoTrx,
  getUsdtPrice,
  getCryptoInfo,
  getPaymentHistory,
};
