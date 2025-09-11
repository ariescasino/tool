import { TRANSACTION_TYPE_ENUM } from "@/constant";

export type IInfo = {
  id: string;
  code: string;
  rate: number;
  status: "active" | string;
  allowCashout: boolean;
  cashoutRate: number;
};
export type IItemBankIn = {
  bin: string;
  name: string;
  shortName: string;
};

export interface DataExport {
  id: string;
  username: string;
  amount: number;
  originalBalance: number;
  subBalance: number;
  platformId: any;
  isRefund: boolean;
  description: string;
  referenceId: string;
  createdAt: string;
  type: keyof typeof TRANSACTION_TYPE_ENUM;
  isAuthData: boolean;
  updatedAt: string;
  user_id: string;
}
