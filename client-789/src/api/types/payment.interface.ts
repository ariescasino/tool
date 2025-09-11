export interface PaymentHistoryReq {
  page: number;
  limit: number;
  dateFrom: string;
  dateTo: string;
  type?: string;
}
